import '../styles/details.css'
import { useDispatch } from 'react-redux';
import { changeState } from '../habitslice';



const HabitDetailsRow = ({ habit, habit: { details } }) => {
    
    const dispatch = useDispatch();

    // handlers to change status on click
    const checkStatusHandler = (info) => {
      dispatch(
        changeState({
          title: info[0],
          details: [
            {
              day: info[1],
              status: "done",
            },
          ],
        })
      );
    };
  
    const doneStatusHandler = (info) => {
      dispatch(
        changeState({
          title: info[0],
          details: [
            {
              day: info[1],
              status: "fail",
            },
          ],
        })
      );
    };
  
    const failStatusHandler = (info) => {
      dispatch(
        changeState({
          title: info[0],
          details: [
            {
              day: info[1],
              status: "none",
            },
          ],
        })
      );
    };
    
    
    
    return (
        <div className="row">
        {details.map((detail) => (
          <div key={detail.day} className="col">
            <p className="day-headings">{detail.day}</p>
    
            {detail.status === 'none' && (
          <div className="custom-box null" onClick={() => checkStatusHandler([habit.title, detail.day])}></div>
        )}

        {detail.status === 'done' && (
          <div className="custom-box done" onClick={() => doneStatusHandler([habit.title, detail.day])}>
            <img src="https://cdn-icons-png.flaticon.com/128/4315/4315445.png" alt="Checkmark" />
          </div>
        )}

        {detail.status === 'fail' && (
          <div className="custom-box fail" onClick={() => failStatusHandler([habit.title, detail.day])}>
            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828843.png" alt="Cross" />
          </div>
        )}
          </div>
        ))}
      </div>
    );
  };
  
  export default HabitDetailsRow;