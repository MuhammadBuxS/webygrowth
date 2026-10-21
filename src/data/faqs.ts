import type { Faq } from "./pages";

/**
 * Answer-first FAQ bank.
 *
 * Every answer opens with a complete, standalone response so search engines and AI
 * assistants can quote it directly. Keep that style when adding new entries.
 */

/** Extra FAQs shown on each service and industry page, keyed by page slug. */
export const PAGE_FAQS: Record<string, Faq[]> = {
  "wordpress-website-design": [
    {
      "q": "Do you give fixed quotes for WordPress websites?",
      "a": "Yes, WebyGrowth gives a fixed, clear quote for every WordPress website after a free consultation, so you know the full scope and cost before any work starts. No pricing figures are published, because the quote depends on the pages, features and content your business needs. The consultation itself is free, so you can ask questions before committing to anything."
    },
    {
      "q": "How long does it take to build a WordPress website for a small business?",
      "a": "A typical small business WordPress website takes WebyGrowth around two to four weeks from the first consultation to launch, covering planning, design, build, testing and go-live. Larger sites with more pages or custom features can take longer, and the timeline is agreed when you receive your quote. Quick feedback and content that is ready on time help keep the schedule on track."
    },
    {
      "q": "What's included when WebyGrowth builds a WordPress website?",
      "a": "Every WebyGrowth WordPress build includes SEO foundations, mobile-first design, speed optimisation, lead or quote forms, analytics setup, training and post-launch support, all as part of the standard service. These are not optional extras, so the site is ready to be found, to load quickly on phones and to turn visitors into enquiries from launch day."
    },
    {
      "q": "Is WordPress better than Wix or Squarespace for a small business website?",
      "a": "WordPress is usually the stronger long-term choice for a UK small business that wants flexibility, room to grow and fine control over SEO, while Wix or Squarespace can suit very simple sites. The right answer depends on your plans, so WebyGrowth recommends the platform that fits your business during the free consultation, rather than pushing one option."
    },
    {
      "q": "What support do I get after my WordPress website launches?",
      "a": "Every WebyGrowth WordPress build includes training and post-launch support, so you can manage your site with confidence and ask for help once it is live. If something is unclear or needs adjusting after launch, you can contact WebyGrowth by email, and the training covers the day-to-day tasks most small business owners need."
    },
    {
      "q": "How do I get started with a new WordPress website for my UK business?",
 "a": "The fastest way to start is to message WebyGrowth on WhatsApp at +44 7460 610320 or email hello@webygrowth.com to book a free consultation. You can also ask for a free website audit if you already have a site, and after the conversation you will receive a fixed, clear quote with the scope set out."
    }
  ],
  "woocommerce-store-design": [
    {
      "q": "Do you give a fixed price for building a WooCommerce store?",
      "a": "Yes, WebyGrowth gives a fixed, clear quote for each WooCommerce store after a free consultation, so there are no surprises once work begins. No pricing figures are published, because the quote depends on your product range, features and the integrations your shop needs. The consultation is free, so you can discuss your plans before deciding whether to go ahead."
    },
    {
      "q": "How long does it take to build a WooCommerce store?",
      "a": "WebyGrowth confirms a WooCommerce build timeline during the free consultation, because it depends on the size of your catalogue and the features you need. A typical small business website takes two to four weeks, and a store is planned from that starting point. You will know the expected schedule before you agree the fixed quote and work begins."
    },
    {
      "q": "What's included when WebyGrowth builds a WooCommerce store?",
      "a": "Every WebyGrowth WooCommerce build includes SEO foundations, mobile-first design, speed optimisation, lead and quote forms, analytics setup, training and post-launch support as standard. This means your online shop is built to be found in search and to work smoothly for customers on any device, with analytics in place to show how people use it."
    },
    {
      "q": "What's the difference between WooCommerce and WordPress?",
      "a": "WordPress is the website platform itself, while WooCommerce is a plugin that adds shop features such as products, a basket and checkout. WebyGrowth builds WooCommerce stores on WordPress, so you get a flexible content website and an online shop in one place, and your product pages sit alongside pages like your blog and service information."
    },
    {
      "q": "Who looks after my WooCommerce store after launch?",
      "a": "WebyGrowth includes training and post-launch support with every WooCommerce build, so you can manage products and day-to-day updates yourself and get help when you need it. You can reach WebyGrowth by email if something needs attention after launch, and the training is designed for small business owners rather than developers."
    },
    {
      "q": "How do I start a WooCommerce store for my UK small business?",
 "a": "Start by messaging WebyGrowth on WhatsApp at +44 7460 610320 or emailing hello@webygrowth.com to arrange a free consultation. Tell them what you sell and how you want customers to buy, and after the conversation you will receive a fixed, clear quote for your WooCommerce store, with the scope and timeline explained."
    }
  ],
  "shopify-store-design": [
    {
      "q": "How does WebyGrowth price a Shopify store build?",
      "a": "WebyGrowth gives a fixed, clear quote for each Shopify store after a free consultation, based on your products, design needs and features. Shopify's own subscription is a separate platform charge paid to Shopify, and WebyGrowth explains the ongoing platform costs when you speak, so you understand the full picture before you commit."
    },
    {
      "q": "What affects how long a Shopify build takes?",
      "a": "A Shopify build with WebyGrowth typically takes three to five weeks, and the exact timing depends on the number of products, the features you want and how quickly content and feedback are supplied. WebyGrowth agrees a realistic timeline with you before the build begins, so there is a clear schedule to work towards."
    },
    {
      "q": "What's included when WebyGrowth builds a Shopify store?",
      "a": "Every WebyGrowth Shopify build includes SEO foundations, mobile-first design, speed optimisation, lead and quote forms, analytics setup, training and post-launch support as part of the standard service. Your store is therefore designed to be found in search, to load quickly on phones and to be easy for you to run once it is live."
    },
    {
      "q": "Do I need a Shopify store if I already sell on Etsy or Amazon?",
      "a": "Not necessarily, but your own Shopify store gives you control over your branding, your customer experience and how people find you, which marketplaces tend to limit. Many UK small businesses use both. WebyGrowth can talk through whether your own store makes sense for your products in a free consultation, with no obligation."
    },
    {
      "q": "Who looks after my Shopify store once it goes live?",
      "a": "WebyGrowth includes training and post-launch support with every Shopify build, so you can run your store day to day and have someone to ask when questions come up. Support is available through email or email after launch, and the training is aimed at helping you feel confident managing your own products and content."
    },
    {
      "q": "How do I get started with a Shopify store for my small business?",
 "a": "Message WebyGrowth on WhatsApp at +44 7460 610320 or email hello@webygrowth.com to book a free consultation. After a conversation about your products and goals, you receive a fixed, clear quote, and the build then follows a planned timeline of typically three to five weeks."
    }
  ],
  "store-migrations": [
    {
      "q": "Do you give fixed quotes for ecommerce store migrations?",
      "a": "Yes, WebyGrowth gives a fixed, clear quote for each store migration after a free consultation, so you know what the move involves before it starts. No pricing figures are published, because the quote depends on your platforms, catalogue size and the data being moved. The consultation is free and carries no obligation to proceed."
    },
    {
      "q": "How long does it take to migrate an online store?",
      "a": "WebyGrowth confirms the migration timeline during the free consultation, because it depends on the platforms involved and how much product, customer and order data needs to move. A larger catalogue or more custom features generally means more time for planning and testing, and you will have a clear schedule before the work begins."
    },
    {
      "q": "What gets moved in an ecommerce store migration?",
      "a": "A store migration typically moves your products, collections, customer details, orders and page content to the new platform. WebyGrowth agrees the exact scope with you in the free consultation and sets it out in your fixed quote, so nothing important is missed and you know in advance what will be carried across."
    },
    {
      "q": "Should I migrate my store or rebuild it from scratch?",
      "a": "Migrating keeps your existing products, customers and content and moves them to a better platform, while a rebuild starts the design and structure afresh. WebyGrowth can advise which suits your UK small business during the free consultation, and some projects combine both, moving the data while also improving the design."
    },
    {
      "q": "What support do I get after my store has been migrated?",
      "a": "WebyGrowth includes training and post-launch support with its builds, so after your store moves you can learn the new platform and ask for help if anything needs adjusting. You can contact WebyGrowth by email once the new store is live, rather than being left to work it out alone."
    },
    {
      "q": "What should I prepare before migrating my online store?",
 "a": "Before a migration, gather your current platform login details, a list of the apps or features you rely on and any plans you have for the new store. WebyGrowth can guide you through this in the free consultation, which you can book by email at hello@webygrowth.com."
    }
  ],
  "seo-services": [
    {
      "q": "How much do SEO services cost for a UK small business?",
      "a": "WebyGrowth gives a fixed, clear quote for its SEO services after a free consultation, based on your website, goals and what needs doing. No pricing figures are published, because the right scope differs between a local tradesperson, a clinic and an online shop. The consultation is free, so you can understand the options before deciding."
    },
    {
      "q": "What does an SEO service from WebyGrowth include?",
      "a": "WebyGrowth's SEO services cover improving how a website is structured, how quickly it loads and how well it works on mobile, so search engines can understand it and visitors find it easy to use. The exact work is agreed with you after a free consultation and set out in a fixed quote."
    },
    {
      "q": "When should I start SEO on a new website?",
      "a": "The best time to start SEO is while the website is being built, because structure, speed and mobile design are far easier to get right from the beginning than to fix later. WebyGrowth builds SEO foundations into every website, and further SEO work can follow after launch if you want to build on them."
    },
    {
      "q": "Do I need SEO if I already run Google Ads?",
      "a": "Google Ads and SEO do different jobs, so many UK small businesses benefit from both. Ads bring visitors only while you pay for them, whereas SEO improves your site's organic visibility in search results over time. WebyGrowth can advise which should come first for your business during a free consultation."
    },
    {
      "q": "Is SEO a one-off job or does it need ongoing work?",
      "a": "SEO usually starts with a foundation of good structure, speed and content, but it benefits from ongoing attention because search results and competitors keep changing. WebyGrowth builds SEO foundations into every website, and can discuss whether further support makes sense for your business in a free consultation."
    },
    {
      "q": "What is a free website audit and how do I get one?",
 "a": "A free website audit from WebyGrowth is a review of your current website that shows where it could be improved for search engines and for visitors. To request one, message WebyGrowth on WhatsApp at +44 7460 610320 or email hello@webygrowth.com and mention the website you would like reviewed."
    }
  ],
  "roofing-website-design": [
    {
      "q": "What should a roofing company website include to get more quote requests?",
      "a": "A roofing website should have a short quote form on every key page, a prominent call or email button, separate pages for each service and clear photos of completed work. WebyGrowth builds roofing sites mobile-first, so the form and contact buttons are easy to use on a phone. Keep the page copy specific to the jobs you want."
    },
    {
      "q": "Should a roofing website have an emergency or storm damage repairs page?",
      "a": "Yes, a dedicated emergency and storm damage repairs page gives urgent searchers a clear way to contact you and lets that service rank for its own searches, separate from routine roofing work. WebyGrowth can add one with a prominent call button. Only promise response times your team can genuinely meet."
    },
    {
      "q": "How many fields should a roofing quote form have?",
      "a": "A roofing quote form works best with only the essentials: name, phone number, postcode and type of roofing job, so it is quick to complete on a phone. Every extra field gives a visitor another reason to abandon it. WebyGrowth builds short quote forms, and you can ask the detailed questions when you call back."
    },
    {
      "q": "Which roofing services should have their own page on my website?",
      "a": "Each main roofing service should have its own page, such as roof repairs, re-roofing, flat roofs, chimney work and guttering, so each can rank for its own searches and answer specific questions. WebyGrowth plans this page structure before design, based on the jobs you most want to win and the areas you cover."
    },
    {
      "q": "Do roofers still need a website if most work comes from word of mouth?",
      "a": "Yes, in most cases, because people who hear about a roofer by recommendation often search the company name online before calling. A clear, professional website backs up the recommendation and also catches customers who have never heard of you. WebyGrowth builds roofing sites designed to turn that interest into enquiries."
    }
  ],
  "cleaning-website-design": [
    {
      "q": "What should a cleaning company website include?",
      "a": "A cleaning company website should include a page for each service, the areas you cover, a simple quote form and a visible phone or email button. Add trust details such as insurance or staff vetting only if they are genuinely true. WebyGrowth builds these sites mobile-first with lead forms included as standard."
    },
    {
      "q": "Should a cleaning company show prices on its website?",
      "a": "Whether to show prices depends on how your cleaning jobs are priced: if jobs vary widely, a quote form is usually more practical than fixed prices, and explaining what affects the cost builds trust. WebyGrowth can design the site around either approach, whichever suits how you currently quote for work."
    },
    {
      "q": "Should domestic, end of tenancy and office cleaning have separate pages?",
      "a": "Yes, each type of cleaning should have its own page, because customers search for them separately and want different information from each. Combining them on one page makes it harder to rank and harder to read. WebyGrowth sets up a clear service structure so every page has a distinct purpose and its own enquiry form."
    },
    {
      "q": "How can a cleaning website help me win regular customers rather than one-off jobs?",
      "a": "Ask about frequency in your quote form, for example one-off, weekly or fortnightly, so you can see which enquiries could become regular work. Your service pages can also explain how recurring cleaning works and what customers can expect. WebyGrowth builds quote forms like this to help you prioritise the right enquiries."
    },
    {
      "q": "Do I need a website if I already get cleaning jobs from Facebook or directories?",
      "a": "Yes, a website is worth having because it is the one online presence you control, and it can rank in Google for your services and areas. Social pages and directories can change their rules or fees at any time. WebyGrowth builds cleaning websites that work alongside those channels rather than replacing them."
    }
  ],
  "dental-website-design": [
    {
      "q": "What pages does a dental practice website need?",
      "a": "A dental practice website needs treatment pages, a team page, new patient information, opening hours, location details and an easy way to enquire or book. WebyGrowth plans this structure before design, then builds it mobile-first so patients can find what they need quickly on a phone and know how to get in touch."
    },
    {
      "q": "How should a dental website follow GDC advertising guidance?",
      "a": "Dental practices should check the General Dental Council's current advertising guidance before publishing website content, because the expectations can change over time. WebyGrowth builds the structure and layout, but the practice remains responsible for compliance, and this is not legal advice. Take particular care over treatment claims, wording and any before-and-after images."
    },
    {
      "q": "Should each dental treatment have its own page?",
      "a": "Yes, each main treatment should have its own page, such as implants, orthodontics or whitening, because patients search for each one separately and want specific answers. A dedicated page lets you explain the treatment fully and offer a clear next step. WebyGrowth builds dental sites with this treatment-led structure from the start."
    },
    {
      "q": "What should a dental website tell new or nervous patients?",
      "a": "It should explain in plain language what happens at a first visit, who the team are, how to get in touch and what to expect, so a nervous patient feels able to take the first step. Friendly team photos help. WebyGrowth designs dental sites with those reassurance points and a clear enquiry route."
    },
    {
      "q": "How can a dental practice build trust with its website?",
      "a": "A dental website builds trust with real photos of the practice and team, clear information about qualifications and what you offer, and genuine patient feedback shared with permission. Check current GDC guidance on what information to display. WebyGrowth lays these elements out clearly so visitors can find them quickly on any device."
    }
  ],
  "restaurant-website-design": [
    {
      "q": "What should a restaurant website include?",
      "a": "A restaurant website should include your menu as readable text, opening hours, address with a map, contact or booking details, good photos and allergen information. WebyGrowth builds restaurant sites mobile-first, because diners are often checking those details on a phone just before they decide where to eat."
    },
    {
      "q": "Should a restaurant menu be a PDF or a web page?",
      "a": "A restaurant menu should be text on a web page rather than a PDF, because web pages tend to load more smoothly on phones and search engines can read them more easily. A PDF can be slow and awkward on a small screen. WebyGrowth builds menus as proper pages that are quick to scan."
    },
    {
      "q": "How can a restaurant website bring in private dining and event enquiries?",
      "a": "Give private dining, parties and events their own page with a short enquiry form, so those enquiries do not get lost among normal booking requests. Describe the space, group sizes and how to ask for a quote, and include a few good photos. WebyGrowth can build that page and form into your site."
    },
    {
      "q": "Does a restaurant need a website if it has Instagram and a Google profile?",
      "a": "Yes, a website is still worth having because it is the one place you control fully, and it can hold your full menu, story and enquiry forms. Social posts and listings are useful but give you less control over layout and search visibility. WebyGrowth builds restaurant websites that complement them."
    },
    {
      "q": "How should a restaurant website show allergen information?",
      "a": "Allergen information on a restaurant website must be accurate, and food businesses should check the Food Standards Agency's current guidance on what they need to provide. WebyGrowth can design the menu layout so allergen details are easy to find and read, but the restaurant supplies the information and keeps it correct."
    }
  ]
};

