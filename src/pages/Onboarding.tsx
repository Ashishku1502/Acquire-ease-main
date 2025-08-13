import { Helmet } from "react-helmet-async";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export default function Onboarding() {
  const [step, setStep] = useState(1);

  const next = () => setStep((s) => Math.min(3, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  const submit = (role: 'buyer'|'seller') => {
    toast({ title: "Onboarding saved", description: `Welcome, ${role}!` });
  };

  const Stepper = () => (
    <div className="flex items-center gap-2 mb-4">
      {[1,2,3].map((i) => (
        <div key={i} className={`h-1.5 w-full rounded-full ${i <= step ? 'bg-primary' : 'bg-muted'}`} />
      ))}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto animate-enter">
      <Helmet>
        <title>Onboarding – AcquireEase</title>
        <meta name="description" content="Buyer and seller onboarding questionnaires to tailor your deal experience." />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : '/onboarding'} />
      </Helmet>

      <h1 className="text-3xl font-bold mb-2">Getting started</h1>
      <p className="text-muted-foreground mb-6">Answer a few questions so we can tailor your experience.</p>

      <Tabs defaultValue="buyer" className="space-y-4">
        <TabsList>
          <TabsTrigger value="buyer">Buyer</TabsTrigger>
          <TabsTrigger value="seller">Seller</TabsTrigger>
        </TabsList>

        <TabsContent value="buyer">
          <Card className="shadow-elevated">
            <CardHeader>
              <div className="font-semibold">Buyer questionnaire</div>
              <Stepper />
            </CardHeader>
            <CardContent className="space-y-4">
              {step === 1 && (
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input placeholder="Your name" />
                  <Input placeholder="Company or fund name" />
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Target sectors" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="saas">SaaS</SelectItem>
                      <SelectItem value="services">B2B Services</SelectItem>
                      <SelectItem value="health">Healthcare</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input placeholder="Deal size (e.g. $2M–$10M)" />
                </div>
              )}
              {step === 2 && (
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input placeholder="Geography preference" />
                  <Input placeholder="Timeline (e.g. 60–90 days)" />
                  <div className="flex items-center gap-2">
                    <Checkbox id="proof" />
                    <label htmlFor="proof" className="text-sm">I can provide proof of funds</label>
                  </div>
                  <Input placeholder="Acquisition experience" />
                </div>
              )}
              {step === 3 && (
                <div className="grid gap-4">
                  <Input placeholder="Strategic rationale (short)" />
                  <Input placeholder="Preferred deal structures" />
                </div>
              )}
            </CardContent>
            <CardFooter className="justify-between">
              <Button variant="ghost" onClick={back} disabled={step===1}>Back</Button>
              {step < 3 ? (
                <Button variant="secondary" onClick={next}>Next</Button>
              ) : (
                <Button variant="hero" onClick={() => submit('buyer')}>Finish</Button>
              )}
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="seller">
          <Card className="shadow-elevated">
            <CardHeader>
              <div className="font-semibold">Seller questionnaire</div>
              <Stepper />
            </CardHeader>
            <CardContent className="space-y-4">
              {step === 1 && (
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input placeholder="Your name" />
                  <Input placeholder="Company name" />
                  <Input placeholder="Industry" />
                  <Input placeholder="ARR / Revenue" />
                </div>
              )}
              {step === 2 && (
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input placeholder="Employees" />
                  <Input placeholder="Profitability (EBITDA margin)" />
                  <Input placeholder="Preferred exit timeline" />
                  <Input placeholder="Reason for selling" />
                </div>
              )}
              {step === 3 && (
                <div className="grid gap-4">
                  <Input placeholder="What does a great buyer look like?" />
                  <Input placeholder="Documents you can share (NDA ready?)" />
                </div>
              )}
            </CardContent>
            <CardFooter className="justify-between">
              <Button variant="ghost" onClick={back} disabled={step===1}>Back</Button>
              {step < 3 ? (
                <Button variant="secondary" onClick={next}>Next</Button>
              ) : (
                <Button variant="hero" onClick={() => submit('seller')}>Finish</Button>
              )}
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
