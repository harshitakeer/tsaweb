document.addEventListener('DOMContentLoaded', function() {
    var toggleMissionBtn = document.getElementById('meet-team-btn');
    var missionSection = document.getElementById('mission');

    toggleMissionBtn.addEventListener('click', function() {
        var isMissionHidden = missionSection.style.display === 'none';
        
        missionSection.style.display = isMissionHidden ? 'block' : 'none';
        toggleMissionBtn.textContent = isMissionHidden ? 'Show Less' : 'Learn More';
    });
});



