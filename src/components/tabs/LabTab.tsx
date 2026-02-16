import { Card, CardContent } from "@/components/ui/card";
import { AccessIndicator } from "@/components/RoleBadge";
import { StatusBadge, getLabStatusVariant } from "@/components/StatusBadge";
import { mockLabOrders } from "@/data/mockData";
import { FlaskConical, FileText } from "lucide-react";

export default function LabTab() {
  return (
    <div className="space-y-6">
      <AccessIndicator roles={["doctor"]} label="Full access" />

      <div className="space-y-4">
        {mockLabOrders.map((order) => (
          <Card key={order.id}>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <FlaskConical className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Lab Order – {order.order_date}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Priority: {order.priority} · {order.tests_requested.length} test(s)
                    </p>
                  </div>
                </div>
                <StatusBadge status={order.status} variant={getLabStatusVariant(order.status)} />
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                {order.tests_requested.map((test) => (
                  <span
                    key={test}
                    className="px-2 py-1 text-xs rounded-md bg-accent text-accent-foreground"
                  >
                    {test}
                  </span>
                ))}
              </div>

              {order.notes && (
                <p className="text-xs text-muted-foreground mb-3 italic">{order.notes}</p>
              )}

              {order.result && (
                <div className="border-t pt-3 mt-3 space-y-2">
                  <p className="text-xs font-medium text-foreground flex items-center gap-1.5">
                    <FileText className="h-3.5 w-3.5" /> Results – {order.result.received_date}
                  </p>
                  {order.result.interpretation && (
                    <p className="text-xs text-muted-foreground bg-muted rounded-md p-2">
                      {order.result.interpretation}
                    </p>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
