/*
  # Add realistic Indian dairy supply chain data

  1. Sample Data
    - Collection Centre: 10 entries with Indian locations, farmer names, and local cow breeds
    - Distributor: 10 entries with Indian distribution centers and realistic storage conditions
    - Logistics: 10 entries with Indian transportation routes and distances
    - Shop: 10 entries with Indian retail locations and packet quantities

  2. Data Features
    - Authentic Indian locations (villages, cities, states)
    - Local cow breeds (Gir, Sahiwal, Red Sindhi, etc.)
    - Realistic farmer IDs and distributor codes
    - Temperature and storage conditions suitable for Indian climate
    - Proper supply chain timestamps showing realistic flow
*/

-- Collection Centre Data with Indian locations and breeds
DO $$
BEGIN
  -- Batch from Gujarat
  IF NOT EXISTS (SELECT 1 FROM collection_centre WHERE batch_no = 'GUJ001') THEN
    INSERT INTO collection_centre (batch_no, farmer_id, quantity_of_milk, breed_of_cow, timestamp, location) 
    VALUES ('GUJ001', 'FARM_GUJ_001', 750.5, 'Gir', '2025-03-15 05:30:00', 'Anand, Gujarat');
  END IF;
  
  -- Batch from Punjab
  IF NOT EXISTS (SELECT 1 FROM collection_centre WHERE batch_no = 'PUN002') THEN
    INSERT INTO collection_centre (batch_no, farmer_id, quantity_of_milk, breed_of_cow, timestamp, location) 
    VALUES ('PUN002', 'FARM_PUN_002', 920.0, 'Sahiwal', '2025-03-15 06:00:00', 'Ludhiana, Punjab');
  END IF;
  
  -- Batch from Haryana
  IF NOT EXISTS (SELECT 1 FROM collection_centre WHERE batch_no = 'HAR003') THEN
    INSERT INTO collection_centre (batch_no, farmer_id, quantity_of_milk, breed_of_cow, timestamp, location) 
    VALUES ('HAR003', 'FARM_HAR_003', 680.0, 'Murrah Buffalo', '2025-03-15 05:45:00', 'Karnal, Haryana');
  END IF;
  
  -- Batch from Rajasthan
  IF NOT EXISTS (SELECT 1 FROM collection_centre WHERE batch_no = 'RAJ004') THEN
    INSERT INTO collection_centre (batch_no, farmer_id, quantity_of_milk, breed_of_cow, timestamp, location) 
    VALUES ('RAJ004', 'FARM_RAJ_004', 580.5, 'Red Sindhi', '2025-03-15 06:15:00', 'Bikaner, Rajasthan');
  END IF;
  
  -- Batch from Maharashtra
  IF NOT EXISTS (SELECT 1 FROM collection_centre WHERE batch_no = 'MAH005') THEN
    INSERT INTO collection_centre (batch_no, farmer_id, quantity_of_milk, breed_of_cow, timestamp, location) 
    VALUES ('MAH005', 'FARM_MAH_005', 825.0, 'Deoni', '2025-03-15 05:00:00', 'Pune, Maharashtra');
  END IF;
  
  -- Batch from Karnataka
  IF NOT EXISTS (SELECT 1 FROM collection_centre WHERE batch_no = 'KAR006') THEN
    INSERT INTO collection_centre (batch_no, farmer_id, quantity_of_milk, breed_of_cow, timestamp, location) 
    VALUES ('KAR006', 'FARM_KAR_006', 710.5, 'Hallikar', '2025-03-15 05:30:00', 'Mysore, Karnataka');
  END IF;
  
  -- Batch from Tamil Nadu
  IF NOT EXISTS (SELECT 1 FROM collection_centre WHERE batch_no = 'TN007') THEN
    INSERT INTO collection_centre (batch_no, farmer_id, quantity_of_milk, breed_of_cow, timestamp, location) 
    VALUES ('TN007', 'FARM_TN_007', 650.0, 'Kangayam', '2025-03-15 06:00:00', 'Coimbatore, Tamil Nadu');
  END IF;
  
  -- Batch from Uttar Pradesh
  IF NOT EXISTS (SELECT 1 FROM collection_centre WHERE batch_no = 'UP008') THEN
    INSERT INTO collection_centre (batch_no, farmer_id, quantity_of_milk, breed_of_cow, timestamp, location) 
    VALUES ('UP008', 'FARM_UP_008', 890.0, 'Gangatiri', '2025-03-15 05:15:00', 'Mathura, Uttar Pradesh');
  END IF;
  
  -- Batch from West Bengal
  IF NOT EXISTS (SELECT 1 FROM collection_centre WHERE batch_no = 'WB009') THEN
    INSERT INTO collection_centre (batch_no, farmer_id, quantity_of_milk, breed_of_cow, timestamp, location) 
    VALUES ('WB009', 'FARM_WB_009', 620.5, 'Jersey Cross', '2025-03-15 06:30:00', 'Siliguri, West Bengal');
  END IF;
  
  -- Batch from Kerala
  IF NOT EXISTS (SELECT 1 FROM collection_centre WHERE batch_no = 'KER010') THEN
    INSERT INTO collection_centre (batch_no, farmer_id, quantity_of_milk, breed_of_cow, timestamp, location) 
    VALUES ('KER010', 'FARM_KER_010', 480.0, 'Vechur', '2025-03-15 05:45:00', 'Kottayam, Kerala');
  END IF;
