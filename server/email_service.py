import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

def send_contact_email(name, email, message):
    """
    Send an email notification for a contact form submission.
    Uses Gmail SMTP (requires app password for Gmail).
    """
    # Email configuration
    sender_email = os.getenv("EMAIL_USER")  # Your email
    sender_password = os.getenv("EMAIL_PASSWORD")  # App password for Gmail
    receiver_email = os.getenv("ADMIN_EMAIL", sender_email)  # Where to send notifications

    if not sender_email or not sender_password:
        print("Email credentials not set. Skipping email send.")
        return False

    # Create message
    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = receiver_email
    msg['Subject'] = f"New Contact Form Submission from {name}"

    body = f"""
    New contact form submission:

    Name: {name}
    Email: {email}
    Message:
    {message}
    """
    msg.attach(MIMEText(body, 'plain'))

    try:
        # Connect to Gmail SMTP
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(sender_email, sender_password)
        text = msg.as_string()
        server.sendmail(sender_email, receiver_email, text)
        server.quit()
        print("Email sent successfully!")
        return True
    except Exception as e:
        print(f"Failed to send email: {e}")
        return False