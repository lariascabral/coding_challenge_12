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

    const profitCard = document.createElement("div") ;                         // Establishing the profitCard showcasing $150
    profitCard.setAttribute("class", "metric-card") ;
    profitCard.innerHTML = "<h3>Profit</h3><p>$150</p>" ;

    dashboardById.appendChild(revenueCard) ;                                    // Appending the selection --- coudl use also querySelector since referencing the same. Shown beneath
    dashboardByQuery.appendChild(expensesCard) ;
    dashboardById.appendChild(profitCard) ;
}) ;


