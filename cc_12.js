// Task 1 - Created Revenue Metric Card

document.addEventListener("DOMContentLoaded", () => {
    const dashboardById = document.getElementById("dashboard") ;                // Using getElementById to obtain the dashboard container
    const dashboardByQuery = document.querySelector("#dashboard") ;             // Using querySelector to obtain the dashboard container

    console.log(dashboardById === dashboardByQuery) ;                           // Making sure that the selections are to the same element, console shows true

    const revenueCard = document.createElement("div") ;                         // Establishing the revenueCard with $250
    revenueCard.setAttribute("class", "metric-card") ;
    revenueCard.innerHTML = "<h3>Revenue</h3><p>$250</p>" ;

    // Adding the other two cards into the dashboard -- Profit and Expenses

    const expensesCard = document.createElement("div") ;                         // Establishingr the expensesCard with $100
    expensesCard.setAttribute("class", "metric-card") ;
    expensesCard.innerHTML = "<h3>Expenses</h3><p>$100</p>" ;

    const profitCard = document.createElement("div") ;                           // Establishing the profitCard showcasing $150
    profitCard.setAttribute("class", "metric-card") ;
    profitCard.innerHTML = "<h3>Profit</h3><p>$150</p>" ;

    dashboardById.appendChild(revenueCard) ;                                     // Appending the selection --- coudl use also querySelector since referencing the same. Shown beneath
    dashboardByQuery.appendChild(expensesCard) ;
    dashboardById.appendChild(profitCard) ;
}) ;


// Task 2 - Updated Metric Cards via Array Conversion

document.addEventListener("DOMContentLoaded", () => {
    const metricCards = document.querySelectorAll(".metric-card") ;              // Using querySelectorAll so all cards made are edited by the premises
    Array.from(metricCards).forEach(card => {                                    // For each card in the group, apply the following settings in color and text
        card. innerHTML += "(Updated)" ;
        card.style.backgroundColor = "#ce97fb" ;
    }) ;
}) ;


// Task 3 - Implemented Dynamic Inventory List

document.addEventListener("DOMContentLoaded", () => {
    const inventoryList = document.getElementById("inventoryList") ;             // Grabbing inventoryList from HTML file

    window.addInventoryItem = function(productName) {                            // Creation of the function to add and remove elements from inventory
        const productItem = document.createElement("li") ;                       // li - list element
        productItem.innerText = productName ;

        inventoryList.appendChild(productItem) ;                                 // Adding the element to the list by cliking buttons

        productItem.addEventListener("click", () => {                            // Listens for a click on the element to eliminate it from the list
            inventoryList.removeChild(productItem) ;
        }) ;
    } ;
}) ;


// Task 4 - Demonstrated Event Bubbling in Customer Section

document.addEventListener("DOMContentLoaded", () => {
    const customerSection = document.getElementById("customerSection") ;         // Pulling the customerSection fron the document

    customerSection.addEventListener("click", () => {                            // If customer section is clicked, log the message
        console.log("Successful selection of the customer section!") ;
    }) ;

    window.addCustomerCard = function(name) {                                    // Usage of a function to 
        const customerCard = document.createElement("div") ;                     // Creating div elements for the customer section
        customerCard.setAttribute("class", "customer-card") ;
        customerCard.innerText = name ;

        customerCard.addEventListener("click", (event) => {                      // When customer card is the one clicked, then log the following message
            console.log("Customer card successfuly clicked!") ;
            event.stopPropagation() ;                                            // Used to stop the program fron logging both the customer section and customer card message
        }) ;
    
    customerSection.appendChild(customerCard) ;                                  // Add the customer card to the customer section (parent)

    } ;

    addCustomerCard("Percy Jackson") ;                                           // Adding PJO characters as the customers for testing purposes
    addCustomerCard("Annabeth Chase") ;
    addCustomerCard("Grover Undrewood") ;
}) ;