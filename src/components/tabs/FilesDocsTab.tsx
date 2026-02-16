import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AccessIndicator } from "@/components/RoleBadge";
import { StatusBadge } from "@/components/StatusBadge";
import { mockDocuments } from "@/data/mockData";
import { FileText, Lock, Eye } from "lucide-react";

const docTypeLabels: Record<string, string> = {
  fitness_certificate: "Fitness Certificate",
  sick_leave: "Sick Leave",
  return_to_work: "Return to Work",
  lab_result: "Lab Result",
  imaging: "Imaging",
  external_report: "External Report",
  other: "Other",
};

export default function FilesDocsTab() {
  return (
    <div className="space-y-6">
      <AccessIndicator roles={["doctor"]} label="Full access" />

      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Visibility</TableHead>
                <TableHead>Uploaded By</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockDocuments.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      {doc.title}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-xs text-muted-foreground">
                      {docTypeLabels[doc.doc_type] || doc.doc_type}
                    </span>
                  </TableCell>
                  <TableCell className="text-sm">{doc.date}</TableCell>
                  <TableCell>
                    {doc.visibility_level === "doctor_only" ? (
                      <StatusBadge status="Doctor Only" variant="warning" />
                    ) : (
                      <StatusBadge status="HR Viewable" variant="info" />
                    )}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">{doc.uploaded_by}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
