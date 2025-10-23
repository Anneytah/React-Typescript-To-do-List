import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
// import CourseGoals from "./components/CourseGoals"
import { useState } from 'react'
import { CourseGoalList } from './components/CourseGoalList'
import NewGoal from './components/NewGoal'


export type CourseGoal = {
  title: string;
  description: string;
  id: number;
}

function App() {
   const [goals, setGoals] = useState<CourseGoal[]>([])

  function handleButton(goal: string, summary:string) {
     setGoals(prevGoals => {
      const newGoals : CourseGoal ={
       id: Math.random(),
       title: goal,
       description: summary,
      }
      return [...prevGoals, newGoals]
     })
  }

  function handleDelete(id:number){
    setGoals(prevGoals => prevGoals.filter((goals) => goals.id !== id));
  }

  return (
    <div className='container'>
      <Header image={{src: reactLogo, alt: "A list of goals"}}>
        <h1 style={{color: "#f7e596", textAlign: "center"}}>Your Course Goals</h1>
      </Header>
      {/* <button onClick={handleButton}>Add Goal</button> */}
      <NewGoal onAddGoal={handleButton} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDelete} />
    </div>
  )
}

export default App