END $$;

-- Distributor Data with Indian distribution centers
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM distributor WHERE batch_no = 'GUJ001') THEN
    INSERT INTO distributor (batch_no, distributor_id, receiving_timestamp, quantity, storage_conditions, location) 
    VALUES ('GUJ001', 'AMUL_DIST_001', '2025-03-15 08:30:00', 745.0, 'Temperature: 4°C, Humidity: 75%, Stainless Steel Tanks', 'Amul Dairy, Anand');
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM distributor WHERE batch_no = 'PUN002') THEN
    INSERT INTO distributor (batch_no, distributor_id, receiving_timestamp, quantity, storage_conditions, location) 
    VALUES ('PUN002', 'VERKA_DIST_002', '2025-03-15 09:00:00', 915.0, 'Temperature: 3°C, Humidity: 70%, Automated Storage', 'Verka Milk Plant, Ludhiana');
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM distributor WHERE batch_no = 'HAR003') THEN
    INSERT INTO distributor (batch_no, distributor_id, receiving_timestamp, quantity, storage_conditions, location) 
    VALUES ('HAR003', 'VITA_DIST_003', '2025-03-15 08:45:00', 675.0, 'Temperature: 4°C, Humidity: 72%, Bulk Milk Cooler', 'Vita Dairy, Karnal');
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM distributor WHERE batch_no = 'RAJ004') THEN
    INSERT INTO distributor (batch_no, distributor_id, receiving_timestamp, quantity, storage_conditions, location) 
    VALUES ('RAJ004', 'SARAS_DIST_004', '2025-03-15 09:15:00', 575.0, 'Temperature: 4°C, Humidity: 68%, Insulated Storage', 'Saras Dairy, Jaipur');
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM distributor WHERE batch_no = 'MAH005') THEN
    INSERT INTO distributor (batch_no, distributor_id, receiving_timestamp, quantity, storage_conditions, location) 
    VALUES ('MAH005', 'MAHANAND_DIST_005', '2025-03-15 08:00:00', 820.0, 'Temperature: 4°C, Humidity: 78%, Modern Chilling Unit', 'Mahanand Dairy, Pune');
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM distributor WHERE batch_no = 'KAR006') THEN
    INSERT INTO distributor (batch_no, distributor_id, receiving_timestamp, quantity, storage_conditions, location) 
    VALUES ('KAR006', 'NANDINI_DIST_006', '2025-03-15 08:30:00', 705.0, 'Temperature: 4°C, Humidity: 76%, Refrigerated Silos', 'Nandini Dairy, Mysore');
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM distributor WHERE batch_no = 'TN007') THEN
    INSERT INTO distributor (batch_no, distributor_id, receiving_timestamp, quantity, storage_conditions, location) 
    VALUES ('TN007', 'AAVIN_DIST_007', '2025-03-15 09:00:00', 645.0, 'Temperature: 4°C, Humidity: 74%, Cold Storage Facility', 'Aavin Dairy, Coimbatore');
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM distributor WHERE batch_no = 'UP008') THEN
    INSERT INTO distributor (batch_no, distributor_id, receiving_timestamp, quantity, storage_conditions, location) 
    VALUES ('UP008', 'PARAG_DIST_008', '2025-03-15 08:15:00', 885.0, 'Temperature: 4°C, Humidity: 71%, Bulk Cooling System', 'Parag Milk Foods, Manpura');
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM distributor WHERE batch_no = 'WB009') THEN
    INSERT INTO distributor (batch_no, distributor_id, receiving_timestamp, quantity, storage_conditions, location) 
    VALUES ('WB009', 'SUDHA_DIST_009', '2025-03-15 09:30:00', 615.0, 'Temperature: 4°C, Humidity: 80%, Chilled Storage Tanks', 'Sudha Dairy, Kolkata');
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM distributor WHERE batch_no = 'KER010') THEN
    INSERT INTO distributor (batch_no, distributor_id, receiving_timestamp, quantity, storage_conditions, location) 
    VALUES ('KER010', 'MILMA_DIST_010', '2025-03-15 08:45:00', 475.0, 'Temperature: 4°C, Humidity: 82%, Tropical Climate Storage', 'Milma Dairy, Kottayam');
  END IF;
