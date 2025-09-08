const personSelector = document.getElementById("personSelector");
const personInfo = document.getElementById("personInfo");
const messageForm = document.getElementById("messageForm");
const messageList = document.getElementById("messageList");

const people = {
  camila: {
    name: "Camila",
    description: "Camila es alegre, le encanta bailar y siempre ilumina con su sonrisa.",
    image: "data/camila.jpg"
  },
  lucas: {
    name: "Lucas",
    description: "Lucas es creativo, amante de la música y muy buen amigo.",
    image: "data/lucas.jpg"
  }
};

function updatePerson(personKey) {
  const person = people[personKey];
  personInfo.innerHTML = `
    <h2>🎂 Hoy celebramos a ${person.name} 🎂</h2>
    <img src="${person.image}" alt="${person.name}" style="max-width:200px; border-radius:1rem;" />
    <p>${person.description}</p>
  `;
}

personSelector.addEventListener("change", (e) => {
  updatePerson(e.target.value);
});

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  const photo = document.getElementById("photo").files[0];

  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message");
  messageDiv.innerHTML = `<strong>${name}:</strong><p>${message}</p>`;

  if (photo) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      messageDiv.appendChild(img);
    };
    reader.readAsDataURL(photo);
  }

  messageList.appendChild(messageDiv);
  messageForm.reset();
});

// Inicializar con Camila
updatePerson("camila");
