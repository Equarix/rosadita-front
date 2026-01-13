export interface HeroComponentProps {
  title: string;
  span: {
    text: string;
    color: string;
  };
  image: string;
  buttonLive: string;
  buttonDemo: string;
}

export default function Hero({
  buttonDemo,
  buttonLive,
  image,
  span,
  title,
}: HeroComponentProps) {
  return <div></div>;
}
