export type Language = 'en' | 'he';

export const translations = {
  en: {
    nav: {
      features: 'Features',
      howItWorks: 'How It Works',
      faq: 'FAQ',
      getEarlyAccess: 'Get Early Access',
    },
    hero: {
      badge: 'Coming Soon',
      title: 'Revolutionize Your <span class="text-blue-600">Dealership</span> Operations',
      description: 'NextDeal is a comprehensive CRM platform built specifically for car dealerships to streamline lead management, inventory tracking, and customer interactions.',
      cta: {
        primary: 'Join Pilot Program',
        secondary: 'Explore Features',
      },
      trusted: 'Trusted by dealerships across the country',
    },
    features: {
      title: 'Powerful Features for Modern Dealerships',
      description: 'NextDeal combines cutting-edge technology with industry expertise to deliver a comprehensive solution for car dealerships.',
      items: [
        {
          title: 'Automated Lead Generation',
          description: 'Capture and manage leads from various online sources with automated follow-up sequences.',
        },
        {
          title: 'Inventory Management',
          description: 'Track and organize vehicle listings in real-time with detailed analytics and reporting.',
        },
        {
          title: 'Customer Interaction Tools',
          description: 'Facilitate communication through integrated channels including email, SMS, and social platforms.',
        },
        {
          title: 'Analytics and Reporting',
          description: 'Gain insights into sales performance, customer behavior, and inventory metrics with customizable dashboards.',
        },
      ],
      insights: {
        title: 'Real-time Insights at Your Fingertips',
        description: 'Our intuitive dashboard gives you a comprehensive overview of your dealership\'s performance with real-time metrics and customizable reports.',
        benefits: [
          'Reduce time spent on administrative tasks by up to 40%',
          'Increase lead conversion rates with targeted follow-up strategies',
          'Optimize inventory management with predictive analytics',
          'Generate detailed reports with actionable insights',
        ],
      },
    },
    howItWorks: {
      title: 'Seamless Implementation Process',
      description: 'We\'ve designed our onboarding process to be straightforward and efficient, getting you up and running with minimal disruption.',
      steps: [
        {
          number: '01',
          title: 'Onboarding & Setup',
          description: 'Our team works with you to set up your NextDeal instance, customizing it to fit your dealership\'s specific needs and workflows.',
        },
        {
          number: '02',
          title: 'Data Migration',
          description: 'We\'ll handle the migration of your existing customer and inventory data to ensure a smooth transition with no disruption to your operations.',
        },
        {
          number: '03',
          title: 'Team Training',
          description: 'Comprehensive training sessions for your team to ensure everyone is comfortable and proficient with the NextDeal platform.',
        },
        {
          number: '04',
          title: 'Go Live & Support',
          description: 'Launch your NextDeal system with ongoing support from our dedicated team to help you maximize your results and ROI.',
        },
      ],
      cta: 'Ready to transform your dealership operations?',
    },
    faq: {
      title: 'Frequently Asked Questions',
      description: 'Get answers to common questions about NextDeal and how it can benefit your dealership.',
      contact: {
        text: 'Still have questions? Our team is here to help.',
        cta: 'Contact us',
      },
      items: [
        {
          question: 'What makes NextDeal different from other CRM solutions?',
          answer: 'NextDeal is specifically built for car dealerships with industry-specific features like inventory management, specialized lead tracking, and automotive-focused customer profiles. Unlike general CRM systems, every aspect of NextDeal is optimized for dealership operations and the unique customer journey in automotive sales.',
        },
        {
          question: 'How long does it take to implement NextDeal?',
          answer: 'Most dealerships can be fully set up on NextDeal within 2-4 weeks, depending on the size of your operation and data complexity. Our implementation team handles the heavy lifting, including data migration, system configuration, and staff training to ensure a smooth transition.',
        },
        {
          question: 'Can NextDeal integrate with our existing DMS and other tools?',
          answer: 'Yes, NextDeal is built with integration in mind. We offer ready-made connections to popular Dealer Management Systems (DMS) and other dealership technologies. Our API also allows for custom integrations with specialized tools your dealership may be using.',
        },
        {
          question: 'What kind of support is included?',
          answer: 'All NextDeal subscriptions include dedicated support from our team of automotive CRM specialists. This includes regular check-ins, continuous training, and priority technical support. We\'re committed to being partners in your success, not just another vendor.',
        },
        {
          question: 'Is there a contract or commitment period?',
          answer: 'For our pilot program, we offer a 3-month commitment period to ensure you have enough time to properly evaluate the platform. After the pilot, standard subscriptions are available on both monthly and annual terms, with discounts for annual commitments.',
        },
        {
          question: 'How secure is our dealership and customer data?',
          answer: 'NextDeal employs enterprise-grade security measures including encryption at rest and in transit, regular security audits, and compliance with industry standards. We take data privacy seriously and ensure all customer information is protected in accordance with relevant regulations.',
        },
      ],
    },
    earlyAccess: {
      badge: 'Limited Availability',
      title: 'Join Our Exclusive Pilot Program',
      description: 'Be among the first dealerships to experience NextDeal and shape the future of automotive CRM. Our pilot program offers early access to all features at special introductory pricing.',
      benefits: [
        {
          title: 'Priority Onboarding',
          description: 'Skip the queue with dedicated implementation support',
        },
        {
          title: 'Influence Product Development',
          description: 'Your feedback directly shapes NextDeal\'s future features',
        },
        {
          title: 'Preferred Pricing',
          description: 'Lock in exclusive rates as an early adopter',
        },
        {
          title: 'Premium Support',
          description: 'Direct line to our development and customer success teams',
        },
      ],
      form: {
        title: 'Request Early Access',
        fields: {
          name: 'Full Name',
          email: 'Email Address',
          dealershipName: 'Dealership Name',
          phoneNumber: 'Phone Number',
          message: 'Tell us about your dealership (Optional)',
          messagePlaceholder: 'What are your biggest challenges? What are you looking for in a CRM?',
        },
        submit: 'Submit Application',
        success: {
          title: 'Thank You for Your Interest!',
          message: 'Your application has been received. Our team will review your information and contact you within 2 business days to discuss next steps.',
          button: 'Submit Another Application',
        },
        disclaimer: 'By submitting this form, you agree to our Privacy Policy and Terms of Service.',
      },
    },
    footer: {
      description: 'Transforming car dealership operations with next-generation CRM solutions.',
      company: {
        title: 'Company',
        links: ['About Us', 'Careers', 'Blog', 'Press'],
      },
      resources: {
        title: 'Resources',
        links: ['Documentation', 'Help Center', 'Pricing', 'API Reference'],
      },
      contact: {
        title: 'Contact',
      },
      legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
    },
  },
  he: {
    nav: {
      features: 'תכונות',
      howItWorks: 'איך זה עובד',
      faq: 'שאלות נפוצות',
      getEarlyAccess: 'קבל גישה מוקדמת',
    },
    hero: {
      badge: 'בקרוב',
      title: 'מהפכה בתפעול <span class="text-blue-600">סוכנות הרכב</span> שלך',
      description: 'NextDeal היא פלטפורמת CRM מקיפה שנבנתה במיוחד עבור סוכנויות רכב לייעול ניהול לידים, מעקב אחר מלאי ואינטראקציות עם לקוחות.',
      cta: {
        primary: 'הצטרף לתוכנית הפיילוט',
        secondary: 'גלה תכונות',
      },
      trusted: 'מהימן על ידי סוכנויות רכב בכל הארץ',
    },
    features: {
      title: 'תכונות חזקות לסוכנויות רכב מודרניות',
      description: 'NextDeal משלבת טכנולוגיה מתקדמת עם מומחיות בתעשייה כדי לספק פתרון מקיף לסוכנויות רכב.',
      items: [
        {
          title: 'יצירת לידים אוטומטית',
          description: 'לכידה וניהול של לידים ממקורות מקוונים שונים עם רצפי מעקב אוטומטיים.',
        },
        {
          title: 'ניהול מלאי',
          description: 'מעקב וארגון רשימות רכבים בזמן אמת עם ניתוח ודיווח מפורטים.',
        },
        {
          title: 'כלי אינטראקציה עם לקוחות',
          description: 'הקל על התקשורת באמצעות ערוצים משולבים כולל דוא"ל, SMS ופלטפורמות חברתיות.',
        },
        {
          title: 'ניתוח ודיווח',
          description: 'קבל תובנות על ביצועי מכירות, התנהגות לקוחות ומדדי מלאי עם לוחות מחוונים מותאמים אישית.',
        },
      ],
      insights: {
        title: 'תובנות בזמן אמת בהישג יד',
        description: 'לוח המחוונים האינטואיטיבי שלנו מעניק לך סקירה מקיפה של ביצועי הסוכנות שלך עם מדדים בזמן אמת ודוחות מותאמים אישית.',
        benefits: [
          'הפחתת זמן המוקדש למשימות אדמיניסטרטיביות ב-40%',
          'הגדלת שיעורי המרת לידים עם אסטרטגיות מעקב ממוקדות',
          'אופטימיזציה של ניהול מלאי עם אנליטיקה חזויה',
          'הפקת דוחות מפורטים עם תובנות פעולה',
        ],
      },
    },
    howItWorks: {
      title: 'תהליך יישום חלק',
      description: 'תכננו את תהליך ההטמעה שלנו להיות פשוט ויעיל, כדי להתחיל לעבוד עם מינימום הפרעה.',
      steps: [
        {
          number: '01',
          title: 'הטמעה והגדרה',
          description: 'הצוות שלנו עובד איתך להגדרת מערכת NextDeal, תוך התאמה לצרכים ולתהליכי העבודה הספציפיים של הסוכנות שלך.',
        },
        {
          number: '02',
          title: 'העברת נתונים',
          description: 'נטפל בהעברת נתוני הלקוחות והמלאי הקיימים שלך כדי להבטיח מעבר חלק ללא הפרעה לפעילות.',
        },
        {
          number: '03',
          title: 'הדרכת צוות',
          description: 'מפגשי הדרכה מקיפים לצוות שלך כדי להבטיח שכולם מרגישים בנוח ומיומנים בפלטפורמת NextDeal.',
        },
        {
          number: '04',
          title: 'השקה ותמיכה',
          description: 'השק את מערכת NextDeal עם תמיכה מתמשכת מהצוות המסור שלנו כדי לעזור לך למקסם את התוצאות וה-ROI שלך.',
        },
      ],
      cta: 'מוכנים לשנות את תפעול הסוכנות שלכם?',
    },
    faq: {
      title: 'שאלות נפוצות',
      description: 'קבל תשובות לשאלות נפוצות על NextDeal וכיצד היא יכולה לתרום לסוכנות שלך.',
      contact: {
        text: 'עדיין יש לך שאלות? הצוות שלנו כאן לעזור.',
        cta: 'צור קשר',
      },
      items: [
        {
          question: 'מה מייחד את NextDeal מפתרונות CRM אחרים?',
          answer: 'NextDeal נבנתה במיוחד עבור סוכנויות רכב עם תכונות ייעודיות לתעשייה כמו ניהול מלאי, מעקב אחר לידים מתמחה ופרופילי לקוחות ממוקדי רכב. בניגוד למערכות CRM כלליות, כל היבט של NextDeal מותאם לתפעול סוכנויות ולמסע הלקוח הייחודי במכירות רכב.',
        },
        {
          question: 'כמה זמן לוקח ליישם את NextDeal?',
          answer: 'רוב הסוכנויות יכולות להיות מוגדרות במלואן ב-NextDeal תוך 2-4 שבועות, בהתאם לגודל הפעילות ומורכבות הנתונים. צוות היישום שלנו מטפל בעבודה הקשה, כולל העברת נתונים, הגדרת מערכת והדרכת צוות להבטחת מעבר חלק.',
        },
        {
          question: 'האם NextDeal יכולה להתממשק עם מערכת ה-DMS הקיימת שלנו וכלים אחרים?',
          answer: 'כן, NextDeal נבנתה עם אינטגרציה בראש. אנו מציעים חיבורים מוכנים למערכות ניהול סוכנויות (DMS) פופולריות וטכנולוגיות סוכנות אחרות. ה-API שלנו מאפשר גם אינטגרציות מותאמות אישית עם כלים מיוחדים שהסוכנות שלך עשויה להשתמש בהם.',
        },
        {
          question: 'איזו תמיכה כלולה?',
          answer: 'כל מנויי NextDeal כוללים תמיכה ייעודית מצוות המומחים שלנו ל-CRM בתחום הרכב. זה כולל פגישות מעקב קבועות, הדרכה מתמשכת ותמיכה טכנית בעדיפות. אנחנו מחויבים להיות שותפים בהצלחה שלך, לא רק עוד ספק.',
        },
        {
          question: 'האם יש תקופת חוזה או התחייבות?',
          answer: 'עבור תוכנית הפיילוט שלנו, אנו מציעים תקופת התחייבות של 3 חודשים כדי להבטיח שיש לך מספיק זמן להעריך כראוי את הפלטפורמה. לאחר הפיילוט, מנויים רגילים זמינים במונחים חודשיים ושנתיים, עם הנחות להתחייבויות שנתיות.',
        },
        {
          question: 'עד כמה מאובטחים נתוני הסוכנות והלקוחות שלנו?',
          answer: 'NextDeal משתמשת באמצעי אבטחה ברמה ארגונית כולל הצפנה במנוחה ובתעבורה, ביקורות אבטחה קבועות ותאימות לתקני התעשייה. אנו מתייחסים ברצינות לפרטיות נתונים ומבטיחים שכל מידע הלקוחות מוגן בהתאם לתקנות הרלוונטיות.',
        },
      ],
    },
    earlyAccess: {
      badge: 'זמינות מוגבלת',
      title: 'הצטרף לתוכנית הפיילוט הבלעדית שלנו',
      description: 'היה בין הסוכנויות הראשונות שחוות את NextDeal ומעצבות את עתיד ה-CRM בתחום הרכב. תוכנית הפיילוט שלנו מציעה גישה מוקדמת לכל התכונות במחירי היכרות מיוחדים.',
      benefits: [
        {
          title: 'הטמעה בעדיפות',
          description: 'דלג על התור עם תמיכת יישום ייעודית',
        },
        {
          title: 'השפעה על פיתוח המוצר',
          description: 'המשוב שלך מעצב ישירות את התכונות העתידיות של NextDeal',
        },
        {
          title: 'תמחור מועדף',
          description: 'נעל מחירים בלעדיים כמאמץ מוקדם',
        },
        {
          title: 'תמיכה פרימיום',
          description: 'קו ישיר לצוותי הפיתוח והצלחת הלקוחות שלנו',
        },
      ],
      form: {
        title: 'בקש גישה מוקדמת',
        fields: {
          name: 'שם מלא',
          email: 'כתובת דואר אלקטרוני',
          dealershipName: 'שם הסוכנות',
          phoneNumber: 'מספר טלפון',
          message: 'ספר לנו על הסוכנות שלך (אופציונלי)',
          messagePlaceholder: 'מהם האתגרים הגדולים ביותר שלך? מה אתה מחפש ב-CRM?',
        },
        submit: 'שלח בקשה',
        success: {
          title: 'תודה על התעניינותך!',
          message: 'בקשתך התקבלה. הצוות שלנו יבחן את המידע שלך ויצור איתך קשר תוך 2 ימי עסקים כדי לדון בשלבים הבאים.',
          button: 'שלח בקשה נוספת',
        },
        disclaimer: 'על ידי שליחת טופס זה, אתה מסכים למדיניות הפרטיות ותנאי השירות שלנו.',
      },
    },
    footer: {
      description: 'מהפכה בתפעול סוכנויות רכב עם פתרונות CRM מהדור הבא.',
      company: {
        title: 'חברה',
        links: ['אודותינו', 'קריירה', 'בלוג', 'עיתונות'],
      },
      resources: {
        title: 'משאבים',
        links: ['תיעוד', 'מרכז עזרה', 'תמחור', 'תיעוד API'],
      },
      contact: {
        title: 'צור קשר',
      },
      legal: ['מדיניות פרטיות', 'תנאי שירות', 'מדיניות קובצי Cookie'],
    },
  },
};

export const defaultLanguage: Language = 'he';

export function getTranslations(lang: Language) {
  return translations[lang];
}