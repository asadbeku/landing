// Language translations
const translations = {
    ru: {
        'company-name': 'КИП Автоматика',
        'nav-home': 'Главная',
        'nav-services': 'Услуги',
        'nav-products': 'Продукция',
        'nav-about': 'О нас',
        'nav-contact': 'Контакты',
        'hero-title': 'Профессиональная КИП автоматика для промышленности',
        'hero-subtitle': 'Поставляем качественное оборудование, датчики и системы автоматизации для промышленных предприятий',
        'hero-btn-contact': 'Связаться с нами',
        'hero-btn-services': 'Наши услуги',
        'services-title': 'Наши услуги',
        'services-subtitle': 'Комплексные решения для промышленной автоматизации',
        'service1-title': 'КИП автоматика',
        'service1-desc': 'Проектирование и монтаж систем контроля и измерения промышленных процессов',
        'service2-title': 'Датчики и сенсоры',
        'service2-desc': 'Поставка высокоточных датчиков давления, температуры, уровня и других параметров',
        'service3-title': 'Техническое обслуживание',
        'service3-desc': 'Регулярное обслуживание и ремонт промышленного оборудования',
        'service4-title': 'Системы мониторинга',
        'service4-desc': 'Внедрение SCADA систем и удаленного мониторинга производственных процессов',
        'products-title': 'Наша продукция',
        'products-subtitle': 'Качественное оборудование от ведущих производителей',
        'product1-title': 'Датчики температуры',
        'product1-desc': 'Термопары, термосопротивления, бесконтактные датчики температуры',
        'product2-title': 'Датчики давления',
        'product2-desc': 'Манометры, реле давления, преобразователи давления',
        'product3-title': 'Датчики уровня',
        'product3-desc': 'Поплавковые, ультразвуковые, радарные датчики уровня',
        'product4-title': 'Электротехника',
        'product4-desc': 'Контакторы, реле, автоматические выключатели, пускатели',
        'product5-title': 'Системы управления',
        'product5-desc': 'ПЛК, HMI панели, частотные преобразователи',
        'product6-title': 'Кабельная продукция',
        'product6-desc': 'Силовые и сигнальные кабели, соединительные элементы',
        'about-title': 'О нашей компании',
        'about-desc1': 'Мы специализируемся на поставке и внедрении современных систем КИП автоматики для промышленных предприятий. Наша команда имеет многолетний опыт работы в области промышленной автоматизации.',
        'about-desc2': 'Предлагаем полный цикл услуг: от проектирования до пуско-наладочных работ и технического обслуживания оборудования.',
        'feature1': 'Опыт работы более 10 лет',
        'feature2': 'Сертифицированные специалисты',
        'feature3': 'Гарантия на все работы',
        'feature4': '24/7 техническая поддержка',
        'stat1': 'Выполненных проектов',
        'stat2': 'Довольных клиентов',
        'stat3': 'Лет опыта',
        'contact-title': 'Свяжитесь с нами',
        'contact-subtitle': 'Готовы обсудить ваш проект',
        'address-title': 'Адрес',
        'address': 'г. Ташкент, ул. Промышленная, 15',
        'phone-title': 'Телефон',
        'email-title': 'Email',
        'hours-title': 'Время работы',
        'hours': 'Пн-Пт: 9:00 - 18:00',
        'form-name': 'Ваше имя',
        'form-email': 'Email',
        'form-phone': 'Телефон',
        'form-message': 'Сообщение',
        'form-submit': 'Отправить сообщение',
        'footer-desc': 'Ваш надежный партнер в области промышленной автоматизации',
        'footer-services': 'Услуги',
        'footer-service1': 'КИП автоматика',
        'footer-service2': 'Датчики',
        'footer-service3': 'Обслуживание',
        'footer-service4': 'Мониторинг',
        'footer-contact': 'Контакты',
        'footer-rights': 'Все права защищены.'
    },
    uz: {
        'company-name': 'KIP Avtomatika',
        'nav-home': 'Bosh sahifa',
        'nav-services': 'Xizmatlar',
        'nav-products': 'Mahsulotlar',
        'nav-about': 'Biz haqimizda',
        'nav-contact': 'Aloqa',
        'hero-title': 'Sanoat uchun professional KIP avtomatika',
        'hero-subtitle': 'Sanoat korxonalari uchun sifatli uskunalar, datchiklar va avtomatlashtirish tizimlarini yetkazib beramiz',
        'hero-btn-contact': 'Biz bilan bog\'laning',
        'hero-btn-services': 'Bizning xizmatlar',
        'services-title': 'Bizning xizmatlar',
        'services-subtitle': 'Sanoat avtomatlashtiruvi uchun kompleks yechimlar',
        'service1-title': 'KIP avtomatika',
        'service1-desc': 'Sanoat jarayonlarini nazorat qilish va o\'lchash tizimlarini loyihalash va o\'rnatish',
        'service2-title': 'Datchiklar va sensorlar',
        'service2-desc': 'Bosim, harorat, daraja va boshqa parametrlarning yuqori aniqlikdagi datchiklar',
        'service3-title': 'Texnik xizmat ko\'rsatish',
        'service3-desc': 'Sanoat uskunalarini muntazam xizmat ko\'rsatish va ta\'mirlash',
        'service4-title': 'Monitoring tizimlari',
        'service4-desc': 'SCADA tizimlari va ishlab chiqarish jarayonlarini masofaviy monitoring',
        'products-title': 'Bizning mahsulotlar',
        'products-subtitle': 'Yetakchi ishlab chiqaruvchilardan sifatli uskunalar',
        'product1-title': 'Harorat datchiklari',
        'product1-desc': 'Termojuftlar, termoqarshiliklar, temasiz harorat datchiklari',
        'product2-title': 'Bosim datchiklari',
        'product2-desc': 'Manometrlar, bosim relelari, bosim o\'zgartirgichlari',
        'product3-title': 'Daraja datchiklari',
        'product3-desc': 'Suzuvchi, ultratovushli, radar daraja datchiklari',
        'product4-title': 'Elektrotexnika',
        'product4-desc': 'Kontaktorlar, relеlar, avtomatik uzgichlar, ishga tushirgichlar',
        'product5-title': 'Boshqaruv tizimlari',
        'product5-desc': 'PLC, HMI panellari, chastota o\'zgartirgichlari',
        'product6-title': 'Kabel mahsulotlari',
        'product6-desc': 'Quvvat va signal kabellari, ulanish elementlari',
        'about-title': 'Bizning kompaniya haqida',
        'about-desc1': 'Biz sanoat korxonalari uchun zamonaviy KIP avtomatika tizimlarini yetkazib berish va joriy etishda ixtisoslashganmiz. Bizning jamoamiz sanoat avtomatlashtiruvi sohasida ko\'p yillik tajribaga ega.',
        'about-desc2': 'To\'liq xizmatlar tsiklini taklif qilamiz: loyihalashdan tortib ishga tushirish-sozlash ishlari va uskunalarni texnik xizmat ko\'rsatishgacha.',
        'feature1': '10 yildan ortiq ish tajribasi',
        'feature2': 'Sertifikatlangan mutaxassislar',
        'feature3': 'Barcha ishlarga kafolat',
        'feature4': '24/7 texnik yordam',
        'stat1': 'Bajarilgan loyihalar',
        'stat2': 'Mamnun mijozlar',
        'stat3': 'Yillik tajriba',
        'contact-title': 'Biz bilan bog\'laning',
        'contact-subtitle': 'Sizning loyihangizni muhokama qilishga tayyormiz',
        'address-title': 'Manzil',
        'address': 'Toshkent sh., Sanoat ko\'chasi, 15',
        'phone-title': 'Telefon',
        'email-title': 'Email',
        'hours-title': 'Ish vaqti',
        'hours': 'Du-Ju: 9:00 - 18:00',
        'form-name': 'Ismingiz',
        'form-email': 'Email',
        'form-phone': 'Telefon',
        'form-message': 'Xabar',
        'form-submit': 'Xabar yuborish',
        'footer-desc': 'Sanoat avtomatlashtiruvi sohasidagi ishonchli hamkoringiz',
        'footer-services': 'Xizmatlar',
        'footer-service1': 'KIP avtomatika',
        'footer-service2': 'Datchiklar',
        'footer-service3': 'Xizmat ko\'rsatish',
        'footer-service4': 'Monitoring',
        'footer-contact': 'Aloqa',
        'footer-rights': 'Barcha huquqlar himoyalangan.'
    }
};

