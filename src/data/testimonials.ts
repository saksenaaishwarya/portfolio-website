export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
}

/**
 * Reusable testimonials carousel. Intentionally empty for now — the Testimonials
 * section auto-hides while this array is empty. Add entries here (e.g. a quote
 * from a mentor or manager) and the section will render automatically.
 */
export const testimonials: Testimonial[] = [];
