function showSection(sectionId) {

    document.querySelectorAll('.content-section').forEach(function(section) {
        section.style.display = 'none';
    });

    document.getElementById(sectionId).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    showSection('about');
});

document.addEventListener("DOMContentLoaded", function() {
    var backgroundVideo = document.getElementById('backgroundVideo');
    backgroundVideo.playbackRate = 0.5;
    backgroundVideo.play();

});




