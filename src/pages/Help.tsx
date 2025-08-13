import { Helmet } from "react-helmet-async";

export default function Help() {
  return (
    <div className="max-w-4xl mx-auto animate-enter">
      <Helmet>
        <title>Help – AcquireEase</title>
        <meta name="description" content="FAQs and guidance through the acquisition process." />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : '/help'} />
      </Helmet>
      <h1 className="text-3xl font-bold mb-2">Help & FAQs</h1>
      <p className="text-muted-foreground">Coming soon: knowledge base and support.</p>
    </div>
  );
}
