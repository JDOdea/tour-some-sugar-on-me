import { findVenue } from "./bookings.js";
import { getBands, getBookings } from "./database.js";

//Each band can perform 1 or 2 acts every day
    //Record the band name, number of members, musical genre, and year formed

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("band")) {
            const [,bandId] = itemClicked.id.split("--")

            for (const band of bands) {
                if (band.id === parseInt(bandId)) {
                    window.alert(`${band.name}\n${band.numberOfMembers} members\nGenre: ${band.genre}\nFormed in ${band.established}\n${bandBookings(band)}
                    `)
                }
            }
        }
    }
)


const bands = getBands()
const bookings = getBookings()


//Define a function that gets all bookings for specific band and returns an html string
const bandBookings = (band) => {
    let html = ""

    for (const booking of bookings) {
        if (booking.bandId === band.id) {
            const venue = findVenue(booking)

            html += `${band.name} are playing at ${venue.name} on ${booking.date}\n`
        }
    }

    return html
}

export const Bands = () => {
    let html = "<ul>"

    for (const band of bands) {
        html += `<li id="band--${band.id}">${band.name}</li>`
    }

    html += "</ul>"

    return html
}