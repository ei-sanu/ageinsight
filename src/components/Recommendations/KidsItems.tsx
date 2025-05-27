import React from 'react';
import { ExternalLink } from 'lucide-react';

const KidsItems: React.FC = () => {
  const items = [
    {
      id: 1,
      title: "Educational Toys",
      image: "https://images.pexels.com/photos/3933021/pexels-photo-3933021.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Age-appropriate toys that help with cognitive development and motor skills.",
      link: "https://www.firstcry.com/toys",
    },
    {
      id: 2,
      title: "Children's Books",
      image: "https://images.pexels.com/photos/159597/book-read-literature-pages-159597.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Colorful picture books to encourage early reading habits and language development.",
      link: "https://www.amazon.in/Childrens-Books/b?ie=UTF8&node=1318073031",
    },
    {
      id: 3,
      title: "Growth Nutrition",
      image: "https://images.pexels.com/photos/8844236/pexels-photo-8844236.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Nutritional supplements designed for growing children under 5 years.",
      link: "https://www.healthkart.com/nutrition/children-supplements",
    },
    {
      id: 4,
      title: "Safe Play Mats",
      image: "https://images.pexels.com/photos/207891/pexels-photo-207891.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Soft, non-toxic play mats to create a safe environment for crawling and playing.",
      link: "https://www.babyoye.com/",
    },
    {
      id: 5,
      title: "Comfortable Clothing",
      image: "https://images.pexels.com/photos/4473398/pexels-photo-4473398.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Soft, breathable clothes that are comfortable for your active little one.",
      link: "https://www.hopscotch.in/",
    },
    {
      id: 6,
      title: "Art Supplies",
      image: "https://images.pexels.com/photos/4503989/pexels-photo-4503989.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Safe, washable art supplies to encourage creativity and self-expression.",
      link: "https://www.flintobox.com/",
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

export default KidsItems;