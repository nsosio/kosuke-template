/**
 * Task utilities and constants
 */
import type { TaskPriority } from '@/lib/types';

/**
 * Priority color mappings for Badge styling
 * Supports both light and dark themes
 */
export const priorityColors: Record<TaskPriority, string> = {
  low: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20',
  medium: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20',
  high: 'bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20',
  urgent: 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20',
};

/**
 * Kanban column definitions
 * Urgent column appears first (leftmost)
 */
export const kanbanColumns: { id: TaskPriority; title: string }[] = [
  { id: 'urgent', title: 'Urgent Priority' },
  { id: 'low', title: 'Low Priority' },
  { id: 'medium', title: 'Medium Priority' },
  { id: 'high', title: 'High Priority' },
];
