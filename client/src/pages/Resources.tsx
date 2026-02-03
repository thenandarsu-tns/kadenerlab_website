import { PageHeader } from "@/components/ui/PageHeader";
import { resources } from "@/data/content";
import { motion } from "framer-motion";
import { ArrowRight, Microscope, Workflow, Map } from "lucide-react";
import { Link } from "wouter";

export default function Resources() {
  return (
    <div>
      <PageHeader
        title="Resources"
        description="Resources developed by the Kadener lab and our collaborators."
      />

      <div className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {resources.map((resource, index) => (
            <Link key={resource.id} href={`/resources/${resource.id}`} data-testid={`link-resource-${resource.id}`}>
              <motion.div 
                whileHover={{ y: -5 }}
                className="group cursor-pointer h-full"
              >
                <div className="glass-card h-full rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                    <img 
                      src={resource.image} 
                      alt={resource.title}
                      className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${resource.id === 'spatial-omics' || resource.id === 'srcp' ? 'object-contain bg-black/20' : 'object-cover'}`}
                      data-testid={`img-resource-thumbnail-${resource.id}`}
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 backdrop-blur-md flex items-center justify-center text-primary border border-white/10" data-testid={`icon-resource-${resource.id}`}>
                        {resource.id === 'spatial-omics' ? <Microscope /> : resource.id === 'srcp' ? <Workflow /> : <Map />}
                      </div>
                    </div>
                    {/* @ts-ignore */}
                    {resource.credit && (
                      <div className="absolute bottom-2 right-2 z-20 text-[10px] text-white/60 bg-black/40 px-2 py-1 rounded backdrop-blur-sm">
                        {/* @ts-ignore */}
                        {resource.credit}
                      </div>
                    )}
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors" data-testid={`text-resource-title-${resource.id}`}>{resource.title}</h2>
                    <p className="text-muted-foreground mb-6 flex-grow leading-relaxed line-clamp-3" data-testid={`text-resource-description-${resource.id}`}>
                      {resource.shortDescription}
                    </p>
                    
                    <div className="flex items-center text-primary font-medium text-sm mt-auto" data-testid={`text-resource-cta-${resource.id}`}>
                      Explore Resource <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
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
