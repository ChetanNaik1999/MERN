import React from'react';

const Contact=()=>{
    return (
       <>
        <div className="container d-block m-auto h-auto">
    <h1 className="text-center text-warning my-2">Contact Form</h1>
    <form className="form">
      <div className="form-group d-block mb-3">
        <label for="exampleInputEmail1">Name:</label>
        <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
          placeholder="Enter Your Name"/>

      </div>

      <div className="form-group mb-3">
        <label for="exampleInputEmail1">Address:</label>
        <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
          placeholder="Enter Your Address"/>

      </div>
      <div className="form-group mb-3">
        <label for="exampleInputEmail1">Email address:</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
          placeholder="Enter email"/>
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group mb-3">
        <label for="exampleInputPassword1">Password:</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
      </div>
      <div className="form-check mb-3">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
        <label className="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="button" className="btn btn-danger btn-lg my-4">Submit</button>
    </form>
  </div>

       </>
    )
}

export default Contact;