import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { publications } from "@/data/content";
import { useState } from "react";
import { Button } from "@/components/ui/custom-button";
import { Search, Filter, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Publications() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<string | "All">("All");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // Extract unique topics and sort "Circular RNAs" first
  const allTopics = Array.from(new Set(publications.flatMap(p => p.tags || []))).sort();
  // Move Circular RNAs to top if exists, otherwise normal sort
  const sortedTopics = allTopics.filter(t => t !== "Circular RNAs");
  if (allTopics.includes("Circular RNAs")) {
    sortedTopics.unshift("Circular RNAs");
  }
  const topics = ["All", ...sortedTopics];

  const filteredPubs = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          pub.journal.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTopic = selectedTopic === "All" || pub.tags?.includes(selectedTopic);
    return matchesSearch && matchesTopic;
  });

  return (
    <div>
      <PageHeader 
        title="Publications" 
        description="Our contributions to the scientific community."
      />

      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 gap-8">
          
          {/* Main Content */}
          <div className="col-span-1">
            {/* Search Bar */}
            <div className="mb-8 relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search authors, titles, journals..." 
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
