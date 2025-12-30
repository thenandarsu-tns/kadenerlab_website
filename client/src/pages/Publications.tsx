import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { publications } from "@/data/content";
import { useState } from "react";
import { Button } from "@/components/ui/custom-button";
import { Search, Filter, Download, BookOpen, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Publications() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<string | "All">("All");

  // Extract unique topics
  const topics = ["All", ...Array.from(new Set(publications.flatMap(p => p.tags))).sort()];

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
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search Bar */}
            <div className="mb-8 relative">
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
            <div className="space-y-4">
              <AnimatePresence>
                {filteredPubs.map((pub) => (
                  <motion.div
                    key={pub.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    layout
                    className="glass-card p-6 rounded-xl border-l-4 border-l-transparent hover:border-l-primary group"
                  >
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
                          {pub.tags?.map(tag => (
                            <span key={tag} className="text-xs text-primary/80 px-2 py-0.5 rounded-full border border-primary/20">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2 shrink-0">
                        <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noreferrer">
                          <Button variant="outline" size="sm" className="gap-2 h-8 text-xs">
                            DOI
                          </Button>
                        </a>
                      </div>
                    </div>
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

          {/* Sidebar Filters (Right Side) */}
          <div className="lg:col-span-1 space-y-6 order-first lg:order-last">
            <div className="glass-card p-6 rounded-xl sticky top-24">
              <h3 className="font-bold mb-4 uppercase tracking-wider text-sm text-primary flex items-center gap-2">
                <Filter className="w-4 h-4" /> Filter by Topic
              </h3>
              
              <div className="space-y-2">
                {topics.map(topic => (
                  <button
                    key={topic}
                    onClick={() => setSelectedTopic(topic)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center justify-between ${
                      selectedTopic === topic 
                        ? "bg-primary/20 text-primary font-medium border border-primary/20" 
                        : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                    }`}
                  >
                    <span>{topic}</span>
                    {selectedTopic === topic && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
