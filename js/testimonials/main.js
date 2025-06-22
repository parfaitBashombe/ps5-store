// js/testimonials/main.js
import { renderNavLinks, renderSocialLinks } from '../shared/renderShared.js';
import { testimonialsData } from './testimonialsData.js';
import { renderTestimonials } from './testimonialsRender.js';

document.addEventListener('DOMContentLoaded', () => {
  // Render Shared Elements
  renderNavLinks('.nav-list', 'testimonials.html'); // Pass 'testimonials.html' to highlight active link
  renderSocialLinks('.social-links');

  // Render Testimonials
  renderTestimonials('.testimonials-grid', testimonialsData);
});