import { getRequests } from "./dataAccess.js"
// Define export function requests.
export const Requests = () => {
    // Const requests will equal requests objects.
    const requests = getRequests()
    // Set variable html to equal the iteration of the request objects.
    // Html variable to output an li string property from request object.
    // .join forms htm string

    let html = `
        <ul>
            ${
                requests.map(convertRequestToListElement).join("")
            }
        </ul>
    `

    return html
}

const convertRequestToListElement = (request) => {
    let html = ""
    html += `<li> Description -  ${request.description}
    <button class="request_delete"
                id="request--${request.id}">
            
        </button> 
        
    </li>`

    return html
}