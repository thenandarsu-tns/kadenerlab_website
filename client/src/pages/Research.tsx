import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { researchThemes } from "@/data/content";
import { motion } from "framer-motion";
import { ArrowRight, Microscope, Clock, Dna, FlaskConical } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/custom-button";

// Import generated images
// (Images are now imported directly in content.ts)

export default function Research() {
  return (
    <div>
      <PageHeader 
        title="Research Areas" 
        description=""
      />

      <div className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {researchThemes.map((theme, index) => (
            <Link key={theme.id} href={`/research/${theme.id}`} data-testid={`link-research-${theme.id}`}>
              <motion.div 
                whileHover={{ y: -5 }}
                className="group cursor-pointer h-full"
              >
                <div className="glass-card h-full rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                    <img 
                      src={theme.image} 
                      alt={theme.title}
                      className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${(theme.id === 'circrnas' || theme.id === 'genomics' || theme.id === 'testing') ? 'object-contain bg-[#e8e4dc]' : 'object-cover'}`}
                      data-testid={`img-research-thumbnail-${theme.id}`}
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 backdrop-blur-md flex items-center justify-center text-primary border border-white/10" data-testid={`icon-research-${theme.id}`}>
                        {index === 0 ? <Dna /> : index === 1 ? <Clock /> : index === 2 ? <Microscope /> : <FlaskConical />}
                      </div>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors" data-testid={`text-research-title-${theme.id}`}>{theme.title}</h2>
                    <p className="text-muted-foreground mb-6 flex-grow leading-relaxed line-clamp-3" data-testid={`text-research-description-${theme.id}`}>
                      {theme.shortDescription}
                    </p>
                    
                    <div className="flex items-center text-primary font-medium text-sm mt-auto" data-testid={`text-research-cta-${theme.id}`}>
                      Explore Topic <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
