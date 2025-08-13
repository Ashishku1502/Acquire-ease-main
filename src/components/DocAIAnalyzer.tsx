import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { FileText } from "lucide-react";

export default function DocAIAnalyzer() {
  const [summary, setSummary] = useState("");

  const handleSummarize = () => {
    // Stubbed AI summary
    setSummary(
      "Summary generated: Revenue steady with 18% YoY growth, 82% gross margin, churn 2.1%/mo. Risks: 1 enterprise dependency (28% ARR), SOC2 renewal due in 3 months. Opportunities: pricing expansion and self-serve onboarding."
    );
  };

  return (
    <Card className="shadow-elevated">
      <CardHeader className="flex-row items-center gap-2">
        <FileText className="h-4 w-4" />
        <div className="font-semibold">AI Document Analyzer</div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid gap-2 sm:grid-cols-2">
          <Input type="file" aria-label="Upload financial document" />
          <Button variant="secondary" onClick={handleSummarize}>Generate summary</Button>
        </div>
        <Textarea
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          placeholder="AI summary will appear here…"
          className="min-h-32"
        />
      </CardContent>
    </Card>
  );
}
