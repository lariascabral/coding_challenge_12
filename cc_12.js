// Task 1 - Created Revenue Metric Card

document.addEventListener("DOMContentLoaded", () => {
    const dashboardById = document.getElementById("dashboard") ;
    const dashboardByQuery = document.querySelector("#dasboard") ;

    console.log(dashboardById === dashboardByQuery) ;

    const revenueCard = document.createElement("div") ;
    revenueCard.setAttribute("class", "metric-card") ;
    revenueCard.innerHTML = "<h3>Revenue</h3><p>$0</p>" ;

    dashboardById.appendChild(revenueCard) ;

}) ;