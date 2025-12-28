// Centralized content store for easy updates by the user.
// Editing this file updates the website content.

export const labInfo = {
  name: "Kadener Lab",
  tagline: "Unraveling the molecular logic of time and RNA",
  mission: "We explore the molecular mechanisms of circadian rhythms, circRNAs, and RNA regulation in the brain, using Drosophila and mammalian systems to understand how molecular clocks drive behavior and physiology.",
  contact: {
    address: "Department of Biology, Brandeis University, Waltham, MA 02453",
    email: "kadener@brandeis.edu",
    twitter: "https://twitter.com/KadenerLab",
    github: "https://github.com/kadenerlab"
  }
};

export const researchThemes = [
  {
    id: "circadian-clocks",
    title: "Circadian Clocks Beyond Neurons",
    shortDescription: "Investigating how molecular clocks operate in non-neuronal tissues and their organismal impact.",
    description: "While the central clock resides in the brain, nearly every cell has a molecular oscillator. We study how these peripheral clocks coordinate with the central pacemaker and regulate tissue-specific physiology, metabolism, and aging.",
    image: "theme-circadian", // Placeholder ID for mapping
    points: [
      "Peripheral clock synchronization",
      "Metabolic regulation by clocks",
      "Glia-neuron communication"
    ]
  },
  {
    id: "rna-regulation",
    title: "RNA Regulation & Isoforms",
    shortDescription: "Deciphering the role of 3'UTR isoforms and alternative polyadenylation in neuronal function.",
    description: "Neurons utilize extensive alternative polyadenylation to generate diverse 3'UTR isoforms. We investigate how these isoforms influence mRNA stability, localization, and translation efficiency in the context of circadian rhythms and neurodegeneration.",
    image: "theme-rna",
    points: [
      "Alternative Polyadenylation (APA)",
      "mRNA stability and decay",
      "RBPs in circadian regulation"
    ]
  },
  {
    id: "circrnas",
    title: "Circular RNAs",
    shortDescription: "Pioneering the study of circular RNAs: biogenesis, function, and translation.",
    description: "We discovered that circular RNAs are highly expressed in the brain and can be translated into proteins. Our lab investigates the mechanism of circRNA translation, their role in synaptic function, and their potential as biomarkers.",
    image: "theme-circ",
    points: [
      "circRNA translation mechanisms",
      "Synaptic localization of circRNAs",
      "circRNAs in aging"
    ]
  },
  {
    id: "spatial-omics",
    title: "Spatial Transcriptomics",
    shortDescription: "Mapping gene expression in the Drosophila brain with high spatial resolution.",
    description: "Using cutting-edge spatial transcriptomics technologies to map gene expression patterns across the complex architecture of the fly brain, revealing spatially restricted circadian programs.",
    image: "theme-spatial",
    points: [
      "Stereo-seq in Drosophila",
      "Spatially resolved clock output",
      "Brain-wide gene atlases"
    ]
  }
];

export const people = [
  {
    id: "sk",
    name: "Sebastian Kadener",
    role: "Principal Investigator",
    bio: "Sebastian investigates the molecular basis of circadian rhythms and RNA regulation. He loves coffee and confusing data. [PLACEHOLDER: Please update bio]",
    image: "sk-placeholder",
    email: "kadener@brandeis.edu",
    scholar: "https://scholar.google.com/citations?user=Example",
    category: "PI"
  },
  {
    id: "jd",
    name: "Jane Doe",
    role: "Postdoctoral Fellow",
    bio: "Studying circRNA translation mechanisms in Drosophila S2 cells. [PLACEHOLDER]",
    image: "member-1",
    email: "janedoe@example.com",
    category: "Postdoc"
  },
  {
    id: "js",
    name: "John Smith",
    role: "PhD Candidate",
    bio: "Investigating spatial transcriptomics of the fly visual system. [PLACEHOLDER]",
    image: "member-2",
    email: "johnsmith@example.com",
    category: "Grad Student"
  },
  {
    id: "ab",
    name: "Alice Brown",
    role: "Lab Manager",
    bio: "Keeps the fly stocks happy and the lab running smoothly. [PLACEHOLDER]",
    image: "member-3",
    email: "aliceb@example.com",
    category: "Staff"
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
    id: 1,
    date: "2024-12-15",
    title: "New paper out in Nature Communications!",
    summary: "Our latest work on spatial transcriptomics in the fly brain is now online. Congrats to the team!",
    tags: ["Publication"]
  },
  {
    id: 2,
    date: "2024-10-01",
    title: "Welcome new rotation students",
    summary: "We are excited to welcome three new rotation students this fall semester.",
    tags: ["Lab Life"]
  },
  {
    id: 3,
    date: "2024-08-20",
    title: "Sebastian speaks at CSHL",
    summary: "Sebastian gave a talk at the Circadian Rhythms meeting at Cold Spring Harbor Laboratory.",
    tags: ["Conference"]
  }
];

export const recruiting = {
  open: true,
  message: "We are looking for motivated postdocs and graduate students interested in RNA biology and circadian rhythms.",
  link: "/join"
};
