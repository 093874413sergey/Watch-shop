import React from "react";
import logo1_0 from '../src/Component/WatchFoto/1.0.jpg';
import logo2_0 from '../src/Component/WatchFoto/2.0.jpg';
import logo3_0 from '../src/Component/WatchFoto/3.0.jpg';
import { BsFillCartCheckFill } from "react-icons/bs";

export const itemsToSell = {
  items: [
    {
      id: 1,
      path: 'headRolex1_0',
      mainImg: logo1_0,
      carouselImages: ['a','a'],
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
      path: 'headRolex2_0',
      mainImg: logo2_0,
      carouselImages: ['a','a'],
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
      path: 'headRolex3_0',
      mainImg: logo3_0,
      carouselImages: ['a','a'],
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
    }
  ]
}
