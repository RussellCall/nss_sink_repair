import { Requests } from "./Requests.js"
import { ServiceForm } from "./ServiceForm.js"


//Define the function that will be passed to the map() method.
//Convert each service request object into HTML representations.
export const SinkRepair = () => {
    return `
    <h1>Maude and Merle's Sink Repair</h1>
    <section class="serviceForm">
        ${ServiceForm()}
    </section>

    <section class="serviceRequests">
        <h2>Service Requests</h2>
        ${Requests()}
    </section>
    `

}