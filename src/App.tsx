import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cog as Cow, Milk } from 'lucide-react';
import { fetchBatchData, getAllBatches } from './lib/dataService';
import BatchSearch from './components/BatchSearch';
import BatchDetails from './components/BatchDetails';
import EmptyState from './components/EmptyState';
import ErrorState from './components/ErrorState';

function App() {
  const [batchData, setBatchData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [batchNumbers, setBatchNumbers] = useState<string[]>([]);

  // Fetch available batch numbers on component mount
  useEffect(() => {
    const fetchBatchNumbers = async () => {
      try {
        const batches = await getAllBatches();
        if (batches && batches.length > 0) {
          setBatchNumbers(batches.map((batch: any) => batch.batch_number));
        }
      } catch (err) {
        console.error('Error fetching batch numbers:', err);
      }
    };

    fetchBatchNumbers();
  }, []);

  const handleSearch = async (batchNumber: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const data = await fetchBatchData(batchNumber);
      if (data) {
        setBatchData(data);
      } else {
        setError(`No data found for batch number ${batchNumber}`);
        setBatchData(null);
      }
    } catch (err) {
      setError('An error occurred while fetching the batch data');
      setBatchData(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Cow className="h-10 w-10 text-green-600" />
              <h1 className="ml-3 text-2xl font-bold text-green-800">Dairy Batch Tracker</h1>
            </div>
            <div className="flex items-center space-x-2">
              <Milk className="h-6 w-6 text-green-500" />
              <span className="text-green-700 font-medium">Quality Dairy Products</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Background Images */}
        <div className="fixed -z-10 opacity-10 top-1/4 left-10">
          <img 
            src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
            alt="Cow silhouette" 
            className="w-64 h-64 object-contain"
          />
        </div>
        <div className="fixed -z-10 opacity-10 bottom-1/4 right-10">
          <img 
            src="https://images.unsplash.com/photo-1546445317-29f4545e9d53?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
            alt="Buffalo silhouette" 
            className="w-64 h-64 object-contain"
          />
        </div>

        {/* Search Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-md p-6 mb-8"
        >
          <h2 className="text-xl font-semibold text-green-800 mb-4 text-center">
            Search for Batch Information
          </h2>
          <BatchSearch onSearch={handleSearch} isLoading={isLoading} />
          
          {batchNumbers.length > 0 && (
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500">Available batch numbers:</p>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {batchNumbers.map(number => (
                  <button
                    key={number}
                    onClick={() => handleSearch(number)}
                    className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm hover:bg-green-100 transition-colors"
                  >
                    {number}
                  </button>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Results Section */}
        <div className="mt-8">
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
            </div>
          ) : error ? (
            <ErrorState message={error} />
          ) : batchData ? (
            <BatchDetails batchData={batchData} />
          ) : (
            <EmptyState />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-green-100 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-green-700">
            © {new Date().getFullYear()} Dairy Batch Tracker - Quality Dairy Products
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;