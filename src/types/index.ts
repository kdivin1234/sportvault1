export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface MediaItem {
  id: string;
  title: string;
  url: string;
  type: 'image' | 'video';
  tags: string[];
  uploadedBy: string;
  uploadedAt: Date;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}