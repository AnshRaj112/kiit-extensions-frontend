interface NotesSectionProps {
    studentType: 'indian' | 'international';
  }
  
  export function NotesSection({ studentType }: NotesSectionProps) {
    return (
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Important note for Online Fee Payments</h3>
        {studentType === 'indian' ? (
          <ul className="space-y-3 list-disc pl-5">
            <li>Pay ONLY via official links on XXXXXXX.com.</li>
            <li>Do NOT pay unauthorized individuals or through unofficial links/QR codes/websites.</li>
            <li>The University is not liable for payments outside the official platform.</li>
            <li>Fees are for Indian and International Applicants of Sri Lanka, Bhutan, Nepal and Bangladesh.</li>
            <li>Course fee includes ₹2,000 exam fee/semester; excludes ₹1200 non-refundable Admission fee.</li>
          </ul>
        ) : (
          <ul className="space-y-3 list-disc pl-5">
            <li>Pay ONLY via official links on XXXXXXX.com.</li>
            <li>Do NOT pay unauthorized individuals or through unofficial links/QR codes/websites.</li>
            <li>The University is not liable for payments outside the official platform.</li>
            <li>Fees for international students may vary by country and do not include local transaction charges.</li>
            <li>Course fee includes an equivalent exam fee per semester; excludes a non-refundable Admission fee.</li>
          </ul>
        )}
      </div>
    );
  }
  