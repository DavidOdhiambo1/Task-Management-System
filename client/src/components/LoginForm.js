import { useState } from "react"
import img  from "../assets/logo.png"
import { Link, useNavigate } from "react-router-dom"


const LoginForm = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then((res) => {
            if(res.ok) {
                res.json()
                navigate('/tasks')
            }
            if(res.status === 401){
                alert("Incorrect Credentials")
            } 
        })
        .catch((error) => console.error("Error Data: ", +error))
    }

    return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img className="mx-auto h-14 w-auto" src={img} alt="Your Company" />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account    
            </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                    <div className="mt-2">
                    <input 
                    id="email" 
                    name="email" 
                    type="email" 
                    autoComplete="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        <div className="text-sm">
                            <Link 
                            to="/auth/login" 
                            className="font-semibold text-indigo-600 hover:text-indigo-500"
                            >
                                Forgot password?</Link>
                        </div>
                    </div>
                    <div className="mt-2">
                        <input 
                        id="password" 
                        name="password" 
                        type="password" 
                        autoComplete="current-password"
                        value={formData.password}
                        onChange={handleChange} 
                        required 
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                </div>
                <div>
                    <button type="submit" 
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Sign in
                    </button>
                </div>
            </form>
            <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <Link to="/auth/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Sign up</Link>
            </p>
        </div>
    </div> 
    )
}
export default LoginForm