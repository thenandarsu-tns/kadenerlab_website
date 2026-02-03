import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { resources } from "@/data/content";
import { motion } from "framer-motion";
import { ArrowRight, Microscope, Workflow, Map, ArrowLeft } from "lucide-react";
import { Link, useRoute } from "wouter";
import { Button } from "@/components/ui/custom-button";

export default function ResourceDetail() {
  const [match, params] = useRoute("/resources/:id");
  const resourceId = params?.id;
  const resource = resources.find((r) => r.id === resourceId);

  if (!resource) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-display font-bold mb-4">Resource Not Found</h1>
        <Link href="/resources">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Resources
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-20">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background z-10" />
        <img 
          src={resource.image} 
          alt={resource.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 relative z-20">
          <Link href="/resources">
            <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10 mb-6 pl-0">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Resources
            </Button>
          </Link>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-display font-bold text-white max-w-4xl"
          >
            {resource.title}
          </motion.h1>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 -mt-20 relative z-30">
        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass-card p-8 md:p-12 rounded-2xl border border-white/10 bg-background/50 backdrop-blur-xl">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg md:text-xl leading-relaxed text-muted-foreground whitespace-pre-line">
                  {resource.description.split("Drosophila melanogaster").reduce<React.ReactNode[]>((acc, part, i, arr) => {
                    acc.push(part);
                    if (i < arr.length - 1) acc.push(<em key={`dm-${i}`}>Drosophila melanogaster</em>);
                    return acc;
                  }, [])}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass-card p-6 rounded-2xl border border-white/5 bg-white/5">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Microscope className="w-5 h-5 text-primary" />
                Key Features
              </h3>
              <ul className="space-y-3">
                {resource.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
