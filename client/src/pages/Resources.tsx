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
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 rounded-2xl border border-white/10" data-testid="card-resources-empty">
            <h2 className="text-2xl font-display font-bold mb-2" data-testid="heading-resources-empty">
              Resources coming soon
            </h2>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-resources-empty">
              We’re curating lab resources and links. Check back soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
