        // Función para detectar si Ruffle está instalado
        function isRuffleInstalled() {
            // Intenta detectar si Ruffle está presente en el navegador
            return typeof window.RufflePlayer !== 'undefined';
        }

        // Función para mostrar el modal
        function showRuffleModal() {
            const modal = document.getElementById("ruffleModal");
            modal.style.display = "flex";
        }

        // Función para ocultar el modal
        function hideRuffleModal() {
            const modal = document.getElementById("ruffleModal");
            modal.style.display = "none";
        }

        // Redirige a la Chrome Web Store en una nueva pestaña
        function redirectToRuffleExtension() {
            window.open(
                "https://chrome.google.com/webstore/detail/ruffle/donbcfbmhbcapadipfkeojnmajbakjdc",
                "_blank" // <- Esto abre en nueva pestaña
            );
        }

        // Al cargar la página, verifica si Ruffle está instalado
        window.onload = function () {
            if (!isRuffleInstalled()) {
                showRuffleModal(); // Si no está instalado, muestra el modal
            } else {
                // Si está instalado, muestra el contenido Flash directamente
                document.getElementById("flashContent").style.display = "block";
            }
        };

        // Eventos para los botones del modal
        document.getElementById("installBtn").addEventListener("click", function () {
            redirectToRuffleExtension();
            hideRuffleModal();
        });

        document.getElementById("cancelBtn").addEventListener("click", function () {
            hideRuffleModal();
            alert("El juego no funcionará sin Ruffle. ¡Puedes instalarlo más tarde!");
        });