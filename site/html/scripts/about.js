document.getElementById('meet-team-btn').addEventListener('click', function() {
    var teamSection = document.getElementById('team');
    // Toggle the 'show' class
    if (teamSection.classList.contains('show')) {
        teamSection.classList.remove('show');
        setTimeout(() => { teamSection.style.display = 'none'; }, 500); // Wait for the transition to finish.
    } else {
        teamSection.style.display = 'block';
        setTimeout(() => { teamSection.classList.add('show'); }, 10); // Slight delay to ensure display change is applied.
    }
});


