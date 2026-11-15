// ===== Carga dinámica de las obras desde el archivo JSON =====
const contenedorObras = document.querySelector("#contenedor-obras");

fetch("data/obras.json")
  .then((respuesta) => respuesta.json())
  .then((obras) => {
    obras.forEach((obra) => {
      contenedorObras.innerHTML += `
        <div class="col">
          <article class="tarjeta-obra border border-dark h-100 p-4 d-flex flex-column">
            <span class="anio">${obra.anio}</span>
            <h3 class="fs-4 mt-2">${obra.nombre}</h3>
            <p class="text-muted mb-2">${obra.arquitecto}</p>
            <p>${obra.descripcion}</p>
            <span class="etiqueta mt-auto">${obra.estilo}</span>
          </article>
        </div>
      `;
    });
  });

// ===== Validación del formulario con Bootstrap =====
const forms = document.querySelectorAll(".needs-validation");

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }
    form.classList.add("was-validated");
  });
});
