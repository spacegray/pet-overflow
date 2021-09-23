window.addEventListener("load", ()=> {
    console.log("hello from QUESTIONS!");

    // QUESTION FETCH UP VOTE ROUTE
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

    // QUESTION FETCH UP DOWN ROUTE
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

    // ANSWER FETCH UP DOWN ROUTE
    const aDOWN_VOTEs = document.getElementsByClassName('answer-down-button');
    Object.values(aDOWN_VOTEs).forEach((button) => {
        button.addEventListener('click', async (e) => {
            e.preventDefault();
            const aId = button.value;

            /////////////////////////////////////////////////
            /////// WOAH DADDY WATCH OUT HERE MY DUDE ///////
            /////////////////////////////////////////////////
            const aVOTE_COUNT = document.getElementById(`aVote-${aId}`);

            const res = await fetch(`/answer/${aId}/downvote`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const result = await res.json();
            const votes = result.answer.votes;
            aVOTE_COUNT.innerText = votes;

        });
    });

});
