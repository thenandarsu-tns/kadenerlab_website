import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { news } from "@/data/content";
import { motion } from "framer-motion";
import { Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/custom-button";
import { useState } from "react";

export default function News() {
  const [visibleCount, setVisibleCount] = useState(6);

  const loadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <div>
      <PageHeader 
        title="News & Updates" 
        description="Latest happenings from the lab, including new papers, awards, and events."
      />

      <div className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.slice(0, visibleCount).map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl flex flex-col h-full hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-2 text-sm text-primary mb-3">
                <Calendar className="w-4 h-4" />
                <time>{new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
              </div>
              
              <h3 className="text-xl font-bold mb-3 leading-tight">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 flex-grow">
                {item.summary}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {item.tags?.map(tag => (
                  <div key={tag} className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-white/5 border border-white/5 text-muted-foreground">
                    <Tag className="w-3 h-3" />
                    {tag}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {visibleCount < news.length && (
          <div className="text-center mt-12">
            <Button onClick={loadMore} variant="outline" size="lg">
              Load More News
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
