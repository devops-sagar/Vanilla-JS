const updateinfo = (update) => {
    let main = document.querySelector("main");
    main.innerHTML = markup(biodata);
    console.info(update)
}

const biodata = {
    name: "Sagar Pathak",
    height: 5.11,
    color: "Brown",
    position: "Software Engineer",
    lookingjob: false,
    bloodgroup: {
        letter: "AB",
        sign: "+",
    },

    toggleJob: function (jobStatus) {
        this.lookingjob = jobStatus;
        updateinfo("job Status Updated...");
    },

    changeBloodgroup: function (newletter, newsign) {
        this.bloodgroup.letter = newletter.toString();
        this.bloodgroup.sign = newsign.toString();
        updateinfo("Blood Group Updated...");
    },
};

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