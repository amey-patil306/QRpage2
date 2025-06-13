import { fetchBatchData as fetchFromData, getAllBatches as getAllFromData } from '../data/dairyData';

// Data service that mimics the original Supabase functions but uses local data
export async function fetchBatchData(batchNumber: string) {
  // Simulate async operation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fetchFromData(batchNumber));
    }, 500); // Small delay to simulate network request
  });
}

export async function getAllBatches() {
  // Simulate async operation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getAllFromData());
    }, 300);
  });
}