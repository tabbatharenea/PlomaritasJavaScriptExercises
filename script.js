//exercise one
function leadingNumbers() {
    var answer = document.querySelector("#answer1");
    var userNumb = document.getElementById("pickNum").value;
    var total = 0;
    var toPrint;

    for (i = 1; i <= userNumb; i++)
        total += i;
    toPrint = "Total is: " + total;
    answer.innerHTML = toPrint;
    answer.style.display = "table";
    console.log(toPrint);
}

function clearString1() {
    var answer = document.querySelector("#answer1");
    var userNumb = document.getElementById("pickNum");
    answer.innerHTML = "";
    answer.style.display = "none";
    userNumb.value = null;
}
document.getElementById("exercise1_btn").addEventListener("click", leadingNumbers);

document.getElementById("exercise1_clear").addEventListener("click", clearString1);

//exercise 2
function buildString() {
    var answer = document.querySelector("#answer2");
    var userString = "";
    var userPlay;
    var userWord = document.getElementById("word").value;


    userString += userWord + " ";

    // do {
    //     userPlay = prompt("Would you like to play? Type 'yes' or 'no'.");
    //     if (userPlay === "yes") {
    //         userWord = prompt("Enter any word") + " ";
    //         userString += userWord;
    //     }
    // }
    // while (userPlay === "yes");

    answer.innerHTML += userString;
    answer.style.display = "table";
    console.log("Your whole string is: '" + userString + "'");
}

document.getElementById("exercise2_btn").addEventListener("click", buildString);

document.getElementById("exercise2_clear").addEventListener("click", clearString);

function clearString() {
    var answer = document.querySelector("#answer2");
    var userWord = document.getElementById("word");
    answer.innerHTML = "";
    answer.style.display = "none";
    userWord.value = null;
}

//exercise 3
function printName() {
    var answer = document.querySelector("#answer3");
    var name = "My name is " + prompt("What is your name?");
    var toPrint = prompt("Would you like to print your name? Please type 'yes' or 'no'.");

    while (toPrint === "yes") {
        answer.innerHTML = name;
        answer.style.opacity = "100";
        name = name += "!";
        console.log(name);
        toPrint = prompt("Would you like to print your name again? Please type 'yes' or 'no'.");
    }

    alert("Thanks for playing!");
}

document.getElementById("exercise3_btn").addEventListener("click", printName);


//exercise 4
function toEat() {
    var shouldEat = "You should be eating ";
    var suggest = "I suggest you try ";

    var breakfastFood = "oatmeal & strawberries.";
    var lunchFood = "a sandwich and Soup.";
    var dinnerFood = "pizza and a salad.";

    var answer = document.querySelector("#answer4");

    var timeOfDay = prompt("Is it currently morning, afternoon, or evening?");


    if (timeOfDay === "morning") {
        answer.innerHTML = (shouldEat + "breakfast. " + suggest + breakfastFood);
        answer.style.opacity = "100";
        console.log(shouldEat + "breakfast. " + suggest + breakfastFood);

    } else if (timeOfDay === "afternoon") {
        answer.innerHTML = (shouldEat + "lunch. " + suggest + lunchFood);
        answer.style.opacity = "100";
        console.log(shouldEat + "lunch. " + suggest + lunchFood);

    } else if (timeOfDay === "evening") {
        answer.innerHTML = (shouldEat + "dinner. " + suggest + dinnerFood);
        answer.style.opacity = "100";
        console.log(shouldEat + "dinner. " + suggest + dinnerFood);
    }
}

document.getElementById("exercise4_btn").addEventListener("click", toEat);