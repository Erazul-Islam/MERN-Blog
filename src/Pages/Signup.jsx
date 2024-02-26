/* eslint-disable react/no-unescaped-entities */
import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="min-h-screen mt-20">
            <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
                <div className="flex-1">
                    <Link className="font-bold dark:text-white" to='/'>
                        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg">
                            Taosif's
                        </span>
                        Blog
                    </Link>
                    <p className="text-sm mt-5">
                        This is a demo project. You can sign up with your email and password or with Google
                    </p>
                </div>
                <div className="flex-1">
                    <form className="flex flex-col gap-4">
                            <div>
                                <Label value="Your username"></Label>
                                <TextInput type="text" placeholder="Username" id="username" ></TextInput>
                            </div>
                            <div>
                                <Label value="Your email"></Label>
                                <TextInput type="email" placeholder="email@gmail.com" id="email" ></TextInput>
                            </div>
                            <div>
                                <Label value="Your password"></Label>
                                <TextInput type="password" placeholder="Password" id="password" ></TextInput>
                            </div>
                            <Button gradientDuoTone='purpleToPink' type="submit" >
                            {/* disabled={} */}
                            Sign Up
                                    {/* todo */}
                            </Button>
                    </form>
                    <div className="flex gap-2 text-sm mt-5">
                        <span>Have an account?</span>
                        <Link to='/sign-in' className="text-blue-500">
                            Sign In
                        </Link>

                    </div>
                    {/* todo */}
                </div>
            </div>
        </div>
    );
};

export default Signup;