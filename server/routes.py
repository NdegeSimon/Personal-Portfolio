from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class ContactRequest(BaseModel):
    name: str
    email: str
    message: str


@router.get("/health")
def health_check():
    return {"status": "ok"}


@router.post("/contact")
def submit_contact(data: ContactRequest):
    return {
        "success": True,
        "message": "Message received",
        "data": data
    }
