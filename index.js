/**
 * Apple Aesthetics Interactivity & Animations Script
 * Cabinet d'Ophtalmologie - Dr. Sara Boumaazi
 */

// Translation Data Dictionary
const translations = {
    en: {
        meta_title: "Dr. Sara Boumaazi | Exclusive Ophthalmology Marrakech",
        nav_home: "Home",
        nav_services: "Expertise",
        nav_about: "Philosophy",
        nav_booking: "Appointment",
        nav_directions: "Directions",
        nav_directions_mobile: "Directions & Contact",
        hero_badge: "Clinical Excellence & Aesthetics",
        hero_title_1: "The Art of",
        hero_title_2: "Perfect Vision.",
        hero_subtitle: "Experience exclusive ophthalmology in the heart of Marrakech. Dr. Sara Boumaazi combines clinical perfection with premium patient comfort in an oasis of peace and professionalism.",
        hero_cta_booking: "Request Appointment",
        hero_cta_more: "Discover Our Expertise",
        hero_img_caption_title: "Ophthalmology Clinic",
        hero_img_caption_sub: "Dr. Sara Boumaazi",
        stat_1_num: "Private",
        stat_1_lbl: "Individualized Care",
        stat_2_num: "Precise",
        stat_2_lbl: "Advanced Diagnostics",
        stat_3_num: "Exclusive",
        stat_3_lbl: "Résidence Meriem",
        services_tagline: "Our Expertise",
        services_title: "Medical Art for Your Eyes",
        services_description: "Finest diagnostics and advanced therapy procedures for a life full of visual aesthetics.",
        service_1_tag: "01 / Analysis",
        service_1_title: "Exclusive Diagnostics",
        service_1_desc: "Precise early detection and high-resolution 3D retina, optic nerve, and eye pressure analysis at the highest clinical level.",
        service_2_tag: "02 / Perfection",
        service_2_title: "Refractive Surgery",
        service_2_desc: "A life in freedom. Customized correction of visual defects using state-of-the-art laser procedures (LASIK/PRK).",
        service_3_tag: "03 / Care",
        service_3_title: "Pediatric Orthoptics",
        service_3_desc: "Empathetic and playful care for our youngest patients to ensure optimal visual development.",
        service_4_tag: "04 / Preservation",
        service_4_title: "Lens & Glaucoma Therapy",
        service_4_desc: "Advanced surgical procedures for cataracts and precise protection of the optic nerve for glaucoma.",
        simulator_tagline: "Before / After",
        simulator_title: "Experience the Difference",
        simulator_description: "Drag the slider to see the world after a successful correction.",
        simulator_before: "Before",
        simulator_after: "After",
        about_tagline: "The Specialist",
        about_title: "In the Hands of Ultimate Expertise",
        about_badge_sub: "Specialist in Ophthalmology",
        about_quote: '"The eye is the window to the world. Our mission is to care for this window with absolute precision and human dedication."',
        about_text: "Dr. Sara Boumaazi leads the Ophthalmology Clinic with a clear philosophy: precision work at the highest level, supported by continuous medical innovation. Following intensive clinical work, she has created a practice featuring advanced global diagnostics.",
        doc_feat_1: "International clinical standards",
        doc_feat_2: "Personal and prompt consultation",
        doc_feat_3: "State-of-the-art treatment rooms",
        interior_tag: "Our Environment",
        interior_title: "Designed for Your Peace",
        interior_desc: "We welcome you in a warm, elegant atmosphere. Bright rooms, beautiful minimalist design, and advanced technology integration ensure a stress-free and comfortable stay.",
        booking_tagline: "Exclusive Service",
        booking_title: "Your Private Consultation",
        booking_description: "Send us your appointment request online. Our team will contact you personally to coordinate your visit.",
        booking_phone_title: "Direct Line",
        booking_email_title: "Email Address",
        form_label_name: "Your Name",
        form_label_email: "Email Address",
        form_label_phone: "Phone Number",
        form_label_service: "Reason for Visit",
        form_label_date: "Preferred Date",
        form_label_notes: "Special Requests or Notes (Optional)",
        form_btn_submit: "Submit Appointment Request",
        form_placeholder_name: "e.g. Jane Doe",
        form_placeholder_email: "your@email.com",
        form_placeholder_phone: "+212 600-000000",
        form_placeholder_notes: "Special wishes for your consultation...",
        form_option_select: "Please select...",
        form_option_1: "General Checkup & Diagnostics",
        form_option_2: "Refractive Surgery & Vision Correction",
        form_option_3: "Lens & Glaucoma Consultation",
        form_option_4: "Pediatric Care & Orthoptics",
        form_option_5: "Private Consultation / Other",
        contact_tagline: "Our Location",
        contact_title: "Map & Hours",
        contact_description: "You can find us in the well-known Massira 1 neighborhood. The clinic has barrier-free accessibility located in Résidence Meriem.",
        contact_address_title: "Cabinet d’Ophtalmologie - Dr. BOUMAAZI Sara",
        contact_address_floor: "1st Floor, Appt n° 7",
        contact_address_city: "Marrakech 40140, Morocco",
        contact_hours_title: "Consultation Hours",
        contact_hours_weekdays: "Monday - Friday:",
        contact_hours_saturday: "Saturday:",
        contact_hours_saturday_val: "09:00 - 13:00 (By appointment only)",
        contact_hours_sunday: "Sunday:",
        contact_hours_sunday_val: "Closed",
        map_card_title: "Ophthalmology Clinic",
        map_card_btn: "Open Google Maps",
        footer_brand_desc: "Modern ophthalmology centered around people. Your clinic for healthy vision in Marrakech.",
        footer_col_1_title: "Navigation",
        footer_col_2_title: "Legal",
        footer_legal_imprint: "Imprint",
        footer_legal_privacy: "Privacy Policy",
        footer_legal_terms: "Terms of Use",
        footer_copyright: "© 2026 Cabinet d’Ophtalmologie - Dr. BOUMAAZI Sara. All rights reserved.",
        booking_feedback_submitting: "Processing request...",
        booking_feedback_success_title: "Thank you!",
        booking_feedback_success_body: "Your request has been successfully submitted. We will send a confirmation to",
        booking_feedback_error: "Please fill in all required fields correctly."
    },
    fr: {
        meta_title: "Dr Sara Boumaazi | Ophtalmologie Exclusive Marrakech",
        nav_home: "Accueil",
        nav_services: "Expertise",
        nav_about: "Philosophie",
        nav_booking: "Rendez-vous",
        nav_directions: "Accès",
        nav_directions_mobile: "Accès & Contact",
        hero_badge: "Excellence Clinique & Esthétique",
        hero_title_1: "L'Art de la",
        hero_title_2: "Vision Parfaite.",
        hero_subtitle: "Découvrez une ophtalmologie exclusive au cœur de Marrakech. Le Dr Sara Boumaazi allie la perfection clinique au confort haut de gamme des patients dans un havre de paix et de professionnalisme.",
        hero_cta_booking: "Demander un Rendez-vous",
        hero_cta_more: "Découvrir Notre Expertise",
        hero_img_caption_title: "Cabinet d'Ophtalmologie",
        hero_img_caption_sub: "Dr Sara Boumaazi",
        stat_1_num: "Privé",
        stat_1_lbl: "Soins Individualisés",
        stat_2_num: "Précis",
        stat_2_lbl: "Diagnostics Avancés",
        stat_3_num: "Exclusif",
        stat_3_lbl: "Résidence Meriem",
        services_tagline: "Notre Expertise",
        services_title: "L'Art Médical pour vos Yeux",
        services_description: "Le meilleur du diagnostic et des thérapies de pointe pour une vie de confort visuel et esthétique.",
        service_1_tag: "01 / Analyse",
        service_1_title: "Diagnostic Exclusif",
        service_1_desc: "Dépistage précoce et analyses 3D haute résolution de la rétine, du nerf optique et de la pression oculaire au plus haut niveau clinique.",
        service_2_tag: "02 / Perfection",
        service_2_title: "Chirurgie Réfractive",
        service_2_desc: "Une vie de liberté. Correction sur mesure des défauts visuels par les dernières techniques laser (LASIK/PRK).",
        service_3_tag: "03 / Bienveillance",
        service_3_title: "Orthoptie & Pédiatrie",
        service_3_desc: "Prise en charge douce et ludique de nos plus jeunes patients pour un développement visuel optimal.",
        service_4_tag: "04 / Préservation",
        service_4_title: "Cristallin & Glaucome",
        service_4_desc: "Procédures chirurgicales avancées pour la cataracte et protection précise du nerf optique pour le glaucome.",
        simulator_tagline: "Avant / Après",
        simulator_title: "Découvrez la Différence",
        simulator_description: "Faites glisser le curseur pour voir le monde après une correction réussie.",
        simulator_before: "Avant",
        simulator_after: "Après",
        about_tagline: "La Spécialiste",
        about_title: "Entre les Mains d'une Expertise Totale",
        about_badge_sub: "Spécialiste en Ophtalmologie",
        about_quote: '"L\'œil est la fenêtre sur le monde. Notre mission est de soigner cette fenêtre avec une précision absolue et une attention humaine."',
        about_text: "Le Dr Sara Boumaazi dirige le cabinet d'ophtalmologie avec une philosophie claire : un travail de précision au plus haut niveau. Grâce à son expertise clinique, elle a conçu un espace doté des équipements de diagnostic les plus sophistiqués.",
        doc_feat_1: "Normes cliniques internationales",
        doc_feat_2: "Consultations personnalisées & rapides",
        doc_feat_3: "Salles de soins ultra-modernes",
        interior_tag: "Notre Espace",
        interior_title: "Conçu pour Votre Sérénité",
        interior_desc: "Nous vous accueillons dans une atmosphère chaleureuse et élégante. Pièces lumineuses, design minimaliste et technologie de pointe pour un séjour serein.",
        booking_tagline: "Prise en charge Exclusive",
        booking_title: "Votre Consultation Privée",
        booking_description: "Envoyez-nous votre demande de rendez-vous en ligne. Notre équipe vous contactera personnellement pour convenir d'un créneau.",
        booking_phone_title: "Ligne Directe",
        booking_email_title: "Adresse E-mail",
        form_label_name: "Votre Nom",
        form_label_email: "Adresse E-mail",
        form_label_phone: "Numéro de Téléphone",
        form_label_service: "Motif de Consultation",
        form_label_date: "Date Souhaitée",
        form_label_notes: "Demandes Particulières ou Notes (Optionnel)",
        form_btn_submit: "Envoyer la Demande",
        form_placeholder_name: "ex. Marie Dupont",
        form_placeholder_email: "votre@email.com",
        form_placeholder_phone: "+212 600-000000",
        form_placeholder_notes: "Demandes spécifiques pour votre consultation...",
        form_option_select: "Veuillez choisir...",
        form_option_1: "Bilan Ophtalmologique & Diagnostic",
        form_option_2: "Chirurgie Réfractive (LASIK/Laser)",
        form_option_3: "Consultation Glaucome & Cataracte",
        form_option_4: "Ophtalmologie Pédiatrique & Orthoptie",
        form_option_5: "Consultation Privée / Autre",
        contact_tagline: "Localisation",
        contact_title: "Accès & Horaires",
        contact_description: "Retrouvez-nous à Massira 1. Le cabinet est accessible aux personnes à mobilité réduite au sein de la Résidence Meriem.",
        contact_address_title: "Cabinet d’Ophtalmologie - Dr. BOUMAAZI Sara",
        contact_address_floor: "1er étage, Appt n° 7",
        contact_address_city: "Marrakech 40140, Maroc",
        contact_hours_title: "Horaires",
        contact_hours_weekdays: "Lundi - Vendredi :",
        contact_hours_saturday: "Samedi :",
        contact_hours_saturday_val: "09h00 - 13h00 (Sur rendez-vous uniquement)",
        contact_hours_sunday: "Dimanche :",
        contact_hours_sunday_val: "Fermé",
        map_card_title: "Cabinet d'Ophtalmologie",
        map_card_btn: "Ouvrir l'itinéraire",
        footer_brand_desc: "Une ophtalmologie moderne centrée sur l'humain. Votre cabinet pour une vision saine à Marrakech.",
        footer_col_1_title: "Navigation",
        footer_col_2_title: "Mentions Légales",
        footer_legal_imprint: "Mentions Légales",
        footer_legal_privacy: "Confidentialité",
        footer_legal_terms: "Conditions d'utilisation",
        footer_copyright: "© 2026 Cabinet d’Ophtalmologie - Dr. BOUMAAZI Sara. Tous droits réservés.",
        booking_feedback_submitting: "Traitement de la demande...",
        booking_feedback_success_title: "Merci !",
        booking_feedback_success_body: "Votre demande a été envoyée avec succès. Nous enverrons une confirmation à",
        booking_feedback_error: "Veuillez remplir correctement tous les champs obligatoires."
    },
    ar: {
        meta_title: "د. سارة بومعزي | عيادة طب العيون الحصرية مراكش",
        nav_home: "الرئيسية",
        nav_services: "تخصصاتنا",
        nav_about: "رؤيتنا",
        nav_booking: "الحجز",
        nav_directions: "اتصل بنا",
        nav_directions_mobile: "اتصل بنا",
        hero_badge: "التميز الطبي والجمال",
        hero_title_1: "فن",
        hero_title_2: "الرؤية المثالية.",
        hero_subtitle: "اكتشف رعاية العيون الحصرية في قلب مراكش. تجمع الدكتورة سارة بومعزي بين الكمال الطبي والراحة الفائقة للمرضى في واحة من الهدوء والمهنية.",
        hero_cta_booking: "طلب موعد خاص",
        hero_cta_more: "اكتشف خبراتنا",
        hero_img_caption_title: "عيادة طب العيون",
        hero_img_caption_sub: "الدكتورة سارة بومعزي",
        stat_1_num: "خاص",
        stat_1_lbl: "رعاية مخصصة للفرد",
        stat_2_num: "دقيق",
        stat_2_lbl: "تشخيصات متطورة جداً",
        stat_3_num: "حصري",
        stat_3_lbl: "إقامة مريم",
        services_tagline: "خبراتنا الطبية",
        services_title: "الفن الطبي لرعاية عينيك",
        services_description: "أدق الفحوصات التشخيصية والعلاجات المتطورة لعيش حياة بجمال بصري متكامل ونقي.",
        service_1_tag: "01 / تحليل",
        service_1_title: "تشخيصات حصرية",
        service_1_desc: "أدق وسائل الكشف المبكر والتحليلات ثلاثية الأبعاد للشبكية والعصب البصري وضغط العين بأعلى مستويات الدقة الطبية السريرية.",
        service_2_tag: "02 / كمال",
        service_2_title: "جراحة تصحيح النظر",
        service_2_desc: "حياة ملؤها الحرية. تصحيح مخصص لعيوب النظر (قصر، طول النظر والاستجماتيزم) باستخدام أحدث تقنيات الليزر (LASIK/PRK).",
        service_3_tag: "03 / رعاية",
        service_3_title: "فحص عيون الأطفال والتقويم",
        service_3_desc: "رعاية لطيفة ومرحة لأطفالنا الصغار لضمان التطور البصري السليم وعلاج عيوب التركيز والكسل البصري مبكراً.",
        service_4_tag: "04 / وقاية",
        service_4_title: "علاج المياه البيضاء والزرقاء",
        service_4_desc: "إجراءات جراحية متقدمة لإعتام عدسة العين وحماية دقيقة للعصب البصري للجلوكوما.",
        simulator_tagline: "قبل / بعد",
        simulator_title: "اكتشف الفرق",
        simulator_description: "اسحب شريط التمرير لترى العالم بعد تصحيح ناجح.",
        simulator_before: "قبل",
        simulator_after: "بعد",
        about_tagline: "الطبيبة المختصة",
        about_title: "بين أيدي الكفاءة الطبية المتكاملة",
        about_badge_sub: "أخصائية في طب وجراحة العيون",
        about_quote: '"العين هي نافذتنا على العالم. رسالتنا هي رعاية هذه النافذة بأعلى درجات الدقة والعناية الإنسانية الممكنة."',
        about_text: "تدير الدكتورة سارة بومعزي عيادة طب العيون برؤية واضحة: عمل دقيق على أعلى مستوى سريري مدعوم بالابتكار الطبي المستمر. بعد مسيرة تدريبية وعملية مكثفة، أنشأت عيادة مجهزة بأحدث أدوات التشخيص والعلاج العالمية.",
        doc_feat_1: "معايير سريرية وطبية دولية",
        doc_feat_2: "استشارات شخصية سريعة ودقيقة",
        doc_feat_3: "غرف فحص وعلاج مجهزة بالكامل",
        interior_tag: "عيادتنا",
        interior_title: "مصممة لراحتكم وهدوءكم",
        interior_desc: "نستقبلكم في أجواء دافئة وأنيقة. غرف مضيئة، وتصميم داخلي عصري مريح لضمان زيارة علاجية مريحة وخالية من التوتر والقلق.",
        booking_tagline: "رعاية خاصة",
        booking_title: "موعدك الخاص",
        booking_description: "أرسل طلب موعدك الخاص عبر الإنترنت. سيتصل بك فريقنا فوراً لتأكيد الحجز وتنسيق تفاصيل زيارتك وتلبية احتياجاتك.",
        booking_phone_title: "الاتصال المباشر",
        booking_email_title: "البريد الإلكتروني",
        form_label_name: "الاسم الكامل",
        form_label_email: "البريد الإلكتروني",
        form_label_phone: "رقم الهاتف",
        form_label_service: "نوع الاستشارة",
        form_label_date: "تاريخ الموعد",
        form_label_notes: "ملاحظات أو طلبات خاصة (اختياري)",
        form_btn_submit: "إرسال طلب الموعد",
        form_placeholder_name: "مثال: فاطمة الزهراء",
        form_placeholder_email: "mail@example.com",
        form_placeholder_phone: "+212 600-000000",
        form_placeholder_notes: "أي تفاصيل إضافية تود إخبارنا بها لراحتك...",
        form_option_select: "يرجى الاختيار...",
        form_option_1: "فحص عيون عام وتفتيش وقائي",
        form_option_2: "تصحيح النظر بالليزر (LASIK/Laser)",
        form_option_3: "استشارة المياه البيضاء والزرقاء",
        form_option_4: "فحص عيون الأطفال وتقويم البصر",
        form_option_5: "موعد خاص / استشارة أخرى",
        contact_tagline: "موقع العيادة",
        contact_title: "أوقات العمل والعنوان",
        contact_description: "تجدوننا في حي المسيرة 1 الشهير. تقع العيادة في الطابق الأول من إقامة مريم مع توفر ولوج سهل لكافة المرضى.",
        contact_address_title: "عيادة طب العيون - الدكتورة سارة بومعزي",
        contact_address_floor: "الطابق الأول، شقة رقم 7",
        contact_address_city: "مراكش 40140، المغرب",
        contact_hours_title: "ساعات العمل",
        contact_hours_weekdays: "من الاثنين إلى الجمعة:",
        contact_hours_saturday: "السبت:",
        contact_hours_saturday_val: "09:00 - 13:00 (بناءً على موعد مسبق)",
        contact_hours_sunday: "الأحد:",
        contact_hours_sunday_val: "مغلق",
        map_card_title: "عيادة طب العيون",
        map_card_btn: "فتح خرائط جوجل",
        footer_brand_desc: "طب عيون حديث يضع الإنسان في قلب الاهتمام. عيادتكم لرؤية صحية وسليمة في مراكش.",
        footer_col_1_title: "تصفح الموقع",
        footer_col_2_title: "معلومات قانونية",
        footer_legal_imprint: "حول العيادة",
        footer_legal_privacy: "سياسة الخصوصية",
        footer_legal_terms: "شروط الاستخدام",
        footer_copyright: "© 2026 عيادة طب العيون - الدكتورة سارة بومعزي. جميع الحقوق محفوظة.",
        booking_feedback_submitting: "جاري إرسال الطلب...",
        booking_feedback_success_title: "شكراً جزيلاً لك!",
        booking_feedback_success_body: "تم إرسال طلب الموعد بنجاح. سنرسل إليك رسالة تأكيد على البريد الإلكتروني:",
        booking_feedback_error: "يرجى تعبئة كافة الحقول المطلوبة بشكل صحيح."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initNavbarScroll();
    initMobileMenu();
    initScrollAnimations();
    initBookingForm();
    initLanguageSwitcher();
    initVisionSimulator();
});

