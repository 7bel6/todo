import { IoMdRemoveCircleOutline } from 'react-icons/io';
const Taskshow = () => {
    return (
        <div className="task-card">
            <div className="task-header">
                <h3>Task Title</h3>
                <i><IoMdRemoveCircleOutline /></i>
            </div>
            <div className="task-body">
                <p className="task-p">Some Text About Task if nessessary</p>
                <span className="task-date">12/7/2020</span>
            </div>
        </div>
    )
}

export default Taskshow
