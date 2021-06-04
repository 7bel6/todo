import { IoMdAddCircle } from 'react-icons/io';
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <h1>Todo</h1>
            </div>
            <div className="options">
                <IoMdAddCircle />
            </div>
        </nav>
    )
}

export default Navbar;
