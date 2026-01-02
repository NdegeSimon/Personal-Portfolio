from setuptools import setup, find_packages

setup(
    name="personal_portfolio",
    version="0.1",
    packages=find_packages(),
    install_requires=[
        'Flask==3.1.2',
        'Flask-CORS==6.0.2',
        'Flask-SQLAlchemy==3.1.1',
        'Flask-Migrate==4.1.0',
        'python-dotenv==1.2.1',
        'gunicorn==21.2.0'
    ],
)
