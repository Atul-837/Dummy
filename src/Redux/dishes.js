import { Switch } from "react-router-dom";
import { DISHES } from "../shared/dishes";


export const Dishes = (state= DISHES, action) => {
    switch(action.type) {
        default:
        return state;
    }
}