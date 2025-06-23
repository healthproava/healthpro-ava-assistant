import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import PortalLayout from '../../components/portal/PortalLayout';
import { User, MapPin, ChevronRight } from 'lucide-react';

const clients = [
    {
      id: '1',
      name: 'Mary Johnson',
      avatar: "/lovable-uploads/b6e2fabe-745f-4129-a03e-51af7117e3c6.png",
      careType: 'Memory Care',
      status: 'Active',
      dateAdded: '2023-07-15',
      location: 'Phoenix, AZ'
    },
    {
      id: '2',
      name: 'James Wilson',
      avatar: "",
      careType: 'Assisted Living',
      status: 'Assessment',
      dateAdded: '2023-07-20',
      location: 'Scottsdale, AZ'
    },
    {
      id: '3',
      name: 'Elizabeth Brown',
      avatar: "",
      careType: 'Independent Living',
      status: 'Tour Scheduled',
      dateAdded: '2023-07-24',
      location: 'Mesa, AZ'
    },
    {
      id: '4',
      name: 'Robert Davis',
      avatar: "",
      careType: 'Memory Care',
      status: 'Application',
      dateAdded: '2023-08-02',
      location: 'Chandler, AZ'
    },
    {
      id: '5',
      name: 'Susan Miller',
      avatar: "",
      careType: 'Skilled Nursing',
      status: 'Placed',
      dateAdded: '2023-06-12',
      location: 'Gilbert, AZ'
    }
  ];

export default function ClientsPage() {
  const navigate = useNavigate();

  return (
    <PortalLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Clients</h1>
            <Button onClick={() => navigate('/assessment')}>
                <User className="mr-2 h-4 w-4" />
                Add New Client
            </Button>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {clients.map((client) => (
            <Card key={client.id} className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => navigate(`/portal/client/${client.id}`)}>
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={client.avatar} alt={client.name} />
                    <AvatarFallback>{client.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{client.name}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-3 w-3" />
                      {client.location}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="text-right">
                        <Badge variant={
                          client.status === 'Active' ? 'default' :
                          client.status === 'Assessment' ? 'secondary' :
                          client.status === 'Tour Scheduled' ? 'outline' :
                          client.status === 'Placed' ? 'secondary' :
                          'outline'
                        }>
                          {client.status}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">{client.careType}</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PortalLayout>
  );
}
