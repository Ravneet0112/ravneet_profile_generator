const renderteam = (team) => {
    const renderManager = (manager) => `
        <div class = "card employee-card manager">
            <h2>${manager.name}</h2>
            <i class="fa-regular fa-people-roof"></i>

        </div>
        <div class = "details">
            <h4>ID: ${manager.id}</h4>
            <h4>Email: <a href = "${manager.email}>${manager.officeNumber}</a></h4> 
            <h4>Office Number: ${manager.officeNumber}</h4>
        </div>
    `;

    const renderEngineer = (engineer) => `
        <div class = "card employee-card engineer">
            <h2>${engineer.name}</h2>
            <i class="fa-solid fa-laptop"></i>
            </div>
            
            <div class = "details">
            <h4>ID: ${engineer.id}</h4>
            <h4>Email: <a href = "${engineer.email}">${engineer.email}</a></h4>
            <h4>Github: <a href = "${engineer.github}">${engineer.github}</a></h4>
            </div>`;

    const renderIntern = (intern) => `
        <div class = "card employee-card intern">
            <h2>${intern.name}</h2>
            <i class="fa-solid fa-graduation-cap"></i>
            </div>
            <div class = "details">
            <h4>"ID: ${intern.id}"</h4>
            <h4>Email: <a href = "${intern.email}">${intern.email}</a></h4>
            <h4>School: ${intern.school}</h4>
            </div>`;

    const html = [];

    html.push(team.filter(employee => employee.getRole() === "Manager").map(manager => renderManager(manager)));

    html.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => renderEngineer(engineer)).join(""));

    html.push(team.filter(employee => employee.getRole() === "Intern").map(intern => renderIntern(intern)).join(""));

    return html.join("");

};

const renderMain = (team) => `
<!DOCTYPE html>
<html lang = "en">
<head>

    <meta charset = "utf-8">
    <meta name = "viewport" content = "width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Team</title>
    <link rel = "stylesheet" href = "./style.css">

</head>


<body>
    <div class = "container">
        <div class = "header row">
            <div class = "header-content">
                <h1>Team</h1>
                ${renderteam(team)}
            </div>
        </div>
    </div>
</body>

</html>

`;

module.exports = renderMain;


