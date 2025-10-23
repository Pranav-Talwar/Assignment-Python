from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class EmployeeBase(BaseModel):
    name: str
    department: str
    position: str
    salary: float
    email: EmailStr
    hire_date: str

class EmployeeCreate(EmployeeBase):
    pass

class EmployeeUpdate(EmployeeBase):
    pass

class EmployeeResponse(EmployeeBase):
    employee_id: int
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True
