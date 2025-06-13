// Realistic Indian dairy supply chain data
export interface CollectionData {
  batch_no: string;
  farmer_id: string;
  quantity_of_milk: number;
  breed_of_cow: string;
  timestamp: string;
  location: string;
}

export interface DistributorData {
  batch_no: string;
  distributor_id: string;
  receiving_timestamp: string;
  quantity: number;
  storage_conditions: string;
  location: string;
}

export interface LogisticsData {
  batch_no: string;
  distance_travelled: number;
  temperature: number;
  receiving_location: string;
  timestamp: string;
  environment_conditions: string;
}

export interface ShopData {
  batch_no: string;
  timestamp: string;
  storage_conditions: string;
  number_of_packets_received: number;
}

export interface BatchData {
  batch_no: string;
  collection: CollectionData | null;
  distributor: DistributorData | null;
  logistics: LogisticsData | null;
  shop: ShopData | null;
}

// Collection Centre Data with Indian locations and breeds
export const collectionData: CollectionData[] = [
  {
    batch_no: 'GUJ001',
    farmer_id: 'FARM_GUJ_001',
    quantity_of_milk: 750.5,
    breed_of_cow: 'Gir',
    timestamp: '2025-03-15T05:30:00Z',
    location: 'Anand, Gujarat'
  },
  {
    batch_no: 'PUN002',
    farmer_id: 'FARM_PUN_002',
    quantity_of_milk: 920.0,
    breed_of_cow: 'Sahiwal',
    timestamp: '2025-03-15T06:00:00Z',
    location: 'Ludhiana, Punjab'
  },
  {
    batch_no: 'HAR003',
    farmer_id: 'FARM_HAR_003',
    quantity_of_milk: 680.0,
    breed_of_cow: 'Murrah Buffalo',
    timestamp: '2025-03-15T05:45:00Z',
    location: 'Karnal, Haryana'
  },
  {
    batch_no: 'RAJ004',
    farmer_id: 'FARM_RAJ_004',
    quantity_of_milk: 580.5,
    breed_of_cow: 'Red Sindhi',
    timestamp: '2025-03-15T06:15:00Z',
    location: 'Bikaner, Rajasthan'
  },
  {
    batch_no: 'MAH005',
    farmer_id: 'FARM_MAH_005',
    quantity_of_milk: 825.0,
    breed_of_cow: 'Deoni',
    timestamp: '2025-03-15T05:00:00Z',
    location: 'Pune, Maharashtra'
  },
  {
    batch_no: 'KAR006',
    farmer_id: 'FARM_KAR_006',
    quantity_of_milk: 710.5,
    breed_of_cow: 'Hallikar',
    timestamp: '2025-03-15T05:30:00Z',
    location: 'Mysore, Karnataka'
  },
  {
    batch_no: 'TN007',
    farmer_id: 'FARM_TN_007',
    quantity_of_milk: 650.0,
    breed_of_cow: 'Kangayam',
    timestamp: '2025-03-15T06:00:00Z',
    location: 'Coimbatore, Tamil Nadu'
  },
  {
    batch_no: 'UP008',
    farmer_id: 'FARM_UP_008',
    quantity_of_milk: 890.0,
    breed_of_cow: 'Gangatiri',
    timestamp: '2025-03-15T05:15:00Z',
    location: 'Mathura, Uttar Pradesh'
  },
  {
    batch_no: 'WB009',
    farmer_id: 'FARM_WB_009',
    quantity_of_milk: 620.5,
    breed_of_cow: 'Jersey Cross',
    timestamp: '2025-03-15T06:30:00Z',
    location: 'Siliguri, West Bengal'
  },
  {
    batch_no: 'KER010',
    farmer_id: 'FARM_KER_010',
    quantity_of_milk: 480.0,
    breed_of_cow: 'Vechur',
    timestamp: '2025-03-15T05:45:00Z',
    location: 'Kottayam, Kerala'
  },
  // Original batches
  {
    batch_no: 'BATCH001',
    farmer_id: 'FARM123',
    quantity_of_milk: 500.5,
    breed_of_cow: 'Holstein',
    timestamp: '2025-02-27T08:00:00Z',
    location: 'North Valley Farm'
  },
  {
    batch_no: 'BATCH002',
    farmer_id: 'FARM456',
    quantity_of_milk: 450.0,
    breed_of_cow: 'Jersey',
    timestamp: '2025-02-27T09:15:00Z',
    location: 'Hillside Dairy'
  },
  {
    batch_no: 'BATCH003',
    farmer_id: 'FARM789',
    quantity_of_milk: 600.0,
    breed_of_cow: 'Buffalo',
    timestamp: '2025-02-27T07:30:00Z',
    location: 'Riverside Ranch'
  },
  {
    batch_no: 'BATCH004',
    farmer_id: 'FARM234',
    quantity_of_milk: 550.5,
    breed_of_cow: 'Brown Swiss',
    timestamp: '2025-02-27T08:45:00Z',
    location: 'Mountain View Farm'
  },
  {
    batch_no: 'BATCH005',
    farmer_id: 'FARM567',
    quantity_of_milk: 525.0,
    breed_of_cow: 'Holstein',
    timestamp: '2025-02-27T09:30:00Z',
    location: 'Green Meadows'
  }
];

