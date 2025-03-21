import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface BatchSearchProps {
  onSearch: (batchNumber: string) => void;
  isLoading: boolean;
}

const BatchSearch: React.FC<BatchSearchProps> = ({ onSearch, isLoading }) => {
  const [batchNumber, setBatchNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (batchNumber.trim()) {
      onSearch(batchNumber.trim());
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={batchNumber}
          onChange={(e) => setBatchNumber(e.target.value)}
          placeholder="Enter batch number..."
          className="w-full px-4 py-3 pl-12 rounded-full border-2 border-green-200 focus:border-green-500 focus:outline-none transition-all duration-300 shadow-sm"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-green-500" />
        </div>
        <button
          type="submit"
          disabled={isLoading || !batchNumber.trim()}
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1.5 rounded-full bg-green-500 text-white font-medium transition-all duration-300 ${
            isLoading || !batchNumber.trim()
              ? 'opacity-70 cursor-not-allowed'
              : 'hover:bg-green-600'
          }`}
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </form>
    </div>
  );
};

export default BatchSearch;