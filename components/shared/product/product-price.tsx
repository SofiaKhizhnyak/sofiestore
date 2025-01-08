import { cn } from "@/lib/utils"; // dynamic classnames

const ProductPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  // ensure 2 decimal places for the price
  const stringValue = value.toFixed(2);

  // get the int/float values
  const [intValue, floatValue] = stringValue.split(".");

  return (
    <p className={cn("text-2xl", className)}>
      <span className="text-xs align-super">$</span>
      {intValue}
      <span className="text-xs align-super">.{floatValue}</span>
    </p>
  );
};

export default ProductPrice;
