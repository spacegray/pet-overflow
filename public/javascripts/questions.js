window.addEventListener("load", ()=> {
    // DELETE QUESTIONS
    const DELETES = document.getElementsByClassName('delete-q');
    const deleters = Object.values(DELETES);
    deleters.forEach((deleter) => {
        const qId = deleter.children[0].innerText;
        deleter.addEventListener('click', async(e) => {
            e.preventDefault();
            const res = await fetch(`/questions/${qId}/delete`, {
                method: "GET",
            });
            location.reload();
        });
    });

    // EDIT QUESTIONS
    const EDITS = document.getElementsByClassName('edit-q');
    const editors = Object.values(EDITS);
    editors.forEach((editor) => {
        const qId = editor.children[0].innerText;
        editor.addEventListener('click', async(e) => {
            e.preventDefault();
            window.location.href = `/questions/${qId}/edit`;
            // // CONSTRUCTING MODAL
            // const body = document.querySelector("body");
            // const modal = document.createElement('div');
            // modal.setAttribute('id', 'modal');
            // modal.style.display = 'flex';
            // body.appendChild(modal);
            // // MODAL CONTENT
            // const FORM_HTML = `
            //     <div><div><h1>edit your question</h1></div>
            //     <div><input id="modal-title" type="text" name="title"></div>
            //     <div><textarea rows="8" cols="30" name="content"></textarea></div>
            //     <div><button>
            //     <a href="/questions/${qId}/edit" method="post">Submit</a>
            //     </button></div></div>
            // `;
            // const modalContent = document.createElement('div');
            // modalContent.setAttribute('id', 'modal-content');
            // modalContent.innerHTML = FORM_HTML;
            // modal.appendChild(modalContent);
        });
    });

    if (document.getElementById('vote-button')
        && document.getElementById('vote-down-button')) {
        const UP_VOTE = document.getElementById('vote-button');
        const VOTE_COUNT = document.getElementById('qVotes');
        UP_VOTE.addEventListener('click', async(e) => {
            e.preventDefault();
            const qId = window.location.pathname.split('/')[2];
            try {
                const res = await fetch(`/questions/${qId}/vote`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const result = await res.json();
                const votes = result.question.votes;
                VOTE_COUNT.innerText = `${votes}`;
            } catch(err) {
                window.location.replace('/users/login');
            }
        });

        // QUESTION FETCH UP DOWN ROUTE
        const DOWN_VOTE = document.getElementById('vote-down-button');
        DOWN_VOTE.addEventListener('click', async(e) => {
            e.preventDefault();
            const qId = window.location.pathname.split('/')[2];
            try {
                const res = await fetch(`/questions/${qId}/downvote`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const result = await res.json();
                const votes = result.question.votes;
                VOTE_COUNT.innerText = `${votes}`;
            } catch(err) {
                window.location.replace('/users/login');
            }
        });
    }

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
            try {
                const res = await fetch(`/answer/${aId}/downvote`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const result = await res.json();
                const votes = result.answer.votes;
                aVOTE_COUNT.innerText = `${votes}`;
            } catch(err) {
                window.location.replace('/users/login');
            }
        });
    });
});

// ANSWER FETCH UP ROUTE
const aUP_VOTEs = document.getElementsByClassName('answer-vote-button');
Object.values(aUP_VOTEs).forEach((button) => {
    button.addEventListener('click', async (e) => {
        e.preventDefault();
        const aId = button.value;

        /////////////////////////////////////////////////
        /////// WATCH OUT HERE MY DUDE ///////
        /////////////////////////////////////////////////
        const aVOTE_COUNT = document.getElementById(`aVote-${aId}`);
        try {
            const res = await fetch(`/answer/${aId}/vote`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const result = await res.json();
            const votes = result.answer.votes;
            aVOTE_COUNT.innerText = `${votes}`;
        } catch(err) {
            window.location.replace('/users/login');
        }
    });
});

//QUESTIONS PAGE UP VOTES
const QP_UPS = document.getElementsByClassName('votes-up');
Object.values(QP_UPS).forEach((button) => {
    button.addEventListener('click', async (e) => {
        e.preventDefault();
        const qId = button.value;
        const qVOTE_COUNT = document.getElementById(`qVote-${qId}`);
        try {
            const res = await fetch(`/questions/${qId}/vote`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const result = await res.json();
            const votes = result.question.votes;
            qVOTE_COUNT.innerText = `${votes}`;
        } catch(err) {
            window.location.replace('/users/login');
        }
    });
});

const QP_DOWNS = document.getElementsByClassName('votes-down');
Object.values(QP_DOWNS).forEach((button) => {
    button.addEventListener('click', async (e) => {
        e.preventDefault();
        const qId = button.value;
        const qVOTE_COUNT = document.getElementById(`qVote-${qId}`);
        console.log(qVOTE_COUNT);
        try {
            const res = await fetch(`/questions/${qId}/downvote`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const result = await res.json();
            const votes = result.question.votes;
            qVOTE_COUNT.innerText = `${votes}`;
        } catch(err) {
            window.location.replace('/users/login');
        }
    });
});
