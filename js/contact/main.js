// js/contact/main.js
import { renderNavLinks, renderSocialLinks } from '../shared/renderShared.js';
import { contactInfoData, faqData } from './contactData.js';
import { renderContactInfo, renderFAQs } from './contactRender.js';

document.addEventListener('DOMContentLoaded', () => {
  // Render Shared Elements
  renderNavLinks('.nav-list', 'contact.html'); // Highlight 'Contact Us' as active
  renderSocialLinks('.social-links'); // Render main footer social links

  // Render Contact Page Specific Elements
  renderContactInfo('.contact-details', contactInfoData); // For the main contact info block
  // Note: The social links within the contact-info block are also rendered by renderSocialLinks if their container is .social-links
  // If you want a separate set of social links here, you'd define a new data set in contactData.js
  // and a new rendering call. For now, the existing renderSocialLinks assumes one main social links block.
  // We'll add a specific target for the contact info social links if they are meant to be separate.

  // To target the social links inside the contact-info div:
  // Assuming you give it a unique class or ID in HTML, e.g., <div class="social-links contact-page-social">
  // For now, let's target the one within .contact-info. If it's the *same* data, you only need one call.
  // If they are separate sets of social links data, you'd need a new socialLinksData array in contactData.js
  // and a separate render function call.
  // Given your original HTML had hardcoded social links in BOTH footer and contact-info with same data,
  // we'll assume the footer's social links are sufficient, or you need to decide if they are distinct.
  // For simplicity, I'll update the renderSocialLinks call to target the one in the contact-info if that's what you meant.
  // Let's assume you want the social links under 'Follow Us:' to be dynamic too.
  renderSocialLinks('.contact-info .social-links'); // Target the social links specifically within contact-info

  renderFAQs('.faq-list', faqData); // Render the FAQ section
});