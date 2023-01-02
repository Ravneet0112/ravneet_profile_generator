const renderteam = (team) => {
    const renderManager = (manager) => `
        <div class= "employee-card">
        <div class = "card manager">
            <h3>${manager.name}</h3>
            <h4><i class="fa-regular fa-people-roof"></i> Manager </h4>

        </div>
        <div class = "details">
            <h5>ID: ${manager.id}</h5>
            <h5>Email: <a href = "${manager.email}>${manager.officeNumber}</a></h5> 
            <h5>Office Number: ${manager.officeNumber}</h5>
        </div>
        </div>`;

    const renderEngineer = (engineer) => `
        <div class ="employee-card">
        <div class = "card engineer">
            <h3>${engineer.name}</h3>
            <h4><i class="fa-solid fa-laptop"></i> Engineer</h4>
            </div>
            
            <div class = "details">
            <h4>ID: ${engineer.id}</h4>
            <h4>Email: <a href = "${engineer.email}">${engineer.email}</a></h4>
            <h4>Github: <a href = "${engineer.github}">${engineer.github}</a></h4>
            </div>
            </div>`;

    const renderIntern = (intern) => `
        <div = "employee-card ">
            <div class = "card intern">
            <h3>${intern.name}</h3>
            <h4><i class="fa-solid fa-graduation-cap"></i> Intern</h4>
            </div>
            <div class = "details">
            <h4>ID: ${intern.id}</h4>
            <h4>Email: <a href = "${intern.email}">${intern.email}</a></h4>
            <h4>School: ${intern.school}</h4>
            </div>
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
                <h2 class = "heading">Team</h1>
                ${renderteam(team)}
            </div>
        </div>
    </div>
</body>

<script src="https://kit.fontawesome.com/cba39ebf54.js" crossorigin="anonymous"></script>

</html>

`;

module.exports = renderMain;


