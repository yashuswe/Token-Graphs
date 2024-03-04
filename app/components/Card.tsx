import { CardProps } from "../types";

export const Card: React.FC<CardProps> = ({ height , width , backgroundColor="white", children }) => {
    return (
      <div className={`h-${height} w-${width} bg-${backgroundColor} border border-1-[#DEDFE2] rounded-lg p-4 shadow-custom `}>
        {children}
      </div>
    );
  };