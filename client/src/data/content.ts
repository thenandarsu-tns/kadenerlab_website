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
    bio: "Professor of Biology, Brandeis University. Research interests: RNA biology, circadian rhythms, circular RNAs, genomics",
    image: "sk-placeholder",
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
    bio: "Nathan completed their Ph.D in the Kadener lab at Brandeis in June 2024! They are originally from southern Connecticut and studied biochemistry and molecular biology at the College of Wooster in Wooster, Ohio. Their research focuses on mechanisms underlying post-transcriptional regulation in the Drosophila molecular clock utilizing techniques which include proximity interactome mapping, fluorescent imaging, standard molecular techniques and cell culture. In their spare time, Nathan enjoys podcasts, music, and painting miniatures.",
    image: "member-placeholder",
    email: "",
    category: "Postdoc"
  },
  {
    id: "jm",
    name: "Jazmin Morales",
    role: "Ph.D Candidate",
    bio: "Jazmin, a native of Queens, NYC, is a PhD candidate in the Kadener Lab. Her research focuses on investigating the neuronal localization and function of circMbl, primarily employing FISH, advanced imaging techniques, and transcriptomics. Outside of the lab, Jazmin enjoys reading, exploring diverse cuisines, and attempting to knit.",
    image: "member-placeholder",
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
    bio: "circMbl function in the brain",
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
    bio: "circRNAs and miRNA pathways",
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

export const publications = [
  // Circular RNAs (circRNAs) – Biogenesis & Function
  {
    id: 1,
    title: "Circular RNAs exhibit exceptional stability in the aging brain and serve as reliable age and experience indicators",
    authors: "Kirio, K., Patop, I. L., Martin-Anduaga, A., Harris, J., Pamudurti, N., Martel, C., & Kadener, S.",
    journal: "Cell Reports",
    year: 2025,
    doi: "10.1016/j.celrep.2025.115485",
    tags: ["Circular RNAs"],
    summary: "This study shows that circRNAs accumulate linearly with age in the fly brain, far outlasting typical mRNAs. Certain circRNAs even record an organism’s thermal and stress history, establishing circRNAs as robust markers of age and “life experience” in vivo."
  },
  {
    id: 2,
    title: "A brain-enriched circular RNA controls excitatory neurotransmission and restricts sensitivity to aversive stimuli",
    authors: "Giusti, S. A., Pino, N. S., Pannunzio, C., et al.",
    journal: "Science Advances",
    year: 2024,
    doi: "10.1126/sciadv.adj8769",
    tags: ["Circular RNAs"],
    summary: "This study demonstrates that a specific brain-enriched circular RNA plays a critical role in regulating excitatory neurotransmission and organismal behavioral responses to aversive stimuli."
  },
  {
    id: 3,
    title: "circMbl functions in cis and in trans to regulate gene expression and physiology in a tissue-specific fashion",
    authors: "Pamudurti, N. R., Patop, I. L., Krishnamoorthy, A., Bartok, O., Maya, R., Lerner, N., Ashwal-Fluss, R., Konakondla-Jacob, V., Beatus, T., & Kadener, S.",
    journal: "Cell Reports",
    year: 2022,
    doi: "10.1016/j.celrep.2022.110740",
    tags: ["Circular RNAs"],
    summary: "Focusing on the abundant circRNA circMbl (from the muscleblind gene), this study demonstrates that circMbl regulates its parent gene in cis and has distinct physiological functions in trans, providing evidence for multiple modes of circRNA action."
  },
  {
    id: 4,
    title: "Past, present and future of circRNAs",
    authors: "Patop, I. L., Wüst, S., & Kadener, S.",
    journal: "EMBO Journal",
    year: 2019,
    doi: "10.15252/embj.2018100836",
    tags: ["Circular RNAs", "Review"],
    summary: "This highly cited review provides a comprehensive overview of circular RNAs – from their biogenesis and emerging functions to technological challenges in their study. It discusses historical discovery, recent breakthroughs, and future directions."
  },
  {
    id: 5,
    title: "Translation of circRNAs",
    authors: "Pamudurti, N. R., Bartok, O., Jens, M., Ashwal-Fluss, R., Stottmeister, C., Ruhe, L., Hanan, M., Wyler, E., Perez-Hernandez, D., Ramberger, E., Shenzis, S., Samson, M., Dittmar, G., Landthaler, M., Chekulaeva, M., Rajewsky, N., & Kadener, S.",
    journal: "Molecular Cell",
    year: 2017,
    doi: "10.1016/j.molcel.2017.02.021",
    tags: ["Circular RNAs"],
    summary: "This landmark study provided the first strong evidence that circRNAs can serve as mRNAs and be translated into proteins, challenging the dogma that they are non-coding and revealing a new layer of proteome complexity."
  },
  {
    id: 6,
    title: "Circular RNAs in the mammalian brain are highly abundant, conserved, dynamically expressed, and regulated by ADAR1",
    authors: "Rybak-Wolf, A., Stottmeister, C., Glazar, P., Jens, M., Pino, N., Giusti, S., Hanan, M., … Kadener, S., … Rajewsky, N.",
    journal: "Molecular Cell",
    year: 2015,
    doi: "10.1016/j.molcel.2015.03.027",
    tags: ["Circular RNAs"],
    summary: "This collaborative study was among the first to profile circRNAs in mammalian brains. It found thousands of circRNAs enriched in the brain, often conserved between human and mouse, and regulated by the RNA editing enzyme ADAR1."
  },
  {
    id: 7,
    title: "CircRNAs in the brain",
    authors: "Hanan, M., Soreq, H., & Kadener, S.",
    journal: "RNA Biology",
    year: 2017,
    doi: "10.1080/15476286.2016.1223003",
    tags: ["Circular RNAs", "Review"],
    summary: "This review article discusses the emerging understanding of circular RNAs in the nervous system. It summarizes how circRNAs are especially enriched in brain tissues, often derived from synaptic genes, and speculates on their potential functions."
  },
  {
    id: 101,
    title: "circRNA biogenesis competes with pre-mRNA splicing",
    authors: "Ashwal-Fluss, R., Meyer, M., Pamudurti, N. R., Ivanov, A., Bartok, O., Hanan, M., Evantal, N., Memczak, S., Rajewsky, N., & Kadener, S.",
    journal: "Molecular Cell",
    year: 2014,
    doi: "10.1016/j.molcel.2014.08.019",
    tags: ["Circular RNAs"],
    summary: "This landmark paper discovered that circRNA biogenesis competes directly with linear splicing. It demonstrated that Muscleblind (Mbl) regulates its own circular RNA, creating a feedback loop. This was a fundamental study establishing the mechanism of circRNA formation and its interplay with canonical splicing."
  },
  // Circadian Biology – Clocks & Rhythms
  {
    id: 8,
    title: "Alternative polyadenylation factor CPSF6 regulates temperature compensation of the mammalian circadian clock",
    authors: "Schmal, C., Maier, B., Ashwal-Fluss, R., Bartok, O., Finger, A. M., Bange, T., Koutsouli, S., Robles, M. S., Kadener, S., Herzel, H., & Kramer, A.",
    journal: "PLOS Biology",
    year: 2023,
    doi: "10.1371/journal.pbio.3002164",
    tags: ["Circadian Biology"],
    summary: "This study uncovered a mechanism by which mammalian clocks keep ~24-hour timing despite temperature changes (temperature compensation), implicating the alternative polyadenylation factor CPSF6 in this critical process."
  },
  {
    id: 9,
    title: "Organismal landscape of clock cells and circadian gene expression in Drosophila",
    authors: "Patop, I. L., Martin-Anduaga, A., Bussi, I., Ceriani, M. F., & Kadener, S.",
    journal: "bioRxiv",
    year: 2023,
    doi: "10.1101/2023.05.23.542009",
    tags: ["Circadian Biology", "Genomics"],
    summary: "In this preprint, the team presents a panoramic map of circadian clocks in the fruit fly. By profiling gene expression across virtually all clock cells in the fly, they reveal previously unrecognized clock neuron subtypes and novel circadian genes."
  },
  {
    id: 10,
    title: "Drosophila PSI controls circadian period and the phase of circadian behavior under temperature cycles via tim splicing",
    authors: "Foley, L., Ling, J., Joshi, R., Evantal, N., Kadener, S., & Emery, P.",
    journal: "eLife",
    year: 2019,
    doi: "10.7554/eLife.46821",
    tags: ["Circadian Biology"],
    summary: "This paper showed that the splicing regulator PSI modulates the fruit fly’s clock by controlling alternative splicing of timeless (tim), a core clock gene. Loss of PSI led to aberrant tim splicing, lengthening the circadian period."
  },
  {
    id: 11,
    title: "Thermosensitive alternative splicing senses and mediates temperature adaptation in Drosophila",
    authors: "Martin-Anduaga, A., Evantal, N., Patop, I. L., Bartok, O., Weiss, R., & Kadener, S.",
    journal: "eLife",
    year: 2019,
    doi: "10.7554/eLife.44642",
    tags: ["Circadian Biology"],
    summary: "This study discovered a broad program of temperature-responsive alternative splicing in flies. As environmental temperature drops, specific splicing events (including in clock genes) are altered, effectively adjusting the molecular clock."
  },
  {
    id: 12,
    title: "High-accuracy determination of internal circadian time from a single blood sample",
    authors: "Wittenbrink, N., Ananthasubramaniam, B., Münch, M., Koller, B., Maier, B., Weschke, C., Bes, F., de Zeeuw, J., Nowozin, C., Wahnschaffe, A., … Kadener, S., … Kramer, A.",
    journal: "The Journal of Clinical Investigation",
    year: 2018,
    doi: "10.1172/JCI120874",
    tags: ["Circadian Biology", "Genomics"],
    summary: "This impactful human-centric study developed a blood test to read a person’s internal “circadian time” from one blood sample, using a set of biomarkers identified through transcriptomic analysis."
  },
  {
    id: 13,
    title: "Reconfiguration of a multi-oscillator network by light in the Drosophila circadian clock",
    authors: "Chatterjee, A., Lamaze, A., De, J., Mena, W., Chélot, E., Martin, B., Hardin, P., Kadener, S., Emery, P., & Rouyer, F.",
    journal: "Current Biology",
    year: 2018,
    doi: "10.1016/j.cub.2018.05.093",
    tags: ["Circadian Biology"],
    summary: "This work revealed how light can reshuffle the interactions among multiple brain clock neuron groups in flies, showing that the clock network is dynamic and reconfigures based on environmental input."
  },
  {
    id: 14,
    title: "The transcription factor Cabut coordinates energy metabolism and the circadian clock in response to sugar sensing",
    authors: "Bartok, O., Teesalu, M., Pandey, V., Hanan, M., Poukkula, M., Havula, E., Moussaieff, A., Vodala, S., Nahmias, Y., Kadener, S., & Hietakangas, V.",
    journal: "EMBO Journal",
    year: 2015,
    doi: "10.15252/embj.201490636",
    tags: ["Circadian Biology"],
    summary: "This bi-lab study identified Cabut (Cbt) as a transcription factor linking metabolic state to the circadian clock, coordinating energy metabolism with daily rhythms in response to sugar sensing."
  },
  {
    id: 15,
    title: "Clk post-transcriptional control denoises circadian transcription in time and space",
    authors: "Lerner, I., Bartok, O., Afik, S., Menet, J. S., Wolfson, V., Weissbein, U., Haimovich, D., Gafni, C., Friedman, N., Rosbash, M., & Kadener, S.",
    journal: "Nature Communications",
    year: 2015,
    doi: "10.1038/ncomms8056",
    tags: ["Circadian Biology"],
    summary: "Focusing on the core clock gene Clk (Clock), this paper showed that regulating Clk mRNA after it’s made (post-transcriptionally) is crucial for a robust, precise circadian rhythm and helps 'denoise' the system."
  },
  {
    id: 16,
    title: "Synergistic interactions between the molecular and neuronal circadian networks drive behavioral circadian rhythms in Drosophila melanogaster",
    authors: "Weiss, R., Bartok, O., Mezan, S., Malka, Y., & Kadener, S.",
    journal: "PLOS Genetics",
    year: 2014,
    doi: "10.1371/journal.pgen.1004252",
    tags: ["Circadian Biology"],
    summary: "This research bridged molecular clocks and neuronal networks. The team found that having a strong molecular oscillation in clock cells is not sufficient alone – communication between clock neurons is essential."
  },
  {
    id: 17,
    title: "Dynamic hyper-editing underlies temperature adaptation in Drosophila",
    authors: "Buchumenski, I., Bartok, O., Ashwal-Fluss, R., Pandey, V., Porath, H. T., Levanon, E. Y., & Kadener, S.",
    journal: "PLOS Genetics",
    year: 2017,
    doi: "10.1371/journal.pgen.1006931",
    tags: ["Circadian Biology", "Genomics"],
    summary: "This work uncovered an intriguing role for RNA editing in how flies adapt to temperature changes. They found that at lower temperatures, levels of ADAR-mediated RNA editing ('hyper-editing') increase on many transcripts."
  },
  {
    id: 18,
    title: "PDF signaling is an integral part of the Drosophila circadian molecular oscillator",
    authors: "Mezan, S., Feuz, J.-D., Deplancke, B., & Kadener, S.",
    journal: "Cell Reports",
    year: 2016,
    doi: "10.1016/j.celrep.2016.09.038",
    tags: ["Circadian Biology"],
    summary: "Focusing on the neuropeptide PDF, this study made the surprising finding that PDF signaling feeds back into the molecular clock machinery, influencing core clock gene expression."
  },
  {
    id: 19,
    title: "Genome-wide analysis of light- and temperature-entrained circadian transcripts in C. elegans",
    authors: "Van der Linden, A. M., Beverly, M., Kadener, S., Rodriguez, J., Wasserman, S., Rosbash, M., & Sengupta, P.",
    journal: "PLOS Biology",
    year: 2010,
    doi: "10.1371/journal.pbio.1000503",
    tags: ["Circadian Biology", "Genomics"],
    summary: "This early contribution explored whether the nematode worm has circadian rhythms at the transcriptional level, identifying hundreds of genes that cycle in response to light and temperature."
  },
  {
    id: 20,
    title: "Mathematical model of the Drosophila circadian clock: loop regulation and transcriptional integration",
    authors: "Fathallah-Shaykh, H. M., Bona, J. L., & Kadener, S.",
    journal: "Biophysical Journal",
    year: 2009,
    doi: "10.1016/j.bpj.2009.07.050",
    tags: ["Circadian Biology"],
    summary: "In this interdisciplinary study, a mathematical model was constructed to simulate the fruit fly’s circadian clock network, reproducing key features of the biological system."
  },
  {
    id: 21,
    title: "A role for miRNAs in the Drosophila circadian clock",
    authors: "Kadener, S., Menet, J. S., Sugino, K., Horwich, M. D., Weissbein, U., Nawathean, P., Vagin, V., Zamore, P. D., Nelson, S., & Rosbash, M.",
    journal: "Genes & Development",
    year: 2009,
    doi: "10.1101/gad.1819509",
    tags: ["Circadian Biology"],
    summary: "This work was the first to implicate microRNAs in circadian timing. Kadener and colleagues showed that deleting Dicer in clock neurons caused lengthened and irregular circadian rhythms."
  },
  {
    id: 102,
    title: "Defining the 5' and 3' landscape of the Drosophila transcriptome with Exo-seq and RNaseH-seq",
    authors: "Afik, S., Bartok, O., Artyomov, M. N., Shishkin, A. A., Kadri, S., Hanan, M., Zhu, X., Garber, M., & Kadener, S.",
    journal: "Nucleic Acids Research",
    year: 2017,
    doi: "10.1093/nar/gkx133",
    tags: ["Genomics"],
    summary: "This paper developed Exo-seq and RNaseH-seq to accurately map 5' and 3' ends of transcripts in Drosophila, distinguishing real polyA sites from internal A-rich regions. It provided a high-resolution view of the transcriptome landscape, enabling better annotation of alternative isoforms."
  },
  {
    id: 22,
    title: "Genome-wide identification of targets of the Drosha-Pasha/DGCR8 complex",
    authors: "Kadener, S., Rodriguez, J., Abruzzi, K. C., & Rosbash, M.",
    journal: "RNA",
    year: 2009,
    doi: "10.1261/rna.1319309",
    tags: ["Genomics"],
    summary: "This paper examined how the microprocessor (Drosha/DGCR8) selects primary miRNA transcripts. The genome-wide approach uncovered new primary miRNA transcripts and mRNA-like targets."
  },
  {
    id: 23,
    title: "Circadian transcription contributes to core period determination in Drosophila",
    authors: "Kadener, S., Schoer, R., Menet, J. S., & Rosbash, M.",
    journal: "PLOS Biology",
    year: 2008,
    doi: "10.1371/journal.pbio.0060119",
    tags: ["Circadian Biology"],
    summary: "This paper addressed the importance of daily cycles of gene transcription in setting the 24-hour period, showing that the clock system is resilient even when transcriptional oscillations are dampened."
  },
  {
    id: 24,
    title: "Clockwork orange is a transcriptional repressor and a new Drosophila circadian pacemaker component",
    authors: "Kadener, S., Stoleru, D., McDonald, M., Nawathean, P., & Rosbash, M.",
    journal: "Genes & Development",
    year: 2007,
    doi: "10.1101/gad.1551307",
    tags: ["Circadian Biology"],
    summary: "This influential work identified Clockwork Orange (CWO) as a new player in the fly clock, finding it acts as a transcriptional repressor that opposes CLK:CYC activation."
  },
  {
    id: 25,
    title: "SRCP: A comprehensive pipeline for circRNA quantification",
    authors: "Kadener Lab",
    journal: "Methods",
    year: 2021,
    doi: "", 
    tags: ["Genomics", "Software"],
    summary: "We published SRCP, an integrative pipeline for more accurate annotation and quantification of circRNAs from RNA-seq data. SRCP improves sensitivity and reduces false positives."
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
