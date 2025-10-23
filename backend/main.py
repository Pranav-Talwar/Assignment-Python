from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List
import models
import schemas
from database import engine, get_db

models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Employee Management API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Employee Management API - Running"}

@app.get("/employees", response_model=List[schemas.EmployeeResponse])
def get_employees(
    skip: int = 0,
    limit: int = 100,
    search: str = None,
    department: str = None,
    db: Session = Depends(get_db)
):
    query = db.query(models.Employee)

    if search:
        query = query.filter(models.Employee.name.contains(search))

    if department:
        query = query.filter(models.Employee.department == department)

    employees = query.offset(skip).limit(limit).all()
    return employees

@app.get("/employees/{employee_id}", response_model=schemas.EmployeeResponse)
def get_employee(employee_id: int, db: Session = Depends(get_db)):
    employee = db.query(models.Employee).filter(
        models.Employee.employee_id == employee_id
    ).first()

    if not employee:
        raise HTTPException(status_code=404, detail="Employee not found")

    return employee

# Create employee
@app.post("/employees", response_model=schemas.EmployeeResponse)
def create_employee(employee: schemas.EmployeeCreate, db: Session = Depends(get_db)):
    # Check if email already exists
    existing = db.query(models.Employee).filter(
        models.Employee.email == employee.email
    ).first()

    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")

    db_employee = models.Employee(**employee.dict())
    db.add(db_employee)
    db.commit()
    db.refresh(db_employee)
    return db_employee

# Update employee
@app.put("/employees/{employee_id}", response_model=schemas.EmployeeResponse)
def update_employee(
    employee_id: int,
    employee: schemas.EmployeeUpdate,
    db: Session = Depends(get_db)
):
    db_employee = db.query(models.Employee).filter(
        models.Employee.employee_id == employee_id
    ).first()

    if not db_employee:
        raise HTTPException(status_code=404, detail="Employee not found")

    # Update fields
    for key, value in employee.dict().items():
        setattr(db_employee, key, value)

    db.commit()
    db.refresh(db_employee)
    return db_employee

# Delete employee
@app.delete("/employees/{employee_id}")
def delete_employee(employee_id: int, db: Session = Depends(get_db)):
    db_employee = db.query(models.Employee).filter(
        models.Employee.employee_id == employee_id
    ).first()

    if not db_employee:
        raise HTTPException(status_code=404, detail="Employee not found")

    db.delete(db_employee)
    db.commit()
    return {"message": "Employee deleted successfully"}

# Get departments list (for filter dropdown)
@app.get("/departments")
def get_departments(db: Session = Depends(get_db)):
    departments = db.query(models.Employee.department).distinct().all()
    return [dept[0] for dept in departments]

# Basic stats endpoint
@app.get("/stats")
def get_stats(db: Session = Depends(get_db)):
    from sqlalchemy import func

    total = db.query(models.Employee).count()
    avg_salary = db.query(func.avg(models.Employee.salary)).scalar()

    by_dept = db.query(
        models.Employee.department,
        func.count(models.Employee.employee_id),
        func.avg(models.Employee.salary)
    ).group_by(models.Employee.department).all()

    return {
        "total_employees": total,
        "average_salary": round(avg_salary, 2) if avg_salary else 0,
        "by_department": [
            {
                "department": dept,
                "count": count,
                "avg_salary": round(avg, 2)
            }
            for dept, count, avg in by_dept
        ]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
