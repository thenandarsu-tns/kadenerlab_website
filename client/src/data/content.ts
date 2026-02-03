import srcpImage from '@assets/generated_images/bioinformatics_pipeline_data_visualization.png';
import knockdownImage from '@assets/generated_images/rna_interference_shrna_mechanism.png';
import catalogsImage from '@assets/generated_images/scientific_database_network.png';
import spatialImage from '@assets/generated_images/spatial_transcriptomics_brain_map.png';
import standardsImage from '@assets/generated_images/scientific_standards_documentation.png';

// New Research Theme Images
import circRnaTheme from '@assets/circrna_1769717249956.png';
import circadianTheme from "@/assets/images/circadian_thumb_1769810286142.jpg";
import genomicsTheme from "@/assets/images/heatmap_1769802867782.png";
import spatialOmicsTheme from "@/assets/images/spatial_1769809881416.png";
import agingNeuroTheme from "@/assets/images/aging-neuro-thumb.jpg";
import srcpTheme from "@/assets/images/srcp-thumb.jpg";
import atlasTheme from "@/assets/images/atlas-thumb.jpg";

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
  mission: "We are a curiosity-driven research group studying how RNA regulation and biological timing shape brain function and behavior, using Drosophila melanogaster (fruit flies) as our model organism. Our research centers on two main areas: understanding the roles of circular RNAs (circRNAs) and uncovering the neural and molecular mechanisms that control circadian rhythms.\n\nBy combining molecular biology, genetics, advanced imaging, and computational approaches, we investigate how gene expression and neural circuits influence behavior across development and aging. Our goal is to understand how RNA-based regulatory mechanisms contribute to fundamental processes such as neuronal function, aging, and neurodegeneration, and how disruptions in these processes may impact health and disease.",
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
    shortDescription: "Circular RNAs (circRNAs) are highly stable RNA molecules enriched in the brain. We study how circRNAs are generated, how they function in cis and trans, and how their exceptional stability allows them to accumulate over time, and use them as biomarkers.",
    description: `CircRNAs are produced by a non-canonical splicing event known as back-splicing, in which a downstream 5’ splice site is joined to an upstream 3’ splice site. This process competes directly with linear splicing and is influenced by multiple factors, including intronic features and RNA-binding proteins. Our work has shown that circRNA biogenesis is tightly coupled to transcription and canonical splicing, which in turn can influence gene expression. 

A major focus of the lab is discovering the role of RNA-binding proteins, in particular the Muscleblind (MBNL) family proteins, in regulating circRNA formation. These proteins can either promote or inhibit circularization itself, establishing feedback relationships between RNA processing and gene regulation.

Another interest of our lab is how circRNAs can be used as biomarkers for aging and how they contribute to the aging process itself. Research has shown that circRNAs are exceptionally stable molecules due to their covalently closed structure, which makes them resistant to exonuclease-mediated degradation. They are mainly found enriched in post-mitotic tissues such as the brain. Our work has demonstrated that circRNAs that increase with age are driven primarily by accumulation rather than increased transcription. This allows circRNAs to serve as accurate biomarkers of chronological age in neuronal tissues. Importantly, circRNA accumulation is not uniform across genes or cell types, suggesting production regulation and functional relevance rather than passive buildup.

Due to the stability of the circRNAs, we are also curious to know if they can be used as unique experience markers of prior physiological states. We have shown that specific circRNAs respond to changes in temperature, light conditions, metabolic stress, and other environmental stresses, and that these changes can persist long after the stimulus is removed. From this, we are exploring how these properties can be used to reconstruct past exposures and physiological states from the RNA profiles.

Additionally, altered circRNA profiles have been observed in multiple neurodegenerative diseases, cancer, metabolic diseases, and many more. Our work has contributed to the identification and characterization of circRNAs associated with oxidative stress and Parkinson’s disease in human samples. We are exploring circRNAs as informative biomarkers and mechanistic entry points for understanding disease-associated RNA dysregulation.

circRNA in Aging and Neurodegeneration

CircRNAs and Neurodegenerative Disease (PD): The Kadener Lab utilizes our RNA expertise to explore how RNA profiles change in disorders such as Parkinson’s. In a collaborative study (EMBO Molecular Medicine 2020), we created a comprehensive Parkinson’s Disease circRNA resource by sequencing brains of PD patients versus healthy controls. An important finding was that in the healthy aging brain (specifically the substantia nigra region), circRNA levels normally increase with age, but in Parkinson’s patients this age-related accumulation is disrupted. PD patients had an overall reduction in circRNA abundance in the substantia nigra compared to age-matched controls, suggesting circRNA biogenesis or stability is altered in disease. Intriguingly, in other brain regions of PD patients, circRNA levels increased, indicating region-specific differences.

Specific CircRNA as a PD Biomarker: From that study, one circRNA in particular, circSLC8A1, stood out. We found circSLC8A1 is significantly upregulated in the substantia nigra of individuals with Parkinson’s disease. This circRNA carries multiple binding sites for miR-128, a microRNA involved in neuronal oxidative stress responses, and was shown to bind strongly to the Argonaute protein (which suggests it sequesters miR-128). Consistently, the mRNA targets of miR-128 were found to be increased in PD brains, implying that when circSLC8A1 levels rise, it might sponge miR-128 and thereby dysregulate oxidative stress pathways. We also demonstrated in cell experiments that circSLC8A1 levels increase under oxidative stress (e.g. when cells are exposed to toxin) and decrease with an antioxidant treatment. Together, these results link circSLC8A1 to the oxidative stress aspect of Parkinson’s and suggest it could be a marker or even contributor to the disease process. This kind of finding is valuable for understanding neurodegeneration and potentially identifying new therapeutic targets or biomarkers.`,
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
      "Temperature Compensation"
    ]
  },
  {
    id: "genomics",
    title: "Genomics & Computational Biology",
    shortDescription: "We develop and apply computational and experimental tools to measure RNA processing, circular RNA expression, and rhythmic gene regulation with high accuracy and reproducibility.",
    description: `We use bulk and single-cell RNA sequencing to study RNA processing, circRNA expression, and rhythmic gene regulation across tissues and cell types. A major focus of the lab is developing computational pipelines that accurately quantify circular RNAs and distinguish them from linear transcripts.`,
    image: genomicsTheme,
    points: [
      "Bulk and single-cell RNA-seq",
      "Computational pipelines"
    ]
  },
];

