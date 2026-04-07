import type { Level } from "@/lib/types";
import { levelsMeta } from "./levels";
import { svenska1Topics } from "./topics/svenska1";
import { svenska2Topics } from "./topics/svenska2";
import { svenska3Topics } from "./topics/svenska3";
import { litteraturTopics } from "./topics/litteratur";
import { retorikTopics } from "./topics/retorik";
import { skrivandeTopics } from "./topics/skrivande";

const topicsByLevel: Record<string, Level["topics"]> = {
  svenska1: svenska1Topics,
  svenska2: svenska2Topics,
  svenska3: svenska3Topics,
  litteratur: litteraturTopics,
  retorik: retorikTopics,
  skrivande: skrivandeTopics,
};

export const allLevels: Level[] = levelsMeta.map((meta) => ({
  ...meta,
  topics: topicsByLevel[meta.id] ?? [],
}));

export function getLevelById(id: string): Level | undefined {
  return allLevels.find((l) => l.id === id);
}

export function getAllLessonIds(): string[] {
  return allLevels.flatMap((l) =>
    l.topics.flatMap((t) => t.lessons.map((le) => le.id))
  );
}

export function getLessonIdsForLevel(levelId: string): string[] {
  const level = getLevelById(levelId);
  if (!level) return [];
  return level.topics.flatMap((t) => t.lessons.map((le) => le.id));
}
