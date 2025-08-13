import { Helmet } from "react-helmet-async";

export default function PlaceholderPage({ title, description }: { title: string; description: string }) {
  return (
    <div className="max-w-4xl mx-auto animate-enter">
      <Helmet>
        <title>{title} – AcquireEase</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : '/'} />
      </Helmet>
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
