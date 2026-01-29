import srcpImage from '@assets/generated_images/bioinformatics_pipeline_data_visualization.png';
import knockdownImage from '@assets/generated_images/rna_interference_shrna_mechanism.png';
import catalogsImage from '@assets/generated_images/scientific_database_network.png';
import spatialImage from '@assets/generated_images/spatial_transcriptomics_brain_map.png';
import standardsImage from '@assets/generated_images/scientific_standards_documentation.png';

// New Research Theme Images
import circRnaTheme from '@assets/circrna_1769717249956.png';
import circadianTheme from '@assets/generated_images/circadian_biology_rna_clock_schematic.png';
import genomicsTheme from '@assets/generated_images/computational_genomics_pipeline_schematic.png';
import spatialOmicsTheme from '@assets/generated_images/spatial_transcriptomics_fly_head_schematic.png';

import irisImage from '@assets/Iris_1767739801837.jpg';
import nandarImage from '@assets/Nandar_1767740032236.jpeg';
import sebastianImage from '@assets/kadener-400_1767801824700.jpg';
import nathanImage from '@assets/Nathan_1767801861147.jpeg';
import jazminImage from '@assets/Jazmin_1767802264089.jpg';
import yingshiImage from '@assets/Yingshi_1769714873900.jpg';

// Centralized content store for easy updates by the user.
// Editing this file updates the website content.

export const labInfo = {
  name: "Kadener Lab",
  tagline: "Unraveling the molecular logic of time and RNA",
  mission: "Welcome to the Kadener Lab! We are a curiosity-driven research group studying how RNA regulation and biological timing shape brain function and behavior, using Drosophila melanogaster (fruit flies) as our model organism. Our research centers on two main areas: understanding the roles of circular RNAs (circRNAs) and uncovering the neural and molecular mechanisms that control circadian rhythms.\n\nBy combining molecular biology, genetics, advanced imaging, and computational approaches, we investigate how gene expression and neural circuits influence behavior across development and aging. Our goal is to understand how RNA-based regulatory mechanisms contribute to fundamental processes such as neuronal function, aging, and neurodegeneration, and how disruptions in these processes may impact health and disease.",
  contact: {
    address: `Brandeis University
Rosenstiel Basic Medical Sciences Research Center
Floor 3, #333
415 South St
Waltham, MA 02453
United States of America`,
    phone: "781-736-2445",
    emails: ["kadenerlab@brandeis.edu", "skadener@brandeis.edu"]
  }
};

