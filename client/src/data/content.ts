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
    shortDescription: "Circular RNAs (circRNAs) are highly stable RNA molecules enriched in the brain. We study how circRNAs are generated, how they function in cis and trans, and how their exceptional stability allows them to accumulate over time, and use them as biomarkers.",
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
      "Temperature Compensation"
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
    id: "testing",
    title: "circRNA in Aging and Neurodegeneration",
    shortDescription: "",
    description: `**CircRNAs and Neurodegenerative Disease (PD):** The Kadener Lab utilizes our RNA expertise to explore how RNA profiles change in disorders such as Parkinson’s. In a collaborative study (EMBO Molecular Medicine 2020), we created a comprehensive Parkinson’s Disease circRNA resource by sequencing brains of PD patients versus healthy controls. An important finding was that in the healthy aging brain (specifically the substantia nigra region), circRNA levels normally increase with age, but in Parkinson’s patients this age-related accumulation is disrupted. PD patients had an overall reduction in circRNA abundance in the substantia nigra compared to age-matched controls, suggesting circRNA biogenesis or stability is altered in disease. Intriguingly, in other brain regions of PD patients, circRNA levels increased, indicating region-specific differences.

**Specific CircRNA as a PD Biomarker:** From that study, one circRNA in particular, circSLC8A1, stood out. We found circSLC8A1 is significantly upregulated in the substantia nigra of individuals with Parkinson’s disease. This circRNA carries multiple binding sites for miR-128, a microRNA involved in neuronal oxidative stress responses, and was shown to bind strongly to the Argonaute protein (which suggests it sequesters miR-128). Consistently, the mRNA targets of miR-128 were found to be increased in PD brains, implying that when circSLC8A1 levels rise, it might sponge miR-128 and thereby dysregulate oxidative stress pathways. We also demonstrated in cell experiments that circSLC8A1 levels increase under oxidative stress (e.g. when cells are exposed to toxin) and decrease with an antioxidant treatment. Together, these results link circSLC8A1 to the oxidative stress aspect of Parkinson’s and suggest it could be a marker or even contributor to the disease process. This kind of finding is valuable for understanding neurodegeneration and potentially identifying new therapeutic targets or biomarkers.

**LncRNAs and Neuroprotection:** Apart from circRNAs, we have dabbled in long noncoding RNAs in neurodegeneration. For instance, they reported changes in lncRNAs like NEAT1 and LINC-PINT in Parkinson’s disease patient brains (Simchovitz et al., Aging Cell 2020; Simchovitz et al., FASEB J 2019). One interesting result was that NEAT1 is overexpressed in PD and might have neuroprotective effects. While these might be side notes, mentioning them shows the lab’s broad interest in RNA-based mechanisms in neurodegeneration.`,
    image: "/src/assets/images/circrna-aging-thumb.jpg",
    points: []
  },
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
    bio: "Sayan is a PhD student in the Kadener Lab. He studies how circRNAs behave in a tissue-specific manner and how their levels are modulated by temperature and other environmental signals. Sayan completed his BS in Molecular and Cell Biology at University of Connecticut. In his free time, he enjoys watching football and basketball.",
    image: "",
    email: "",
    category: "Grad Student"
  },
  {
    id: "sg",
    name: "Shruti Ghosh",
    role: "Ph.D Candidate",
    bio: "Shruti is a graduate student jointly advised by Sebastian Kadener and Leslie Griffith. She is interested in the molecular mechanisms underlying circadian rhythms and sleep regulation. Shruti completed her BS and MS in Biotechnology from VIT University, India and joined Brandeis as a graduate student in 2022.",
    image: "",
    email: "",
    category: "Grad Student"
  },
  {
    id: "na",
    name: "Nandar Aung",
    role: "Research Technician",
    bio: "Nandar is a research technician in the Kadener Lab. She supports projects across the lab, including Drosophila genetics and molecular assays. Nandar completed her undergraduate studies in Myanmar and enjoys cooking and exploring new places.",
    image: nandarImage,
    email: "",
    category: "Staff"
  },
  {
    id: "ia",
    name: "Iris Annen",
    role: "Research Technician",
    bio: "Iris is a research technician in the Kadener Lab. She supports imaging and molecular biology work across multiple projects. Iris enjoys hiking and reading.",
    image: irisImage,
    email: "",
    category: "Staff"
  },
  {
    id: "nr",
    name: "Nathaniel (Nathan) Reuland",
    role: "Undergraduate Researcher",
    bio: "Nathan is an undergraduate researcher in the Kadener Lab. He is interested in RNA biology and computational approaches.",
    image: "",
    email: "",
    category: "Undergrad"
  }
];

export const publications = [];
export const news = [];

export const resources = {
  sections: [
    {
      title: "Spatial Transcriptomics",
      items: [
        {
          title: "Spatial Transcriptomics",
          description: "Work in progress! Stay tuned!",
          url: "/research/spatial-omics"
        }
      ]
    },
    {
      title: "SRCP",
      items: [
        {
          title: "SRCP: a comprehensive pipeline for accurate annotation and quantification of circRNAs",
          description: "",
          url: "#"
        }
      ]
    }
  ]
};
