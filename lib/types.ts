export interface Example {
  swedish: string;
  explanation: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  examples: Example[];
  keyRules: string[];
}

export interface Topic {
  id: string;
  title: string;
  category: string;
  lessons: Lesson[];
}

export interface Level {
  id: string;
  name: string;
  subtitle: string;
  icon: string;
  description: string;
  goals: string[];
  topics: Topic[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  passage?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  level: string;
  category: string;
  questions: QuizQuestion[];
}
