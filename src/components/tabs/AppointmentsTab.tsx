import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AccessIndicator } from "@/components/RoleBadge";
import { StatusBadge, getAppointmentStatusVariant } from "@/components/StatusBadge";
import { mockAppointments } from "@/data/mockData";
import { CalendarDays } from "lucide-react";

const typeLabels: Record<string, string> = {
  periodic: "Periodic",
  new_recruit: "New Recruit",
  post_change: "Post-Change",
  manual: "Manual",
};

export default function AppointmentsTab() {
  return (
    <div className="space-y-6">
      <AccessIndicator roles={["doctor", "hr"]} label="Visible to" />

      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Scheduled</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Attendance</TableHead>
                <TableHead>Timing</TableHead>
                <TableHead>Campaign</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockAppointments.map((apt) => (
                <TableRow key={apt.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">{typeLabels[apt.type]}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm">
                    {apt.scheduled_at ? new Date(apt.scheduled_at).toLocaleDateString() : "—"}
                  </TableCell>
                  <TableCell className="text-sm">{apt.due_date}</TableCell>
                  <TableCell>
                    <StatusBadge status={apt.status} variant={getAppointmentStatusVariant(apt.status)} />
                  </TableCell>
                  <TableCell>
                    {apt.attendance ? (
                      <StatusBadge
                        status={apt.attendance}
                        variant={apt.attendance === "present" ? "success" : "destructive"}
                      />
                    ) : (
                      <span className="text-xs text-muted-foreground">—</span>
                    )}
                  </TableCell>
                  <TableCell>
                    {apt.completion_status ? (
                      <StatusBadge
                        status={apt.completion_status}
                        variant={apt.completion_status === "on_time" ? "success" : "warning"}
                      />
                    ) : (
                      <span className="text-xs text-muted-foreground">—</span>
                    )}
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground">
                    {apt.campaign_name || "—"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
