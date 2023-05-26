import { Bookings, findBand, findVenue } from "./bookings.js";
import { getBookings, getVenues } from "./database.js";

//Each venue can accomodate 2 bands per night
    //Record the name of the venue, its address, square footage, and maximum occupancy

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("venue")) {
            const [,venueId] = itemClicked.id.split("--")

            for (const venue of venues) {
                if (venue.id === parseInt(venueId)) {
                    window.alert(`${venue.name}\n${venue.address}\n${venue.size} square footage\nMax Occupancy: ${venue.maxOccupancy} persons\n${venueBookings(venue)}
                    `)
                }
            }
        }
    }
)


const venues = getVenues()
const bookings = getBookings()


//Define a function that gets all bookings at specific venue and returns an html string
const venueBookings = (venue) => {
    let html = ""

    for (const booking of bookings) {
        if (booking.venueId === venue.id) {
            const band = findBand(booking)

            html += `${band.name} are playing at ${venue.name} on ${booking.date}\n`
        }
    }

    return html
}



export const Venues = () => {
    let html = "<ul>"

    for (const venue of venues) {
        html += `<li id="venue--${venue.id}">${venue.name}</li>`
    }

    html += "</ul>"

    return html
}