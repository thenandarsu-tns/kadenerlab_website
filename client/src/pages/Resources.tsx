import { PageHeader } from "@/components/ui/PageHeader";
import { resources } from "@/data/content";
import { ExternalLink, Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function Resources() {
  return (
    <div>
      <PageHeader
        title="Resources"
        description="Tools, datasets, and protocols developed by the Kadener Lab for the scientific community."
      />

      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-7xl mx-auto space-y-10">
          {resources.sections.map((section, sectionIndex) => (
            <section key={section.title} data-testid={`section-resources-${sectionIndex}`}>
              <div className="flex items-end justify-between gap-6 mb-6">
                <h2 className="text-2xl md:text-3xl font-display font-bold" data-testid={`heading-resources-${sectionIndex}`}>
                  {section.title}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid={`grid-resources-${sectionIndex}`}>
                {section.items.map((item, itemIndex) => (
                  <motion.a
                    key={`${section.title}-${item.title}`}
                    href={item.url}
                    target={item.url === "#" ? undefined : "_blank"}
                    rel={item.url === "#" ? undefined : "noreferrer"}
                    className={`glass-card p-6 rounded-2xl border border-white/10 hover:border-primary/30 transition-colors group block ${
                      item.url === "#" ? "pointer-events-none opacity-70" : "" 
                    }`}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (sectionIndex * 0.05) + (itemIndex * 0.03) }}
                    data-testid={`card-resource-${sectionIndex}-${itemIndex}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <div className="inline-flex items-center gap-2 text-xs font-medium text-primary/90 bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full mb-3" data-testid={`badge-resource-${sectionIndex}-${itemIndex}`}>
                          <Layers className="w-3.5 h-3.5" />
                          {section.title}
                        </div>
                        <h3 className="text-lg font-bold leading-snug mb-2 group-hover:text-primary transition-colors" data-testid={`text-resource-title-${sectionIndex}-${itemIndex}`}>
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-resource-description-${sectionIndex}-${itemIndex}`}>
                          {item.description}
                        </p>
                      </div>

                      {item.url !== "#" && (
                        <div className="shrink-0 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary/30 transition-colors" data-testid={`icon-resource-external-${sectionIndex}-${itemIndex}`}>
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      )}
                    </div>

                    {item.url === "#" && (
                      <div className="mt-4 text-xs text-muted-foreground" data-testid={`status-resource-coming-soon-${sectionIndex}-${itemIndex}`}>
                        Coming soon
                      </div>
                    )}
                  </motion.a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
