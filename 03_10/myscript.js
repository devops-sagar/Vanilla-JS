import biodata from "./biodata.js";

const obj = new biodata(
    "Sagar Pathak",
    5.11,
    "Brown",
    "Software Engineer",
    "Yes",
    "AB",
    "+"
);

console.log(obj.sign);

const markup = (biodata) => {
    return `
    <div>
        <h2>Welcome ${obj.name}!</h2>
        <h4>profile Information</h4>
        <ul>
            <li>Height: ${obj.height} </li>
            <li>Color: ${obj.color} </li>
            <li>Position: ${obj.position} </li>
            <li>Looking for Job? ${obj.lookingjob ? "Yes" : "No"} </li>
            <li>Blood Group: ${obj.bloodgroup.letter}${obj.bloodgroup.sign} </li>
        </ul>
    </div>
    `;
};

const main = document.createElement("main");
main.innerHTML = markup(biodata);
document.body.appendChild(main);

// console.log("This one is the blodgroup sign: ", obj.bloodgroup.sign)

// var random = "bloodgroup"
// var randomAgain = "sign"
// console.log("To demonstrate we can use also as variable:",obj[random][randomAgain])
// console.log("To demonstrate we can use also as variable:",obj["color"])

