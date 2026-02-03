import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { people, labPhotos } from "@/data/content";
import { motion } from "framer-motion";
import { GraduationCap, Mail } from "lucide-react";
import { useState } from "react";

const alumniEndYearFromRole = (role: string) => {
  const match = role.match(/\((\d{4})\s*-\s*(\d{4})\)/);
  if (match?.[2]) return Number(match[2]);

  const single = role.match(/\((\d{4})\)/);
  if (single?.[1]) return Number(single[1]);

  return -Infinity;
};

export default function People() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "PI", "Postdoc", "Grad Student", "Undergrad", "Staff", "Alumni", "Photos"];

  const filteredPeople =
    filter === "All" ? people : people.filter((p) => p.category === filter);

  const pi = people.find((p) => p.category === "PI");
  const undergrads = filteredPeople.filter((p) => p.category === "Undergrad");
  const alumni = filteredPeople
    .filter((p) => p.category === "Alumni")
    .sort((a, b) => alumniEndYearFromRole(b.role) - alumniEndYearFromRole(a.role));
  const members = filteredPeople.filter(
    (p) => p.category !== "PI" && p.category !== "Undergrad" && p.category !== "Alumni",
  );

  return (
    <div>
      <PageHeader title="Team" description="Meet the Kadener Krew!" />

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
              data-testid={`button-filter-${cat.replace(/\s+/g, "-").toLowerCase()}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        {(filter === "All" || filter === "PI") && pi && (
          <Section className="mb-20">
            <div className="glass-card p-8 md:p-12 rounded-3xl border border-primary/20 bg-gradient-to-br from-card/50 to-primary/5">
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shrink-0 border-4 border-white/5 shadow-2xl relative group">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
                  <img
                    src={
                      pi.image && pi.image !== "sk-placeholder"
                        ? pi.image
                        : `https://ui-avatars.com/api/?name=${pi.name}&background=0D8ABC&color=fff&size=256`
                    }
                    alt={pi.name}
                    className="w-full h-full object-cover transition-all duration-500"
                    data-testid="img-pi"
                  />
                </div>
                <div className="text-center md:text-left">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4" data-testid="badge-pi">
                    Principal Investigator
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-2" data-testid="text-pi-name">
                    {pi.name}
                  </h2>
                  <a
                    href={`mailto:${pi.email}`}
                    className="text-primary font-medium text-lg block mb-6 hover:underline w-fit"
                    data-testid="link-pi-email"
                  >
                    {pi.email}
                  </a>
                  <div className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed" data-testid="text-pi-bio">
                    {pi.bio.split("\n").map((line, i) => (
                      <span key={i} className="block min-h-[1.5em]">
                        {line.includes("**")
                          ? line
                              .split("**")
                              .map((part, j) =>
                                j % 2 === 1 ? (
                                  <strong key={j} className="text-foreground">
                                    {part}
                                  </strong>
                                ) : (
                                  part
                                ),
                              )
                          : line}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 justify-center md:justify-start">
                    <a
                      href={`mailto:${pi.email}`}
                      className="p-3 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors"
                      data-testid="button-pi-mail"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    <a
                      href={pi.scholar}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors"
                      data-testid="link-pi-scholar"
                    >
                      <GraduationCap className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" data-testid="grid-members">
          {members.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl flex flex-col items-center text-center group"
              data-testid={`card-member-${member.id}`}
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-2 border-white/5 group-hover:border-primary/50 transition-colors relative">
                <img
                  src={
                    member.image && member.image !== "member-placeholder"
                      ? member.image
                      : `https://ui-avatars.com/api/?name=${member.name.replace(
                          " ",
                          "+",
                        )}&background=random&color=fff&size=128`
                  }
                  alt={member.name}
                  className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 transition-opacity"
                  data-testid={`img-member-${member.id}`}
                />
              </div>
              <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors" data-testid={`text-member-name-${member.id}`}>
                {member.name}
              </h3>
              <p className="text-sm font-medium text-primary/80 mb-3" data-testid={`text-member-role-${member.id}`}>
                {member.role}
              </p>
              <p className="text-sm text-muted-foreground mb-6" data-testid={`text-member-bio-${member.id}`}>
                {member.bio}
              </p>

              <div className="mt-auto pt-4 border-t border-white/5 w-full flex justify-center gap-4">
                <a
                  href={`mailto:${member.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid={`link-member-email-${member.id}`}
                >
                  <Mail className="w-4 h-4" />
                </a>
                <div className="w-4 h-4 bg-white/5 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {undergrads.length > 0 && (
          <Section className="mb-20">
            <h3 className="text-2xl font-display font-bold mb-8 border-b border-white/10 pb-4" data-testid="heading-undergrads">
              Undergraduate Students
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" data-testid="grid-undergrads">
              {undergrads.map((student) => (
                <div
                  key={student.id}
                  className="glass-card px-6 py-4 rounded-lg flex items-center gap-3 hover:bg-primary/5 transition-colors"
                  data-testid={`row-undergrad-${student.id}`}
                >
                  <div className="w-2 h-2 rounded-full bg-primary/50" />
                  <span className="font-medium text-lg" data-testid={`text-undergrad-name-${student.id}`}>
                    {student.name}
                  </span>
                </div>
              ))}
            </div>
          </Section>
        )}

        {alumni.length > 0 && (
          <Section className="mb-20">
            <h3 className="text-2xl font-display font-bold mb-8 border-b border-white/10 pb-4" data-testid="heading-alumni">
              Alumni
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-testid="grid-alumni">
              {alumni.map((alum) => (
                <div
                  key={alum.id}
                  className="glass-card px-6 py-4 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-primary/5 transition-colors"
                  data-testid={`row-alumni-${alum.id}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground/50" />
                    <span className="font-medium text-lg" data-testid={`text-alumni-name-${alum.id}`}>
                      {alum.name}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground bg-white/5 px-3 py-1 rounded-full whitespace-nowrap" data-testid={`text-alumni-role-${alum.id}`}>
                    {alum.role}
                  </span>
                </div>
              ))}
            </div>
          </Section>
        )}

        {labPhotos.length > 0 && (filter === "All" || filter === "Photos") && (
          <Section className="mb-20">
            <h3 className="text-2xl font-display font-bold mb-8 border-b border-white/10 pb-4" data-testid="heading-photos">
              Photos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-testid="grid-photos">
              {labPhotos.map((photo) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 bg-background/50 backdrop-blur-md">
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {photo.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
        )}

        {members.length === 0 && undergrads.length === 0 && alumni.length === 0 && filter !== "PI" && filter !== "Photos" && (
          <div className="text-center py-20 text-muted-foreground" data-testid="text-empty">
            No members found in this category.
          </div>
        )}
      </div>
    </div>
  );
}
