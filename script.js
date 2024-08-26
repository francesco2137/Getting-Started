function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();

    // Pobieranie godziny, minut i sekund
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    // Pobieranie dnia, miesiąca i roku
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Miesiące są indeksowane od 0
    const year = now.getFullYear();
    const dateString = `${day}.${month}.${year}`;

    // Ustawienie tekstu "Czas: godzina data"
    clock.textContent = `Czas: ${timeString}   ${dateString}`;
}

// Aktualizuj zegar co sekundę
setInterval(updateClock, 1000);

// Pierwsze wywołanie, aby natychmiast zaktualizować zegar i datę
updateClock();

