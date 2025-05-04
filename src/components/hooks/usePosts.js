import { useQuery } from '@tanstack/react-query';
import { apiRequest } from '../api';

export function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const result = await apiRequest({
        route: '/posts',
        method: 'GET'
      });
      
      if (!result.success) {
        throw new Error(result.message);
      }
      
      return result.data || []; // Always return array
    },
    retry: 2, // Retry twice before failing
    staleTime: 1000 * 60 * 5 // 5 minutes cache
  });
}