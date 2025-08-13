import { Helmet } from "react-helmet-async";

export default function Documents() {
  return (
    <div className="max-w-5xl mx-auto animate-enter">
      <Helmet>
        <title>Documents – AcquireEase</title>
        <meta name="description" content="Manage shared documents with permissions and versioning." />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : '/documents'} />
      </Helmet>
      <h1 className="text-3xl font-bold mb-2">Documents</h1>
      <p className="text-muted-foreground">Coming soon: folders, requests, and secure sharing.</p>
    </div>
  );
}
