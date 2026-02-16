import { useParams, Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { StatusBadge } from "@/components/StatusBadge";
import { employeeList } from "@/data/employeeList";
import PersonalDataTab from "@/components/tabs/PersonalDataTab";
import FilesDocsTab from "@/components/tabs/FilesDocsTab";
import AppointmentsTab from "@/components/tabs/AppointmentsTab";
import LabTab from "@/components/tabs/LabTab";
import PrescriptionsTab from "@/components/tabs/PrescriptionsTab";
import VitalsTab from "@/components/tabs/VitalsTab";
import {
  User,
  FileText,
  CalendarDays,
  FlaskConical,
  Pill,
  Activity,
  ArrowLeft,
} from "lucide-react";

export default function EmployeeProfile() {
  const { id } = useParams<{ id: string }>();
  const emp = employeeList.find((e) => e.id === id) ?? employeeList[0];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container max-w-6xl py-6">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to list
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
              {emp.first_name[0]}{emp.last_name[0]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-xl font-bold text-foreground">
                  {emp.first_name} {emp.last_name}
                </h1>
                <StatusBadge
                  status={emp.status}
                  variant={emp.status === "active" ? "success" : "muted"}
                />
              </div>
              <p className="text-sm text-muted-foreground mt-0.5">
                {emp.job_title} · {emp.department} · {emp.company}
                {emp.site ? ` – ${emp.site}` : ""}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                ID: {emp.payroll_number}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <main className="container max-w-6xl py-6">
        <Tabs defaultValue="personal" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 h-auto p-1">
            <TabsTrigger value="personal" className="flex items-center gap-1.5 text-xs py-2.5">
              <User className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Personal</span>
            </TabsTrigger>
            <TabsTrigger value="files" className="flex items-center gap-1.5 text-xs py-2.5">
              <FileText className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Files</span>
            </TabsTrigger>
            <TabsTrigger value="appointments" className="flex items-center gap-1.5 text-xs py-2.5">
              <CalendarDays className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Appointments</span>
            </TabsTrigger>
            <TabsTrigger value="lab" className="flex items-center gap-1.5 text-xs py-2.5">
              <FlaskConical className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Lab</span>
            </TabsTrigger>
            <TabsTrigger value="prescriptions" className="flex items-center gap-1.5 text-xs py-2.5">
              <Pill className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Rx</span>
            </TabsTrigger>
            <TabsTrigger value="vitals" className="flex items-center gap-1.5 text-xs py-2.5">
              <Activity className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Vitals</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="personal"><PersonalDataTab /></TabsContent>
          <TabsContent value="files"><FilesDocsTab /></TabsContent>
          <TabsContent value="appointments"><AppointmentsTab /></TabsContent>
          <TabsContent value="lab"><LabTab /></TabsContent>
          <TabsContent value="prescriptions"><PrescriptionsTab /></TabsContent>
          <TabsContent value="vitals"><VitalsTab /></TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
