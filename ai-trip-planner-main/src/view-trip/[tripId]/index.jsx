import { db } from "@/service/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import InfoSection from "../components/InfoSection";
import Hotels from "../components/Hotels";
import PlacesToVisit from "../components/PlacesToVisit";
import Footer from "../components/Footer";
import Transportation from "../components/Transportation";

function Viewtrip() {
    const { tripId } = useParams();
    const [trip, setTrip] = useState([]);
    useEffect(() => {
        tripId && GetTripData();
    }, [tripId]);

    /**
     * Used to get Trip Information from Firebase
     */
    const GetTripData = async () => {
        const docRef = doc(db, "AITrips", tripId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Dodcument:", docSnap.data());
            setTrip(docSnap.data());
        } else {
            console.log("No Such Document");
            toast("No trip Found!");
        }
    };

    const backgroundImageUrl = '/pic4.jpg'; 

    return (
        <div 
            className='p-10 md:px-20 lg:px-44 xl:px-56'
            style={{
                backgroundImage: `url(${backgroundImageUrl})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
            }}
        >
        
            {/* Information Section  */}
            <InfoSection trip={trip} />
            {/* Recommended Hotels  */}
            <Transportation trip={trip} />
            <Hotels trip={trip} />
            {/* Daily Plan  */}
            <PlacesToVisit trip={trip} />
            <Footer trip={trip} />
        </div>
    );
}

export default Viewtrip;
