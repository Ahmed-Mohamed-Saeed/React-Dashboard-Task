import React, { useEffect, useReducer } from 'react';
import "./Booking.css";
import axios from "axios";
import Card from '../Card/Card';
import Spinner from '../Spinner/Spinner';

const initialState = {
  loading: false,
  data: [],
  error: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return {
        loading: true
      };
    case "success":
      return {
        loading: false,
        data: action.payload
      };
    case "failed":
      return {
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

const Booking = () => {
  const [resp, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({type: "loading"});
    axios.get("./data.json").then((resp) => {
      dispatch({type: "success", payload: resp.data.cars})
    }).catch((error) => {
      dispatch({type: "failed", payload: error.message})
    })
  }, []);
  return (
    <section className="booking">
      <p className="header">Booking</p>
      <div className="cards">
        {
          resp.loading ? (
            <Spinner />
          ) : resp.error ? (
            <h1>Error..</h1>
          ) : (
            resp.data.map((card) => {
              return (
                <Card key={card.id} car={card}/>
              )
            })
          )
        }
      </div>
    </section>
  )
}

export default Booking;