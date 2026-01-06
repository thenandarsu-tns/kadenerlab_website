import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/custom-button";
import { recruiting } from "@/data/content";
import { motion } from "framer-motion";
import { Mail, CheckCircle2 } from "lucide-react";

export default function Join() {
  return (
    <div>
      <PageHeader 
        title="Join the Lab" 
        description="We are always looking for motivated scientists to join our team."
      />

      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-3xl mx-auto">
          
          {/* Open Positions */}
          <div className="bg-card/30 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-6">Open Positions</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Postdoctoral Fellows</h3>
                <p className="text-muted-foreground mb-4">
                  We are looking for postdocs with experience in RNA biology, genomics, or computational biology. 
                  Candidates should send a CV, a brief statement of research interests, and contact information for three references.
                </p>
                <Button variant="outline" className="w-full sm:w-auto">
                  Application Details
                </Button>
              </div>

              <div className="w-full h-[1px] bg-white/10" />

              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Graduate Students</h3>
                <p className="text-muted-foreground mb-4">
                  Prospective students should apply through the Brandeis University PhD programs 
                  (Mol/Cell Biology or Neuroscience). Current students interested in rotations should contact Sebastian directly.
                </p>
                <Button variant="outline" className="w-full sm:w-auto">
                  Contact for Rotation
                </Button>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center gap-4 bg-primary/10 p-4 rounded-lg border border-primary/20">
                <Mail className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold text-sm text-primary uppercase tracking-wider mb-1">Contact</h4>
                  <p className="text-sm text-muted-foreground">
                    For inquiries, please email <a href="mailto:kadener@brandeis.edu" className="text-foreground hover:underline">kadener@brandeis.edu</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
