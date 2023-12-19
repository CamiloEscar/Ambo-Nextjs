import React from 'react';
import { Link } from './api'; // Importa el tipo Link desde api.ts

interface LinkBoxProps {
  link: Link;
}

const LinkBox: React.FC<LinkBoxProps> = ({ link }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      {/* <img src={link.image} alt={link.title} style={{ maxWidth: '100%', height: 'auto' }} /> */}
      <h3>{link.title}</h3>
      <p>{link.description}</p>
      <p>Category: {link.category}</p>
      <p>Price: ${link.price}</p>
    </div>
  );
};

export default LinkBox;