END $$;

-- Logistics Data with Indian transportation routes
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM logistics WHERE batch_no = 'GUJ001') THEN
    INSERT INTO logistics (batch_no, distance_travelled, temperature, receiving_location, timestamp, environment_conditions) 
    VALUES ('GUJ001', 285.5, 6.0, 'Mumbai Central Market', '2025-03-15 12:30:00', 'Refrigerated Truck, GPS Monitored, Temperature Controlled');
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM logistics WHERE batch_no = 'PUN002') THEN
    INSERT INTO logistics (batch_no, distance_travelled, temperature, receiving_location, timestamp, environment_conditions) 
    VALUES ('PUN002', 195.0, 5.5, 'Delhi Azadpur Mandi', '2025-03-15 13:00:00', 'Insulated Vehicle, Cold Chain Maintained');
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM logistics WHERE batch_no = 'HAR003') THEN
    INSERT INTO logistics (batch_no, distance_travelled, temperature, receiving_location, timestamp, environment_conditions) 
    VALUES ('HAR003', 145.0, 6.0, 'Gurgaon Distribution Hub', '2025-03-15 12:45:00', 'Temperature Monitored Transport, Real-time Tracking');
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM logistics WHERE batch_no = 'RAJ004') THEN
    INSERT INTO logistics (batch_no, distance_travelled, temperature, receiving_location, timestamp, environment_conditions) 
    VALUES ('RAJ004', 320.0, 7.0, 'Ahmedabad Wholesale Market', '2025-03-15 14:15:00', 'Desert Route Transport, Extra Insulation');
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM logistics WHERE batch_no = 'MAH005') THEN
    INSERT INTO logistics (batch_no, distance_travelled, temperature, receiving_location, timestamp, environment_conditions) 
    VALUES ('MAH005', 165.0, 5.8, 'Mumbai Dadar Market', '2025-03-15 12:00:00', 'Urban Distribution, Traffic-optimized Route');
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM logistics WHERE batch_no = 'KAR006') THEN
    INSERT INTO logistics (batch_no, distance_travelled, temperature, receiving_location, timestamp, environment_conditions) 
    VALUES ('KAR006', 210.0, 6.2, 'Bangalore Electronic City', '2025-03-15 12:30:00', 'Hill Route Transport, Climate Controlled');
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM logistics WHERE batch_no = 'TN007') THEN
    INSERT INTO logistics (batch_no, distance_travelled, temperature, receiving_location, timestamp, environment_conditions) 
    VALUES ('TN007', 180.0, 6.5, 'Chennai Koyambedu Market', '2025-03-15 13:00:00', 'Coastal Route, Humidity Controlled Transport');
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM logistics WHERE batch_no = 'UP008') THEN
    INSERT INTO logistics (batch_no, distance_travelled, temperature, receiving_location, timestamp, environment_conditions) 
    VALUES ('UP008', 175.0, 5.5, 'Noida Sector 18 Market', '2025-03-15 12:15:00', 'Highway Transport, Continuous Monitoring');
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM logistics WHERE batch_no = 'WB009') THEN
    INSERT INTO logistics (batch_no, distance_travelled, temperature, receiving_location, timestamp, environment_conditions) 
    VALUES ('WB009', 560.0, 6.8, 'Kolkata New Market Area', '2025-03-15 15:30:00', 'Long Distance Transport, Multi-stop Route');
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM logistics WHERE batch_no = 'KER010') THEN
    INSERT INTO logistics (batch_no, distance_travelled, temperature, receiving_location, timestamp, environment_conditions) 
    VALUES ('KER010', 125.0, 7.2, 'Kochi Marine Drive Market', '2025-03-15 12:45:00', 'Monsoon-ready Transport, Waterproof Containers');
  END IF;
