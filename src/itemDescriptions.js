import React from "react";

export const itemsToSell = {
  items: [
    {
      id: 1,
      path: '/headRolex1_0',
      title: 'Rolex',
      shortDescription: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
      mainImg: '1.0.jpg',
      carouselImages: [['1.1.jpg','1.2.jpg'],['1.3.jpg','1.4.jpg'],['1.5.jpg','1.6.jpg'],['1.7.jpg','1.8.jpg'],['1.9.jpg','1.10.jpg']],
      cost: 1550,
      description: ({ item }) => (
        <ul>
          <li>
            <h1>Rolex watch</h1>
          </li>
          <li>
            <h2>Mechanism</h2>
            <p>Mechanical 18 rubyes</p>
          </li>
          <li>
            <h2>Frame</h2>
            <p>Stainless steel with gilding</p>
          </li>
          <li>
            <h2>Strap</h2>
            <p>Leather</p>
          </li>
          <li>
            <h2>Dimensions</h2>
            <p>Diameter 43mm</p>
          </li>
          <li className="cost">{item.cost} $</li>
        </ul>
      )
    },
    {
      id: 2,
      path: '/headRolex2_0',
      title: 'Rolex',
      shortDescription: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
      mainImg: '2.0.jpg',
      carouselImages: [['2.1.jpg','2.2.jpg'],['2.3.jpg','2.4.jpg'],['2.5.jpg','2.6.jpg'],['2.7.jpg','2.0.jpg']],
      cost: 1600,
      description: ({ item }) => (
        <ul>
          <li>
            <h1>Rolex watch</h1>
          </li>
          <li>
            <h2>Mechanism</h2>
            <p>Mechanical 18 rubyes</p>
          </li>
          <li>
            <h2>Frame</h2>
            <p>Stainless steel with gilding</p>
          </li>
          <li>
            <h2>Strap</h2>
            <p>Leather</p>
          </li>
          <li>
            <h2>Dimensions</h2>
            <p>Diameter 43mm</p>
          </li>
          <li className="cost">{item.cost} $</li>
        </ul>
      )
    },
    {
      id: 3,
      path: '/headRolex3_0',
      title: 'Rolex',
      shortDescription: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
      mainImg: '3.0.jpg',
      carouselImages: [['3.1.jpg','3.2.jpg'],['3.3.jpg','3.4.jpg'],['3.5.jpg','3.6.jpg'],['3.7.jpg','3.8.jpg'],['3.9.jpg','3.10.jpg']],
      cost: 1900,
      description: ({ item }) => (
        <ul>
          <li>
            <h1>Rolex watch</h1>
          </li>
          <li>
            <h2>Mechanism</h2>
            <p>Mechanical 18 rubyes</p>
          </li>
          <li>
            <h2>Frame</h2>
            <p>Stainless steel with gilding</p>
          </li>
          <li>
            <h2>Strap</h2>
            <p>Leather</p>
          </li>
          <li>
            <h2>Dimensions</h2>
            <p>Diameter 43mm</p>
          </li>
          <li className="cost">{item.cost} $</li>
        </ul>
      )
    },
    {
      id: 4,
      path: '/headRolex4_0',
      title: 'Rolex',
      shortDescription: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
      mainImg: '4.0.jpg',
      carouselImages: [['4.1.jpg','4.2.jpg'],['4.3.jpg','4.4.jpg'],['4.5.jpg','4.6.jpg'],['4.7.jpg','4.8.jpg']],
      cost: 1870,
      description: ({ item }) => (
        <ul>
          <li>
            <h1>Rolex watch</h1>
          </li>
          <li>
            <h2>Mechanism</h2>
            <p>Mechanical 18 rubyes</p>
          </li>
          <li>
            <h2>Frame</h2>
            <p>Stainless steel with gilding</p>
          </li>
          <li>
            <h2>Strap</h2>
            <p>Leather</p>
          </li>
          <li>
            <h2>Dimensions</h2>
            <p>Diameter 43mm</p>
          </li>
          <li className="cost">{item.cost} $</li>
        </ul>
      )
    },
    {
      id: 5,
      path: '/headRolex5_0',
      title: 'Rolex',
      shortDescription: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
      mainImg: '5.0.jpg',
      carouselImages: [['5.1.jpg','5.2.jpg'],['5.3.jpg','5.4.jpg'],['5.5.jpg','5.6.jpg'],['5.7.jpg','5.8.jpg'],['5.9.jpg','5.10.jpg']],
      cost: 1630,
      description: ({ item }) => (
        <ul>
          <li>
            <h1>Rolex watch</h1>
          </li>
          <li>
            <h2>Mechanism</h2>
            <p>Mechanical 18 rubyes</p>
          </li>
          <li>
            <h2>Frame</h2>
            <p>Stainless steel with gilding</p>
          </li>
          <li>
            <h2>Strap</h2>
            <p>Leather</p>
          </li>
          <li>
            <h2>Dimensions</h2>
            <p>Diameter 43mm</p>
          </li>
          <li className="cost">{item.cost} $</li>
        </ul>
      )
    },
    {
      id: 6,
      path: '/headRolex6_0',
      title: 'Rolex',
      shortDescription: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
      mainImg: '6.0.jpg',
      carouselImages: [['6.1.jpg','6.2.jpg'],['6.3.jpg','6.4.jpg'],['6.5.jpg','6.6.jpg'],['6.7.jpg','6.8.jpg'],['6.9.jpg','o6.0.jpg']],
      cost: 1940,
      description: ({ item }) => (
        <ul>
          <li>
            <h1>Rolex watch</h1>
          </li>
          <li>
            <h2>Mechanism</h2>
            <p>Mechanical 18 rubyes</p>
          </li>
          <li>
            <h2>Frame</h2>
            <p>Stainless steel with gilding</p>
          </li>
          <li>
            <h2>Strap</h2>
            <p>Leather</p>
          </li>
          <li>
            <h2>Dimensions</h2>
            <p>Diameter 43mm</p>
          </li>
          <li className="cost">{item.cost} $</li>
        </ul>
      )
    },
  ]
}