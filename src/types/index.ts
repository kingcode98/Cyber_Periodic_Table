export enum ElementCategory {
  NetworkProtocol = "Network Protocol",
  Security = "Security",
  Software = "Software",
  Hardware = "Hardware",
  Cryptography = "Cryptography",
  Cloud = "Cloud",
  DataScience = "Data Science",
  Programming = "Programming"
}

export interface CyberElement {
  id: string;
  symbol: string;
  name: string;
  category: ElementCategory;
  number: number;
  description: string;
  relatedTerms?: string[];
  learnMoreUrl?: string;
}

export interface CategoryInfo {
  name: ElementCategory;
  color: string;
  hoverColor: string;
  textColor: string;
}

export const categoryInfo: Record<ElementCategory, CategoryInfo> = {
  [ElementCategory.NetworkProtocol]: {
    name: ElementCategory.NetworkProtocol,
    color: '#FF6B6B',
    hoverColor: '#FF8787',
    textColor: '#000000'
  },
  [ElementCategory.Security]: {
    name: ElementCategory.Security,
    color: '#4ECDC4',
    hoverColor: '#6EE7DE',
    textColor: '#000000'
  },
  [ElementCategory.Software]: {
    name: ElementCategory.Software,
    color: '#45B7D1',
    hoverColor: '#65D7F1',
    textColor: '#000000'
  },
  [ElementCategory.Hardware]: {
    name: ElementCategory.Hardware,
    color: '#96CEB4',
    hoverColor: '#B6EED4',
    textColor: '#000000'
  },
  [ElementCategory.Cryptography]: {
    name: ElementCategory.Cryptography,
    color: '#D4A373',
    hoverColor: '#F4C393',
    textColor: '#000000'
  },
  [ElementCategory.Cloud]: {
    name: ElementCategory.Cloud,
    color: '#9B5DE5',
    hoverColor: '#BB7DF5',
    textColor: '#FFFFFF'
  },
  [ElementCategory.DataScience]: {
    name: ElementCategory.DataScience,
    color: '#00BBF9',
    hoverColor: '#20DBF9',
    textColor: '#000000'
  },
  [ElementCategory.Programming]: {
    name: ElementCategory.Programming,
    color: '#F15BB5',
    hoverColor: '#F17BD5',
    textColor: '#000000'
  }
};