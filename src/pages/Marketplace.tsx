import { Helmet } from "react-helmet-async";
import { buyers } from "@/data/buyers";
import BuyerCard from "@/components/BuyerCard";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

export default function Marketplace() {
  const navigate = useNavigate();

  const accept = (id: string) => {
    toast({ title: "Buyer accepted", description: "We've notified the buyer to connect." });
  };
  const reject = (id: string) => {
    toast({ title: "Buyer rejected", description: "We'll hide similar profiles in the future." });
  };

  return (
    <div className="max-w-6xl mx-auto animate-enter">
      <Helmet>
        <title>Marketplace – AcquireEase</title>
        <meta name="description" content="Browse qualified buyer profiles and accept or reject with confidence." />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : '/marketplace'} />
      </Helmet>

      <h1 className="text-3xl font-bold mb-2">Buyer marketplace</h1>
      <p className="text-muted-foreground mb-6">Sellers review and initiate contact with buyers.</p>

      <div className="grid gap-6 sm:grid-cols-2">
        {buyers.map((b) => (
          <BuyerCard key={b.id} buyer={b} onAccept={accept} onReject={reject} onView={(id) => navigate(`/buyers/${id}`)} />
        ))}
      </div>
    </div>
  );
}
