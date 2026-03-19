const COVERAGE_DB = [
    {
        name: "Costila",
        latMin: 45.40, latMax: 45.45, lngMin: 25.43, lngMax: 25.49,
        maps: [
            { keywords: ["any"], img: "coverages/NAUTELA1AE32340D0_0.png", bounds: [[43.17867, 22.28144], [47.67527, 28.68852]] }
        ]
    },
    {
        name: "Pietrarie",
        latMin: 47.05, latMax: 47.15, lngMin: 27.58, lngMax: 27.68,
        maps: [
            { keywords: ["pietrărie", "pietrarie"], img: "coverages/pietrarie100.png", bounds: [[44.3881, 23.68446], [49.78402, 31.60917]] }
        ]
    },
    {
        name: "Odobesti",
        latMin: 45.75, latMax: 45.90, lngMin: 26.85, lngMax: 27.10,
        maps: [
            { keywords: ["90.0", "digi"], img: "coverages/mgod30k.png", bounds: [[43.15911, 23.0758], [48.55504, 30.82356]] },
            { keywords: ["101.0", "102.5", "cultural", "actualit"], img: "coverages/mgod50k.png", bounds: [[43.15911, 23.0758], [48.55504, 30.82356]] },
            { keywords: ["97.0", "focus"], img: "coverages/mgod10k.png", bounds: [[44.50809, 25.01274], [47.20606, 28.88662]] },
            { keywords: ["any"], img: "coverages/mgod500.png", bounds: [[44.95775, 25.65839], [46.7564, 28.24097]] }
        ]
    },
    {
        name: "Cahul",
        latMin: 45.80, latMax: 46.10, lngMin: 28.00, lngMax: 28.40,
        maps: [
            { keywords: ["105.2"], img: "coverages/cahul_1052.png", bounds: [[43.23701, 24.39666], [48.63293, 32.15529]] },
            { keywords: ["100.7"], img: "coverages/cahul_1007.png", bounds: [[43.23701, 24.39666], [48.63293, 32.15529]] },
            { keywords: ["107.7"], img: "coverages/cahul_1077.png", bounds: [[43.23701, 24.39666], [48.63293, 32.15529]] },
            { keywords: ["98.9"], img: "coverages/cahul_989.png", bounds: [[44.13633, 25.68977], [47.73362, 30.86219]] },
            { keywords: ["93.3", "98.2"], img: "coverages/cahul_933.png", bounds: [[43.68667, 25.04321], [48.18327, 31.50874]] },
            { keywords: ["91.5", "92.6"], img: "coverages/cahul_915.png", bounds: [[44.58599, 26.33632], [47.28395, 30.21563]] },
            { keywords: ["90.4"], img: "coverages/cahul_904.png", bounds: [[44.13633, 25.68977], [47.73362, 30.86219]] },
            { keywords: ["any"], img: "coverages/cahul_893.png", bounds: [[45.03565, 26.98287], [46.83429, 29.56908]] }
        ]
    },
    {
        name: "Bucuresti",
        latMin: 44.35, latMax: 44.55, lngMin: 25.95, lngMax: 26.25,
        maps: [
            { keywords: ["98.3", "101.3", "105.3"], img: "coverages/srr_buc.png", bounds: [[41.77889, 22.26954], [47.17482, 29.83181]] },
            { keywords: ["104.8"], img: "coverages/muzical_buc.png", bounds: [[42.67821, 23.52992], [46.2755, 28.57143]] },
            { keywords: ["97.9"], img: "coverages/digi_buc.png", bounds: [[42.67821, 23.52992], [46.2755, 28.57143]] }
        ]
    },
    {
        name: "Soveja",
        latMin: 45.95, latMax: 46.10, lngMin: 26.50, lngMax: 26.80,
        maps: [
            { keywords: ["88.2"], img: "coverages/soveja.png", bounds: [[45.54622, 26.01305], [46.44555, 27.30758]] }
        ]
    },
    {
        name: "Buzau",
        latMin: 45.05, latMax: 45.25, lngMin: 26.65, lngMax: 26.95,
        maps: [
            { keywords: ["93.8"], img: "coverages/focusbz.png", bounds: [[44.25151, 25.53797], [46.05016, 28.08836]] },
            { keywords: ["94.7", "106.2"], img: "coverages/probz.png", bounds: [[44.25333, 25.54284], [46.05197, 28.09331]] },
            { keywords: ["100.3"], img: "coverages/efm_bz.png", bounds: [[43.79417, 24.89551], [46.49214, 28.72058]] },
            { keywords: ["102.7"], img: "coverages/vibe_bz.png", bounds: [[44.69349, 26.17053], [45.59282, 27.44555]] },
            { keywords: ["98.0"], img: "coverages/campus_bz.png", bounds: [[44.71001, 26.18438], [45.60933, 27.45977]] },
            { keywords: ["105.6"], img: "coverages/magicbz.png", bounds: [[43.807, 24.90314], [46.50497, 28.72907]] }
        ]
    }
    ,{
        name: "Barlad - Popeni",
        latMin: 46.18, latMax: 46.30, lngMin: 27.68, lngMax: 27.85,
        maps: [
            { 
                // Grupul 2kW (Trinitas)
                keywords: ["93.7"], 
                img: "coverages/937barlad.png", 
                bounds: [[44.89251, 25.90073], [47.59048, 29.80167]] 
            },
            { 
                // Grupul 10kW (Pro FM / Kiss FM)
                keywords: ["95.7", "97.3"], 
                img: "coverages/957si973barlad.png", 
                bounds: [[43.99319, 24.60042], [48.4898, 31.10198]] 
            },
            { 
                // Grupul 30kW (Radio Romania) + fallback "any"
                keywords: ["102.8", "103.9", "any"], 
                img: "coverages/1028si1039barlad.png", 
                bounds: [[43.54353, 23.95027], [48.93946, 31.75213]] 
            }
        ]
    }
];
