const CITIES = {
  delhi: {
    name: 'Delhi', country: 'India', flag: '🇮🇳',
    lat: 28.6139, lon: 77.2090,
    tagline: 'Where history breathes in every alley',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&q=80',
    history: 'Delhi, India\'s capital, is a city of empires—from the Mughals to the British Raj. It pulses with 3,000 years of layered history, street food aromas, and bustling bazaars.',
    why: ['Iconic Red Fort & Qutub Minar','World-class street food in Chandni Chowk','Vibrant Dilli Haat markets','Mughal architecture around every corner'],
    culture: [
      {icon:'🕌',label:'Jama Masjid',desc:'One of India\'s largest mosques'},
      {icon:'🏰',label:'Red Fort',desc:'Mughal-era UNESCO World Heritage Site'},
      {icon:'🎨',label:'Dilli Haat',desc:'Craft bazaar with regional artisans'},
      {icon:'🍢',label:'Chandni Chowk',desc:'Legendary street food paradise'},
    ],
    quote: {text:'Delhi is not just a city; it is a civilisation.', author:'— Khushwant Singh'},
    bestMonth: 'Oct – Mar', language: 'Hindi / English', currency: 'INR',
    food: [
      {name:'Karim\'s',type:'restaurant',desc:'Legendary Mughlai since 1913',price:'₹₹',emoji:'🍖'},
      {name:'Paranthe Wali Gali',type:'street',desc:'Famous stuffed parathas lane',price:'₹',emoji:'🫓'},
      {name:'Indian Accent',type:'restaurant',desc:'Modern Indian fine dining',price:'₹₹₹',emoji:'🍽️'},
      {name:'Café Lota',type:'cafe',desc:'Artsy café at Crafts Museum',price:'₹₹',emoji:'☕'},
      {name:'Gali Kababian',type:'street',desc:'Old Delhi kebab street',price:'₹',emoji:'🔥'},
      {name:'The Big Chill',type:'cafe',desc:'Beloved Italian café chain',price:'₹₹',emoji:'🍕'},
    ],
    transport: {
      summary: 'Delhi has an extensive Metro network, app-based cabs (Ola/Uber), and iconic auto-rickshaws.',
      options: ['Metro','Auto','Cab','E-Rickshaw','Bus']
    }
  },
  jaipur: {
    name: 'Jaipur', country: 'India', flag: '🇮🇳',
    lat: 26.9124, lon: 75.7873,
    tagline: 'The Pink City of Rajput splendour',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&q=80',
    history: 'Jaipur, the "Pink City," was founded in 1727 by Maharaja Jai Singh II. It is celebrated for its majestic forts, vibrant bazaars, and rich Rajput heritage.',
    why: ['Amber Fort & Hawa Mahal','Colourful bazaars for block-print textiles','Authentic Rajasthani cuisine','Desert elephant safaris nearby'],
    culture: [
      {icon:'🏯',label:'Amber Fort',desc:'Hilltop Rajput-Mughal masterpiece'},
      {icon:'🏛️',label:'Hawa Mahal',desc:'Palace of Winds — iconic pink facade'},
      {icon:'🎠',label:'City Palace',desc:'Royal residence and museum'},
      {icon:'🌅',label:'Nahargarh Fort',desc:'Sunset views over the Pink City'},
    ],
    quote: {text:'Jaipur is a city that wears its history on its walls.', author:'— Travel & Leisure'},
    bestMonth: 'Oct – Feb', language: 'Hindi / Rajasthani', currency: 'INR',
    food: [
      {name:'Laxmi Mishthan Bhandar',type:'restaurant',desc:'Famous for dal baati churma',price:'₹',emoji:'🍛'},
      {name:'Chokhi Dhani',type:'restaurant',desc:'Cultural village dining experience',price:'₹₹',emoji:'🎪'},
      {name:'Tapri Central',type:'cafe',desc:'Trendy chai & snacks spot',price:'₹',emoji:'☕'},
      {name:'Masala Chowk',type:'street',desc:'Heritage food court with 30+ stalls',price:'₹',emoji:'🌮'},
    ],
    transport: {
      summary: 'Jaipur is well-connected by auto-rickshaws, cycle-rickshaws, and app cabs.',
      options: ['Auto','Cab','Cycle Rickshaw','Bus','E-Bike']
    }
  },
  mumbai: {
    name: 'Mumbai', country: 'India', flag: '🇮🇳',
    lat: 19.0760, lon: 72.8777,
    tagline: 'The city that never sleeps',
    image: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=1200&q=80',
    history: 'Mumbai is India\'s financial capital and home to Bollywood. It blends art deco architecture with colonial heritage, bustling dabbawala culture, and the finest street food in the country.',
    why: ['Gateway of India & Marine Drive','Vibrant nightlife and café culture','Bollywood studio tours','Dharavi, the world\'s most productive slum'],
    culture: [
      {icon:'🗼',label:'Gateway of India',desc:'Iconic 1924 archway on the harbour'},
      {icon:'🎬',label:'Film City',desc:'Bollywood\'s legendary studio complex'},
      {icon:'🐘',label:'Elephanta Caves',desc:'Rock-cut Hindu temples on an island'},
      {icon:'🌊',label:'Marine Drive',desc:'The Queen\'s Necklace promenade'},
    ],
    quote: {text:'Mumbai is the only city in India where you can reinvent yourself.', author:'— Suketu Mehta'},
    bestMonth: 'Nov – Feb', language: 'Hindi / Marathi / English', currency: 'INR',
    food: [
      {name:'Britannia & Co.',type:'restaurant',desc:'Legendary Parsi dhansak since 1923',price:'₹₹',emoji:'🍲'},
      {name:'Juhu Beach Stalls',type:'street',desc:'Mumbai pav bhaji & bhel puri',price:'₹',emoji:'🌊'},
      {name:'Leopold Cafe',type:'cafe',desc:'Historic colonial-era café',price:'₹₹',emoji:'☕'},
      {name:'Trishna',type:'restaurant',desc:'Iconic seafood fine dining',price:'₹₹₹',emoji:'🦀'},
      {name:'Bade Miyan',type:'street',desc:'Famous late-night kebab stall',price:'₹',emoji:'🔥'},
    ],
    transport: {
      summary: 'Mumbai has local trains (lifeline), Metro, BEST buses, and auto-rickshaws.',
      options: ['Local Train','Metro','Auto','Cab','Ferry','Bus']
    }
  },
  goa: {
    name: 'Goa', country: 'India', flag: '🇮🇳',
    lat: 15.2993, lon: 74.1240,
    tagline: 'Sun, sand, and spice on the Konkan coast',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&q=80',
    history: 'Goa was a Portuguese colony for 450 years, leaving behind baroque churches, cobblestone lanes, and a unique Goan-Catholic-Hindu fusion culture alongside some of India\'s most beautiful beaches.',
    why: ['World-class beaches & water sports','Portuguese heritage churches (UNESCO)','Vibrant nightlife & beach shacks','Cashew feni and Goan seafood'],
    culture: [
      {icon:'⛪',label:'Basilica of Bom Jesus',desc:'UNESCO baroque church with St. Xavier'},
      {icon:'🏖️',label:'Calangute Beach',desc:'Goa\'s largest and most popular beach'},
      {icon:'🚢',label:'Dudhsagar Falls',desc:'Spectacular four-tiered waterfall'},
      {icon:'🛵',label:'Old Goa',desc:'Latin Quarter heritage streets'},
    ],
    quote: {text:'Goa is not a state of mind. It is a state of being.', author:'— Unknown'},
    bestMonth: 'Nov – Feb', language: 'Konkani / Portuguese / English', currency: 'INR',
    food: [
      {name:'Vinayak Family Restaurant',type:'restaurant',desc:'Authentic Goan fish curry rice',price:'₹₹',emoji:'🐟'},
      {name:'Britto\'s Beach Shack',type:'restaurant',desc:'Classic beach shack with fresh seafood',price:'₹₹',emoji:'🦐'},
      {name:'Cafe Tato',type:'cafe',desc:'Local breakfast spot for pao',price:'₹',emoji:'🥐'},
      {name:'Martin\'s Corner',type:'restaurant',desc:'Beloved Goan-Portuguese fusion',price:'₹₹₹',emoji:'🍷'},
    ],
    transport: {
      summary: 'Goa is best explored on a rented scooter. Taxis and app cabs are available too.',
      options: ['Scooter','Cab','Auto','Bus','Bicycle']
    }
  },
  paris: {
    name: 'Paris', country: 'France', flag: '🇫🇷',
    lat: 48.8566, lon: 2.3522,
    tagline: 'The City of Light & eternal romance',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80',
    history: 'Paris is the world\'s most visited city — a symphony of art, cuisine, fashion and architecture built over 2,000 years on the banks of the Seine.',
    why: ['Eiffel Tower & the Louvre','World\'s finest food and wine','Champs-Élysées & haute couture','Montmartre\'s bohemian charm'],
    culture: [
      {icon:'🗼',label:'Eiffel Tower',desc:'Iron lady sparkling every hour at night'},
      {icon:'🖼️',label:'The Louvre',desc:'World\'s largest art museum'},
      {icon:'⛪',label:'Notre-Dame',desc:'Gothic cathedral being restored'},
      {icon:'🎨',label:'Montmartre',desc:'Artists\' hilltop neighbourhood'},
    ],
    quote: {text:'Paris is always a good idea.', author:'— Audrey Hepburn'},
    bestMonth: 'Apr – Jun, Sep – Oct', language: 'French', currency: 'EUR',
    food: [
      {name:'Café de Flore',type:'cafe',desc:'Iconic Left Bank café since 1887',price:'€€',emoji:'☕'},
      {name:'L\'As du Fallafel',type:'street',desc:'Best falafel in the Marais',price:'€',emoji:'🧆'},
      {name:'Le Jules Verne',type:'restaurant',desc:'Michelin-starred dining in Eiffel Tower',price:'€€€€',emoji:'🍽️'},
      {name:'Bouillon Chartier',type:'restaurant',desc:'Classic French brasserie since 1896',price:'€€',emoji:'🥩'},
      {name:'Pierre Hermé',type:'cafe',desc:'World\'s finest macarons',price:'€€',emoji:'🍬'},
    ],
    transport: {
      summary: 'Paris has an excellent Métro, RER trains, Vélib\' bike-sharing, and river Bateaux.',
      options: ['Métro','Bus','RER','Vélib Bike','Taxi','Bateaux']
    }
  },
  tokyo: {
    name: 'Tokyo', country: 'Japan', flag: '🇯🇵',
    lat: 35.6762, lon: 139.6503,
    tagline: 'Neon dreams meet ancient tradition',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80',
    history: 'Tokyo is the world\'s largest metropolis — a seamless blend of ultramodern skyscrapers, cherry blossom parks, serene shrines, and the finest food culture on the planet.',
    why: ['Mount Fuji day trips','Shibuya Crossing & neon Akihabara','World-class sushi & ramen','Cherry blossom seasons (Sakura)'],
    culture: [
      {icon:'⛩️',label:'Senso-ji Temple',desc:'Ancient Buddhist temple in Asakusa'},
      {icon:'🌸',label:'Shinjuku Gyoen',desc:'National garden famous for cherry blossoms'},
      {icon:'🤖',label:'Akihabara',desc:'Electric Town of anime and tech'},
      {icon:'🏔️',label:'Mt Fuji',desc:'Japan\'s iconic sacred peak'},
    ],
    quote: {text:'Tokyo is a city that will make your head spin and your heart sing.', author:'— Anthony Bourdain'},
    bestMonth: 'Mar – May, Oct – Nov', language: 'Japanese', currency: 'JPY',
    food: [
      {name:'Tsukiji Outer Market',type:'street',desc:'Fresh sushi and seafood at dawn',price:'¥¥',emoji:'🍣'},
      {name:'Ichiran Ramen',type:'restaurant',desc:'Famous solo booth ramen experience',price:'¥¥',emoji:'🍜'},
      {name:'Café de l\'Ambre',type:'cafe',desc:'Legendary Ginza coffee since 1948',price:'¥¥',emoji:'☕'},
      {name:'Sukiyabashi Jiro',type:'restaurant',desc:'World\'s most famous sushi restaurant',price:'¥¥¥¥',emoji:'🍱'},
    ],
    transport: {
      summary: 'Tokyo has the world\'s most punctual train/subway network. Get a Suica card.',
      options: ['Subway','JR Train','Bus','Taxi','Bicycle','Shinkansen']
    }
  },
  bangkok: {
    name: 'Bangkok', country: 'Thailand', flag: '🇹🇭',
    lat: 13.7563, lon: 100.5018,
    tagline: 'City of angels, temples & street food',
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1200&q=80',
    history: 'Bangkok (Krung Thep) is Southeast Asia\'s most vibrant city — golden temples rising above bustling markets, while tuk-tuks weave through traffic alongside the Chao Phraya river.',
    why: ['Dazzling Grand Palace & temples','World\'s best street food','Rooftop bars with skyline views','Easy day trips to Ayutthaya'],
    culture: [
      {icon:'🏯',label:'Grand Palace',desc:'Dazzling royal complex & Emerald Buddha'},
      {icon:'⛩️',label:'Wat Arun',desc:'Temple of Dawn on the Chao Phraya'},
      {icon:'🌊',label:'Chao Phraya',desc:'The River of Kings boat tours'},
      {icon:'🎪',label:'Chatuchak Market',desc:'World\'s largest weekend market'},
    ],
    quote: {text:'Bangkok always leaves you wanting more.', author:'— Lonely Planet'},
    bestMonth: 'Nov – Feb', language: 'Thai', currency: 'THB',
    food: [
      {name:'Pad Thai Thip Samai',type:'street',desc:'Bangkok\'s most famous Pad Thai',price:'฿',emoji:'🍜'},
      {name:'Jay Fai',type:'restaurant',desc:'Michelin-starred street food chef',price:'฿฿฿',emoji:'🦀'},
      {name:'Café Amazon',type:'cafe',desc:'Thailand\'s beloved coffee chain',price:'฿',emoji:'☕'},
      {name:'Or Tor Kor Market',type:'street',desc:'Premium fresh produce market',price:'฿',emoji:'🥭'},
    ],
    transport: {
      summary: 'Bangkok has BTS Skytrain, MRT Metro, river ferries, tuk-tuks, and Grab app.',
      options: ['BTS Skytrain','MRT','River Ferry','Tuk-Tuk','Grab','Bus']
    }
  },
  dubai: {
    name: 'Dubai', country: 'UAE', flag: '🇦🇪',
    lat: 25.2048, lon: 55.2708,
    tagline: 'Where the future is already here',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80',
    history: 'Dubai transformed from a fishing village to a global supercity in just 50 years. It boasts the world\'s tallest building, largest malls, and most ambitious architectural feats.',
    why: ['Burj Khalifa & Dubai Frame','Desert safaris & dune bashing','Tax-free luxury shopping','Palm Jumeirah & world-class beaches'],
    culture: [
      {icon:'🏙️',label:'Burj Khalifa',desc:'World\'s tallest building at 828m'},
      {icon:'🏖️',label:'Palm Jumeirah',desc:'Man-made palm-shaped island'},
      {icon:'🕌',label:'Al Fahidi Fort',desc:'Dubai\'s oldest building & heritage area'},
      {icon:'🌅',label:'Dubai Creek',desc:'Historic trading waterway by abra boat'},
    ],
    quote: {text:'Dubai is a city that makes the impossible possible.', author:'— Sheikh Mohammed'},
    bestMonth: 'Nov – Mar', language: 'Arabic / English', currency: 'AED',
    food: [
      {name:'Al Ustad Special Kabab',type:'restaurant',desc:'Famous Iranian-style kababs since 1978',price:'AED',emoji:'🍢'},
      {name:'Ravi Restaurant',type:'restaurant',desc:'Legendary cheap Pakistani food',price:'AED',emoji:'🍛'},
      {name:'Comptoir 102',type:'cafe',desc:'Organic concept café in Jumeirah',price:'AED AED',emoji:'🥗'},
      {name:'Gold on 27',type:'restaurant',desc:'Luxury dining with 24K gold dishes',price:'AED AED AED',emoji:'✨'},
    ],
    transport: {
      summary: 'Dubai Metro is modern and affordable. Taxis, Careem/Uber, and water taxis available.',
      options: ['Metro','Taxi','Careem','Water Taxi','Tram','Bus']
    }
  },
  udaipur: {
    name: 'Udaipur', country: 'India', flag: '🇮🇳',
    lat: 24.5854, lon: 73.7125,
    tagline: 'The City of Lakes — Rajasthan\'s crown jewel',
    image: 'https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=1200&q=80',
    history: 'Udaipur, the "Venice of the East," was founded in 1559 by Maharana Udai Singh II. Surrounded by the Aravalli Hills and shimmering lakes, it is Rajasthan\'s most romantic and regal city, famed for its white marble palaces that seem to float on water.',
    why: ['City Palace rising over Lake Pichola','Boat ride to the legendary Lake Palace Hotel','Vibrant bazaars with miniature paintings & silver jewellery','Sunset views from Sajjangarh Monsoon Palace'],
    culture: [
      {icon:'🏯',label:'City Palace',desc:'Rajasthan\'s largest palace complex on Lake Pichola'},
      {icon:'🛶',label:'Lake Pichola',desc:'Boat rides to Jag Mandir & the floating palace'},
      {icon:'🎨',label:'Shilpgram',desc:'Rural arts & crafts village festival complex'},
      {icon:'🌅',label:'Sajjangarh',desc:'Monsoon Palace perched on a hilltop at dusk'},
    ],
    quote: {text:'If there\'s a heaven on earth, it\'s Udaipur.', author:'— Ruskin Bond'},
    bestMonth: 'Oct – Mar', language: 'Hindi / Rajasthani', currency: 'INR',
    food: [
      {name:'Ambrai Restaurant',type:'restaurant',desc:'Lakeside dining with City Palace views',price:'₹₹₹',emoji:'🌊'},
      {name:'Millets of Mewar',type:'cafe',desc:'Organic café promoting heritage Rajasthani grains',price:'₹₹',emoji:'🌿'},
      {name:'Jheel\'s Ginger Coffee',type:'cafe',desc:'Rooftop café beloved by travellers',price:'₹',emoji:'☕'},
      {name:'Banjara Restro',type:'restaurant',desc:'Rooftop with folk music & Rajasthani thali',price:'₹₹',emoji:'🎶'},
      {name:'Natraj Dining Hall',type:'street',desc:'Local favourite for dal bati churma',price:'₹',emoji:'🍛'},
    ],
    transport: {
      summary: 'Udaipur is best explored by auto-rickshaws, e-rickshaws, and rental cycles. Boats on the lakes are the most scenic option.',
      options: ['Auto','E-Rickshaw','Bicycle','Boat','Cab']
    }
  },
  rishikesh: {
    name: 'Rishikesh', country: 'India', flag: '🇮🇳',
    lat: 30.0869, lon: 78.2676,
    tagline: 'Yoga capital of the world on the sacred Ganga',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    history: 'Rishikesh, where the Ganges descends from the Himalayas to the plains, is the world\'s yoga and meditation capital. It became globally famous after The Beatles visited in 1968. Nestled between forested hills and the emerald Ganga, it blends spirituality with adventure sports.',
    why: ['White-water rafting on the Ganges','Evening Ganga Aarti at Triveni Ghat','Lakshman Jhula & Ram Jhula suspension bridges','Yoga & meditation retreats in ashrams'],
    culture: [
      {icon:'🕉️',label:'Triveni Ghat',desc:'Sacred evening Ganga Aarti ceremony'},
      {icon:'🌉',label:'Lakshman Jhula',desc:'Iconic iron suspension bridge over the Ganga'},
      {icon:'🧘',label:'Parmarth Niketan',desc:'India\'s largest ashram on the riverbank'},
      {icon:'🏔️',label:'Neelkanth Mahadev',desc:'Himalayan Shiva temple at 1,330m altitude'},
    ],
    quote: {text:'Rishikesh is not just a place; it is an experience that transforms the soul.', author:'— Unknown'},
    bestMonth: 'Feb – May, Sep – Nov', language: 'Hindi / Garhwali', currency: 'INR',
    food: [
      {name:'Chotiwala Restaurant',type:'restaurant',desc:'Iconic Rishikesh institution since 1958',price:'₹',emoji:'🍛'},
      {name:'Little Buddha Café',type:'cafe',desc:'Rooftop river-view café — Israeli & Indian menu',price:'₹₹',emoji:'☕'},
      {name:'Madras Café',type:'restaurant',desc:'South Indian tiffin — famous dosas & idlis',price:'₹',emoji:'🥞'},
      {name:'60s Restaurant',type:'cafe',desc:'Beatles-themed nostalgic café',price:'₹₹',emoji:'🎸'},
      {name:'Ganga Beach Stalls',type:'street',desc:'Chai, pakoras & aloo puri by the riverside',price:'₹',emoji:'🔥'},
    ],
    transport: {
      summary: 'Rishikesh is walkable between ghats. Shared autos, e-bikes, and taxis connect to Haridwar and beyond.',
      options: ['Walk','Auto','E-Bike','Taxi','Bus']
    }
  },
  manali: {
    name: 'Manali', country: 'India', flag: '🇮🇳',
    lat: 32.2396, lon: 77.1887,
    tagline: 'Gateway to the Himalayas & adventure',
    image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=1200&q=80',
    history: 'Manali sits at 2,050m in the Beas River Valley of Himachal Pradesh, surrounded by snow-capped peaks and deodar forests. A major hub for trekkers and bikers heading to Leh-Ladakh, it is also a cultural crossroads of Himachali, Tibetan, and Kinnauri traditions.',
    why: ['Rohtang Pass & Solang Valley snowfields','Thrilling paragliding, skiing & zip-lining','Hadimba Devi Temple in cedar forest','Biking the world\'s highest road to Leh'],
    culture: [
      {icon:'⛪',label:'Hadimba Devi Temple',desc:'16th-century pagoda temple in ancient forest'},
      {icon:'🏔️',label:'Rohtang Pass',desc:'High mountain pass at 3,978m with snow year-round'},
      {icon:'🧘',label:'Vashisht Village',desc:'Ancient hot springs and sacred temples'},
      {icon:'🏘️',label:'Old Manali',desc:'Bohemian village with cafés & traveller culture'},
    ],
    quote: {text:'The mountains are calling, and I must go.', author:'— John Muir'},
    bestMonth: 'Mar – Jun (summer), Dec – Feb (snow)', language: 'Hindi / Himachali', currency: 'INR',
    food: [
      {name:'Johnson\'s Café',type:'cafe',desc:'Pioneer of Manali\'s café culture since 1985',price:'₹₹',emoji:'☕'},
      {name:'Drifter\'s Inn',type:'restaurant',desc:'Israeli & continental backpacker favourite',price:'₹₹',emoji:'🥙'},
      {name:'Lazy Dog Lounge',type:'cafe',desc:'Rooftop mountain views with wood-fired pizza',price:'₹₹',emoji:'🍕'},
      {name:'Chopsticks',type:'restaurant',desc:'Popular Chinese, Thai & Tibetan restaurant',price:'₹₹',emoji:'🥢'},
      {name:'Momos Stalls',type:'street',desc:'Steaming Tibetan momos at Old Manali market',price:'₹',emoji:'🥟'},
    ],
    transport: {
      summary: 'Within Manali, walk or take taxis. HRTC buses and shared cabs connect to Leh, Shimla, and Chandigarh.',
      options: ['Walk','Taxi','Bike Rental','HRTC Bus','Shared Cab']
    }
  },
  ladakh: {
    name: 'Ladakh', country: 'India', flag: '🇮🇳',
    lat: 34.1526, lon: 77.5771,
    tagline: 'The Last Shangri-La — land of high passes',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1200&q=80',
    history: 'Ladakh, perched between 2,750m and 7,672m in the Trans-Himalayan region, is one of the world\'s most remote and spectacularly beautiful landscapes. Its Tibetan Buddhist culture — ancient monasteries, prayer flags, and whitewashed stupas — contrasts with stark, otherworldly desert terrain.',
    why: ['Pangong Tso Lake — the 3 Idiots lake','Ancient monasteries at Hemis & Thiksey','World\'s highest motorable roads','Midnight sky stargazing at Nubra Valley'],
    culture: [
      {icon:'🏔️',label:'Pangong Tso',desc:'High-altitude lake straddling India & China'},
      {icon:'🛕',label:'Hemis Monastery',desc:'Ladakh\'s richest Buddhist monastery'},
      {icon:'🌄',label:'Nubra Valley',desc:'Bactrian camels in a high-altitude desert'},
      {icon:'🏁',label:'Khardung La',desc:'World\'s highest motorable pass at 5,359m'},
    ],
    quote: {text:'Ladakh is not just a destination — it is a pilgrimage for the restless soul.', author:'— Unknown'},
    bestMonth: 'Jun – Sep', language: 'Ladakhi / Hindi / Tibetan', currency: 'INR',
    food: [
      {name:'Gesmo Restaurant',type:'restaurant',desc:'Leh\'s most beloved bakery & thukpa spot',price:'₹',emoji:'🍲'},
      {name:'The Tibetan Kitchen',type:'restaurant',desc:'Authentic Tibetan thenthuk & momos',price:'₹₹',emoji:'🥢'},
      {name:'Bon Appetit',type:'cafe',desc:'Solar-powered garden café in Leh',price:'₹₹',emoji:'☀️'},
      {name:'Penguin Garden',type:'cafe',desc:'Rooftop café with Stok Kangri views',price:'₹₹',emoji:'☕'},
      {name:'Local Chang Stalls',type:'street',desc:'Traditional Ladakhi barley beer by the roadside',price:'₹',emoji:'🍺'},
    ],
    transport: {
      summary: 'Fly or drive (Manali-Leh Highway) to reach Ladakh. Within the region, hire local taxis or rent a Royal Enfield for epic road trips.',
      options: ['Local Taxi','Royal Enfield','Shared Jeep','Trekking','Flight (Leh Airport)']
    }
  },
  kerala: {
    name: 'Kerala', country: 'India', flag: '🇮🇳',
    lat: 10.8505, lon: 76.2711,
    tagline: 'God\'s Own Country — backwaters, spice & serenity',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80',
    history: 'Kerala, on India\'s lush southwestern coast, is a land of emerald backwaters, misty tea gardens, ancient spice routes, and Kathakali dance. Its unique geography — sandwiched between the Western Ghats and the Arabian Sea — created one of India\'s most distinct and biodiverse cultures.',
    why: ['Houseboat cruise through Alleppey backwaters','Munnar tea estates & misty hill stations','Ayurvedic spa treatments & retreats','Kathakali performances & snake boat races'],
    culture: [
      {icon:'🛶',label:'Alleppey Backwaters',desc:'Houseboat cruise through palm-lined canals'},
      {icon:'🍃',label:'Munnar Tea Gardens',desc:'Rolling hills carpeted in emerald tea estates'},
      {icon:'💆',label:'Ayurveda Centres',desc:'Ancient healing through Kerala\'s herbal traditions'},
      {icon:'🎭',label:'Kathakali',desc:'Spectacular classical dance-drama with vivid makeup'},
    ],
    quote: {text:'Kerala is not just a destination — it\'s a state of mind, a state of grace.', author:'— Unknown'},
    bestMonth: 'Oct – Feb', language: 'Malayalam / English', currency: 'INR',
    food: [
      {name:'Paragon Restaurant',type:'restaurant',desc:'Kozhikode\'s legendary biryani since 1939',price:'₹₹',emoji:'🍚'},
      {name:'Malabar Junction',type:'restaurant',desc:'Heritage hotel fine dining with Kerala specialties',price:'₹₹₹',emoji:'🌴'},
      {name:'Sri Krishna Inn',type:'restaurant',desc:'Classic Kerala sadhya on banana leaf',price:'₹',emoji:'🍌'},
      {name:'Dhe Puttu',type:'street',desc:'Famous puttu & kadala curry street stall',price:'₹',emoji:'🫙'},
      {name:'Fusion Bay',type:'cafe',desc:'Modern café with Kerala-fusion cocktails',price:'₹₹',emoji:'🥥'},
    ],
    transport: {
      summary: 'Houseboats on the backwaters, KSRTC buses between cities, auto-rickshaws locally, and boats for coastal routes.',
      options: ['Houseboat','Auto','KSRTC Bus','Boat','Train','Cab']
    }
  },
  switzerland: {
    name: 'Switzerland', country: 'Switzerland', flag: '🇨🇭',
    lat: 46.8182, lon: 8.2275,
    tagline: 'Alpine paradise — peaks, chocolate & precision',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    history: 'Switzerland is a federation of 26 cantons nestled in the heart of Europe, renowned for the Swiss Alps, pristine lakes, world-class ski resorts, luxury watchmaking, and some of the finest chocolates and cheeses on earth. Cities like Zurich, Geneva, and Lucerne blend medieval charm with modern sophistication.',
    why: ['Jungfraujoch — Top of Europe at 3,454m','Scenic Glacier Express train journey','Swiss chocolate & cheese factory tours','Zurich & Geneva\'s lakeside elegance'],
    culture: [
      {icon:'🏔️',label:'Jungfraujoch',desc:'Europe\'s highest railway station at 3,454m'},
      {icon:'🚂',label:'Glacier Express',desc:'Scenic slow train through the Swiss Alps'},
      {icon:'⛷️',label:'Verbier / Zermatt',desc:'World-class ski resorts beneath the Matterhorn'},
      {icon:'🏰',label:'Chillon Castle',desc:'Medieval island castle on Lake Geneva'},
    ],
    quote: {text:'Switzerland is simply a large, lumpy, solid rock, with a thin skin of grass stretched over it.', author:'— Mark Twain'},
    bestMonth: 'Jun – Sep (summer), Dec – Mar (ski)', language: 'German / French / Italian', currency: 'CHF',
    food: [
      {name:'Raclette & Fondue Stübli',type:'restaurant',desc:'Authentic Swiss cheese fondue in a mountain chalet',price:'CHF CHF',emoji:'🧀'},
      {name:'Sprüngli Confiserie',type:'cafe',desc:'Zurich\'s most famous chocolate & coffee house',price:'CHF CHF',emoji:'🍫'},
      {name:'Wirtschaft Zum Frieden',type:'restaurant',desc:'Historic Zurich restaurant — Zürcher Geschnetzeltes',price:'CHF CHF CHF',emoji:'🥩'},
      {name:'Lausanne Street Markets',type:'street',desc:'Alpine street food — rösti, bratwurst & pretzels',price:'CHF',emoji:'🥨'},
    ],
    transport: {
      summary: 'Switzerland has one of Europe\'s finest rail networks. Swiss Travel Pass gives unlimited access to trains, buses, boats, and mountain railways.',
      options: ['Swiss Rail','Cogwheel Train','Lake Boat','Bus','Cable Car','Bicycle']
    }
  },
  rome: {
    name: 'Rome', country: 'Italy', flag: '🇮🇹',
    lat: 41.9028, lon: 12.4964,
    tagline: 'The Eternal City — where every stone tells a story',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&q=80',
    history: 'Rome, founded in 753 BC, is a living museum of 28 centuries of history. From the Colosseum to the Vatican, from ancient Roman forums to Renaissance fountains and Baroque piazzas, it is arguably the world\'s most historically rich city — and its food scene rivals any on Earth.',
    why: ['The Colosseum & Roman Forum','Vatican Museums & Sistine Chapel','Toss a coin in the Trevi Fountain','Aperitivo hour in Trastevere'],
    culture: [
      {icon:'🏛️',label:'The Colosseum',desc:'Iconic 2,000-year-old amphitheatre of the gladiators'},
      {icon:'⛪',label:'St. Peter\'s Basilica',desc:'World\'s largest church at the heart of Vatican City'},
      {icon:'⛲',label:'Trevi Fountain',desc:'Baroque masterpiece — toss a coin for good luck'},
      {icon:'🎨',label:'Sistine Chapel',desc:'Michelangelo\'s ceiling — one of humanity\'s greatest artworks'},
    ],
    quote: {text:'Rome is the city of echoes, the city of illusions, and the city of yearning.', author:'— Giotto di Bondone'},
    bestMonth: 'Apr – Jun, Sep – Oct', language: 'Italian', currency: 'EUR',
    food: [
      {name:'Da Enzo al 29',type:'restaurant',desc:'Classic Roman trattoria in Trastevere — cacio e pepe',price:'€€',emoji:'🍝'},
      {name:'Suppli Roma',type:'street',desc:'Famous Roman street food — crispy rice suppli balls',price:'€',emoji:'🍡'},
      {name:'Sant\'Eustachio il Caffè',type:'cafe',desc:'Rome\'s most beloved espresso since 1938',price:'€',emoji:'☕'},
      {name:'Roscioli',type:'restaurant',desc:'Legendary deli-restaurant — carbonara & salumi',price:'€€€',emoji:'🥩'},
      {name:'Fatamorgana',type:'cafe',desc:'Artisan gelato with unusual exotic flavours',price:'€',emoji:'🍦'},
    ],
    transport: {
      summary: 'Rome\'s historic centre is best explored on foot. Metro (Line A & B), buses, and trams cover the wider city.',
      options: ['Walk','Metro','Bus','Tram','Taxi','Scooter']
    }
  },
  hawaii: {
    name: 'Hawaii', country: 'USA', flag: '🇺🇸',
    lat: 20.7984, lon: -156.3319,
    tagline: 'Aloha spirit — volcanoes, waves & paradise beaches',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
    history: 'Hawaii, the 50th US state and the world\'s most isolated archipelago, consists of 8 main islands formed by volcanic activity over millions of years. Native Hawaiian culture — hula, surfing, and aloha spirit — blends with Asian and American influences to create a unique Pacific paradise.',
    why: ['Active lava flows at Hawaii Volcanoes National Park','Legendary surfing on Oahu\'s North Shore','Road to Hana — waterfall-studded coastal highway','Whale watching off Maui (Dec–May)'],
    culture: [
      {icon:'🌋',label:'Kilauea Volcano',desc:'One of the world\'s most active volcanoes'},
      {icon:'🏄',label:'North Shore Oahu',desc:'Home of big-wave surfing legend — Pipeline'},
      {icon:'🌺',label:'Polynesian Cultural Center',desc:'Living museum of Pacific island cultures'},
      {icon:'🐋',label:'Maui Whale Watching',desc:'Humpback whales from Dec to May'},
    ],
    quote: {text:'Hawaii is not a state of mind, but a state of grace.', author:'— Paul Theroux'},
    bestMonth: 'Apr – May, Sep – Nov', language: 'English / Hawaiian', currency: 'USD',
    food: [
      {name:'Plate Lunch Wagons',type:'street',desc:'Classic Hawaiian plate lunch — rice, mac salad & kalua pork',price:'$',emoji:'🍱'},
      {name:'Leonard\'s Bakery',type:'street',desc:'Iconic Honolulu malasadas (Portuguese doughnuts)',price:'$',emoji:'🍩'},
      {name:'Mama\'s Fish House',type:'restaurant',desc:'Legendary Maui seafood — fresh catch daily',price:'$$$$',emoji:'🐟'},
      {name:'Rainbow Drive-In',type:'street',desc:'Honolulu institution since 1961 — loco moco',price:'$',emoji:'🍳'},
      {name:'Island Brew Coffee',type:'cafe',desc:'Kona coffee from the slopes of Mauna Loa',price:'$$',emoji:'☕'},
    ],
    transport: {
      summary: 'Inter-island travel by Hawaiian Airlines is common. On each island, rental cars are the primary transport — public buses are limited.',
      options: ['Rental Car','Inter-island Flight','Bus','Bicycle','Uber/Lyft','Boat Tours']
    }
  },
  alaska: {
    name: 'Alaska', country: 'USA', flag: '🇺🇸',
    lat: 64.2008, lon: -153.4937,
    tagline: 'The Last Frontier — wild, vast & breathtaking',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&q=80',
    history: 'Alaska, the largest US state (twice the size of Texas), is North America\'s greatest wilderness — a land of glaciers, grizzly bears, bald eagles, the Northern Lights, and towering Denali (6,190m), the continent\'s highest peak. It was purchased from Russia in 1867 and retains the spirit of the final frontier.',
    why: ['Northern Lights (Aurora Borealis) in winter','Denali National Park & Mount McKinley','Glacier calving at Kenai Fjords','Brown bear watching at Katmai National Park'],
    culture: [
      {icon:'🌌',label:'Northern Lights',desc:'Aurora Borealis visible Sep–Mar in Fairbanks'},
      {icon:'🏔️',label:'Denali',desc:'North America\'s highest peak at 6,190m'},
      {icon:'🐻',label:'Katmai National Park',desc:'Brown bears catching sockeye salmon at Brooks Falls'},
      {icon:'🧊',label:'Kenai Fjords',desc:'Tidewater glaciers calving into the sea'},
    ],
    quote: {text:'Alaska itself is an experience. You have to be somewhat of an adventurer to be here.', author:'— Michio Hoshino'},
    bestMonth: 'Jun – Aug (summer), Dec – Feb (Northern Lights)', language: 'English / Yupik / Inupiaq', currency: 'USD',
    food: [
      {name:'Glacier Brewhouse',type:'restaurant',desc:'Anchorage institution — king crab & craft beers',price:'$$$',emoji:'🦀'},
      {name:'Moose\'s Tooth Pub',type:'restaurant',desc:'Anchorage\'s beloved pizza & brewery',price:'$$',emoji:'🍕'},
      {name:'Salmon Bake at Denali',type:'restaurant',desc:'Iconic outdoor salmon bake in the wilderness',price:'$$',emoji:'🐟'},
      {name:'The Pump House',type:'restaurant',desc:'Historic Fairbanks restaurant in a converted pump station',price:'$$$',emoji:'🏚️'},
      {name:'Camp Cookouts',type:'street',desc:'Fireside sourdough pancakes & reindeer sausage',price:'$',emoji:'🔥'},
    ],
    transport: {
      summary: 'Alaska is vast — small planes (bush planes) are the primary transport between remote areas. In cities, rental cars and taxis. The Alaska Railroad connects Anchorage to Fairbanks.',
      options: ['Bush Plane','Rental Car','Alaska Railroad','Ferry (Marine Highway)','Dogsled','Snowmobile']
    }
  },
  amritsar: {
    name: 'Amritsar', country: 'India', flag: '🇮🇳',
    lat: 31.6340, lon: 74.8723,
    tagline: 'The soul of Punjab — faith, food & freedom',
    image: 'images/amritsar.png',
    history: 'Amritsar, founded in 1577 by Guru Ram Das, is the spiritual capital of Sikhism and home to the magnificent Golden Temple (Harmandir Sahib). The city carries a complex history — from the Jallianwala Bagh massacre of 1919 to the Wagah Border ceremony — and is celebrated for the warmest Punjabi hospitality and arguably India\'s most iconic street food.',
    why: ['Golden Temple — the most visited place in India','Wagah Border Beating Retreat ceremony at sunset','Jallianwala Bagh — a solemn memorial of history','Amritsar\'s legendary kulcha, lassi & langar food'],
    culture: [
      {icon:'🛕', label:'Golden Temple', desc:'Harmandir Sahib — 24/7 open to all, serene and stunning'},
      {icon:'🏛️', label:'Jallianwala Bagh', desc:'Garden memorial of the 1919 British massacre'},
      {icon:'🚩', label:'Wagah Border', desc:'Daily military Beating Retreat ceremony at India-Pakistan border'},
      {icon:'🏰', label:'Gobindgarh Fort', desc:'18th-century fort housing a rich cultural experience'},
    ],
    quote: {text:'The Golden Temple is not just a place of worship — it is a place of peace for all humanity.', author:'— Unknown'},
    bestMonth: 'Oct – Mar', language: 'Punjabi / Hindi', currency: 'INR',
    food: [
      {name:'Kesar Da Dhaba', type:'restaurant', desc:'Amritsar\'s most legendary dal makhani since 1916', price:'₹', emoji:'🍲'},
      {name:'Bharawan Da Dhaba', type:'restaurant', desc:'Iconic Punjabi thali and stuffed kulchas since 1912', price:'₹', emoji:'🫓'},
      {name:'Golden Temple Langar', type:'street', desc:'Free community meal served 24/7 to 100,000 people daily', price:'Free', emoji:'🙏'},
      {name:'Gurdas Ram Jalebi', type:'street', desc:'Legendary hot jalebis made since the 1880s', price:'₹', emoji:'🍩'},
      {name:'Bros Dhaba', type:'cafe', desc:'Amritsar\'s famous lassi spot near Hall Bazaar', price:'₹', emoji:'🥛'},
    ],
    transport: {
      summary: 'Amritsar is compact. Auto-rickshaws and cycle-rickshaws cover the heritage area. E-rickshaws are eco-friendly and abundant near the Golden Temple.',
      options: ['Auto', 'Cycle Rickshaw', 'E-Rickshaw', 'Cab', 'Walk']
    }
  },
  ludhiana: {
    name: 'Ludhiana', country: 'India', flag: '🇮🇳',
    lat: 30.9010, lon: 75.8573,
    tagline: 'Punjab\'s industrial heart with a golden cultural soul',
    image: 'images/ludhiana.png',
    history: 'Ludhiana, Punjab\'s largest city, is India\'s hosiery and bicycle manufacturing capital, earning it the nickname "Manchester of India." Situated on the Sutlej River, it is a booming commercial hub with a vibrant food scene, rich Punjabi folk culture, and proximity to historical battlefields.',
    why: ['Largest city in Punjab — vibrant Punjabi culture','Punjab Agricultural University — stunning campus','Nehru Rose Garden — North India\'s largest rose garden','Authentic Punjabi cuisine and street food'],
    culture: [
      {icon:'🌹', label:'Nehru Rose Garden', desc:'North India\'s largest rose garden with 17,000+ varieties'},
      {icon:'🏛️', label:'Punjab Agricultural University', desc:'One of Asia\'s best agricultural universities — sprawling green campus'},
      {icon:'🎭', label:'Guru Nanak Bhawan', desc:'Cultural complex with Punjabi art and heritage exhibitions'},
      {icon:'⚔️', label:'Lodhi Fort (Phillaur)', desc:'19th-century fort near the Sutlej — day trip from the city'},
    ],
    quote: {text:'Ludhiana is the engine that drives Punjab forward.', author:'— Unknown'},
    bestMonth: 'Oct – Mar', language: 'Punjabi / Hindi', currency: 'INR',
    food: [
      {name:'Honest Restaurant', type:'restaurant', desc:'Ludhiana institution — legendary Punjabi thali and kadhi', price:'₹', emoji:'🍛'},
      {name:'Amritsari Kulcha Corner', type:'street', desc:'Crispy stuffed kulchas with chole and white butter', price:'₹', emoji:'🫓'},
      {name:'Galaxy Hotel Restaurant', type:'restaurant', desc:'Classic Punjabi butter chicken and dal makhani', price:'₹₹', emoji:'🍗'},
      {name:'Giani\'s Di Hatti', type:'street', desc:'Famous lassi and falooda since decades — thick and creamy', price:'₹', emoji:'🥛'},
      {name:'Civil Lines Street Stalls', type:'street', desc:'Aloo tikki chaat, papdi chaat, and kulfi', price:'₹', emoji:'🥙'},
    ],
    transport: {
      summary: 'Ludhiana is well-connected by local auto-rickshaws, city buses, and app cabs. The railway station connects to Delhi, Amritsar, and Chandigarh.',
      options: ['Auto', 'Bus', 'Cab', 'Cycle Rickshaw', 'Train']
    }
  },
  jalandhar: {
    name: 'Jalandhar', country: 'India', flag: '🇮🇳',
    lat: 31.3260, lon: 75.5762,
    tagline: 'Ancient city of sports, shrines & Punjabi spirit',
    image: 'images/jalandhar.png',
    history: 'Jalandhar is one of Punjab\'s oldest cities — mentioned in the ancient Mahabharata as the kingdom of Jalandhara. Today it is India\'s sports goods manufacturing capital (producing 70% of the country\'s sporting equipment), has a significant NRI diaspora, and is home to important Sikh and Devi shrines.',
    why: ['Devi Talab Mandir — ancient temple with sacred tank','Sports goods market — best prices on cricket, hockey & football','Wonderland Theme Park — great family destination','Proximity to Kartarpur Corridor (Guru Nanak\'s final home)'],
    culture: [
      {icon:'🛕', label:'Devi Talab Mandir', desc:'Ancient temple with a sacred tank — a major pilgrimage site'},
      {icon:'🏑', label:'Sports Goods Market', desc:'Jalandhar makes 70% of India\'s sports equipment — buy direct'},
      {icon:'🕌', label:'Imam Nasir Mosque', desc:'Historic mosque from Mughal era in the old city'},
      {icon:'🌿', label:'Company Bagh', desc:'Historic 19th-century garden — peaceful retreat in the city centre'},
    ],
    quote: {text:'Jalandhar is where Punjab\'s ancient roots meet its modern ambition.', author:'— Unknown'},
    bestMonth: 'Oct – Mar', language: 'Punjabi / Hindi', currency: 'INR',
    food: [
      {name:'Bhola Dhaba', type:'restaurant', desc:'Legendary Jalandhar dhaba — saag, makki di roti & lassi', price:'₹', emoji:'🌽'},
      {name:'Novelty Sweets', type:'street', desc:'Famous for pinni, barfi, and Punjabi mithai since 1945', price:'₹', emoji:'🍬'},
      {name:'Bade Bhaiya Da Dhaba', type:'street', desc:'Street-side Punjabi comfort food — rajma chawal & kadhi', price:'₹', emoji:'🍲'},
      {name:'G.T. Road Dhabas', type:'street', desc:'Classic highway dhabas with tandoori chicken & parathas', price:'₹', emoji:'🔥'},
      {name:'Café Regal', type:'cafe', desc:'Jalandhar\'s popular café for snacks and coffee', price:'₹₹', emoji:'☕'},
    ],
    transport: {
      summary: 'Jalandhar has good connectivity via NH-44. Auto-rickshaws and city buses are the main local transport. The railway junction connects to all major Punjab cities.',
      options: ['Auto', 'Bus', 'Cab', 'Train', 'Cycle Rickshaw']
    }
  },
  agra: {
    name: 'Agra', country: 'India', flag: '🇮🇳',
    lat: 27.1767, lon: 78.0081,
    tagline: 'Home of the Taj Mahal — love immortalised in marble',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&q=80',
    history: 'Agra was the capital of the Mughal Empire under Akbar, Jahangir and Shah Jahan. The city is home to three UNESCO World Heritage Sites — the Taj Mahal, Agra Fort, and Fatehpur Sikri — making it one of the most historically significant cities in all of Asia. The Taj Mahal, completed in 1653, is considered the world\'s greatest monument to love.',
    why: ['Taj Mahal — one of the 7 Wonders of the World','Agra Fort — the Mughal Red Fort on the Yamuna','Fatehpur Sikri — abandoned Mughal ghost city','Agra Petha & Mughal cuisine — world-class street food'],
    culture: [
      {icon:'🏛️', label:'Taj Mahal', desc:'Shah Jahan\'s marble monument to eternal love — a UNESCO wonder'},
      {icon:'🏰', label:'Agra Fort', desc:'Massive Mughal Red Fort — UNESCO World Heritage Site'},
      {icon:'🕌', label:'Fatehpur Sikri', desc:'Abandoned Mughal capital — ghost city frozen in 1585'},
      {icon:'🕌', label:'Itmad-ud-Daulah', desc:'The Baby Taj — an exquisite proto-Taj Mahal across the Yamuna'},
    ],
    quote: {text:'The Taj Mahal rises above the banks of the river like a solitary tear on the cheek of time.', author:'— Rabindranath Tagore'},
    bestMonth: 'Oct – Mar', language: 'Hindi / Braj Bhasha', currency: 'INR',
    food: [
      {name:'Pinch of Spice', type:'restaurant', desc:'Agra\'s most celebrated restaurant — Mughlai & North Indian', price:'₹₹₹', emoji:'🍛'},
      {name:'Mama Chicken', type:'street', desc:'Famous street stall for tandoori chicken near Sadar Bazaar', price:'₹', emoji:'🍗'},
      {name:'Shankara Vegis', type:'restaurant', desc:'Best dal makhani and stuffed paratha near the Taj', price:'₹', emoji:'🫓'},
      {name:'Paliwal Restaurant', type:'restaurant', desc:'Iconic Agra institution — petha, chaats & Mughlai curries', price:'₹₹', emoji:'🍬'},
      {name:'Cafe Sheroes Hangout', type:'cafe', desc:'Acid attack survivors\' café — inspiring story, great coffee', price:'₹₹', emoji:'☕'},
    ],
    transport: {
      summary: 'Agra is best explored by pre-paid autos and cycle-rickshaws near the Taj. Tuk-tuks and cabs cover longer routes. Well connected by train from Delhi (2 hrs on Gatimaan Express).',
      options: ['Auto', 'Cycle Rickshaw', 'Cab', 'E-Rickshaw', 'Train']
    }
  }
};

function getCity(key) {
  return CITIES[key.toLowerCase()] || null;
}

function searchCities(query) {
  const q = query.toLowerCase();
  return Object.entries(CITIES)
    .filter(([key, city]) =>
      city.name.toLowerCase().includes(q) ||
      key.includes(q) ||
      city.country.toLowerCase().includes(q)
    )
    .map(([key, city]) => ({ key, ...city }));
}
