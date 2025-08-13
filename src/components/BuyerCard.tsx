import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, CheckCircle2, XCircle } from "lucide-react";
import type { Buyer } from "@/data/buyers";

type Props = {
  buyer: Buyer;
  onAccept?: (id: string) => void;
  onReject?: (id: string) => void;
  onView?: (id: string) => void;
};

export default function BuyerCard({ buyer, onAccept, onReject, onView }: Props) {
  return (
    <Card className="hover-scale shadow-elevated">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-md bg-gradient-brand" aria-hidden />
            <div>
              <div className="font-semibold flex items-center gap-2">
                <Building2 className="h-4 w-4" /> {buyer.name}
              </div>
              <div className="text-sm text-muted-foreground flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" /> {buyer.location}
              </div>
            </div>
          </div>
          <Badge variant="secondary">{buyer.dealSize}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {buyer.sectors.map((s) => (
            <Badge key={s} variant="outline">{s}</Badge>
          ))}
        </div>
        <div className="text-sm grid gap-2 sm:grid-cols-2">
          <div>
            <span className="text-muted-foreground">Timeline:</span> {buyer.timeline}
          </div>
          <div>
            <span className="text-muted-foreground">Experience:</span> {buyer.experience}
          </div>
          <div className="flex items-center gap-2">
            {buyer.proofOfFunds ? (
              <><CheckCircle2 className="h-4 w-4 text-primary" /> Proof of funds verified</>
            ) : (
              <><XCircle className="h-4 w-4" /> Proof of funds pending</>
            )}
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{buyer.rationale}</p>
        <div className="flex flex-wrap gap-2">
          {buyer.structures.map((s) => (
            <Badge key={s} variant="secondary">{s}</Badge>
          ))}
          {buyer.tags.map((t) => (
            <Badge key={t} variant="outline">{t}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="hero" onClick={() => onAccept?.(buyer.id)}>Accept</Button>
        <Button variant="outline" onClick={() => onReject?.(buyer.id)}>Reject</Button>
        <Button variant="ghost" onClick={() => onView?.(buyer.id)}>View profile</Button>
      </CardFooter>
    </Card>
  );
}
