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
  // Circular RNAs (circRNAs) – Biogenesis & Function
  {
    id: 1,
    title: "Circular RNAs exhibit exceptional stability in the aging brain and serve as reliable age and experience indicators",
    authors: "Kirio, K., Patop, I. L., Martin-Anduaga, A., Harris, J., Pamudurti, N., Martel, C., & Kadener, S.",
    journal: "Cell Reports",
    year: 2025,
    doi: "10.1016/j.celrep.2025.115485",
    tags: ["Circular RNAs"]
  },
  {
    id: 2,
    title: "A brain-enriched circular RNA controls excitatory neurotransmission and restricts sensitivity to aversive stimuli",
    authors: "Giusti, S. A., Pino, N. S., Pannunzio, C., et al.",
    journal: "Science Advances",
    year: 2024,
    doi: "10.1126/sciadv.adj8769",
    tags: ["Circular RNAs"]
  },
  {
    id: 3,
    title: "circMbl functions in cis and in trans to regulate gene expression and physiology in a tissue-specific fashion",
    authors: "Pamudurti, N. R., Patop, I. L., Krishnamoorthy, A., Bartok, O., Maya, R., Lerner, N., Ashwal-Fluss, R., Konakondla-Jacob, V., Beatus, T., & Kadener, S.",
    journal: "Cell Reports",
    year: 2022,
    doi: "10.1016/j.celrep.2022.110740",
    tags: ["Circular RNAs"]
  },
  {
    id: 4,
    title: "Past, present and future of circRNAs",
    authors: "Patop, I. L., Wüst, S., & Kadener, S.",
    journal: "EMBO Journal",
    year: 2019,
    doi: "10.15252/embj.2018100836",
    tags: ["Circular RNAs"]
  },
  {
    id: 5,
    title: "Translation of circRNAs",
    authors: "Pamudurti, N. R., Bartok, O., Jens, M., Ashwal-Fluss, R., Stottmeister, C., Ruhe, L., Hanan, M., Wyler, E., Perez-Hernandez, D., Ramberger, E., Shenzis, S., Samson, M., Dittmar, G., Landthaler, M., Chekulaeva, M., Rajewsky, N., & Kadener, S.",
    journal: "Molecular Cell",
    year: 2017,
    doi: "10.1016/j.molcel.2017.02.021",
    tags: ["Circular RNAs"]
  },
  {
    id: 6,
    title: "Circular RNAs in the mammalian brain are highly abundant, conserved, dynamically expressed, and regulated by ADAR1",
    authors: "Rybak-Wolf, A., Stottmeister, C., Glazar, P., Jens, M., Pino, N., Giusti, S., Hanan, M., … Kadener, S., … Rajewsky, N.",
    journal: "Molecular Cell",
    year: 2015,
    doi: "10.1016/j.molcel.2015.03.027",
    tags: ["Circular RNAs"]
  },
  {
    id: 7,
    title: "CircRNAs in the brain",
    authors: "Hanan, M., Soreq, H., & Kadener, S.",
    journal: "RNA Biology",
    year: 2017,
    doi: "10.1080/15476286.2016.1223003",
    tags: ["Circular RNAs"]
  },
  // Circadian Biology – Clocks & Rhythms
  {
    id: 8,
    title: "Alternative polyadenylation factor CPSF6 regulates temperature compensation of the mammalian circadian clock",
    authors: "Schmal, C., Maier, B., Ashwal-Fluss, R., Bartok, O., Finger, A. M., Bange, T., Koutsouli, S., Robles, M. S., Kadener, S., Herzel, H., & Kramer, A.",
    journal: "PLOS Biology",
    year: 2023,
    doi: "10.1371/journal.pbio.3002164",
    tags: ["Circadian Biology"]
  },
  {
    id: 9,
    title: "Organismal landscape of clock cells and circadian gene expression in Drosophila",
    authors: "Patop, I. L., Martin-Anduaga, A., Bussi, I., Ceriani, M. F., & Kadener, S.",
    journal: "bioRxiv",
    year: 2023,
    doi: "10.1101/2023.05.23.542009",
    tags: ["Circadian Biology"]
  },
  {
    id: 10,
    title: "Drosophila PSI controls circadian period and the phase of circadian behavior under temperature cycles via tim splicing",
    authors: "Foley, L., Ling, J., Joshi, R., Evantal, N., Kadener, S., & Emery, P.",
    journal: "eLife",
    year: 2019,
    doi: "10.7554/eLife.46821",
    tags: ["Circadian Biology"]
  },
  {
    id: 11,
    title: "Thermosensitive alternative splicing senses and mediates temperature adaptation in Drosophila",
    authors: "Martin-Anduaga, A., Evantal, N., Patop, I. L., Bartok, O., Weiss, R., & Kadener, S.",
    journal: "eLife",
    year: 2019,
    doi: "10.7554/eLife.44642",
    tags: ["Circadian Biology"]
  },
  {
    id: 12,
    title: "High-accuracy determination of internal circadian time from a single blood sample",
    authors: "Wittenbrink, N., Ananthasubramaniam, B., Münch, M., Koller, B., Maier, B., Weschke, C., Bes, F., de Zeeuw, J., Nowozin, C., Wahnschaffe, A., … Kadener, S., … Kramer, A.",
    journal: "The Journal of Clinical Investigation",
    year: 2018,
    doi: "10.1172/JCI120874",
    tags: ["Circadian Biology"]
  },
  {
    id: 13,
    title: "Reconfiguration of a multi-oscillator network by light in the Drosophila circadian clock",
    authors: "Chatterjee, A., Lamaze, A., De, J., Mena, W., Chélot, E., Martin, B., Hardin, P., Kadener, S., Emery, P., & Rouyer, F.",
    journal: "Current Biology",
    year: 2018,
    doi: "10.1016/j.cub.2018.05.093",
    tags: ["Circadian Biology"]
  },
  {
    id: 14,
    title: "The transcription factor Cabut coordinates energy metabolism and the circadian clock in response to sugar sensing",
    authors: "Bartok, O., Teesalu, M., Pandey, V., Hanan, M., Poukkula, M., Havula, E., Moussaieff, A., Vodala, S., Nahmias, Y., Kadener, S., & Hietakangas, V.",
    journal: "EMBO Journal",
    year: 2015,
    doi: "10.15252/embj.201490636",
    tags: ["Circadian Biology"]
  },
  {
    id: 15,
    title: "Clk post-transcriptional control denoises circadian transcription in time and space",
    authors: "Lerner, I., Bartok, O., Afik, S., Menet, J. S., Wolfson, V., Weissbein, U., Haimovich, D., Gafni, C., Friedman, N., Rosbash, M., & Kadener, S.",
    journal: "Nature Communications",
    year: 2015,
    doi: "10.1038/ncomms8056",
    tags: ["Circadian Biology"]
  },
  {
    id: 16,
    title: "Synergistic interactions between the molecular and neuronal circadian networks drive behavioral circadian rhythms in Drosophila melanogaster",
    authors: "Weiss, R., Bartok, O., Mezan, S., Malka, Y., & Kadener, S.",
    journal: "PLOS Genetics",
    year: 2014,
    doi: "10.1371/journal.pgen.1004252",
    tags: ["Circadian Biology"]
  },
  {
    id: 17,
    title: "Dynamic hyper-editing underlies temperature adaptation in Drosophila",
    authors: "Buchumenski, I., Bartok, O., Ashwal-Fluss, R., Pandey, V., Porath, H. T., Levanon, E. Y., & Kadener, S.",
    journal: "PLOS Genetics",
    year: 2017,
    doi: "10.1371/journal.pgen.1006931",
    tags: ["Circadian Biology"]
  },
  {
    id: 18,
    title: "PDF signaling is an integral part of the Drosophila circadian molecular oscillator",
    authors: "Mezan, S., Feuz, J.-D., Deplancke, B., & Kadener, S.",
    journal: "Cell Reports",
    year: 2016,
    doi: "10.1016/j.celrep.2016.09.038",
    tags: ["Circadian Biology"]
  },
  {
    id: 19,
    title: "Genome-wide analysis of light- and temperature-entrained circadian transcripts in C. elegans",
    authors: "Van der Linden, A. M., Beverly, M., Kadener, S., Rodriguez, J., Wasserman, S., Rosbash, M., & Sengupta, P.",
    journal: "PLOS Biology",
    year: 2010,
    doi: "10.1371/journal.pbio.1000503",
    tags: ["Circadian Biology"]
  },
  {
    id: 20,
    title: "Mathematical model of the Drosophila circadian clock: loop regulation and transcriptional integration",
    authors: "Fathallah-Shaykh, H. M., Bona, J. L., & Kadener, S.",
    journal: "Biophysical Journal",
    year: 2009,
    doi: "10.1016/j.bpj.2009.07.050",
    tags: ["Circadian Biology"]
  },
  {
    id: 21,
    title: "A role for miRNAs in the Drosophila circadian clock",
    authors: "Kadener, S., Menet, J. S., Sugino, K., Horwich, M. D., Weissbein, U., Nawathean, P., Vagin, V., Zamore, P. D., Nelson, S., & Rosbash, M.",
    journal: "Genes & Development",
    year: 2009,
    doi: "10.1101/gad.1819509",
    tags: ["Circadian Biology"]
  },
  {
    id: 22,
    title: "Genome-wide identification of targets of the Drosha-Pasha/DGCR8 complex",
    authors: "Kadener, S., Rodriguez, J., Abruzzi, K. C., & Rosbash, M.",
    journal: "RNA",
    year: 2009,
    doi: "10.1261/rna.1319309",
    tags: ["Circadian Biology"]
  },
  {
    id: 23,
    title: "Circadian transcription contributes to core period determination in Drosophila",
    authors: "Kadener, S., Schoer, R., Menet, J. S., & Rosbash, M.",
    journal: "PLOS Biology",
    year: 2008,
    doi: "10.1371/journal.pbio.0060119",
    tags: ["Circadian Biology"]
  },
  {
    id: 24,
    title: "Clockwork orange is a transcriptional repressor and a new Drosophila circadian pacemaker component",
    authors: "Kadener, S., Stoleru, D., McDonald, M., Nawathean, P., & Rosbash, M.",
    journal: "Genes & Development",
    year: 2007,
    doi: "10.1101/gad.1551307",
    tags: ["Circadian Biology"]
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
