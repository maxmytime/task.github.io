// import { useState } from 'react'
import PropTypes from 'prop-types';
import './main.css'
import './task.sass'

TaskProgressbar.propTypes = {
    content:         PropTypes.string.isRequired,
    completed:       PropTypes.bool.isRequired,
    // id:              PropTypes.string.isRequired,
}

function TaskProgressbar({ content, completed}) {

    return (
        <>
            <div className="task-item" data-id={'777777777'}>

                <form action="#" className="">
                    <div className="form-container justify-content-space-between mb-30px">
                        {/* <input className="mr-10px mt-5px" type="checkbox" checked={completed} onChange={() => setTaskStatus(completed, id)} name="ok" id="" />
                        <div className={!completed ? 'task' : 'task task__mission-accomplished'} contentEditable={!completed} suppressContentEditableWarning={true}>{content}</div>
                        <div className="task__del ml-10px" onClick={() => delTask(id)}>&#215;</div> */}
                        <div>{content}</div>
                        <div>{completed}</div>
                    </div>
                </form>

            </div>
        </>
    )

}

export default TaskProgressbar
