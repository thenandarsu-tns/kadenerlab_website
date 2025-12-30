import { PageHeader } from "@/components/ui/PageHeader";
import { resources } from "@/data/content";
import { Button } from "@/components/ui/custom-button";
import { ExternalLink, Book, Database, Code, FileText, Lock } from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, any> = {
  "Software": Code,
  "Protocols & Guides": Book,
  "Datasets": Database,
  "Community Resources": FileText
};

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
        <div className="max-w-4xl mx-auto space-y-12">
          
          {sectionOrder.map((category, index) => {
            const categoryResources = groupedResources[category];
            if (!categoryResources || categoryResources.length === 0) return null;

            const Icon = iconMap[category] || FileText;

            return (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 border-b border-white/10 pb-2">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold tracking-tight text-foreground">{category}</h2>
                </div>

                <div className="grid gap-6">
                  {categoryResources.map((resource) => (
                    <div 
                      key={resource.id} 
                      className={`glass-card p-6 rounded-xl border-l-4 transition-all ${
                        resource.featured 
                          ? "border-l-primary bg-primary/5 shadow-lg shadow-primary/5" 
                          : "border-l-white/10 hover:border-l-primary/50"
                      }`}
                    >
                      <div className="flex flex-col md:flex-row justify-between gap-6">
                        <div className="flex-1 space-y-3">
                          <h3 className="text-xl font-bold leading-tight">{resource.title}</h3>
                          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                            {resource.description}
                          </p>
                        </div>
                        
                        <div className="shrink-0 pt-1">
                          {resource.comingSoon ? (
                            <Button 
                              variant="outline" 
                              disabled 
                              className="w-full md:w-auto opacity-70 cursor-not-allowed gap-2"
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
                                variant={resource.featured ? "default" : "outline"} 
                                className="w-full md:w-auto gap-2"
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
