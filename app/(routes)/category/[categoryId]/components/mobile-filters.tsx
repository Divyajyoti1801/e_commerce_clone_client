import { Color, Size } from "@/types";

interface MobileFilterProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilters: React.FC<MobileFilterProps> = ({ sizes, colors }) => {
  return <div>MobileFilter</div>;
};

export default MobileFilters;
