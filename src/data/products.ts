export const mainIndustrialCategories = [
  "Cable Ties & Management",
  "Cable Glands (Wiring Protection)",
  "Terminals & Lugs (Connectivity)",
  "Wiring Ducts & Conduits",
  "Connectors & Terminal Blocks",
  "Hardware & Installation",
  "Professional Tools",
  "General Electricals"
];

export const allCategories = [
  "PVC CABLE TIES BLACK, WHITE & COLOR", "S.S CABLE TIES", "S.S.PVC COTTED CABLE TIES",
  "CABLE TIE BASE", "HEAT SHRINK SLEEVES", "MARKER SLEEVES", "PVC SLEEVES", 
  "HEAT SHRINK END CAPS", "BUS BAR END CAPS", "CRIMPING TOOLS", 
  "METAL AND NYLON PULLING SPRINGS", "BENDING SPRING", "BRASS M&F BUSH", 
  "PVC & METAL GLANDS", "CABLE GLAND SHROUDS", "BRASS CABLE GLANDS - BW, CW, A1-A2, E1W",
  "CABLE MARKERS- EC0, EC1, EC2, EC3 & K65", "DUCT RODS", "EXTENTION REELS",
  "DIN RAIL & CONNECTORS", "PVC & METAL HAND LAMP", "NON-INSULATED CABLE LUGS",
  "NON-INSULATED PIN TYPE LUGS", "NON-INSULATED COPPER FEROUL", "INSULATED LUGS",
  "TERMINALS", "BOOTLESS FEROULS", "S.S & PVC CARRIER STRIPS", "BUSBAR INSULATORS",
  "EARTH LINKS", "FUSES", "ELECTRICAL GLOVES", "FLOAT SWITCH", "RUNNING GROUMENT",
  "G.I, PVC & G.I PVC COTTED FLEXIBLE CONDUIT", "GI CONDUITS pipes", 
  "41X21,41X41 CHANNELS", "PROSLINE CONNECTORS", "BREAKERS", 
  "ACRYLIC, PVC & BAKELITE SHEETS", "INDUSTRIAL PLUGS & SOCKETS", "SWITCHS AND SOCKET"
];

// Mapping for hierarchical navigation
export const categoryMapping: Record<string, string[]> = {
  "Cable Ties & Management": [
    "PVC CABLE TIES BLACK, WHITE & COLOR", "S.S CABLE TIES", "S.S.PVC COTTED CABLE TIES",
    "CABLE TIE BASE", "HEAT SHRINK SLEEVES", "MARKER SLEEVES", "PVC SLEEVES",
    "CABLE MARKERS- EC0, EC1, EC2, EC3 & K65"
  ],
  "Cable Glands (Wiring Protection)": [
    "PVC & METAL GLANDS", "CABLE GLAND SHROUDS", "BRASS CABLE GLANDS - BW, CW, A1-A2, E1W",
    "HEAT SHRINK END CAPS", "BUS BAR END CAPS"
  ],
  "Terminals & Lugs (Connectivity)": [
    "NON-INSULATED CABLE LUGS", "NON-INSULATED PIN TYPE LUGS", "NON-INSULATED COPPER FEROUL",
    "INSULATED LUGS", "TERMINALS", "BOOTLESS FEROULS"
  ],
  "Wiring Ducts & Conduits": [
    "G.I, PVC & G.I PVC COTTED FLEXIBLE CONDUIT", "GI CONDUITS pipes", "DUCT RODS"
  ],
  "Connectors & Terminal Blocks": [
    "DIN RAIL & CONNECTORS", "PROSLINE CONNECTORS", "INDUSTRIAL PLUGS & SOCKETS"
  ],
  "Hardware & Installation": [
    "41X21,41X41 CHANNELS", "BRASS M&F BUSH", "S.S & PVC CARRIER STRIPS", "RUNNING GROUMENT"
  ],
  "Professional Tools": [
    "CRIMPING TOOLS", "METAL AND NYLON PULLING SPRINGS", "BENDING SPRING"
  ],
  "General Electricals": [
    "BREAKERS", "FUSES", "ELECTRICAL GLOVES", "FLOAT SWITCH", "BUSBAR INSULATORS",
    "EARTH LINKS", "ACRYLIC, PVC & BAKELITE SHEETS", "SWITCHS AND SOCKET", "EXTENTION REELS",
    "PVC & METAL HAND LAMP"
  ]
};

export type ProductCategory = typeof allCategories[number] | string;

export interface ProductSpec {
  property: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  seriesId: string;
  category: ProductCategory;
  material: string;
  description: string;
  features: string[];
  specs: ProductSpec[];
  imageUrl: string;
}

export interface ProductSeries {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  imageUrl: string;
  variantsCount: number;
  specLabels: string[]; // Headers for the technical table
}

