export type Document = {
  title: string;
  content: string;
};

export type DocumentIndex = Map<string, Set<Document>>;

/**
 * Builds a DocumentIndex from a list of Documents.
 * The index's keys are the words in all the documents,
 * and the values are the documents the word appears in.
 */
export function buildIndex(docs: Document[]): DocumentIndex {
  const map = new Map<string, Set<Document>>();
  for (const doc of docs) {
    const words = doc.content.match(/\b(\w+)\b/g);
    const lowercaseWords = words?.map((e) => e.toLowerCase()) as string[];
    for (const word of lowercaseWords) {
      if (!map.has(word)) {
        map.set(word, new Set<Document>());
      }
      map.get(word)?.add(doc);
    }
  }
  return map;
}
