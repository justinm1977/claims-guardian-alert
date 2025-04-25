
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Pencil, Trash2 } from "lucide-react";
import type { ThresholdConfig } from "@/types/claims";

const ThresholdConfiguration = () => {
  const form = useForm({
    defaultValues: {
      rejectCode: "",
      threshold: "",
      email: "",
    },
  });

  // Dummy data for existing configurations
  const existingConfigs: ThresholdConfig[] = [
    { id: "1", rejectCode: "70", threshold: 3.5, email: "admin@example.com" },
    { id: "2", rejectCode: "75", threshold: 7.0 },
  ];

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="rejectCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reject Code</FormLabel>
                <FormControl>
                  <Input placeholder="Enter reject code..." {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="threshold"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Threshold Percentage</FormLabel>
                <FormControl>
                  <Input type="number" step="0.1" placeholder="Enter threshold percentage..." {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email (Optional)</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Enter email for notifications..." {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">Save Threshold Configuration</Button>
        </form>
      </Form>

      <div className="border rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4">Existing Configurations</h3>
        <div className="space-y-4">
          {existingConfigs.map((config) => (
            <div key={config.id} className="flex items-center justify-between p-3 bg-muted rounded-md">
              <div>
                <p className="font-medium">Reject Code {config.rejectCode}</p>
                <p className="text-sm text-muted-foreground">Threshold: {config.threshold}%</p>
                {config.email && (
                  <p className="text-sm text-muted-foreground">Email: {config.email}</p>
                )}
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThresholdConfiguration;
