import { PageHeader } from "@/components/ui/PageHeader";

export default function Join() {
  return (
    <div>
      <PageHeader 
        title="Join the Lab" 
        description="Interested in joining the Kadener Lab? Reach out via the Contact page."
      />

      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 rounded-2xl" data-testid="card-join-note">
            <h2 className="text-2xl font-bold mb-3" data-testid="heading-join-note">Getting in touch</h2>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-join-note">
              We list current openings on the Contact page so you can find positions and contact details in one place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
