import srcpImage from '@assets/generated_images/bioinformatics_pipeline_data_visualization.png';
import knockdownImage from '@assets/generated_images/rna_interference_shrna_mechanism.png';
import catalogsImage from '@assets/generated_images/scientific_database_network.png';
import spatialImage from '@assets/generated_images/spatial_transcriptomics_brain_map.png';
import standardsImage from '@assets/generated_images/scientific_standards_documentation.png';

// New Research Theme Images
import circRnaTheme from '@assets/generated_images/circular_rna_biology_schematic.png';
import circadianTheme from '@assets/generated_images/circadian_biology_rna_clock_schematic.png';
import genomicsTheme from '@assets/generated_images/computational_genomics_pipeline_schematic.png';
import spatialOmicsTheme from '@assets/generated_images/spatial_transcriptomics_fly_head_schematic.png';

import irisImage from '@assets/Iris_1767739801837.jpg';
import nandarImage from '@assets/Nandar_1767740032236.jpeg';
import sebastianImage from '@assets/kadener-400_1767801824700.jpg';
import nathanImage from '@assets/Nathan_1767801861147.jpeg';
import jazminImage from '@assets/Jazmin_1767802264089.jpg';

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

Our work emphasizes reproducibility, careful normalization, and explicit modeling of RNA processing events. These approaches allow us to extract biologically meaningful signals from complex transcriptomic data and to integrate experimental and computational analyses.

