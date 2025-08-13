import { Helmet } from "react-helmet-async";
import heroImage from "@/assets/hero-connection.jpg";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-[70vh] hero-glow">
      <Helmet>
        <title>AcquireEase – Buyer/Seller Matching</title>
        <meta name="description" content="Approachable platform where sellers initiate contact with buyers. Streamlined workflows, AI assistance, higher deal success." />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : '/'} />
      </Helmet>

      <div className="grid gap-10 md:grid-cols-2 items-center">
        <div className="space-y-6 animate-enter">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Make acquisitions feel effortless
          </h1>
          <p className="text-lg text-muted-foreground max-w-prose">
            Sellers reach out first. Then we guide both sides through a modern, friction‑free deal flow with helpful tools and AI support.
          </p>
          <div className="flex flex-wrap gap-3">
            <NavLink to="/onboarding"><Button variant="hero" size="lg">Start onboarding</Button></NavLink>
            <NavLink to="/marketplace"><Button variant="secondary" size="lg">Explore buyers</Button></NavLink>
          </div>
          <ul className="text-sm text-muted-foreground grid gap-2">
            <li>• Guided workflows for every stage</li>
            <li>• Clear buyer profiles for quick decisions</li>
            <li>• AI summaries of financial docs</li>
          </ul>
        </div>
        <div className="animate-scale-in">
          <img src={heroImage} alt="Illustration of buyers and sellers connecting" className="rounded-xl shadow-elevated" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Index;
