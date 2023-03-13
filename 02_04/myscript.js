import biodata from "./biodata.js";
import skills from "./skills.js";

const markup = (biodata, skills) => {
    return `
    <div>
        <h2>Welcome ${biodata.name}!</h2>
        <h4>profile Information</h4>
        <ul>
            <li>Height: ${biodata.height} </li>
            <li>Color: ${biodata.color} </li>
            <li>Position: ${biodata.position} </li>
            <li>Looking for Job? ${biodata.lookingjob ? "Yes" : "No"} </li>
            <li>Blood Group: ${biodata.bloodgroup.letter}${biodata.bloodgroup.sign} </li>
            <li>Programming Languages: ${skills.programmingLanguage.p2} </li>
        </ul>
    </div>
    `;
};

const main = document.createElement("main");
main.innerHTML = markup(biodata,skills);
document.body.appendChild(main);

console.log("This one is the blodgroup sign: ", biodata.bloodgroup.sign)

var random = "bloodgroup"
var randomAgain = "sign"
console.log("To demonstrate we can use also as variable:",biodata[random][randomAgain])
console.log("To demonstrate we can use also as variable:",biodata["color"])

console.log(skills.programmingLanguage)