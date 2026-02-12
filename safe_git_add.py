import os
import subprocess
import time

def add_files(directory):
    lock_path = '.git/index.lock'
    for root, dirs, files in os.walk(directory):
        for file in files:
            filepath = os.path.join(root, file)
            # Remove lock if it exists
            if os.path.exists(lock_path):
                try:
                    os.remove(lock_path)
                except:
                    pass
            
            try:
                # Use git add on each file
                result = subprocess.run(['git', 'add', filepath], capture_output=True, text=True)
                if result.returncode != 0:
                    print(f"FAILED to add {filepath}")
                    # If it's a lock file issue, we try again once after removal
                    if "index.lock" in result.stderr:
                        if os.path.exists(lock_path):
                            os.remove(lock_path)
                        subprocess.run(['git', 'add', filepath])
            except Exception as e:
                print(f"ERROR processing {filepath}: {e}")

if __name__ == "__main__":
    target_dirs = [
        'frontend/public/wp-content',
        'frontend/public/wp-includes'
    ]
    for d in target_dirs:
        if os.path.exists(d):
            print(f"Adding files in {d}...")
            add_files(d)
    print("Done adding individual files.")
