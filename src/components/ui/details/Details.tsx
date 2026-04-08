export interface DetailsResponse {
  header: string;
  content: string;
}

export interface DetailsProps {
  details: DetailsResponse[];
}

export default function Details({ details }: DetailsProps) {
  return (
    <div className="flex justify-center items-center border w-full border-gray-200 shadow-sm">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 py-8 lg:p-8">
        {details.map((detail, index) => (
          <div key={index} className="flex flex-col items-start gap-2">
            <h3 className="text-lg font-semibold text-gray-900">
              {detail.header}
            </h3>
            <p className="text-gray-500">{detail.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
