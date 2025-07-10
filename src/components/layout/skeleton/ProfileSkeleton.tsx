// components/ui/ProfileSkeleton.tsx
export default function ProfileSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-32 bg-gray-300 dark:bg-neutral-700 rounded-xl" />
      <div className="h-6 bg-gray-300 dark:bg-neutral-700 rounded w-2/3" />
      <div className="h-6 bg-gray-300 dark:bg-neutral-700 rounded w-1/2" />
      <div className="h-6 bg-gray-300 dark:bg-neutral-700 rounded w-3/4" />
    </div>
  );
}
