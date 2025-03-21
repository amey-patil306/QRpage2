/*
  # Create dairy batch tracking tables

  1. New Tables
    - `collection_centre`
      - `id` (uuid, primary key)
      - `batch_no` (text)
      - `farmer_id` (text)
      - `quantity_of_milk` (numeric)
      - `breed_of_cow` (text)
      - `timestamp` (timestamptz)
      - `location` (text)

    - `distributor`
      - `id` (uuid, primary key)
      - `batch_no` (text)
      - `distributor_id` (text)
      - `receiving_timestamp` (timestamptz)
      - `quantity` (numeric)
      - `storage_conditions` (text)
      - `location` (text)

    - `logistics`
      - `id` (uuid, primary key)
      - `batch_no` (text)
      - `distance_travelled` (numeric)
      - `temperature` (numeric)
      - `receiving_location` (text)
      - `timestamp` (timestamptz)
      - `environment_conditions` (text)

    - `shop`
      - `id` (uuid, primary key)
      - `batch_no` (text)
      - `timestamp` (timestamptz)
      - `storage_conditions` (text)
      - `number_of_packets_received` (integer)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access
*/

-- Collection Centre Table
CREATE TABLE IF NOT EXISTS collection_centre (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  batch_no text NOT NULL,
  farmer_id text NOT NULL,
  quantity_of_milk numeric NOT NULL,
  breed_of_cow text NOT NULL,
  timestamp timestamptz DEFAULT now(),
  location text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE collection_centre ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access for collection_centre"
  ON collection_centre
  FOR SELECT
  TO public
  USING (true);

-- Distributor Table
CREATE TABLE IF NOT EXISTS distributor (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  batch_no text NOT NULL,
  distributor_id text NOT NULL,
  receiving_timestamp timestamptz DEFAULT now(),
  quantity numeric NOT NULL,
  storage_conditions text NOT NULL,
  location text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE distributor ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access for distributor"
  ON distributor
  FOR SELECT
  TO public
  USING (true);

-- Logistics Table
CREATE TABLE IF NOT EXISTS logistics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  batch_no text NOT NULL,
  distance_travelled numeric NOT NULL,
  temperature numeric NOT NULL,
  receiving_location text NOT NULL,
  timestamp timestamptz DEFAULT now(),
  environment_conditions text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE logistics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access for logistics"
  ON logistics
  FOR SELECT
  TO public
  USING (true);

-- Shop Table
CREATE TABLE IF NOT EXISTS shop (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  batch_no text NOT NULL,
  timestamp timestamptz DEFAULT now(),
  storage_conditions text NOT NULL,
  number_of_packets_received integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE shop ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access for shop"
  ON shop
  FOR SELECT
  TO public
  USING (true);

-- Insert sample data
INSERT INTO collection_centre (batch_no, farmer_id, quantity_of_milk, breed_of_cow, timestamp, location)
VALUES 
  ('BATCH001', 'FARM123', 500.5, 'Holstein', '2025-02-27 08:00:00', 'North Valley Farm'),
  ('BATCH002', 'FARM456', 450.0, 'Jersey', '2025-02-27 09:15:00', 'Hillside Dairy');

INSERT INTO distributor (batch_no, distributor_id, receiving_timestamp, quantity, storage_conditions, location)
VALUES 
  ('BATCH001', 'DIST123', '2025-02-27 10:00:00', 495.0, 'Temperature: 4°C, Humidity: 85%', 'Central Distribution Hub'),
  ('BATCH002', 'DIST456', '2025-02-27 11:15:00', 445.0, 'Temperature: 3°C, Humidity: 82%', 'East Distribution Center');

INSERT INTO logistics (batch_no, distance_travelled, temperature, receiving_location, timestamp, environment_conditions)
VALUES 
  ('BATCH001', 150.5, 4.0, 'City Central Market', '2025-02-27 12:00:00', 'Refrigerated Transport, Humidity Controlled'),
  ('BATCH002', 120.0, 3.5, 'Suburban Mall Complex', '2025-02-27 13:15:00', 'Temperature Monitored Transport');

INSERT INTO shop (batch_no, timestamp, storage_conditions, number_of_packets_received)
VALUES 
  ('BATCH001', '2025-02-27 14:00:00', 'Commercial Refrigerator at 4°C', 990),
  ('BATCH002', '2025-02-27 15:15:00', 'Display Cooler at 3.5°C', 890);