// ===== Node Packages =====
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

//Start Function
async function start(){
    console.log("We will create your team now!");

    // Sets Variable to hold HTML
    let teamHTML = "";

    // Variable to hold team size
    let teamSize;

    // First Question to determine team size
    await inquirer.prompt(
        {
            type: "number",
            message: "How many people are in your team?",
            name: "noOfTeamMem"
        }
    )
    .then((data) => {

        //Sets teamsize
        teamSize = data.noOfTeamMem + 1;
    });
    
    // If Team Size is 0, program will end
    if (teamSize === 0){
        console.log("I guess there is no one on your team...");
        return;
    }
    
    // Loop begins to ask questions based on team size
    for(i = 1; i < teamSize; i++){

        // Global variables set
        let name;
        let id;
        let title;
        let email;

        // Prompts user to answer the questions about the employee
        await inquirer.prompt([ 
            {
                //Gets the employee's name
                type: "input",
                message: `What is employee (${i})'s name?`,
                name: "name"
            },
            {
                 //Gets the employee's ID
                type: "input",
                message: `What is the employee (${i})'s id?`,
                name: "id"
            },
            {
                //Gets the employee's email
                type: "input",
                message: `What is the employee (${i})'s Email?`,
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

            // Takes data from user and places value in global variables
            name = data.name;
            id = data.id;
            title = data.title;
            email = data.email;
        });

        // Switch Case depending on the title of the employee
        switch (title){
            case "Manager":

                //  Asks the user the Manager's Office Number
                await inquirer.prompt([
                    {
                        type: "input",
                        message: "What is your Manager's Office Number?",
                        name: "officeNo"
                    }
                ])
                .then((data) => {

                    // Create a new manager object with the data provided by the user
                    const manager = new Manager(name, id, email, data.officeNo);

                     // Reads and places HTML from manager.html in teamMemever Variable
                    teamMember = fs.readFileSync("templates/manager.html");

                    // Adds the string to the team HTML
                    teamHTML = teamHTML + "\n" + eval('`'+ teamMember +'`');
                });
                break;

            //If the role is Intern, the intern's school needs to be provided
            case "Intern":
                await inquirer.prompt([
                    {
                        type: "input",
                        message: "What school is your Intern attending?",
                        name: "school"
                    }
                ])

                // Create a new intern object with the data provided by the user
                .then((data) => {
                    const intern = new Intern(name, id, email, data.school);
                    teamMember = fs.readFileSync("templates/intern.html");
                    teamHTML = teamHTML + "\n" + eval('`'+ teamMember +'`');
                });
                break;

            //If the role is Engineer, the engineer's GitHub name needs to be provided
            case "Engineer":
                await inquirer.prompt([
                    {
                        type: "input",
                        message: "What is your Engineer's GitHub?",
                        name: "github"
                    }
                ])
                 // Create a new Engineer object with the data provided by the user
                .then((data) => {
                    const engineer = new Engineer(name, id, email, data.github);
                    teamMember = fs.readFileSync("templates/engineer.html");
                    teamHTML = teamHTML + "\n" + eval('`'+ teamMember +'`');
                });
                break;

        } // End of Switch Case

    } // End of For loop

    // Reads main.html and places html in a variable
    const mainHTML = fs.readFileSync("templates/main.html");
    
    // Use eval to implement template literals in main.html and places teamHTML inside main template
    teamHTML = eval('`'+ mainHTML +'`');

    // Writes file to new team.html file
    fs.writeFile("output/team.html", teamHTML, function(err) {

        //Displays an error mesage if an error occurs
        if (err) {
          return console.log(err);
        }
      
      });
}


start();