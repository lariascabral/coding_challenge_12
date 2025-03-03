// Task 1 - Created Revenue Metric Card

document.addEventListener("DOMContentLoaded", () => {
    const dashboardById = document.getElementById("dashboard") ;                // Using getElementById to obtain the dashboard container
    const dashboardByQuery = document.querySelector("#dashboard") ;             // Using querySelector to obtain the dashboard container

    console.log(dashboardById === dashboardByQuery) ;                           // Making sure that the slections are the same element, console shows true

    const revenueCard = document.createElement("div") ;                         // Establishing a div element for the RevenueCard
    revenueCard.setAttribute("class", "metric-card") ;
    revenueCard.innerHTML = "<h3>Revenue</h3><p>$0</p>" ;

    dashboardById.appendChild(revenueCard) ;                                    // Appending the selection --- coudl use also querySelector since referencing the same
}) ;

