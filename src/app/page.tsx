import api from "@/app/api";
import { Link } from './api'; // Importa el tipo Link desde api.ts
import Image from 'next/image'

export default async function Home() {
  const links = await api.links.fetch();

  // console.log(Link);

  return (
  <main>
    <h1>Camilo</h1>
    <ul>
      {links.map((link) => (
        <li key={link.id}>
          <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h3>Titulo:{link.title}</h3>
          <p>Descripcion: {link.description}</p>
          <p>Category: {link.category}</p>
          <p>Price: ${link.price}</p>
          {/* <img src={link.image}></img> */}
          <Image src={link.image} 
          width={500} 
          height={500} 
          alt="Picture of the author" />
          </div>
          {/* <a href={link.id}>{link.id}</a> */}
        </li>
      ))}
    </ul>
  </main>
  );
}
