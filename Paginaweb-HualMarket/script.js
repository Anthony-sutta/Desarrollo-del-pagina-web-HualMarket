 function toggleMenu() {
        var sidebar = document.getElementById("mySidebar");
        if (sidebar.style.width === "250px") {
            sidebar.style.width = "0";
            // document.querySelector(".main-content").style.marginLeft = "0"; // Si quieres mover el contenido
        } else {
            sidebar.style.width = "250px";
            // document.querySelector(".main-content").style.marginLeft = "250px"; // Si quieres mover el contenido
        }
    }