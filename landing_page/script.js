// Translation strings
const translations = {
  ru: {
    hero_title: "Решения для промышленной автоматизации",
    hero_subtitle: "Продажа оборудования и датчиков для всех отраслей",
    hero_cta: "Связаться с нами",

    services_title: "Наши услуги",
    service1_title: "Проектирование систем КИПиА",
    service1_desc: "Разработка и внедрение автоматизированных решений",
    service2_title: "Поставка оборудования",
    service2_desc: "Широкий ассортимент датчиков и приборов напрямую от производителей",
    service3_title: "Поддержка и сервис",
    service3_desc: "Техническая поддержка, монтаж и обслуживание",

    about_title: "О компании",
    about_text: "Мы более 10 лет поставляем надежные решения для автоматизации производственных процессов.",

    contact_title: "Свяжитесь с нами",
    contact_subtitle: "Оставьте заявку, и мы ответим в ближайшее время",
    contact_send: "Отправить",

    name_placeholder: "Имя",
    email_placeholder: "E-mail",
    message_placeholder: "Сообщение"
  },
  uz: {
    hero_title: "Sanoat avtomatikasi bo'yicha yechimlar",
    hero_subtitle: "Barcha sohalar uchun uskunalar va datchiklar savdosi",
    hero_cta: "Biz bilan bog'lanish",

    services_title: "Bizning xizmatlarimiz",
    service1_title: "KIPIА tizimlarini loyihalash",
    service1_desc: "Avtomatlashtirilgan yechimlarni ishlab chiqish va joriy etish",
    service2_title: "Uskunalarni yetkazib berish",
    service2_desc: "Ishlab chiqaruvchilardan to'g'ridan-to'g'ri keng turdagi datchiklar va asboblar",
    service3_title: "Qo'llab-quvvatlash va servis",
    service3_desc: "Texnik qo'llab-quvvatlash, o'rnatish va xizmat ko'rsatish",

    about_title: "Kompaniya haqida",
    about_text: "Biz 10 yildan ortiq vaqt davomida ishlab chiqarish jarayonlarini avtomatlashtirish uchun ishonchli yechimlar yetkazib beramiz.",

    contact_title: "Biz bilan bog'laning",
    contact_subtitle: "So'rov qoldiring va biz tez orada javob beramiz",
    contact_send: "Yuborish",

    name_placeholder: "Ism",
    email_placeholder: "E-mail",
    message_placeholder: "Xabar"
  }
};

// Current language (default Russian)
let currentLang = 'ru';

// DOM Elements
const langButtons = document.querySelectorAll('.lang-btn');
const translatable = document.querySelectorAll('[data-i18n]');
const translatablePlaceholders = document.querySelectorAll('[data-i18n-placeholder]');

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  // Update text nodes
  translatable.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update placeholders
  translatablePlaceholders.forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Update active button state
  langButtons.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// Attach click listeners to language buttons
langButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    setLanguage(lang);
  });
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Initialize default language on page load
setLanguage(currentLang);