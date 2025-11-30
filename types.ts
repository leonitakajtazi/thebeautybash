export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  price?: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: 'lashes' | 'brows' | 'pmu';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
