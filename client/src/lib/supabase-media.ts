/**
 * Supabase Media Loader Utility
 * Handles loading images and videos from Supabase buckets with proper CORS headers
 */

const SUPABASE_URL = 'https://evaoqyroqmmlojtzrulj.supabase.co';
const STORAGE_BASE = `${SUPABASE_URL}/storage/v1/object/public`;

/**
 * Generate a properly formatted Supabase storage URL
 * @param bucket - The bucket name (e.g., 'gallery', 'videos')
 * @param path - The file path within the bucket
 * @returns The full URL to the media file
 */
export function getSupabaseMediaUrl(bucket: string, path: string): string {
  // Encode the path to handle spaces and special characters
  const encodedPath = path
    .split('/')
    .map(segment => encodeURIComponent(segment))
    .join('/');
  
  return `${STORAGE_BASE}/${bucket}/${encodedPath}`;
}

/**
 * Preload an image from Supabase
 * @param url - The image URL
 * @returns A promise that resolves when the image is loaded
 */
export function preloadImage(url: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
    img.src = url;
  });
}

/**
 * Preload a video from Supabase
 * @param url - The video URL
 * @returns A promise that resolves when the video metadata is loaded
 */
export function preloadVideo(url: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    video.crossOrigin = 'anonymous';
    video.onloadedmetadata = () => resolve();
    video.onerror = () => reject(new Error(`Failed to load video: ${url}`));
    video.src = url;
  });
}

/**
 * Get optimized image URL with transformations
 * @param bucket - The bucket name
 * @param path - The file path
 * @param width - Optional width for image optimization
 * @param height - Optional height for image optimization
 * @returns The optimized URL
 */
export function getOptimizedImageUrl(
  bucket: string,
  path: string,
  width?: number,
  height?: number
): string {
  const baseUrl = getSupabaseMediaUrl(bucket, path);
  
  // Supabase image optimization parameters
  const params = new URLSearchParams();
  if (width) params.append('width', width.toString());
  if (height) params.append('height', height.toString());
  params.append('quality', '80');
  
  return params.toString() ? `${baseUrl}?${params.toString()}` : baseUrl;
}

/**
 * Verify that a Supabase URL is accessible
 * @param url - The URL to verify
 * @returns A promise that resolves if accessible, rejects otherwise
 */
export async function verifySupabaseAccess(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
}

export const SUPABASE_BUCKETS = {
  gallery: 'gallery',
  videos: 'videos',
  documents: 'documents',
} as const;
