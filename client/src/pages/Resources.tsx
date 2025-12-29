import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { resources } from "@/data/content";
import { motion } from "framer-motion";
import { Code, Database, FileText, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/custom-button";
import heroImage from '@assets/generated_images/bioinformatics_code_and_genomic_data_visualization.png';

export default function Resources() {
  return (
    <div>
      <PageHeader 
        title="Resources" 
        description="Software, datasets, and protocols developed by the Kadener Lab."
        image={heroImage}
      />

      <div className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-xl flex flex-col h-full hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  {item.category === "Software" ? <Code /> : 
                   item.category === "Dataset" ? <Database /> : <FileText />}
                </div>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-white/5 border border-white/5 text-muted-foreground">
                  {item.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 flex-grow text-sm">
                {item.description}
              </p>
              
              <div className="mt-auto">
                <a href={item.link} target="_blank" rel="noreferrer" className="w-full">
                  <Button variant="outline" className="w-full gap-2">
                    Access Resource <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
