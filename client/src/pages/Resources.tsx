import { PageHeader } from "@/components/ui/PageHeader";
import { resources } from "@/data/content";
import { Button } from "@/components/ui/custom-button";
import { ExternalLink, Lock } from "lucide-react";
import { motion } from "framer-motion";

export default function Resources() {
  // Define the section order as requested
  const sectionOrder = [
    "Software",
    "Protocols & Guides",
    "Datasets",
    "Community Resources"
  ];

  // Group resources by category
  const groupedResources = sectionOrder.reduce((acc, category) => {
    acc[category] = resources.filter(r => r.category === category);
    return acc;
  }, {} as Record<string, typeof resources>);

  return (
    <div>
      <PageHeader 
        title="Resources" 
        description="Tools, datasets, and protocols developed by the Kadener Lab for the scientific community."
      />

      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {sectionOrder.map((category, index) => {
            const categoryResources = groupedResources[category];
            if (!categoryResources || categoryResources.length === 0) return null;

            return (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 border-b border-white/10 pb-2 mb-6">
                  <h2 className="text-2xl font-bold tracking-tight text-foreground">{category}</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryResources.map((resource) => (
                    <div 
                      key={resource.id} 
                      className={`glass-card rounded-xl overflow-hidden flex flex-col h-full border-t-0 transition-all hover:shadow-xl hover:shadow-primary/5 ${
                        resource.featured 
                          ? "ring-1 ring-primary/50" 
                          : "border-white/10 hover:border-primary/30"
                      }`}
                    >
                      {/* Image Area */}
                      <div className="h-48 w-full bg-black/50 overflow-hidden relative group">
                        {resource.image ? (
                          <img 
                            src={resource.image} 
                            alt={resource.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                          />
                        ) : (
                          <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                            <span className="text-primary/40 font-mono text-sm">No Preview</span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
                        
                        {resource.featured && (
                          <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded shadow-lg">
                            Featured
                          </div>
                        )}
                      </div>

                      {/* Content Area */}
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex-grow space-y-3 mb-6">
                          <h3 className="text-xl font-bold leading-tight line-clamp-2">{resource.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
                            {resource.description}
                          </p>
                        </div>
                        
                        <div className="mt-auto pt-4 border-t border-white/5">
                          {resource.comingSoon ? (
                            <Button 
                              variant="ghost" 
                              disabled 
                              className="w-full justify-center opacity-70 cursor-not-allowed gap-2 bg-white/5 hover:bg-white/5"
                            >
                              <Lock className="w-4 h-4" />
                              Coming Soon
                            </Button>
                          ) : (
                            <a 
                              href={resource.link} 
                              target="_blank" 
                              rel="noreferrer"
                              className="block"
                            >
                              <Button 
                                variant={resource.featured ? "default" : "secondary"} 
                                className="w-full justify-center gap-2"
                              >
                                {resource.linkText || "View Resource"}
                                <ExternalLink className="w-4 h-4" />
                              </Button>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </div>
  );
}
