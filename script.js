

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

        const content = `Option 1: ${confirm}\nOption 2: ${guests}`;

            // Create a Blob containing the text data
            const blob = new Blob([content], { type: 'text/plain' });

            // Create a link element
            const link = document.createElement('a');

            // Set the link's href attribute to a URL representing the Blob data
            link.href = URL.createObjectURL(blob);

            // Specify the filename for the downloaded file
            link.download = 'user_data.txt';

            // Append the link to the document
            document.body.appendChild(link);

            // Trigger a click on the link to start the download
            link.click();

            // Remove the link from the document
            document.body.removeChild(link);

        confirmationMessage.innerHTML = `Thank you, ${confirm}! You and ${guests} guests are confirmed.`;
        rsvpForm.reset();
    });

    function saveToFile() {
        const option1 =  document.getElementById("confirm").value;
        const option2 =  document.getElementById("NumInvites").value;

        const content = `Option 1: ${option1}\nOption 2: ${option2}`;

        // Create a Blob containing the text data
        const blob = new Blob([content], { type: 'text/plain' });

        // Create a link element
        const link = document.createElement('a');

        // Set the link's href attribute to a URL representing the Blob data
        link.href = URL.createObjectURL(blob);

        // Specify the filename for the downloaded file
        link.download = 'sample.txt';

        // Append the link to the document
        document.body.appendChild(link);

        // Trigger a click on the link to start the download
        link.click();

        // Remove the link from the document
        document.body.removeChild(link);
    }

});


