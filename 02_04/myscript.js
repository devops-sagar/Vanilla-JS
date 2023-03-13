import biodata from "./biodata.js";

const markup = (biodata) => {
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
        </ul>
    </div>
    `;
};

const main = document.createElement("main");
main.innerHTML = markup(biodata);
document.body.appendChild(main);