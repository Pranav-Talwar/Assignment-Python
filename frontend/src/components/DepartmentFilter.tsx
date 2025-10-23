interface DepartmentFilterProps {
  departments: string[]
  selectedDept: string
  onDeptChange: (value: string) => void
}

function DepartmentFilter({ departments, selectedDept, onDeptChange }: DepartmentFilterProps) {
  return (
    <div>
      <select
        value={selectedDept}
        onChange={(e) => onDeptChange(e.target.value)}
        className="px-4 py-2 border rounded"
      >
        <option value="">All Departments</option>
        {/* Map through departments and create an option for each */}
        {departments.map((dept) => (
          <option key={dept} value={dept}>
            {dept}
          </option>
        ))}
      </select>
    </div>
  )
}

export default DepartmentFilter
