
window.addEventListener('DOMContentLoaded', function() {

  VANTA.NET({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x3b82f6,
    backgroundColor: 0x020617
  })

})
    
    
    
    function toggleProject(projectId) {
            let project = document.getElementById(projectId);
            if (project.classList.contains("hidden")) {
                project.classList.remove("hidden");
            } else {
                    project.classList.add("hidden");
                }
        }