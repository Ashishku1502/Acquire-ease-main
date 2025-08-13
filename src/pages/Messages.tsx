import { Helmet } from "react-helmet-async";

export default function Messages() {
  return (
    <div className="max-w-5xl mx-auto animate-enter">
      <Helmet>
        <title>Messages – AcquireEase</title>
        <meta name="description" content="Chat with matched parties and stay on the same page." />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : '/messages'} />
      </Helmet>
      <h1 className="text-3xl font-bold mb-2">Messages</h1>
      <p className="text-muted-foreground">Coming soon: real-time messaging and attachments.</p>
    </div>
  );
}
