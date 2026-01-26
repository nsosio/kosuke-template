/**
 * Task-related utility functions and constants
 */
import type { TaskPriority } from '@/lib/types';

/**
 * Priority color configurations for consistent styling across the app
 * Uses Tailwind CSS classes with semantic color tokens
 */
export const priorityColors: Record<TaskPriority, string> = {
  low: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20',
  medium: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20',
  high: 'bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20',
  urgent: 'bg-destructive/10 text-destructive border-destructive/20',
};
