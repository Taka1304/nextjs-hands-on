interface ExifInfo {
  make: string;
  model: string;
  exposure_time: string;
  aperture: string;
  focal_length: string;
  iso: number;
}

interface LocationPosition {
  latitude: number;
  longitude: number;
}

interface LocationInfo {
  name: string;
  city: string;
  country: string;
  position: LocationPosition;
}

interface PhotoUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

interface PhotoLinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

interface UserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
}

interface UserInfo {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  portfolio_url: string;
  bio: string;
  location: string;
  total_likes: number;
  total_photos: number;
  total_collections: number;
  instagram_username: string;
  twitter_username: string;
  links: UserLinks;
}

interface CollectionInfo {
  id: number;
  title: string;
  published_at: string;
  last_collected_at: string;
  updated_at: string;
  cover_photo: null;
  user: null;
}


interface UnsplashPhoto {
  id: string;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  downloads: number;
  likes: number;
  liked_by_user: boolean;
  description: string;
  exif: ExifInfo;
  location: LocationInfo;
  current_user_collections: CollectionInfo[];
  urls: PhotoUrls;
  links: PhotoLinks;
  user: UserInfo;
}
