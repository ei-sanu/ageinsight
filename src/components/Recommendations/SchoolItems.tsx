import React from 'react';
import { ExternalLink } from 'lucide-react';

const SchoolItems: React.FC = () => {
  const items = [
    {
      id: 1,
      title: "Study Materials",
      image: "https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Quality textbooks, notebooks, and stationery for effective learning.",
      link: "https://www.amazon.in/school-supplies/b?ie=UTF8&node=2454172031",
    },
    {
      id: 2,
      title: "Backpacks",
      image: "https://images.pexels.com/photos/1546003/pexels-photo-1546003.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Ergonomic backpacks designed to distribute weight evenly and protect the back.",
      link: "https://www.amazon.in/School-Bags/b?ie=UTF8&node=2454169031",
    },
    {
      id: 3,
      title: "Lunch Boxes",
      image: "https://images.pexels.com/photos/5591748/pexels-photo-5591748.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Insulated lunch boxes to keep food fresh and nutritious throughout the day.",
      link: "https://www.flipkart.com/lunch-boxes/pr?sid=qoc,eut",
    },
    {
      id: 4,
      title: "Educational Tablets",
      image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Tablets loaded with educational apps to make learning interactive and fun.",
      link: "https://www.amazon.in/Tablets/b?ie=UTF8&node=1375458031",
    },
    {
      id: 5,
      title: "Study Lamps",
      image: "https://images.pexels.com/photos/1125137/pexels-photo-1125137.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Adjustable lamps with eye-friendly lighting for comfortable reading and studying.",
      link: "https://www.flipkart.com/study-lamps/pr?sid=jhg,3n0,r73",
    },
    {
      id: 6,
      title: "School Uniforms",
      image: "https://images.pexels.com/photos/5212661/pexels-photo-5212661.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Comfortable and durable school uniforms that meet school requirements.",
      link: "https://www.schooluniforms.in/",
    },
  ];

  return (
    <div className="recommendation-grid">
      {items.map((item) => (
        <a 
          key={item.id}
          href={item.link} 
          target="_blank"
          rel="noopener noreferrer"
          className="card overflow-hidden transition-all hover:scale-[1.02]"
        >
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-purple-700 dark:text-pink-400 mb-2 flex items-center gap-1">
              {item.title} <ExternalLink size={14} />
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {item.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default SchoolItems;