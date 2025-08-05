export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  software: string[];
  images: string[];
  youtubeUrl?: string;
  externalUrl?: string;
  category: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "standing-rack-cabinet",
    title: "Standing Rack Cabinet 19\" (Sheetmetal)",
    description: "High-capacity electric component cabinet designed for industrial applications. Features robust sheetmetal construction with precise tolerances and professional finishing. Engineered to support 1500 kg load capacity while maintaining accessibility and thermal management.",
    features: [
      "1500 kg load capacity",
      "19-inch standard rack mounting",
      "Optimized ventilation design",
      "Precision sheetmetal fabrication",
      "Industrial-grade powder coating",
      "Cable management integration"
    ],
    software: ["SolidWorks", "KeyShot", "AutoCAD"],
    images: ["cabinet1.jpg", "cabinet2.jpg", "cabinet3.jpg", "cabinet4.jpg"],
    youtubeUrl: "https://www.youtube.com/watch?v=d3-JVcbrEoA",
    category: "Industrial Design"
  },
  {
    id: "assault-rifle",
    title: "Assault Rifle WK180-C",
    description: "Detailed 3D model of Canadian rifle replica with optics-ready configuration. Comprehensive modeling of all mechanical components with realistic material properties and professional rendering for documentation and visualization purposes.",
    features: [
      "Complete mechanical assembly",
      "Optics-ready rail system",
      "Detailed component modeling",
      "Realistic material simulation",
      "High-quality photorealistic renders",
      "Technical documentation ready"
    ],
    software: ["SolidWorks", "KeyShot", "CATIA"],
    images: ["rifle1.jpg", "rifle2.jpg", "rifle3.jpg", "rifle4.jpg"],
    youtubeUrl: "https://www.youtube.com/watch?v=d3-JVcbrEoA",
    category: "Mechanical Design"
  },
  {
    id: "drilling-machine",
    title: "Manual Hand Drilling Machine",
    description: "Mechanically geared manual drilling system designed for precision drilling operations. Features robust gear reduction mechanism for enhanced torque multiplication and smooth operation with ergonomic handle design.",
    features: [
      "Mechanical gear reduction system",
      "Precision drilling capability",
      "Ergonomic handle design",
      "Robust cast iron construction",
      "Adjustable drilling depth",
      "Multi-material compatibility"
    ],
    software: ["SolidWorks", "ANSYS", "AutoCAD"],
    images: ["drill1.jpg", "drill2.jpg", "drill3.jpg", "drill4.jpg"],
    youtubeUrl: "https://www.youtube.com/watch?v=RyN049y0yqg",
    category: "Mechanical Design"
  },
  {
    id: "dewatering-machine",
    title: "Animal Dung Dewatering Machine",
    description: "Agricultural waste processing system combining centrifuge and compression methods for efficient solid-liquid separation. Designed for farm-scale operations with focus on durability and maintenance accessibility.",
    features: [
      "Dual-stage dewatering process",
      "Centrifuge and compression integration",
      "Agricultural-grade durability",
      "Easy maintenance access",
      "Corrosion-resistant materials",
      "Automated operation cycle"
    ],
    software: ["SolidWorks", "ANSYS CFD", "MATLAB"],
    images: ["dewater1.jpg", "dewater2.jpg", "dewater3.jpg", "dewater4.jpg"],
    category: "Agricultural Equipment"
  },
  {
    id: "co2-arrester",
    title: "CO₂ Arrester Device",
    description: "Emission analysis and capture system featuring integrated sensor network and solver tank for carbon dioxide monitoring and collection. Designed for industrial emission control applications.",
    features: [
      "Real-time CO₂ monitoring",
      "Integrated sensor network",
      "Solver tank for capture",
      "Data logging capability",
      "Industrial-grade sensors",
      "Automated control system"
    ],
    software: ["SolidWorks", "LabView", "ANSYS"],
    images: ["co2-1.jpg", "co2-2.jpg", "co2-3.jpg", "co2-4.jpg"],
    category: "Environmental Technology"
  },
  {
    id: "excavator",
    title: "Mechanical Excavator (ZAXIS650H)",
    description: "Full-scale excavator model with detailed hydraulic systems, undercarriage, and operator cabin. Complete mechanical assembly showcasing advanced surface modeling and realistic component integration.",
    features: [
      "Complete hydraulic system modeling",
      "Detailed undercarriage design",
      "Operator cabin with controls",
      "Realistic boom and arm assembly",
      "Track system with drive sprockets",
      "Engine compartment detailing"
    ],
    software: ["SolidWorks", "CATIA", "KeyShot"],
    images: ["excavator1.jpg", "excavator2.jpg", "excavator3.jpg", "excavator4.jpg"],
    category: "Heavy Machinery"
  },
  {
    id: "slitting-machine",
    title: "Slitting Machine",
    description: "Industrial coil-cutting system for manufacturing applications. Designed to convert large material rolls into precise strips with adjustable width settings and high-speed operation capability.",
    features: [
      "Precision strip cutting",
      "Adjustable width settings",
      "High-speed operation",
      "Material tension control",
      "Automated feed system",
      "Quality control integration"
    ],
    software: ["SolidWorks", "AutoCAD", "ANSYS"],
    images: ["slitting1.jpg", "slitting2.jpg", "slitting3.jpg", "slitting4.jpg"],
    category: "Manufacturing Equipment"
  },
  {
    id: "grain-separator",
    title: "Grain Separator",
    description: "Agricultural processing equipment utilizing Scotch yoke mechanism for dual oscillatory filtering. Designed for efficient grain separation with variable frequency control and easy maintenance access.",
    features: [
      "Scotch yoke mechanism",
      "Dual oscillatory filters",
      "Variable frequency control",
      "Easy maintenance access",
      "High separation efficiency",
      "Dust collection system"
    ],
    software: ["SolidWorks", "MATLAB", "AutoCAD"],
    images: ["grain1.jpg", "grain2.jpg", "grain3.jpg", "grain4.jpg"],
    category: "Agricultural Equipment"
  },
  {
    id: "turbo-jet",
    title: "Turbo Jet Engine Model",
    description: "Concept model demonstrating jet propulsion principles with detailed compressor, combustion chamber, and turbine sections. Educational model showcasing thermodynamic principles and gas flow dynamics.",
    features: [
      "Complete propulsion system",
      "Detailed compressor stages",
      "Combustion chamber design",
      "Turbine blade geometry",
      "Exhaust nozzle optimization",
      "Educational visualization"
    ],
    software: ["SolidWorks", "ANSYS CFD", "KeyShot"],
    images: ["jet1.jpg", "jet2.jpg", "jet3.jpg", "jet4.jpg"],
    category: "Aerospace"
  },
  {
    id: "bbq-grill",
    title: "BBQ Grill & Smoke Chamber",
    description: "Twin grill system with integrated smoke chamber for professional outdoor cooking. Features temperature control, efficient heat distribution, and durable stainless steel construction.",
    features: [
      "Twin grill configuration",
      "Integrated smoke chamber",
      "Temperature control system",
      "Efficient heat distribution",
      "Stainless steel construction",
      "Easy cleaning design"
    ],
    software: ["SolidWorks", "KeyShot", "ANSYS Thermal"],
    images: ["bbq1.jpg", "bbq2.jpg", "bbq3.jpg", "bbq4.jpg"],
    category: "Consumer Products"
  },
  {
    id: "knee-brace",
    title: "Orthomen Knee Brace",
    description: "Medical orthopedic device designed using advanced surface modeling techniques. Features anatomical fit, adjustable support levels, and biocompatible materials for patient comfort and therapeutic effectiveness.",
    features: [
      "Anatomical surface modeling",
      "Adjustable support levels",
      "Biocompatible materials",
      "Ergonomic fit design",
      "Breathable construction",
      "Clinical validation ready"
    ],
    software: ["SolidWorks", "Fusion 360", "KeyShot"],
    images: ["brace1.jpg", "brace2.jpg", "brace3.jpg", "brace4.jpg"],
    category: "Medical Devices"
  },
  {
    id: "paper-production",
    title: "Paper Production from Textile Waste",
    description: "Multi-stage process machine for converting textile waste into paper products. Features cutting system, pulping mechanism, and sheet formation process with environmental sustainability focus.",
    features: [
      "Multi-stage processing",
      "Textile waste cutting system",
      "Pulping mechanism",
      "Sheet formation process",
      "Environmental sustainability",
      "Automated control system"
    ],
    software: ["SolidWorks", "MATLAB", "ANSYS"],
    images: ["paper1.jpg", "paper2.jpg", "paper3.jpg", "paper4.jpg"],
    category: "Environmental Technology"
  },
  {
    id: "sheet-metal-collection",
    title: "Sheet Metal Projects Collection",
    description: "Comprehensive collection of custom sheet metal fabrications including CPU enclosures, support frames, and electrical boxes. Demonstrates expertise in precision sheet metal design and manufacturing processes.",
    features: [
      "Custom CPU enclosures",
      "Structural support frames",
      "Electrical equipment boxes",
      "Precision fabrication",
      "Cost-optimized designs",
      "Manufacturing-ready drawings"
    ],
    software: ["SolidWorks", "AutoCAD", "SolidWorks PDM"],
    images: ["sheet1.jpg", "sheet2.jpg", "sheet3.jpg", "sheet4.jpg"],
    category: "Sheet Metal Design"
  },
  {
    id: "cfd-fea-projects",
    title: "CFD/FEA Analysis Projects",
    description: "Comprehensive simulation portfolio including heat exchanger optimization, ductwork analysis, impact testing, and automotive airflow studies. Demonstrates advanced analysis capabilities using ANSYS suite.",
    features: [
      "Heat exchanger optimization",
      "Ductwork flow analysis",
      "Structural impact testing",
      "Automotive aerodynamics",
      "Thermal analysis",
      "Pressure and stress mapping"
    ],
    software: ["ANSYS Fluent", "ANSYS Mechanical", "ANSYS CFX", "ABAQUS"],
    images: ["cfd1.jpg", "cfd2.jpg", "cfd3.jpg", "cfd4.jpg"],
    category: "Simulation & Analysis"
  },
  {
    id: "concept-products",
    title: "Concept Products Collection",
    description: "Innovative design portfolio featuring Mobius bracelet, safety helmet, finger ring, and lotion bottle. Showcases advanced surfacing techniques, aesthetic design principles, and functional product development.",
    features: [
      "Advanced surface modeling",
      "Aesthetic design principles",
      "Functional prototyping",
      "Material selection",
      "Ergonomic considerations",
      "Market-ready concepts"
    ],
    software: ["SolidWorks", "Fusion 360", "KeyShot", "Blender"],
    images: ["concept1.jpg", "concept2.jpg", "concept3.jpg", "concept4.jpg"],
    category: "Product Design"
  }
];