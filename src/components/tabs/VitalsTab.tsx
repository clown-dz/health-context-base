import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AccessIndicator } from "@/components/RoleBadge";
import { mockVitals } from "@/data/mockData";
import { Activity } from "lucide-react";

function formatBP(sys?: number, dia?: number) {
  if (sys == null || dia == null) return "—";
  return `${sys}/${dia}`;
}

function formatVal(val?: number, unit?: string) {
  if (val == null) return "—";
  return `${val}${unit || ""}`;
}

export default function VitalsTab() {
  return (
    <div className="space-y-6">
      <AccessIndicator roles={["doctor"]} label="Full access" />

      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>BP (mmHg)</TableHead>
                <TableHead>HR (bpm)</TableHead>
                <TableHead>Weight (kg)</TableHead>
                <TableHead>Height (cm)</TableHead>
                <TableHead>BMI</TableHead>
                <TableHead>Temp (°C)</TableHead>
                <TableHead>SpO₂ (%)</TableHead>
                <TableHead>Measured By</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockVitals.map((v) => (
                <TableRow key={v.id}>
                  <TableCell className="text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-primary" />
                      {new Date(v.measured_at).toLocaleDateString()}
                    </div>
                  </TableCell>
                  <TableCell className="text-sm">{formatBP(v.values.bp_systolic, v.values.bp_diastolic)}</TableCell>
                  <TableCell className="text-sm">{formatVal(v.values.heart_rate)}</TableCell>
                  <TableCell className="text-sm">{formatVal(v.values.weight)}</TableCell>
                  <TableCell className="text-sm">{formatVal(v.values.height)}</TableCell>
                  <TableCell className="text-sm">{formatVal(v.values.bmi)}</TableCell>
                  <TableCell className="text-sm">{formatVal(v.values.temperature)}</TableCell>
                  <TableCell className="text-sm">{formatVal(v.values.spo2)}</TableCell>
                  <TableCell className="text-xs text-muted-foreground">{v.measured_by}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
