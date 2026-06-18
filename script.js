
    // function animatePlaceholder() {
    //     const project_bar = document.getElementById("portfolio_searchbar");
    //     const text = "Search Projects...";

    //     let i = 0;

    //     text.placeholder = text.slice(0,i);
    //     i++;
        
    
    //     if (i <= text.length) {
    //         setInterval(animatePlaceholder, 100);
    //     }

    // }
    
    // searchPlaceholder();

    function setupProjectSearch() {
        let searchInput = document.getElementById("portfolio_searchbar");
        let projectcards = document.querySelectorAll(".project-card");
        let searchText = searchInput.value.toLowerCase();

    projectcards.forEach(function(card) {
        let keywords = card.dataset.keywords.toLowerCase();

        if (keywords.includes(searchText)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
}

document
    .getElementById("portfolio_searchbar")
    .addEventListener("input", setupProjectSearch);
    
    
    function toggleProject(projectId) {
            let project = document.getElementById(projectId);
            if (project.classList.contains("hidden")) {
                project.classList.remove("hidden");
            } else {
                    project.classList.add("hidden");
                }
        }