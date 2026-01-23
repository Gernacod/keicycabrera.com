const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
    // If no email credentials are provided, just log the email (for dev)
    if (!process.env.EMAIL_USERNAME || !process.env.EMAIL_PASSWORD) {
        console.log('Skipping email send (no credentials). Subject:', options.subject);
        return;
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_FROM || 'noreply@keicycabrera.com',
        to: options.email,
        subject: options.subject,
        html: options.html
    };

    await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
