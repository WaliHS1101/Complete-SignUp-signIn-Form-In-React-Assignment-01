import React, { useState } from 'react'
import Users from "./Users"
import "./SignUp.css"

function SignUp() {

    const [User, setUser] = useState(Users);

    const [SignUpName, setSignUpName] = useState("");
    const [SignUpEmail, setSignUpEmail] = useState("");
    const [SignUpPwd, setSignUpPwd] = useState("");
    const [SignUpImage, setSignUpImage] = useState("");

    const [SignUpEmailOrUserName, setSignUpEmailOrUserName] = useState("");
    const [SignInSignUpPwd, setSignInSignUpPwd] = useState("");

    const [LognInImage, setLognInImage] = useState("https://winkeyecare.com/wp-content/uploads/2013/03/Empty-Profile-Picture-450x450.jpg");
    const [LogInUserName, setLogInUserName] = useState("User Name")
    const [LogInUserEmail, setLogInUserEmail] = useState("Email")


    function SignUp(e) {

        e.preventDefault();

        if (SignUpName === "" || SignUpEmail === "" || SignUpPwd === "" || SignUpImage === "") {
            alert("Please Fill the form")
        }

        else {

            const UserFoundEmail = User.find((user) => user.UserEmail === SignUpEmail)
            const UserFoundName = User.find((user) => user.UserName === SignUpName)

            if (UserFoundEmail) {
                alert("Email already in use")
            }

            else if (UserFoundName) {
                alert("UserName already in use")
            }

            else {
                const UserData = { UserName: SignUpName, UserEmail: SignUpEmail, UserPwd: SignUpPwd, Profile: SignUpImage }
                setUser([...User, UserData])
                console.log(User)
            }
        }
    }

    function SignIn(e) {

        e.preventDefault();

        if (SignUpEmailOrUserName === "" || SignInSignUpPwd === "") {
            alert("Fill the Input")
        }

        else {
            const UserFound = User.find((user) => user.UserEmail === SignUpEmailOrUserName || user.UserName === SignUpEmailOrUserName && user.UserPwd === SignInSignUpPwd && user.Profile);

            if (!UserFound) {
                alert("Id Not Found")
            }

            else {
                setLogInUserName(UserFound.UserName)
                setLognInImage(UserFound.Profile)
                setLogInUserEmail(UserFound.UserEmail)
                alert("Log In")
            }
        }
    }

    return (
        <>

            <div className="container d-flex justify-content-center ">

                <div className="" >
                    <center>
                        <form action="" onSubmit={SignUp} className='m-5 border border-dark p-2 rounded' style={{ width: "18rem" }}>

                            <h1>SignUp</h1>

                            <label htmlFor="SignUpName">UserName</label>
                            <input
                                type="text"
                                onChange={(e) => { setSignUpName(e.target.value) }}
                                className='form-control border border-dark mb-3'
                                placeholder='UserName' />

                            <label htmlFor="SignUpEmail">Email</label>
                            <input
                                type="email"
                                onChange={(e) => { setSignUpEmail(e.target.value) }}
                                className='form-control border border-dark mb-3'
                                placeholder='Email' />

                            <label htmlFor="SignUpPassword">Password</label>
                            <input
                                type="password"
                                onChange={(e) => { setSignUpPwd(e.target.value) }}
                                className='form-control border border-dark mb-4'
                                placeholder='Password' />

                            <label htmlFor="SignUpImage">Profile Image</label>
                            <input
                                type="text"
                                onChange={(e) => { setSignUpImage(e.target.value) }}
                                className='form-control border border-dark mb-4'
                                placeholder='Password' />

                            <input type="submit" className='btn btn-success' />
                        </form>
                    </center>
                </div >

                <div className="" >
                    <center>
                        <form action="" onSubmit={SignIn} className='m-5 border border-dark p-2 rounded' style={{ width: "18rem" }}>

                            <h1>SignIn</h1>

                            <label htmlFor="UserName">Email or UserName</label>
                            <input
                                type="text"
                                onChange={(e) => { setSignUpEmailOrUserName(e.target.value) }}
                                className='form-control border border-dark mb-3'
                                placeholder='Email' />

                            <label htmlFor="UserName">Password</label>
                            <input
                                type="password"
                                onChange={(e) => { setSignInSignUpPwd(e.target.value) }}
                                className='form-control border border-dark mb-4'
                                placeholder='Password' />

                            <input type="submit" className='btn btn-primary' />
                        </form>
                    </center>
                </div >
            </div >

            <div className="container">
                <div className="row">

                    <div className="col-6">
                        {
                            User.map((items, index) => {
                                return (
                                    <>
                                        <center>
                                            <div className="border border-1 border-primary">
                                                <h1>All Users</h1>
                                                <div className='border border-1 border-danger'>
                                                    <div>
                                                        <h4>{User[index].UserName}</h4>
                                                        <h4>{User[index].UserEmail}</h4>
                                                        <h4>{User[index].UserPwd}</h4>
                                                        <img src={User[index].Profile} className='profile' alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </center>
                                    </>
                                )
                            })
                        }
                    </div>

                    <div className="col-6">
                        <center>
                            <div className="border border-1 border-primary">
                                <h1>LogIn User</h1>
                                <div className='border border-1 border-danger'>
                                    <div>
                                        <h4>{LogInUserName}</h4>
                                        <h4>{LogInUserEmail}</h4>
                                        <img src={LognInImage} className='profile' alt="" />
                                    </div>
                                </div>
                            </div>
                        </center>
                    </div>
                </div>
            </div >
        </>
    )
}

export default SignUp