export const researchThemes = [
  {
    id: "circrnas",
    title: "Circular RNA Biology",
    shortDescription: "Circular RNAs (circRNAs) are highly stable RNA molecules enriched in the brain. We study how circRNAs are generated, how they function in cis (locally) and trans (at a distance), and how their exceptional stability allows them to accumulate over time and encode biological history.",
    description: `CircRNAs are produced by a non-canonical splicing event known as back-splicing, in which a downstream 5’ splice site is joined to an upstream 3’ splice site. This process competes directly with linear splicing and is influenced by multiple factors, including intronic features and RNA-binding proteins. Our work has shown that circRNA biogenesis is tightly coupled to transcription and canonical splicing, which in turn can influence gene expression. 

A major focus of the lab is discovering the role of RNA-binding proteins, in particular the Muscleblind (MBNL) family proteins, in regulating circRNA formation. These proteins can either promote or inhibit circularization itself, establishing feedback relationships between RNA processing and gene regulation.

Another interest of our lab is how circRNAs can be used as biomarkers for aging and how they contribute to the aging process itself. Research has shown that circRNAs are exceptionally stable molecules due to their covalently closed structure, which makes them resistant to exonuclease-mediated degradation. They are mainly found enriched in post-mitotic tissues such as the brain. Our work has demonstrated that circRNAs that increase with age are driven primarily by accumulation rather than increased transcription. This allows circRNAs to serve as accurate biomarkers of chronological age in neuronal tissues. Importantly, circRNA accumulation is not uniform across genes or cell types, suggesting production regulation and functional relevance rather than passive buildup.

Due to the stability of the circRNAs, we are also curious to know if they can be used as unique experience markers of prior physiological states. We have shown that specific circRNAs respond to changes in temperature, light conditions, metabolic stress, and other environmental stresses, and that these changes can persist long after the stimulus is removed. From this, we are exploring how these properties can be used to reconstruct past exposures and physiological states from the RNA profiles.

Additionally, altered circRNA profiles have been observed in multiple neurodegenerative diseases, cancer, metabolic diseases, and many more. Our work has contributed to the identification and characterization of circRNAs associated with oxidative stress and Parkinson’s disease in human samples. We are exploring circRNAs as informative biomarkers and mechanistic entry points for understanding disease-associated RNA dysregulation.`,
    image: circRnaTheme,
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
    shortDescription: "Circadian rhythms are internal, autonomous biological clocks which organize cellular, physiological, and behavioral timing into 24-hour cycles. Our lab works with the model organism Drosophila melanogaster to understand several aspects of the molecular clock.",
    description: `The cellular basis of circadian rhythms lies in cell autonomous molecular clocks located in many tissues throughout the body, but notably in so-called “clock neurons” which act as the master pacemaker cells organizing circadian physiological and behavioral adaptations. The molecular clock itself consists of a transcription-translation feedback loop subject to complex regulations at the molecular and network level which allow the maintenance of 24-hour rhythms despite stochastic molecular changes, and also permits certain environmental cues to alter the timing of the clock. Our lab works with the model organism Drosophila melanogaster to understand several aspects of the molecular clock:

- How does alternative splicing and different isoforms of clock genes affect the timing and plasticity of the clock?
- What is the neural and molecular basis of temperature adaptation of the clock?
- What proteins and non-coding RNAs play a role in the instability of several core clock genes? What is the mechanism of their action?
- What is the extent of diversity among neurons with oscillating gene expression, and how these oscillations are informed by the clock, or not?

Work from our lab, and others, has identified alternative splicing products of the Drosophila core clock gene timeless (tim) which are expressed in a temperature dependent manner. These protein-encoding isoforms play a critical role in adaptation of the clock to low temperatures which typically would slow down the biochemical processes ensuring the 24-hour circadian rhythm. Currently we are working to understand the mechanistic basis of these isoforms contribution to temperature adaptation and how exactly changes in temperature affect splicing to produce these novel forms of tim.

Certain genes that make up the core of the molecular clock produce inherently unstable mRNAs. Our lab uses high-throughput reporters and proximity labeling to identify molecules that interact with these mRNAs and drive their instability. We also seek to understand the precise role this instability has in the timing and robustness of the molecular clock.

Using single cell sequencing data, our lab has identified neurons that express certain genes in an oscillating manner, in the apparent absence of a molecular clock. One project in our lab aims to confirm where these neurons are located, what mechanism drives the oscillating gene expression they exhibit, and determine whether they are linked in any way to circadian rhythms. Similarly, we seek to understand glial cells that express the molecular clock, and what affect that has on glial function.`,
    image: circadianTheme,
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

Our work emphasizes reproducibility, careful normalization, and explicit modeling of RNA processing events. These approaches allow us to extract biologically meaningful signals from complex transcriptomic data and to integrate experimental and computational analyses.`,
    image: genomicsTheme,
    points: [
      "Bulk and single-cell RNA-seq",
      "Computational pipelines",
      "Reproducibility & Normalization"
    ]
  },
  {
    id: "spatial-omics",
    title: "Spatial Transcriptomics",
    shortDescription: "Work in progress!",
    description: "Work in progress!",
    image: spatialOmicsTheme,
    points: []
  }
];

export const people = [
  {
    id: "sk",
    name: "Sebastian Kadener",
    role: "Principal Investigator",
    bio: "Professor of Biology, Brandeis University\n\n**Education**\n\nPh.D  -  The University of Buenos Aires, Buenos Aires, Argentina\nLic. Cs. Biol.  -  The University of Buenos Aires, Buenos Aires, Argentina",
    image: sebastianImage,
    email: "skadener@brandeis.edu",
    scholar: "https://scholar.google.com/citations?user=Example",
    category: "PI"
  },
  {
    id: "yp",
    name: "Yingshi Peng",
    role: "Postdoctoral Researcher",
    bio: "Yingshi joined us in 2024, and he studies how circRNAs affect aging in Drosophila in our lab. Before coming to Brandeis, he obtained his Ph.D. degree in the lab of Prof. Elizabeth R. Gavis at Princeton University where he studied translational control of maternal transcripts in developing Drosophila oocytes. Outside of lab, he enjoys running, skiing, and photography.",
    image: yingshiImage,
    email: "",
    category: "Postdoc"
  },
  {
    id: "nb",
    name: "Nathan Brownstein",
    role: "Postdoctoral Researcher",
    bio: "Nathan completed their Ph.D in the Kadener lab at Brandeis in June 2025! They are originally from southern Connecticut and studied biochemistry and molecular biology at the College of Wooster in Wooster, Ohio. Their research focuses on mechanisms underlying post-transcriptional regulation in the Drosophila molecular clock utilizing techniques which include proximity interactome mapping, fluorescent imaging, standard molecular techniques and cell culture. In their spare time, Nathan enjoys podcasts, music, and painting miniatures.",
    image: nathanImage,
    email: "",
    category: "Postdoc"
  },
  {
    id: "jm",
    name: "Jazmin Morales",
    role: "Ph.D Candidate",
    bio: "Jazmin, a native of Queens, NYC, is a PhD candidate in the Kadener Lab. Her research focuses on investigating the neuronal localization and function of circMbl, primarily employing FISH, advanced imaging techniques, and transcriptomics. Outside of the lab, Jazmin enjoys reading, exploring diverse cuisines, and attempting to knit.",
    image: jazminImage,
    email: "",
    category: "Grad Student"
  },
  {
    id: "sb",
    name: "Sayan (Shaun) Biswas",
    role: "Ph.D Candidate",
    bio: "Sayan is originally from India where he completed his undergraduate training in Electrical Enginering at Jadavpur University, Kolkata. Prior to coming to Brandeis, Sayan worked in the Bangalore Life Science Cluster, India as a research fellow. He is a graduate student in the Molecular and Cell Biology program at Brandeis, and he is investigating the role of circRNA in aging and neurodegeneration.",
    image: "member-placeholder",
    email: "",
    category: "Grad Student"
  },
  {
    id: "mc",
    name: "Michael Canori",
    role: "Ph.D Candidate",
    bio: "Michael received his B.A in Cell Biology and Neuroscience from the Rutgers University in New Jersey and worked as a research assistant in Clotilde Lagier-Tourenne's Lab at MGH before joining our lab. He is currently investigating the molecular mechanism of muscleblind (Mbl) in the Drosophila nervous system.",
    image: "member-placeholder",
    email: "",
    category: "Grad Student"
  },
  {
    id: "sj",
    name: "Shruti Jha",
    role: "Ph.D Candidate",
    bio: "Shruti is a joint student between the Kadener and Griffith labs, with a strong passion for cell and molecular biology, particularly RNA biology in neurons. Her research focuses on investigating the role of circular RNAs in synaptic function and plasticity, using Drosophila as a model organism. To address her research questions, she utilizes a variety of advanced techniques, including single-molecule imaging, proteomics, sequencing, and behavioral monitoring of the flies.",
    image: "member-placeholder",
    email: "",
    category: "Grad Student"
  },
  {
    id: "in",
    name: "Iris Nava",
    role: "Ph.D Candidate",
    bio: "Iris received her B.S. in biology with a concentration in Cellular and Molecular Biology from the University of Nevada, Las Vegas. Her work in the Kadener lab focuses on the interactions of circRNAs and RNA degradation proteins. Outside of the lab, she enjoys hiking, crafting, and reading.",
    image: irisImage,
    email: "",
    category: "Grad Student"
  },
  {
    id: "tns",
    name: "The Nandar Su",
    role: "Research Technician/Lab Manager",
    bio: "Nandar joined the Kadener lab after completing her B.S in Biology and M.S in Bioinformatics at Juniata College in 2023. She works mainly on maintaining and running the lab and helps with projects that need an extra hand. She enjoys reading books and going on trips whenever she is free.",
    image: nandarImage,
    email: "",
    category: "Staff"
  },
  {
    id: "al",
    name: "Alex Luo",
    role: "Undergraduate",
    bio: "[PLACEHOLDER BIO]",
    image: "member-placeholder",
    email: "",
    category: "Undergrad"
  },
  {
    id: "bs",
    name: "Bee Silverman",
    role: "Undergraduate",
    bio: "[PLACEHOLDER BIO]",
    image: "member-placeholder",
    email: "",
    category: "Undergrad"
  },
  {
    id: "jt",
    name: "Japhy Theobald",
    role: "Undergraduate",
    bio: "circRNAs and aging",
    image: "member-placeholder",
    email: "",
    category: "Undergrad"
  },
  {
    id: "kc",
    name: "Kat Chin",
    role: "Undergraduate",
    bio: "[PLACEHOLDER BIO]",
    image: "member-placeholder",
    email: "",
    category: "Undergrad"
  },
  {
    id: "shj",
    name: "Shirley Jin",
    role: "Undergraduate",
    bio: "[PLACEHOLDER BIO]",
    image: "member-placeholder",
    email: "",
    category: "Undergrad"
  },
  {
    id: "ss",
    name: "Susie Shi",
    role: "Undergraduate",
    bio: "circRNAs in aging",
    image: "member-placeholder",
    email: "",
    category: "Undergrad"
  },
  {
    id: "do",
    name: "Daniel Olusheki",
    role: "Undergraduate",
    bio: "",
    image: "member-placeholder",
    email: "",
    category: "Undergrad"
  },
  {
    id: "ds",
    name: "Daniel Shin",
    role: "Undergraduate",
    bio: "",
    image: "member-placeholder",
    email: "",
    category: "Undergrad"
  },
  {
    id: "vj",
    name: "Vincent Jared",
    role: "Undergraduate",
    bio: "",
    image: "member-placeholder",
    email: "",
    category: "Undergrad"
  },
  {
    id: "lug",
    name: "Leila Uwamungu Gasaro",
    role: "Undergraduate",
    bio: "",
    image: "member-placeholder",
    email: "",
    category: "Undergrad"
  },
  {
    id: "hc",
    name: "Helen Chen",
    role: "Undergraduate",
    bio: "",
    image: "member-placeholder",
    email: "",
    category: "Undergrad"
  },
  {
    id: "dt",
    name: "David Tong",
    role: "Undergraduate",
    bio: "",
    image: "member-placeholder",
    email: "",
    category: "Undergrad"
  },
  {
    id: "hyk",
    name: "Han-yin Ku",
    role: "Undergraduate",
    bio: "",
    image: "member-placeholder",
    email: "",
    category: "Undergrad"
  },
  {
    id: "pd",
    name: "Pirm Dhararag",
    role: "Undergraduate",
    bio: "",
    image: "member-placeholder",
    email: "",
    category: "Undergrad"
  },
  {
    id: "zh",
    name: "Zena Hu",
    role: "Undergraduate",
    bio: "",
    image: "member-placeholder",
    email: "",
    category: "Undergrad"
  },
  {
    id: "sherren",
    name: "Sherren",
    role: "Undergraduate",
    bio: "",
    image: "member-placeholder",
    email: "",
    category: "Undergrad"
  },
  {
    id: "aa",
    name: "Anjali Amin",
    role: "Undergraduate",
    bio: "",
    image: "member-placeholder",
    email: "",
    category: "Undergrad"
  },
  {
    id: "shc",
    name: "Shi Hao Chen/Jack",
    role: "Undergraduate",
    bio: "",
    image: "member-placeholder",
    email: "",
    category: "Undergrad"
  }
];

export const alumni = [
  {
    category: "Ph.D Alumni",
    members: [
      "Nathan Brownstein",
      "Hector Villalba",
      "Esteban Beckel",
      "Ornella Giusti",
      "Sonia Di Mauro",
      "Jose Lukin",
      "Antonia Alvarez",
      "Francisco Fustin",
      "Horacio Rotllant",
      "Arnaldo Zamanillo",
      "Jie Xiao",
      "Ezequiel Petrillo",
      "Maximilian Pedroncini",
      "Shereen B. Mohammad",
      "Daniel Spier"
    ]
  },
  {
    category: "Postdoctoral Alumni",
    members: [
      "Japhy Theobald",
      "Hector Villalba",
      "Francisco Fustin",
      "Ornella Giusti",
      "Sonia Di Mauro",
      "Sara Bulat"
    ]
  },
  {
    category: "Graduate Alumni",
    members: [
      "Anita L. De la Iglesia",
      "Maximilian Pedroncini",
      "Shereen B. Mohammad",
      "Daniel Spier",
      "Jose Lukin",
      "Antonia Alvarez",
      "Daniela Frezza",
      "Soledad A. Solari",
      "Veronica Romero",
      "Ana Belén Zylberman",
      "María Laura Rufino",
      "Manuel A. Alvarez",
      "Florencia Di Mauro"
    ]
  },
  {
    category: "Undergraduate Alumni",
    members: [
      "Esteban Beckel",
      "Ornella Giusti",
      "Sonia Di Mauro",
      "Jose Lukin",
      "Maximilian Pedroncini",
      "Antonia Alvarez",
      "Francisco Fustin",
      "Daniel Spier"
    ]
  }
];

export const publications = {
  featured: [
    {
      id: "stoehr2024",
      title: "A circadian clock in Drosophila ensures early developmental synchrony in individual animal physiology",
      authors: "Stoehr, A., Monteleone, D., Fridman, N., Morgan, M., Morales, J., Zinzi, A., Biswas, S., Villalba, H., Ruben, M., Kadener, S. (2024)",
      journal: "Science",
      year: 2024,
      doi: "10.1126/science.ado8027",
      abstract: "Circadian timing is critical for coordinating physiology and behavior. Here we show that a circadian clock in Drosophila ensures early developmental synchrony across individual animals by regulating clock output genes during development.",
      category: "Circadian Biology"
    },
    {
      id: "rothe2024",
      title: "mRNA tailing and RNA binding proteins determine circRNA translation and circMbl levels",
      authors: "Rothe, M., Beckel, E., Pedroncini, M., & Kadener, S. (2024)",
      journal: "Nature Communications",
      year: 2024,
      doi: "10.1038/s41467-024-46985-1",
      abstract: "We identify how mRNA tailing and RNA binding proteins influence circRNA translation and circMbl levels, providing insights into circRNA regulation and function.",
      category: "Circular RNA Biology"
    },
    {
      id: "mastrangelo2023",
      title: "Complex nuclear structure of fly circadian neurons",
      authors: "Mastrangelo, M.D., O'Donnell, K.H., Jung, J., Jacobson, J., Borch Jensen, M., & Kadener, S. (2023)",
      journal: "Nature",
      year: 2023,
      doi: "10.1038/s41586-023-06690-4",
      abstract: "We explore the nuclear organization of fly circadian neurons, revealing complex nuclear structures that support circadian gene regulation.",
      category: "Circadian Biology"
    }
  ],
  categories: {
    "Circular RNA Biology": [
      {
        id: "rothe2024",
        title: "mRNA tailing and RNA binding proteins determine circRNA translation and circMbl levels",
        authors: "Rothe, M., Beckel, E., Pedroncini, M., & Kadener, S. (2024)",
        journal: "Nature Communications",
        year: 2024,
        doi: "10.1038/s41467-024-46985-1"
      },
      {
        id: "stoehr2021",
        title: "Clock-dependent transcriptional cycles in the Drosophila brain",
        authors: "Stoehr, A.M., Joseph, A., Ganeshan, S., Agarwal, A., & Kadener, S. (2021)",
        journal: "Cell",
        year: 2021,
        doi: "10.1016/j.cell.2021.03.034"
      }
    ],
    "Circadian Biology": [
      {
        id: "stoehr2024",
        title: "A circadian clock in Drosophila ensures early developmental synchrony in individual animal physiology",
        authors: "Stoehr, A., Monteleone, D., Fridman, N., Morgan, M., Morales, J., Zinzi, A., Biswas, S., Villalba, H., Ruben, M., Kadener, S. (2024)",
        journal: "Science",
        year: 2024,
        doi: "10.1126/science.ado8027"
      }
    ],
    "Genomics & Computational Biology": [
      {
        id: "example1",
        title: "High-throughput circRNA detection pipeline",
        authors: "Kadener Lab (2023)",
        journal: "Bioinformatics",
        year: 2023,
        doi: "10.1093/bioinformatics/example"
      }
    ]
  }
};

export const news = [
  {
    id: 1,
    title: "Kadener Lab awarded new NIH grant",
    date: "2024-11-15",
    content: "We are excited to announce that the Kadener Lab has received a new NIH grant to investigate the role of circular RNAs in aging and neurodegeneration. This funding will support our research on RNA biology and circadian rhythms in Drosophila."
  },
  {
    id: 2,
    title: "New publication in Science",
    date: "2024-06-21",
    content: "Congratulations to our team on publishing our latest findings on circadian clocks in Drosophila development in Science. This work reveals how circadian rhythms ensure physiological synchrony across individual animals during early development."
  },
  {
    id: 3,
    title: "Welcome new lab members",
    date: "2024-09-01",
    content: "We welcome several new lab members joining us this fall. Their diverse expertise will strengthen our research programs in RNA biology, circadian rhythms, and computational genomics."
  }
];

export const resources = {
  sections: [
    {
      title: "External Resources",
      items: [
        {
          title: "FlyBase",
          description: "Comprehensive database for Drosophila genetics and molecular biology",
          url: "https://flybase.org"
        },
        {
          title: "NCBI Gene Expression Omnibus",
          description: "Public functional genomics data repository",
          url: "https://www.ncbi.nlm.nih.gov/geo/"
        },
        {
          title: "CircBase",
          description: "Database of circular RNAs in multiple organisms",
          url: "http://www.circbase.org/"
        }
      ]
    },
    {
      title: "Lab Protocols",
      items: [
        {
          title: "RNA Extraction Protocol",
          description: "Standard protocol for extracting high-quality RNA from Drosophila tissues",
          url: "#"
        },
        {
          title: "circRNA Detection Pipeline",
          description: "Computational pipeline for identifying and quantifying circular RNAs",
          url: "#"
        }
      ]
    }
  ]
};
