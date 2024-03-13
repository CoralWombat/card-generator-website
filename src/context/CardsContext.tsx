import { Dispatch, SetStateAction, createContext } from "react";
import Card from "../model/Card";

const CardsContext =
  createContext<[Card[], Dispatch<SetStateAction<Card[]>>]>(null);

export default CardsContext;
