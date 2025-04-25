
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";

const ThresholdConfiguration = () => {
  const form = useForm({
    defaultValues: {
      rejectCode: "",
      threshold: "",
      timeframe: "7",
    },
  });

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
            name="timeframe"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Time Frame (days)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Enter number of days..." {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">Save Threshold Configuration</Button>
        </form>
      </Form>
    </div>
  );
};

export default ThresholdConfiguration;
