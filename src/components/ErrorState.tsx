import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

interface ErrorStateProps {
  message: string;
}

const ErrorState: React.FC<ErrorStateProps> = ({ message }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center py-12 px-4"
    >
      <div className="bg-red-50 rounded-xl p-8 inline-flex items-center justify-center mb-4">
        <AlertCircle className="h-12 w-12 text-red-500" />
      </div>
      <h3 className="text-xl font-medium text-gray-900 mb-2">Batch not found</h3>
      <p className="text-red-500 max-w-md mx-auto">
        {message}
      </p>
      <p className="text-gray-500 mt-2 max-w-md mx-auto">
        Please check the batch number and try again.
      </p>
    </motion.div>
  );
};

export default ErrorState;