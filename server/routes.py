from flask import Blueprint, request, jsonify
from models import db, Contact
from email_service import send_contact_email

api_bp = Blueprint('api', __name__)

@api_bp.route('/health', methods=['GET'])
def health_check():
    return jsonify({"status": "ok"})

@api_bp.route('/contact', methods=['POST'])
def submit_contact():
    data = request.get_json()
    if not data:
        return jsonify({"error": "No data provided"}), 400

    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    if not all([name, email, message]):
        return jsonify({"error": "Missing required fields"}), 400

    # Save to database
    contact = Contact(name=name, email=email, message=message)
    db.session.add(contact)
    db.session.commit()

    # Send email notification
    email_sent = send_contact_email(name, email, message)

    return jsonify({
        "success": True,
        "message": "Message received",
        "email_sent": email_sent,
        "data": contact.to_dict()
    })
