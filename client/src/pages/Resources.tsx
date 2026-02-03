import { PageHeader } from "@/components/ui/PageHeader";
import { researchThemes } from "@/data/content";
import { motion } from "framer-motion";
import { Microscope, Workflow, Map } from "lucide-react";
import srcpImage from "@assets/generated_images/bioinformatics_pipeline_data_visualization.png";

export default function Resources() {
  const spatial = researchThemes.find((t) => t.id === "spatial-omics");

  return (
    <div>
      <PageHeader
        title="Resources"
        description="Resources developed by the Kadener lab and our collaborators."
      />

      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-7xl mx-auto space-y-10">
          <motion.section
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl border border-white/5"
            data-testid="section-resources-spatial"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <div
                  className="inline-flex items-center gap-2 text-xs font-medium text-primary/90 bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full mb-4"
                  data-testid="badge-resources-spatial"
                >
                  <Microscope className="w-3.5 h-3.5" />
                  Spatial Transcriptomics
                </div>
                <h2
                  className="text-2xl md:text-3xl font-display font-bold"
                  data-testid="heading-resources-spatial"
                >
                  {spatial?.title ?? "Spatial Transcriptomics"}
                </h2>
                <p
                  className="text-muted-foreground mt-3 leading-relaxed max-w-3xl"
                  data-testid="text-resources-spatial-description"
                >
                  {spatial?.shortDescription ?? "Work in progress!"}
                </p>
              </div>
            </div>

            {spatial?.image && (
              <div className="mt-8 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                <img
                  src={spatial.image}
                  alt="Spatial Transcriptomics thumbnail"
                  className="w-full h-auto object-contain"
                  data-testid="img-resources-spatial"
                />
              </div>
            )}
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl border border-white/5"
            data-testid="section-resources-srcp"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <div
                  className="inline-flex items-center gap-2 text-xs font-medium text-primary/90 bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full mb-4"
                  data-testid="badge-resources-srcp"
                >
                  <Workflow className="w-3.5 h-3.5" />
                  circRNA pipeline
                </div>
                <h2
                  className="text-2xl md:text-3xl font-display font-bold"
                  data-testid="heading-resources-srcp"
                >
                  SRCP
                </h2>
                <p
                  className="text-muted-foreground mt-3 leading-relaxed max-w-3xl"
                  data-testid="text-resources-srcp-description"
                >
                  A comprehensive pipeline for accurate annotation and quantification of circRNAs.
                </p>
              </div>
            </div>

          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl border border-white/5"
            data-testid="section-resources-drosophila-atlas"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <div
                  className="inline-flex items-center gap-2 text-xs font-medium text-primary/90 bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full mb-4"
                  data-testid="badge-resources-drosophila-atlas"
                >
                  <Map className="w-3.5 h-3.5" />
                  Atlas
                </div>
                <h2
                  className="text-2xl md:text-3xl font-display font-bold"
                  data-testid="heading-resources-drosophila-atlas"
                >
                  Drosophila Atlas
                </h2>
                <p
                  className="text-muted-foreground mt-3 leading-relaxed max-w-3xl"
                  data-testid="text-resources-drosophila-atlas-description"
                >
                  Work in progress!
                </p>
              </div>
            </div>
          </motion.section>

        </div>
      </div>
    </div>
  );
}
