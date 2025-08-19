(function () {
  const TRANSLATIONS = {
    ru: {
      'site.title': 'КИП и Автоматизация — Оборудование и датчики',
      'site.description': 'Поставки датчиков, КИПиА и решений для промышленной автоматизации: давление, температура, уровень, расход, PLC, частотники, шкафы управления. Доставка по Узбекистану.',

      'header.logo': 'KIP.AVTOMATIKA',
      'nav.products': 'Каталог',
      'nav.industries': 'Отрасли',
      'nav.services': 'Услуги',
      'nav.about': 'О компании',
      'nav.contacts': 'Контакты',

      'hero.title': 'Оборудование и датчики для промышленной автоматизации',
      'hero.subtitle': 'Поставки, проектирование и сервис по всей стране',
      'hero.cta.primary': 'Запросить предложение',
      'hero.cta.secondary': 'Каталог',
      'hero.bullet1': 'Давление, температура, уровень, расход',
      'hero.bullet2': 'PLC, частотники, шкафы управления',
      'hero.bullet3': 'Склад и быстрая доставка по Узбекистану',

      'products.title': 'Категории оборудования',
      'product.pressure': 'Датчики давления',
      'product.pressure.desc': 'Манометрические, дифференциальные, уровнемеры. Мембранные уплотнения.',
      'product.temperature': 'Температура (RTD/TC)',
      'product.temperature.desc': 'Термопары, термосопротивления, преобразователи, гильзы.',
      'product.flow': 'Расходомеры',
      'product.flow.desc': 'Электромагнитные, вихревые, турбинные, масс- и ультразвуковые.',
      'product.level': 'Датчики уровня',
      'product.level.desc': 'Поплавковые, гидростатические, радарные и ёмкостные уровнемеры.',
      'product.plc': 'PLC и модули ввода-вывода',
      'product.plc.desc': 'Контроллеры, панели HMI, модемы, протоколы Modbus/Profibus/Profinet.',
      'product.vfd': 'ПЧ и софт-стартеры',
      'product.vfd.desc': 'Частотные преобразователи, пускатели, фильтры, дроссели.',
      'product.cabinets': 'Шкафы управления',
      'product.cabinets.desc': 'Проектирование, сборка, испытания, документация.',
      'product.hmi': 'HMI и SCADA',
      'product.hmi.desc': 'Панели оператора, SCADA-решения, промышленная визуализация.',

      'industries.title': 'Мы работаем с отраслями',
      'industry.oilgas': 'Нефть и газ',
      'industry.chem': 'Химия и нефте-химия',
      'industry.energy': 'Энергетика и ЖКХ',
      'industry.water': 'Водоснабжение и стоки',
      'industry.food': 'Пищевая промышленность',
      'industry.mining': 'Горнодобывающая и металлургия',
      'industry.pharma': 'Фармацевтика',

      'services.title': 'Услуги',
      'service.supply': 'Поставки оборудования',
      'service.supply.desc': 'Официальная поставка, сертификаты и гарантия производителя.',
      'service.design': 'Проектирование и подбор',
      'service.design.desc': 'Подбор под задачу, спецификации, BIM/чертежи и пояснительные записки.',
      'service.install': 'Монтаж и пусконаладка',
      'service.install.desc': 'Монтаж на площадке, наладка, обучение персонала.',
      'service.calibration': 'Калибровка и метрология',
      'service.calibration.desc': 'Поверка, калибровка, первичная и периодическая аттестация.',
      'service.service': 'Гарантия и сервис',
      'service.service.desc': 'Сервисные контракты, пост-гарантийное обслуживание.',

      'about.title': 'Почему мы',
      'about.point1': 'Экспертиза в КИПиА и автоматизации',
      'about.point2': 'Склад и оперативная доставка',
      'about.point3': 'Техническая поддержка 24/7',
      'about.point4': 'Гарантийные обязательства',
      'about.stat.years': 'лет опыта',
      'about.stat.items': 'позиций каталога',
      'about.stat.support': 'поддержка',

      'brands.title': 'Проверенные бренды',

      'cta.title': 'Нужна консультация?',
      'cta.subtitle': 'Оставьте контакты — поможем подобрать решение.',

      'form.name': 'Имя',
      'form.phone': 'Телефон',
      'form.email': 'Email',
      'form.message': 'Сообщение',
      'form.name.placeholder': 'Имя',
      'form.phone.placeholder': '+998 90 000 00 00',
      'form.email.placeholder': 'you@example.com',
      'form.message.placeholder': 'Что требуется подобрать?',
      'form.hint': 'Укажите телефон или email чтобы мы могли связаться.',
      'form.submit': 'Отправить',
      'form.error': 'Пожалуйста, заполните обязательные поля.',
      'form.success': 'Спасибо! Мы свяжемся с вами в течение рабочего дня.',

      'contact.title': 'Контакты',
      'contact.phone': 'Телефон',
      'contact.email': 'Email',
      'contact.address': 'Адрес',
      'contact.address.value': 'Ташкент, Узбекистон ш., ул. Промышленная 1',
      'contact.hours': 'Режим работы',
      'contact.hours.value': 'Пн–Пт, 9:00–18:00',

      'footer.company': 'KIP.AVTOMATIKA'
    },
    uz: {
      'site.title': 'KIP va Avtomatizatsiya — Uskunalar va datchiklar',
      'site.description': "Sanoat avtomatlashtirish uchun datchiklar, KIP va yechimlar: bosim, harorat, sath, sarf, PLC, chastota o'zgartirgichlar, boshqaruv shkaflari. O'zbekiston bo'ylab yetkazib berish.",

      'header.logo': 'KIP.AVTOMATIKA',
      'nav.products': 'Katalog',
      'nav.industries': 'Tarmoqlar',
      'nav.services': 'Xizmatlar',
      'nav.about': 'Kompaniya haqida',
      'nav.contacts': 'Aloqa',

      'hero.title': 'Sanoat avtomatlashtirish uchun uskunalar va datchiklar',
      'hero.subtitle': "Butun mamlakat bo'ylab yetkazib berish, loyihalash va servis",
      'hero.cta.primary': "Tijorat taklifini so'rash",
      'hero.cta.secondary': 'Katalog',
      'hero.bullet1': 'Bosim, harorat, sath, sarf',
      'hero.bullet2': "PLC, chastotali o'zgartirgichlar, boshqaruv shkaflari",
      'hero.bullet3': "O'zbekiston bo'ylab tez yetkazib berish",

      'products.title': 'Uskuna toifalari',
      'product.pressure': 'Bosim datchiklari',
      'product.pressure.desc': 'Manometrik, differensial, sath o‘lchagichlar. Membranali muhrlar.',
      'product.temperature': 'Harorat (RTD/TC)',
      'product.temperature.desc': 'Termojuftliklar, termorezistorlar, o‘zgartirgichlar, gilzalar.',
      'product.flow': 'Sarf o‘lchagichlar',
      'product.flow.desc': 'Elektromagnit, girdob, turbinali, massa va ultratovush.',
      'product.level': 'Sath datchiklari',
      'product.level.desc': 'Suzuvchi, gidrostatik, radar va sig‘imli o‘lchagichlar.',
      'product.plc': 'PLC va kirish-chiqish modullari',
      'product.plc.desc': 'Kontrollerlar, HMI panellar, modemlar, Modbus/Profibus/Profinet.',
      'product.vfd': "Chastota o'zgartirgichlar va soft-starterlar",
      'product.vfd.desc': "Chastotali o'zgartirgichlar, starterlar, filьtrlar, drossellar.",
      'product.cabinets': 'Boshqaruv shkaflari',
      'product.cabinets.desc': 'Loyihalash, yig‘ish, sinovlar, hujjatlar.',
      'product.hmi': 'HMI va SCADA',
      'product.hmi.desc': 'Operator panellari, SCADA yechimlar, sanoat vizualizatsiyasi.',

      'industries.title': 'Biz quyidagi tarmoqlarda ishlaymiz',
      'industry.oilgas': 'Neft va gaz',
      'industry.chem': 'Kimyo va neft-kimyo',
      'industry.energy': "Energetika va kommunal xo'jalik",
      'industry.water': "Suv ta'minoti va oqava",
      'industry.food': "Oziq-ovqat va ichimliklar",
      'industry.mining': 'Konchilik va metallurgiya',
      'industry.pharma': 'Farmatsevtika',

      'services.title': 'Xizmatlar',
      'service.supply': 'Uskunalarni yetkazib berish',
      'service.supply.desc': 'Rasmiy yetkazib berish, sertifikatlar va ishlab chiqaruvchi kafolati.',
      'service.design': 'Loyihalash va tanlash',
      'service.design.desc': 'Vazifaga mos tanlash, spetsifikatsiya, chizmalar va izohlar.',
      'service.install': 'Montaj va ishga tushirish',
      'service.install.desc': 'Obyektda o‘rnatish, sozlash, xodimlarni o‘qitish.',
      'service.calibration': 'Kalibrlash va metrologiya',
      'service.calibration.desc': 'Sinalash, kalibrlash, birlamchi va davriy attestatsiya.',
      'service.service': 'Kafolat va servis',
      'service.service.desc': 'Servis shartnomalari, kafolatdan keyingi xizmat.',

      'about.title': 'Nega biz',
      'about.point1': 'KIP va avtomatlashtirish bo‘yicha ekspertiza',
      'about.point2': 'Ombor va tezkor yetkazib berish',
      'about.point3': '24/7 texnik ko‘mak',
      'about.point4': 'Kafolat majburiyatlari',
      'about.stat.years': 'yillik tajriba',
      'about.stat.items': 'katalog pozitsiyasi',
      'about.stat.support': 'qo‘llab-quvvatlash',

      'brands.title': 'Ishonchli brendlar',

      'cta.title': 'Maslahat kerakmi?',
      'cta.subtitle': 'Kontaktlaringizni qoldiring — mos yechimni tavsiya qilamiz.',

      'form.name': 'Ism',
      'form.phone': 'Telefon',
      'form.email': 'Email',
      'form.message': 'Xabar',
      'form.name.placeholder': 'Ismingiz',
      'form.phone.placeholder': '+998 90 000 00 00',
      'form.email.placeholder': 'you@example.com',
      'form.message.placeholder': 'Qanday yechim kerak?',
      'form.hint': "Bog'lanish uchun telefon yoki email qoldiring.",
      'form.submit': 'Yuborish',
      'form.error': "Iltimos, majburiy maydonlarni to'ldiring.",
      'form.success': 'Rahmat! Ish kunida siz bilan bog‘lanamiz.',

      'contact.title': 'Aloqa',
      'contact.phone': 'Telefon',
      'contact.email': 'Email',
      'contact.address': 'Manzil',
      'contact.address.value': 'Toshkent, O‘zbekiston sh., Sanoat ko‘chasi 1',
      'contact.hours': 'Ish vaqti',
      'contact.hours.value': 'Du–Ju, 9:00–18:00',

      'footer.company': 'KIP.AVTOMATIKA'
    }
  };

  function getDefaultLang() {
    const saved = localStorage.getItem('lang');
    if (saved && (saved === 'ru' || saved === 'uz')) return saved;
    const nav = (navigator.language || navigator.userLanguage || 'ru').toLowerCase();
    if (nav.startsWith('uz')) return 'uz';
    return 'ru';
  }

  function t(lang, key) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.ru;
    return dict[key] || key;
  }

  function applyTranslations(lang) {
    document.documentElement.lang = lang;
    const titleEl = document.querySelector('title[data-i18n]');
    if (titleEl) titleEl.textContent = t(lang, titleEl.getAttribute('data-i18n'));
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t(lang, 'site.description'));

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (!key) return;
      el.textContent = t(lang, key);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (!key) return;
      el.setAttribute('placeholder', t(lang, key));
    });

    document.querySelectorAll('.lang-switcher__btn').forEach((btn) => {
      const isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
  }

  function setLanguage(lang) {
    if (!(lang in TRANSLATIONS)) return;
    localStorage.setItem('lang', lang);
    window.i18n.currentLang = lang;
    applyTranslations(lang);
  }

  function bindLanguageSwitcher() {
    document.querySelectorAll('[data-lang]')
      .forEach((btn) => btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang'))));
  }

  window.i18n = {
    get currentLang() { return getDefaultLang(); },
    set currentLang(_) {},
    t: (key) => t(getDefaultLang(), key),
    setLanguage,
    apply: applyTranslations
  };

  document.addEventListener('DOMContentLoaded', () => {
    const initial = getDefaultLang();
    applyTranslations(initial);
    bindLanguageSwitcher();
  });
})();

