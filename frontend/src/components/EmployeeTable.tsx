import { useState } from 'react'
import EditEmployeeModal from './EditEmployeeModal'
import { deleteEmployee } from '../services/api'
import type { Employee } from '../types'

interface EmployeeTableProps {
  employees: Employee[]
  onEmployeeDeleted: () => void
  onEmployeeUpdated: () => void
}

function EmployeeTable({ employees, onEmployeeDeleted, onEmployeeUpdated }: EmployeeTableProps) {
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null)

  const handleDelete = async (id: number, name: string) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      try {
        await deleteEmployee(id)
        alert('Employee deleted successfully')
        onEmployeeDeleted()
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error'
        alert('Error deleting employee: ' + errorMessage)
      }
    }
  }

  const handleEdit = (employee: Employee) => {
    setEditingEmployee(employee)
  }

  const handleEditClose = () => {
    setEditingEmployee(null)
  }

  const handleEditSuccess = () => {
    setEditingEmployee(null)
    onEmployeeUpdated()
  }

  if (employees.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No employees found
      </div>
    )
  }

  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Department</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Position</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Salary</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Hire Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {employees.map((emp) => (
              <tr key={emp.employee_id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{emp.employee_id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{emp.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{emp.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{emp.department}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{emp.position}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">${emp.salary.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{emp.hire_date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                  <button
                    onClick={() => handleEdit(emp)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(emp.employee_id, emp.name)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingEmployee && (
        <EditEmployeeModal
          employee={editingEmployee}
          onClose={handleEditClose}
          onSuccess={handleEditSuccess}
        />
      )}
    </>
  )
}

export default EmployeeTable
