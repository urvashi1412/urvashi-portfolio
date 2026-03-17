import { useQuery } from '@tanstack/react-query';
import type { GithubRepository } from '@/types/github';

/**
 * React Query hook to fetch public repositories for a GitHub user
 * Uses GitHub REST API v3 with caching and retry behavior
 */
export function useGithubRepos(username: string) {
  return useQuery<GithubRepository[]>({
    queryKey: ['github-repos', username],
    queryFn: async () => {
      const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
      
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      return data as GithubRepository[];
    },
    staleTime: 1000 * 60 * 10, // 10 minutes
    retry: 2,
  });
}
