/* global React */
// ============================================================
//  i18n — English / Hindi / Urdu
//  STRINGS[lang] holds every translatable string.
//  Proper nouns, place names, brand & acronyms stay in Latin.
// ============================================================

const LANGS = [
  { code: 'en', native: 'English', label: 'EN', dir: 'ltr' },
  { code: 'hi', native: 'हिन्दी', label: 'हि', dir: 'ltr' },
  { code: 'ur', native: 'اردو', label: 'اردو', dir: 'rtl' },
];

const STRINGS = {
  // ----------------------------------------------------------------- EN
  en: {
    nav: { links: ['Services', 'Why us', 'Pricing', 'Reviews', 'Coverage', 'FAQ'], tagline: 'HVAC & Chiller Specialists', book: 'Book a service' },
    hero: {
      eyebrow: 'Trusted since 2009',
      titleA: 'Cool, fixed & ', titleHl: 'running again', titleB: ' — same day.',
      lead: 'Certified technicians at your door — fast, fair and same-day. 90-day warranty on every job.',
      book: 'Book your service', whatsapp: 'WhatsApp us', call: 'Call now',
      ratingBold: '4.9/5', ratingRest: 'from 1,200+ reviews', samedayBold: 'Same-day', samedayRest: 'callout available',
      fc1a: 'Job completed', fc1b: 'in under 90 minutes', fc2a: '90-day warranty', fc2b: 'on parts & labour',
    },
    stats: [
      { l: 'Jobs completed', s: '+' }, { l: 'Years of service', s: ' yrs' },
      { l: 'Avg. response time', s: ' min' }, { l: 'Customer satisfaction', s: '%' },
    ],
    services: {
      eyebrow: 'What we fix', title: 'One team for everything that keeps you cool.',
      intro: 'Pick a category to find your specialist.',
      tabs: ['All services', 'Chiller', 'AMC'],
      book: 'Book this service',
      list: [
        { t: 'AMC Chiller', d: 'Annual maintenance contracts for chillers — scheduled upkeep to keep systems running at peak.', tags: ['Annual contract', 'Scheduled', 'Preventive'] },
        { t: 'CNC Metal Chiller', d: 'Expert servicing for CNC metal chillers in industrial and manufacturing environments.', tags: ['Industrial', 'CNC', 'Precision cooling'] },
        { t: 'All Chiller Repairing', d: 'Full chiller diagnostics and repairs — compressors, condensers, controls and refrigerant systems.', tags: ['Compressor', 'Condenser', 'Controls'] },
      ],
      emergency: { t: '24/7 Emergency Callout', d: 'Day or night, we answer. Always.', tags: ['Any hour', 'Rapid response', 'All areas'], cta: 'Call the hotline' },
    },
    why: {
      eyebrow: 'Why Al Shafa HVAC', title: "Service you'd recommend to your neighbour.",
      intro: 'What you can count on, every visit.',
      badgeTop: 'Top rated', badgeSub: '1,200+ verified reviews',
      features: [
        { t: 'Certified & insured technicians', d: 'Background-checked, brand-trained, fully insured.' },
        { t: 'Upfront, honest pricing', d: 'A clear quote before we start. No surprises.' },
        { t: 'Same-day response', d: 'Book by noon, fixed today — often within the hour.' },
        { t: '90-day workmanship warranty', d: 'Same fault back in 90 days? We fix it free.' },
      ],
    },
    pricing: {
      eyebrow: 'Simple plans', title: 'Pay per visit, or save with maintenance.',
      intro: 'No lock-ins, no hidden fees.',
      note: "You'll always get a firm quote before any work begins.", badge: 'Best value',
      plans: [
        { name: 'Call-Out Repair', sub: 'Pay only when you need us', per: 'inspection fee', cta: 'Book a call-out',
          feats: ['Certified technician visit', 'Full fault diagnosis', 'Upfront repair quote', '90-day workmanship warranty', 'Scheduled maintenance', 'Priority booking'] },
        { name: 'Home AMC', sub: 'Most popular for households', per: '/ year', cta: 'Start Home AMC',
          feats: ['2 scheduled tune-ups a year', 'Covers AC, fridge & freezer', 'Priority same-day booking', '15% off any repair parts', 'Free gas top-up (1/yr)', 'No inspection fees'] },
        { name: 'Business AMC', sub: 'For shops, cafés & offices', per: 'tailored quote', cta: 'Request a quote',
          feats: ['Quarterly preventive servicing', 'Chillers, cold rooms & HVAC', '4-hour priority response', 'Dedicated account manager', 'Compliance & service reports', '24/7 emergency cover'] },
      ],
    },
    testi: {
      eyebrow: 'Loved by customers', title: '1,200+ reviews. A 4.9 average.',
      intro: 'Real words from across Delhi NCR.',
      reviews: [
        { role: 'Homeowner', t: 'Our AC died in a heatwave and they had a tech here within the hour. Fixed, cleaned and explained everything. Lifesavers.' },
        { role: 'Café owner', t: 'The walk-in chiller is the heart of my kitchen. Their AMC means I never worry about it failing during service anymore.' },
        { role: 'Homeowner', t: 'Honest pricing is rare. They quoted upfront, stuck to it, and the fridge has run perfectly for months since.' },
        { role: 'Office manager', t: 'Booked online at 9am, sorted by lunch. The whole experience felt like a proper SaaS company, not a repair shop.' },
        { role: 'Homeowner', t: 'Washing machine was leaking everywhere. Polite technician, clean work, and a warranty card on the way out. Faultless.' },
        { role: 'Restaurant group', t: 'We run six sites and their commercial team keeps every unit compliant. The service reports alone are worth it.' },
      ],
    },
    coverage: {
      eyebrow: 'Where we work', title: 'We cover all of Delhi NCR.',
      intro: 'Technicians across Delhi & NCR — help is never far.',
      cta: 'Check my area',
    },
    faq: {
      eyebrow: 'Good to know', title: 'Questions, answered.',
      intro: 'Quick answers before you book.', ask: 'Ask on WhatsApp',
      items: [
        { q: 'How fast can a technician reach me?', a: 'Same-day if you book before noon; about 45 minutes for emergencies. You get a confirmed arrival window.' },
        { q: 'Do you charge a call-out fee?', a: 'A small inspection fee covers diagnosis and quote — waived on any AMC plan.' },
        { q: 'Which brands and appliances do you service?', a: 'All major brands: AC, fridges, freezers, chillers, cold rooms and washing machines.' },
        { q: 'Is your work guaranteed?', a: 'Yes — 90-day warranty on parts and labour. Same fault back? We fix it free.' },
        { q: 'Can I get maintenance instead of waiting for breakdowns?', a: 'Yes — AMC plans include scheduled tune-ups and priority booking.' },
        { q: 'How do I pay?', a: 'Cards, bank transfer and digital wallets. A clear quote before any work.' },
      ],
    },
    booking: {
      eyebrow: 'Book in 30 seconds', title: "Let's get you sorted today.",
      lead: "Tell us the problem — we'll confirm your slot right away.",
      points: [
        { t: 'Same-day slots', s: 'Book before noon for today' },
        { t: '90-day warranty', s: 'On every repair we do' },
        { t: 'Upfront quote', s: 'Approve before we start' },
      ],
      formTitle: 'Request your service', formSub: 'No payment now — just your details.',
      name: 'Full name', phone: 'Phone', service: 'Service needed', when: 'Preferred time', issue: "What's the issue?",
      namePh: 'e.g. Sara Malik', phonePh: 'Your contact number', servicePh: 'Select a service…', issuePh: 'e.g. AC blowing warm air, started yesterday…',
      serviceOpts: ['AC Repair & Installation', 'Refrigerator Repair', 'Chiller / Cold Room', 'Freezer Repair', 'Washing Machine Repair', 'Annual Maintenance (AMC)', 'Commercial / Industrial', 'Other'],
      whenOpts: ['As soon as possible', 'Today', 'Tomorrow morning', 'Tomorrow afternoon', 'This weekend'],
      submit: 'Request my booking',
      errName: 'Please enter your name', errPhone: 'Please enter a phone number', errPhoneBad: "That doesn't look like a valid number", errService: 'Choose a service',
      successTitle: 'One last step!', successMsg: "Almost done, %name% — tap below to send your %service% request to us on WhatsApp. We'll confirm right away.",
      sendWa: 'Send on WhatsApp', sendWaHint: 'Opens WhatsApp with your details ready to send.',
      waTemplate: 'New service request%0A—————%0AName: %name%%0APhone: %phone%%0AService: %service%%0APreferred: %when%%0AIssue: %notes%',
      whenAsap: 'As soon as possible', notesNone: '(not specified)',
      msgUs: 'Message us', newReq: 'New request',
    },
    footer: {
      brandText: 'HVAC & chiller specialists — Gautampuri, Shastri Park, New Delhi.',
      cols: [
        { h: 'Services', items: ['AMC Chiller', 'CNC Metal Chiller', 'All Chiller Repairing', 'Emergency Callout', 'AMC Plans'] },
        { h: 'Company', items: ['Why us', 'Reviews', 'Coverage', 'Careers', 'Contact'] },
        { h: 'Support', items: ['Book a service', 'Emergency line', 'AMC plans', 'FAQ', 'Warranty'] },
      ],
      rights: 'All rights reserved.', privacy: 'Privacy', terms: 'Terms', builtBy: 'Built by',
    },
    fab: { whatsapp: 'Chat on WhatsApp', call: 'Call now' },
    common: { language: 'Language' },
  },

  // ----------------------------------------------------------------- HI
  hi: {
    nav: { links: ['सेवाएँ', 'क्यों हम', 'कीमतें', 'समीक्षाएँ', 'क्षेत्र', 'सवाल-जवाब'], tagline: 'HVAC और चिलर विशेषज्ञ', book: 'सेवा बुक करें' },
    hero: {
      eyebrow: '2009 से भरोसेमंद',
      titleA: 'ठंडा, दुरुस्त और ', titleHl: 'फिर से चालू', titleB: ' — उसी दिन।',
      lead: 'प्रमाणित तकनीशियन आपके दरवाज़े पर — तेज़, सही और उसी दिन। हर काम पर 90-दिन वारंटी।',
      book: 'अपनी सेवा बुक करें', whatsapp: 'WhatsApp करें', call: 'अभी कॉल करें',
      ratingBold: '4.9/5', ratingRest: '1,200+ समीक्षाओं से', samedayBold: 'उसी दिन', samedayRest: 'सेवा उपलब्ध',
      fc1a: 'काम पूरा हुआ', fc1b: '90 मिनट से कम में', fc2a: '90-दिन वारंटी', fc2b: 'पार्ट्स और मज़दूरी पर',
    },
    stats: [
      { l: 'पूरे किए गए काम', s: '+' }, { l: 'सेवा के वर्ष', s: ' वर्ष' },
      { l: 'औसत प्रतिक्रिया समय', s: ' मिनट' }, { l: 'ग्राहक संतुष्टि', s: '%' },
    ],
    services: {
      eyebrow: 'हम क्या ठीक करते हैं', title: 'आपको ठंडा रखने वाली हर चीज़ के लिए एक ही टीम।',
      intro: 'अपना विशेषज्ञ चुनने के लिए श्रेणी चुनें।',
      tabs: ['सभी सेवाएँ', 'चिलर', 'AMC'],
      book: 'यह सेवा बुक करें',
      list: [
        { t: 'AMC चिलर', d: 'चिलर के लिए वार्षिक रखरखाव अनुबंध — सिस्टम को सर्वश्रेष्ठ प्रदर्शन पर रखें।', tags: ['वार्षिक अनुबंध', 'निर्धारित', 'निवारक'] },
        { t: 'CNC मेटल चिलर', d: 'औद्योगिक और विनिर्माण वातावरण में CNC मेटल चिलर की विशेषज्ञ सर्विसिंग।', tags: ['औद्योगिक', 'CNC', 'प्रिसिशन कूलिंग'] },
        { t: 'सभी चिलर मरम्मत', d: 'संपूर्ण चिलर निदान और मरम्मत — कंप्रेसर, कंडेंसर, नियंत्रण और रेफ्रिजरेंट सिस्टम।', tags: ['कंप्रेसर', 'कंडेंसर', 'नियंत्रण'] },
      ],
      emergency: { t: '24/7 आपातकालीन सेवा', d: 'दिन हो या रात, हम हाज़िर हैं।', tags: ['कभी भी', 'तेज़ प्रतिक्रिया', 'सभी क्षेत्र'], cta: 'हॉटलाइन पर कॉल करें' },
    },
    why: {
      eyebrow: 'Al Shafa HVAC क्यों', title: 'ऐसी सेवा जिसे आप पड़ोसी को सुझाएँ।',
      intro: 'हर विज़िट पर आपको यह मिलता है।',
      badgeTop: 'शीर्ष रेटेड', badgeSub: '1,200+ सत्यापित समीक्षाएँ',
      features: [
        { t: 'प्रमाणित और बीमित तकनीशियन', d: 'जाँचे-परखे, ब्रांड-प्रशिक्षित और पूरी तरह बीमित।' },
        { t: 'अग्रिम, ईमानदार कीमत', d: 'शुरू करने से पहले साफ़ कीमत। कोई आश्चर्य नहीं।' },
        { t: 'उसी दिन प्रतिक्रिया', d: 'दोपहर तक बुक करें, उसी दिन ठीक — अक्सर एक घंटे में।' },
        { t: '90-दिन वर्कमैनशिप वारंटी', d: '90 दिन में वही खराबी? मुफ़्त ठीक करेंगे।' },
      ],
    },
    pricing: {
      eyebrow: 'सरल योजनाएँ', title: 'हर विज़िट पर भुगतान करें, या रखरखाव से बचत करें।',
      intro: 'कोई लॉक-इन नहीं, कोई छिपा शुल्क नहीं।',
      note: 'काम से पहले हमेशा पक्की कीमत मिलेगी।', badge: 'सर्वोत्तम मूल्य',
      plans: [
        { name: 'कॉल-आउट मरम्मत', sub: 'जब ज़रूरत हो तभी भुगतान', per: 'निरीक्षण शुल्क', cta: 'कॉल-आउट बुक करें',
          feats: ['प्रमाणित तकनीशियन विज़िट', 'पूरी खराबी जाँच', 'अग्रिम मरम्मत कीमत', '90-दिन वर्कमैनशिप वारंटी', 'निर्धारित रखरखाव', 'प्राथमिकता बुकिंग'] },
        { name: 'होम AMC', sub: 'घरों के लिए सबसे लोकप्रिय', per: '/ वर्ष', cta: 'होम AMC शुरू करें',
          feats: ['साल में 2 निर्धारित ट्यून-अप', 'AC, फ्रिज और फ्रीज़र कवर', 'प्राथमिकता उसी-दिन बुकिंग', 'किसी भी पार्ट्स पर 15% छूट', 'मुफ़्त गैस रीफिल (1/वर्ष)', 'कोई निरीक्षण शुल्क नहीं'] },
        { name: 'बिज़नेस AMC', sub: 'दुकानों, कैफ़े और दफ़्तरों के लिए', per: 'अनुकूलित कीमत', cta: 'कीमत मँगाएँ',
          feats: ['त्रैमासिक निवारक सर्विसिंग', 'चिलर, कोल्ड रूम और HVAC', '4-घंटे प्राथमिकता प्रतिक्रिया', 'समर्पित अकाउंट मैनेजर', 'अनुपालन और सर्विस रिपोर्ट', '24/7 आपातकालीन कवर'] },
      ],
    },
    testi: {
      eyebrow: 'ग्राहकों का पसंदीदा', title: '1,200+ समीक्षाएँ। 4.9 औसत।',
      intro: 'पूरे दिल्ली NCR से असली राय।',
      reviews: [
        { role: 'गृहस्वामी', t: 'गर्मी की लहर में हमारा AC बंद हो गया और एक घंटे के भीतर तकनीशियन आ गया। ठीक किया, साफ़ किया और सब समझाया। जान बचा ली।' },
        { role: 'कैफ़े मालिक', t: 'वॉक-इन चिलर मेरी रसोई की जान है। उनके AMC की वजह से अब मुझे सर्विस के दौरान उसके बंद होने की चिंता नहीं रहती।' },
        { role: 'गृहस्वामी', t: 'ईमानदार कीमत दुर्लभ है। उन्होंने अग्रिम कीमत बताई, उसी पर टिके रहे, और तब से फ्रिज महीनों से बढ़िया चल रहा है।' },
        { role: 'दफ़्तर प्रबंधक', t: 'सुबह 9 बजे ऑनलाइन बुक किया, दोपहर तक हो गया। पूरा अनुभव एक असली SaaS कंपनी जैसा लगा, मरम्मत की दुकान जैसा नहीं।' },
        { role: 'गृहस्वामी', t: 'वॉशिंग मशीन हर जगह लीक कर रही थी। विनम्र तकनीशियन, साफ़ काम, और जाते समय वारंटी कार्ड। बेमिसाल।' },
        { role: 'रेस्तराँ समूह', t: 'हम छह जगहें चलाते हैं और उनकी कमर्शियल टीम हर यूनिट को अनुपालन में रखती है। अकेली सर्विस रिपोर्ट ही काफ़ी हैं।' },
      ],
    },
    coverage: {
      eyebrow: 'हम कहाँ काम करते हैं', title: 'हम पूरे दिल्ली NCR में सेवा देते हैं।',
      intro: 'दिल्ली और NCR भर में तकनीशियन — मदद हमेशा पास।',
      cta: 'मेरा क्षेत्र जाँचें',
    },
    faq: {
      eyebrow: 'जानने योग्य', title: 'सवाल, जवाब।',
      intro: 'बुकिंग से पहले झटपट जवाब।', ask: 'WhatsApp पर पूछें',
      items: [
        { q: 'तकनीशियन कितनी जल्दी पहुँच सकता है?', a: 'दोपहर से पहले बुक करें तो उसी दिन; आपात में लगभग 45 मिनट। पक्का पहुँचने का समय मिलेगा।' },
        { q: 'क्या आप कॉल-आउट शुल्क लेते हैं?', a: 'छोटा निरीक्षण शुल्क जाँच और कीमत कवर करता है — किसी भी AMC पर माफ़।' },
        { q: 'आप किन ब्रांडों और उपकरणों की सेवा करते हैं?', a: 'सभी बड़े ब्रांड: AC, फ्रिज, फ्रीज़र, चिलर, कोल्ड रूम और वॉशिंग मशीन।' },
        { q: 'क्या आपके काम की गारंटी है?', a: 'हाँ — पार्ट्स और मज़दूरी पर 90-दिन वारंटी। वही खराबी? मुफ़्त ठीक।' },
        { q: 'क्या मैं खराबी का इंतज़ार करने के बजाय रखरखाव ले सकता हूँ?', a: 'हाँ — AMC में निर्धारित ट्यून-अप और प्राथमिकता बुकिंग।' },
        { q: 'मैं भुगतान कैसे करूँ?', a: 'कार्ड, बैंक ट्रांसफर और डिजिटल वॉलेट। काम से पहले साफ़ कीमत।' },
      ],
    },
    booking: {
      eyebrow: '30 सेकंड में बुक करें', title: 'आज ही आपकी समस्या सुलझाते हैं।',
      lead: 'समस्या बताएँ — हम तुरंत आपका स्लॉट पक्का कर देंगे।',
      points: [
        { t: 'उसी-दिन स्लॉट', s: 'आज के लिए दोपहर से पहले बुक करें' },
        { t: '90-दिन वारंटी', s: 'हमारी हर मरम्मत पर' },
        { t: 'अग्रिम कीमत', s: 'शुरू करने से पहले स्वीकृति' },
      ],
      formTitle: 'अपनी सेवा का अनुरोध करें', formSub: 'अभी कोई भुगतान नहीं — बस आपका विवरण।',
      name: 'पूरा नाम', phone: 'फ़ोन', service: 'ज़रूरी सेवा', when: 'पसंदीदा समय', issue: 'क्या समस्या है?',
      namePh: 'जैसे, सारा मलिक', phonePh: 'आपका संपर्क नंबर', servicePh: 'सेवा चुनें…', issuePh: 'जैसे, AC गरम हवा दे रहा है, कल से शुरू हुआ…',
      serviceOpts: ['AC मरम्मत और इंस्टॉलेशन', 'रेफ्रिजरेटर मरम्मत', 'चिलर / कोल्ड रूम', 'फ्रीज़र मरम्मत', 'वॉशिंग मशीन मरम्मत', 'वार्षिक रखरखाव (AMC)', 'व्यावसायिक / औद्योगिक', 'अन्य'],
      whenOpts: ['जितनी जल्दी हो सके', 'आज', 'कल सुबह', 'कल दोपहर', 'इस सप्ताहांत'],
      submit: 'मेरी बुकिंग का अनुरोध करें',
      errName: 'कृपया अपना नाम दर्ज करें', errPhone: 'कृपया फ़ोन नंबर दर्ज करें', errPhoneBad: 'यह मान्य नंबर नहीं लगता', errService: 'सेवा चुनें',
      successTitle: 'बस एक कदम!', successMsg: 'लगभग हो गया, %name% — अपना %service% अनुरोध WhatsApp पर भेजने के लिए नीचे टैप करें। हम तुरंत पुष्टि करेंगे।',
      sendWa: 'WhatsApp पर भेजें', sendWaHint: 'WhatsApp खुलेगा, आपकी जानकारी भेजने के लिए तैयार।',
      waTemplate: 'नई सेवा अनुरोध%0A—————%0Aनाम: %name%%0Aफ़ोन: %phone%%0Aसेवा: %service%%0Aपसंदीदा समय: %when%%0Aसमस्या: %notes%',
      whenAsap: 'जितनी जल्दी हो सके', notesNone: '(नहीं बताया)',
      msgUs: 'हमें संदेश करें', newReq: 'नया अनुरोध',
    },
    footer: {
      brandText: 'HVAC और चिलर विशेषज्ञ — गौतमपुरी, शास्त्री पार्क, नई दिल्ली।',
      cols: [
        { h: 'सेवाएँ', items: ['AMC चिलर', 'CNC मेटल चिलर', 'सभी चिलर मरम्मत', 'आपातकालीन सेवा', 'AMC योजनाएँ'] },
        { h: 'कंपनी', items: ['क्यों हम', 'समीक्षाएँ', 'क्षेत्र', 'करियर', 'संपर्क'] },
        { h: 'सहायता', items: ['सेवा बुक करें', 'आपातकालीन लाइन', 'AMC योजनाएँ', 'सवाल-जवाब', 'वारंटी'] },
      ],
      rights: 'सर्वाधिकार सुरक्षित।', privacy: 'गोपनीयता', terms: 'शर्तें', builtBy: 'द्वारा निर्मित',
    },
    fab: { whatsapp: 'WhatsApp पर चैट करें', call: 'अभी कॉल करें' },
    common: { language: 'भाषा' },
  },

  // ----------------------------------------------------------------- UR
  ur: {
    nav: { links: ['خدمات', 'ہم کیوں', 'قیمتیں', 'آراء', 'علاقے', 'سوالات'], tagline: 'HVAC اور چلر ماہرین', book: 'سروس بُک کریں' },
    hero: {
      eyebrow: '2009 سے قابلِ اعتماد',
      titleA: 'ٹھنڈا، درست اور ', titleHl: 'دوبارہ چالو', titleB: ' — اسی دن۔',
      lead: 'تصدیق شدہ ٹیکنیشن آپ کے دروازے پر — تیز، منصفانہ اور اسی دن۔ ہر کام پر 90 دن وارنٹی۔',
      book: 'اپنی سروس بُک کریں', whatsapp: 'WhatsApp کریں', call: 'ابھی کال کریں',
      ratingBold: '4.9/5', ratingRest: '1,200+ آراء سے', samedayBold: 'اسی دن', samedayRest: 'سروس دستیاب',
      fc1a: 'کام مکمل', fc1b: '90 منٹ سے کم میں', fc2a: '90 دن وارنٹی', fc2b: 'پرزہ جات اور مزدوری پر',
    },
    stats: [
      { l: 'مکمل کیے گئے کام', s: '+' }, { l: 'سروس کے سال', s: ' سال' },
      { l: 'اوسط جوابی وقت', s: ' منٹ' }, { l: 'گاہک کی اطمینان', s: '%' },
    ],
    services: {
      eyebrow: 'ہم کیا ٹھیک کرتے ہیں', title: 'آپ کو ٹھنڈا رکھنے والی ہر چیز کے لیے ایک ہی ٹیم۔',
      intro: 'اپنا ماہر چننے کے لیے زمرہ منتخب کریں۔',
      tabs: ['تمام خدمات', 'چلر', 'AMC'],
      book: 'یہ سروس بُک کریں',
      list: [
        { t: 'AMC چلر', d: 'چلر کے لیے سالانہ دیکھ بھال معاہدہ — سسٹم کو بہترین کارکردگی پر رکھیں۔', tags: ['سالانہ معاہدہ', 'مقررہ', 'احتیاطی'] },
        { t: 'CNC میٹل چلر', d: 'صنعتی اور مینوفیکچرنگ ماحول میں CNC میٹل چلر کی ماہرانہ سروسنگ۔', tags: ['صنعتی', 'CNC', 'درست کولنگ'] },
        { t: 'تمام چلر مرمت', d: 'مکمل چلر تشخیص اور مرمت — کمپریسر، کنڈینسر، کنٹرولز اور ریفریجرینٹ سسٹم۔', tags: ['کمپریسر', 'کنڈینسر', 'کنٹرولز'] },
      ],
      emergency: { t: '24/7 ہنگامی سروس', d: 'دن ہو یا رات، ہم حاضر ہیں۔', tags: ['کسی بھی وقت', 'تیز ردعمل', 'تمام علاقے'], cta: 'ہاٹ لائن پر کال کریں' },
    },
    why: {
      eyebrow: 'Al Shafa HVAC کیوں', title: 'ایسی سروس جو آپ پڑوسی کو تجویز کریں۔',
      intro: 'ہر دورے پر آپ کو یہ ملتا ہے۔',
      badgeTop: 'اعلیٰ درجہ', badgeSub: '1,200+ تصدیق شدہ آراء',
      features: [
        { t: 'تصدیق شدہ اور بیمہ یافتہ ٹیکنیشن', d: 'جانچے پرکھے، برانڈ تربیت یافتہ اور مکمل بیمہ یافتہ۔' },
        { t: 'پیشگی، ایماندار قیمت', d: 'شروع سے پہلے واضح قیمت۔ کوئی حیرانی نہیں۔' },
        { t: 'اسی دن ردعمل', d: 'دوپہر تک بُک کریں، اسی دن ٹھیک — اکثر ایک گھنٹے میں۔' },
        { t: '90 دن ورک مین شپ وارنٹی', d: '90 دن میں وہی خرابی؟ مفت ٹھیک کریں گے۔' },
      ],
    },
    pricing: {
      eyebrow: 'آسان منصوبے', title: 'ہر دورے پر ادائیگی کریں، یا دیکھ بھال سے بچت کریں۔',
      intro: 'کوئی لاک اِن نہیں، کوئی چھپا چارج نہیں۔',
      note: 'کام سے پہلے ہمیشہ پکی قیمت ملے گی۔', badge: 'بہترین قدر',
      plans: [
        { name: 'کال آؤٹ مرمت', sub: 'صرف ضرورت پر ادائیگی', per: 'معائنہ فیس', cta: 'کال آؤٹ بُک کریں',
          feats: ['تصدیق شدہ ٹیکنیشن دورہ', 'مکمل خرابی تشخیص', 'پیشگی مرمت قیمت', '90 دن ورک مین شپ وارنٹی', 'مقررہ دیکھ بھال', 'ترجیحی بکنگ'] },
        { name: 'ہوم AMC', sub: 'گھروں کے لیے سب سے مقبول', per: '/ سال', cta: 'ہوم AMC شروع کریں',
          feats: ['سال میں 2 مقررہ ٹیون اپ', 'AC، فریج اور فریزر شامل', 'ترجیحی اسی دن بکنگ', 'کسی بھی پرزے پر 15% رعایت', 'مفت گیس بھرائی (1/سال)', 'کوئی معائنہ فیس نہیں'] },
        { name: 'بزنس AMC', sub: 'دکانوں، کیفے اور دفاتر کے لیے', per: 'حسبِ ضرورت قیمت', cta: 'قیمت طلب کریں',
          feats: ['سہ ماہی احتیاطی سروسنگ', 'چلر، کولڈ روم اور HVAC', '4 گھنٹے ترجیحی ردعمل', 'مخصوص اکاؤنٹ مینیجر', 'تعمیل اور سروس رپورٹس', '24/7 ہنگامی کور'] },
      ],
    },
    testi: {
      eyebrow: 'گاہکوں کا پسندیدہ', title: '1,200+ آراء۔ 4.9 اوسط۔',
      intro: 'پورے دہلی NCR سے اصل آراء۔',
      reviews: [
        { role: 'گھر مالک', t: 'گرمی کی لہر میں ہمارا AC بند ہو گیا اور ایک گھنٹے میں ٹیکنیشن آ گیا۔ ٹھیک کیا، صاف کیا اور سب سمجھایا۔ جان بچا لی۔' },
        { role: 'کیفے مالک', t: 'واک اِن چلر میرے باورچی خانے کی جان ہے۔ ان کے AMC کی وجہ سے اب مجھے سروس کے دوران اس کے بند ہونے کی فکر نہیں رہتی۔' },
        { role: 'گھر مالک', t: 'ایماندار قیمت نایاب ہے۔ انہوں نے پیشگی قیمت بتائی، اسی پر قائم رہے، اور تب سے فریج مہینوں سے بہترین چل رہا ہے۔' },
        { role: 'دفتر مینیجر', t: 'صبح 9 بجے آن لائن بُک کیا، دوپہر تک ہو گیا۔ پورا تجربہ ایک اصل SaaS کمپنی جیسا لگا، مرمت کی دکان جیسا نہیں۔' },
        { role: 'گھر مالک', t: 'واشنگ مشین ہر طرف لیک کر رہی تھی۔ مہذب ٹیکنیشن، صاف کام، اور جاتے وقت وارنٹی کارڈ۔ بے عیب۔' },
        { role: 'ریستوران گروپ', t: 'ہم چھ مقامات چلاتے ہیں اور ان کی تجارتی ٹیم ہر یونٹ کو تعمیل میں رکھتی ہے۔ صرف سروس رپورٹس ہی کافی ہیں۔' },
      ],
    },
    coverage: {
      eyebrow: 'ہم کہاں کام کرتے ہیں', title: 'ہم پورے دہلی NCR میں خدمت دیتے ہیں۔',
      intro: 'دہلی اور NCR بھر میں ٹیکنیشن — مدد ہمیشہ قریب۔',
      cta: 'میرا علاقہ جانچیں',
    },
    faq: {
      eyebrow: 'جاننے کے قابل', title: 'سوالات، جوابات۔',
      intro: 'بکنگ سے پہلے فوری جوابات۔', ask: 'WhatsApp پر پوچھیں',
      items: [
        { q: 'ٹیکنیشن کتنی جلدی پہنچ سکتا ہے؟', a: 'دوپہر سے پہلے بُک کریں تو اسی دن؛ ہنگامی میں تقریباً 45 منٹ۔ پہنچنے کا پکا وقت ملے گا۔' },
        { q: 'کیا آپ کال آؤٹ فیس لیتے ہیں؟', a: 'چھوٹی معائنہ فیس تشخیص اور قیمت پر محیط — کسی بھی AMC پر معاف۔' },
        { q: 'آپ کن برانڈز اور آلات کی سروس کرتے ہیں؟', a: 'تمام بڑے برانڈ: AC، فریج، فریزر، چلر، کولڈ روم اور واشنگ مشین۔' },
        { q: 'کیا آپ کے کام کی ضمانت ہے؟', a: 'جی — پرزہ جات اور مزدوری پر 90 دن وارنٹی۔ وہی خرابی؟ مفت ٹھیک۔' },
        { q: 'کیا میں خرابی کا انتظار کرنے کے بجائے دیکھ بھال لے سکتا ہوں؟', a: 'جی — AMC میں مقررہ ٹیون اپ اور ترجیحی بکنگ۔' },
        { q: 'میں ادائیگی کیسے کروں؟', a: 'کارڈ، بینک ٹرانسفر اور ڈیجیٹل والٹ۔ کام سے پہلے واضح قیمت۔' },
      ],
    },
    booking: {
      eyebrow: '30 سیکنڈ میں بُک کریں', title: 'آج ہی آپ کا مسئلہ حل کرتے ہیں۔',
      lead: 'مسئلہ بتائیں — ہم فوراً آپ کا سلاٹ پکا کر دیں گے۔',
      points: [
        { t: 'اسی دن سلاٹ', s: 'آج کے لیے دوپہر سے پہلے بُک کریں' },
        { t: '90 دن وارنٹی', s: 'ہماری ہر مرمت پر' },
        { t: 'پیشگی قیمت', s: 'شروع کرنے سے پہلے منظوری' },
      ],
      formTitle: 'اپنی سروس کی درخواست دیں', formSub: 'ابھی کوئی ادائیگی نہیں — صرف آپ کی تفصیلات۔',
      name: 'پورا نام', phone: 'فون', service: 'مطلوبہ سروس', when: 'پسندیدہ وقت', issue: 'کیا مسئلہ ہے؟',
      namePh: 'مثلاً، سارا ملک', phonePh: 'آپ کا رابطہ نمبر', servicePh: 'سروس منتخب کریں…', issuePh: 'مثلاً، AC گرم ہوا دے رہا ہے، کل سے شروع ہوا…',
      serviceOpts: ['AC مرمت اور تنصیب', 'ریفریجریٹر مرمت', 'چلر / کولڈ روم', 'فریزر مرمت', 'واشنگ مشین مرمت', 'سالانہ دیکھ بھال (AMC)', 'تجارتی / صنعتی', 'دیگر'],
      whenOpts: ['جتنا جلد ممکن ہو', 'آج', 'کل صبح', 'کل دوپہر', 'اس ہفتے کے آخر میں'],
      submit: 'میری بکنگ کی درخواست دیں',
      errName: 'براہ کرم اپنا نام درج کریں', errPhone: 'براہ کرم فون نمبر درج کریں', errPhoneBad: 'یہ درست نمبر نہیں لگتا', errService: 'سروس منتخب کریں',
      successTitle: 'بس ایک قدم!', successMsg: 'ایک آخری قدم، %name% — اپنی %service% درخواست WhatsApp پر بھیجنے کے لیے نیچے ٹیپ کریں۔ ہم فوراً تصدیق کریں گے۔',
      sendWa: 'WhatsApp پر بھیجیں', sendWaHint: 'WhatsApp کھلے گا، آپ کی تفصیلات بھیجنے کے لیے تیار۔',
      waTemplate: 'نئی سروس درخواست%0A—————%0Aنام: %name%%0Aفون: %phone%%0Aسروس: %service%%0Aپسندیدہ وقت: %when%%0Aمسئلہ: %notes%',
      whenAsap: 'جتنا جلد ممکن ہو', notesNone: '(بتایا نہیں)',
      msgUs: 'ہمیں پیغام دیں', newReq: 'نئی درخواست',
    },
    footer: {
      brandText: 'HVAC اور چلر ماہرین — گوتم پوری، شاستری پارک، نئی دہلی۔',
      cols: [
        { h: 'خدمات', items: ['AMC چلر', 'CNC میٹل چلر', 'تمام چلر مرمت', 'ہنگامی سروس', 'AMC منصوبے'] },
        { h: 'کمپنی', items: ['ہم کیوں', 'آراء', 'علاقے', 'کیریئر', 'رابطہ'] },
        { h: 'مدد', items: ['سروس بُک کریں', 'ہنگامی لائن', 'AMC منصوبے', 'سوالات', 'وارنٹی'] },
      ],
      rights: 'جملہ حقوق محفوظ ہیں۔', privacy: 'رازداری', terms: 'شرائط', builtBy: 'تیار کردہ',
    },
    fab: { whatsapp: 'WhatsApp پر چیٹ کریں', call: 'ابھی کال کریں' },
    common: { language: 'زبان' },
  },
};

const LangContext = React.createContext({ lang: 'en', dir: 'ltr', t: STRINGS.en, setLang: () => {} });
function useLang() { return React.useContext(LangContext); }

// ---- Business contact (single source of truth) ----
const CONTACT = {
  phoneDisplay: '+91 93192 23362',
  tel: '+919319223362',          // for tel: links
  wa: '919354423335',            // for wa.me links (no +, no spaces)
  email: 'hk069634@gmail.com',
  address: 'T-176, Shop No. 5, Gali No. 5, Gautampuri, Shastri Park, New Delhi-110053',
};
const waLink = (text) => 'https://wa.me/' + CONTACT.wa + (text ? '?text=' + encodeURIComponent(text) : '');

Object.assign(window, { LANGS, STRINGS, LangContext, useLang, CONTACT, waLink });
