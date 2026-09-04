class MarkdownLoader
{
    #file = "";

    constructor(){}

    setFile(file)
    {
        this.#file = file;
    }

    load()
    {
        console.log(`Loading ${this.#file}`);

        fetch(this.#file)
            .then(response => {
                if(!response)
                    throw new Error(`Failed to fetch Markdown file: ${this.#file}`);

                return response.text();
            })
            .then(text => {

                console.log("Loading");

                var parsed = marked.parse(text);

                document.getElementById('markdown-content').innerHTML = parsed;
            })
            .catch(error => {
                document.getElementById('markdown-content').innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
            });
    }

} // class MarkdownLoader