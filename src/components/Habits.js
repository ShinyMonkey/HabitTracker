import React  from "react";
import '../styles/Goals.css';
import {useSelector,useDispatch} from 'react-redux';
import { deletehabit } from "../habitslice";
import {AddButton} from "./";

const Goals=()=>{
    const {habits} = useSelector((state)=> state.allHabits);
    console.log(habits);

    const dispatch = useDispatch();


    const deleteHandler=(title)=>{
        dispatch(deletehabit(title));
    }
    return(
        <>
        <div className="GoalsContainer">
            <div className="GoalsHeader">
                <div className="titleSection">Goals</div>
               <AddButton/>
            </div>
            {habits.map((habit,index) => (
          <div className="GoalRow" key={index}>
          <div className="Name">{habit.title}</div>
          <button className="Action" onClick={()=>{deleteHandler(habit.title)}}>
              <img src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" alt="Delete"/>
          </button>
        </div>
        ))}
        </div>
        </>
    
        

    )
}

export default Goals;