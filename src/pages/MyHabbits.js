import React  from "react";
import '../styles/Myhabbit.css'
import Goals from "../components/Habits";
import { useSelector } from "react-redux";
import { HabitDetailsRow } from "../components";




const Myhabits=()=>{
const {habits} = useSelector((state)=> state.allHabits)
console.log('details',habits)
    return(
        <>
        <div className="GridConttainer">
            <div className="NavContainer">
                <div className="title">MyHabits</div>
                <Goals/>
            </div>
            <div className="MainContainer">
                <div className="HeaderContainer">
                    <div className="HeaderItem"> Progress</div>
                </div>
                <div className='detailContainer'>
                    {habits.map((habit, index) => (
                        <div key={index} className='habit-item  gradient1'>
                        <p>
                            <strong>{habit.title}</strong>&nbsp; :&nbsp; <i>{habit.discriptiom}</i>
                        </p>
                        <HabitDetailsRow key={habit.title} habit={habit} />
                    </div>
                ))}
                </div>
            </div>
        </div>
        </>
    
        

    )
}

export default Myhabits;