// main interface
export default interface ProductInterface {
  name: string;
  summary: string;
  description: string;
  status: 'En producción' | 'En desarrollo';
  year: string;
  technologies: string[];
  icon: string;
  url?: string;
}
