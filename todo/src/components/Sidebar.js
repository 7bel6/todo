import { IoMdApps, IoMdToday, IoMdCalendar, IoMdCodeWorking, IoMdPaperPlane } from 'react-icons/io';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <ul>
                <li><span><i><IoMdApps /></i>All Tasks</span></li>
                <li><span><i><IoMdToday /></i>Today</span></li>
                <li><span><i><IoMdCalendar /></i>Week</span></li>
                <li><span><i><IoMdCodeWorking /></i>Projects</span></li>
                <li><span><i><IoMdPaperPlane /></i>Progress</span></li>
            </ul>
        </aside>
    )
}

export default Sidebar
