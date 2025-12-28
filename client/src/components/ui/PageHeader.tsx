import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  image?: string;
}

export function PageHeader({ title, description, image }: PageHeaderProps) {
  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background z-10" />
         {image && (
           <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            src={image} 
            alt="Header Background" 
            className="w-full h-full object-cover opacity-30" 
           />
         )}
         {!image && (
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
         )}
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  );
}
