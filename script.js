// ============ INITIALIZE ON PAGE LOAD ============
document.addEventListener('DOMContentLoaded', () => {
  const currentLang = getCurrentLanguage();
  document.documentElement.lang = currentLang;
  checkLanguageSelection();
  updatePageContent();
});

// ============ SMOOTH SCROLL ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu) {
            mobileMenu.classList.remove('active');
        }
    });
});

// ============ MOBILE MENU TOGGLE ============
const menuToggle = document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');
const mobileMenu = document.getElementById('mobileMenu');

if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });
}

if (menuClose && mobileMenu) {
    menuClose.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
}

document.addEventListener('click', (e) => {
    if (mobileMenu && !mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        mobileMenu.classList.remove('active');
    }
});

// ============ EXPAND/COLLAPSE SERVICES ============
const expandBtn = document.getElementById('expandBtn');
const hiddenServices = document.getElementById('hiddenServices');

if (expandBtn && hiddenServices) {
    expandBtn.addEventListener('click', () => {
        hiddenServices.classList.toggle('visible');
        expandBtn.classList.toggle('expanded');
    });
}

// ============ FORM SUBMISSION WITH FORMSPREE ============
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Валідація форми перед відправкою
        const name = contactForm.querySelector('input[name="name"]').value.trim();
        const phone = contactForm.querySelector('input[name="phone"]').value.trim();
        const email = contactForm.querySelector('input[name="email"]').value.trim();
        const method = contactForm.querySelector('select[name="method"]').value;
        const query = contactForm.querySelector('textarea[name="query"]').value.trim();
        
        // Валідація email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Будь ласка, введіть коректний email адрес');
            e.preventDefault();
            return;
        }
        
        // Валідація телефону (базова)
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(phone) || phone.length < 7) {
            alert('Будь ласка, введіть коректний номер телефону');
            e.preventDefault();
            return;
        }
        
        if (!name || !method || !query) {
            alert('Будь ласка, заповніть всі обов\'язкові поля');
            e.preventDefault();
            return;
        }
        
        const button = contactForm.querySelector('.contacts__button');
        const originalText = button.textContent;
        
        button.textContent = 'Відправляю...';
        button.disabled = true;
        
        // Чекаємо 1.5 сек перед тим як показати повідомлення
        // (Formspree обробляє в фоні)
        setTimeout(() => {
            console.log('✅ Форма відправлена через Formspree');
            alert('Дякую! Ми зв\'яжемось з вами найскоріше! 🙏');
            contactForm.reset();
            
            button.textContent = originalText;
            button.disabled = false;
        }, 1500);
    });
}

// ============ ANIMATIONS ON SCROLL ============
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card').forEach(el => {
    observer.observe(el);
});

