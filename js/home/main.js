// js/home/main.js
import { renderNavLinks, renderSocialLinks } from '../shared/renderShared.js';
import { consoleItemsData, controllerCardsData } from './homeData.js';
import { renderConsoleItems, renderControllerCards } from './homeRender.js';

document.addEventListener('DOMContentLoaded', () => {
  // Render Shared Elements
  renderNavLinks('.nav-list', 'index.html'); // Pass current page for active link
  renderSocialLinks('.social-links');

  // Render Home Page Specific Elements
  renderConsoleItems('.console-display', consoleItemsData);
  renderControllerCards('.controllers-display', controllerCardsData);
});