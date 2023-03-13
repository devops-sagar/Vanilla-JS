const updateinfo = (update) => {
    let main = document.querySelector("main");
    main.innerHTML = markup(biodata);
    console.info(update);
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

export default biodata;