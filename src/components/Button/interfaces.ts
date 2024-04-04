export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  link?: string;
  unactive?: boolean;
  centered?: boolean;
  block?: boolean;
}