const generateProductSeries = (): { products: Product[], series: ProductSeries[] } => {
  const products: Product[] = [];
  const seriesList: ProductSeries[] = [];

  // Helper to assign images more variety
  const getCategoryImage = (cat: string): string => {
    if (cat.includes('S.S CABLE TIES')) return '/ss_cable_ties.png';
    if (cat.includes('HEAT SHRINK')) return '/heat_shrink.png';
    if (cat.includes('MARKER')) return '/marker_sleeves.png';
    if (cat.includes('BRASS') || cat.includes('BUSH')) return '/brass_glands.png';
    if (cat.includes('COPPER') || cat.includes('LUG')) return '/copper_lugs.png';
    if (cat.includes('FUSE') || cat.includes('BREAKER')) return '/fuses_breakers.png';
    if (cat.includes('CONDUIT')) return '/pvc_conduits.png';
    if (cat.includes('DIN RAIL')) return '/din_rail.png';
    if (cat.includes('TOOLS')) return '/industrial_tools.png';
    if (cat.includes('NYLON') && cat.includes('TIE')) return '/nylon_cable_ties.png';
    return '/generic_hardware.png';
  };

  // --- 1. NYLON TIES SERIES ---
  const nylonTieSeries: ProductSeries = {
    id: 'SER-NY-TIE',
    name: 'TFX Series Nylon Cable Ties',
    category: 'PVC CABLE TIES BLACK, WHITE & COLOR',
    description: 'Industrial self-locking nylon ties for heavy duty cable management. UL 94V-2 flame retardant.',
    imageUrl: '/nylon_cable_ties.png',
    variantsCount: 0,
    specLabels: ['Length', 'Width', 'Tensile Strength']
  };
  
  const tieLengths = [100, 150, 200, 250, 300, 370, 450, 550, 700, 1000, 1200];
  tieLengths.forEach(l => {
    [2.5, 3.6, 4.8, 7.6, 9.0, 12.6].forEach(w => {
      if ((l < 200 && w === 2.5) || (l >= 200 && l < 400 && w >= 3.6 && w <= 4.8) || (l >= 400 && w >= 7.6)) {
        products.push({
          id: `TFX-${w}x${l}`,
          name: `Nylon Tie ${l}x${w}mm`,
          seriesId: nylonTieSeries.id,
          category: nylonTieSeries.category,
          material: 'Nylon 66',
          description: nylonTieSeries.description,
          features: ['Self-locking', 'Flame retardant'],
          specs: [
            { property: 'Length', value: `${l}mm` },
            { property: 'Width', value: `${w}mm` },
            { property: 'Tensile Strength', value: w < 4.8 ? '18kg' : '55kg+' }
          ],
          imageUrl: nylonTieSeries.imageUrl
        });
        nylonTieSeries.variantsCount++;
      }
    });
  });
  seriesList.push(nylonTieSeries);

  // --- 2. BRASS GLANDS SERIES ---
  ['BW', 'CW', 'E1W'].forEach(type => {
    const s: ProductSeries = {
      id: `SER-BR-${type}`,
      name: `${type} Series Brass Glands`,
      category: 'BRASS CABLE GLANDS - BW, CW, A1-A2, E1W',
      description: `Industrial ${type} type brass glands for armoured cables. Weatherproof and double compression options available.`,
      imageUrl: '/brass_glands.png',
      variantsCount: 0,
      specLabels: ['Size', 'Type', 'Application']
    };
    ['20S', '20', '25S', '25', '32', '40', '50S', '50', '63S', '63', '75'].forEach(sz => {
      products.push({
        id: `${type}-${sz}`,
        name: `${type} Gland ${sz}`,
        seriesId: s.id,
        category: s.category,
        material: 'Marine-grade Brass',
        description: s.description,
        features: ['Nickel plated', 'High mechanical retention'],
        specs: [
          { property: 'Size', value: sz },
          { property: 'Type', value: type },
          { property: 'Application', value: type === 'BW' ? 'Indoor' : 'Outdoor/Armoured' }
        ],
        imageUrl: s.imageUrl
      });
      s.variantsCount++;
    });
    seriesList.push(s);
  });

  // --- 3. SC LUGS SERIES ---
  const lugSeries: ProductSeries = {
    id: 'SER-SC-LUG',
    name: 'SC Series Copper Tube Lugs',
    category: 'NON-INSULATED CABLE LUGS',
    description: 'High conductivity tinned copper tube lugs for heavy duty cable terminations.',
    imageUrl: '/copper_lugs.png',
    variantsCount: 0,
    specLabels: ['Section', 'Stud Hole', 'Design']
  };
  const scSeries = [1.5, 4, 10, 16, 25, 35, 50, 70, 95, 120, 150, 240, 300, 400, 500, 630, 800, 1000];
  scSeries.forEach(sz => {
    const stud = sz <= 10 ? 6 : sz <= 50 ? 10 : 12;
    products.push({
      id: `SC-${sz}-${stud}`,
      name: `Copper Lug ${sz}mm²`,
      seriesId: lugSeries.id,
      category: lugSeries.category,
      material: '99.9% Red Copper (Tinned)',
      description: lugSeries.description,
      features: ['Long barrel', 'Seamless'],
      specs: [
        { property: 'Section', value: `${sz}mm²` },
        { property: 'Stud Hole', value: `M${stud}` },
        { property: 'Design', value: 'Heavy Duty' }
      ],
      imageUrl: lugSeries.imageUrl
    });
    lugSeries.variantsCount++;
  });
  seriesList.push(lugSeries);

  // --- 4. MCB BREAKERS SERIES ---
  const mcbSeries: ProductSeries = {
    id: 'SER-MCB',
    name: 'Industrial MCB Breakers',
    category: 'BREAKERS',
    description: 'Miniature Circuit Breakers for industrial machinery and panel protection.',
    imageUrl: '/fuses_breakers.png',
    variantsCount: 0,
    specLabels: ['Poles', 'Rating (A)', 'Curve']
  };
  ['1P', '2P', '3P', '4P'].forEach(pl => {
    [6, 10, 16, 20, 32, 40, 63].forEach(rt => {
      products.push({
        id: `MCB-${pl}-${rt}A`,
        name: `${pl} MCB ${rt}A`,
        seriesId: mcbSeries.id,
        category: mcbSeries.category,
        material: 'High-strength Polyamide',
        description: mcbSeries.description,
        features: ['DIN rail mount', '10kA Short circuit'],
        specs: [
          { property: 'Poles', value: pl },
          { property: 'Rating (A)', value: `${rt}A` },
          { property: 'Curve', value: 'C-Curve' }
        ],
        imageUrl: mcbSeries.imageUrl
      });
      mcbSeries.variantsCount++;
    });
  });
  seriesList.push(mcbSeries);

  // --- 5. HRC FUSES SERIES ---
  const fuseSeries: ProductSeries = {
    id: 'SER-HRC-FUSE',
    name: 'HRC High Capacity Fuses',
    category: 'FUSES',
    description: 'High rupturing capacity fuse links for heavy industrial protection.',
    imageUrl: '/fuses_breakers.png',
    variantsCount: 0,
    specLabels: ['Amps', 'Voltage', 'Model']
  };
  [16, 25, 40, 63, 100, 160, 200, 250, 400, 630].forEach(a => {
    products.push({
      id: `HRC-${a}A`,
      name: `HRC Fuse ${a}A`,
      seriesId: fuseSeries.id,
      category: fuseSeries.category,
      material: 'Ceramic Body / Silver Plated',
      description: fuseSeries.description,
      features: ['80kA breaking', 'Tag-type mounting'],
      specs: [
        { property: 'Amps', value: `${a}A` },
        { property: 'Voltage', value: '415V / 500V' },
        { property: 'Model', value: `HRC-${a}` }
      ],
      imageUrl: fuseSeries.imageUrl
    });
    fuseSeries.variantsCount++;
  });
  seriesList.push(fuseSeries);

  // --- FILLING ALL OTHER CATEGORIES WITH SINGLE SERIES ---
  allCategories.forEach(cat => {
    if (!seriesList.some(s => s.category === cat)) {
      const img = getCategoryImage(cat);
      const s: ProductSeries = {
        id: `SER-GEN-${cat.slice(0,5).replace(/[^a-zA-Z]/g, '')}`,
        name: `${cat.split(' ')[0]} ${cat.split(' ').length > 1 ? cat.split(' ')[1] : ''} Series`,
        category: cat,
        description: `Premium industrial ${cat} components for heavy engineering projects. Engineered for maximum durability.`,
        imageUrl: img,
        variantsCount: 0,
        specLabels: ['Specification', 'Material']
      };
      
      const variants = cat.includes('S.S') ? ['304 Grade', '316 Grade'] : ['Standard', 'Heavy Duty'];
      variants.forEach(mod => {
        products.push({
          id: `MOD-${cat.slice(0,3)}-${mod.slice(0,1)}`,
          name: `${cat.split(' ')[0]} (${mod})`,
          seriesId: s.id,
          category: s.category,
          material: cat.includes('PVC') ? 'Industrial PVC' : cat.includes('S.S') ? 'Stainless Steel' : 'Industrial Grade Alloy',
          description: s.description,
          features: ['Standard compliant', 'Corrosion resistant'],
          specs: [
            { property: 'Specification', value: mod },
            { property: 'Material', value: 'High Performance' }
          ],
          imageUrl: s.imageUrl
        });
        s.variantsCount++;
      });
      seriesList.push(s);
    }
  });

  return { products, series: seriesList };
};

const data = generateProductSeries();

export const productsList: Product[] = data.products;
export const seriesList: ProductSeries[] = data.series;
