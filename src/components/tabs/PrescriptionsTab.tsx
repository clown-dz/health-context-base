import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AccessIndicator } from "@/components/RoleBadge";
import { mockPrescriptions } from "@/data/mockData";
import { Pill } from "lucide-react";

export default function PrescriptionsTab() {
  return (
    <div className="space-y-6">
      <AccessIndicator roles={["doctor"]} label="Full access" />

      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Medication</TableHead>
                <TableHead>Dose</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Instructions</TableHead>
                <TableHead>Prescribed</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockPrescriptions.map((rx) => (
                <TableRow key={rx.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Pill className="h-4 w-4 text-primary" />
                      <span className="font-medium text-sm">{rx.medication_name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm">{rx.dose}</TableCell>
                  <TableCell className="text-sm">{rx.duration}</TableCell>
                  <TableCell className="text-xs text-muted-foreground max-w-[200px]">
                    {rx.instructions || "—"}
                  </TableCell>
                  <TableCell className="text-sm">{rx.prescribed_date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
