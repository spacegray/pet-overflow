window.addEventListener("load", ()=> {
    console.log("hello from QUESTIONS!");

    // FETCH UP VOTE ROUTE
    const UP_VOTE = document.getElementById('vote-button');
    const VOTE_COUNT = document.getElementById('qVotes');
    UP_VOTE.addEventListener('click', async(e) => {
        e.preventDefault();
        const qId = window.location.pathname.split('/')[2];
        const res = await fetch(`/questions/${qId}/vote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await res.json();
        const votes = result.question.votes;
        VOTE_COUNT.innerText = `Votes: ${votes}`;
    });

    // FETCH UP DOWN ROUTE
    const DOWN_VOTE = document.getElementById('vote-down-button');
    DOWN_VOTE.addEventListener('click', async(e) => {
        e.preventDefault();
        const qId = window.location.pathname.split('/')[2];
        const res = await fetch(`/questions/${qId}/downvote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await res.json();
        const votes = result.question.votes;
        VOTE_COUNT.innerText = `Votes: ${votes}`;
    });

});
