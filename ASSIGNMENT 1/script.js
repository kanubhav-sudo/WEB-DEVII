let events = [];

function addEvent() {
    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const category = document.getElementById("category").value;
    const desc = document.getElementById("description").value;

    if (!title || !date) {
        alert("Title and Date are required");
        return;
    }

    events.push({ title, date, category, desc });
    renderEvents();
    clearForm();
}
