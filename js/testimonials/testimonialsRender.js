export const renderTestimonials = (containerSelector, data) => {
  const testimonialsGrid = document.querySelector(containerSelector);
  if (!testimonialsGrid) {
    console.error(`Testimonials grid container not found: ${containerSelector}`);
    return;
  }
  testimonialsGrid.innerHTML = '';

  data.forEach(testimonial => {
    const testimonialCard = document.createElement('div');
    testimonialCard.classList.add('testimonial-card');

    const customerInfo = document.createElement('div');
    customerInfo.classList.add('customer-info');

    const customerAvatar = document.createElement('div');
    customerAvatar.classList.add('customer-avatar');
    const img = document.createElement('img');
    img.src = testimonial.avatar;
    img.alt = "Customer Avatar";
    customerAvatar.appendChild(img);
    customerInfo.appendChild(customerAvatar);

    const divTextRating = document.createElement('div');
    const customerName = document.createElement('span');
    customerName.classList.add('customer-name');
    customerName.textContent = testimonial.name;
    divTextRating.appendChild(customerName);

    const ratingDiv = document.createElement('div');
    ratingDiv.classList.add('rating');

  
    const fullStars = Math.floor(testimonial.rating);
    const hasHalfStar = testimonial.rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      const star = document.createElement('i');
      star.classList.add('fas', 'fa-star', 'star');
      ratingDiv.appendChild(star);
    }
    if (hasHalfStar) {
      const halfStar = document.createElement('i');
      halfStar.classList.add('fas', 'fa-star-half-alt', 'star');
      ratingDiv.appendChild(halfStar);
    }

    const totalStars = 5;
    for (let i = 0; i < (totalStars - fullStars - (hasHalfStar ? 1 : 0)); i++) {
        const emptyStar = document.createElement('i');
        emptyStar.classList.add('far', 'fa-star', 'star'); 
        ratingDiv.appendChild(emptyStar);
    }


    divTextRating.appendChild(ratingDiv);
    customerInfo.appendChild(divTextRating);
    testimonialCard.appendChild(customerInfo);

    const testimonialText = document.createElement('p');
    testimonialText.classList.add('testimonial-text');
    testimonialText.textContent = testimonial.text;
    testimonialCard.appendChild(testimonialText);

    testimonialsGrid.appendChild(testimonialCard);
  });
};