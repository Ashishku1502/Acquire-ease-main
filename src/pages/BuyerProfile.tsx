import { Helmet } from "react-helmet-async";
import { useParams, useNavigate } from "react-router-dom";
import { buyers } from "@/data/buyers";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

export default function BuyerProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const buyer = buyers.find((b) => b.id === id);

  if (!buyer) return <div>Buyer not found.</div>;

  const connect = () => {
    toast({ title: "Connection sent", description: `${buyer.name} will receive your intro.` });
  };

  return (
    <div className="max-w-5xl mx-auto animate-enter">
      <Helmet>
        <title>{buyer.name} – Buyer Profile</title>
        <meta name="description" content={`Review ${buyer.name}'s criteria, experience, and contact.`} />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : `/buyers/${buyer.id}`} />
      </Helmet>

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">{buyer.name}</h1>
        <div className="flex gap-2">
          <Button variant="hero" onClick={connect}>Connect</Button>
          <Button variant="outline" onClick={() => navigate(-1)}>Back</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="font-semibold">Overview</div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {buyer.sectors.map((s) => <Badge key={s} variant="outline">{s}</Badge>)}
            </div>
            <div className="grid gap-2 sm:grid-cols-2 text-sm">
              <div><span className="text-muted-foreground">Location:</span> {buyer.location}</div>
              <div><span className="text-muted-foreground">Deal size:</span> {buyer.dealSize}</div>
              <div><span className="text-muted-foreground">Timeline:</span> {buyer.timeline}</div>
              <div><span className="text-muted-foreground">Experience:</span> {buyer.experience}</div>
            </div>
            <p className="text-sm text-muted-foreground">{buyer.rationale}</p>
            <div className="flex flex-wrap gap-2">
              {buyer.structures.map((s) => <Badge key={s} variant="secondary">{s}</Badge>)}
              {buyer.tags.map((t) => <Badge key={t} variant="outline">{t}</Badge>)}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="font-semibold">Contact & Preferences</div>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div><span className="text-muted-foreground">Proof of funds:</span> {buyer.proofOfFunds ? 'Verified' : 'Pending'}</div>
            <div><span className="text-muted-foreground">Preferred structures:</span> {buyer.structures.join(', ')}</div>
            <div><span className="text-muted-foreground">Tags:</span> {buyer.tags.join(', ')}</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
