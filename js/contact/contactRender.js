export const renderContactInfo = (containerSelector, data) => {
  const container = document.querySelector(containerSelector);
  if (!container) {
    console.error(`Contact info container not found: ${containerSelector}`);
    return;
  }
  container.innerHTML = '';

  data.forEach(item => {
    const p = document.createElement('p');
    const icon = document.createElement('i');
    icon.classList.add(...item.iconClass.split(' '));
    p.appendChild(icon);

    if (item.isLink) {
      const a = document.createElement('a');
      a.href = item.linkHref;
      a.textContent = item.text;
      p.appendChild(a);
    } else {
      p.appendChild(document.createTextNode(` ${item.text}`)); // Add text node
    }
    container.appendChild(p);
  });
};

export const renderFAQs = (containerSelector, data) => {
  const faqList = document.querySelector(containerSelector);
  if (!faqList) {
    console.error(`FAQ list container not found: ${containerSelector}`);
    return;
  }
  faqList.innerHTML = ''; 

  data.forEach(faq => {
    const faqItem = document.createElement('div');
    faqItem.classList.add('faq-item');

    const faqQuestion = document.createElement('div');
    faqQuestion.classList.add('faq-question');
    const questionSpan = document.createElement('span');
    questionSpan.textContent = faq.question;
    const toggleIcon = document.createElement('span');
    toggleIcon.classList.add('toggle-icon');
    toggleIcon.textContent = '+'; 
    faqQuestion.appendChild(questionSpan);
    faqQuestion.appendChild(toggleIcon);
    faqItem.appendChild(faqQuestion);

    const faqAnswer = document.createElement('div');
    faqAnswer.classList.add('faq-answer');
    const answerP = document.createElement('p');
    answerP.textContent = faq.answer;
    faqAnswer.appendChild(answerP);
    faqItem.appendChild(faqAnswer);

    faqList.appendChild(faqItem);
  });

 
  const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const faqItem = question.closest(".faq-item");
      faqItem.classList.toggle("active");

      const toggleIcon = question.querySelector('.toggle-icon');
      if (faqItem.classList.contains('active')) {
          toggleIcon.textContent = '-';
      } else {
          toggleIcon.textContent = '+';
      }
    });
  });
};