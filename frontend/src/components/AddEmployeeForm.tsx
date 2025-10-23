import { useState } from 'react'
import { createEmployee } from '../services/api'
import type { EmployeeFormData } from '../types'

interface AddEmployeeFormProps {
  onEmployeeAdded: () => void
  departments: string[]
}

// Form component to add a new employee
function AddEmployeeForm({ onEmployeeAdded }: AddEmployeeFormProps) {
  const [formData, setFormData] = useState<EmployeeFormData>({
    name: '',
    email: '',
    department: '',
    position: '',
    salary: '',
    hire_date: ''
  })
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    // Handle form submission
    try {
      await createEmployee({
        name: formData.name,
        email: formData.email,
        department: formData.department,
        position: formData.position,
        salary: parseFloat(formData.salary),
        hire_date: formData.hire_date
      })
      alert('Employee added successfully!')
      setFormData({
        name: '',
        email: '',
        department: '',
        position: '',
        salary: '',
        hire_date: ''
      })
      onEmployeeAdded()
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      alert('Error adding employee: ' + errorMessage)
    }

    setSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 p-4 rounded mb-6">
      <h3 className="text-lg font-semibold mb-4">Add New Employee</h3>

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

      <button
        type="submit"
        disabled={submitting}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:bg-gray-400"
      >
        {submitting ? 'Adding...' : 'Add Employee'}
      </button>
    </form>
  )
}

export default AddEmployeeForm
