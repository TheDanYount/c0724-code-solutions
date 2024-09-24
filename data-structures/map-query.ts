import { Document, DocumentIndex } from './map-index';

/**
 * Queries a DocumentIndex and returns all the Documents that contain
 * any of the words in the query, as a Set.
 */
export function queryIndex(index: DocumentIndex, query: string): Set<Document> {
  const set = new Set<Document>();
  const words = query.toLowerCase().match(/\b(\w+)\b/g);
  if (!words) return set;
  for (const word of words) {
    const matches = index.get(word);
    if (matches) matches.forEach((item) => set.add(item));
  }
  return set;
}
