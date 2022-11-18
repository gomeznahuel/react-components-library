interface IDateProps {
  money: number;
  region: string;
}

const Currency = ({ money, region }: IDateProps) => {
  return `$${money.toLocaleString(region, { minimumFractionDigits: 0 })}`;
};

export default Currency;