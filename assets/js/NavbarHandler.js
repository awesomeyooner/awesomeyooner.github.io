class NavbarHandler{
    #widgets = [];

    constructor(){

    }
    
    loadFile(path){

        fetch(path)
            .then(response => response.json())
            .then(data => this.#widgets = data)
            .catch(error => console.log(error))

        this.loadWidgets();
    }

    populateWidgets(widgets, containerID, active="home"){
        this.#widgets = widgets;
        this.loadWidgets(containerID, active);
    }

    loadWidgets(containerID, active="home"){
        try{
            const container = document.getElementById(containerID);
            container.innerHTML = '';

            this.#widgets.forEach((widget, index) => {
                const widgetElement = document.createElement('li');
            
                if(widget.header == active){
                    widgetElement.classList.add("scroll");
                    widgetElement.classList.add("active");
                }

                /*
                    {
                    "header": "Project",
                    "link": "https://classroom.google.com/u/1/c/NjkxNzExOTA3MDA1"
                    }
                */ 

                widgetElement.innerHTML = `
                    <a href="${widget.link}">
                        ${widget.header}
                    </a>
                `;

                container.appendChild(widgetElement);
            })
        }

        catch(error){
            console.log(error);
        }
    }
}