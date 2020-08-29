import React from 'react';

export const Header: React.FC = () => {
  return <section>
    <h1 className="bg-blue text-white text-4 h-10 p-2">
      Eats
    </h1>
    <h2 className="bg-blue-dark text-white text-4 p-2">
      <ul>
        <li>
          Lunch & Dinner Menu
        </li>
        <li>
          Blog
        </li>
        <li>
          About Us
        </li>
        <li>
          Contact
        </li>
      </ul>
    </h2>
  </section>
};
