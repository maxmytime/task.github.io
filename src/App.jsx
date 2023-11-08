// import { React, useState } from 'react'
import { useState } from 'react';
import TaskCheckbox from './TaskCheckbox.jsx'
import TaskProgressbar from './TaskProgressbar.jsx'
import './main.css'
import './app.sass'

function App() {
    const [project, updateProject] = useState(
        {title: 'Test',
        description: 'Это первое тестовое описание проекта',
        tasksList: [
            {type: 'checkbox', content: 'Купить хлеб', completed: true, id: '1'},
            {type: 'checkbox', content: 'Купить хлеб1', completed: false, id: '2'},
            {type: 'progressbar', content: 'Купить хлеб1', completed: false, id: '3'}
            ]
        }
    );

    // Типы задач
    // Генерация ID задачи
    function genID() {
        const min = 10;
        const max = 10000000;
        return String(Math.round(Math.random() * (max - min) + min));
    }

    // Добавить задачу
    function addTask(e) {
        e.preventDefault();

        let newProject = {...project, tasksList: [
                            ...project.tasksList, {content: '', completed: false, id: genID()}
                        ]};

        updateProject(newProject);
    }

    // Удалить задачу
    function delTask(id) {
        let newProject = {...project, tasksList: [
                            ...project.tasksList.filter((task) => task.id != id)
                        ]};

        updateProject(newProject);
    }

    // Изменить статус задачи выполнена/в работе
    function setTaskStatus(completed, id) {
        let newProject = {...project, tasksList: [
                            ...project.tasksList.map(task => task.id != id ? task : {
                              ...task, completed: !completed
                            })
                        ]};

        updateProject(newProject);
    }

    // Добавить имя проекта
    function addProjectName(e) {
        let title = e.target.textContent;
        let newProject = project;

        newProject.title = title;

        updateProject(newProject);
    }

    let tasksList = project.tasksList.map((task) => <TaskCheckbox
                                            content={task.content}
                                            completed={task.completed}
                                            id={task.id}
                                            key={task.id}
                                            delTask={delTask}
                                            setTaskStatus={setTaskStatus}
                                        />);

    let testTask = project.tasksList[2];

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <h1 className="title title-h1 text-center task-title"
                            contentEditable="true"
                            suppressContentEditableWarning="true"
                            onInput={addProjectName}>{project.title}
                        </h1>
                        <p className='title mb-30px text-center'>{project.description}</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-6">
                        <div className="task-list js-task-list">
                            {tasksList}
                        </div>
                        <div className='task-list'>
                        <TaskProgressbar
                            content={testTask.content}
                            completed={testTask.completed}
                            // id={testTask.id}
                            key={testTask.id}
                        />
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
