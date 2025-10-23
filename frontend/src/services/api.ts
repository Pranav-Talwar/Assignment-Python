import axios, { AxiosError } from 'axios'
import type { Employee, Stats } from '../types'

// Use environment variable or default to localhost
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

interface ApiError {
  detail?: string
}

const handleError = (error: unknown, defaultMessage: string): never => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<ApiError>
    throw new Error(axiosError.response?.data?.detail || defaultMessage)
  }
  throw new Error(defaultMessage)
}

export const getEmployees = async (search = '', department = ''): Promise<Employee[]> => {
  try {
    const params: Record<string, string> = {}
    if (search) params.search = search
    if (department) params.department = department

    const response = await axios.get<Employee[]>(`${API_URL}/employees`, { params })
    return response.data
  } catch (error) {
    return handleError(error, 'Failed to fetch employees')
  }
}

export const getEmployee = async (id: number): Promise<Employee> => {
  try {
    const response = await axios.get<Employee>(`${API_URL}/employees/${id}`)
    return response.data
  } catch (error) {
    return handleError(error, 'Failed to fetch employee')
  }
}

export const createEmployee = async (employeeData: Omit<Employee, 'employee_id'>): Promise<Employee> => {
  try {
    const response = await axios.post<Employee>(`${API_URL}/employees`, employeeData)
    return response.data
  } catch (error) {
    return handleError(error, 'Failed to create employee')
  }
}

export const updateEmployee = async (id: number, employeeData: Omit<Employee, 'employee_id'>): Promise<Employee> => {
  try {
    const response = await axios.put<Employee>(`${API_URL}/employees/${id}`, employeeData)
    return response.data
  } catch (error) {
    return handleError(error, 'Failed to update employee')
  }
}

export const deleteEmployee = async (id: number): Promise<{ message: string }> => {
  try {
    const response = await axios.delete<{ message: string }>(`${API_URL}/employees/${id}`)
    return response.data
  } catch (error) {
    return handleError(error, 'Failed to delete employee')
  }
}

export const getDepartments = async (): Promise<string[]> => {
  try {
    const response = await axios.get<string[]>(`${API_URL}/departments`)
    return response.data
  } catch (error) {
    console.error('Failed to fetch departments:', error)
    return []
  }
}

export const getStats = async (): Promise<Stats> => {
  try {
    const response = await axios.get<Stats>(`${API_URL}/stats`)
    return response.data
  } catch (error) {
    return handleError(error, 'Failed to fetch stats')
  }
}
