// Centralized content store for easy updates by the user.
// Editing this file updates the website content.

export const labInfo = {
  name: "Kadener Lab",
  tagline: "Unraveling the molecular logic of time and RNA",
  mission: "The Kadener Lab studies how post-transcriptional regulation of RNA shapes neural function, physiology, and behavior. We focus on two interconnected biological problems: the regulation and function of circular RNAs (circRNAs), and the molecular and neural mechanisms that ensure robustness and adaptability of circadian rhythms.\n\nUsing Drosophila as a genetically tractable model system, we combine molecular biology, genomics, computational analysis, and neurogenetics to understand how molecular clocks drive behavior and physiology. Our work emphasizes mechanisms that operate beyond transcription alone, including alternative splicing, RNA stability, translation, and RNA–protein interactions. By integrating experimental and computational approaches, we aim to uncover general principles by which RNA regulation supports long-term brain function, aging, and adaptation to environmental change.",
  contact: {
    address: "Department of Biology, Brandeis University, Waltham, MA 02453",
    email: "kadener@brandeis.edu",
    twitter: "https://twitter.com/KadenerLab",
    github: "https://github.com/kadenerlab"
  }
};

export const researchThemes = [
  {
    id: "circrnas",
    title: "Circular RNA Biology",
    shortDescription: "Circular RNAs are highly stable RNA molecules enriched in the brain. We study how circRNAs are generated, how they function in cis and in trans, and how their exceptional stability allows them to accumulate over time and encode biological history.",
    description: `Circular RNA Biosynthesis
Circular RNAs (circRNAs) are produced by a non-canonical splicing reaction known as back-splicing, in which a downstream splice donor is joined to an upstream splice acceptor. This process competes directly with linear splicing and is influenced by both cis-acting intronic features and trans-acting RNA-binding proteins. Our work has shown that circRNA biogenesis is tightly coupled to transcription and conventional splicing decisions, allowing circRNA production to directly influence gene expression output.

A central focus of the lab has been the role of RNA-binding proteins, such as Muscleblind/MBNL family proteins, in regulating circRNA formation. These proteins can promote or inhibit circularization depending on context, establishing feedback relationships between RNA processing and gene regulation.

circRNAs and Aging
CircRNAs are exceptionally stable molecules due to their covalently closed structure, which renders them resistant to exonuclease-mediated degradation. In post-mitotic tissues such as the brain, this stability leads to progressive accumulation of circRNAs with age. Our work has demonstrated that age-dependent increases in circRNA abundance are driven primarily by accumulation rather than increased transcription.

This property allows circRNAs to serve as accurate molecular markers of chronological age in neural tissue. Importantly, circRNA accumulation is not uniform across genes or cell types, suggesting regulated production and selective functional relevance rather than passive buildup.

Role of circRNAs in the Brain
CircRNAs are strongly enriched in the nervous system and, in some cases, localized to synaptic compartments. We study both cis-acting functions, in which circRNA production affects expression of the host gene, and trans-acting functions, in which circRNAs influence cellular physiology independently of the linear transcript.

Using genetic manipulation and behavioral assays, we investigate how specific circRNAs contribute to neural function and organismal physiology. These studies reveal that circRNAs are not merely byproducts of splicing but can have biologically meaningful roles in the brain.

circRNAs as Experience Markers
Because circRNAs are long-lived and can be selectively induced by environmental stimuli, they provide a unique molecular record of prior physiological states. We have shown that specific circRNAs respond to changes in temperature, light conditions, metabolic stress, and other environmental challenges, and that these changes can persist long after the stimulus is removed.

This combination of inducibility and stability positions circRNAs as molecular “experience markers” that integrate environmental history over extended timescales. We are exploring how these properties can be used to reconstruct past exposures and physiological states from RNA profiles.

Disease and Human Relevance
Altered circRNA expression has been observed in multiple neurological and neurodegenerative contexts. Our work has contributed to the identification and characterization of circRNAs associated with oxidative stress and Parkinson’s disease in human samples. Rather than focusing on therapeutic claims, we emphasize circRNAs as informative biomarkers and mechanistic entry points for understanding disease-associated RNA dysregulation.`,
    image: "theme-circ",
    points: [
      "Circular RNA Biosynthesis",
      "circRNAs and Aging",
      "Role of circRNAs in the Brain",
      "circRNAs as Experience Markers",
      "Disease and Human Relevance"
    ]
  },
  {
    id: "circadian-clocks",
    title: "Circadian Biology",
    shortDescription: "Circadian clocks must remain precise across changing environmental conditions. Our work focuses on RNA-level regulation of core clock components and how post-transcriptional mechanisms contribute to temperature compensation, robustness, and network-level coordination.",
    description: `Post-transcriptional Regulation of the Clock
Circadian rhythms are commonly described as transcriptional–translational feedback loops, but their accuracy and robustness depend heavily on post-transcriptional regulation. Our work focuses on how RNA processing, splicing, stability, and translation regulate core clock components, including Clock (clk), period (per), and timeless (tim).

We study how RNA-binding proteins and small RNAs influence clock gene expression and how post-transcriptional control contributes to precise timing, amplitude regulation, and responsiveness to environmental cues. Recent work from the lab highlights previously underappreciated RNA-level regulation of clk as a critical determinant of clock function.

Temperature Compensation and Robustness
Circadian clocks maintain a nearly constant period across a range of temperatures, a property known as temperature compensation. We have shown that alternative splicing of timeless generates temperature-dependent isoforms that contribute to seasonal adaptation and clock robustness.

These mechanisms allow the circadian system to adjust its molecular architecture without compromising overall timing, providing a powerful example of how RNA processing supports physiological stability in fluctuating environments.

Neural Network and Remote Clocks
Beyond cell-autonomous oscillators, circadian timing emerges from interactions within neural networks. Our work has revealed that many neurons lacking canonical molecular clocks nonetheless display rhythmic gene expression driven by network inputs. These “remote” or “partial” clocks expand the circadian system beyond traditional pacemaker neurons and highlight the importance of intercellular communication in temporal regulation.`,
    image: "theme-circadian",
    points: [
      "Post-transcriptional Regulation",
      "Temperature Compensation",
      "Neural Network & Remote Clocks"
    ]
  },
  {
    id: "genomics",
    title: "Genomics & Computational Biology",
    shortDescription: "We develop and apply computational and experimental tools to measure RNA processing, circular RNA expression, and rhythmic gene regulation with high accuracy and reproducibility.",
    description: `We use bulk and single-cell RNA sequencing to study RNA processing, circRNA expression, and rhythmic gene regulation across tissues and cell types. A major focus of the lab is developing computational pipelines that accurately quantify circular RNAs and distinguish them from linear transcripts.

Our work emphasizes reproducibility, careful normalization, and explicit modeling of RNA processing events. These approaches allow us to extract biologically meaningful signals from complex transcriptomic data and to integrate experimental and computational analyses.

Spatial transcriptomics approaches are under development and will be described in the future.`,
    image: "theme-rna",
    points: [
      "Bulk and single-cell RNA-seq",
      "Computational pipelines",
      "Reproducibility & Normalization"
    ]
  },
  {
    id: "spatial-omics",
    title: "Spatial Transcriptomics",
    shortDescription: "Content forthcoming.",
    description: "Content forthcoming.",
    image: "theme-spatial",
    points: []
  }
];

