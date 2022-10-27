import './App.css';

import GoalForm from "./components/GoalForm";
import GoalList from "./components/GoalList";
import {useState} from "react";
import AlertPopup from "./components/AlertPopup";
function App() {
    const [goalList, updateGoal] = useState("");
    const getGoals = (value) => {
        updateGoal((prevGoal) => {
            return [
                {name: value.name, age: value.age},
                ...prevGoal
            ]
        })
    }

    return (
        <div>
            <GoalForm parentCallback={getGoals}></GoalForm>
            <GoalList goalList={goalList}></GoalList>

        </div>
    );
}

export default App;
