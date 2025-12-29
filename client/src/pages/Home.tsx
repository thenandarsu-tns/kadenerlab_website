import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/custom-button";
import { ArrowRight, Microscope, Clock, Dna, FlaskConical } from "lucide-react";
import { Link } from "wouter";
import { labInfo, researchThemes, publications } from "@/data/content";
import { motion } from "framer-motion";

// Import generated images
import heroImage from '@assets/generated_images/abstract_scientific_visualization_of_circadian_rhythms_and_rna_biology.png';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.5 }}
            src={heroImage}
            alt="Lab Abstract Visualization"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6 backdrop-blur-sm">
              RNA Biology & Circadian Rhythms
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70">
              The Molecular Logic <br /> of Time
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              {labInfo.mission}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/research">
                <Button size="lg" className="text-base h-12 px-8">
                  Explore Research <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/join">
                <Button variant="outline" size="lg" className="text-base h-12 px-8 backdrop-blur-sm bg-white/5 border-white/10 hover:bg-white/10">
                  Join the Lab
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>

      {/* Rotating Highlights / Selected Research */}
      <Section className="bg-secondary/20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-4 mb-8 text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Research Areas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our multidisciplinary approach combines genetics, genomics, biochemistry, and computational biology.
            </p>
          </div>
          
          {researchThemes.slice(0, 4).map((theme, i) => (
            <motion.div
              key={theme.id}
              whileHover={{ y: -5 }}
              className="glass-card p-6 rounded-2xl flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                {i === 0 ? <Clock /> : i === 1 ? <Dna /> : i === 2 ? <Microscope /> : <FlaskConical />}
              </div>
              <h3 className="text-xl font-bold mb-3">{theme.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 flex-grow">
                {theme.shortDescription}
              </p>
              <Link href={`/research#${theme.id}`}>
                <a className="text-primary text-sm font-medium hover:underline inline-flex items-center">
                  Learn more <ArrowRight className="ml-1 w-3 h-3" />
                </a>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Selected Publications */}
      <Section>
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-display font-bold mb-4">Selected Publications</h2>
            <p className="text-muted-foreground">Recent highlights from our work</p>
          </div>
          <Link href="/publications">
            <Button variant="ghost" className="hidden sm:inline-flex">
              View All <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="space-y-4">
          {publications.slice(0, 3).map((pub) => (
            <div key={pub.id} className="group glass-card p-6 rounded-xl hover:bg-white/5 transition-colors border-l-4 border-l-transparent hover:border-l-primary">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
                  <div className="flex gap-2 items-center text-xs text-muted-foreground/80">
                    <span className="font-semibold text-foreground">{pub.journal}</span>
                    <span>•</span>
                    <span>{pub.year}</span>
                  </div>
                </div>
                <div className="flex gap-2 shrink-0">
                  <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noreferrer">
                     <Button variant="outline" size="sm" className="h-8 text-xs">
                       DOI
                     </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
           <Link href="/publications">
            <Button variant="ghost">
              View All Publications <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
           <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Interested in joining?</h2>
           <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
             We are always looking for passionate scientists to join our team. 
             Check out our open positions for postdocs and graduate students.
           </p>
           <Link href="/join">
             <Button size="lg" className="h-14 px-10 text-lg shadow-2xl shadow-primary/30">
               See Open Positions
             </Button>
           </Link>
        </div>
      </section>
    </div>
  );
}
