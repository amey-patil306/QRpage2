/*
  # Add sample data for dairy batch tracking

  1. Sample Data
    - Collection Centre: 5 entries with different milk types and quantities
    - Distributor: 5 entries with storage details
    - Logistics: 5 entries with transportation details
    - Shop: 5 entries with final storage information

  2. Data Relationships
    - All entries are linked by batch_no
    - Consistent timestamps across the supply chain
    - Safe inserts with existence checks
*/

-- Collection Centre Data
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM collection_centre WHERE batch_no = 'BATCH001') THEN
    INSERT INTO collection_centre (batch_no, farmer_id, quantity_of_milk, breed_of_cow, timestamp, location) 
    VALUES ('BATCH001', 'FARM123', 500.5, 'Holstein', '2025-02-27 08:00:00', 'North Valley Farm');
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM collection_centre WHERE batch_no = 'BATCH002') THEN
    INSERT INTO collection_centre (batch_no, farmer_id, quantity_of_milk, breed_of_cow, timestamp, location) 
    VALUES ('BATCH002', 'FARM456', 450.0, 'Jersey', '2025-02-27 09:15:00', 'Hillside Dairy');
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM collection_centre WHERE batch_no = 'BATCH003') THEN
    INSERT INTO collection_centre (batch_no, farmer_id, quantity_of_milk, breed_of_cow, timestamp, location) 
    VALUES ('BATCH003', 'FARM789', 600.0, 'Buffalo', '2025-02-27 07:30:00', 'Riverside Ranch');
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM collection_centre WHERE batch_no = 'BATCH004') THEN
    INSERT INTO collection_centre (batch_no, farmer_id, quantity_of_milk, breed_of_cow, timestamp, location) 
    VALUES ('BATCH004', 'FARM234', 550.5, 'Brown Swiss', '2025-02-27 08:45:00', 'Mountain View Farm');
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM collection_centre WHERE batch_no = 'BATCH005') THEN
    INSERT INTO collection_centre (batch_no, farmer_id, quantity_of_milk, breed_of_cow, timestamp, location) 
    VALUES ('BATCH005', 'FARM567', 525.0, 'Holstein', '2025-02-27 09:30:00', 'Green Meadows');
  END IF;
END $$;

-- Distributor Data
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM distributor WHERE batch_no = 'BATCH001') THEN
    INSERT INTO distributor (batch_no, distributor_id, receiving_timestamp, quantity, storage_conditions, location) 
    VALUES ('BATCH001', 'DIST123', '2025-02-27 10:00:00', 495.0, 'Temperature: 4°C, Humidity: 85%', 'Central Distribution Hub');
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM distributor WHERE batch_no = 'BATCH002') THEN
    INSERT INTO distributor (batch_no, distributor_id, receiving_timestamp, quantity, storage_conditions, location) 
    VALUES ('BATCH002', 'DIST456', '2025-02-27 11:15:00', 445.0, 'Temperature: 3°C, Humidity: 82%', 'East Distribution Center');
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM distributor WHERE batch_no = 'BATCH003') THEN
    INSERT INTO distributor (batch_no, distributor_id, receiving_timestamp, quantity, storage_conditions, location) 
    VALUES ('BATCH003', 'DIST789', '2025-02-27 09:30:00', 595.0, 'Temperature: 4°C, Humidity: 84%', 'West Distribution Hub');
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM distributor WHERE batch_no = 'BATCH004') THEN
    INSERT INTO distributor (batch_no, distributor_id, receiving_timestamp, quantity, storage_conditions, location) 
    VALUES ('BATCH004', 'DIST234', '2025-02-27 10:45:00', 545.0, 'Temperature: 3.5°C, Humidity: 83%', 'South Distribution Center');
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM distributor WHERE batch_no = 'BATCH005') THEN
    INSERT INTO distributor (batch_no, distributor_id, receiving_timestamp, quantity, storage_conditions, location) 
    VALUES ('BATCH005', 'DIST567', '2025-02-27 11:30:00', 520.0, 'Temperature: 4°C, Humidity: 85%', 'North Distribution Hub');
  END IF;
END $$;

-- Logistics Data
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM logistics WHERE batch_no = 'BATCH001') THEN
    INSERT INTO logistics (batch_no, distance_travelled, temperature, receiving_location, timestamp, environment_conditions) 
    VALUES ('BATCH001', 150.5, 4.0, 'City Central Market', '2025-02-27 12:00:00', 'Refrigerated Transport, Humidity Controlled');
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM logistics WHERE batch_no = 'BATCH002') THEN
    INSERT INTO logistics (batch_no, distance_travelled, temperature, receiving_location, timestamp, environment_conditions) 
    VALUES ('BATCH002', 120.0, 3.5, 'Suburban Mall Complex', '2025-02-27 13:15:00', 'Temperature Monitored Transport');
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM logistics WHERE batch_no = 'BATCH003') THEN
    INSERT INTO logistics (batch_no, distance_travelled, temperature, receiving_location, timestamp, environment_conditions) 
    VALUES ('BATCH003', 180.0, 4.0, 'Downtown Shopping District', '2025-02-27 11:30:00', 'Cold Chain Transport');
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM logistics WHERE batch_no = 'BATCH004') THEN
    INSERT INTO logistics (batch_no, distance_travelled, temperature, receiving_location, timestamp, environment_conditions) 
    VALUES ('BATCH004', 160.5, 3.8, 'Airport Terminal Market', '2025-02-27 12:45:00', 'Climate Controlled Vehicle');
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM logistics WHERE batch_no = 'BATCH005') THEN
    INSERT INTO logistics (batch_no, distance_travelled, temperature, receiving_location, timestamp, environment_conditions) 
    VALUES ('BATCH005', 140.0, 4.0, 'Harbor Front Market', '2025-02-27 13:30:00', 'Insulated Transport Container');
  END IF;
END $$;

-- Shop Data
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM shop WHERE batch_no = 'BATCH001') THEN
    INSERT INTO shop (batch_no, timestamp, storage_conditions, number_of_packets_received) 
    VALUES ('BATCH001', '2025-02-27 14:00:00', 'Commercial Refrigerator at 4°C', 990);
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM shop WHERE batch_no = 'BATCH002') THEN
    INSERT INTO shop (batch_no, timestamp, storage_conditions, number_of_packets_received) 
    VALUES ('BATCH002', '2025-02-27 15:15:00', 'Display Cooler at 3.5°C', 890);
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM shop WHERE batch_no = 'BATCH003') THEN
    INSERT INTO shop (batch_no, timestamp, storage_conditions, number_of_packets_received) 
    VALUES ('BATCH003', '2025-02-27 13:30:00', 'Walk-in Cooler at 4°C', 1190);
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM shop WHERE batch_no = 'BATCH004') THEN
    INSERT INTO shop (batch_no, timestamp, storage_conditions, number_of_packets_received) 
    VALUES ('BATCH004', '2025-02-27 14:45:00', 'Refrigerated Display at 3.8°C', 1090);
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM shop WHERE batch_no = 'BATCH005') THEN
    INSERT INTO shop (batch_no, timestamp, storage_conditions, number_of_packets_received) 
    VALUES ('BATCH005', '2025-02-27 15:30:00', 'Cold Storage Unit at 4°C', 1040);
  END IF;
END $$;