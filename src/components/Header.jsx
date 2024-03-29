/* eslint-disable react/no-unescaped-entities */

import { Button, Navbar, TextInput} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'


const Header = () => {
    const path = useLocation().pathname;
    return (
        <Navbar className="border-b-2">
            <Link className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white" to='/'>
                <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg">
                    Taosif's
                </span>
                Blog
            </Link>
            <form>
                <TextInput type='text' placeholder="Search..." rightIcon={AiOutlineSearch} className="hidden lg:inline">

                </TextInput>
            </form>
            <Button className="w-12 h-10 lg:hidden" color="gray" pill>
                    <AiOutlineSearch></AiOutlineSearch>
            </Button>
            <div className="flex gap-2 md:order-2">
                <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
                        <FaMoon></FaMoon>
                </Button>
                <Link to='/signin'>
                    <Button  gradientDuoTone='purpleToBlue' outline>
                            Sign In
                    </Button>
                </Link>
                <Navbar.Toggle></Navbar.Toggle>
            </div>
                <Navbar.Collapse>
                    <Navbar.Link active={path === '/'} as={'div'}>
                        <Link className="font-bold text-xl" to='/'>
                            Home
                        </Link>
                    </Navbar.Link>
                    <Navbar.Link  active={path === '/about'}  as={'div'}>
                        <Link className="font-bold text-xl" to='/about'>
                            About
                        </Link>
                    </Navbar.Link>
                    <Navbar.Link active={path === '/projects'} as={'div'} >
                        <Link className="font-bold text-xl" to='/projects'>
                            Projects
                        </Link>
                    </Navbar.Link>
                </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;