import {CardItem} from './CardItem'

import GameData from '../app.mock'

import {useState} from 'react'


export const CardItemList=()=>{
    const [cardList,setCardList]=useState([...GameData])
    const onClickHandler=(id)=>{
        const updatedCardList = cardList.map((item) => {
            if (item.id === id) {
              // Toggle the isOpen state when the card is clicked
              return { ...item, isOpen: !item.isOpen };
            }
            return item;
          });
      
          setCardList(updatedCardList);
    }


    return (
        <div>
            {cardList.map((item)=>{
    return (
        <CardItem
        key={item.id}
        id={item.id}
        image={item.pic}
        onClick={onClickHandler}
        isOpen={item.isOpen}
        ></CardItem>
    )
            })}
        </div>
    )
}