// ============ ADD ANIMATIONS ============
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ============ UPDATE PAGE CONTENT ============
function updatePageContent() {
  const elements = {
    '.logo__title': 'headerTitle',
    '.logo__subtitle': 'headerSubtitle',
    '.hero__title': 'heroTitle',
    '.hero__intro-text': 'heroIntro',
  };

  Object.entries(elements).forEach(([selector, key]) => {
    const el = document.querySelector(selector);
    if (el) el.textContent = t(key);
  });

  const aboutTexts = document.querySelectorAll('.about__text p');
  if (aboutTexts.length >= 4) {
    aboutTexts[0].textContent = t('aboutP1');
    aboutTexts[1].textContent = t('aboutP2');
    aboutTexts[2].textContent = t('aboutP3');
    aboutTexts[3].textContent = t('aboutP4');
  }

  const sectionTitles = document.querySelectorAll('.section-title');
  if (sectionTitles.length >= 1) sectionTitles[0].textContent = t('aboutTitle');
  if (sectionTitles.length >= 2) sectionTitles[1].textContent = t('servicesTitle');

  const servicesIntro = document.querySelector('.services__intro');
  if (servicesIntro) servicesIntro.textContent = t('servicesIntro');

  const serviceCards = document.querySelectorAll('.service-card');
  const serviceTitles = [
    'service1Title', 'service2Title', 'service3Title', 'service4Title',
    'service5Title', 'service6Title', 'service7Title', 'service8Title',
    'service9Title', 'service10Title'
  ];
  const serviceTexts = [
    'service1Text', 'service2Text', 'service3Text', 'service4Text',
    'service5Text', 'service6Text', 'service7Text', 'service8Text',
    'service9Text', 'service10Text'
  ];

  serviceCards.forEach((card, i) => {
    const title = card.querySelector('.service-card__title');
    const text = card.querySelector('.service-card__text');
    if (title) title.innerHTML = t(serviceTitles[i]);
    if (text) text.innerHTML = t(serviceTexts[i]);
  });

  const disclaimer = document.querySelector('.services__disclaimer');
  if (disclaimer) disclaimer.textContent = t('servicesDisclaimer');

  const magicHelp = document.querySelector('.magic-help__title');
  if (magicHelp) magicHelp.innerHTML = t('magicTitle');

  const magicSubtitle = document.querySelector('.magic-help__subtitle');
  if (magicSubtitle) magicSubtitle.textContent = t('magicSubtitle');

  const magicContent = document.querySelectorAll('.magic-help__text-block p');
  if (magicContent.length >= 3) {
    magicContent[0].textContent = t('magicP1');
    magicContent[1].textContent = t('magicP2');
    magicContent[2].textContent = t('magicP3');
  }

  const restrictionsTitle = document.querySelector('.magic-help__restrictions-title');
  if (restrictionsTitle) restrictionsTitle.textContent = t('magicRestrictionsTitle');

  const restrictionsList = document.querySelectorAll('.magic-help__list li');
  const restrictionKeys = [
    'magicRestriction1', 'magicRestriction2', 'magicRestriction3',
    'magicRestriction4', 'magicRestriction5', 'magicRestriction6', 'magicRestriction7'
  ];
  restrictionsList.forEach((li, i) => {
    if (i < restrictionKeys.length) {
      li.textContent = t(restrictionKeys[i]);
    }
  });

  const attention = document.querySelector('.magic-help__attention');
  if (attention) attention.textContent = t('magicAttention');

  const warningTitle = document.querySelector('.magic-help__warning-title');
  if (warningTitle) warningTitle.textContent = t('magicWarningTitle');

  const warningAge = document.querySelector('.magic-help__warning-age');
  if (warningAge) warningAge.textContent = t('magicWarningAge');

  const warningsTitle = document.querySelector('.warnings__title');
  if (warningsTitle) warningsTitle.textContent = t('warningsTitle');

  const warningsItems = document.querySelectorAll('.warnings__item');
  const warningKeys = [
    'warningsItem1', 'warningsItem2', 'warningsItem3', 'warningsItem4',
    'warningsItem5', 'warningsItem6', 'warningsItem7'
  ];
  warningsItems.forEach((item, i) => {
    if (i < warningKeys.length) {
      item.textContent = t(warningKeys[i]);
    }
  });

  const supportTitle = document.querySelector('.warnings__support-title');
  if (supportTitle) supportTitle.textContent = t('warningsSupportTitle');

  const supportText = document.querySelector('.warnings__support-text');
  if (supportText) supportText.innerHTML = t('warningsSupportText');

  const contactsTitle = document.querySelector('.contacts__title');
  if (contactsTitle) contactsTitle.textContent = t('contactsTitle');

  const contactsFormQuote = document.querySelector('.contacts__form-quote');
  if (contactsFormQuote) contactsFormQuote.textContent = t('contactsFormQuote');

  const inputs = document.querySelectorAll('.contacts__input');
  if (inputs[0]) inputs[0].placeholder = t('contactsInputName');
  if (inputs[1]) inputs[1].placeholder = t('contactsInputPhone');

  const select = document.querySelector('.contacts__select');
  if (select) {
    select.innerHTML = `
      <option value="">${t('contactsSelect')}</option>
      <option value="instagram">${t('contactsSelectInstagram')}</option>
      <option value="whatsapp">${t('contactsSelectWhatsapp')}</option>
      <option value="telegram">${t('contactsSelectTelegram')}</option>
      <option value="call">${t('contactsSelectCall')}</option>
    `;
  }

  const textarea = document.querySelector('.contacts__textarea');
  if (textarea) textarea.placeholder = t('contactsTextarea');

  const button = document.querySelector('.contacts__button');
  if (button) button.textContent = t('contactsButton');

  const footer = document.querySelector('.footer p');
  if (footer) footer.innerHTML = t('footerText');

  const modalTitle = document.getElementById('modalTitle');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const modalNote = document.getElementById('modalNote');

  if (modalTitle) modalTitle.textContent = t('modalTitle');
  if (modalSubtitle) modalSubtitle.textContent = t('modalSubtitle');
  if (modalNote) modalNote.textContent = t('modalNote');

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.lang === getCurrentLanguage()) {
      btn.classList.add('active');
    }
  });
}