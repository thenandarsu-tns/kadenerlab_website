import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { publications } from "@/data/content";
import { useState } from "react";
import { Button } from "@/components/ui/custom-button";
import { Search, Filter, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Publications() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState<number | "All">("All");

  // Extract unique years
  const years = ["All", ...Array.from(new Set(publications.map(p => p.year))).sort((a, b) => b - a)];

  const filteredPubs = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          pub.journal.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = selectedYear === "All" || pub.year === selectedYear;
    return matchesSearch && matchesYear;
  });

  return (
    <div>
      <PageHeader 
        title="Publications" 
        description="Our contributions to the scientific community."
      />

      <div className="container mx-auto px-4 pb-20">
        {/* Controls */}
        <Section className="py-0 mb-12">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-card/50 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search authors, titles, journals..." 
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-background/50 border border-white/10 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 no-scrollbar">
              {years.map(year => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year as number | "All")}
                  className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                    selectedYear === year 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-background/50 hover:bg-white/10 border border-white/5"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </Section>

        {/* List */}
        <div className="space-y-4">
          <AnimatePresence>
            {filteredPubs.map((pub) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                layout
                className="glass-card p-6 md:p-8 rounded-xl border-l-4 border-l-transparent hover:border-l-primary group"
              >
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
                      {pub.title}
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                      {pub.authors}
                    </p>
                    <div className="flex flex-wrap gap-3 items-center text-sm">
                      <span className="font-semibold text-foreground bg-white/5 px-2 py-1 rounded">
                        {pub.journal}
                      </span>
                      <span className="text-muted-foreground">{pub.year}</span>
                      {pub.tags?.map(tag => (
                        <span key={tag} className="text-xs text-primary/80 px-2 py-0.5 rounded-full border border-primary/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2 shrink-0">
                    <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noreferrer">
                      <Button variant="outline" size="sm" className="gap-2">
                        DOI
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {filteredPubs.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              No publications found matching your criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
