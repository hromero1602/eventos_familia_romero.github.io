document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('slider');
  const details = document.getElementById('details');
  const backButton = document.getElementById('backButton');
  const personInfo = document.getElementById('personInfo');
  const messageForm = document.getElementById('messageForm');
  const messageList = document.getElementById('messageList');
  const messagesSection = document.getElementById('messages');
  const eventInfo = document.getElementById('eventInfo');

  const people = {
    camila: {
      name: 'Camila',
      description: 'Camila es alegre, le encanta bailar y siempre ilumina con su sonrisa.',
      image: 'data/camila.jpg'
    },
    lucas: {
      name: 'Lucas',
      description: 'Lucas es creativo, amante de la música y muy buen amigo.',
      image: 'data/lucas.jpg'
    }
  };

  function updatePerson(personKey) {
    const person = people[personKey];
    if (!person) return;
    personInfo.innerHTML = `
      <h2>🎂 Hoy celebramos a ${person.name} 🎂</h2>
      <img src="${person.image}" alt="${person.name}" style="max-width:200px; border-radius:1rem; border:3px solid #d4af37;" />
      <p>${person.description}</p>
    `;
    // Mostrar secciones ocultas
    messagesSection.classList.remove('hidden');
    eventInfo.classList.remove('hidden');
  }

  // Selección de evento
  slider.addEventListener('click', (e) => {
    const card = e.target.closest('.slide');
    if (!card) return;
    const person = card.dataset.person;
    updatePerson(person);
    slider.classList.add('hidden');
    details.classList.remove('hidden');
  });

  // Teclado accesible
  slider.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const card = e.target.closest('.slide');
    if (!card) return;
    e.preventDefault();
    const person = card.dataset.person;
    updatePerson(person);
    slider.classList.add('hidden');
    details.classList.remove('hidden');
  });

  // Volver
  backButton.addEventListener('click', () => {
    details.classList.add('hidden');
    slider.classList.remove('hidden');
    personInfo.innerHTML = '';
    messageList.innerHTML = '';
    messagesSection.classList.add('hidden');
    eventInfo.classList.add('hidden');
  });

  // Enviar mensaje
  messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
    const photo = document.getElementById('photo').files[0];

    if (!name || !message) return;

    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.innerHTML = `<strong>${name}:</strong><p>${message}</p>`;

    if (photo) {
      const reader = new FileReader();
      reader.onload = function(ev) {
        const img = document.createElement('img');
        img.src = ev.target.result;
        messageDiv.appendChild(img);
      };
      reader.readAsDataURL(photo);
    }

    messageList.appendChild(messageDiv);
    messageForm.reset();
  });
});
