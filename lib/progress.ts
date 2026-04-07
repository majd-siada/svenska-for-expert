const STORAGE_KEY = "svenska-expert-progress";

export function getProgress(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function setLessonComplete(lessonId: string, complete: boolean): void {
  const progress = getProgress();
  progress[lessonId] = complete;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function isLessonComplete(lessonId: string): boolean {
  return getProgress()[lessonId] === true;
}

export function countCompleted(lessonIds: string[]): number {
  const progress = getProgress();
  return lessonIds.filter((id) => progress[id] === true).length;
}

export function getOverallProgress(allLessonIds: string[]): number {
  if (allLessonIds.length === 0) return 0;
  return Math.round((countCompleted(allLessonIds) / allLessonIds.length) * 100);
}
