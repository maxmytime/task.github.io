// import { React, useState } from 'react'
import { useState } from 'react';
import Task from './Task.jsx'
import './main.css'
import './app.sass'

function App() {
    const [project, updateProject] = useState({title: 'Test',
                                               tasksList: [
                                                    {content: 'Купить хлеб', completed: true, id: '1'},
                                                    {content: 'Купить хлеб1', completed: false, id: '2'}
                                               ]
                                             });

    function genID() {
        const min = 10;
        const max = 10000000;
        return String(Math.round(Math.random() * (max - min) + min));
    }

    function addTask(e) {
        e.preventDefault();

        let newProject = {...project, tasksList: [
            ...project.tasksList, {content: '', completed: false, id: genID()}
        ]};

        updateProject(newProject);
    }

    function delTask(id) {
        let newProject = {...project, tasksList: [
            ...project.tasksList.filter((task) => task.id != id)
        ]};

        updateProject(newProject);
    }

    function setTaskStatus(completed, id) {
        let newProject = {...project, tasksList: [
            ...project.tasksList.map(task => task.id != id ? task : {
                ...task, completed: !completed
            })
        ]};

        updateProject(newProject);
	}

    function addProjectName(e) {
        let title = e.target.textContent;
        let newProject = project;

        newProject.title = title;

        updateProject(newProject);
    }

    let title = project.title;

    let tasksList = project.tasksList.map((task) => <Task
                                            content={task.content}
                                            completed={task.completed}
                                            id={task.id}
                                            key={task.id}
                                            delTask={delTask}
                                            setTaskStatus={setTaskStatus}
                                        />);

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <h1 className="title title-h1 text-center task-title"
                            contentEditable="true"
                            suppressContentEditableWarning="true"
                            onInput={addProjectName}>{title}</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-6">
                        <div className="task-list js-task-list">
                            {tasksList}
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-6 text-right js-btn-add-task">
                        <a href="#" className="button js-button-add-task" onClick={addTask}>+ Задача</a>
                    </div>
                </div>
            </div>
        </>
    )

}

export default App
