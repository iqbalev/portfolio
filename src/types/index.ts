export interface NavListProps {
  title: string;
  link: string;
}

export interface TechItem {
  icon: string;
  name: string;
}

export interface TechCategoryProps {
  title: string;
  tech: Array<TechItem>;
}
