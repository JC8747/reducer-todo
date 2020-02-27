import React from 'react';

const Todo = props => {
    return (
      <div onClick={() => {props.toggleCompleted(props.todo.id)}}>
          {(()=>{
              if (props.todo) {
                if (props.todo.completed && props.displayCompleted){
                  return <p className='strikeThrough'>{props.todo.item}</p>
                }
                else if (!props.todo.completed){
                  return <p>{props.todo.item}</p>
                }
              }
          })()}
      </div>
    );
}

export default Todo;