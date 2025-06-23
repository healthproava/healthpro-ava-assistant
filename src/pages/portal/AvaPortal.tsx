import React, { useState } from 'react';
import PortalLayout from '@/components/portal/PortalLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import NotesTemplate from '@/components/portal/NotesTemplate';
import { 
  MessageSquare, Search, Send, Map, Building, Calendar, FileText, Settings, 
  Clock, Database, User, Bell, Home, Filter, List, Grid3X3, Sparkles, 
  InfoIcon, CreditCard, Upload, Download, BarChart3, RefreshCw, Mic, 
  Landmark, Lightbulb, X, Wand2, CircleHelp, Copy, Edit, Trash
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AvaPortal = () => {
  const [messageInput, setMessageInput] = useState('');
  const [aiMode, setAiMode] = useState("balanced");
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [autocompleteEnabled, setAutocompleteEnabled] = useState(true);
  const [proactiveEnabled, setProactiveEnabled] = useState(true);
  const [activeContentTab, setActiveContentTab] = useState("chat");
  const { toast } = useToast();
  
  const handleSendMessage = () => {
    if (messageInput.trim() === '') return;
    console.log('Sending message:', messageInput);
    toast({
      title: "Message Sent",
      description: `You said: "${messageInput}"`,
    });
    setMessageInput('');
  };

  const handleActionClick = (action: string) => {
    toast({
      title: "Action Clicked",
      description: `${action} functionality is not yet implemented.`,
    });
  };
  
  const facilities = [
    {
      id: 1,
      name: "Desert Bloom Senior Living",
      type: "Assisted Living & Memory Care",
      location: "Phoenix, AZ",
      rating: 4.8,
      description: "A vibrant community offering personalized care.",
      amenities: ["24/7 Staffing", "Medication Management", "Social Activities"],
      priceRange: "$3,500 - $5,500",
      availableBeds: 7,
      acceptingNew: true
    },
    {
      id: 2,
      name: "Sunrise of Scottsdale",
      type: "Assisted Living",
      location: "Scottsdale, AZ",
      rating: 4.5,
      description: "Upscale assisted living with compassionate staff.",
      amenities: ["Restaurant-style Dining", "Wellness Programs", "Transportation"],
      priceRange: "$4,200 - $6,200",
      availableBeds: 3,
      acceptingNew: true
    },
    // ... more facilities
  ];
  
  const conversation = [
    {
      sender: "ava",
      message: "Hello! How can I assist you today?",
      timestamp: "10:30 AM"
    },
    {
      sender: "user",
      message: "I'm looking for a memory care facility for my mother.",
      timestamp: "10:32 AM"
    },
    // ... more messages
  ];
  
  const suggestedPrompts = [
    "Find assisted living facilities in Scottsdale",
    "What are the best memory care options?",
    "Can you show me facilities with a garden?",
    "What are the costs associated with senior living?"
  ];
  
  const resources = [
    {
      title: "Understanding Memory Care",
      description: "A guide to memory care facilities and services",
      category: "Educational",
      url: "#"
    },
    // ... more resources
  ];
  
  const appointments = [
    {
      id: 1,
      title: "Tour with Mary Johnson",
      facility: "Desert Bloom Senior Living",
      date: "Aug 10, 2023",
      time: "2:30 PM",
      status: "upcoming"
    },
    // ... more appointments
  ];
  
  const clients = [
    {
      id: 1,
      name: "Mary Johnson",
      careNeeds: "Memory Care",
      stage: "Tour Scheduled",
      dateAdded: "Jul 15, 2023"
    },
    // ... more clients
  ];
  
  return (
    <PortalLayout>
      <div className="flex flex-col h-[calc(100vh-12rem)]">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h1 className="text-2xl font-bold">Ava Assistant</h1>
          
          <div className="flex gap-2">
            <Tabs value={activeContentTab} onValueChange={setActiveContentTab} className="w-full md:w-auto">
              <TabsList className="grid grid-cols-5 w-full md:w-auto">
                <TabsTrigger value="chat" className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" />
                  <span className="hidden sm:inline">Chat</span>
                </TabsTrigger>
                <TabsTrigger value="clients" className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">Clients</span>
                </TabsTrigger>
                <TabsTrigger value="notes" className="flex items-center gap-1">
                  <FileText className="h-4 w-4" />
                  <span className="hidden sm:inline">Notes</span>
                </TabsTrigger>
                <TabsTrigger value="calendar" className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span className="hidden sm:inline">Calendar</span>
                </TabsTrigger>
                <TabsTrigger value="settings" className="flex items-center gap-1">
                  <Settings className="h-4 w-4" />
                  <span className="hidden sm:inline">Settings</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
          <div className="md:col-span-2 flex flex-col h-full">
            <Tabs value={activeContentTab} className="flex-1">
              <TabsContent value="chat" className="flex-1 flex flex-col">
                <Card className="flex-1 flex flex-col">
                  <CardHeader className="border-b">
                    {/* ... chat header content */}
                  </CardHeader>
                  <CardContent className="flex-1 p-0">
                    <ScrollArea className="h-[400px] p-4">
                      {/* ... chat messages */}
                    </ScrollArea>
                  </CardContent>
                  <CardFooter className="border-t p-3">
                    <div className="flex w-full items-center gap-2">
                      <Button variant="ghost" size="icon" className="text-muted-foreground" onClick={() => handleActionClick('Voice input')}>
                        <Mic className="h-4 w-4" />
                      </Button>
                      <Input 
                        placeholder="Type your message..." 
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                        className="flex-1"
                      />
                      <Button onClick={handleSendMessage} size="icon">
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
                
                {/* ... suggested prompts */}
              </TabsContent>
              
              <TabsContent value="clients" className="space-y-4">
                {/* ... clients content, making buttons clickable */}
                <Button variant="outline" size="sm" onClick={() => handleActionClick('Add Client')}>
                  <User className="h-4 w-4 mr-2" />
                  Add Client
                </Button>
                {/* ... map through clients and make buttons clickable */}
                 <Button size="sm" variant="outline" onClick={() => handleActionClick('View Client')}>View</Button>
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Ava Assistant Settings</CardTitle>
                    <CardDescription>Customize your AI assistant experience</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* ... a bunch of settings controls */}
                  </CardContent>
                  <CardFooter className="flex flex-col sm:flex-row gap-3 justify-between">
                    <Button variant="outline" className="w-full sm:w-auto" onClick={() => handleActionClick('Export Data')}>
                      <Download className="h-4 w-4 mr-2" />
                      Export My Data
                    </Button>
                    <Button variant="destructive" className="w-full sm:w-auto" onClick={() => handleActionClick('Clear History')}>
                      <Trash className="h-4 w-4 mr-2" />
                      Clear Conversation History
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
            </Tabs>
          </div>
          
          <div className="md:col-span-1">
            {/* ... right sidebar content */}
            <Button size="sm" onClick={() => handleActionClick('View Facility Details')}>
                View Details
            </Button>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
};

export default AvaPortal;