/** Site-wide FAQs, grouped for the /faq/ page. */
export const FAQ_GROUPS: { title: string; intro: string; faqs: Faq[] }[] = [
  {
    "title": "About WebyGrowth",
    "intro": "Who we are, what we do and how we work.",
    "faqs": [
      {
        "q": "Who is WebyGrowth?",
        "a": "WebyGrowth is a web design agency that builds WordPress websites, WooCommerce stores and Shopify stores for UK small businesses, and also handles store migrations and SEO services. It plans strategy before design and continuing to support clients after their site launches."
      },
      {
        "q": "What does WebyGrowth do?",
        "a": "WebyGrowth designs and builds WordPress websites, WooCommerce and Shopify online stores, migrates existing stores and provides SEO services for UK small businesses. Every build includes SEO foundations, speed optimisation, lead or quote forms, analytics setup, training and post-launch support."
      },
      {
        "q": "Where is WebyGrowth based?",
 "a": "WebyGrowth works with UK small businesses online, so you do not need to visit an office to get started. Clients speak to the team on WhatsApp and by email. For anything specific, message WebyGrowth on WhatsApp at +44 7460 610320 or email hello@webygrowth.com and the team will respond."
      },
      {
        "q": "What makes WebyGrowth different from other UK web design agencies?",
        "a": "WebyGrowth plans strategy before design, builds SEO structure in from day one, uses conversion-focused, mobile-first layouts and gives fixed quotes after a consultation. It also builds industry-specific sites and supports clients after launch, rather than handing over a website and disappearing. These points can all be checked before you commit."
      },
      {
        "q": "What types of businesses does WebyGrowth work with?",
        "a": "WebyGrowth works with UK small businesses, including roofers, cleaning companies, dental practices, restaurants, plumbers, electricians, builders, beauty salons, contractors, home improvement companies, ecommerce brands and other local service businesses. Each website is planned around how that type of business wins customers."
      },
      {
        "q": "What is included in every WebyGrowth website?",
        "a": "Every WebyGrowth website includes SEO foundations, speed optimisation, lead or quote forms, analytics setup, training and post-launch support. Sites are also built mobile-first with conversion-focused layouts and clean development, so the website can keep supporting your business as it grows after launch."
      }
    ]
  },
  {
    "title": "Working together",
    "intro": "Quotes, timelines and what happens at each stage.",
    "faqs": [
      {
        "q": "How do I get a quote from WebyGrowth?",
 "a": "To get a quote from WebyGrowth, message the team on WhatsApp at +44 7460 610320 or email hello@webygrowth.com to arrange a free consultation. WebyGrowth does not publish set prices. Instead it gives a fixed quote once it understands what your business needs, so you know the cost before you commit."
      },
      {
        "q": "How do I contact WebyGrowth?",
 "a": "The fastest way to contact WebyGrowth is on WhatsApp at +44 7460 610320, and email hello@webygrowth.com also works. Email can be used to ask a question, request a free website audit or book a free consultation about your website, online store or SEO project."
      },
      {
        "q": "Does WebyGrowth work with businesses outside the UK?",
 "a": "WebyGrowth focuses on UK small businesses, and its websites are planned around the UK market. If your business is based elsewhere, the best step is to message WebyGrowth on WhatsApp at +44 7460 610320 or email hello@webygrowth.com and ask whether the team can help with your project."
      },
      {
        "q": "Does WebyGrowth offer a free consultation or website audit?",
 "a": "Yes, WebyGrowth offers both a free website audit and a free consultation for UK small businesses. You can request either by email on hello@webygrowth.com. A fixed quote is given after the consultation, so there is no guesswork about cost."
      },
      {
        "q": "What is the process for building a website with WebyGrowth?",
        "a": "WebyGrowth starts with a free consultation, gives a fixed quote, then plans the strategy before any design work begins. Once the site is built and launched, WebyGrowth provides training and post-launch support. A typical small business website takes two to four weeks, and Shopify builds take three to five."
      },
      {
        "q": "Does WebyGrowth provide support after my website launches?",
        "a": "Yes, WebyGrowth includes training and post-launch support with every build, and focuses on long-term growth support rather than a one-off handover. You will be shown how to manage your site, and you can contact the team by email whenever you need help."
      }
    ]
  },
  {
    "title": "Websites & platforms",
    "intro": "WordPress, WooCommerce, Shopify and choosing between them.",
    "faqs": [
      {
        "q": "How do I choose between WordPress, Shopify and WooCommerce?",
        "a": "Choose WordPress for a flexible business or service website, Shopify for a dedicated online store that is quick to manage, and WooCommerce when you want a store built into a WordPress site. WebyGrowth builds all three and can advise on the best fit for your business during a free consultation."
      },
      {
        "q": "Is a cheap website worth it?",
        "a": "A cheap website is rarely worth it if it lacks proper structure, speed, mobile design and SEO, because it may bring in few enquiries. Compare what is included, not just the price. WebyGrowth gives fixed quotes after a consultation, with SEO foundations, forms, analytics, training and support included."
      },
      {
        "q": "What should I look for in a UK web design agency?",
        "a": "Look for a UK web design agency that plans strategy before design, builds in SEO and speed, designs mobile-first, explains clearly what is included and supports you after launch. Ask for a fixed quote and how enquiries will be tracked. WebyGrowth works to this approach for UK small businesses."
      },
      {
        "q": "How long does a Shopify store take to build with WebyGrowth?",
        "a": "A Shopify store from WebyGrowth typically takes three to five weeks to build. The exact timeline depends on the size of your catalogue and any features you need. A free consultation with WebyGrowth gives you a clearer view of timing before you commit to a fixed quote."
      },
      {
        "q": "Can WebyGrowth migrate my online store to a new platform?",
        "a": "Yes, WebyGrowth handles store migrations, which means moving an existing online store to a new platform. The team can plan the move with SEO in mind, so you do not lose search visibility. Email WebyGrowth or by email to discuss what your store needs."
      },
      {
        "q": "What does mobile-first web design mean?",
        "a": "Mobile-first web design means the phone layout is designed first and then expanded for larger screens, so the site is easy to read and use on a small display. WebyGrowth builds every website this way, with buttons, menus and forms that work well on a phone as well as a desktop."
      }
    ]
  },
  {
    "title": "SEO & getting found",
    "intro": "Rankings, local search and getting more enquiries from Google.",
    "faqs": [
      {
        "q": "How do I get more enquiries from my website?",
        "a": "To get more enquiries, make your services clear, put a simple quote form and contact button on every key page, make the site fast on mobile, and build SEO so the right customers can find it. WebyGrowth builds websites with these conversion and SEO foundations included from the start."
      },
      {
        "q": "How long does SEO take to work for a UK small business?",
        "a": "SEO usually shows meaningful ranking movement over three to six months for a UK small business. It builds gradually as pages are improved and search engines re-evaluate your site. WebyGrowth does not promise instant results, and no honest agency can guarantee a particular position in Google."
      },
      {
        "q": "Does WebyGrowth guarantee first page Google rankings?",
        "a": "No, WebyGrowth does not guarantee first page rankings, and no agency honestly can, because search engines make the final decisions. What WebyGrowth does is build SEO foundations, fast mobile-friendly pages and a clear structure, with meaningful ranking movement typically taking three to six months."
      },
      {
        "q": "What is local SEO for a small business?",
        "a": "Local SEO is the work of helping your business appear when people search for your services in a particular area. It relies on clear service pages, accurate business details and relevance to the places you cover. WebyGrowth provides SEO services for UK small businesses and builds this structure into new sites."
      },
      {
        "q": "Does WebyGrowth offer SEO as a separate service?",
 "a": "Yes, WebyGrowth provides SEO services as well as website and online store builds. A good starting point is the free website audit, which helps show where your current site could improve. Request it by email at hello@webygrowth.com."
      },
      {
        "q": "Why does website speed matter for SEO and enquiries?",
        "a": "Website speed matters because slow pages frustrate visitors, who may leave before contacting you, and speed is part of good technical SEO. WebyGrowth includes speed optimisation in every build, using clean development to keep pages lightweight and quick to load on mobile connections."
      }
    ]
  }
];
