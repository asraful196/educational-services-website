import React from 'react';
const SignIn = () => {
    return (
        <>
            <form className="container w-50">
                <h4 className="text-center">Please Registration now</h4>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Valid Email"></input>
                    <div id="emailHelp" class ="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label" >Password</label>
                    <input type="password" className="form-control" placeholder="Your Password" id="exampleInputPassword1"></input>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                    <label class ="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
};

export default SignIn;