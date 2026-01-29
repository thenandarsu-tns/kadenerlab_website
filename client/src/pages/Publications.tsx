import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { publications } from "@/data/content";

type PublicationItem = {
  id: number;
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  tags?: string[];
  summary?: string;
};

import { useState } from "react";
import { Button } from "@/components/ui/custom-button";
import { Search, Filter, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Publications() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState<string | "All">("All");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const publicationList: PublicationItem[] = Array.from(
    new Map(
      [...publications.featured, ...Object.values(publications.categories).flat()].map(
        (p) => [p.id, p],
      ),
    ).values(),
  ).sort((a, b) => b.year - a.year);

  // Extract unique years
  const years = Array.from(
    new Set(publicationList.map((p) => p.year.toString())),
  ).sort((a, b) => b.localeCompare(a));
  const allYears: Array<string | "All"> = ["All", ...years];

  const filteredPubs = publicationList.filter((pub) => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          pub.journal.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          pub.year.toString().includes(searchTerm.toLowerCase());
    const matchesYear = selectedYear === "All" || pub.year.toString() === selectedYear;
    return matchesSearch && matchesYear;
  });

  return (
    <div>
      <PageHeader 
        title="Publications" 
        description="Our contributions to the scientific community."
      />

      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="glass-card p-6 rounded-xl sticky top-24">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter by Year
              </h3>
              <div className="flex flex-col gap-2">
                {allYears.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedYear === year 
                        ? "bg-primary text-primary-foreground font-medium" 
                        : "hover:bg-primary/10 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search Bar */}
            <div className="mb-8 relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search authors, titles, journals, years..." 
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-card/50 border border-white/10 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-sm backdrop-blur-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* List */}
            <div className="space-y-4 max-w-5xl mx-auto">
              <AnimatePresence>
                {filteredPubs.map((pub) => (
                  <motion.div
                    key={pub.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    layout
                    className="glass-card rounded-xl border-l-4 border-l-transparent hover:border-l-primary group overflow-hidden"
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row justify-between gap-6">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
                            {pub.title}
                          </h3>
                          <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                            {pub.authors}
                          </p>
                          <div className="flex flex-wrap gap-3 items-center text-sm">
                            <span className="font-semibold text-foreground bg-white/5 px-2 py-1 rounded border border-white/5">
                              {pub.journal}
                            </span>
                            <span className="text-muted-foreground">{pub.year}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end gap-2 shrink-0">
                          {pub.doi && (
                            <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noreferrer">
                              <Button variant="outline" size="sm" className="gap-2 h-8 text-xs w-full">
                                DOI
                              </Button>
                            </a>
                          )}
                          
                          {pub.summary && (
                            <button 
                              onClick={() => setExpandedId(expandedId === pub.id ? null : pub.id)}
                              className="text-xs text-primary hover:underline flex items-center gap-1 mt-2"
                            >
                              {expandedId === pub.id ? "Hide Summary" : "Read Summary"}
                              {expandedId === pub.id ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Expandable Summary */}
                    <AnimatePresence>
                      {expandedId === pub.id && pub.summary && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="bg-primary/5 px-6 md:px-8 border-t border-primary/10"
                        >
                          <p className="py-4 text-sm text-muted-foreground leading-relaxed">
                            <span className="font-semibold text-primary block mb-1">Summary:</span>
                            {pub.summary}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {filteredPubs.length === 0 && (
                <div className="text-center py-20 text-muted-foreground glass-card rounded-xl border-dashed border-white/10">
                  No publications found matching your criteria.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
