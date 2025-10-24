import React, { useRef, type FormEvent } from 'react'

type NewGoalProps = {
  onAddGoal : (goal: string, summary: string) => void;
}

const NewGoal = ({onAddGoal} : NewGoalProps) => {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null)

function handleSubmit(event: FormEvent<HTMLFormElement>){
event?.preventDefault()

const enteredGoal = goal.current!.value;
const enteredSummary = summary.current!.value;

event.currentTarget.reset();
onAddGoal(enteredGoal, enteredSummary);
}

  return (
    <form onSubmit={handleSubmit}>
       <p>
        <label htmlFor='goal' style={{paddingTop: 50}}>YOUR GOALS</label>
        <input id='goal' type='text' ref={goal} />
       </p>
       <p>
        <label htmlFor='goal'>SHORT SUMMARY</label>
        <input id='summary' type='text' ref={summary} />
       </p>
       <button className='addbutton'>Add Goal</button>
    </form>
  )
}

export default NewGoal