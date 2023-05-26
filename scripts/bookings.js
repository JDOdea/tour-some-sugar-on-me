import { getBands, getVenues, getBookings } from "./database.js";
import { Bands } from "./bands.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("booking")) {
            const [,bookingId] = itemClicked.id.split("--")

            for (const booking of bookings) {
                if (booking.id === parseInt(bookingId)) {
                    const bookingBand = findBand(booking)
                    window.alert(`
                    ${bookingBand.name}
                    ${bookingBand.genre}
                    Formed in ${bookingBand.established}
                    ${bookingBand.numberOfMembers} band members
                    `)
                }
            }
        }
    }
)



const venues = getVenues()
const bands = getBands()
const bookings = getBookings()
const bandIds = Bands()




//  Function to find the band of a booking
export const findBand = (booking) => {
    let showBand = null

    for (const band of bands) {
        if (booking.bandId === band.id) {
            showBand = band
        }
    }

    return showBand
}

//  Function to find the venue of a booking
export const findVenue = (booking) => {
    let showVenue = null

    for (const venue of venues) {
        if(booking.venueId === venue.id) {
            showVenue = venue
        }
    }

    return showVenue
}

/* 
    Define a function that shows which band(s) are playing at each venue every night.
    Return string in the format of 
        "Rocket Pumpkins are playing at The Cellar Moss on 12/13/2023"
*/
export const Bookings = () => {
    let html = "<ul>\n"

    for (const booking of bookings) {
        const band = findBand(booking)
        const venue = findVenue(booking)

        html += `\t<li id="booking--${booking.id}">${band.name} are playing at ${venue.name} on ${booking.date}</li>\n`
    }

    html += "</ul>"

    return html
}
