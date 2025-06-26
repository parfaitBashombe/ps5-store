import { renderNavLinks, renderSocialLinks } from '../shared/renderShared.js';
import { contactInfoData, faqData } from './contactData.js';
import { renderContactInfo, renderFAQs } from './contactRender.js';

document.addEventListener('DOMContentLoaded', () => {
  renderNavLinks('.nav-list', 'contact.html');
  renderSocialLinks('.social-links'); 

  renderContactInfo('.contact-details', contactInfoData); 
  
  renderSocialLinks('.contact-info .social-links');

  renderFAQs('.faq-list', faqData);
});