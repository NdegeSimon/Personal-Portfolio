from flask import Blueprint, request, jsonify
from models import db, Contact
from email_service import send_contact_email

api_bp = Blueprint('api', __name__)

@api_bp.route('/health', methods=['GET'])
def health_check():
    return jsonify({"status": "ok"})

@api_bp.route('/contact', methods=['POST', 'OPTIONS'])
def submit_contact():
    if request.method == 'OPTIONS':
        # Preflight request
        response = jsonify({"status": "preflight"})
        response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
        response.headers.add('Access-Control-Allow-Credentials', 'true')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
        return response
        
    try:
        data = request.get_json()
        
        # Basic validation
        required_fields = ['name', 'email', 'subject', 'message']
        if not all(field in data for field in required_fields):
            response = jsonify({"error": "Missing required fields"})
            response.status_code = 400
            return response
            
        # Create new contact
        new_contact = Contact(
            name=data['name'],
            email=data['email'],
            subject=data['subject'],
            message=data['message']
        )
        
        db.session.add(new_contact)
        db.session.commit()
        
        # Send email (if you have this functionality)
        try:
            send_contact_email(data)
        except Exception as e:
            print(f"Failed to send email: {str(e)}")
            
        response = jsonify({"message": "Message sent successfully!"})
        response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
        response.headers.add('Access-Control-Allow-Credentials', 'true')
        return response
        
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500