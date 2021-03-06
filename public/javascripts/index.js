window.addEventListener("load", (event)=>{
    // Search bar
    const search = document.getElementById('search-go');
    const searchInput = document.getElementById('search-term');
    searchInput.addEventListener('keyup', async (e) => {
        e.preventDefault();
        console.log(e.target.value);
        const res = await fetch(`/questions/search`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({search: e.target.value}),
        });
        if(!res.ok) throw new Error;

        const response = await res.json();
        const questions = response.searchResults;

        const returnContainer = document.createElement("div");
        returnContainer.setAttribute('id', 'search-drop');
        const containerLinks = new Array(questions.length);
        for (let i = 0; i < containerLinks.length; i++) {
            containerLinks[i] = document.createElement('a');
            let linkText = document.createTextNode(questions[i].title);
            let linkId = questions[i].id;
            containerLinks[i].title = linkText;
            containerLinks[i].appendChild(linkText);
            containerLinks[i].href = `/questions/${linkId}`;
            returnContainer.appendChild(containerLinks[i]);
        }
        const globalForm = document.getElementById('search-container');
        const oldDrop = document.getElementById('search-drop');
        if(oldDrop) globalForm.removeChild(oldDrop);
        if(e.target.value) globalForm.appendChild(returnContainer);
        console.log(returnContainer);
        // From search results construct div to attach to bottom of search bar
        // Inside div: create another series of links contain question titles
        // Links to individual question page
    });
});
