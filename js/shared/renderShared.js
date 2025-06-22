// js/shared/renderShared.js
import { navLinksData, socialLinksData } from './sharedElements.js';

export const renderNavLinks = (containerSelector, currentPage) => {
  const navList = document.querySelector(containerSelector);
  if (!navList) {
    console.error(`Navigation list container not found: ${containerSelector}`);
    return;
  }
  navList.innerHTML = ''; // Clear existing content

  navLinksData.forEach(link => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;

    // Add 'active' class if the link matches the current page
    // Using simple string comparison for demonstration, could be more robust
    if (link.href === currentPage) {
      a.classList.add('active');
    }
    li.appendChild(a);
    navList.appendChild(li);
  });
};

export const renderSocialLinks = (containerSelector) => {
  const socialLinksDiv = document.querySelector(containerSelector);
  if (!socialLinksDiv) {
    console.error(`Social links container not found: ${containerSelector}`);
    return;
  }
  socialLinksDiv.innerHTML = ''; // Clear existing content

  socialLinksData.forEach(link => {
    const a = document.createElement('a');
    a.href = link.href;
    a.target = link.target;
    const i = document.createElement('i');
    // Use spread operator to add multiple classes from an array
    i.classList.add(...link.iconClass.split(' '));
    a.appendChild(i);
    socialLinksDiv.appendChild(a);
  });
};