import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

/**
 * React Query hooks for backend operations
 * Manages contact form submission with proper error handling
 */

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

/**
 * Hook for submitting contact form data to the backend
 * Invalidates relevant queries on success
 */
export function useSubmitContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      if (!actor) {
        throw new Error('Actor not initialized');
      }
      await actor.submitForm(data.name, data.email, data.message);
    },
    onSuccess: () => {
      // Invalidate any queries that might need refreshing after form submission
      queryClient.invalidateQueries({ queryKey: ['submissions'] });
    },
  });
}
