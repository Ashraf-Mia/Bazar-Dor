export interface IMarketItem {
  id: number;
  category: string;
  categoryIcon: string;
  categoryNameBn: string;
  nameBn: string;
  image: string;
  lastMonth: number;
  lastWeek: number;
  change: {
    dir: "up" | "down" | "flat"
    pct: number;
  };
  markets: {
    market: string;
    division: string;
    min: number;
    max: number;
  }[];
 slug: string;
 today: string;
 unit: string;
 yesterday: number;
}