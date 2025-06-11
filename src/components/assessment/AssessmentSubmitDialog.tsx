
import React from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

interface AssessmentSubmitDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
  formData: any;
}

const AssessmentSubmitDialog: React.FC<AssessmentSubmitDialogProps> = ({ 
  open, onOpenChange, onSubmit, isSubmitting, formData 
}) => {
  const { user } = useAuth();

  const handleSubmit = async () => {
    try {
      // Call the original onSubmit handler
      onSubmit();
      
      // Only proceed with API call if we have a user ID
      if (user?.id) {
        try {
          const response = await fetch("https://zpfaojrmcozacnsnwmra.supabase.co/functions/v1/supabase-save-assessment-fn-v1", {
            method: "POST",
            headers: { 
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
              formData,
              userId: user.id
            }),
          });

          if (!response.ok) {
            const errorData = await response.json();
            console.error("Failed to save assessment:", errorData);
            toast.error("Your assessment was submitted but there was an issue saving your data.");
          } else {
            toast.success("Assessment saved successfully!");
          }
        } catch (error) {
          console.error("Error calling save assessment function:", error);
          toast.error("Assessment submitted successfully, but couldn't save to your profile.");
        }
      } else {
        console.warn("No user ID available, assessment not saved to database");
        toast.info("Assessment submitted. Create an account to save your assessments.");
      }
    } catch (error) {
      console.error("Error in assessment submission:", error);
      toast.error("There was a problem submitting your assessment.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Submit Assessment</DialogTitle>
          <DialogDescription>
            Are you ready to submit this client assessment?
          </DialogDescription>
        </DialogHeader>
        <p className="text-sm text-muted-foreground">
          Once submitted, a care advisor will review the assessment and contact you 
          to discuss next steps and potential care options. You'll be able to make 
          updates to this information later if needed.
        </p>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Go Back
          </Button>
          <Button 
            onClick={handleSubmit} 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>Processing...</>
            ) : (
              <>Submit Assessment</>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AssessmentSubmitDialog;
