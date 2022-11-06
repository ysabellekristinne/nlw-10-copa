function createGames(player1, hour, player2) {
  return `
      <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira de ${player1}" />
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira de ${player2}" />
      </li>

  `
}

let delay = -0.4;

function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
      <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
          <ul>
          ${games}
          </ul>
      </div>

  `
}

document.querySelector("#cards").innerHTML = 
    createCard("24/11", "quinta", createGames("brazil", "16:00", "serbia")) +
    createCard("28/11", "segunda", createGames("brazil", "13:00", "switzerland")) +
    createCard("02/12", "sexta", createGames("cameroon", "16:00", "brazil"))

