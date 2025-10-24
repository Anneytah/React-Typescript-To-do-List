import React, { type ReactNode } from "react";
import CourseGoals from "./CourseGoals";
import { type CourseGoal as CGoal} from "../App.tsx";
import InfoBox from "./InfoBox.tsx";

type CourseGoalsListProps = {
  goals: CGoal[];
  onDeleteGoal : (id:number) => void;
};

export const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalsListProps) => {
    
  if (goals.length === 0){
    return (
    <InfoBox mode="hint">
      You have no goals yet, start adding some
    </InfoBox>

    )
  }


let warningBox: ReactNode;
if (goals.length >= 4){
  warningBox = (
    <InfoBox mode="warning" severity="medium">You're collecting a lot of goals. Don't put too much on your plate!</InfoBox>
  )
}

  return (
    <div>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoals id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoals>
          </li>
        ))}
      </ul>
    </div>
  );
};
