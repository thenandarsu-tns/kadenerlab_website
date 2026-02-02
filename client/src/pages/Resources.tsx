import { PageHeader } from "@/components/ui/PageHeader";
import { researchThemes } from "@/data/content";
import { motion } from "framer-motion";
import { Microscope, Workflow } from "lucide-react";
import srcpImage from "@assets/generated_images/bioinformatics_pipeline_data_visualization.png";

export default function Resources() {
  const spatial = researchThemes.find((t) => t.id === "spatial-omics");

  return (
    <div>
      <PageHeader
        title="Resources"
        description="Tools, datasets, and protocols developed by the Kadener Lab for the scientific community."
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

            <div className="mt-6 grid md:grid-cols-3 gap-4" data-testid="grid-resources-srcp">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4" data-testid="card-resources-srcp-feature-1">
                <div className="text-sm font-semibold" data-testid="text-resources-srcp-feature-title-1">Annotation</div>
                <div className="mt-1 text-sm text-muted-foreground" data-testid="text-resources-srcp-feature-body-1">
                  Produces a consistent circRNA reference for downstream analysis.
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4" data-testid="card-resources-srcp-feature-2">
                <div className="text-sm font-semibold" data-testid="text-resources-srcp-feature-title-2">Quantification</div>
                <div className="mt-1 text-sm text-muted-foreground" data-testid="text-resources-srcp-feature-body-2">
                  Accurate circRNA abundance estimates with clear, reproducible outputs.
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4" data-testid="card-resources-srcp-feature-3">
                <div className="text-sm font-semibold" data-testid="text-resources-srcp-feature-title-3">Reproducibility</div>
                <div className="mt-1 text-sm text-muted-foreground" data-testid="text-resources-srcp-feature-body-3">
                  Designed for transparent, end-to-end analysis across datasets.
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl overflow-hidden border border-white/10 bg-white/5" data-testid="frame-resources-srcp-image">
              <img
                src={srcpImage}
                alt="SRCP pipeline visualization"
                className="w-full h-auto object-contain"
                data-testid="img-resources-srcp"
              />
            </div>
          </motion.section>

          <div className="max-w-3xl">
            <div className="glass-card p-8 rounded-2xl border border-white/10" data-testid="card-resources-empty">
              <h2 className="text-2xl font-display font-bold mb-2" data-testid="heading-resources-empty">
                More resources coming soon
              </h2>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-resources-empty">
                We’re curating lab resources and links. Check back soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