/**
 * 1. Navbar Scroll Effect
 * Shrinks header height and applies backdrop blur styling on page scroll.
 */
function initNavbarScroll() {
    const header = document.getElementById('main-header');
    
    if (!header) return;
    
    const handleScroll = () => {
        if (window.scrollY > 30) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
}

/**
 * 2. Mobile Drawer Navigation
 * Handles mobile hamburger toggle trigger and active states.
 */
function initMobileMenu() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const drawer = document.getElementById('mobile-drawer');
    const drawerLinks = document.querySelectorAll('.mobile-nav-link');
    
    if (!toggleBtn || !drawer) return;
    
    const toggleMenu = () => {
        const isOpen = drawer.classList.contains('open');
        if (isOpen) {
            drawer.classList.remove('open');
            toggleBtn.classList.remove('active');
            document.body.style.overflow = ''; // restore scrolling
        } else {
            drawer.classList.add('open');
            toggleBtn.classList.add('active');
            document.body.style.overflow = 'hidden'; // lock scrolling
        }
    };
    
    toggleBtn.addEventListener('click', toggleMenu);
    
    drawerLinks.forEach(link => {
        link.addEventListener('click', () => {
            drawer.classList.remove('open');
            toggleBtn.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

/**
 * 3. Interactive Scroll Animations (Intersection Observer)
 * Triggers entrance animations as user scrolls down.
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.bento-card, .about-grid, .interior-card, .booking-wrapper, .contact-grid, .stat-card');
    
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        };
        
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-slide-up');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(25px)';
            el.style.transition = 'opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)';
            observer.observe(el);
        });
    } else {
        animatedElements.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    }
}

/**
 * 4. Booking Form Simulation
 * Validates entries and provides custom success animation representation.
 */
function initBookingForm() {
    const form = document.getElementById('appointment-form');
    const statusMsg = document.getElementById('form-status-message');
    const submitBtn = document.getElementById('btn-submit-booking');
    
    if (!form || !statusMsg) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const currentLang = localStorage.getItem('selectedLanguage') || 'fr';
        const trans = translations[currentLang];
        
        // Disable submit button during processing
        submitBtn.disabled = true;
        submitBtn.textContent = trans.booking_feedback_submitting;
        
        const name = document.getElementById('form-name').value.trim();
        const email = document.getElementById('form-email').value.trim();
        const phone = document.getElementById('form-phone').value.trim();
        const service = document.getElementById('form-service').value;
        const date = document.getElementById('form-date').value;
        
        setTimeout(() => {
            if (name && email && phone && service && date) {
                // Render Success
                statusMsg.className = 'form-status success';
                statusMsg.innerHTML = `
                    <strong>${trans.booking_feedback_success_title}</strong><br>
                    ${trans.booking_feedback_success_body} <strong>${email}</strong>.
                `;
                form.reset();
            } else {
                // Render Error
                statusMsg.className = 'form-status error';
                statusMsg.textContent = trans.booking_feedback_error;
            }
            
            // Re-enable submit button
            submitBtn.disabled = false;
            submitBtn.textContent = trans.form_btn_submit;
            
            statusMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 1200);
    });
}

/**
 * 5. Language Switcher Logic
 * Dynamically switches language variables, updates dir attribute for RTL support,
 * and maintains local storage state persistence.
 */
function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    // Check saved language or fallback to French
    const savedLang = localStorage.getItem('selectedLanguage') || 'fr';
    setLanguage(savedLang);
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.currentTarget.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
}

function setLanguage(lang) {
    // Save to local storage
    localStorage.setItem('selectedLanguage', lang);
    
    // 1. Update HTML document directions (LTR vs RTL)
    if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
        document.documentElement.lang = 'ar';
    } else {
        document.documentElement.dir = 'ltr';
        document.documentElement.lang = lang;
    }
    
    const trans = translations[lang];
    if (!trans) return;
    
    // 2. Translate all static data-i18n elements
    const i18nElements = document.querySelectorAll('[data-i18n]');
    i18nElements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (trans[key]) {
            const arrow = el.querySelector('.arrow');
            const dot = el.querySelector('.logo-dot');
            const gradientTextSpan = el.querySelector('.gradient-text');
            
            if (gradientTextSpan) {
                if (key === 'hero_title_1') {
                    el.firstChild.textContent = trans.hero_title_1;
                }
            } else if (arrow) {
                const textSpan = el.querySelector('span');
                if (textSpan) {
                    textSpan.textContent = trans[key];
                } else {
                    el.innerHTML = `${trans[key]} <span class="arrow">&rarr;</span>`;
                }
            } else if (dot) {
                const logoTextSpan = el.querySelector('.logo-text');
                if (logoTextSpan) {
                    logoTextSpan.textContent = trans[key];
                }
            } else {
                el.textContent = trans[key];
            }
        }
    });
    
    // 3. Translate all dynamic placeholders
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (trans[key]) {
            el.setAttribute('placeholder', trans[key]);
        }
    });
    
    // 4. Update dynamic button submit text if form is idle
    const submitBtn = document.getElementById('btn-submit-booking');
    if (submitBtn && !submitBtn.disabled) {
        submitBtn.textContent = trans.form_btn_submit;
    }
    
    // 5. Update active visual states on all switcher buttons
    langButtonsActiveSync(lang);
}

function langButtonsActiveSync(lang) {
    const allLangButtons = document.querySelectorAll('.lang-btn');
    allLangButtons.forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

/**
 * 6. Vision Simulator Logic
 * Connects the range input to the CSS variable controlling the clip-path.
 */
function initVisionSimulator() {
    const slider = document.getElementById('sim-slider');
    const wrapper = document.getElementById('vision-simulator');
    
    if (slider && wrapper) {
        slider.addEventListener('input', (e) => {
            const value = e.target.value;
            wrapper.style.setProperty('--exposure', `${value}%`);
        });
    }
}

