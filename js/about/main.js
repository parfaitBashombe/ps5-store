import { renderNavLinks, renderSocialLinks } from '../shared/renderShared.js';
import { coreValuesData } from './aboutData.js';
import { renderCoreValues } from './aboutRender.js';

document.addEventListener('DOMContentLoaded', () => {
  renderNavLinks('.nav-list', 'about.html');
  renderSocialLinks('.social-links');

  renderCoreValues('.values-list', coreValuesData);
});