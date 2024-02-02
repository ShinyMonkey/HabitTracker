import { createSlice } from "@reduxjs/toolkit";

export const details = [
    { day: "Mon", status: "none" },
    { day: "Tue", status: "none" },
    { day: "Wed", status: "none" },
    { day: "Thu", status: "none" },
    { day: "Fri", status: "none" },
    { day: "Sat", status: "none" },
    { day: "Sun", status: "none" },
  ];

const storedHabbits= localStorage.getItem('newhabits') ? JSON.parse(localStorage.getItem('newhabits'))
    :[{title:"Wake up", discriptiom:"wake up at 5:00 AM",details}]

let habits = [...storedHabbits];
const initialState={
    habits : habits
}

const habitSlice = createSlice({
    name: "habits",
    initialState,
    reducers:{
        addHabit:(state,{payload})=>{
            state.habits = [...state.habits,payload];
            habits = [...habits,payload];
            localStorage.setItem("newhabits",JSON.stringify(habits));
        },
    

    deletehabit:(state,action)=>{
        state.habits= state.habits.filter((habit)=> habit.title !== action.payload);
        localStorage.setItem("newhabits",JSON.stringify(state.habits))
    },

    changeState:(state,{payload})=>{
        state.habits.forEach((habit) => {
            if(habit.title === payload.title){
                habit.details.forEach((detail)=>{
                    if(detail.day === payload.details[0].day){
                        detail.status = payload.details[0].status;
                    }
                })
            }
        });
        localStorage.setItem('newhabits',JSON.stringify(state.habits));
        console.log("chanhestate", state.habits)
    },
}
});

console.log(habitSlice);

export const { addHabit,deletehabit,changeState} = habitSlice.actions;

export default habitSlice.reducer;