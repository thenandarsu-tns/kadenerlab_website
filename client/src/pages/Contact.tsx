import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { labInfo } from "@/data/content";
import { Mail, MapPin, Twitter, Github, Phone } from "lucide-react";
import { Button } from "@/components/ui/custom-button";

export default function Contact() {
  return (
    <div>
      <PageHeader 
        title="Contact Us" 
      />

      <div className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6" data-testid="heading-contact-info">Contact Information</h2>
              
              <div className="space-y-6" data-testid="section-contact-info">
                <div className="flex items-start gap-4" data-testid="row-contact-location">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0" data-testid="icon-contact-location">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1" data-testid="text-contact-location-title">Lab Location</h3>
                    <p className="text-muted-foreground whitespace-pre-line" data-testid="text-contact-address">
                      {labInfo.contact.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4" data-testid="row-contact-phone">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0" data-testid="icon-contact-phone">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1" data-testid="text-contact-phone-title">Phone</h3>
                    <a href={`tel:${labInfo.contact.phone}`} className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-contact-phone">
                      {labInfo.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4" data-testid="row-contact-email">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0" data-testid="icon-contact-email">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1" data-testid="text-contact-email-title">Email</h3>
                    {labInfo.contact.emails.map((email) => (
                      <a key={email} href={`mailto:${email}`} className="block text-muted-foreground hover:text-primary transition-colors" data-testid={`link-contact-email-${email.replace(/[^a-zA-Z0-9]/g, "-")}`}>
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Open Positions */}
            <div className="glass-card p-8 rounded-2xl" data-testid="card-open-positions">
              <h2 className="text-2xl font-bold mb-6" data-testid="heading-open-positions">Open Positions</h2>

              <div className="space-y-8" data-testid="section-open-positions">
                <div data-testid="open-position-postdoc">
                  <h3 className="text-xl font-bold text-primary mb-2" data-testid="text-open-position-postdoc-title">Postdoctoral Fellows</h3>
                  <p className="text-muted-foreground" data-testid="text-open-position-postdoc-description">
                    We are looking for postdocs with experience in RNA biology, genomics, or computational biology. Candidates should send a CV, a brief statement of research interests, and contact information for three references.
                  </p>
                </div>

                <div className="w-full h-[1px] bg-white/10" aria-hidden="true" />

                <div data-testid="open-position-graduate">
                  <h3 className="text-xl font-bold text-primary mb-2" data-testid="text-open-position-graduate-title">Graduate Students</h3>
                  <p className="text-muted-foreground" data-testid="text-open-position-graduate-description">
                    Prospective students should apply through the Brandeis University PhD programs (Mol/Cell Biology or Neuroscience). Current students interested in rotations should contact Sebastian directly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="h-full min-h-[400px] rounded-2xl overflow-hidden glass-card relative group border border-white/10" data-testid="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.844287826338!2d-71.26127022346616!3d42.36839553600649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3831139454181%3A0xc3f6089304381387!2sRosenstiel%20Basic%20Medical%20Sciences%20Research%20Center!5e0!3m2!1sen!2sus!4v1709400000000!5m2!1sen!2sus&mode=dark"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kadener Lab Location"
              data-testid="iframe-google-map"
              className="grayscale hover:grayscale-0 transition-all duration-500 opacity-90 hover:opacity-100"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
