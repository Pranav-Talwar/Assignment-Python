export interface Employee {
  employee_id: number
  name: string
  email: string
  department: string
  position: string
  salary: number
  hire_date: string
}

export interface EmployeeFormData {
  name: string
  email: string
  department: string
  position: string
  salary: string
  hire_date: string
}

export interface Stats {
  total_employees: number
  departments: number
  average_salary: number
}
