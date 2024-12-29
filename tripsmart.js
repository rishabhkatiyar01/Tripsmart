function searchTrip() {
    const destination = document.getElementById('destination').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    if (destination && startDate && endDate) {
        alert(`Searching trips to ${destination} from ${startDate} to ${endDate}`);
        
        // Navigate to the trip2.html page
        window.location.href = './trip2.html';
    } else {
        alert('Please fill in all the fields.');
    }
}