const categories = [
  {
    id: "corzi",
    title: "Instrumente cu coarde",
    desc: "Instrumente care produc sunet prin vibrația coardelor.",
    examples: ["Chitară", "Vioară", "Violoncel", "Harpă"]
  },
  {
    id: "suflat",
    title: "Instrumente de suflat",
    desc: "Sunetul este produs prin coloana de aer pusă în vibrație.",
    examples: ["Flaut", "Clarinet", "Saxofon", "Trompetă"]
  },
  {
    id: "percutie",
    title: "Instrumente de percuție",
    desc: "Sunetul este obținut prin lovire, zgâriere sau scuturare.",
    examples: ["Tobe", "Xilofon", "Timpan", "Trianglu"]
  },
  {
    id: "audio",
    title: "Echipamente audio",
    desc: "Dispozitive pentru captarea și redarea sunetului.",
    examples: ["Microfon", "Boxe", "Căști", "Mixer"]
  },
  {
    id: "electronice",
    title: "Instrumente electronice",
    desc: "Instrumente care folosesc circuite electronice pentru generarea sunetului.",
    examples: ["Sintetizator", "Pian electric", "Drum machine"]
  }
];

const categoriesEl = document.getElementById("categories");
const detailsEl = document.getElementById("details");
const searchEl = document.getElementById("search");

function renderCategories(list = categories) {
  categoriesEl.innerHTML = list.map(cat => `
    <article class="cat-card" onclick="showDetails('${cat.id}')">
      <h3>${cat.title}</h3>
      <p>${cat.desc}</p>
    </article>
  `).join("");
}

function showDetails(id) {
  const cat = categories.find(c => c.id === id);
  if (!cat) return;

  detailsEl.innerHTML = `
    <div class="details-section">
      <h2>${cat.title}</h2>
      <p>${cat.desc}</p>
      <h3>Exemple:</h3>
      <ul>
        ${cat.examples.map(e => `<li>${e}</li>`).join("")}
      </ul>
    </div>
  `;

  detailsEl.scrollIntoView({ behavior: "smooth" });
}

searchEl.addEventListener("input", () => {
  const q = searchEl.value.trim().toLowerCase();
  if (!q) {
    renderCategories();
    detailsEl.innerHTML = "";
    return;
  }

  const filtered = categories.filter(cat =>
    cat.title.toLowerCase().includes(q) ||
    cat.desc.toLowerCase().includes(q) ||
    cat.examples.some(e => e.toLowerCase().includes(q))
  );

  renderCategories(filtered);
  detailsEl.innerHTML = "";
});

renderCategories();
