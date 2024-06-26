import styled from 'styled-components'

import { IoIosTrash } from "react-icons/io"
import { FaCheck } from "react-icons/fa";

import React from 'react'

const TaskScreen = ({ tasks, onToggleTask, onDeleteTask }) => {

    return (
        <TaskListContainer>
            {tasks.map((task, index) => (
                <TaskContainer key={index}>
                    <Task className={task.checked ? 'done' : ''}>{task.text}</Task>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <DeleteButton onClick={() => onDeleteTask(index)}><IoIosTrash /></DeleteButton>
                        <DoneButton onClick={() => onToggleTask(index)} className={task.checked ? 'done' : ''}><FaCheck /></DoneButton>
                    </div>
                </TaskContainer>
            ))}

        </TaskListContainer>
    )
}

const TaskListContainer = styled.div`
    width: 466;
    height: 310px;
    background-color: #D5B8E7;
    margin-top: 16px;
    border-radius: 12px;
    overflow-y: scroll;
    border: 14px solid #D5B8E7;
`
const TaskContainer = styled.div`
    width: 422px;
    height: 60px;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
`
const Task = styled.div`
    width: 390px;
    height: 60px;
    padding: 8px;
    border-radius: 8px;
    background-color: #F1E6F8;
    color: #535353;
    font-size: 12px;

    &.done {
        background-color: #C4DAB9;
    }
`

const DeleteButton = styled.button`
    width: 24px;
    height: 24px;
    background-color: #C24160;
    color: #F1C7C7;
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const DoneButton = styled.button`
    width: 24px;
    height: 24px;
    background-color: #8BAB7B;
    color: #C4DAB9;
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;

    &.done {
        background-color: #A3A3A3;
        color: #CECECE;
    }
`
export default TaskScreen