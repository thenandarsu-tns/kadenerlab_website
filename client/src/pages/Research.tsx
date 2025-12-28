import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { researchThemes } from "@/data/content";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from '@assets/generated_images/drosophila_head_spatial_transcriptomics.png';

export default function Research() {
  return (
    <div>
      <PageHeader 
        title="Research Themes" 
        description="Our lab takes a multidisciplinary approach to understand the molecular mechanisms of time and RNA regulation."
        image={heroImage}
      />

      <div className="container mx-auto px-4 pb-20">
        <div className="space-y-32">
          {researchThemes.map((theme, index) => (
            <Section key={theme.id} id={theme.id} className="py-0">
              <div className={`flex flex-col lg:flex-row gap-12 lg:items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Text Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="w-12 h-[1px] bg-primary"></span>
                    <span className="text-primary font-medium tracking-wider uppercase text-sm">Theme 0{index + 1}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold">{theme.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {theme.description}
                  </p>
                  
                  <div className="pt-4">
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-white/80">Key Areas</h4>
                    <ul className="space-y-3">
                      {theme.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Visual Content Placeholder */}
                <div className="flex-1">
                  <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden glass-card group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 mix-blend-overlay z-10" />
                    {/* Placeholder for actual scientific figure */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <div className="text-center p-8">
                        <span className="block text-4xl font-bold text-white/20 mb-2">Figure</span>
                        <p className="text-sm text-white/40 uppercase tracking-widest">
                          Visualization for <br/> {theme.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </Section>
          ))}
        </div>
      </div>
    </div>
  );
}
