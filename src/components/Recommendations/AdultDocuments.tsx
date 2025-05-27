import React from 'react';
import { FileText, CreditCard, FileCheck, Landmark, Import as Passport, UserCheck } from 'lucide-react';

interface DocumentCard {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  eligibleAge: number;
}

const AdultDocuments: React.FC = () => {
  const documents: DocumentCard[] = [
    {
      id: 1,
      title: "Driving License",
      description: "Apply for your driving license through the official Sarathi portal.",
      icon: <CreditCard className="w-8 h-8 text-purple-600 dark:text-pink-400" />,
      link: "https://sarathi.parivahan.gov.in/",
      eligibleAge: 18,
    },
    {
      id: 2,
      title: "PAN Card",
      description: "Apply for Permanent Account Number (PAN) card for tax purposes.",
      icon: <FileText className="w-8 h-8 text-purple-600 dark:text-pink-400" />,
      link: "https://www.incometax.gov.in/iec/foportal/",
      eligibleAge: 18,
    },
    {
      id: 3,
      title: "Voter ID Card",
      description: "Register to vote in elections with an official voter ID card.",
      icon: <UserCheck className="w-8 h-8 text-purple-600 dark:text-pink-400" />,
      link: "https://www.nvsp.in/",
      eligibleAge: 18,
    },
    {
      id: 4,
      title: "Aadhaar Card",
      description: "Update your Aadhaar details or request a new card.",
      icon: <FileCheck className="w-8 h-8 text-purple-600 dark:text-pink-400" />,
      link: "https://uidai.gov.in/",
      eligibleAge: 18,
    },
    {
      id: 5,
      title: "Passport",
      description: "Apply for an Indian passport for international travel.",
      icon: <Passport className="w-8 h-8 text-purple-600 dark:text-pink-400" />,
      link: "https://www.passportindia.gov.in/",
      eligibleAge: 18,
    },
    {
      id: 6,
      title: "Bank Account",
      description: "Open a savings account as a major with full banking privileges.",
      icon: <Landmark className="w-8 h-8 text-purple-600 dark:text-pink-400" />,
      link: "https://www.sbi.co.in/",
      eligibleAge: 18,
    },
  ];

  return (
    <div className="recommendation-grid">
      {documents.map((doc) => (
        <a 
          key={doc.id}
          href={doc.link} 
          target="_blank"
          rel="noopener noreferrer"
          className="card p-6 flex flex-col items-center text-center hover:shadow-lg transition-all"
        >
          <div className="mb-4 p-3 bg-purple-100 dark:bg-gray-800 rounded-full">
            {doc.icon}
          </div>
          <h3 className="text-xl font-semibold text-purple-700 dark:text-pink-400 mb-2">
            {doc.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
            {doc.description}
          </p>
          <span className="inline-block bg-purple-100 dark:bg-gray-800 text-purple-800 dark:text-pink-300 text-xs font-medium px-3 py-1 rounded-full">
            Eligible at {doc.eligibleAge}+ years
          </span>
        </a>
      ))}
    </div>
  );
};

export default AdultDocuments;