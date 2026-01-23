import os
import subprocess
import time

ignore_dirs = {'.git', 'node_modules', '.next', 'dist', 'build', 'coverage', '.cache', 'backend/uploads', '.npm-cache', '.npm'}
ignore_extensions = {'.log', '.DS_Store'}

root = "."
success_count = 0
fail_count = 0

print("Starting safe git add...")

for dirpath, dirnames, filenames in os.walk(root):
    # Modify dirnames in-place to skip ignored directories
    dirnames[:] = [d for d in dirnames if d not in ignore_dirs]
    
    # Also skip if we are inside an ignored path structure manually (extra safety)
    if 'node_modules' in dirpath or '.next' in dirpath:
        continue

    for f in filenames:
        if f.endswith('.log') or f == '.DS_Store': continue
        
        full_path = os.path.join(dirpath, f)
        
        try:
            subprocess.check_call(["git", "add", full_path])
            success_count += 1
        except subprocess.CalledProcessError as e:
            print(f"FAILED to add {full_path}: {e}")
            # Try to touch and retry once
            try:
                os.utime(full_path, None)
                time.sleep(0.1)
                subprocess.check_call(["git", "add", full_path])
                print(f"Retry SUCCEEDED for {full_path}")
                success_count += 1
            except Exception:
                print(f"Retry FAILED for {full_path}")
                fail_count += 1

print(f"Finished. Success: {success_count}, Failed: {fail_count}")
