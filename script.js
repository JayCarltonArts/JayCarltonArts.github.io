

document.addEventListener("DOMContentLoaded", function() {
    // Date countdown
    const weddingDate = new Date("2024-07-27T10:00:00").getTime();

    const countdownElement = document.getElementById("countdown");

    setInterval(function() {
        const now = new Date().getTime();
        const timeleft = weddingDate - now;
        


        
        const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeleft%(1000 * 60))/1000);

        countdownElement.innerHTML = `${days}:${hours}:${minutes}:${seconds}`;
    }, 1000);

    // RSVP form
    const rsvpForm = document.getElementById("rsvpForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    rsvpForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const confirm = document.getElementById("confirm").value;
        const guests = document.getElementById("NumInvites").value;

        

        confirmationMessage.innerHTML = `Thank you, ${confirm}! You and ${guests} guests are confirmed.`;
        rsvpForm.reset();
    });

});


