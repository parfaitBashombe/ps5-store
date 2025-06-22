// js/about/main.js
import { renderNavLinks, renderSocialLinks } from '../shared/renderShared.js';
import { coreValuesData } from './aboutData.js';
import { renderCoreValues } from './aboutRender.js';

document.addEventListener('DOMContentLoaded', () => {
  // Render Shared Elements
  renderNavLinks('.nav-list', 'about.html'); // Pass 'about.html' to highlight active link
  renderSocialLinks('.social-links');

  // Render About Page Specific Elements
  renderCoreValues('.values-list', coreValuesData);
});