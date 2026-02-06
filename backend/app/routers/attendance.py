from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app import models, schemas

router = APIRouter(prefix="/attendance")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/")
def mark(att: schemas.AttendanceCreate, db: Session = Depends(get_db)):
    rec = models.Attendance(**att.dict())
    db.add(rec)
    db.commit()
    return rec

@router.get("/{emp_id}")
def get(emp_id: str, db: Session = Depends(get_db)):
    return db.query(models.Attendance).filter(
        models.Attendance.employee_id == emp_id
    ).all()
