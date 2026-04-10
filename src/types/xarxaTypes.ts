export interface Alumni {
  id: number;
  name: string;
  promotion: string;
  role: string;
  location: string;
  avatar: string;
}

export interface XarxaData {
  alumni: Alumni[];
  recentActivity: string[];
}