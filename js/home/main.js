import { renderNavLinks, renderSocialLinks } from '../shared/renderShared.js';
import { consoleItemsData, controllerCardsData } from './homeData.js';
import { renderConsoleItems, renderControllerCards } from './homeRender.js';

document.addEventListener('DOMContentLoaded', () => {
  renderNavLinks('.nav-list', 'index.html');
  renderSocialLinks('.social-links');

  renderConsoleItems('.console-display', consoleItemsData);
  renderControllerCards('.controllers-display', controllerCardsData);
});