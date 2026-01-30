import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { researchThemes } from "@/data/content";
import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/custom-button";

// Import generated images
import circImage from '@assets/generated_images/mechanism_of_circular_rna_biogenesis_and_back-splicing.png';
import clockImage from '@assets/generated_images/molecular_mechanism_of_circadian_clock_regulation.png';
import genomicsImage from '@assets/generated_images/computational_genomics_pipeline_and_rna_sequencing_analysis.png';
import spatialImage from '@assets/generated_images/spatial_transcriptomics_map_of_drosophila_brain.png';
import circRnaFigure from "@/assets/images/Ines-circrna_1769802663088.png";
import mblFigure from '@assets/mbl_1769716903421.jpg';
import tempFigure from "@/assets/images/age_1769802132731.png";
import timFigure from "@/assets/images/tim_1769807187243.png";
import timSplicingFigure from "@/assets/images/tim_splicing_1769807333418.jpg";

const imageMap: Record<string, string> = {
  "theme-circ": circImage,
  "theme-circadian": clockImage,
  "theme-rna": genomicsImage,
  "theme-spatial": spatialImage
};

export default function ResearchDetail() {
  const [match, params] = useRoute("/research/:id");
  const themeId = params?.id;
  
  const theme = researchThemes.find(t => t.id === themeId);

  if (!theme) {
    return (
      <div className="pt-32 pb-20 container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-6">Topic Not Found</h1>
        <Link href="/research">
          <Button asChild>
            <a data-testid="link-return-research">Return to Research</a>
          </Button>
        </Link>
      </div>
    );
  }

  // Split description into sections based on newlines for better layout
  const sections = theme.description.split('\n\n').filter(s => s.trim().length > 0);

  return (
    <div>
      <PageHeader 
        title={theme.title}
        description={theme.shortDescription}
        image={imageMap[theme.image]}
      />

      <div className="container mx-auto px-4 pb-20">
        <div className="mb-8">
          <Link href="/research">
            <Button asChild variant="ghost" className="pl-0 hover:pl-2 transition-all">
              <a data-testid="link-back-research-overview">
                <ArrowLeft className="mr-2 w-4 h-4" /> Back to Research Overview
              </a>
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-12">
            {sections.map((section, idx) => {
              // Check if section is a header (short line)
              const isHeader = section.length < 50 && !section.includes('.');
              
              if (isHeader) {
                return (
                  <h2 key={idx} className="text-2xl font-bold text-primary mt-8 mb-4 border-b border-white/10 pb-2">
                    {section}
                  </h2>
                );
              }
              
              return (
                <div key={idx} className="space-y-6">
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {section}
                  </p>
                </div>
              );
            })}

            {(theme.id === "circrnas" || theme.id === "circadian-clocks") && (
              <div className="pt-4">
                <h3 className="text-sm font-semibold tracking-wide text-white/80 uppercase" data-testid="heading-figures">Figures</h3>
                <div className="mt-4 space-y-6" data-testid="section-figures">
                  {theme.id === "circrnas" && (
                    <>
                      <figure className="rounded-xl overflow-hidden border border-white/10 bg-white/5" data-testid="figure-circrna-1">
                        <img
                          src={`${circRnaFigure}?v=1769717200`}
                          alt="Circular RNA schematic"
                          className="w-full h-auto"
                          data-testid="img-figure-circrna-1"
                        />
                        <figcaption className="px-4 py-3 text-sm text-muted-foreground leading-relaxed border-t border-white/10 bg-black/10" data-testid="caption-figure-circrna-1">
                          circRNAs at a glance. circRNA can be generated either with the help of reverse complementary repeats or RNA‐binding proteins and exported from the nucleus. In the cytoplasm, the circRNA might be bound by multiple factors.   - Figure 1, Patop et al., 2019
                        </figcaption>
                      </figure>

                      <figure className="rounded-xl overflow-hidden border border-white/10 bg-white/5" data-testid="figure-circrna-2">
                        <img
                          src={mblFigure}
                          alt="circMbl functions schematic"
                          className="w-full h-auto"
                          data-testid="img-figure-circrna-2"
                        />
                        <figcaption className="px-4 py-3 text-sm text-muted-foreground leading-relaxed border-t border-white/10 bg-black/10" data-testid="caption-figure-circrna-2">
                          Graphical abstract from Pamudurti et al., 2022
                        </figcaption>
                      </figure>

                      <figure className="rounded-xl overflow-hidden border border-white/10 bg-white/5" data-testid="figure-circrna-3">
                        <img
                          src={tempFigure}
                          alt="Temperature-induced circRNAs maintained over time"
                          className="w-full h-auto"
                          data-testid="img-figure-circrna-3"
                        />
                        <figcaption className="px-4 py-3 text-sm text-muted-foreground leading-relaxed border-t border-white/10 bg-black/10" data-testid="caption-figure-circrna-3">
                          circRNAs increase linearly with age in Drosophila heads. Shown above are total number of DESeq2 normalized circRNA and linear reads at each time point across life in female flies, represented by green/circles and blue/triangles, respectively.    -Figure 1. Kirio et al., 2025
                        </figcaption>
                      </figure>
                    </>
                  )}

                  {theme.id === "circadian-clocks" && (
                    <>
                      <figure className="rounded-xl overflow-hidden border border-white/10 bg-white/5" data-testid="figure-circadian-1">
                        <img
                          src={timFigure}
                          alt="Temperature-responsive Tim expression heatmaps"
                          className="w-full h-auto"
                          data-testid="img-figure-circadian-1"
                        />
                        <figcaption className="px-4 py-3 text-sm text-muted-foreground leading-relaxed border-t border-white/10 bg-black/10" data-testid="caption-figure-circadian-1">
                          Temperature remodels the circadian transcriptome. Heat maps of normalized expression of genes that display 24 hr cycling expression at different temperatures. Flies were entrained at the indicated temperatures for 3 days in 12:12 LD conditions.   -Anduaga et al., 2019
                        </figcaption>
                      </figure>

                      <figure className="rounded-xl overflow-hidden border border-white/10 bg-white/5" data-testid="figure-circadian-2">
                        <img
                          src={timSplicingFigure}
                          alt="Temperature-modulated tim alternative splicing figure"
                          className="w-full h-auto"
                          data-testid="img-figure-circadian-2"
                        />
                        <figcaption className="px-4 py-3 text-sm text-muted-foreground leading-relaxed border-t border-white/10 bg-black/10" data-testid="caption-figure-circadian-2">
                          Temperature modulates tim alternative splicing.
                          (A) Integrative Genomics Viewer (IGV) snapshot of the tim locus, indicating the expression of this gene at 18°C (blue), 25°C (black), and 29°C (red). The presented data include the aggregated data from the 3′ RNA-seq datasets presented in Figure 1 (upper traces) as well as full transcript polyA+ RNA-seq datasets (lower traces). The latter include two time points at 25°C and three time points at 18°C and 29°C. The arrows indicate the alternative splicing events that are regulated by temperature.
                          (B) A schematic of the alternatively spliced tim isoforms. Constitutive exons are shown in gray, sequences found mainly at high temperatures in red, and sequences found mainly at low temperatures in blue. Close-ups of the exons surrounding each non-canonical isoform are shown in rectangles. Alternative stop codons (STOP) and cleavage and polyadenylation sites in these isoforms are also indicated.
                          (C) Quantification of the relative amounts of tim-sc (dark blue), tim-cold (light blue), tim-M (red), and tim-L (gray) isoforms based on the data shown in panel (A). To quantify the different isoforms, we counted the relative number of spliced junctions that are specific for each isoform.
                          (D) Quantification of the relative amount of spliced per (blue) and unspliced per (red) RNAs at the three assayed temperatures.   -Figure 2. Anduaga et al., 2019
                        </figcaption>
                      </figure>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar / Visuals */}
          <div className="space-y-8">
            <div className="glass-card p-6 rounded-xl sticky top-24">
              <h3 className="font-bold mb-4 uppercase tracking-wider text-sm text-primary">Key Highlights</h3>
              <ul className="space-y-3">
                {theme.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