Spatial transcriptomics approaches are under development and will be described in the future.`,
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
    shortDescription: "Content forthcoming.",
    description: "Content forthcoming.",
    image: spatialOmicsTheme,
    points: []
  }
];

export const people = [
  {
    id: "sk",
    name: "Sebastian Kadener",
    role: "Principal Investigator",
    bio: "Professor of Biology, Brandeis University\n\n**Education**\n\nPhD, The University of Buenos Aires, Buenos Aires, Argentina\nLic. Cs. Biol., The University of Buenos Aires, Buenos Aires, Argentina",
    image: sebastianImage,
    email: "kadener@brandeis.edu",
    scholar: "https://scholar.google.com/citations?user=Example",
    category: "PI"
  },
  {
    id: "yp",
    name: "Yingshi Peng",
    role: "Postdoctoral Researcher",
    bio: "Yingshi joined us in 2024, and he studies how circRNAs affect aging in Drosophila in our lab. Before coming to Brandeis, he obtained his Ph.D. degree in the lab of Prof. Elizabeth R. Gavis at Princeton University where he studied translational control of maternal transcripts in developing Drosophila oocytes. Outside of lab, he enjoys running, skiing, and photography.",
    image: "member-placeholder",
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
    title: "Neuronal activity-dependent gene expression is stimulus-specific and changes with neuronal maturation",
    authors: "Lukin J., Beckel M.S., Pedroncini O., Giusti S.A., Di Mauro G., Linenberg I.M., Patop I.L., Chernomoretz A., Marin-Burgin A., Kadener S., Refojo D.",
    journal: "Frontiers in Molecular Neuroscience",
    year: 2025,
    tags: ["Neuronal Maturation"]
  },
  {
    id: 2,
    title: "circRNAs are extremely stable in the brain and can serve as age and experience markers",
    authors: "Kirio K., Patop I., Anduaga-Martin A., Harris J., Pamudurti N., Martel C. and Kadener S.",
    journal: "Cell Reports",
    year: 2025,
    tags: ["Circular RNAs"]
  },
  {
    id: 3,
    title: "A brain-enriched circular RNA controls excitatory neurotransmission and restricts sensitivity to aversive stimuli",
    authors: "Giusti S., Pino N., Pannunzio C., Ogando M., Armando N., Garrett A., Zimprich A., Becker L., Gimeno M., Lukin J., Merino F., Pardi1B., Pedroncini O., Di Mauro G., Gailus Durner V., Fuchs H., Hrabe de Angelis M., Patop I., Turck C., Deussing J., Vogt Weisenhorn D., Jahn O., Kadener S., Hölter S., Brose N., Giesert F., Wurst W., Marin-Burgin A. and Refojo D.",
    journal: "Science Advances",
    year: 2024,
    tags: ["Circular RNAs"]
  },
  {
    id: 4,
    title: "In Vivo Tissue-Specific Knockdown of circRNAs Using shRNAs in Drosophila melanogaster",
    authors: "Patop I., Canori M. and S Kadener.",
    journal: "Circular RNAs",
    year: 2024,
    tags: ["Circular RNAs", "Methodology"]
  },
  {
    id: 5,
    title: "Alternative polyadenylation factor CPSF6 regulates temperature compensation of the mammalian circadian clock",
    authors: "Schmal C., Maier B., Ashwal-Fluss R., Bartok O., Finger A., Bange T., Koutsouli S., Robles M., Kadener S., Herzel H and Kramer A.",
    journal: "PLoS Biology",
    year: 2023,
    tags: ["Circadian Biology"]
  },
  {
    id: 6,
    title: "Organismal landscape of clock cells and circadian gene expression in Drosophila",
    authors: "Patop I, Anduaga A., Bussi I., Ceriani M. and Kadener S.",
    journal: "bioRxiv",
    year: 2023,
    tags: ["Circadian Biology", "Genomics"]
  },
  {
    id: 7,
    title: "The chromatin factor ROW cooperates with BEAF-32 in regulating long-range genes",
    authors: "Herman N., Kadener S.* and Shifman S.*",
    journal: "EMBO Reports",
    year: 2022,
    tags: ["Genomics"]
  },
  {
    id: 8,
    title: "Artificially stimulating retrotransposon activity increases mortality and accelerates a subset of aging phenotypes in Drosophila",
    authors: "Rygal J., Anduaga Martin A., Bitman E, Rivellese E, Kadener S., Marr M.",
    journal: "eLife",
    year: 2022,
    tags: ["Aging"]
  },
  {
    id: 9,
    title: "circMbl functions in cis and in trans to regulate gene expression and physiology in a tissue-specific fashion",
    authors: "Pamudurti NP*, Patop* IL, Krishnamoorthy A., Bartok O., Maya R., Lerner N., Ashwall-Fluss R., Konakondla-Jacob V, Beatus T, and Kadener S.",
    journal: "Cell Reports",
    year: 2022,
    tags: ["Circular RNAs"]
  },
  {
    id: 10,
    title: "Best practice standards for circRNA research",
    authors: "Nielsen A., Bindereif A., Bozzoni I, Hanan M., Hansen T., Irimia T., Kadener S., Kristensen L., Legnini I., Morlando M., Olesen M., Pasterkamp R., Preibisch S., Rajewsky N., Suenkel C. and Kjems J.",
    journal: "Nature Methods",
    year: 2022,
    tags: ["Circular RNAs", "Methodology"]
  },
  {
    id: 11,
    title: "SARS-CoV-2 Nsp14 mediates the effects of viral infection on the host cell transcriptome",
    authors: "Zaffagni M., Harris JM, Patop IL, Pamudurti NR, Nguyen S. and Kadener S.",
    journal: "eLife",
    year: 2022,
    tags: ["Virology", "Transcriptomics"]
  },
  {
    id: 12,
    title: "Parallel evolution of a splicing program controlling neuronal excitability in flies and mammals",
    authors: "Torres-Mendez A., Pop S., Bonnal S., Almudi I., Roberts R., Paolantoni C., Alcaina A., Avola A., Martín-Anduaga A., Haussmann I., Morin V., Soller M., Kadener S., Roignant JY, Prieto-Godino L., Irimia M.",
    journal: "Science Advances",
    year: 2022,
    tags: ["Evolution", "Splicing"]
  },
  {
    id: 13,
    title: "SRCP: A comprehensive pipeline for accurate annotation and quantification of circRNAs",
    authors: "Rabin A., Zaffagni M., Ashwal-Fluss R., Patop I., Jajoo A., Shenzis S., Carmel L. and Kadener S.",
    journal: "Genome Biology",
    year: 2021,
    tags: ["Circular RNAs", "Methodology"]
  },
  {
    id: 14,
    title: "Using Drosophila to uncover molecular and physiological functions of circRNAs",
    authors: "Krishnamoorthy A. and Kadener S.",
    journal: "Methods",
    year: 2021,
    tags: ["Circular RNAs", "Methodology"]
  },
  {
    id: 15,
    title: "Extensive tissue-specific expression variation and novel regulators underlying circadian behavior",
    authors: "Litovchenko A., Meireles-Filho A., Frochaux M., Bevers R., Prunotto A., Martin Anduaga A., Hollis B., Gardeux V., Braman V., Russeil J., Kadener S., Dal Peraro M., Deplancke. B.",
    journal: "Science Advances",
    year: 2021,
    tags: ["Circadian Biology"]
  },
  {
    id: 16,
    title: "An integrative omics approach reveals posttranscriptional mechanisms underlying circadian temperature compensation",
    authors: "Schmal C., Maier B., Ashwal-Fluss R., Bartok O., Finger AM, Bange T., Koutsouli S., Robles MS, Kadener S., Herzel H. and Kramer A.",
    journal: "bioRxiv",
    year: 2021,
    tags: ["Circadian Biology"]
  },
  {
    id: 17,
    title: "The chromatin factor ROW cooperates with BEAF-32 in regulating long-range genes",
    authors: "Herman N., Kadener S.* and Shifman S.*",
    journal: "bioRxiv",
    year: 2021,
    tags: ["Genomics"]
  },
  {
    id: 18,
    title: "A Parkinson's disease Circ RNA s Resource reveals a link between circ SLC 8A1 and oxidative stress",
    authors: "Hanan M., Simchovitz A., Yayon N.,Vaknine S., Cohen‐Fultheim R., Karmon M., Madrer N., Rohrlich T., Maman M., Bennett E., Greenberg D., Meshorer E., Levanon E., Soreq H. and Kadener S.",
    journal: "EMBO Mol Medicine",
    year: 2020,
    tags: ["Circular RNAs", "Parkinson's Disease"]
  },
  {
    id: 19,
    title: "An in vivo strategy for knockdown of circular RNAs",
    authors: "Pamudurti N., Patop I., Krishnamoorthy A., Ashwal-Fluss R., Bartok O., Kadener S.",
    journal: "Cell Discovery",
    year: 2020,
    tags: ["Circular RNAs", "Methodology"]
  },
  {
    id: 20,
    title: "Host-derived circular RNAs display proviral activities in Hepatitis C virus-infected cells",
    authors: "Chen T., Tallo-Parra M., Cao Q., Kadener S., Böttcher R., Pérez-Vilaró G., Boonchuen P., Somboonwiwat K., Díez J., Sarnow P.",
    journal: "PLoS Pathogens",
    year: 2020,
    tags: ["Circular RNAs", "Virology"]
  },
  {
    id: 21,
    title: "A lncRNA survey finds increases in neuroprotective LINC‐PINT in Parkinson’s disease substantia nigra",
    authors: "Simchovitz A., Hanan M., Yayon N., Lee S., Bennett E., Greenberg D., Kadener S., Soreq H.",
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
    title: "Drosophila PSI controls circadian period and the phase of circadian behavior under temperature cycle via tim splicing",
    authors: "Foley L., Ling J., Joshi R., Evantal N., S Kadener S., Emery P",
    journal: "eLife",
    year: 2019,
    tags: ["Circadian Biology", "Splicing"]
  },
  {
    id: 24,
    title: "Thermosensitive alternative splicing senses and mediates temperature adaptation in Drosophila",
    authors: "Anduaga A.*, Evantal N.*, Patop I., Bartok O., Weiss R., Kadener S.",
    journal: "eLife",
    year: 2019,
    tags: ["Splicing", "Temperature Adaptation"]
  },
  {
    id: 25,
    title: "NEAT1 is overexpressed in Parkinson’s disease substantia nigra and confers drug-inducible neuroprotection from oxidative stress",
    authors: "Simchovitz A., Hanan M., Niederhoffer N., Madrer N., Yayon N., Bennett E., Greenberg D., Kadener S. and Soreq H.",
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
    title: "Transcription of a plasticity gene is activated by neuronal hyperpolarization",
    authors: "Zhu Z., Ortiz T., Mezan S., Kadener S. and Blau J.",
    journal: "bioRxiv",
    year: 2019,
    tags: ["Neuronal Plasticity"]
  },
  {
    id: 29,
    title: "High-accuracy determination of internal circadian time from a single blood sample",
    authors: "Wittenbrink N., Ananthasubramaniam B., Münch M., Koller B., Maier B., Weschke C., Bes F., de Zeeuw J., Nowozin C., Wahnschaffe A., Wisniewski S., Zaleska M., Bartok O., Ashwal-Fluss R., Lammert H., Herzel H., Hummel M., Kadener S., Kunz D., Kramer A.",
    journal: "The Journal of Clinical Investigation",
    year: 2018,
    tags: ["Circadian Biology", "Clinical"]
  },
  {
    id: 30,
    title: "Reconfiguration of a Multi-oscillator Network by Light in the Drosophila Circadian Clock",
    authors: "Chatterjee A., Lamaze A., De J., Mena W., Chélot E., Martin B., Hardin P., Kadener S., Emery P., Rouyer F.",
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
    authors: "Buchumenski I, Bartok O, Ashwal-Fluss R, Pandey V, Porath HT, Levanon EY, Kadener S.",
    journal: "PLoS Genetics",
    year: 2017,
    tags: ["RNA Editing", "Genomics"]
  },
  {
    id: 34,
    title: "Defining the 5’ and 3’ landscape of the Drosophila transcriptome with ExoCAGE and RNaseH-seq",
    authors: "Afik S. 1, Bartok O. 1, Artyomov M., Shishkin A., Kadri S., Zhu X., Gutman M., Garber M.* and Kadener S.*",
    journal: "Nucleic Acids Research",
    year: 2017,
    tags: ["Transcriptomics", "Methodology"]
  },
  {
    id: 35,
    title: "Clonally stable VK allelic choice instructs IgK repertoire",
    authors: "Levin-Klein R., Fraenkel S., Lichtenstein M., Matheson L., Bartok O., Nevo Y., Kadener S., Corcoran A., Cedar H., Bergman Y.",
    journal: "Nature Communications",
    year: 2017,
    tags: ["Immunology"]
  },
  {
    id: 36,
    title: "Translation of circRNAs",
    authors: "Pamudurti N., Bartok O., Jens O., Ashwal-Fluss R., Stottmeister C., Ruhe L., Hanan M., Wyler E., Perez-Hernandez D., Ramberger E., Shenzis S., Samson M., Dittmar G., Landthaler M., Chekulaeva M., Rajewsky N. and Kadener S.",
    journal: "Molecular Cell",
    year: 2017,
    tags: ["Circular RNAs", "Translation"]
  },
  {
    id: 37,
    title: "Marked differences in C9orf72 methylation status and isoform expression between C9/ALS human embryonic and induced pluripotent stem cells",
    authors: "Cohen-Hadad Y., Altarescu G., Eldar-Geva T., Levi-Lahad E., Zhang M., Rogaeva, E. Gotkine M., Bartok O., Ashwal-Fluss R., Kadener S., Epsztejn-Litman S., Eiges R.",
    journal: "Stem Cell Reports",
    year: 2016,
    tags: ["ALS", "Stem Cells"]
  },
  {
    id: 38,
    title: "PDF signaling is an integral part of the Drosophila circadian molecular oscillator",
    authors: "Mezan S., Feuz JD, Deplancke B. and Kadener S.",
    journal: "Cell Reports",
    year: 2016,
    tags: ["Circadian Biology"]
  },
  {
    id: 39,
    title: "End Sequence Analysis Toolkit (ESAT) expands the extractable information from single-cell RNA-seq data",
    authors: "Derr A, Yang C, Zilionis R, Sergushichev A, Blodgett DM, Redick S, Bortell R, Luban J, Harlan DM, Kadener S, Greiner DL, Klein A, Artyomov MN, Garber M.",
    journal: "Genome Research",
    year: 2016,
    tags: ["Methodology", "Single-cell RNA-seq"]
  },
  {
    id: 40,
    title: "Pseudouridylation in Trypanosoma brucei rRNA is developmentally regulated in positions critical for ribosome function",
    authors: "Chikne V.*, Doniger T.*, Bartok O.*, Eliaz D.*, Cohen Chalamish S., Tschudi C., Unger R., Hashem Y., Kadener S. and Michaeli S.",
    journal: "Scientific Reports",
    year: 2016,
    tags: ["RNA Modification"]
  },
  {
    id: 41,
    title: "miR-184 regulates pancreatic β-Cell function according to glucose metabolism",
    authors: "Tattikota SG., Rathjen T., Hausser J., Khedkar A., Kabra UD., Pandey V., Sury M., Wessels HH., Mollet IG., Eliasson L., Selbach M., Zinzen RP., Zavolan M., Kadener S, Tschöp MH, Jastroch M, Friedländer MR., Poy MN.",
    journal: "J. Biol. Chem.",
    year: 2015,
    tags: ["miRNA", "Metabolism"]
  },
  {
    id: 42,
    title: "Circular RNAs in the mammalian brain are highly abundant, conserved, dynamically expressed, and regulated by ADAR1",
    authors: "Rybak-Wolf A., Stottmeister C., Glazar P., Jens M., Pino N., Giusti S., Hanan M., Behm M., Bartok O., Ashwal R., Herzog M., Schreyer L., Papavasileiou P., Ivanov A., Ohman M., Refojo D., Kadener S. and Rajewsky N.",
    journal: "Molecular Cell",
    year: 2015,
    tags: ["Circular RNAs"]
  },
  {
    id: 43,
    title: "The transcription factor Cabut coordiantes energy metabolism and the circadian clock in response to sugar sensing",
    authors: "Bartok O., Teesalu M., Pandey V., Hanan M., Poukkula M., Havula E., Moussaieff A., Vodala S., Nahmias Y., Kadener S.* and Hietakangas V.*",
    journal: "EMBO Journal",
    year: 2015,
    tags: ["Circadian Biology", "Metabolism"]
  },
  {
    id: 44,
    title: "Clk post-transcriptional control denoises circadian transcription in time and space",
    authors: "Lerner I.*, Bartok O.*, Afik S., Menet J., Wolfson V., Weissbein U., Haimovich D., Gafni C., Friedman N., Rosbash M. and Kadener S.",
    journal: "Nature Communications",
    year: 2015,
    tags: ["Circadian Biology"]
  },
  {
    id: 45,
    title: "Studying the differentiation of human parthenogenetic cells reveals novel tissue and isoform dependent imprinted transcripts",
    authors: "Stelzer Y., Bar S., Bartok O., Afik S., Ronen D., Kadener S.* and Benvenisty N.*",
    journal: "Cell Reports",
    year: 2015,
    tags: ["Stem Cells", "Imprinting"]
  },
  {
    id: 46,
    title: "CircRNA biogenesis and canonical splicing compete with each other",
    authors: "Ashwal-Fluss R., Meyer M., Pamudurti N.R., Ivanov A., Bartok O., Evantal N., Hanan M., Memczak S., Rajewsky N. and Kadener S.",
    journal: "Molecular Cell",
    year: 2014,
    tags: ["Circular RNAs", "Splicing"]
  },
  {
    id: 47,
    title: "Synergistic Interactions between the Molecular and Neuronal Circadian Networks Drive Behavioral Circadian Rhythms in Drosophila melanogaster",
    authors: "Weiss R., Bartok O., Mezan S., Malka Y and Kadener S.",
    journal: "PloS Genetics",
    year: 2014,
    tags: ["Circadian Biology"]
  },
  {
    id: 48,
    title: "Genome-wide assessment of post-transcriptional regulation in the fly brain",
    authors: "Mezan S., Ashwal-Fluss R., Shenhav R., Garber M. and Kadener S.",
    journal: "Frontiers in Molecular Neuroscience",
    year: 2013,
    tags: ["Genomics", "Post-transcriptional Regulation"]
  },
  {
    id: 49,
    title: "A new in vivo model of pantothenate kinase-associated neurodegeneration reveals a surprising role for transcriptional regulation in PKAN pathogenesis",
    authors: "Pandey V., Turm H., Bekenstein U., Shifman S. and Kadener S.",
    journal: "Frontiers in Cell Neuroscience",
    year: 2013,
    tags: ["Neurodegeneration"]
  },
  {
    id: 50,
    title: "Adaptation of molecular circadian clockwork to environmental changes: a role for alternative splicing and miRNAs",
    authors: "Bartok O., Kyriacou C., Levine J., Sehgal A. and Kadener S.",
    journal: "Proc R. Soc. B.",
    year: 2013,
    tags: ["Circadian Biology"]
  },
  {
    id: 51,
    title: "Alternative splicing regulates biogenesis of miRNAs located across exon-intron junctions",
    authors: "Melamed Z., Levy A., Ashwal R., Lev-Maor G., Mekahel N., Atias N., Gilad S., Sharan R., Levy C., Kadener S* and Ast G*.",
    journal: "Molecular Cell",
    year: 2013,
    tags: ["Splicing", "miRNA"]
  },
  {
    id: 52,
    title: "Transcriptional activity and nuclear localization of Cabut, the Drosophila ortholog of vertebrate TGF-β-inducible early-response gene (TIEG) proteins",
    authors: "Belacortu Y., Weiss R., Kadener S. and Paricio N.",
    journal: "PLoS One",
    year: 2012,
    tags: ["Development"]
  },
  {
    id: 53,
    title: "What can Drosophila teach us about iron-accumulation neurodegenerative disorders?",
    authors: "Bekenstein U. and Kadener S.",
    journal: "J. Neural Trans",
    year: 2011,
    tags: ["Neurodegeneration", "Review"]
  },
  {
    id: 54,
    title: "Expression of Drosophila cabut during early embryogenesis, dorsal closure and nervous system development",
    authors: "Belancortu Y., Weiss R., Kadener S. and Paricio N.",
    journal: "Gene Expr Patterns",
    year: 2011,
    tags: ["Development"]
  },
  {
    id: 55,
    title: "Genome-Wide Analysis of Light and Temperature-Entrained Circadian Transcripts in C. elegans",
    authors: "Van der Linden A.M., Beverly M., Kadener S., Rodriguez J., Wasserman S., Rosbash M. and Sengupta P.",
    journal: "PLoS Biology",
    year: 2010,
    tags: ["Circadian Biology"]
  },
  {
    id: 56,
    title: "Mathematical Model of the Drosophila Circadian Clock: Loop Regulation and Transcriptional Integration",
    authors: "Fathallah-Shaykh H.M., Bona J.L. and Kadener S.",
    journal: "Biophys J.",
    year: 2009,
    tags: ["Circadian Biology", "Modeling"]
  },
  {
    id: 57,
    title: "A role for miRNAs in the Drosophila circadian clock",
    authors: "Kadener S., Menet J., Sugino K., Horwich M.D., Weissbein U., Nawathean P., Vagin V., Zamore P., Nelson S. and Rosbash M.",
    journal: "Genes Dev.",
    year: 2009,
    tags: ["Circadian Biology", "miRNA"]
  },
  {
    id: 58,
    title: "Genome-wide identification of targets of the drosha-pasha/DGCR8 complex",
    authors: "Kadener S., Rodriguez J., Abruzzi K. and Rosbash M.",
    journal: "RNA",
    year: 2009,
    tags: ["miRNA"]
  },
  {
    id: 59,
    title: "Circadian transcription contributes to core period determination in Drosophila",
    authors: "Kadener S., Schoer R., Menet J. and Rosbash M.",
    journal: "PLOS Biology",
    year: 2008,
    tags: ["Circadian Biology"]
  },
  {
    id: 60,
    title: "Clockwork orange is a transcriptional repressor and a new Drosophila circadian pacemaker component",
    authors: "Kadener S., Stoleru D., McDonald M., Nawathean P. and Rosbash M.",
    journal: "Genes Dev.",
    year: 2007,
    tags: ["Circadian Biology"]
  },
  {
    id: 61,
    title: "Transcriptional feedback and definition of the circadian pacemaker in Drosophila and animals",
    authors: "Rosbash M., Bradley S., Kadener S., Li Y., Luo W., Menet J.S., Nagoshi E., Palm K., Schoer R., Shang Y. and Tang C.H.",
    journal: "Cold Spring Harb Symp Quant Biol.",
    year: 2007,
    tags: ["Circadian Biology"]
  },
  {
    id: 62,
    title: "Neurotoxic protein expression reveals connections between the circadian clock and mating behavior in Drosophila",
    authors: "Kadener S., Villella A., Kula E., Palm K., Pyza E., Botas J., Hall J.C. and Rosbash M.",
    journal: "Proc Natl Acad Sci U S A.",
    year: 2006,
    tags: ["Circadian Biology", "Behavior"]
  },
  {
    id: 63,
    title: "In vivo commitment to yeast cotranscriptional splicing is sensitive to transcription elongation mutants",
    authors: "Lacadie S.A., Tardiff D.F., Kadener S. and Rosbash M.",
    journal: "Genes Dev.",
    year: 2006,
    tags: ["Splicing"]
  },
  {
    id: 64,
    title: "A polar mechanism coordinates different regions of alternative splicing within a single gene",
    authors: "Fededa J.P., Petrillo E., Gelfand M.S., Neverov A.D., Kadener S., Nogues G., Pelisch F., Baralle F.E., Muro A.F. and Kornblihtt A.R.",
    journal: "Mol Cell.",
    year: 2005,
    tags: ["Splicing"]
  },
  {
    id: 65,
    title: "PERIOD1-associated proteins modulate the negative limb of the mammalian circadian oscillator",
    authors: "Brown S.A., Ripperger J., Kadener S., Fleury-Olela F., Vilbois F., Rosbash M. and Schibler U.",
    journal: "Science",
    year: 2005,
    tags: ["Circadian Biology"]
  },
  {
    id: 66,
    title: "A slow RNA polymerase II affects alternative splicing in vivo",
    authors: "de la Mata M., Alonso C.R., Kadener S., Fededa J.P., Blaustein M., Pelisch F., Cramer P., Bentley D. and Kornblihtt A.R.",
    journal: "Mol Cell",
    year: 2005,
    tags: ["Splicing"]
  },
  {
    id: 67,
    title: "A recessive mutant of Drosophila Clock reveals a role in circadian rhythm amplitude",
    authors: "Allada R., Kadener S., Nandakumar N. and Rosbash M.",
    journal: "EMBO J.",
    year: 2003,
    tags: ["Circadian Biology"]
  },
  {
    id: 68,
    title: "An early ancestor in the evolution of splicing: a Trypanosoma cruzi serine-arginine-rich protein (TcSR) is functional in cis-splicing",
    authors: "Portal D., Espinosa J.M., Lobo G.S., Kadener S., Pereira C.A., de la Mata M., Tang Z., Lin R.J., Kornblihtt A.R., Baralle F.E., Flawia M.M. and Torres H.N.",
    journal: "Mol Biochem Parasitology",
    year: 2003,
    tags: ["Splicing", "Evolution"]
  },
  {
    id: 69,
    title: "Trypanosoma cruzi TcSRPK, the first protozoan member of the SRPK family, is biochemically and functionally conserved with metazoan SR protein-specific kinases",
    authors: "Portal D., Lobo G.S., Kadener S., Prasad J., Espinosa J.M., Pereira C.A., Tang Z., Lin R.J., Manley J.L., Kornblihtt A.R., Flawia M.M. and Torres H.N.",
    journal: "Mol Biochem Parasitology",
    year: 2003,
    tags: ["Splicing"]
  },
  {
    id: 70,
    title: "Control of alternative pre-mRNA splicing by RNA Pol II elongation: faster is not always better",
    authors: "Nogues G., Kadener S., Cramer P., de la Mata M., Fededa J.P., Blaustein M., Srebrow A. and Kornblihtt A.R.",
    journal: "IUBMB Life",
    year: 2003,
    tags: ["Splicing"]
  },
  {
    id: 71,
    title: "Transcriptional activators differ in their abilities to control alternative splicing",
    authors: "Nogues G., Kadener S., Cramer P., Bentley D. and Kornblihtt A.R.",
    journal: "J. Biol Chem",
    year: 2002,
    tags: ["Splicing"]
  },
  {
    id: 72,
    title: "Regulation of alternative splicing by a transcriptional enhancer through RNA pol II elongation",
    authors: "Kadener S., Fededa J.P., Rosbash M. and Kornblihtt A.R.",
    journal: "Proc.NatlAcad Sci USA.",
    year: 2002,
    tags: ["Splicing"]
  },
  {
    id: 73,
    title: "Antagonistic effects of T-Ag andVP16 reveal a role for RNA polymerase II elongation in alternative splicing",
    authors: "Kadener S., Cramer P., Nogues G., Cazalla D., de la Mata M., Fededa J., Werbajh S., Srebrow A. and Kornblihtt A.",
    journal: "EMBO J.",
    year: 2002,
    tags: ["Splicing"]
  },
  {
    id: 74,
    title: "Coordination between transcription and pre-mRNA processing",
    authors: "Cramer P., Srebrow A., Kadener S., Werbajh S., de la Mata M., Melen G., Nogues G. and Kornblihtt AR.",
    journal: "FEBS Lett.",
    year: 2001,
    tags: ["Splicing"]
  },
  {
    id: 75,
    title: "Coupling of transcription with alternative splicing: RNA pol II promoters modulate SF2/ASF and 9G8 effects on an exonic splicing enhancer",
    authors: "Cramer P., Cáceres J.F., Cazalla D., Kadener S., Muro, A., Baralle F. and Kornblihtt A.",
    journal: "Mol. Cell",
    year: 2001,
    tags: ["Splicing"]
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
  },
];

export const recruiting = {
  open: true,
  message: "We are always interested in motivated students and postdoctoral fellows who are excited about RNA biology, circadian rhythms, and quantitative genomics. Our lab values intellectual independence, rigorous experimentation, and collaborative science.\n\nProspective postdoctoral fellows should contact Sebastian Kadener directly with a CV and a brief description of research interests. Graduate students are encouraged to apply through the Brandeis University PhD program in Biology. Undergraduate students interested in research opportunities should reach out to discuss availability and potential projects.",
  link: "/join"
};

export const resources = [
  {
    id: "srcp-pipeline",
    title: "SRCP: circRNA Detection and Quantification Pipeline",
    description: "SRCP is a computational pipeline developed in the Kadener Lab for accurate annotation and quantification of circular RNAs from RNA-seq data. It integrates multiple circRNA detection strategies with stringent filtering to reduce false positives and provides robust circRNA expression estimates across samples and conditions. SRCP has been used extensively in our studies of circRNA biogenesis, aging, and disease.",
    link: "https://github.com/kadenerlab",
    linkText: "GitHub Repository",
    category: "Software",
    image: srcpImage
  },
  {
    id: "circ-knockdown",
    title: "Guide to circRNA Knockdown Using Junction-Specific shRNAs",
    description: "A detailed experimental and conceptual guide for designing, validating, and using short hairpin RNAs (shRNAs) to specifically knock down circular RNAs in vivo without affecting their linear host transcripts. This approach, developed in the Kadener Lab, targets the unique back-splice junction of circRNAs and has enabled functional studies of circRNAs in Drosophila development, neural function, aging, and disease models.",
    link: "#",
    linkText: "Read Guide",
    category: "Protocols & Guides",
    featured: true,
    image: knockdownImage
  },
  {
    id: "circ-catalogs",
    title: "Drosophila circRNA Catalogs (Brain, Aging, and Disease)",
    description: "Curated catalogs of circular RNAs expressed in the Drosophila brain and across aging time points, generated in the Kadener Lab using stringent detection and validation criteria. These datasets have been used to study circRNA biogenesis, accumulation with age, cell-type specificity, and functional relevance in neural and disease contexts.",
    link: "https://www.ncbi.nlm.nih.gov/geo/",
    linkText: "Access Datasets (GEO)",
    category: "Datasets",
    image: catalogsImage
  },
  {
    id: "spatial-atlas",
    title: "Fly Head Spatial Transcriptomics Atlas",
    description: "A spatial transcriptomic atlas of the adult Drosophila head integrating gene expression with anatomical context. This resource is currently under development in the Kadener Lab and will be released in the future.",
    link: "#",
    linkText: "Coming Soon",
    category: "Datasets",
    comingSoon: true,
    image: spatialImage
  },
  {
    id: "circ-standards",
    title: "Best-Practice Standards for circRNA Research",
    description: "Community-endorsed best-practice guidelines for the experimental and computational study of circular RNAs, co-authored by the Kadener Lab. These standards address circRNA detection, validation, quantification, and reporting, and provide a framework for reproducible circRNA research.",
    link: "https://www.nature.com/nmeth/",
    linkText: "View Guidelines",
    category: "Community Resources",
    image: standardsImage
  }
];