END $$;

-- Shop Data with Indian retail locations
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM shop WHERE batch_no = 'GUJ001') THEN
    INSERT INTO shop (batch_no, timestamp, storage_conditions, number_of_packets_received) 
    VALUES ('GUJ001', '2025-03-15 14:30:00', 'Commercial Deep Freezer at 4°C, Backup Power Supply', 1490);
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM shop WHERE batch_no = 'PUN002') THEN
    INSERT INTO shop (batch_no, timestamp, storage_conditions, number_of_packets_received) 
    VALUES ('PUN002', '2025-03-15 15:00:00', 'Multi-door Display Cooler at 3.5°C, LED Lighting', 1830);
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM shop WHERE batch_no = 'HAR003') THEN
    INSERT INTO shop (batch_no, timestamp, storage_conditions, number_of_packets_received) 
    VALUES ('HAR003', '2025-03-15 14:45:00', 'Walk-in Cold Room at 4°C, Digital Temperature Control', 1350);
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM shop WHERE batch_no = 'RAJ004') THEN
    INSERT INTO shop (batch_no, timestamp, storage_conditions, number_of_packets_received) 
    VALUES ('RAJ004', '2025-03-15 16:15:00', 'Desert Climate Cooler at 4°C, Solar Backup', 1150);
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM shop WHERE batch_no = 'MAH005') THEN
    INSERT INTO shop (batch_no, timestamp, storage_conditions, number_of_packets_received) 
    VALUES ('MAH005', '2025-03-15 14:00:00', 'Premium Display Refrigerator at 4°C, Glass Doors', 1640);
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM shop WHERE batch_no = 'KAR006') THEN
    INSERT INTO shop (batch_no, timestamp, storage_conditions, number_of_packets_received) 
    VALUES ('KAR006', '2025-03-15 14:30:00', 'Vertical Display Cooler at 4°C, Energy Efficient', 1410);
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM shop WHERE batch_no = 'TN007') THEN
    INSERT INTO shop (batch_no, timestamp, storage_conditions, number_of_packets_received) 
    VALUES ('TN007', '2025-03-15 15:00:00', 'Coastal Climate Refrigerator at 4°C, Corrosion Resistant', 1290);
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM shop WHERE batch_no = 'UP008') THEN
    INSERT INTO shop (batch_no, timestamp, storage_conditions, number_of_packets_received) 
    VALUES ('UP008', '2025-03-15 14:15:00', 'Large Capacity Cooler at 4°C, Automatic Defrost', 1770);
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM shop WHERE batch_no = 'WB009') THEN
    INSERT INTO shop (batch_no, timestamp, storage_conditions, number_of_packets_received) 
    VALUES ('WB009', '2025-03-15 17:30:00', 'Humidity Control Refrigerator at 4°C, Monsoon Ready', 1230);
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM shop WHERE batch_no = 'KER010') THEN
    INSERT INTO shop (batch_no, timestamp, storage_conditions, number_of_packets_received) 
    VALUES ('KER010', '2025-03-15 14:45:00', 'Tropical Climate Cooler at 4°C, High Humidity Tolerance', 950);
  END IF;
END $$;