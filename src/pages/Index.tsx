
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ThresholdConfiguration from "@/components/ThresholdConfiguration";
import ThresholdResults from "@/components/ThresholdResults";

const Index = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Claims Guardian Alert</h1>
      
      <Tabs defaultValue="configuration" className="w-full">
        <TabsList>
          <TabsTrigger value="configuration">Configuration</TabsTrigger>
          <TabsTrigger value="results">Results</TabsTrigger>
        </TabsList>
        
        <TabsContent value="configuration">
          <Card>
            <CardHeader>
              <CardTitle>Threshold Configuration</CardTitle>
            </CardHeader>
            <CardContent>
              <ThresholdConfiguration />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="results">
          <Card>
            <CardHeader>
              <CardTitle>Threshold Results</CardTitle>
            </CardHeader>
            <CardContent>
              <ThresholdResults />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
