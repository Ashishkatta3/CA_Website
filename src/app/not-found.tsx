import { Button, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <h1 className="type-headline">This page can&apos;t be found.</h1>
      <p className="type-intro mx-auto mt-4 max-w-md text-ink-2">It may have moved, or the link may be incorrect.</p>
      <Button href="/" className="mt-8">Go to Home</Button>
    </Container>
  );
}
