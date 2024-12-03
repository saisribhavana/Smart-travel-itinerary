export const SelectTravelesList=[
    {
        id:1,
        title:'Just Me',
        desc:'A sole traveles in exploration',
        icon:'✈️',
        people:'1'
    },
    {
        id:2,
        title:'A Couple',
        desc:'Two traveles in tandem',
        icon:'🥂',
        people:'2 People'
    },
    {
        id:3,
        title:'Family',
        desc:'A group of fun loving adv',
        icon:'🏡',
        people:'3 to 5 People'
    },
    {
        id:4,
        title:'Friends',
        desc:'A bunch of thrill-seekes',
        icon:'⛵',
        people:'5 to 10 People'
    },
]


export const SelectBudgetOptions=[
    {
        id:1,
        title:'Cheap',
        desc:'Stay conscious of costs',
        icon:'💵',
    },
    {
        id:2,
        title:'Moderate',
        desc:'Keep cost on the average side',
        icon:'💰',
    },
    {
        id:3,
        title:'Luxury',
        desc:'Dont worry about cost',
        icon:'💸',
    },
]


// export const AI_PROMPT='Generate Travel Plan for Location : {location}, for {totalDays} Days for {traveler} with a {budget} budget, give me Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and  suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates,Place address, ticket Pricing, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format.'

export const AI_PROMPT = `
Generate Travel Plan from Source Location: {sourceLocation} to Destination: {location}, for {totalDays} Days for {traveler} with a {budget} budget. 
- Provide options for transportation (train, bus, flight) from {sourceLocation} to {location}, including distance, duration, cost, carrieName, departureTime, bookingUrl, source and destination locations. 
- Give me a Hotels options list with HotelName, Hotel address, Price, hotel image URL, geo coordinates, rating, and descriptions. 
- Suggest an itinerary as an array with placeName, Place Details, Place Image URL, Geo Coordinates, Place address, ticket pricing, and time to travel between each location for {totalDays} days with a daily plan, including the best time to visit.
- Return the result in JSON format.
`;