// Current language
let currentLang = 'ru';

// DOM elements
const langButtons = document.querySelectorAll('.lang-btn');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const contactForm = document.getElementById('contactForm');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    initializeNavigation();
    initializeForm();
    initializeAnimations();
});

// Language switching functionality
function initializeLanguage() {
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
}

function switchLanguage(lang) {
    if (lang === currentLang) return;
    
    currentLang = lang;
    
    // Update active language button
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update document language
    document.documentElement.lang = lang;
    
    // Update page title
    const titles = {
        ru: 'КИП Автоматика - Промышленное оборудование и датчики',
        uz: 'KIP Avtomatika - Sanoat uskunalari va datchiklari'
    };
    document.title = titles[lang];
    
    // Update all translatable elements
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Save language preference
    localStorage.setItem('preferred-language', lang);
}

// Navigation functionality
function initializeNavigation() {
    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header background change on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
}

// Form functionality
function initializeForm() {
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission();
        });
        
        // Form validation and styling
        const formInputs = contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                if (this.value === '') {
                    this.parentElement.classList.remove('focused');
                }
            });
            
            input.addEventListener('input', function() {
                validateField(this);
            });
        });
    }
}

function handleFormSubmission() {
    const formData = new FormData(contactForm);
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    
    // Show loading state
    submitBtn.classList.add('loading');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = currentLang === 'ru' ? 'Отправка...' : 'Yuborilmoqda...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
        // Reset form
        contactForm.reset();
        
        // Show success message
        showNotification(
            currentLang === 'ru' ? 'Сообщение отправлено успешно!' : 'Xabar muvaffaqiyatli yuborildi!',
            'success'
        );
        
        // Reset button
        submitBtn.classList.remove('loading');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Remove focused states
        const formGroups = contactForm.querySelectorAll('.form-group');
        formGroups.forEach(group => group.classList.remove('focused'));
        
    }, 2000);
}

