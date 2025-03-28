import img from "../assets/logo.png"
import add from "../assets/create.jpg"
import { Link, useNavigate} from "react-router-dom";


const NavBar = () => {
    const navigate = useNavigate()

    const handleLogout = (e) => {
        e.preventDefault()
        fetch("/auth/logout", {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => {
            if(res.ok) {
                alert("Logout Successful!")
                navigate("/")
            }
        })
        .catch(err => console.error("Error Data: ", + err))
    };

    return (
        <nav className="bg-cyan-900">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                    <span className="absolute -inset-0.5"></span>
                    <span className="sr-only">Open main menu</span>
                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                    <img className="h-8 w-auto" src={img} alt="Your Company" />
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                            <Link to="/tasks" className="text-white hover:bg-cyan-800 rounded-md px-3 py-2 text-sm font-medium">Tasks</Link>
                            <Link to="/tasks" className="text-white hover:bg-cyan-800  rounded-md px-3 py-2 text-sm font-medium">Calendar</Link>
                        </div>
                    </div>
                </div>
                {/* notifications/profile */}
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <Link to='/task-form'>
                    <button type="button" className="relative rounded-full  p-1 text-white hover:bg-cyan-800 focus:outline-none  focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Create Task</span>
                    <img 
                    className="h-8 w-8 rounded-full" 
                    src={add} 
                    alt="add"
                    />
                    </button>
                    </Link>

                    <div className="relative ml-3">
                        <div>
                            <button 
                            type="button" 
                            className="relative flex rounded-full  text-sm hover:bg-cyan-800 focus:outline-none  focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" 
                            id="user-menu-button" 
                            aria-expanded="false" 
                            aria-haspopup="true"
                            onClick={handleLogout}
                            >
                            <span className="absolute -inset-1.5"></span>
                            <span className="sr-only">Open user menu</span>
                            <img 
                            className="h-8 w-8 rounded-full" 
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                            alt=""
                            />
                            <Link
                            to="/" 
                            className="text-white hover:bg-cyan-800 rounded-md px-3 py-2 text-sm font-medium"
                            >
                                Sign out
                            </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* mobile view */}
        <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
                <Link to="/tasks" className="text-white hover:bg-cyan-800 rounded-md px-3 py-2 text-sm font-medium">Tasks</Link>
                <Link to="/tasks" className="text-white hover:bg-cyan-800  rounded-md px-3 py-2 text-sm font-medium">Calendar</Link>
            </div>
        </div>
        </nav>
    )
}

export default NavBar;