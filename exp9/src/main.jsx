import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Body from './Body';
import Card from './Card'; 
import lap1 from './assets/lap.jpg';


const cardsData = [
  {
    src: 'https://m.media-amazon.com/images/I/61YCWzjldDL._SX679_.jpg',
    laptitle: 'Apple',
    lapdesc: 'Apple 2023 MacBook Pro (14-inch, M3 chip with 8‑core CPU and 10‑core GPU, 8GB Unified Memory, 512GB) - Space Grey',
  },
  {
    src: 'https://m.media-amazon.com/images/I/71mbbhl5FkL._SX679_.jpg',
    laptitle: 'HP',
    lapdesc: 'HP Laptop 15s, 12th Gen Intel Core i5-1235U, 15.6-inch (39.6 cm), FHD, 16GB DDR4, 512GB SSD, Intel Iris Xe Graphics, Backlit KB, MSO, Thin & Light, Dual Speakers (Win 11, Silver, 1.69 kg), fq5330TU',
  },
  {
    src: 'https://m.media-amazon.com/images/I/71Eu1-dfTmL._SX679_.jpg',
    laptitle: 'DELL',
    lapdesc: "Dell 14 Thin & Light Laptop, AMD Ryzen R5-5500U/ 8GB DDR4 2400 MHz/ 512GB/ 14.0 (35.56cm) FHD Display + Comfort View/Windows 11 + MSO'21/15 Month McAfee/Spill-Resistant Keyboard/Carbon Black/ 1.48kg",
  },
  {
    src: 'https://m.media-amazon.com/images/I/81a3Ij-xXGL._SX679_.jpg',
    laptitle: 'LENOVA',
    lapdesc: "Lenovo IdeaPad Slim 3 Intel Core i7 12th Gen 15.6 inch (39.62cm) FHD Thin & Light Laptop (8GB/512GB SSD/Windows 11/Office 2021/1Yr ADP Free/3months Game Pass/Arctic Grey/1.63Kg), 82RK011EIN",
  },
  {
    src: 'https://m.media-amazon.com/images/I/71czGb00k5L._SX679_.jpg',
    laptitle: 'Acer',
    lapdesc: "Acer Aspire Lite 12th Gen Intel Core i5-1235U Thin and Light Laptop (Windows 11 Home/16GB RAM/512GB SSD/Intel Iris Xe Graphics) AL15-52, 39.62cm (15.6) Full HD Display, Metal Body, Steel Gray, 1.6 KG",
  },
  {
    src: 'https://m.media-amazon.com/images/I/71-Fx3Vfq5L._SX679_.jpg',
    laptitle: 'ASUS',
    lapdesc: "ASUS TUF F15 Gaming Laptop, Intel Core i5-11400H 11th Gen, 15.6-inch (39.62 cm) FHD 144Hz,(16GB RAM/512GB SSD/4GB NVIDIA GeForce RTX 2050/Windows 11/ RGB Backlit KB/Black/2.30 kg), FX506HF-HN025W",
  },
  
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <body>    
    <Body />
    <div className="card-container">
      {cardsData.map((card) => (
        <Card src={card.src} laptitle={card.laptitle} lapdesc={card.lapdesc} />
      ))}
    </div>
    </body>

  </>
);