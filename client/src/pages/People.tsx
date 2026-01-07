import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { people } from "@/data/content";
import { motion } from "framer-motion";
import { Github, GraduationCap, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/custom-button";

export default function People() {
  const [filter, setFilter] = useState("All");
  
  const categories = ["All", "PI", "Postdoc", "Grad Student", "Undergrad", "Staff", "Alumni"];
  
  const filteredPeople = filter === "All" 
    ? people 
    : people.filter(p => p.category === filter);

  // Separate PI from the rest if showing all or PI
  const pi = people.find(p => p.category === "PI");
  const undergrads = filteredPeople.filter(p => p.category === "Undergrad");
  const members = filteredPeople.filter(p => p.category !== "PI" && p.category !== "Undergrad");

  return (
    <div>
      <PageHeader 
        title="Team" 
        description="Meet the team unraveling the mysteries of biological time."
      />

      {/* Filter Tabs */}
      <div className="sticky top-20 z-30 bg-background/80 backdrop-blur-md border-b border-white/5 py-4 mb-12">
        <div className="container mx-auto px-4 flex overflow-x-auto gap-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all duration-200 ${
                filter === cat 
                  ? "bg-primary text-primary-foreground font-medium" 
                  : "bg-secondary hover:bg-secondary/80 text-muted-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        {/* PI Section - Only show if All or PI is selected */}
        {(filter === "All" || filter === "PI") && pi && (
          <Section className="mb-20">
            <div className="glass-card p-8 md:p-12 rounded-3xl border border-primary/20 bg-gradient-to-br from-card/50 to-primary/5">
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shrink-0 border-4 border-white/5 shadow-2xl relative group">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
                  <img 
                    src={pi.image && pi.image !== "sk-placeholder" ? pi.image : `https://ui-avatars.com/api/?name=${pi.name}&background=0D8ABC&color=fff&size=256`}
                    alt={pi.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="text-center md:text-left">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                    Principal Investigator
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{pi.name}</h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                    {pi.bio}
                  </p>
                  <div className="flex gap-4 justify-center md:justify-start">
                    <a href={`mailto:${pi.email}`} className="p-3 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                    <a href={pi.scholar} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors">
                      <GraduationCap className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        )}

        {/* Lab Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {members.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl flex flex-col items-center text-center group"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-2 border-white/5 group-hover:border-primary/50 transition-colors relative">
                <img 
                   src={member.image && member.image !== "member-placeholder" ? member.image : `https://ui-avatars.com/api/?name=${member.name.replace(' ', '+')}&background=random&color=fff&size=128`}
                   alt={member.name}
                   className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
              <p className="text-sm font-medium text-primary/80 mb-3">{member.role}</p>
              <p className="text-sm text-muted-foreground mb-6">
                {member.bio}
              </p>
              
              <div className="mt-auto pt-4 border-t border-white/5 w-full flex justify-center gap-4">
                <a href={`mailto:${member.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
                {/* Optional placeholders for other links */}
                <div className="w-4 h-4 bg-white/5 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Undergrads Section - Simple List */}
        {undergrads.length > 0 && (
          <Section className="mb-20">
            <h3 className="text-2xl font-display font-bold mb-8 border-b border-white/10 pb-4">Undergraduate Students</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {undergrads.map((student) => (
                <div 
                  key={student.id} 
                  className="glass-card px-6 py-4 rounded-lg flex items-center gap-3 hover:bg-primary/5 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-primary/50" />
                  <span className="font-medium text-lg">{student.name}</span>
                </div>
              ))}
            </div>
          </Section>
        )}
        
        {members.length === 0 && undergrads.length === 0 && filter !== "PI" && (
          <div className="text-center py-20 text-muted-foreground">
            No members found in this category.
          </div>
        )}
      </div>
    </div>
  );
}
