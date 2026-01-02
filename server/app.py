import os
from dotenv import load_dotenv
from flask import Flask, jsonify

# Debug: Print current working directory and environment variables
print("Current working directory:", os.getcwd())
print("Environment variables:")
for var in ['EMAIL_USER', 'EMAIL_PASSWORD', 'ADMIN_EMAIL']:
    print(f"{var}: {'Set' if os.getenv(var) else 'Not set'}")

# Load environment variables from .env file in the current directory
env_path = os.path.join(os.path.dirname(__file__), '.env')
print(f"Loading .env from: {env_path}")
load_dotenv(env_path)
from flask_cors import CORS
from extensions import db

# Load environment variables from .env file
load_dotenv()

def create_app():
    app = Flask(__name__)
    
    # Enable CORS with specific configuration
    CORS(
        app,
        resources={
            r"/api/*": {
                "origins": ["http://localhost:3000"],
                "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
                "allow_headers": ["Content-Type", "Authorization"],
                "supports_credentials": True,
                "expose_headers": ["Content-Type", "X-CSRFToken"]
            }
        },
        supports_credentials=True
    )

    # Configuration
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'  # Using SQLite for simplicity
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    
    # Initialize extensions
    db.init_app(app)
    
    # Create tables
    with app.app_context():
        db.create_all()
    
    # Register blueprints
    from routes import api_bp
    app.register_blueprint(api_bp, url_prefix='/api')
    
    return app

# Create the application instance
app = create_app()

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)