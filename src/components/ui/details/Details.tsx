export interface DetailsResponse {
  header: string;
  content: string;
}

export interface DetailsProps {
  details: DetailsResponse[];
}

export default function Details({ details }: DetailsProps) {
  return <div></div>;
}
