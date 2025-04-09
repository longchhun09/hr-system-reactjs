import { NextResponse } from 'next/server';
import data from '@/data.json';

// GET /api/employees
export async function GET() {
  return NextResponse.json(data);
}

// POST /api/employees
export async function POST(request: Request) {
  try {
    const newEmployee = await request.json();
    
    // Validate required fields
    if (!newEmployee.name || !newEmployee.position || !newEmployee.department || 
        !newEmployee.hire_date || !newEmployee.status || !newEmployee.salary) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Generate new ID (simple implementation)
    const newId = Math.max(...data.map(emp => emp.id)) + 1;
    const employee = { ...newEmployee, id: newId };
    
    // In a real implementation, you would save to a database
    // For mock purposes, we'll just return the new employee
    return NextResponse.json(employee, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
} 