interface FeeCardProps {
    title: string;
    amount: string;
    currency?: string;
    note?: string;
  }
  
  export function FeeCard({ title, amount, currency = "", note = "*Inclusive of all taxes" }: FeeCardProps) {
    return (
      <div className="border border-green-500 rounded-lg p-4 text-center flex flex-col items-center">
        <p className="text-gray-800 mb-1">{title}</p>
        <div className="mb-1">
          <span className="text-green-600 text-lg font-medium">{currency} </span>
          <span className="text-green-600 text-2xl font-bold">{amount}</span>
        </div>
        <p className="text-sm text-gray-600">{note}</p>
      </div>
    );
  }
  