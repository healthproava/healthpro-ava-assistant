import React from 'react';
import PortalLayout from '../../components/portal/PortalLayout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from 'lucide-react';

export default function CalendarPage() {
  return (
    <PortalLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Calendar</h1>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed rounded-lg">
                <Calendar className="h-12 w-12 text-muted-foreground" />
                <p className="mt-4 text-muted-foreground">Calendar functionality is coming soon.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </PortalLayout>
  );
}
