import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuComponent extends Component {
    render() {
        return (
            <nav className="flex items-center justify-between px-6 py-4 shadow-sm" style={{ backgroundColor: "#e3f2fd" }}>
                <div className="flex items-center space-x-8">

                    {/* Menú de navegación */}
                    <ul className="flex items-center space-x-6 m-0 p-0 list-none">
                        <li>
                            <NavLink className={({ isActive }) => `text-sm font-medium ${isActive ? 'text-blue-700 font-bold' : 'text-gray-700 hover:text-blue-600'}`} to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => `text-sm font-medium ${isActive ? 'text-blue-700 font-bold' : 'text-gray-700 hover:text-blue-600'}`} to="/create">
                                Crear
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => `text-sm font-medium ${isActive ? 'text-blue-700 font-bold' : 'text-gray-700 hover:text-blue-600'}`} to="/hospitales">
                                Hospitales
                            </NavLink>
                        </li>

                        {/* Dropdown simple con hover */}
                        <li className="relative group">
                            <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 flex items-center">
                                Dropdown
                            </a>
                            <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-md py-2 mt-1 w-44 z-50">
                                <li><a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">Action</a></li>
                                <li><a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">Another action</a></li>
                                <li><hr className="border-t border-gray-200 my-1"/></li>
                                <li><a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">Something else here</a></li>
                            </ul>
                        </li>

                        <li>
                            <span className="text-sm font-medium text-gray-400 cursor-not-allowed">Disabled</span>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}