function validateField(field) {
    const value = field.value.trim();
    const fieldType = field.type;
    let isValid = true;
    
    // Remove previous error states
    field.classList.remove('error');
    
    // Basic validation
    if (field.hasAttribute('required') && value === '') {
        isValid = false;
    } else if (fieldType === 'email' && value !== '') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = emailRegex.test(value);
    } else if (fieldType === 'tel' && value !== '') {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
        isValid = phoneRegex.test(value);
    }
    
    // Apply error state if invalid
    if (!isValid) {
        field.classList.add('error');
    }
    
    return isValid;
}

// Animations
function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.service-card, .product-card, .stat, .contact-item');
    animatedElements.forEach(el => observer.observe(el));
    
    // Counter animation for stats
    const statsNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsNumbers.forEach(stat => statsObserver.observe(stat));
}

function animateCounter(element) {
    const target = parseInt(element.textContent);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Styles for notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 2rem',
        borderRadius: '10px',
        color: 'white',
        fontSize: '1rem',
        fontWeight: '500',
        zIndex: '10000',
        transform: 'translateX(400px)',
        transition: 'transform 0.3s ease',
        backgroundColor: type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#2563eb'
    });
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Hide and remove notification
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Load saved language preference
window.addEventListener('load', function() {
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang && savedLang !== currentLang) {
        switchLanguage(savedLang);
    }
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization
const debouncedResize = debounce(() => {
    // Handle window resize events
    const isMobile = window.innerWidth <= 768;
    if (!isMobile && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
}, 250);

window.addEventListener('resize', debouncedResize);