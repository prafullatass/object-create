// Obtain a reference to the patient list container
const patientList = document.querySelector("#patient-list")

/*
    Create an in-memory DOM Node that will contain all elements
    which will display information about Juan
*/
const patientElementContainer = document.createDocumentFragment()

// Create an article element to contain all of the properties
const patient = document.createElement("article")

for (let key in JuanRodriguezPatient) { /* eslint no-undef: "off" */

    // The container element for each property
    const property = document.createElement("section")

    // Span element to hold the name of the property
    const keyElement = document.createElement("key")
    keyElement.textContent = `${key.charAt(0).toLocaleUpperCase() + key.slice(1)}`

    // Span element to hold the value of the property
    const valueElement = document.createElement("value")
    valueElement.textContent = `${JuanRodriguezPatient[key]}`

    // Add the two spans to the property <div>
    property.appendChild(keyElement)
    property.appendChild(valueElement)

    // Add the property <div> to the patient <div>
    patient.appendChild(property)
}

// Attach the `article` element to the document fragment
patientElementContainer.appendChild(patient)

// Add the document fragment to the DOM
patientList.appendChild(patientElementContainer)