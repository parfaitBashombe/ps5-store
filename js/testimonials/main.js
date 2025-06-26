import { renderNavLinks, renderSocialLinks } from '../shared/renderShared.js';
import { testimonialsData } from './testimonialsData.js';
import { renderTestimonials } from './testimonialsRender.js';

document.addEventListener('DOMContentLoaded', () => {

  renderNavLinks('.nav-list', 'testimonials.html');
  renderSocialLinks('.social-links');


  renderTestimonials('.testimonials-grid', testimonialsData);
});