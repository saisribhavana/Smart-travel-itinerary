import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { Dialog, DialogContent, DialogDescription, DialogHeader } from "@/components/ui/dialog";
import { FaUser } from "react-icons/fa";
import { FaTimes } from 'react-icons/fa';


function Header() {
    const user = JSON.parse(localStorage.getItem("user"));
    const [openDialog, setOpenDialog] = useState(false);

    useEffect(() => {
        console.log(user);
    }, []);

    const login = useGoogleLogin({
        onSuccess: (codeResp) => GetUserProfile(codeResp),
        onError: (error) => console.log(error),
    });

    const GetUserProfile = async (tokenInfo) => {
        console.log("HERE", tokenInfo);
        axios
            .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
                headers: {
                    Authorization: `Bearer ${tokenInfo?.access_token}`,
                    Accept: "Application/json",
                },
            })
            .then((resp) => {
                console.log(resp);
                localStorage.setItem("user", JSON.stringify(resp.data));
                setOpenDialog(false);
                window.location.reload();
            });
    };

    return (
        <div className='p-2 shadow-sm flex justify-between items-center px-4' style={{ backgroundColor: '#008B8B' }}> {/* Reduced padding and left/right margin */}
            <a href='/'>
                <img src='/logo.jpg' height={20} width={180} alt="Logo" /> {/* Reduced logo width */}
            </a>
            <div>
                {user ? (
                    <div className='flex items-center gap-3'>
                        <a href='/create-trip'>
                            <Button variant='outline' className='rounded-full'
                                style={{ backgroundColor: '#B2DFDB', color: 'black' }}> {/* Optional: Smaller button text size */}
                                + Create Trip
                            </Button>
                        </a>
                        <a href='/my-trips'>
                            <Button variant='outline' className='rounded-full'
                                style={{ backgroundColor: '#B2DFDB', color: 'black' }}> {/* Optional: Smaller button text size */}
                                My Trips
                            </Button>
                        </a>
                        <Popover>
                            <PopoverTrigger className="flex items-center">
                                <FaUser className="h-6 w-6 cursor-pointer" /> {/* User icon only */}
                            </PopoverTrigger>
                            <PopoverContent style={{ backgroundColor: '#008B8B', padding: '10px' }}> {/* Light teal background */}
                                <h2
                                    className='cursor-pointer'
                                    onClick={() => {
                                        googleLogout();
                                        localStorage.clear();
                                        window.location.reload();
                                    }}
                                >
                                    Logout
                                </h2>
                            </PopoverContent>
                        </Popover>
                    </div>

                ) : (
                    <Button
                        onClick={() => setOpenDialog(true)}
                        style={{ backgroundColor: '#004D40', color: 'white' }} // Dark teal background
                        className="text-sm"
                    >
                        Sign In
                    </Button>
                )}
            </div>
            <Dialog open={openDialog} onOpenChange={() => setOpenDialog(false)}> {/* Ensure you have onOpenChange to close the dialog */}
                <DialogContent>
                    <DialogHeader>
                        {/* Close Button at the top right */}
                        <div className="flex justify-end">
                            <button
                                onClick={() => setOpenDialog(false)}
                                className="text-gray-500 hover:text-gray-700"
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    position: 'absolute',
                                    top: '10px',
                                    right: '10px',
                                }}
                            >
                                <FaTimes className='h-6 w-6' /> {/* Cross Icon */}
                            </button>
                        </div>

                        <DialogDescription style={{ backgroundColor: '#B2DFDB', padding: '20px' }}> {/* Light teal background */}
                            <img src='/logo.jpg' width={80} alt="Logo" /> {/* Reduced logo width */}
                            <h2 className='font-bold text-lg mt-5' style={{ color: 'black' }}> {/* Dark black color */}
                                Sign In With Google
                            </h2>
                            <p style={{ color: 'black' }}> {/* Dark black color */}
                                Sign in to the App with Google authentication securely
                            </p>

                            <Button onClick={login} className='w-full mt-4 flex gap-4 items-center'>
                                <FcGoogle className='h-6 w-6' />
                                Sign In With Google
                            </Button>
                        </DialogDescription>

                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default Header;
