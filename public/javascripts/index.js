window.addEventListener("load", (event)=>{
    console.log("hello from javascript!");

    // Search bar
    const search = document.getElementById('search-go');
    const searchInput = document.getElementById('search-term');
    search.addEventListener('click', async (e) => {
        e.preventDefault();
        const searchTerm = searchInput.value;
        console.log('Searching for ... ', searchTerm);
        const res = await fetch(`/questions/search`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({search: searchTerm}),
        });
        return;
    });
});
