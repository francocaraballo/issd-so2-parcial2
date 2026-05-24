import { VIRTUAL_FS } from '../data/virtual-fs.js';

// Helper to resolve absolute or relative path securely without double slashes or trailing slashes (except root)
export function resolvePath(currentDir, targetPath) {
  if (!targetPath) return currentDir;

  // Strip outer quotes if any
  let cleanTarget = targetPath.trim();
  if ((cleanTarget.startsWith('"') && cleanTarget.endsWith('"')) ||
    (cleanTarget.startsWith("'") && cleanTarget.endsWith("'"))) {
    cleanTarget = cleanTarget.slice(1, -1);
  }

  // Normalize slashes (replace multiple slashes with a single one)
  let normalized = cleanTarget.replace(/\/+/g, '/');

  let resolved;
  if (normalized.startsWith('/')) {
    resolved = normalized;
  } else {
    resolved = currentDir === '/' ? `/${normalized}` : `${currentDir}/${normalized}`;
  }

  // Strip trailing slash unless it is just "/"
  if (resolved.length > 1 && resolved.endsWith('/')) {
    resolved = resolved.slice(0, -1);
  }

  return resolved;
}
