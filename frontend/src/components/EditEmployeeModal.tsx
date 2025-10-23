import { useState } from 'react'
import { updateEmployee } from '../services/api'
import type { Employee, EmployeeFormData } from '../types'

interface EditEmployeeModalProps {
  employee: Employee
  onClose: () => void
  onSuccess: () => void
}

function EditEmployeeModal({ employee, onClose, onSuccess }: EditEmployeeModalProps) {
  const [formData, setFormData] = useState<EmployeeFormData>({
    name: employee.name,
    email: employee.email,
    department: employee.department,
    position: employee.position,
    salary: employee.salary.toString(),
    hire_date: employee.hire_date
  })
  const [submitting, setSubmitting] = useState(false)

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      await updateEmployee(employee.employee_id, {
        name: formData.name,
        email: formData.email,
        department: formData.department,
        position: formData.position,
        salary: parseFloat(formData.salary),
        hire_date: formData.hire_date
      })
      alert('Employee updated successfully!')
      onSuccess()
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      alert('Error updating employee: ' + errorMessage)
    }

    setSubmitting(false)
  }

  return (
    <div className="fixed inset-0  backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Edit Employee</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Department</label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Position</label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Salary</label>
              <input
                type="number"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                required
                step="0.01"
                className="w-full px-3 py-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Hire Date</label>
              <input
                type="date"
                name="hire_date"
                value={formData.hire_date}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
            >
              {submitting ? 'Updating...' : 'Update Employee'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditEmployeeModal
