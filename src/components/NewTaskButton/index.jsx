import styled from 'styled-components'
import { useState } from 'react'

import React from 'react'

function NewTaskButton() {
    const [tasksList, setTasksList] = useState([])
    const [task, setTask] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    const handleUpdateTasks = (newTask) => {
        setTasksList([newTask, ...tasksList]);
    };

    const handleAddTask = () => {
        handleUpdateTasks({ task: task, checked: false })
    }

    function checkOpenStatus() {
        if (isOpen && task !== '') {
            setIsOpen(false)
            handleAddTask()
        } else {
            setIsOpen(true)
        }
    }

    function closeNewTask() {
        setIsOpen(false)
    }

    const handleChangeTextTask = (e) => {
        const textTask = e.target.value

        if (textTask.length <= 140) {
            setTask(textTask)
        }
    }

    return (
        <>
        <div style={{ position: 'relative'}}>
            <NewTask className={isOpen ? 'open' : ''}>
                <span onClick={closeNewTask} className='closeButton'>X</span>
                <textarea
                className='inputTask'
                placeholder='Digite aqui sua nova tarefa...'
                value={task}
                onChange={handleChangeTextTask}  />
                <span className='counterInput'>{task.length}/140</span>
            </NewTask>
            <Button onClick={checkOpenStatus}>+&nbsp;&nbsp;&nbsp;&nbsp;Nova Tarefa</Button>
        </div>
        </>
    )
}



const Button = styled.button`
    width: 466px;
    height: 50px;
    border: none;
    border-radius: 12px;
    outline: none;
    background-color: #AE6BD8;
    font-family: Itim;
    color: #F4E3FF;
    font-size: 32px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover{
        background-color: #F4E3FF;
        color: #AE6BD8;
    }
`

const NewTask = styled.div`
    width: 466px;
    height: 0;
    opacity: 0;
    position: absolute;
    transform: translate(0, 50%);
    bottom: 70px;
    transition: all 1s ease;

    &.open {
        width: 466px;
        height: 80px;
        border: 2px solid #AE6BD8;
        border-radius: 12px;
        position: absolute;        
        opacity: 100%;
        padding: 14px;
        bottom: 66px;
        transform: translate(0, 0);
    }

    .inputTask {
        height: 100%;
        width: 100%;
        border: none;
        resize: none;
        color: #535353;
        font-size: 12px;
        overflow: hidden;
    }

    .inputTask::placeholder{
        color: #CCBDE0;
    }

    .inputTask:focus {
        outline: none;
    }

    .closeButton {
        color: #C1C1C1;
        position: absolute;
        font-size: 8px;
        right: 8px;
        top: 4px;
        cursor: pointer;
        user-select: none;
    }

    .closeButton:hover {
        color: #380358;
    }

    .counterInput {
        color: #C1C1C1;
        position: absolute;
        font-size: 8px;
        right: 8px;
        bottom: 4px;
        user-select: none;
    }
`

export default NewTaskButton