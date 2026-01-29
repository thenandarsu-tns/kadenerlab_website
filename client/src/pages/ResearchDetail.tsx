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
import circRnaFigure from '@assets/circrna_1769716997555.png';
import mblFigure from '@assets/mbl_1769716903421.jpg';
import tempFigure from "@/assets/images/temp_1769727105168.jpg";
import ageFigure from "@/assets/images/age_1769727196062.jpg";

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
          <Button>Return to Research</Button>
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
            <Button variant="ghost" className="pl-0 hover:pl-2 transition-all">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Research Overview
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
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {section}
                  </p>
                </div>
              );
            })}

            {theme.id === "circrnas" && (
              <div className="pt-4">
                <h3 className="text-sm font-semibold tracking-wide text-white/80 uppercase">Figures</h3>
                <div className="mt-4 space-y-6">
                  <figure className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
                    <img
                      src={`${circRnaFigure}?v=1769717200`}
                      alt="Circular RNA schematic"
                      className="w-full h-auto"
                    />
                    <figcaption className="px-4 py-3 text-sm text-muted-foreground leading-relaxed border-t border-white/10 bg-black/10">
                      Representation of MBL-C and MBL-O/P regulation in cis by circMbl isoforms in different tissues. In the brain (green), MBL-C binds to pre-mRNA in order to facilitate backsplicing (as described in Ashwal-Fluss et al., 2014). In the eye, MBL-O/P regulates its own levels by two different mechanisms: inhibiting the splicing of the first and second introns (red inhibition symbols) and promoting backsplicing (dashed violet lines). - Figure 4. Pamudurti et al., 2022
                    </figcaption>
                  </figure>

                  <figure className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
                    <img
                      src={ageFigure}
                      alt="circRNA levels increase with age"
                      className="w-full h-auto"
                    />
                  </figure>

                  <figure className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
                    <img
                      src={mblFigure}
                      alt="circMbl functions schematic"
                      className="w-full h-auto"
                    />
                    <figcaption className="px-4 py-3 text-sm text-muted-foreground leading-relaxed border-t border-white/10 bg-black/10">
                      Graphical abstract from Pamudurti et al., 2022
                    </figcaption>
                  </figure>

                  <figure className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
                    <img
                      src={tempFigure}
                      alt="Temperature-induced circRNAs maintained over time"
                      className="w-full h-auto"
                    />
                    <figcaption className="px-4 py-3 text-sm text-muted-foreground leading-relaxed border-t border-white/10 bg-black/10">
                      The expression of specific temperature-induced circRNAs is maintained over time. -Figure 7. Kirio et al., 2025
                    </figcaption>
                  </figure>
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
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="aspect-square rounded-lg overflow-hidden bg-black/20 border border-white/10 relative group">
                  <img 
                    src={imageMap[theme.image]} 
                    alt="Schematic" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <span className="text-xs font-medium text-white/80">Schematic Overview</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
