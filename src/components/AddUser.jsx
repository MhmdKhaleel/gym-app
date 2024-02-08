import React, { useState } from 'react'
import GymNavBar from './GymNavBar'
import axios from 'axios'

const AddUser = () => {
    const [input, addInput] = new useState(
        {
            name: "",
            address: "",
            age: "",
            weight: "",
            date: ""
        }
    )
    const inputHandler = (event) => {
        addInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValues = () => {
        console.log(input)
        axios.post("http://localhost:1001/api/gym/add", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {

                    alert("Succesfully Added")

                }
                else {

                    alert("Failed")

                }
            }
        )
    }
    return (
        <div>
            <GymNavBar />

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-4">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Address</label>
                                <input type="text" className="form-control" name='address' value={input.address} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Age</label>
                                <input type="text" className="form-control" name='age' value={input.age} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Weight</label>
                                <input type="text" className="form-control" name='weight' value={input.weight} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Date Of Joining</label>
                                <input type="date" className="form-control" name='date' value={input.date} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-success" onClick={readValues}>Submit</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddUser