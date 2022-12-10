import React from "react";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel'
import './AllItemSlider.css';
import {groupByThree} from '../utils/utils'
import {itemsToSell} from '../itemDescriptions'
import Card from 'react-bootstrap/Card';

const groupedByThree = groupByThree(itemsToSell.items)

export default function AllItemSlider() {
  console.log(groupedByThree)
  return(
    <div className="carusel">
      <Carousel>
        {groupedByThree.map((group, groupIndex)=>
          <Carousel.Item key={groupIndex} interval={10000}>
            <div className="product_card">
              {group.map(({id, path, mainImg, title, shortDescription})=>
                <div key={id}>
                  <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={`/pictures/WatchFoto/${mainImg}`}/>
                    <Card.Body>
                      <Card.Title>{title}</Card.Title>
                      <Card.Text>{shortDescription}</Card.Text>
                      <Link className="card-button" to={path}>
                        Want to buy
                      </Link>
                    </Card.Body>
                  </Card>
                </div>
              )}
            </div>
          </Carousel.Item>
        )}
      </Carousel>
    </div>
  )
}