// Distributor Data with Indian distribution centers
export const distributorData: DistributorData[] = [
  {
    batch_no: 'GUJ001',
    distributor_id: 'AMUL_DIST_001',
    receiving_timestamp: '2025-03-15T08:30:00Z',
    quantity: 745.0,
    storage_conditions: 'Temperature: 4°C, Humidity: 75%, Stainless Steel Tanks',
    location: 'Amul Dairy, Anand'
  },
  {
    batch_no: 'PUN002',
    distributor_id: 'VERKA_DIST_002',
    receiving_timestamp: '2025-03-15T09:00:00Z',
    quantity: 915.0,
    storage_conditions: 'Temperature: 3°C, Humidity: 70%, Automated Storage',
    location: 'Verka Milk Plant, Ludhiana'
  },
  {
    batch_no: 'HAR003',
    distributor_id: 'VITA_DIST_003',
    receiving_timestamp: '2025-03-15T08:45:00Z',
    quantity: 675.0,
    storage_conditions: 'Temperature: 4°C, Humidity: 72%, Bulk Milk Cooler',
    location: 'Vita Dairy, Karnal'
  },
  {
    batch_no: 'RAJ004',
    distributor_id: 'SARAS_DIST_004',
    receiving_timestamp: '2025-03-15T09:15:00Z',
    quantity: 575.0,
    storage_conditions: 'Temperature: 4°C, Humidity: 68%, Insulated Storage',
    location: 'Saras Dairy, Jaipur'
  },
  {
    batch_no: 'MAH005',
    distributor_id: 'MAHANAND_DIST_005',
    receiving_timestamp: '2025-03-15T08:00:00Z',
    quantity: 820.0,
    storage_conditions: 'Temperature: 4°C, Humidity: 78%, Modern Chilling Unit',
    location: 'Mahanand Dairy, Pune'
  },
  {
    batch_no: 'KAR006',
    distributor_id: 'NANDINI_DIST_006',
    receiving_timestamp: '2025-03-15T08:30:00Z',
    quantity: 705.0,
    storage_conditions: 'Temperature: 4°C, Humidity: 76%, Refrigerated Silos',
    location: 'Nandini Dairy, Mysore'
  },
  {
    batch_no: 'TN007',
    distributor_id: 'AAVIN_DIST_007',
    receiving_timestamp: '2025-03-15T09:00:00Z',
    quantity: 645.0,
    storage_conditions: 'Temperature: 4°C, Humidity: 74%, Cold Storage Facility',
    location: 'Aavin Dairy, Coimbatore'
  },
  {
    batch_no: 'UP008',
    distributor_id: 'PARAG_DIST_008',
    receiving_timestamp: '2025-03-15T08:15:00Z',
    quantity: 885.0,
    storage_conditions: 'Temperature: 4°C, Humidity: 71%, Bulk Cooling System',
    location: 'Parag Milk Foods, Manpura'
  },
  {
    batch_no: 'WB009',
    distributor_id: 'SUDHA_DIST_009',
    receiving_timestamp: '2025-03-15T09:30:00Z',
    quantity: 615.0,
    storage_conditions: 'Temperature: 4°C, Humidity: 80%, Chilled Storage Tanks',
    location: 'Sudha Dairy, Kolkata'
  },
  {
    batch_no: 'KER010',
    distributor_id: 'MILMA_DIST_010',
    receiving_timestamp: '2025-03-15T08:45:00Z',
    quantity: 475.0,
    storage_conditions: 'Temperature: 4°C, Humidity: 82%, Tropical Climate Storage',
    location: 'Milma Dairy, Kottayam'
  },
  // Original batches
  {
    batch_no: 'BATCH001',
    distributor_id: 'DIST123',
    receiving_timestamp: '2025-02-27T10:00:00Z',
    quantity: 495.0,
    storage_conditions: 'Temperature: 4°C, Humidity: 85%',
    location: 'Central Distribution Hub'
  },
  {
    batch_no: 'BATCH002',
    distributor_id: 'DIST456',
    receiving_timestamp: '2025-02-27T11:15:00Z',
    quantity: 445.0,
    storage_conditions: 'Temperature: 3°C, Humidity: 82%',
    location: 'East Distribution Center'
  },
  {
    batch_no: 'BATCH003',
    distributor_id: 'DIST789',
    receiving_timestamp: '2025-02-27T09:30:00Z',
    quantity: 595.0,
    storage_conditions: 'Temperature: 4°C, Humidity: 84%',
    location: 'West Distribution Hub'
  },
  {
    batch_no: 'BATCH004',
    distributor_id: 'DIST234',
    receiving_timestamp: '2025-02-27T10:45:00Z',
    quantity: 545.0,
    storage_conditions: 'Temperature: 3.5°C, Humidity: 83%',
    location: 'South Distribution Center'
  },
  {
    batch_no: 'BATCH005',
    distributor_id: 'DIST567',
    receiving_timestamp: '2025-02-27T11:30:00Z',
    quantity: 520.0,
    storage_conditions: 'Temperature: 4°C, Humidity: 85%',
    location: 'North Distribution Hub'
  }
];

