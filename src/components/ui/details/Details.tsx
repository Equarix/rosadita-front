export interface DetailsResponse {
  header: string;
  content: string;
}

export interface DetailsProps {
  details: DetailsResponse[];
}

export default function Details({ details }: DetailsProps) {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-4 gap-50">
        {details.map((detail, index) => (
          <div key={index} className="flex flex-col items-center">
            <p className="text-gray-500">{detail.content}</p>
            <h3 className="text-lg font-semibold text-gray-900">
              {detail.header}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
