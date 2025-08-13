import { Helmet } from "react-helmet-async";

export default function Settings() {
  return (
    <div className="max-w-4xl mx-auto animate-enter">
      <Helmet>
        <title>Settings – AcquireEase</title>
        <meta name="description" content="Configure account, security, and workspace settings." />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : '/settings'} />
      </Helmet>
      <h1 className="text-3xl font-bold mb-2">Settings</h1>
      <p className="text-muted-foreground">Coming soon: billing, org members, authentication.</p>
    </div>
  );
}
