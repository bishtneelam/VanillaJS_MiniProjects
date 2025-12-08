const card = document.getElementById('card');
const btnContainer = document.getElementById('btn-container');
const accpetBtn = document.getElementById('accept-btn');
const declineBtn = document.getElementById('decline-btn');
const statusMessage = document.getElementById('status-message');
const actionButtons = document.getElementById('action-buttons');

accpetBtn.addEventListener('click', acceptRequest);
declineBtn.addEventListener('click', declineRequest);

function acceptRequest() {
    card.classList.add('accepted')
    btnContainer.style.display = "none";

    statusMessage.textContent = "✅ Connection Accepted!"
    statusMessage.className="status-message success show"

    setTimeout(()=>{
        actionButtons.classList.add("show")
    },300)
}

function declineRequest() {
    card.classList.add("declined")

    btnContainer.style.display = "none";
    statusMessage.textContent = "❌ Request Declined!"
    statusMessage.className="status-message declined show"
}