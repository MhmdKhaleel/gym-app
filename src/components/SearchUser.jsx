import axios from 'axios'
import React, { useState } from 'react'
import GymNavBar from './GymNavBar'

const SearchUser = () => {
    const [data, setData] = new useState([])
    const [input, searchInput] = new useState({ name: '' })

    const getData = () => {
        axios.get("http://localhost:1001/api/gym/view").then(
            (response) => {
                setData(response.data)
            }
        )
    }

    const inputHand = (event) => {
        searchInput({ ...input, [event.target.name]: event.target.value })
    }

    const searchValue = () => {
        axios.post("http://localhost:1001/api/gym/search", input).then(
            (response) => {
                setData(response.data)
            }
        )
    }

    return (
        <div>

            <GymNavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-4">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Enter Name</label>
                                <input type="text" className="form-control" name='name' value={input.name} onChange={inputHand} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={searchValue}>Search</button>
                            </div>
                        </div>

                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">Age</th>
                                            <th scope="col">Date of Joining</th>
                                            <th scope="col">Weight</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            data.map(
                                                (value, index) => {
                                                    return <tr>
                                                        <th scope="row">{value.name}</th>
                                                        <td>{value.address}</td>
                                                        <td>{value.age}</td>
                                                        <td>{value.date}</td>
                                                        <td>{value.weight}</td>
                                                    </tr>
                                                }
                                            )
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default SearchUser