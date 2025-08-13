import { Helmet } from "react-helmet-async";
import StageProgress from "@/components/StageProgress";
import DocAIAnalyzer from "@/components/DocAIAnalyzer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const defaultChecklist = [
  { id: 'nda', label: 'NDA executed' },
  { id: 'intro', label: 'Intro call done' },
  { id: 'docs', label: 'Initial docs received' },
  { id: 'loi', label: 'Draft LOI' },
];

export default function DealRoom() {
  const [checks, setChecks] = useState<string[]>(['nda']);

  const stages = [
    { id: 'nda', name: 'NDA', done: checks.includes('nda') },
    { id: 'intro', name: 'Intro Call', done: checks.includes('intro') },
    { id: 'docs', name: 'Docs', done: checks.includes('docs'), current: true },
    { id: 'analysis', name: 'Financial Analysis' },
    { id: 'loi', name: 'LOI' },
    { id: 'dd', name: 'Due Diligence' },
    { id: 'legal', name: 'Legal' },
    { id: 'finance', name: 'Financing' },
    { id: 'close', name: 'Close' },
  ];

  const toggle = (id: string) => {
    setChecks((prev) => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <div className="max-w-6xl mx-auto animate-enter">
      <Helmet>
        <title>Deal Room – AcquireEase</title>
        <meta name="description" content="Guided acquisition workflow with checklists and AI document analysis." />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : '/deal'} />
      </Helmet>

      <h1 className="text-3xl font-bold mb-2">Deal room</h1>
      <p className="text-muted-foreground mb-6">Keep both parties aligned with guided stages.</p>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="font-semibold">Checklist</div>
          </CardHeader>
          <CardContent className="space-y-3">
            <StageProgress stages={stages} />
            <div className="grid gap-2 sm:grid-cols-2">
              {defaultChecklist.map((item) => (
                <label key={item.id} className="flex items-center gap-2 text-sm">
                  <Checkbox checked={checks.includes(item.id)} onCheckedChange={() => toggle(item.id)} />
                  {item.label}
                </label>
              ))}
            </div>
          </CardContent>
        </Card>

        <DocAIAnalyzer />
      </div>
    </div>
  );
}
