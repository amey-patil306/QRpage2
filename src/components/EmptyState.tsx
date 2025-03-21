import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const EmptyState: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center py-12 px-4"
    >
      <div className="bg-green-50 rounded-xl p-8 inline-flex items-center justify-center mb-4">
        <Search className="h-12 w-12 text-green-500" />
      </div>
      <h3 className="text-xl font-medium text-gray-900 mb-2">No batch selected</h3>
      <p className="text-gray-500 max-w-md mx-auto">
        Enter a batch number in the search box above to view detailed information about the dairy batch.
      </p>
    </motion.div>
  );
};

export default EmptyState;