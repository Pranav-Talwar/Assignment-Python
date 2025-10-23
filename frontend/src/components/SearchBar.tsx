interface SearchBarProps {
  searchTerm: string
  onSearchChange: (value: string) => void
}

function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  return (
    <div className="flex-1">
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full px-4 py-2 border rounded"
      />
    </div>
  )
}

export default SearchBar
