import React from 'react';
import { Button } from '../ui/button';
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

function Hero() {
  const backgroundImageUrl = '/pic6.jpg';

  // Google Login setup
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => GetUserProfile(tokenResponse),
    onError: (error) => console.log(error),
  });

  const GetUserProfile = async (tokenInfo) => {
    axios
      .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo.access_token}`, {
        headers: {
          Authorization: `Bearer ${tokenInfo.access_token}`,
          Accept: 'application/json',
        },
      })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem('user', JSON.stringify(response.data));
        window.location.reload(); // Refresh the page after successful login
      })
      .catch((error) => console.error('Error fetching user profile:', error));
  };

  return (
    <div 
      className='p-10 md:px-20 lg:px-44 xl:px-56'
      style={{
        backgroundImage: `url(${backgroundImageUrl})`, // Use the relative path to the image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        alignItems:'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        textAlign: 'center'
      }}
    >
      <h1 className='font-extrabold text-[50px] text-center mt-16'>
        <span className='text-white'>Plan Your Dream Journey with Itinera:</span> 
        <span className='text-black'> Tailored Itineraries Just for You!!!!</span>
      </h1>
      <p className='text-2xl text-white font-bold text-center'>Experience seamless travel planning with a personal touch.</p>

      {/* Button triggering Google Sign-In */}
      <Button 
        onClick={login}
        style={{ backgroundColor: '#004D40', color: 'white', margin: '20px 0' }} // Dark teal background
      >
        Get Started, It's Free
      </Button>
    </div>
  );
}

export default Hero;
