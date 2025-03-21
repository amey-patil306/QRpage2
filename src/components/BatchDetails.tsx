import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Milk, Calendar, Tag, Clock, User, Clipboard, BarChart, Truck, Store, Factory, MapPin, Thermometer, Package, Cog as Cow } from 'lucide-react';

interface BatchDetailsProps {
  batchData: any;
}

const BatchDetails: React.FC<BatchDetailsProps> = ({ batchData }) => {
  if (!batchData) return null;

  const formatDate = (timestamp: string) => {
    if (!timestamp) return 'N/A';
    return new Date(timestamp).toLocaleDateString();
  };

  const formatTime = (timestamp: string) => {
    if (!timestamp) return 'N/A';
    return new Date(timestamp).toLocaleTimeString();
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-green-100"
    >
      <div className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-4">
        <h2 className="text-xl font-bold text-white flex items-center">
          <Tag className="mr-2 h-6 w-6" />
          Batch #{batchData.batch_no} Details
        </h2>
      </div>

      <div className="p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {/* Collection Centre Section */}
        {batchData.collection && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-green-50 rounded-lg p-4 border border-green-100"
          >
            <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
              <Cow className="h-6 w-6 text-green-600 mr-2" />
              Collection Centre
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="text-green-600 mt-0.5 mr-2 h-5 w-5" />
                <div>
                  <p className="text-sm text-green-700 font-medium">Location</p>
                  <p className="text-gray-800">{batchData.collection.location || 'N/A'}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Droplets className="text-green-600 mt-0.5 mr-2 h-5 w-5" />
                <div>
                  <p className="text-sm text-green-700 font-medium">Quantity of Milk</p>
                  <p className="text-gray-800">{batchData.collection.quantity_of_milk || 'N/A'} liters</p>
                </div>
              </div>
              <div className="flex items-start">
                <Cow className="text-green-600 mt-0.5 mr-2 h-5 w-5" />
                <div>
                  <p className="text-sm text-green-700 font-medium">Breed of Cow</p>
                  <p className="text-gray-800">{batchData.collection.breed_of_cow || 'N/A'}</p>
                </div>
              </div>
              <div className="flex items-start">
                <User className="text-green-600 mt-0.5 mr-2 h-5 w-5" />
                <div>
                  <p className="text-sm text-green-700 font-medium">Farmer ID</p>
                  <p className="text-gray-800">{batchData.collection.farmer_id || 'N/A'}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Calendar className="text-green-600 mt-0.5 mr-2 h-5 w-5" />
                <div>
                  <p className="text-sm text-green-700 font-medium">Collection Timestamp</p>
                  <p className="text-gray-800">{formatDate(batchData.collection.timestamp)} {formatTime(batchData.collection.timestamp)}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Distributor Section */}
        {batchData.distributor && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-green-50 rounded-lg p-4 border border-green-100"
          >
            <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
              <Factory className="h-6 w-6 text-green-600 mr-2" />
              Distributor
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <User className="text-green-600 mt-0.5 mr-2 h-5 w-5" />
                <div>
                  <p className="text-sm text-green-700 font-medium">Distributor ID</p>
                  <p className="text-gray-800">{batchData.distributor.distributor_id || 'N/A'}</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="text-green-600 mt-0.5 mr-2 h-5 w-5" />
                <div>
                  <p className="text-sm text-green-700 font-medium">Location</p>
                  <p className="text-gray-800">{batchData.distributor.location || 'N/A'}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Droplets className="text-green-600 mt-0.5 mr-2 h-5 w-5" />
                <div>
                  <p className="text-sm text-green-700 font-medium">Quantity</p>
                  <p className="text-gray-800">{batchData.distributor.quantity || 'N/A'} liters</p>
                </div>
              </div>
              <div className="flex items-start">
                <Package className="text-green-600 mt-0.5 mr-2 h-5 w-5" />
                <div>
                  <p className="text-sm text-green-700 font-medium">Storage Conditions</p>
                  <p className="text-gray-800">{batchData.distributor.storage_conditions || 'N/A'}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Calendar className="text-green-600 mt-0.5 mr-2 h-5 w-5" />
                <div>
                  <p className="text-sm text-green-700 font-medium">Receiving Timestamp</p>
                  <p className="text-gray-800">{formatDate(batchData.distributor.receiving_timestamp)} {formatTime(batchData.distributor.receiving_timestamp)}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Logistics Section */}
        {batchData.logistics && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-green-50 rounded-lg p-4 border border-green-100"
          >
            <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
              <Truck className="h-6 w-6 text-green-600 mr-2" />
              Logistics
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="text-green-600 mt-0.5 mr-2 h-5 w-5" />
                <div>
                  <p className="text-sm text-green-700 font-medium">Receiving Location</p>
                  <p className="text-gray-800">{batchData.logistics.receiving_location || 'N/A'}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Truck className="text-green-600 mt-0.5 mr-2 h-5 w-5" />
                <div>
                  <p className="text-sm text-green-700 font-medium">Distance Travelled</p>
                  <p className="text-gray-800">{batchData.logistics.distance_travelled || 'N/A'} km</p>
                </div>
              </div>
              <div className="flex items-start">
                <Thermometer className="text-green-600 mt-0.5 mr-2 h-5 w-5" />
                <div>
                  <p className="text-sm text-green-700 font-medium">Temperature</p>
                  <p className="text-gray-800">{batchData.logistics.temperature || 'N/A'}°C</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clipboard className="text-green-600 mt-0.5 mr-2 h-5 w-5" />
                <div>
                  <p className="text-sm text-green-700 font-medium">Environment Conditions</p>
                  <p className="text-gray-800">{batchData.logistics.environment_conditions || 'N/A'}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Calendar className="text-green-600 mt-0.5 mr-2 h-5 w-5" />
                <div>
                  <p className="text-sm text-green-700 font-medium">Timestamp</p>
                  <p className="text-gray-800">{formatDate(batchData.logistics.timestamp)} {formatTime(batchData.logistics.timestamp)}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Shop Section */}
        {batchData.shop && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-green-50 rounded-lg p-4 border border-green-100"
          >
            <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
              <Store className="h-6 w-6 text-green-600 mr-2" />
              Shop
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Package className="text-green-600 mt-0.5 mr-2 h-5 w-5" />
                <div>
                  <p className="text-sm text-green-700 font-medium">Storage Conditions</p>
                  <p className="text-gray-800">{batchData.shop.storage_conditions || 'N/A'}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Package className="text-green-600 mt-0.5 mr-2 h-5 w-5" />
                <div>
                  <p className="text-sm text-green-700 font-medium">Number of Packets Received</p>
                  <p className="text-gray-800">{batchData.shop.number_of_packets_received || 'N/A'}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Calendar className="text-green-600 mt-0.5 mr-2 h-5 w-5" />
                <div>
                  <p className="text-sm text-green-700 font-medium">Timestamp</p>
                  <p className="text-gray-800">{formatDate(batchData.shop.timestamp)} {formatTime(batchData.shop.timestamp)}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default BatchDetails;