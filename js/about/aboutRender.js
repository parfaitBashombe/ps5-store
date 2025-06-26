export const renderCoreValues = (containerSelector, data) => {
  const valuesList = document.querySelector(containerSelector);
  if (!valuesList) {
    console.error(`Core values list container not found: ${containerSelector}`);
    return;
  }
  valuesList.innerHTML = ''; 

  data.forEach(value => {
    const valueItem = document.createElement('li');
    valueItem.classList.add('value-item');

    const icon = document.createElement('i');
    icon.classList.add(...value.iconClass.split(' ')); 
    valueItem.appendChild(icon);

    const title = document.createElement('h4');
    title.textContent = value.title;
    valueItem.appendChild(title);

    const description = document.createElement('p');
    description.textContent = value.description;
    valueItem.appendChild(description);

    valuesList.appendChild(valueItem);
  });
};