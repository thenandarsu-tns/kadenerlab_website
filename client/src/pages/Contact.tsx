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
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Lab Location</h3>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {labInfo.contact.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <a href={`tel:${labInfo.contact.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {labInfo.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    {labInfo.contact.emails.map((email) => (
                      <a key={email} href={`mailto:${email}`} className="block text-muted-foreground hover:text-primary transition-colors">
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <h3 className="font-bold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href={labInfo.contact.twitter} target="_blank" rel="noreferrer">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Twitter className="w-4 h-4" />
                    </Button>
                  </a>
                  <a href={labInfo.contact.github} target="_blank" rel="noreferrer">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Github className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="h-full min-h-[400px] rounded-2xl overflow-hidden glass-card relative group">
            <div className="absolute inset-0 bg-secondary/50 flex items-center justify-center">
              <div className="text-center p-6">
                <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-bold text-muted-foreground mb-2">Map Placeholder</h3>
                <p className="text-sm text-muted-foreground/60 max-w-xs mx-auto">
                  Interactive map will be embedded here.
                  <br/>
                  (Brandeis University Campus)
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
