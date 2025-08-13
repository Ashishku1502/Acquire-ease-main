import { Helmet } from "react-helmet-async";

export default function Profile() {
  return (
    <div className="max-w-4xl mx-auto animate-enter">
      <Helmet>
        <title>Profile – AcquireEase</title>
        <meta name="description" content="Manage your profile details and preferences." />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : '/profile'} />
      </Helmet>
      <h1 className="text-3xl font-bold mb-2">Profile</h1>
      <p className="text-muted-foreground">Coming soon: edit profile, notifications, visibility.</p>
    </div>
  );
}
