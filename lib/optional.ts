/**
 * Reads a setting that newer versions of the site added to site.config.ts.
 * If your config file is older and doesn't have it yet, the fallback is used
 * instead of breaking the build.
 */
export function optional<T>(obj: object, key: string, fallback: T): T {
  const v = (obj as Record<string, unknown>)[key];
  return v === undefined || v === null ? fallback : (v as T);
}
