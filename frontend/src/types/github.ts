/**
 * TypeScript types for GitHub API responses
 * Minimal interface covering fields used by the portfolio UI
 */

export interface GithubRepository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
}

export interface GithubApiError {
  message: string;
  documentation_url?: string;
}
