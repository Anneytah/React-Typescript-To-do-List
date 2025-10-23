import React, { type ReactNode } from 'react'
import '../App.css'


type CourseGoalProps = {
    id: number
    title: string;
    children: ReactNode;
    onDelete : (id:number) => void;
}

const CourseGoals = ({title, id, children, onDelete}: CourseGoalProps) => {
  return (
    <div>
        <p className='title'>{title}</p> 
        {children}
        <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  )
}

export default CourseGoals