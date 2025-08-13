import { Helmet } from "react-helmet-async";

export default function Matches() {
  return (
    <div className="max-w-5xl mx-auto animate-enter">
      <Helmet>
        <title>Matches – AcquireEase</title>
        <meta name="description" content="Your recent matches and suggested next steps." />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : '/matches'} />
      </Helmet>
      <h1 className="text-3xl font-bold mb-2">Matches</h1>
      <p className="text-muted-foreground">Coming soon: match quality insights and nudges.</p>
    </div>
  );
}
