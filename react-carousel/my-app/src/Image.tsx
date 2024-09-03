type Prop = {
  source: string;
};

export function Image({ source }: Prop) {
  return <img src={source} />;
}
