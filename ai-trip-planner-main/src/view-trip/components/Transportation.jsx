import { FaPlane, FaTrain, FaBus } from "react-icons/fa"; // Icons for transportation modes

function Transportation({ trip }) {
    const transportation = trip?.tripData?.transportationOptions;

    // Check if transportation data is available
    if (!transportation || transportation.length === 0) {
        return <p className='text-gray-600'>Loading....</p>;
    }

    // Helper function to choose the appropriate icon based on the mode of transport
    const getTransportIcon = (mode) => {
        switch (mode) {
            case "Flight":
                return <FaPlane className='text-blue-500' size={24} />;
            case "Train":
                return <FaTrain className='text-green-500' size={24} />;
            case "Bus":
                return <FaBus className='text-red-500' size={24} />;
            default:
                return null;
        }
    };

    // Extract source and destination from the first transportation option
    const { sourceLocation, destinationLocation } = transportation[0];

    return (
        <div className='transportation-section my-8 p-4 bg-teal-500 rounded-lg shadow-md'>
            <h2 className='text-2xl font-semibold mb-4'>Travel Options</h2>
            {/* Source and Destination Information */}
            <div className='text-lg text-gray-700 mb-4'>
                <p>
                    <strong>From:</strong> <span className='text-black-500'>{sourceLocation}</span>
                </p>
                <p>
                    <strong>To:</strong> <span className='text-black-500'>{destinationLocation}</span>
                </p>
            </div>
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {transportation.map((option, index) => (
                    <div key={index} className='flex flex-col border border-gray-300 p-6 rounded-lg shadow-lg transition-transform hover:shadow-xl'>
                        <div className='flex items-center mb-4'>
                            {getTransportIcon(option.mode)}
                            <h3 className='text-lg font-semibold ml-2'>{option.mode}</h3>
                            <div className='flex-1'></div>
                            {option.bookingUrl && (
                                <p>
                                    <a
                                        style={{ textDecoration: "none" }}
                                        href={option.bookingUrl}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='text-lg font-semibold ml-auto text-blue-500 underline hover:text-blue-700'
                                    >
                                        Book Now
                                    </a>
                                </p>
                            )}
                        </div>
                        <div className='text-sm text-black-600'>
                            <p>
                                <strong>Distance:</strong> <span className='text-black-500'>{option.distance}</span>
                            </p>
                            <p>
                                <strong>Duration:</strong> <span className='text-black-500'>{option.duration}</span>
                            </p>
                            <p>
                                <strong>Cost:</strong> <span className='text-black-500'>{option.cost}</span>
                            </p>
                            <p>
                                <strong>Carrier:</strong> <span className='text-black-500'>{option.carrierName}</span>
                            </p>
                            <p>
                                <strong>Departure Time:</strong> <span className='text-black-500'>{option.departureTime}</span>
                            </p>
                            <br />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Transportation;
