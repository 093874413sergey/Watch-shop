import React from "react";
import { BsFillCartCheckFill } from "react-icons/bs";

export const itemsToSell = {
  items: [
    {
      id: 1,
      path: 'headRolex1_0',
      mainImg: 'a',
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
      mainImg: 'a',
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
    }
  ]
}
