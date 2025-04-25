
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const ThresholdResults = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
        <div className="flex-1">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Summary</h3>
              <div className="space-y-2">
                <p>Selected Date: {date?.toLocaleDateString()}</p>
                <p>Total Claims: 0</p>
                <p>Rejected Claims: 0</p>
                <p>Rejection Rate: 0%</p>
              </div>
              <Button className="w-full mt-4">Generate Report</Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Rejected Claims</h3>
          <div className="text-center text-gray-500">
            No rejected claims found for the selected date.
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThresholdResults;
