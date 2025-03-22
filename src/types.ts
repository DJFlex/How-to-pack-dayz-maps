export interface Step {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  content: string;
}

export interface Note {
  stepId: string;
  content: string;
  timestamp: number;
}

export interface MapConfig {
  mapName: string;
  modFolderName: string;
  authorName: string;
  description: string;
  customUrl: string;
}
