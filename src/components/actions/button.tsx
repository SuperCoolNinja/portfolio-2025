type ButtonProps = {
  label: string;
};

export const Button: React.FunctionComponent<ButtonProps> = ({
  label,
}: ButtonProps) => {
  return <div>{label}</div>;
};
