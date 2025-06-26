// js/home/homeRender.js

export const renderConsoleItems = (containerSelector, data) => {
  const container = document.querySelector(containerSelector);
  if (!container) {
    console.error(`Console display container not found: ${containerSelector}`);
    return;
  }
  container.innerHTML = ''; // Clear existing content

  data.forEach(item => {
    const consoleItem = document.createElement('div');
    consoleItem.classList.add('console-item');

    // Image
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.alt;
    consoleItem.appendChild(img);

    // Title
    const h3 = document.createElement('h3');
    h3.textContent = item.title;
    consoleItem.appendChild(h3);

    // Features List
    const ul = document.createElement('ul');
    ul.classList.add('features-list');
    item.features.forEach(feature => {
      const li = document.createElement('li');
      li.setAttribute('data-icon', feature.icon);
      li.textContent = feature.text;
      ul.appendChild(li);
    });
    consoleItem.appendChild(ul);

    // Button
    const btn = document.createElement('a');
    btn.href = item.buttonHref;
    btn.classList.add('btn');
    btn.textContent = item.buttonText;
    consoleItem.appendChild(btn);

    container.appendChild(consoleItem);
  });
};

export const renderControllerCards = (containerSelector, data) => {
  const container = document.querySelector(containerSelector);
  if (!container) {
    console.error(`Controllers display container not found: ${containerSelector}`);
    return;
  }
  container.innerHTML = '';

  data.forEach(card => {
    const controllerCard = document.createElement('div');
    controllerCard.classList.add('controller-card');

    // Image
    const img = document.createElement('img');
    img.src = card.image;
    img.alt = card.alt;
    controllerCard.appendChild(img);

    // Title
    const h4 = document.createElement('h4');
    h4.textContent = card.title;
    controllerCard.appendChild(h4);

    // Description
    const p = document.createElement('p');
    p.textContent = card.description;
    controllerCard.appendChild(p);

    container.appendChild(controllerCard);
  });
};