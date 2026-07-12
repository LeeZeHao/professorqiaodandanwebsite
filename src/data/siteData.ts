export type SectionId =
  | "about"
  | "research"
  | "teaching"
  | "services"
  | "awards";

export type SearchItem = {
  id: string;
  sectionId: SectionId;
  group: string;
  title: string;
  subtitle: string;
  keywords: string[];
  color?: string;
  badge?: string;
};

export const navItems: { id: SectionId; label: string }[] = [
  { id: "about", label: "About" },
  { id: "research", label: "Research" },
  { id: "teaching", label: "Teaching" },
  { id: "services", label: "Services" },
  { id: "awards", label: "Awards" },
];

export const searchItems: SearchItem[] = [
]