
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import type { RejectedClaim, ThresholdConfig, ThresholdResult } from "@/types/claims";

const ThresholdResults = () => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(),
  });

  // Dummy data for configurations
  const configurations: ThresholdConfig[] = [
    { id: "1", rejectCode: "70", threshold: 3.5 },
    { id: "2", rejectCode: "75", threshold: 7.0 },
  ];

  // Dummy data for threshold results
  const thresholdResults: ThresholdResult[] = [
    { rejectCode: "70", actualPercentage: 5.0, thresholdPercentage: 3.5, isExceeded: true },
    { rejectCode: "75", actualPercentage: 4.0, thresholdPercentage: 7.0, isExceeded: false },
  ];

  // Dummy data for rejected claims
  const rejectedClaims: RejectedClaim[] = [
    {
      claimNumber: "CLM001",
      carrierCode: "CAR123",
      drugName: "Aspirin",
      dateProcessed: "2024-04-25",
      rejectCode: "70",
    },
    {
      claimNumber: "CLM002",
      carrierCode: "CAR456",
      drugName: "Ibuprofen",
      dateProcessed: "2024-04-25",
      rejectCode: "70",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <Calendar
            mode="range"
            selected={date}
            onSelect={setDate}
            className="rounded-md border pointer-events-auto"
          />
        </div>
        <div className="flex-1">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Configuration Selection</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="all" />
                  <label htmlFor="all">Select All</label>
                </div>
                {configurations.map((config) => (
                  <div key={config.id} className="flex items-center space-x-2">
                    <Checkbox id={config.id} defaultChecked />
                    <label htmlFor={config.id}>Reject Code {config.rejectCode}</label>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4">Generate Report</Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Summary</h3>
          <div className="space-y-2">
            <p>Date Range: {date?.from?.toLocaleDateString()} - {date?.to?.toLocaleDateString()}</p>
            <p>Total Claims: 40</p>
            <p>Rejected Claims: 2</p>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">Threshold Results:</h4>
              {thresholdResults.map((result) => (
                <div 
                  key={result.rejectCode}
                  className={`p-2 rounded ${result.isExceeded ? 'bg-red-100' : 'bg-green-100'}`}
                >
                  <p>
                    Reject Code {result.rejectCode}: {result.actualPercentage}% 
                    (Threshold: {result.thresholdPercentage}%)
                  </p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Rejected Claims</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Claim Number</TableHead>
                <TableHead>Carrier Code</TableHead>
                <TableHead>Drug Name</TableHead>
                <TableHead>Date Processed</TableHead>
                <TableHead>Reject Code</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rejectedClaims.map((claim) => (
                <TableRow key={claim.claimNumber}>
                  <TableCell>{claim.claimNumber}</TableCell>
                  <TableCell>{claim.carrierCode}</TableCell>
                  <TableCell>{claim.drugName}</TableCell>
                  <TableCell>{claim.dateProcessed}</TableCell>
                  <TableCell>{claim.rejectCode}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThresholdResults;
