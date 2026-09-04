class ProjectHandler{
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

    populateWidgets(widgets){
        this.#widgets = widgets;
        this.loadWidgets();
    }

    async doesFileExist(filepath)
    {
        try
        {
            const response = await fetch(filepath, { method : 'HEAD' });

            if(response.ok)
                return true;
            else
                return false;
        }
        catch(error)
        {
            return false;
        }
    }

    async getFileWithExtensions(path, filename, fileExtensions)
    {
        // Check every extension
        // Example:
        // filename: image
        // fileExtensions: [".jpg", ".png", ".jpeg"]
        // Check image.jpg, image.png, image.jpeg and return the first existing one
        for(const extension of fileExtensions)
        {
            if(await this.doesFileExist(`${path}/${filename}${extension}`))
                return filename + extension;
        }

        return "";
    }

    async loadWidgets(){
        try{
            const container = document.getElementById('widgetContainer');
            container.innerHTML = '';

            for (const widget of this.#widgets)
            {
                const widgetElement = document.createElement('div');
                widgetElement.classList.add('widget');

                /*
                    {
                    "header": "Project",
                    "image": "assets/projects/GITA3/Avatar/avatar.png",
                    "link": "https://classroom.google.com/u/1/c/NjkxNzExOTA3MDA1",
                    "description": "This is my avatar!"
                    }
                */ 

                var imageFile = await this.getFileWithExtensions(widget.path, "image", [".jpg", ".png", ".jpeg"]);

                widgetElement.innerHTML = `

                    <div class="widget-left">

                        <a href="${widget.github}">
                            <img src="${widget.path}/${imageFile}" alt="${widget.header}">
                        </a>

                    </div>

                    <div class="widget-right">
                        
                        <h1>${widget.header}</h1>
                        <h2>${widget.date}</h2>
                        <h3>
                            <a href="${widget.github}">
                                GitHub
                            </a>
                        </h3>
                        
                        <p>${widget.description}</p>

                        <h4>
                            <a href="pages/project-reader.html?file=${widget.path}/readmore.md">
                                Read More
                            </a>
                        </h4>

                    </div>
                `;

                container.appendChild(widgetElement);
            }

        }

        catch(error){
            console.log(error);
        }
    }
}