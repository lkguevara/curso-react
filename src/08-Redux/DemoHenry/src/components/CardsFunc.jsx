import React from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react"
import {getPersonaje} from '../redux/actions.js'


const CardsFunc = () => {
// useSelector es un hook de react-redux que nos permite acceder al estado de redux desde un componente funcional, hace lo mismo que mapStateToProps.
  const personaje = useSelector((state) => state.personaje); 
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPersonaje())
  }, []);

  return (
    <div>
      <h1>Card Func</h1>
      <div>
        {personaje.map((item) => {
          return <Card 
            key={item.id} 
            id={item.id} 
            name={item.name} 
            image={item.image}
          />;
        })}
      </div>
    </div>
  );
};

export default CardsFunc;
