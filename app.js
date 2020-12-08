// ===== Node Packages =====
const inquirer = require("inquirer");
const fs = require("fs");

//Defines constant variables for Manager, Intern, and Engineer
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");

//Start Function
async function start(){
    console.log("Ready to begin setting up your team.");

    // Set Variable to hold HTML
    let teamHTML = "";

    // Variable to hold the team size
    let teamSize;

    // First question to determine the team size
    await inquirer.prompt(
        {
            type: "number",
            message: "How many team members do you have?",
            name: "numberofTeam"
        }
    )
    .then((data) => {

        // Sets teamSize
        teamSize = data.numberofTeam + 1;
    });
    
    // If Team Size is 0 , the program will end
    if (teamSize === 0){
        console.log("No team members selected");
        return;
    }
    
    // Loop begins to ask questions based on the size of the team
    for(i = 1; i < teamSize; i++){

        // Global variables set
        let name;
        let id;
        let email;
        let title;

        // Prompts user to answer the questions about the employee
        await inquirer.prompt([ 
            {
                //Gets the employee's name
                type: "input",
                message: `What is employee (${i})'s first name?`,
                name: "name"
            },
            {
                //Gets the employee's ID
                type: "input",
                message: `What is the employee (${i})'s ID?`,
                name: "id"
            },
            {
                //Gets the employee's email
                type: "input",
                message: `What is the employee (${i})'s email?`,
                name: "email"
            },
            {
                //Gets the employee's title
                type: "list",
                message: `what the employee (${i})'s title?`,
                name: "title",
                choices: ["Engineer", "Intern", "Manager"]
            }
        ])
        .then((data) => {

            // Takes data provided from the user and places the value in global variables
            name = data.name;
            id = data.id;
            email = data.email;
            title = data.title;
        });

        // Switch Case depending on the title of the employee
        switch (title){
            case "Manager":

                // Asks the user the Manager's Office Number
                await inquirer.prompt([
                    {
                        type: "input",
                        message: "What is the Manager's Office number?",
                        name: "officeNumber"
                    }
                ])
                .then((data) => 
                {
                    // Create a new manager object with the data provided by the user
                    const manager = new Manager(name, id, email, data.officeNumber);

                    // Reads and places HTML from manager.html in teamMemever Variable
                    teamMember = fs.readFileSync("./templates/manager.html");

                    // Adds the string to the team HTML
                    teamHTML = teamHTML + "\n" + eval('`'+ teamMember +'`');
                });
                break;

            //If the role is Intern, the intern's school needs to be provided
            case "Intern":
                await inquirer.prompt([
                    {
                        type: "input",
                        message: "What school does the Intern attend?",
                        name: "school"
                    }
                ])

                // Create a new intern object with the data provided by the user
                .then((data) => {
                    const intern = new Intern(name, id, email, data.school);
                    teamMember = fs.readFileSync("./templates/intern.html");
                    teamHTML = teamHTML + "\n" + eval('`'+ teamMember +'`');
                });
                break;

            //If the role is Engineer, the engineer's GitHub name needs to be provided
            case "Engineer":
                await inquirer.prompt([
                    {
                        type: "input",
                        message: "What is the Engineer's GitHub name?",
                        name: "github"
                    }
                ])

                 // Create a new Engineer object with the data provided by the user
                .then((data) => {
                    const engineer = new Engineer(name, id, email, data.github);
                    teamMember = fs.readFileSync("./templates/engineer.html");
                    teamHTML = teamHTML + "\n" + eval('`'+ teamMember +'`');
                });
                break;
        } 

    }

    // Reads main.html and places html in a variable
    const mainHTML = fs.readFileSync("./templates/main.html");
    
    // Use eval to implement template literals in main.html and places teamHTML inside main template
    teamHTML = eval('`'+ mainHTML +'`');

    // write file to new team.html file
    fs.writeFile("./output/team.html", teamHTML, function(err) {

        //Displays an error mesage if an error occurs
        if (err) {
          return console.log(err);
        }
      });
}

start();