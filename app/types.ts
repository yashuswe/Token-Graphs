export type CardProps = {
height: number;
width : number;
backgroundColor? : string;
children:any;
}

export interface CoinItem {
    id: string;
    name: string;
    symbol: string;
    thumb: string;
    price_change_percentage_24h: number;
    sparkline? : string;
    price?:number;
  }

 export  interface Props {
    trendingCoins: CoinItem[];
    name:string;
    isFirst?: boolean;
  }