export const resources = [
  {
    id: "spatial-omics",
    title: "Spatial Transcriptomics",
    shortDescription: "Spatially resolved gene expression mapping in Drosophila brain tissue using 10x Visium and other cutting-edge technologies.",
    description: `Work in progress. Stay tuned!`,
    image: spatialOmicsTheme,
    points: [
      "10x Visium Platform",
      "Spatially Resolved Expression",
      "Brain Mapping"
    ]
  },
  {
    id: "srcp",
    title: "SRCP Pipeline",
    shortDescription: "A comprehensive computational pipeline for accurate annotation and quantification of circular RNAs from RNA-seq data.",
    description: `SRCP (Short Read CircRNA Pipeline) is a comprehensive computational workflow developed in our lab for the accurate identification and quantification of circular RNAs from high-throughput sequencing data. The pipeline integrates multiple detection algorithms to reduce false positives and provides robust normalization methods. It is designed to be user-friendly and scalable, allowing researchers to process large datasets efficiently.`,
    image: srcpTheme,
    points: [
      "circRNA Detection",
      "Quantification & Normalization",
      "High-throughput Analysis"
    ]
  },
  {
    id: "drosophila-atlas",
    title: "Drosophila Atlas",
    shortDescription: "Work in progress! A comprehensive atlas of gene expression and RNA regulation in the Drosophila brain.",
    description: `Work in progress! We are building a comprehensive atlas of gene expression in the Drosophila brain, integrating single-cell RNA-seq, spatial transcriptomics, and circRNA profiling. This resource will serve as a reference for the community to explore gene regulation in specific neuronal populations and brain regions.`,
    image: atlasTheme,
    points: [
      "Brain Atlas",
      "Gene Expression Map",
      "Multi-omics Integration"
    ]
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
  },
  {
    id: "alum-jonathan-garrity",
    name: "Jonathan Garrity",
    role: "Undergrad Researcher (2023-2025)",
    bio: "",
    image: "member-placeholder",
    email: "",
    category: "Alumni"
  },
  {
    id: "alum-ane-martin-anduaga",
    name: "Ane Martin Anduaga",
    role: "Postdoctoral Researcher (2018-2024)",
    bio: "",
    image: "member-placeholder",
    email: "",
    category: "Alumni"
  },
  {
    id: "alum-teddy-rashkover",
    name: "Teddy Rashkover",
    role: "Master Student (2023)",
    bio: "",
    image: "member-placeholder",
    email: "",
    category: "Alumni"
  },
  {
    id: "alum-ken-kirio",
    name: "Ken Kirio",
    role: "Undergrad Researcher (2021-2023)",
    bio: "",
    image: "member-placeholder",
    email: "",
    category: "Alumni"
  },
  {
    id: "alum-claire-martel",
    name: "Claire Martel",
    role: "Undergrad Researcher (2020-2023)",
    bio: "",
    image: "member-placeholder",
    email: "",
    category: "Alumni"
  },
  {
    id: "alum-ines-lucia-patop",
    name: "Ines Lucia Patop",
    role: "Graduate Student (2018-2022)",
    bio: "",
    image: "member-placeholder",
    email: "",
    category: "Alumni"
  },
  {
    id: "alum-michela-zaffagni",
    name: "Michela Zaffagni",
    role: "Graduate Student (2018-2022)",
    bio: "",
    image: "member-placeholder",
    email: "",
    category: "Alumni"
  },
  {
    id: "alum-jenna-harris",
    name: "Jenna Harris",
    role: "Graduate Student (2018-2023)",
    bio: "",
    image: "member-placeholder",
    email: "",
    category: "Alumni"
  },
  {
    id: "alum-sinead-ngyuen",
    name: "Sinead Ngyuen",
    role: "Lab Manager (2017-2023)",
    bio: "",
    image: "member-placeholder",
    email: "",
    category: "Alumni"
  },
  {
    id: "alum-aarti-jajoo",
    name: "Aarti Jajoo",
    role: "Postdoctoral Researcher (2019-2020)",
    bio: "",
    image: "member-placeholder",
    email: "",
    category: "Alumni"
  },
  {
    id: "alum-mor-hanan",
    name: "Mor Hanan",
    role: "Postdoctoral Researcher (2017-2019)",
    bio: "",
    image: "member-placeholder",
    email: "",
    category: "Alumni"
  },
  {
    id: "alum-stanislaus-wuest",
    name: "Stanislaus Wuest",
    role: "Postdoctoral Researcher (2018-2019)",
    bio: "",
    image: "member-placeholder",
    email: "",
    category: "Alumni"
  },
  {
    id: "alum-andres-velaz-lopez",
    name: "Andres Velaz-Lopez",
    role: "Lab Technician (2017-2019)",
    bio: "",
    image: "member-placeholder",
    email: "",
    category: "Alumni"
  },
  {
    id: "alum-nagarjuna-reddy-pamudurti",
    name: "Nagarjuna Reddy Pamudurti",
    role: "Postdoctoral Researcher (2015-2018)",
    bio: "",
    image: "member-placeholder",
    email: "",
    category: "Alumni"
  },
  {
    id: "alum-reut-ashwal-fluss",
    name: "Reut Ashwal-Fluss",
    role: "Postdoctoral Researcher (2013-2017)",
    bio: "",
    image: "member-placeholder",
    email: "",
    category: "Alumni"
  },
  {
    id: "alum-osnat-bartok",
    name: "Osnat Bartok",
    role: "Postdoctoral Researcher (2013-2017)",
    bio: "",
    image: "member-placeholder",
    email: "",
    category: "Alumni"
  },
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

export interface Publication {
  id: number;
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  tags?: string[];
  summary?: string;
}

export const publications: Publication[] = [
  {
    id: 1,
    title:
      "Neuronal activity-dependent gene expression is stimulus-specific and changes with neuronal maturation",
    authors:
      "Lukin J., Beckel M.S., Pedroncini O., Giusti S.A., Di Mauro G., Linenberg I.M., Patop I.L., Chernomoretz A., Marin-Burgin A., Kadener S., Refojo D.",
    journal: "Frontiers in Molecular Neuroscience",
    year: 2025,
    tags: ["Neuronal Maturation"]
  },
  {
    id: 2,
    title:
      "circRNAs are extremely stable in the brain and can serve as age and experience markers",
    authors:
      "Kirio K., Patop I., Anduaga-Martin A., Harris J., Pamudurti N., Martel C. and Kadener S.",
    journal: "Cell Reports",
    year: 2025,
    tags: ["Circular RNAs"]
  },
  {
    id: 2.5,
    title:
      "Tissue-like multicellular development triggered by mechanical compression in archaea",
    authors:
      "Rados T., Leland O.S., Escudeiro P., Mallon J., Andre K., Caspy I., von Kügelgen A., Stolovicki E., Nguyen S., Patop I.L., Rangel L.T., Kadener S., Renner L.D., Thiel V., Soen Y., Bharat T.A.M., Alva V., Bisson A.",
    journal: "Science",
    year: 2025,
    doi: "10.1126/science.adu0047",
    tags: ["Archaea", "Mechanobiology"]
  },
  {
    id: 3,
    title:
      "A brain-enriched circular RNA controls excitatory neurotransmission and restricts sensitivity to aversive stimuli",
    authors:
      "Giusti S., Pino N., Pannunzio C., Ogando M., Armando N., Garrett A., Zimprich A., Becker L., Gimeno M., Lukin J., Merino F., Pardi1B., Pedroncini O., Di Mauro G., Gailus Durner V., Fuchs H., Hrabe de Angelis M., Patop I., Turck C., Deussing J., Vogt Weisenhorn D., Jahn O., Kadener S., Hölter S., Brose N., Giesert F., Wurst W., Marin-Burgin A. and Refojo D.",
    journal: "Science Advances",
    year: 2024,
    tags: ["Circular RNAs"]
  },
  {
    id: 4,
    title:
      "In Vivo Tissue-Specific Knockdown of circRNAs Using shRNAs in Drosophila melanogaster",
    authors: "Patop I., Canori M. and S Kadener.",
    journal: "Circular RNAs",
    year: 2024,
    tags: ["Circular RNAs", "Methodology"]
  },
  {
    id: 5,
    title:
      "Alternative polyadenylation factor CPSF6 regulates temperature compensation of the mammalian circadian clock",
    authors:
      "Schmal C., Maier B., Ashwal-Fluss R., Bartok O., Finger A., Bange T., Koutsouli S., Robles M., Kadener S., Herzel H and Kramer A.",
    journal: "PLoS Biology",
    year: 2023,
    tags: ["Circadian Biology"]
  },
  {
    id: 6,
    title:
      "Organismal landscape of clock cells and circadian gene expression in Drosophila",
    authors: "Patop I, Anduaga A., Bussi I., Ceriani M. and Kadener S.",
    journal: "bioRxiv",
    year: 2023,
    tags: ["Circadian Biology", "Genomics"]
  },
  {
    id: 7,
    title:
      "The chromatin factor ROW cooperates with BEAF-32 in regulating long-range genes",
    authors: "Herman N., Kadener S.* and Shifman S.*",
    journal: "EMBO Reports",
    year: 2022,
    tags: ["Genomics"]
  },
  {
    id: 8,
    title:
      "Artificially stimulating retrotransposon activity increases mortality and accelerates a subset of aging phenotypes in Drosophila",
    authors:
      "Rygal J., Anduaga Martin A., Bitman E, Rivellese E, Kadener S., Marr M.",
    journal: "eLife",
    year: 2022,
    tags: ["Aging"]
  },
  {
    id: 9,
    title:
      "circMbl functions in cis and in trans to regulate gene expression and physiology in a tissue-specific fashion",
    authors:
      "Pamudurti NP*, Patop* IL, Krishnamoorthy A., Bartok O., Maya R., Lerner N., Ashwall-Fluss R., Konakondla-Jacob V, Beatus T, and Kadener S.",
    journal: "Cell Reports",
    year: 2022,
    tags: ["Circular RNAs"]
  },
  {
    id: 10,
    title: "Best practice standards for circRNA research",
    authors:
      "Nielsen A., Bindereif A., Bozzoni I, Hanan M., Hansen T., Irimia T., Kadener S., Kristensen L., Legnini I., Morlando M., Olesen M., Pasterkamp R., Preibisch S., Rajewsky N., Suenkel C. and Kjems J.",
    journal: "Nature Methods",
    year: 2022,
    tags: ["Circular RNAs", "Methodology"]
  },
  {
    id: 11,
    title:
      "SARS-CoV-2 Nsp14 mediates the effects of viral infection on the host cell transcriptome",
    authors:
      "Zaffagni M., Harris JM, Patop IL, Pamudurti NR, Nguyen S. and Kadener S.",
    journal: "eLife",
    year: 2022,
    tags: ["Virology", "Transcriptomics"]
  },
  {
    id: 12,
    title:
      "Parallel evolution of a splicing program controlling neuronal excitability in flies and mammals",
    authors:
      "Torres-Mendez A., Pop S., Bonnal S., Almudi I., Roberts R., Paolantoni C., Alcaina A., Avola A., Martín-Anduaga A., Haussmann I., Morin V., Soller M., Kadener S., Roignant JY, Prieto-Godino L., Irimia M.",
    journal: "Science Advances",
    year: 2022,
    tags: ["Evolution", "Splicing"]
  },
  {
    id: 13,
    title:
      "SRCP: A comprehensive pipeline for accurate annotation and quantification of circRNAs",
    authors:
      "Rabin A., Zaffagni M., Ashwal-Fluss R., Patop I., Jajoo A., Shenzis S., Carmel L. and Kadener S.",
    journal: "Genome Biology",
    year: 2021,
    tags: ["Circular RNAs", "Methodology"]
  },
  {
    id: 14,
    title:
      "Using Drosophila to uncover molecular and physiological functions of circRNAs",
    authors: "Krishnamoorthy A. and Kadener S.",
    journal: "Methods",
    year: 2021,
    tags: ["Circular RNAs", "Methodology"]
  },
  {
    id: 15,
    title:
      "Extensive tissue-specific expression variation and novel regulators underlying circadian behavior",
    authors:
      "Litovchenko A., Meireles-Filho A., Frochaux M., Bevers R., Prunotto A., Martin Anduaga A., Hollis B., Gardeux V., Braman V., Russeil J., Kadener S., Dal Peraro M., Deplancke. B.",
    journal: "Science Advances",
    year: 2021,
    tags: ["Circadian Biology"]
  },
  {
    id: 16,
    title:
      "An integrative omics approach reveals posttranscriptional mechanisms underlying circadian temperature compensation",
    authors:
      "Schmal C., Maier B., Ashwal-Fluss R., Bartok O., Finger AM, Bange T., Koutsouli S., Robles MS, Kadener S., Herzel H. and Kramer A.",
    journal: "bioRxiv",
    year: 2021,
    tags: ["Circadian Biology"]
  },
  {
    id: 17,
    title:
      "The chromatin factor ROW cooperates with BEAF-32 in regulating long-range genes",
    authors: "Herman N., Kadener S.* and Shifman S.*",
    journal: "bioRxiv",
    year: 2021,
    tags: ["Genomics"]
  },
  {
    id: 18,
    title:
      "A Parkinson's disease Circ RNA s Resource reveals a link between circ SLC 8A1 and oxidative stress",
    authors:
      "Hanan M., Simchovitz A., Yayon N.,Vaknine S., Cohen‐Fultheim R., Karmon M., Madrer N., Rohrlich T., Maman M., Bennett E., Greenberg D., Meshorer E., Levanon E., Soreq H. and Kadener S.",
    journal: "EMBO Mol Medicine",
    year: 2020,
    tags: ["Circular RNAs", "Parkinson's Disease"]
  },
  {
    id: 19,
    title: "An in vivo strategy for knockdown of circular RNAs",
    authors:
      "Pamudurti N., Patop I., Krishnamoorthy A., Ashwal-Fluss R., Bartok O., Kadener S.",
    journal: "Cell Discovery",
    year: 2020,
    tags: ["Circular RNAs", "Methodology"]
  },
  {
    id: 20,
    title:
      "Host-derived circular RNAs display proviral activities in Hepatitis C virus-infected cells",
    authors:
      "Chen T., Tallo-Parra M., Cao Q., Kadener S., Böttcher R., Pérez-Vilaró G., Boonchuen P., Somboonwiwat K., Díez J., Sarnow P.",
    journal: "PLoS Pathogens",
    year: 2020,
    tags: ["Circular RNAs", "Virology"]
  },
  {
    id: 21,
    title:
      "A lncRNA survey finds increases in neuroprotective LINC‐PINT in Parkinson’s disease substantia nigra",
    authors:
      "Simchovitz A., Hanan M., Yayon N., Lee S., Bennett E., Greenberg D., Kadener S., Soreq H.",
    journal: "Aging Cell",
    year: 2020,
    tags: ["lncRNA", "Parkinson's Disease"]
  },
  {
    id: 22,
    title: "CRISPR-Cas13 mediated Knock Down in Drosophila cultured cells",
    authors: "Viswanatha R., Zaffagni M., Zirin J., Perrimon N.*, Kadener S.*",
    journal: "bioRxiv",
    year: 2020,
    tags: ["CRISPR", "Methodology"]
  },
  {
    id: 23,
    title:
      "Drosophila PSI controls circadian period and the phase of circadian behavior under temperature cycle via tim splicing",
    authors: "Foley L., Ling J., Joshi R., Evantal N., S Kadener S., Emery P",
    journal: "eLife",
    year: 2019,
    tags: ["Circadian Biology", "Splicing"]
  },
  {
    id: 24,
    title:
      "Thermosensitive alternative splicing senses and mediates temperature adaptation in Drosophila",
    authors: "Anduaga A.*, Evantal N.*, Patop I., Bartok O., Weiss R., Kadener S.",
    journal: "eLife",
    year: 2019,
    tags: ["Splicing", "Temperature Adaptation"]
  },
  {
    id: 25,
    title:
      "NEAT1 is overexpressed in Parkinson’s disease substantia nigra and confers drug-inducible neuroprotection from oxidative stress",
    authors:
      "Simchovitz A., Hanan M., Niederhoffer N., Madrer N., Yayon N., Bennett E., Greenberg D., Kadener S. and Soreq H.",
    journal: "FASEB Journal",
    year: 2019,
    tags: ["Parkinson's Disease", "lncRNA"]
  },
  {
    id: 26,
    title: "Past, present and future of circRNAs",
    authors: "Patop I., Wust S. and Kadener S.",
    journal: "EMBO Journal",
    year: 2019,
    tags: ["Circular RNAs", "Review"]
  },
  {
    id: 27,
    title: "Craving for Introns",
    authors: "Zaffagni M. and Kadener S.",
    journal: "Molecular Cell",
    year: 2019,
    tags: ["Commentary"]
  },
  {
    id: 28,
    title:
      "Transcription of a plasticity gene is activated by neuronal hyperpolarization",
    authors: "Zhu Z., Ortiz T., Mezan S., Kadener S. and Blau J.",
    journal: "bioRxiv",
    year: 2019,
    tags: ["Neuronal Plasticity"]
  },
  {
    id: 29,
    title:
      "High-accuracy determination of internal circadian time from a single blood sample",
    authors:
      "Wittenbrink N., Ananthasubramaniam B., Münch M., Koller B., Maier B., Weschke C., Bes F., de Zeeuw J., Nowozin C., Wahnschaffe A., Wisniewski S., Zaleska M., Bartok O., Ashwal-Fluss R., Lammert H., Herzel H., Hummel M., Kadener S., Kunz D., Kramer A.",
    journal: "The Journal of Clinical Investigation",
    year: 2018,
    tags: ["Circadian Biology", "Clinical"]
  },
  {
    id: 30,
    title:
      "Reconfiguration of a Multi-oscillator Network by Light in the Drosophila Circadian Clock",
    authors:
      "Chatterjee A., Lamaze A., De J., Mena W., Chélot E., Martin B., Hardin P., Kadener S., Emery P., Rouyer F.",
    journal: "Current Biology",
    year: 2018,
    tags: ["Circadian Biology"]
  },
  {
    id: 31,
    title: "circRNAs in Cancer",
    authors: "Patop I. and Kadener S.",
    journal: "Curr. Opin Genet Dev.",
    year: 2018,
    tags: ["Circular RNAs", "Cancer", "Review"]
  },
  {
    id: 32,
    title: "CircRNAs in the brain",
    authors: "Hanan M., Soreq H. and Kadener S.",
    journal: "RNA Biology",
    year: 2017,
    tags: ["Circular RNAs", "Review"]
  },
  {
    id: 33,
    title: "Dynamic hyper-editing underlies temperature adaptation in Drosophila",
    authors:
      "Buchumenski I, Bartok O, Ashwal-Fluss R, Pandey V, Porath HT, Levanon EY, Kadener S.",
    journal: "PLoS Genetics",
    year: 2017,
    tags: ["RNA Editing", "Genomics"]
  },
  {
    id: 34,
    title:
      "Defining the 5’ and 3’ landscape of the Drosophila transcriptome with ExoCAGE and RNaseH-seq",
    authors:
      "Afik S. 1, Bartok O. 1, Artyomov M., Shishkin A., Kadri S., Zhu X., Gutman M., Garber M.* and Kadener S.*",
    journal: "Nucleic Acids Research",
    year: 2017,
    tags: ["Transcriptomics", "Methodology"]
  },
  {
    id: 35,
    title: "Clonally stable VK allelic choice instructs IgK repertoire",
    authors:
      "Levin-Klein R., Fraenkel S., Lichtenstein M., Matheson L., Bartok O., Nevo Y., Kadener S., Corcoran A., Cedar H., Bergman Y.",
    journal: "Nature Communications",
    year: 2017,
    tags: ["Immunology"]
  },
  {
    id: 36,
    title: "Translation of circRNAs",
    authors:
      "Pamudurti N., Bartok O., Jens O., Ashwal-Fluss R., Stottmeister C., Ruhe L., Hanan M., Wyler E., Perez-Hernandez D., Ramberger E., Shenzis S., Samson M., Dittmar G., Landthaler M., Chekulaeva M., Rajewsky N. and Kadener S.",
    journal: "Molecular Cell",
    year: 2017,
    tags: ["Circular RNAs", "Translation"]
  },
  {
    id: 37,
    title:
      "Marked differences in C9orf72 methylation status and isoform expression between C9/ALS human embryonic and induced pluripotent stem cells",
    authors:
      "Cohen-Hadad Y., Altarescu G., Eldar-Geva T., Levi-Lahad E., Zhang M., Rogaeva, E. Gotkine M., Bartok O., Ashwal-Fluss R., Kadener S., Epsztejn-Litman S., Eiges R.",
    journal: "Stem Cell Reports",
    year: 2016,
    tags: ["ALS", "Stem Cells"]
  },
  {
    id: 38,
    title:
      "PDF signaling is an integral part of the Drosophila circadian molecular oscillator",
    authors: "Mezan S., Feuz JD, Deplancke B. and Kadener S.",
    journal: "Cell Reports",
    year: 2016,
    tags: ["Circadian Biology"]
  },
  {
    id: 39,
    title:
      "End Sequence Analysis Toolkit (ESAT) expands the extractable information from single-cell RNA-seq data",
    authors:
      "Derr A, Yang C, Zilionis R, Sergushichev A, Blodgett DM, Redick S, Bortell R, Luban J, Harlan DM, Kadener S, Greiner DL, Klein A, Artyomov MN, Garber M.",
    journal: "Genome Research",
    year: 2016,
    tags: ["Methodology", "Single-cell RNA-seq"]
  },
  {
    id: 40,
    title:
      "Pseudouridylation in Trypanosoma brucei rRNA is developmentally regulated in positions critical for ribosome function",
    authors:
      "Chikne V.*, Doniger T.*, Bartok O.*, Eliaz D.*, Cohen Chalamish S., Tschudi C., Unger R., Hashem Y., Kadener S. and Michaeli S.",
    journal: "Scientific Reports",
    year: 2016,
    tags: ["RNA Modification"]
  },
  {
    id: 41,
    title: "miR-184 regulates pancreatic β-Cell function according to glucose metabolism",
    authors:
      "Tattikota SG., Rathjen T., Hausser J., Khedkar A., Kabra UD., Pandey V., Sury M., Wessels HH., Mollet IG., Eliasson L., Selbach M., Zinzen RP., Zavolan M., Kadener S, Tschöp MH, Jastroch M, Friedländer NR., Poy MN.",
    journal: "J. Biol. Chem.",
    year: 2015,
    tags: ["miRNA", "Metabolism"]
  },
  {
    id: 42,
    title:
      "Circular RNAs in the mammalian brain are highly abundant, conserved, dynamically expressed, and regulated by ADAR1",
    authors:
      "Rybak-Wolf A., Stottmeister C., Glazar P., Jens M., Pino N., Giusti S., Hanan M., Behm M., Bartok O., Ashwal R., Herzog M., Schreyer L., Papavasileiou P., Ivanov A., Ohman M., Refojo D., Kadener S. and Rajewsky N.",
    journal: "Molecular Cell",
    year: 2015,
    tags: ["Circular RNAs"]
  },
  {
    id: 43,
    title:
      "The transcription factor Cabut coordiantes energy metabolism and the circadian clock in response to sugar sensing",
    authors:
      "Bartok O., Teesalu M., Pandey V., Hanan M., Poukkula M., Havula E., Moussaieff A., Vodala S., Nahmias Y., Kadener S.* and Hietakangas V.*",
    journal: "EMBO Journal",
    year: 2015,
    tags: ["Circadian Biology", "Metabolism"]
  },
  {
    id: 44,
    title:
      "Clk post-transcriptional control denoises circadian transcription in time and space",
    authors:
      "Lerner I.*, Bartok O.*, Afik S., Menet J., Wolfson V., Weissbein U., Haimovich D., Gafni C., Friedman N., Rosbash M. and Kadener S.",
    journal: "Nature Communications",
    year: 2015,
    tags: ["Circadian Biology"]
  },
  {
    id: 45,
    title:
      "Studying the differentiation of human parthenogenetic cells reveals novel tissue and isoform dependent imprinted transcripts",
    authors:
      "Stelzer Y., Bar S., Bartok O., Afik S., Ronen D., Kadener S.* and Benvenisty N.*",
    journal: "Cell Reports",
    year: 2015,
    tags: ["Stem Cells", "Imprinting"]
  },
  {
    id: 46,
    title: "CircRNA biogenesis and canonical splicing compete with each other",
    authors:
      "Ashwal-Fluss R., Meyer M., Pamudurti N.R., Ivanov A., Bartok O., Evantal N., Hanan M., Memczak S., Rajewsky N. and Kadener S.",
    journal: "Molecular Cell",
    year: 2014,
    tags: ["Circular RNAs", "Splicing"]
  },
  {
    id: 47,
    title:
      "Synergistic Interactions between the Molecular and Neuronal Circadian Networks Drive Behavioral Circadian Rhythms in Drosophila melanogaster",
    authors: "Weiss R., Bartok O., Mezan S., Malka Y and Kadener S.",
    journal: "PloS Genetics",
    year: 2014,
    tags: ["Circadian Biology"]
  },
  {
    id: 48,
    title:
      "Genome-wide assessment of post-transcriptional regulation in the fly brain",
    authors: "Mezan S., Ashwal-Fluss R., Shenhav R., Garber M. and Kadener S.",
    journal: "Frontiers in Molecular Neuroscience",
    year: 2013,
    tags: ["Genomics", "Post-transcriptional Regulation"]
  },
  {
    id: 49,
    title:
      "A new in vivo model of pantothenate kinase-associated neurodegeneration reveals a surprising role for transcriptional regulation in PKAN pathogenesis",
    authors: "Pandey V., Turm H., Bekenstein U., Shifman S. and Kadener S.",
    journal: "Frontiers in Cell Neuroscience",
    year: 2013,
    tags: ["Neurodegeneration"]
  },
  {
    id: 50,
    title:
      "Adaptation of molecular circadian clockwork to environmental changes: a role for alternative splicing and miRNAs",
    authors: "Bartok O., Kyriacou C., Levine J., Sehgal A. and Kadener S.",
    journal: "Proc R. Soc. B.",
    year: 2013,
    tags: ["Circadian Biology"]
  },
  {
    id: 51,
    title:
      "Alternative splicing regulates biogenesis of miRNAs located across exon-intron junctions",
    authors:
      "Melamed Z., Levy A., Ashwal R., Lev-Maor G., Mekahel N., Atias N., Gilad S., Sharan R., Levy C., Kadener S* and Ast G*.",
    journal: "Molecular Cell",
    year: 2013,
    tags: ["Splicing", "miRNA"]
  },
  {
    id: 52,
    title:
      "Transcriptional activity and nuclear localization of Cabut, the Drosophila ortholog of vertebrate TGF-β-inducible early-response gene (TIEG) proteins",
    authors: "Belacortu Y., Weiss R., Kadener S. and Paricio N.",
    journal: "PLoS One",
    year: 2012,
    tags: ["Development"]
  },
  {
    id: 53,
    title:
      "What can Drosophila teach us about iron-accumulation neurodegenerative disorders?",
    authors: "Bekenstein U. and Kadener S.",
    journal: "J. Neural Trans",
    year: 2011,
    tags: ["Neurodegeneration", "Review"]
  },
  {
    id: 54,
    title:
      "Expression of Drosophila cabut during early embryogenesis, dorsal closure and nervous system development",
    authors: "Belancortu Y., Weiss R., Kadener S. and Paricio N.",
    journal: "Gene Expr Patterns",
    year: 2011,
    tags: ["Development"]
  },
  {
    id: 55,
    title:
      "Genome-Wide Analysis of Light and Temperature-Entrained Circadian Transcripts in C. elegans",
    authors:
      "Van der Linden A.M., Beverly M., Kadener S., Rodriguez J., Wasserman S., Rosbash M. and Sengupta P.",
    journal: "PLoS Biology",
    year: 2010,
    tags: ["Circadian Biology"]
  },
  {
    id: 56,
    title:
      "Mathematical Model of the Drosophila Circadian Clock: Loop Regulation and Transcriptional Integration",
    authors: "Fathallah-Shaykh H.M., Bona J.L. and Kadener S.",
    journal: "Biophys J.",
    year: 2009,
    tags: ["Circadian Biology", "Modeling"]
  },
  {
    id: 57,
    title: "A role for miRNAs in the Drosophila circadian clock",
    authors:
      "Kadener S., Menet J., Sugino K., Horwich M.D., Weissbein U., Nawathean P., Vagin V., Zamore P., Nelson S. and Rosbash M.",
    journal: "Genes Dev.",
    year: 2009,
    tags: ["Circadian Biology", "miRNA"]
  },
  {
    id: 58,
    title:
      "Genome-wide identification of targets of the drosha-pasha/DGCR8 complex",
    authors: "Kadener S., Rodriguez J., Abruzzi K. and Rosbash M.",
    journal: "RNA",
    year: 2009,
    tags: ["miRNA"]
  },
  {
    id: 59,
    title:
      "Circadian transcription contributes to core period determination in Drosophila",
    authors: "Kadener S., Schoer R., Menet J. and Rosbash M.",
    journal: "PLOS Biology",
    year: 2008,
    tags: ["Circadian Biology"]
  },
  {
    id: 60,
    title:
      "Clockwork orange is a transcriptional repressor and a new Drosophila circadian pacemaker component",
    authors: "Kadener S., Stoleru D., McDonald M., Nawathean P. and Rosbash M.",
    journal: "Genes Dev.",
    year: 2007,
    tags: ["Circadian Biology"]
  },
  {
    id: 61,
    title:
      "Transcriptional feedback and definition of the circadian pacemaker in Drosophila and animals",
    authors:
      "Rosbash M., Bradley S., Kadener S., Li Y., Luo W., Menet J.S., Nagoshi E., Palm K., Schoer R., Shang Y. and Tang C.H.",
    journal: "Cold Spring Harb Symp Quant Biol.",
    year: 2007,
    tags: ["Circadian Biology"]
  },
  {
    id: 62,
    title:
      "Neurotoxic protein expression reveals connections between the circadian clock and mating behavior in Drosophila",
    authors:
      "Kadener S., Villella A., Kula E., Palm K., Pyza E., Botas J., Hall J.C. and Rosbash M.",
    journal: "Proc Natl Acad Sci U S A.",
    year: 2006,
    tags: ["Circadian Biology", "Behavior"]
  },
  {
    id: 63,
    title:
      "In vivo commitment to yeast cotranscriptional splicing is sensitive to transcription elongation mutants",
    authors: "Lacadie S.A., Tardiff D.F., Kadener S. and Rosbash M.",
    journal: "Genes Dev.",
    year: 2006,
    tags: ["Splicing"]
  },
  {
    id: 64,
    title:
      "A polar mechanism coordinates different regions of alternative splicing within a single gene",
    authors:
      "Fededa J.P., Petrillo E., Gelfand M.S., Neverov A.D., Kadener S., Nogues G., Pelisch F., Baralle F.E., Muro A.F. and Kornblihtt A.R.",
    journal: "Mol Cell.",
    year: 2005,
    tags: ["Splicing"]
  },
  {
    id: 65,
    title:
      "PERIOD1-associated proteins modulate the negative limb of the mammalian circadian oscillator",
    authors:
      "Brown S.A., Ripperger J., Kadener S., Fleury-Olela F., Vilbois F., Rosbash M. and Schibler U.",
    journal: "Science",
    year: 2005,
    tags: ["Circadian Biology"]
  },
  {
    id: 66,
    title: "A slow RNA polymerase II affects alternative splicing in vivo",
    authors:
      "de la Mata M., Alonso C.R., Kadener S., Fededa J.P., Blaustein M., Pelisch F., Cramer P., Bentley D. and Kornblihtt A.R.",
    journal: "Mol Cell",
    year: 2005,
    tags: ["Splicing"]
  },
  {
    id: 67,
    title:
      "A recessive mutant of Drosophila Clock reveals a role in circadian rhythm amplitude",
    authors: "Allada R., Kadener S., Nandakumar N. and Rosbash M.",
    journal: "EMBO J.",
    year: 2003,
    tags: ["Circadian Biology"]
  },
  {
    id: 68,
    title:
      "An early ancestor in the evolution of splicing: a Trypanosoma cruzi serine-arginine-rich protein (TcSR) is functional in cis-splicing",
    authors:
      "Portal D., Espinosa J.M., Lobo G.S., Kadener S., Pereira C.A., de la Mata M., Tang Z., Lin R.J., Kornblihtt A.R., Baralle F.E., Flawia M.M. and Torres H.N.",
    journal: "Mol Biochem Parasitology",
    year: 2003,
    tags: ["Splicing", "Evolution"]
  },
  {
    id: 69,
    title:
      "Trypanosoma cruzi TcSRPK, the first protozoan member of the SRPK family, is biochemically and functionally conserved with metazoan SR protein-specific kinases",
    authors:
      "Portal D., Lobo G.S., Kadener S., Prasad J., Espinosa J.M., Pereira C.A., Tang Z., Lin R.J., Manley J.L., Kornblihtt A.R., Flawia M.M. and Torres H.N.",
    journal: "Mol Biochem Parasitology",
    year: 2003,
    tags: ["Splicing"]
  },
  {
    id: 70,
    title:
      "Control of alternative pre-mRNA splicing by RNA Pol II elongation: faster is not always better",
    authors:
      "Nogues G., Kadener S., Cramer P., de la Mata M., Fededa J.P., Blaustein M., Srebrow A. and Kornblihtt A.R.",
    journal: "IUBMB Life",
    year: 2003,
    tags: ["Splicing"]
  },
  {
    id: 71,
    title:
      "Transcriptional activators differ in their abilities to control alternative splicing",
    authors: "Nogues G., Kadener S., Cramer P., Bentley D. and Kornblihtt A.R.",
    journal: "J. Biol Chem",
    year: 2002,
    tags: ["Splicing"]
  },
  {
    id: 72,
    title:
      "Regulation of alternative splicing by a transcriptional enhancer through RNA pol II elongation",
    authors: "Kadener S., Fededa J.P., Rosbash M. and Kornblihtt A.R.",
    journal: "Proc.NatlAcad Sci USA.",
    year: 2002,
    tags: ["Splicing"]
  },
  {
    id: 73,
    title:
      "Antagonistic effects of T-Ag andVP16 reveal a role for RNA polymerase II elongation in alternative splicing",
    authors:
      "Kadener S., Cramer P., Nogues G., Cazalla D., de la Mata M., Fededa J., Werbajh S., Srebrow A. and Kornblihtt A.",
    journal: "EMBO J.",
    year: 2002,
    tags: ["Splicing"]
  },
  {
    id: 74,
    title: "Coordination between transcription and pre-mRNA processing",
    authors:
      "Cramer P., Srebrow A., Kadener S., Werbajh S., de la Mata M., Melen G., Nogues G. and Kornblihtt AR.",
    journal: "FEBS Lett.",
    year: 2001,
    tags: ["Splicing"]
  },
  {
    id: 75,
    title:
      "Coupling of transcription with alternative splicing: RNA pol II promoters modulate SF2/ASF and 9G8 effects on an exonic splicing enhancer",
    authors:
      "Cramer P., Cáceres J.F., Cazalla D., Kadener S., Muro, A., Baralle F. and Kornblihtt A.",
    journal: "Mol. Cell",
    year: 2001,
    tags: ["Splicing"]
  }
];


export const news = [
  {
    id: 202512,
    title: "December 2025",
    date: "2025-12-01",
    content:
      "Ines's preprint is posted on BioRxiv as \"Remote and partial clocks expand the circadian neuronal network, driving widespread molecular rhythmicity in Drosophila\"."
  },
  {
    id: 202510,
    title: "October 2025",
    date: "2025-10-01",
    content:
      "Yingshi, Jazmin, and Michael gave poster presentations at Neurobiology of Drosophila meeting at Cold Spring Harbor Laboratory from Oct 7 – 11.\nSayan also attended and presented his work at the ASHG 2025 Annual Meeting that took place in Boston, MA."
  },
  {
    id: 202508,
    title: "August 2025",
    date: "2025-08-01",
    content:
      "Our undergrads – Susie, Shirley, Jonathan, Bee, and Kat – presented their summer research projects at Brandeis SciFest. Good job to all of you and the mentors!"
  },
  {
    id: 202507,
    title: "July 2025",
    date: "2025-07-01",
    content:
      "Nathan presented their research at the Brandeis Post-doctoral Symposium, highlighting ongoing projects and findings from the lab as our new postdoc!"
  },
  {
    id: 202506,
    title: "June 2025",
    date: "2025-06-01",
    content:
      "Nathan defended their thesis work on \"Characterizing post-transcriptional regulation of molecular clock genes timeless and clock\". Congratulations Dr Brownstein!"
  },
  {
    id: 202505,
    title: "May 2025",
    date: "2025-05-01",
    content:
      "Shruti and Iris successfully passed their qualifying exams after hours of hard work!! Congrats to both of you!"
  },
  {
    id: 202504,
    title: "April 2025",
    date: "2025-04-01",
    content:
      "Ken’s paper on \"Circular RNAs exhibit exceptional stability in the aging brain and serve as reliable age and experience indicators\" is published in Cell Reports."
  },
  {
    id: 202501,
    title: "January 2025",
    date: "2025-01-01",
    content:
      "Sebastian co-organized the Non-Coding RNA Biology: New Roles and Diversity conference with Irene Bozzoni, and Luisa Cochella in Keystone, CO from Jan 27–30, 2025. Yingshi, Jazmin, and Michael attended the conference and presented their recent research findings at the conference."
  },
  {
    id: 202408,
    title: "August 2024",
    date: "2024-08-01",
    content:
      "We had our second lab retreat in Vermont for 2 nights, 3 days trip. Juan Fuxman Bass from Boston University joined us as our honored guest for this retreat."
  },
  {
    id: 202405,
    title: "May 2024",
    date: "2024-05-01",
    content:
      "Ane presented on \"Beyond the clock neurons: Control and transmission of oscillatory gene expression across the Drosophila brain\" at the 2024 SRBR conference in San Juan, PR from May 18-22.\nWe are excited to have Yingshi in our lab as our new postdoc!\nShruti joined our lab as a joint student between Griffith and our lab. Iris is also a newcomer in our lab!"
  },
  {
    id: 202403,
    title: "March 2024",
    date: "2024-03-01",
    content: "Sayan presented at GSA conference."
  }
];

