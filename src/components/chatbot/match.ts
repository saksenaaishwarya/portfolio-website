import { intents, fallback } from '@/data/chatbot-knowledge';

/**
 * Scores a visitor's question against the local intent knowledge base and
 * returns the best matching answer. Pure function — no network, no API key.
 */
export function matchAnswer(input: string): string {
  const text = input.toLowerCase().trim();
  if (!text) return fallback;

  let best = { score: 0, answer: fallback };

  for (const intent of intents) {
    let score = 0;
    for (const keyword of intent.keywords) {
      if (text.includes(keyword)) {
        // Longer keyword phrases are stronger signals.
        score += keyword.includes(' ') ? 3 : keyword.length > 4 ? 2 : 1;
      }
    }
    if (score > best.score) best = { score, answer: intent.answer };
  }

  return best.score > 0 ? best.answer : fallback;
}
