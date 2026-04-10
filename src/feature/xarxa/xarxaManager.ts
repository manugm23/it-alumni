import type{ Alumni, XarxaData } from '../../types/xarxaTypes';

const fetchAlumniData = async (): Promise<XarxaData> => {
  const response = await fetch('/src/data/xarxa.json');
  if (!response.ok) {
    throw new Error('Error carregant les dades');
  }
  const data: XarxaData = await response.json();
  return data;
};

const renderAlumniCards = (alumniList: Alumni[]): void => {
  const grid = document.getElementById('alumni-grid');
  if (!grid) return;

  grid.innerHTML = '';

  if (alumniList.length === 0) {
    grid.innerHTML = '<p class="alumni__empty">No s\'han trobat alumnes</p>';
    return;
  }

  alumniList.forEach((alumni: Alumni) => {
    const card = document.createElement('li');
    card.classList.add('card');
    card.innerHTML = `
      <div class="card__info">
        <h3 class="card__name">${alumni.name}</h3>
        <p class="card__promotion">${alumni.promotion}</p>
        <p class="card__role">${alumni.role}</p>
        <p class="card__location">${alumni.location}</p>
        <button class="card__btn" aria-label="Enviar missatge a ${alumni.name}">
          Message
        </button>
      </div>
      <div class="card__avatar">
        <img src="${alumni.avatar}" alt="Foto de ${alumni.name}" />
      </div>
    `;
    grid.appendChild(card);
  });
};

const renderRecentActivity = (activities: string[]): void => {
  const list = document.getElementById('activity-list');
  if (!list) return;

  list.innerHTML = '';

  activities.forEach((activity: string) => {
    const item = document.createElement('li');
    item.classList.add('activity__item');
    item.textContent = activity;
    list.appendChild(item);
  });
};

const setupSearch = (alumniList: Alumni[]): void => {
  const input = document.getElementById('search-input') as HTMLInputElement;
  if (!input) return;

  input.addEventListener('input', () => {
    const query = input.value.toLowerCase().trim();

    const filtered = alumniList.filter((alumni: Alumni) =>
      alumni.name.toLowerCase().includes(query) ||
      alumni.role.toLowerCase().includes(query)
    );

    renderAlumniCards(filtered);
  });
};

const setupFilters = (alumniList: Alumni[]): void => {
  const buttons = document.querySelectorAll<HTMLButtonElement>('.filters__btn');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Remove asset from all
      buttons.forEach((b) => b.classList.remove('filters__btn--active'));
      // Activate on click
      btn.classList.add('filters__btn--active');

      const filter = btn.dataset.filter;

      let sorted = [...alumniList];

      if (filter === 'recent') {
        sorted = [...alumniList].reverse();
      } else if (filter === 'popular') {
        sorted = [...alumniList].sort((a, b) => a.name.localeCompare(b.name));
      } else if (filter === 'connected') {
        sorted = [...alumniList].sort((a, b) => b.id - a.id);
      }

      renderAlumniCards(sorted);
    });
  });
};

const init = async (): Promise<void> => {
  try {
    const data = await fetchAlumniData();
    renderAlumniCards(data.alumni);
    renderRecentActivity(data.recentActivity);
    setupSearch(data.alumni);
    setupFilters(data.alumni);
  } catch (error) {
    console.error('Error inicialitzant la pàgina:', error);
    const grid = document.getElementById('alumni-grid');
    if (grid) {
      grid.innerHTML = '<p class="alumni__empty">Error carregant les dades. Torna-ho a intentar.</p>';
    }
  }
};

init();