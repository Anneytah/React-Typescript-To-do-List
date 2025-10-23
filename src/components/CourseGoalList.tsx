import React from "react";
import CourseGoals from "./CourseGoals";
import { type CourseGoal as CGoal} from "../App.tsx";

type CourseGoalsListProps = {
  goals: CGoal[];
  onDeleteGoal : (id:number) => void;
};

export const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalsListProps) => {
  return (
    <div>
      <ul style={{listStyleType: "none", display: "flex"}}>
        {goals.map((goal) => (
          <li key={goal.id} style={{padding: 10, margin: 10}} className="list">
            <CourseGoals id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p className="description">{goal.description}</p>
            </CourseGoals>
          </li>
        ))}
      </ul>
    </div>
  );
};