// Logistics Data with Indian transportation routes
export const logisticsData: LogisticsData[] = [
  {
    batch_no: 'GUJ001',
    distance_travelled: 285.5,
    temperature: 6.0,
    receiving_location: 'Mumbai Central Market',
    timestamp: '2025-03-15T12:30:00Z',
    environment_conditions: 'Refrigerated Truck, GPS Monitored, Temperature Controlled'
  },
  {
    batch_no: 'PUN002',
    distance_travelled: 195.0,
    temperature: 5.5,
    receiving_location: 'Delhi Azadpur Mandi',
    timestamp: '2025-03-15T13:00:00Z',
    environment_conditions: 'Insulated Vehicle, Cold Chain Maintained'
  },
  {
    batch_no: 'HAR003',
    distance_travelled: 145.0,
    temperature: 6.0,
    receiving_location: 'Gurgaon Distribution Hub',
    timestamp: '2025-03-15T12:45:00Z',
    environment_conditions: 'Temperature Monitored Transport, Real-time Tracking'
  },
  {
    batch_no: 'RAJ004',
    distance_travelled: 320.0,
    temperature: 7.0,
    receiving_location: 'Ahmedabad Wholesale Market',
    timestamp: '2025-03-15T14:15:00Z',
    environment_conditions: 'Desert Route Transport, Extra Insulation'
  },
  {
    batch_no: 'MAH005',
    distance_travelled: 165.0,
    temperature: 5.8,
    receiving_location: 'Mumbai Dadar Market',
    timestamp: '2025-03-15T12:00:00Z',
    environment_conditions: 'Urban Distribution, Traffic-optimized Route'
  },
  {
    batch_no: 'KAR006',
    distance_travelled: 210.0,
    temperature: 6.2,
    receiving_location: 'Bangalore Electronic City',
    timestamp: '2025-03-15T12:30:00Z',
    environment_conditions: 'Hill Route Transport, Climate Controlled'
  },
  {
    batch_no: 'TN007',
    distance_travelled: 180.0,
    temperature: 6.5,
    receiving_location: 'Chennai Koyambedu Market',
    timestamp: '2025-03-15T13:00:00Z',
    environment_conditions: 'Coastal Route, Humidity Controlled Transport'
  },
  {
    batch_no: 'UP008',
    distance_travelled: 175.0,
    temperature: 5.5,
    receiving_location: 'Noida Sector 18 Market',
    timestamp: '2025-03-15T12:15:00Z',
    environment_conditions: 'Highway Transport, Continuous Monitoring'
  },
  {
    batch_no: 'WB009',
    distance_travelled: 560.0,
    temperature: 6.8,
    receiving_location: 'Kolkata New Market Area',
    timestamp: '2025-03-15T15:30:00Z',
    environment_conditions: 'Long Distance Transport, Multi-stop Route'
  },
  {
    batch_no: 'KER010',
    distance_travelled: 125.0,
    temperature: 7.2,
    receiving_location: 'Kochi Marine Drive Market',
    timestamp: '2025-03-15T12:45:00Z',
    environment_conditions: 'Monsoon-ready Transport, Waterproof Containers'
  },
  // Original batches
  {
    batch_no: 'BATCH001',
    distance_travelled: 150.5,
    temperature: 4.0,
    receiving_location: 'City Central Market',
    timestamp: '2025-02-27T12:00:00Z',
    environment_conditions: 'Refrigerated Transport, Humidity Controlled'
  },
  {
    batch_no: 'BATCH002',
    distance_travelled: 120.0,
    temperature: 3.5,
    receiving_location: 'Suburban Mall Complex',
    timestamp: '2025-02-27T13:15:00Z',
    environment_conditions: 'Temperature Monitored Transport'
  },
  {
    batch_no: 'BATCH003',
    distance_travelled: 180.0,
    temperature: 4.0,
    receiving_location: 'Downtown Shopping District',
    timestamp: '2025-02-27T11:30:00Z',
    environment_conditions: 'Cold Chain Transport'
  },
  {
    batch_no: 'BATCH004',
    distance_travelled: 160.5,
    temperature: 3.8,
    receiving_location: 'Airport Terminal Market',
    timestamp: '2025-02-27T12:45:00Z',
    environment_conditions: 'Climate Controlled Vehicle'
  },
  {
    batch_no: 'BATCH005',
    distance_travelled: 140.0,
    temperature: 4.0,
    receiving_location: 'Harbor Front Market',
    timestamp: '2025-02-27T13:30:00Z',
    environment_conditions: 'Insulated Transport Container'
  }
];

