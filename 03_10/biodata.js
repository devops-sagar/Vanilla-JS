const updateinfo = (update) => {
    let main = document.querySelector("main");
    main.innerHTML = markup(biodata);
    console.info(update);
}

class biodata {
    
    constructor (
        name,
        height,
        color,
        position,
        lookingjob,
        letter,
        sign
    )

    {
        this.name = name;
        this.height = height;
        this.color = color;
        this.position = position;
        this.lookingjob = lookingjob;
        this.letter = letter;
        this.sign = sign;
    }

    toggleJob(jobStatus)
    {
        this.lookingjob = jobStatus;
        updateinfo("Job status updated successfully...")
    }

    changeBloodgroup(newletter, newsign)
    {
        this.letter = newletter.toString();
        this.sign = newsign.toString();
        updateinfo("Blood group updated Successfully...")
    }
}

export default biodata;
