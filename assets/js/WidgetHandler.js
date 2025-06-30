class WidgetHandler{
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

    populateWidgets(widgets, containerID){
        this.#widgets = widgets;
        this.loadWidgets(containerID);
    }

    loadWidgets(containerID){
        try{
            const container = document.getElementById(containerID);
            container.innerHTML = '';

            this.#widgets.forEach((widget, index) => {
                const widgetElement = document.createElement('div');
                widgetElement.classList.add('col-md-4');
                widgetElement.classList.add("col-sm-6");

                /*
                    {
                    "header": "Project",
                    "image": "assets/projects/GITA3/Avatar/avatar.png",
                    "link": "https://classroom.google.com/u/1/c/NjkxNzExOTA3MDA1",
                    "description": "This is my avatar!"
                    }
                */ 

                widgetElement.innerHTML = `
                    <div class="single-service-item">

                        <a href="${widget.link}">

                            <div class="single-service-icon">
                                <img src="${widget.image}">
                            </div>

                            <h2>${widget.header}</h2>

                            <p>
                                ${widget.description}
                            </p>

                        </a>
                    </div>
                `;

                container.appendChild(widgetElement);
            })
        }

        catch(error){
            console.log(error);
        }
    }
}