function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Show the first section by default when the page loads
document.addEventListener('DOMContentLoaded', function() {
    showSection('about');
});

document.addEventListener("DOMContentLoaded", function() {
    var backgroundVideo = document.getElementById('backgroundVideo');
    backgroundVideo.playbackRate = 0.5;
    backgroundVideo.play();

});




