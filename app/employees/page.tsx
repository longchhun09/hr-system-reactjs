import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { DataTable } from '@/components/data-table';
import { SiteHeader } from '@/components/site-header';
import employeeData from '@/app/dashboard/data.json';

export default function EmployeesPage() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col p-6">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight">
                    Employees
                  </h1>
                  <p className="text-muted-foreground">
                    Manage and view all employee records in your organization.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="#">Export</Link>
                  </Button>
                  <Button size="sm">Add Employee</Button>
                </div>
              </div>
              <div className="flex-1 flex flex-col min-h-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-xl border bg-card text-card-foreground shadow">
                    <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                      <h3 className="tracking-tight text-sm font-medium">
                        Total Employees
                      </h3>
                    </div>
                    <div className="p-6 pt-0">
                      <div className="text-2xl font-bold">
                        {employeeData.length}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        +2.1% from last month
                      </p>
                    </div>
                  </div>
                  <div className="rounded-xl border bg-card text-card-foreground shadow">
                    <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                      <h3 className="tracking-tight text-sm font-medium">
                        Active Employees
                      </h3>
                    </div>
                    <div className="p-6 pt-0">
                      <div className="text-2xl font-bold">
                        {
                          employeeData.filter((emp) => emp.status === 'Active')
                            .length
                        }
                      </div>
                      <p className="text-xs text-muted-foreground">
                        +0.5% from last month
                      </p>
                    </div>
                  </div>
                  <div className="rounded-xl border bg-card text-card-foreground shadow">
                    <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                      <h3 className="tracking-tight text-sm font-medium">
                        On Leave
                      </h3>
                    </div>
                    <div className="p-6 pt-0">
                      <div className="text-2xl font-bold">
                        {
                          employeeData.filter(
                            (emp) => emp.status === 'On Leave'
                          ).length
                        }
                      </div>
                      <p className="text-xs text-muted-foreground">
                        +1.2% from last month
                      </p>
                    </div>
                  </div>
                  <div className="rounded-xl border bg-card text-card-foreground shadow">
                    <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                      <h3 className="tracking-tight text-sm font-medium">
                        Departments
                      </h3>
                    </div>
                    <div className="p-6 pt-0">
                      <div className="text-2xl font-bold">
                        {
                          new Set(employeeData.map((emp) => emp.department))
                            .size
                        }
                      </div>
                      <p className="text-xs text-muted-foreground">
                        No change from last month
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border bg-card text-card-foreground shadow mt-6">
                  <div className="p-6">
                    <h3 className="text-lg font-medium">Employee Directory</h3>
                    <p className="text-sm text-muted-foreground">
                      Complete list of all employees in the organization
                    </p>
                  </div>
                  <DataTable data={employeeData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
