import React from 'react'
import { Link } from 'react-router-dom'

const GymNavBar = () => {
    return (
        <div>


            <nav className="navbar navbar-expand-lg bg-info">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Gym App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Add User</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/view">View User</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/search">Search User</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default GymNavBar