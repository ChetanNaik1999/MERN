import React from'react';
import logo from "../images/logo1.jpg";
import logo3 from "../images/logo3.jpg";
import logo4 from "../images/logo4.jpg";
import { NavLink } from 'react-router-dom';
const Home=()=>{
return (
<>
    <div className="container-fluid bg-light home-container">
        <div className="container-section">
            <div className="imgDiv2">
                <img src={logo} alt="logo" />
            </div>
            <h1>Welcome To CHETANTECHNICALBABA</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, officiis? Explicabo possimus hic
                doloremque laboriosam? Libero amet itaque quos laudantium.</p>
            <button className="btn btn-primary mx-1">
                Submit
            </button>
            <button className="btn btn-danger">Log In</button>
        </div>
    </div>
    <ul class="list-group">
        <li class="list-group-item">A simple default list group item</li>

        <li class="list-group-item list-group-item-primary">A simple primary list group item</li>
        <li class="list-group-item list-group-item-secondary">A simple secondary list group item</li>
        <li class="list-group-item list-group-item-success">A simple success list group item</li>
        <li class="list-group-item list-group-item-danger">A simple danger list group item</li>
        <li class="list-group-item list-group-item-warning">A simple warning list group item</li>
        <li class="list-group-item list-group-item-info">A simple info list group item</li>
        <li class="list-group-item list-group-item-light">A simple light list group item</li>
        <li class="list-group-item list-group-item-dark">A simple dark list group item</li>
    </ul>

    <table class="table table-dark my-2">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
            </tr>
        </tbody>
    </table>
</>
)
}

export default Home;