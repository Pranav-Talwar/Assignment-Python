import { useState, useEffect } from 'react'
import EmployeeTable from './components/EmployeeTable'
import AddEmployeeForm from './components/AddEmployeeForm'
import SearchBar from './components/SearchBar'
import DepartmentFilter from './components/DepartmentFilter'
import { getEmployees, getDepartments } from './services/api'
import type { Employee } from './types'
import './app.css'

function App() {

  const [employees, setEmployees] = useState<Employee[]>([])
  const [departments, setDepartments] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDept, setSelectedDept] = useState('')
  const [showAddForm, setShowAddForm] = useState(false)

  // Load employees on mount
  useEffect(() => {
    loadEmployees()
    loadDepartments()
  }, [])

  // Reload when search or filter changes
  useEffect(() => {
    loadEmployees()
  }, [searchTerm, selectedDept])

  const loadEmployees = async () => {
    setLoading(true)
    try {
      const data = await getEmployees(searchTerm, selectedDept)
      setEmployees(data)
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      alert('Error loading employees: ' + errorMessage)
    }
    setLoading(false)
  }

  const loadDepartments = async () => {
    try {
      const depts = await getDepartments()
      setDepartments(depts)
    } catch (error) {
      console.error('Error loading departments:', error)
    }
  }

  const handleEmployeeAdded = () => {
    loadEmployees()
    setShowAddForm(false)
  }

  const handleEmployeeDeleted = () => {
    loadEmployees()
  }

  const handleEmployeeUpdated = () => {
    loadEmployees()
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Employee Management System
        </h1>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Employees</h2>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              {showAddForm ? 'Cancel' : 'Add Employee'}
            </button>
          </div>

          {showAddForm && (
            <AddEmployeeForm
              onEmployeeAdded={handleEmployeeAdded}
              departments={departments}
            />
          )}

          <div className="flex gap-4 mb-6">
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
            <DepartmentFilter
              departments={departments}
              selectedDept={selectedDept}
              onDeptChange={setSelectedDept}
            />
          </div>

          {loading ? (
            <div className="text-center py-8">Loading...</div>
          ) : (
            <EmployeeTable
              employees={employees}
              onEmployeeDeleted={handleEmployeeDeleted}
              onEmployeeUpdated={handleEmployeeUpdated}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default App