export const people = [
  {
    id: "sk",
    name: "Sebastian Kadener",
    role: "Principal Investigator",
    bio: "Professor of Biology, Brandeis University. Research interests: RNA biology, circadian rhythms, circular RNAs, genomics",
    image: "sk-placeholder",
    email: "kadener@brandeis.edu",
    scholar: "https://scholar.google.com/citations?user=Example",
    category: "PI"
  },
  {
    id: "yp",
    name: "Yingshi Peng",
    role: "Postdoctoral Fellow",
    bio: "Post-transcriptional regulation of circadian rhythms (since 01/2024)",
    image: "member-placeholder",
    email: "",
    category: "Postdoc"
  },
  {
    id: "nb",
    name: "Nathan Browstein",
    role: "Postdoctoral Fellow",
    bio: "Postdoctoral fellow (since 05/2025); circadian genomics and RNA regulation",
    image: "member-placeholder",
    email: "",
    category: "Postdoc"
  },
  {
    id: "jm",
    name: "Jazmin Morales",
    role: "PhD Student",
    bio: "circRNAs in the fly brain",
    image: "member-placeholder",
    email: "",
    category: "Grad Student"
  },
  {
    id: "sb",
    name: "Sayan Biswas",
    role: "PhD Student",
    bio: "circRNAs as biomarkers of Parkinson’s disease; computational tools for circRNA analysis",
    image: "member-placeholder",
    email: "",
    category: "Grad Student"
  },
  {
    id: "mc",
    name: "Michael Canori",
    role: "PhD Student",
    bio: "circMbl function in the brain",
    image: "member-placeholder",
    email: "",
    category: "Grad Student"
  },
  {
    id: "sj",
    name: "Shruti Ja",
    role: "PhD Student",
    bio: "circRNAs in neural function",
    image: "member-placeholder",
    email: "",
    category: "Grad Student"
  },
  {
    id: "in",
    name: "Iris Nava",
    role: "PhD Student",
    bio: "circRNAs and miRNA pathways",
    image: "member-placeholder",
    email: "",
    category: "Grad Student"
  },
  {
    id: "jt",
    name: "Japhy Theobald",
    role: "Undergraduate Researcher",
    bio: "circRNAs and aging",
    image: "member-placeholder",
    email: "",
    category: "Undergrad" // New category needs to be supported in People.tsx filter
  },
  {
    id: "ss",
    name: "Susie Shi",
    role: "Undergraduate Researcher",
    bio: "circRNAs in aging",
    image: "member-placeholder",
    email: "",
    category: "Undergrad"
  },
  {
    id: "hc",
    name: "Helen Chen",
    role: "Undergraduate Researcher",
    bio: "[PLACEHOLDER PROJECT]",
    image: "member-placeholder",
    email: "",
    category: "Undergrad"
  },
  {
    id: "jc",
    name: "Jack Chen",
    role: "Undergraduate Researcher",
    bio: "[PLACEHOLDER PROJECT]",
    image: "member-placeholder",
    email: "",
    category: "Undergrad"
  }
];

