// ================================
// TIPUS (Types)
// ================================
interface JobDesktop {
  id: number;
  title: string;
  type: string;
  posted: string;
  btn: string;
  image: string;
}

interface JobMobile {
  id: number;
  title: string;
  role: string;
  location: string;
  deadline: string;
  btn: string;
  image: string;
}

interface FeinaData {
  jobsDesktop: JobDesktop[];
  jobsMobile: JobMobile[];
}

// ================================
// DETECTAR SI ES MOBILE O DESKTOP
// ================================
const isMobile = (): boolean => window.innerWidth < 768;

// ================================
// OBTENIR DADES DEL JSON
// ================================
const fetchFeinaData = async (): Promise<FeinaData> => {
  const response = await fetch('/src/data/feina.json');
  if (!response.ok) {
    throw new Error('Error carregant les dades');
  }
  const data: FeinaData = await response.json();
  return data;
};

// ================================
// RENDERITZAR CARDS MOBILE
// ================================
const renderMobileCards = (jobs: JobMobile[]): void => {
  const grid = document.getElementById('jobs-grid');
  if (!grid) return;

  grid.innerHTML = '';

  if (jobs.length === 0) {
    grid.innerHTML = '<p class="jobs__empty">No s\'han trobat ofertes</p>';
    return;
  }

  jobs.forEach((job: JobMobile) => {
    const card = document.createElement('li');
    card.classList.add('job-card');
    card.innerHTML = `
      <div class="job-card__image">
        ${job.image ? `<img src="${job.image}" alt="${job.title}" />` : ''}
      </div>
      <div class="job-card__info">
        <h3 class="job-card__title">${job.title}</h3>
        <p class="job-card__role">${job.role}</p>
        <p class="job-card__meta">${job.location} | ${job.deadline}</p>
      </div>
      <button class="job-card__btn" aria-label="${job.btn} per ${job.title}">
        ${job.btn}
      </button>
    `;
    grid.appendChild(card);
  });
};

// ================================
// RENDERITZAR CARDS DESKTOP
// ================================
const renderDesktopCards = (jobs: JobDesktop[]): void => {
  const grid = document.getElementById('jobs-grid');
  if (!grid) return;

  grid.innerHTML = '';

  if (jobs.length === 0) {
    grid.innerHTML = '<p class="jobs__empty">No s\'han trobat ofertes</p>';
    return;
  }

  jobs.forEach((job: JobDesktop) => {
    const card = document.createElement('li');
    card.classList.add('job-card');
    card.innerHTML = `
      <div class="job-card__image">
        ${job.image ? `<img src="${job.image}" alt="${job.title}" />` : ''}
      </div>
      <div class="job-card__info">
        <h3 class="job-card__title">${job.title}</h3>
        <p class="job-card__role">${job.type}</p>
        <p class="job-card__meta">${job.posted}</p>
      </div>
      <button class="job-card__btn" aria-label="${job.btn} per ${job.title}">
        ${job.btn}
      </button>
    `;
    grid.appendChild(card);
  });
};

// ================================
// RENDERITZAR SEGONS MIDA PANTALLA
// ================================
const renderCards = (data: FeinaData): void => {
  if (isMobile()) {
    renderMobileCards(data.jobsMobile);
  } else {
    renderDesktopCards(data.jobsDesktop);
  }
};

// ================================
// CERCA (Filtrar feina)
// ================================
const setupSearch = (data: FeinaData): void => {
  const input = document.getElementById('search-input') as HTMLInputElement;
  if (!input) return;

  input.addEventListener('input', () => {
    const query = input.value.toLowerCase().trim();

    if (isMobile()) {
      const filtered = data.jobsMobile.filter((job: JobMobile) =>
        job.title.toLowerCase().includes(query) ||
        job.role.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query)
      );
      renderMobileCards(filtered);
    } else {
      const filtered = data.jobsDesktop.filter((job: JobDesktop) =>
        job.title.toLowerCase().includes(query) ||
        job.type.toLowerCase().includes(query)
      );
      renderDesktopCards(filtered);
    }
  });
};

// ================================
// RESPONSIVE — re-renderitzar al canviar mida
// ================================
const setupResize = (data: FeinaData): void => {
  let currentMobile = isMobile();

  window.addEventListener('resize', () => {
    const nowMobile = isMobile();
    if (nowMobile !== currentMobile) {
      currentMobile = nowMobile;
      renderCards(data);
    }
  });
};

// ================================
// INIT — Punt d'entrada
// ================================
const init = async (): Promise<void> => {
  try {
    const data = await fetchFeinaData();
    renderCards(data);
    setupSearch(data);
    setupResize(data);
  } catch (error) {
    console.error('Error inicialitzant la pàgina:', error);
    const grid = document.getElementById('jobs-grid');
    if (grid) {
      grid.innerHTML = '<p class="jobs__empty">Error carregant les dades. Torna-ho a intentar.</p>';
    }
  }
};

init();