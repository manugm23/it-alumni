import type { Esdeveniment, EsdevenimentsData} from '../../types/esdevenimentsTypes';

// ================================
// OBTENIR DADES DEL JSON
// ================================
const fetchEsdevenimentsData = async (): Promise<EsdevenimentsData> => {
  const response = await fetch('/src/data/esdeveniments.json');
  if (!response.ok) {
    throw new Error('Error carregant les dades');
  }
  const data: EsdevenimentsData = await response.json();
  return data;
};

// ================================
// RENDERITZAR CARDS
// ================================
const renderEsdeveniments = (llista: Esdeveniment[]): void => {
  const list = document.getElementById('events-list');
  if (!list) return;

  list.innerHTML = '';

  if (llista.length === 0) {
    list.innerHTML = '<p class="events__empty">No s\'han trobat esdeveniments</p>';
    return;
  }

  llista.forEach((event: Esdeveniment) => {
    const card = document.createElement('li');
    card.classList.add('event-card');
    card.innerHTML = `
      <h2 class="event-card__title">${event.title}</h2>
      <div class="event-card__body">
        <div class="event-card__image">
          ${event.image ? `<img src="${event.image}" alt="${event.title}" />` : ''}
        </div>
        <div class="event-card__info">
          <p class="event-card__description">${event.description}</p>
          <div class="event-card__meta">
            <p class="event-card__dates">${event.dates}</p>
            <p class="event-card__hours">${event.hours}</p>
            <p class="event-card__duration">${event.duration}</p>
          </div>  
          <button class="event-card__btn" aria-label="${event.btn} - ${event.title}">
            ${event.btn}
          </button>
        </div>
      </div>
    `;
    list.appendChild(card);
  });
};

// ================================
// CERCA (Filtrar esdeveniments)
// ================================
const setupSearch = (llista: Esdeveniment[]): void => {
  const input = document.getElementById('search-input') as HTMLInputElement;
  if (!input) return;

  input.addEventListener('input', () => {
    const query = input.value.toLowerCase().trim();

    const filtered = llista.filter((event: Esdeveniment) =>
      event.title.toLowerCase().includes(query) ||
      event.description.toLowerCase().includes(query) ||
      event.dates.toLowerCase().includes(query)
    );

    renderEsdeveniments(filtered);
  });
};

// ================================
// INIT — Punt d'entrada
// ================================
const init = async (): Promise<void> => {
  try {
    const data = await fetchEsdevenimentsData();
    renderEsdeveniments(data.esdeveniments);
    setupSearch(data.esdeveniments);
  } catch (error) {
    console.error('Error inicialitzant la pàgina:', error);
    const list = document.getElementById('events-list');
    if (list) {
      list.innerHTML = '<p class="events__empty">Error carregant les dades. Torna-ho a intentar.</p>';
    }
  }
};

init();