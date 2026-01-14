// Write a program that prints all male people's first name, given a complex object

const nameObj = [
    {
        firstName: "Ujval",
        lastName:  "Gupta",
        gender:    "male"
    },
    {
        firstName: "Prajval",
        lastName:  "Gupta",
        gender:    "male"
    },
    {
        firstName: "Ruchita",
        lastName:  "Gupta",
        gender:    "female"
    }
]

const arraySize = nameObj.length;

for (let i = 0; i < arraySize; i++)
{
    if (nameObj[i]["gender"] == "male")
    {
        console.log("Male's first name is "+nameObj[i]["firstName"]);
    }
}