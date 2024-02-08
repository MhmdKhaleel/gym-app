import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewUser = () => {
    const [data, setData] = new useState([])
    const getData = () => {
        axios.get("http://localhost:1001/api/gym/view").then(
            (response) => {
                setData(response.data)
            }
        )
    }
    useEffect(() => { getData() }, [])
    return (
        <div>

            <ApartNavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Weight</th>
                                    <th scope="col">Date of Joining</th>
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
                                                <td>{value.weight}</td>
                                                <td>{value.date}</td>
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
    )
}

export default ViewUser