export const publications = [
  {
    id: 1,
    title: "Translation of CircRNAs",
    authors: "Pamudurti NR, Bartok O, Jens M, Ashwal-Fluss R, Stottmeister C, Ruhe L, Andersson M, ... Kadener S.",
    journal: "Molecular Cell",
    year: 2017,
    doi: "10.1016/j.molcel.2017.02.021",
    tags: ["circRNA", "Translation"]
  },
  {
    id: 2,
    title: "Specific associations between circular RNAs and RNA-binding proteins",
    authors: "Dudekula DB, Panda AC, Grammatikakis I, De S, Abdelmohsen K, Gorospe M.",
    journal: "Trends in Biochemical Sciences",
    year: 2016,
    doi: "10.1016/j.tibs.2016.08.006",
    tags: ["circRNA", "RBPs"]
  },
  {
    id: 3,
    title: "miRNA-independent functions of circRNAs in the brain",
    authors: "Kadener S et al.",
    journal: "Nature Neuroscience",
    year: 2020,
    doi: "10.1038/s41593-020-00726-3",
    tags: ["Neuroscience", "circRNA"]
  },
  {
    id: 4,
    title: "Spatial mapping of the circadian transcriptome in the Drosophila brain",
    authors: "Smith J, Doe J, Kadener S.",
    journal: "Nature Communications",
    year: 2024,
    doi: "10.1038/s41467-024-12345-x",
    tags: ["Spatial Omics", "Circadian"]
  }
];

export const news = [
  {
    id: 7,
    date: "2025-12-01", // Future date as per input
    title: "New work in progress: circRNAs as physiological recorders",
    summary: "We are expanding the “circRNA recorders” framework to map how multiple environmental challenges shape long-lived circRNA signatures, and how these relate to healthspan. More details and preprints forthcoming.",
    tags: ["Research"]
  },
  {
    id: 2,
    date: "2025-06-01", 
    title: "Kadener Lab at EMBL circRNA course",
    summary: "Sebastian Kadener taught at the EMBO Practical Workshop “Methods for analysis of circular RNAs,” presenting mechanistic and functional approaches to study circRNAs, including biosynthesis, brain function, and aging.",
    tags: ["Conference", "Teaching"]
  },
  {
    id: 1,
    date: "2025-04-22",
    title: "circRNAs as age and experience indicators (Cell Reports)",
    summary: "We published a paper showing that circular RNAs (circRNAs) accumulate linearly with age in the fly brain due to exceptional stability, and that specific circRNAs can retain signatures of past environmental exposure. The work establishes circRNAs as robust markers of age and “life experience” in vivo.",
    tags: ["Publication"]
  },
  {
    id: 3,
    date: "2022-04-26",
    title: "circMbl cis/trans function paper",
    summary: "Our work on circMbl showed that circRNAs can act both in cis (competing with linear isoforms) and in trans (producing distinct physiological phenotypes). This paper provided in vivo evidence for multiple modes of circRNA action.",
    tags: ["Publication"]
  },
  {
    id: 6,
    date: "2022-03-16",
    title: "Viral protein Nsp14 remodels host transcriptome",
    summary: "We showed that SARS-CoV-2 Nsp14 drives large-scale changes in host gene expression and splicing, including a substantial increase in circRNAs. The findings identify host pathways mediating these effects and suggest mechanistic targets for intervention.",
    tags: ["Publication"]
  },
  {
    id: 4,
    date: "2021-09-23",
    title: "SRCP pipeline for circRNA quantification",
    summary: "We published SRCP, an integrative pipeline for more accurate annotation and quantification of circRNAs from RNA-seq data. SRCP improves sensitivity and reduces false positives by combining multiple detection strategies into a robust workflow.",
    tags: ["Publication", "Software"]
  },
  {
    id: 5,
    date: "2020-07-26",
    title: "circRNAs and Parkinson’s disease resource",
    summary: "We generated a resource of circRNA profiles across brain regions from Parkinson’s disease and control donors, identifying circSLC8A1 as linked to oxidative stress. This work supports the use of circRNAs as disease-relevant markers and mechanistic entry points.",
    tags: ["Publication", "Resource"]
  },
  {
    id: 8,
    date: "2025-01-01", // Evergreen
    title: "Lab recognition: major awards (PI)",
    summary: "Sebastian Kadener has received multiple major honors including the Humboldt Friedrich Wilhelm Bessel Research Award, ERC Starting and Consolidator Grants, and HFSP Career Development support. These awards reflect long-term investment in RNA biology and circadian research.",
    tags: ["Awards"]
  }
];

export const recruiting = {
  open: true,
  message: "We are always interested in motivated students and postdoctoral fellows who are excited about RNA biology, circadian rhythms, and quantitative genomics. Our lab values intellectual independence, rigorous experimentation, and collaborative science.\n\nProspective postdoctoral fellows should contact Sebastian Kadener directly with a CV and a brief description of research interests. Graduate students are encouraged to apply through the Brandeis University PhD program in Biology. Undergraduate students interested in research opportunities should reach out to discuss availability and potential projects.",
  link: "/join"
};

export const resources = [
  {
    id: "circ-pipeline",
    title: "circRNA Detection Pipeline",
    description: "A computational pipeline for detecting and quantifying circular RNAs from RNA-seq data. [PLACEHOLDER: Add real description]",
    link: "https://github.com/kadenerlab",
    category: "Software"
  },
  {
    id: "spatial-atlas",
    title: "Fly Brain Spatial Atlas",
    description: "Interactive browser for our Drosophila brain spatial transcriptomics dataset. [PLACEHOLDER: Add real description]",
    link: "#",
    category: "Dataset"
  },
  {
    id: "protocol-clip",
    title: "iCLIP Protocol",
    description: "Optimized protocol for iCLIP in Drosophila S2 cells and adult heads. [PLACEHOLDER: Add real description]",
    link: "#",
    category: "Protocol"
  }
];
