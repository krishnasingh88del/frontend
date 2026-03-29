function addEvent() {
    let title = document.getElementById("title").value;
    let date = document.getElementById("date").value;
    let category = document.getElementById("category").value;
    let desc = document.getElementById("description").value;

    if (title == "" || date == "") return;

    let list = document.getElementById("eventList");
    list.innerHTML += createEventBox(title, date, category, desc);

    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("description").value = "";
}

function createEventBox(title, date, category, desc) {
    return `
  <div class="event-box">
    <span class="delete-btn" onclick="removeEvent(this)">❌</span>
    <h3>${title}</h3>
    <p><b>Date:</b> ${date}</p>
    <p><b>Category:</b> ${category}</p>
    <p>${desc}</p>
  </div>`;
}

function removeEvent(btn) {
    btn.parentElement.remove();
    checkEmpty();
}

function clearEvents() {
    document.getElementById("eventList").innerHTML =
        "<p class='empty'>No events yet. Add your first event!</p>";
}

function addSample() {
    clearEvents();
    let samples = [
        ["Tech Fest", "2026-03-10", "Conference", "Technology showcase"],
        ["Design Workshop", "2026-04-02", "Workshop", "Hands-on UI/UX"],
        ["Hackathon", "2026-05-15", "Hackathon", "24 hour coding event"]
    ];

    samples.forEach(e => {
        document.getElementById("eventList").innerHTML +=
            createEventBox(e[0], e[1], e[2], e[3]);
    });
}

function checkEmpty() {
    let list = document.getElementById("eventList");
    if (list.children.length === 0) {
        list.innerHTML = "<p class='empty'>No events yet. Add your first event!</p>";
    }