// Shop Data with Indian retail locations
export const shopData: ShopData[] = [
  {
    batch_no: 'GUJ001',
    timestamp: '2025-03-15T14:30:00Z',
    storage_conditions: 'Commercial Deep Freezer at 4°C, Backup Power Supply',
    number_of_packets_received: 1490
  },
  {
    batch_no: 'PUN002',
    timestamp: '2025-03-15T15:00:00Z',
    storage_conditions: 'Multi-door Display Cooler at 3.5°C, LED Lighting',
    number_of_packets_received: 1830
  },
  {
    batch_no: 'HAR003',
    timestamp: '2025-03-15T14:45:00Z',
    storage_conditions: 'Walk-in Cold Room at 4°C, Digital Temperature Control',
    number_of_packets_received: 1350
  },
  {
    batch_no: 'RAJ004',
    timestamp: '2025-03-15T16:15:00Z',
    storage_conditions: 'Desert Climate Cooler at 4°C, Solar Backup',
    number_of_packets_received: 1150
  },
  {
    batch_no: 'MAH005',
    timestamp: '2025-03-15T14:00:00Z',
    storage_conditions: 'Premium Display Refrigerator at 4°C, Glass Doors',
    number_of_packets_received: 1640
  },
  {
    batch_no: 'KAR006',
    timestamp: '2025-03-15T14:30:00Z',
    storage_conditions: 'Vertical Display Cooler at 4°C, Energy Efficient',
    number_of_packets_received: 1410
  },
  {
    batch_no: 'TN007',
    timestamp: '2025-03-15T15:00:00Z',
    storage_conditions: 'Coastal Climate Refrigerator at 4°C, Corrosion Resistant',
    number_of_packets_received: 1290
  },
  {
    batch_no: 'UP008',
    timestamp: '2025-03-15T14:15:00Z',
    storage_conditions: 'Large Capacity Cooler at 4°C, Automatic Defrost',
    number_of_packets_received: 1770
  },
  {
    batch_no: 'WB009',
    timestamp: '2025-03-15T17:30:00Z',
    storage_conditions: 'Humidity Control Refrigerator at 4°C, Monsoon Ready',
    number_of_packets_received: 1230
  },
  {
    batch_no: 'KER010',
    timestamp: '2025-03-15T14:45:00Z',
    storage_conditions: 'Tropical Climate Cooler at 4°C, High Humidity Tolerance',
    number_of_packets_received: 950
  },
  // Original batches
  {
    batch_no: 'BATCH001',
    timestamp: '2025-02-27T14:00:00Z',
    storage_conditions: 'Commercial Refrigerator at 4°C',
    number_of_packets_received: 990
  },
  {
    batch_no: 'BATCH002',
    timestamp: '2025-02-27T15:15:00Z',
    storage_conditions: 'Display Cooler at 3.5°C',
    number_of_packets_received: 890
  },
  {
    batch_no: 'BATCH003',
    timestamp: '2025-02-27T13:30:00Z',
    storage_conditions: 'Walk-in Cooler at 4°C',
    number_of_packets_received: 1190
  },
  {
    batch_no: 'BATCH004',
    timestamp: '2025-02-27T14:45:00Z',
    storage_conditions: 'Refrigerated Display at 3.8°C',
    number_of_packets_received: 1090
  },
  {
    batch_no: 'BATCH005',
    timestamp: '2025-02-27T15:30:00Z',
    storage_conditions: 'Cold Storage Unit at 4°C',
    number_of_packets_received: 1040
  }
];

// Helper functions to fetch data
export function fetchBatchData(batchNumber: string): BatchData | null {
  const collection = collectionData.find(item => item.batch_no === batchNumber) || null;
  const distributor = distributorData.find(item => item.batch_no === batchNumber) || null;
  const logistics = logisticsData.find(item => item.batch_no === batchNumber) || null;
  const shop = shopData.find(item => item.batch_no === batchNumber) || null;

  // If we have at least one piece of data, return the combined object
  if (collection || distributor || logistics || shop) {
    return {
      batch_no: batchNumber,
      collection,
      distributor,
      logistics,
      shop
    };
  }

  return null;
}

export function getAllBatches(): { batch_number: string }[] {
  // Get all unique batch numbers
  const allBatchNumbers = [
    ...collectionData.map(item => item.batch_no),
    ...distributorData.map(item => item.batch_no),
    ...logisticsData.map(item => item.batch_no),
    ...shopData.map(item => item.batch_no)
  ];

  const uniqueBatchNumbers = [...new Set(allBatchNumbers)];
  
  return uniqueBatchNumbers.map(batch_no => ({ batch_number: batch_no }));
}