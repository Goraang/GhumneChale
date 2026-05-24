const ITINERARY_DB = {
  delhi: {
    days: [
      {
        theme: 'Old Delhi & Mughal Grandeur',
        color: '#E8673A',
        stops: [
          {time:'8:00 AM', place:'Jama Masjid', emoji:'🕌', desc:'India\'s largest mosque at sunrise — peaceful and awe-inspiring', lat:28.6507, lon:77.2334, type:'monument'},
          {time:'9:30 AM', place:'Chandni Chowk', emoji:'🛍️', desc:'Navigate the spice-scented chaos of Old Delhi\'s historic bazaar', lat:28.6556, lon:77.2300, type:'market'},
          {time:'11:00 AM', place:'Red Fort', emoji:'🏰', desc:'Mughal masterpiece and India\'s most iconic fort — UNESCO listed', lat:28.6562, lon:77.2410, type:'monument'},
          {time:'1:00 PM', place:'Paranthe Wali Gali', emoji:'🫓', desc:'Legendary stuffed paratha lane — lunch royale', lat:28.6552, lon:77.2296, type:'food'},
          {time:'3:00 PM', place:'Humayun\'s Tomb', emoji:'🏛️', desc:'The architectural precursor to the Taj Mahal', lat:28.5933, lon:77.2507, type:'monument'},
          {time:'6:30 PM', place:'India Gate', emoji:'🔥', desc:'War memorial at sunset — evening stroll and kulfi', lat:28.6129, lon:77.2295, type:'landmark'},
        ]
      },
      {
        theme: 'New Delhi & Cultural Gems',
        color: '#8B5CF6',
        stops: [
          {time:'9:00 AM', place:'Qutub Minar', emoji:'🗼', desc:'World\'s tallest brick minaret — 12th century marvel', lat:28.5245, lon:77.1855, type:'monument'},
          {time:'11:00 AM', place:'Dilli Haat', emoji:'🎨', desc:'Open-air crafts market representing all Indian states', lat:28.5732, lon:77.2064, type:'market'},
          {time:'1:00 PM', place:'Lodi Garden', emoji:'🌳', desc:'Mughal-era tombs set in beautifully landscaped gardens', lat:28.5929, lon:77.2197, type:'nature'},
          {time:'3:30 PM', place:'National Museum', emoji:'🏺', desc:'5,000 years of India\'s art, culture, and history', lat:28.6115, lon:77.2195, type:'culture'},
          {time:'6:00 PM', place:'Connaught Place', emoji:'🌟', desc:'Colonial heart of Delhi — food, shopping, cafes', lat:28.6328, lon:77.2197, type:'landmark'},
        ]
      }
    ]
  },
  jaipur: {
    days: [
      {
        theme: 'Forts & Palaces',
        color: '#F59E0B',
        stops: [
          {time:'7:00 AM', place:'Amber Fort', emoji:'🏯', desc:'Majestic hilltop fort — arrive early to beat the heat', lat:26.9855, lon:75.8513, type:'monument'},
          {time:'10:00 AM', place:'Jaigarh Fort', emoji:'⚔️', desc:'Connects to Amber Fort — home to the world\'s largest cannon on wheels', lat:26.9924, lon:75.8442, type:'monument'},
          {time:'1:00 PM', place:'Masala Chowk', emoji:'🍽️', desc:'Heritage food court lunch under the open sky', lat:26.9187, lon:75.8147, type:'food'},
          {time:'3:00 PM', place:'City Palace', emoji:'🏛️', desc:'Royal residence turned museum — exquisite Rajput architecture', lat:26.9258, lon:75.8237, type:'monument'},
          {time:'5:00 PM', place:'Hawa Mahal', emoji:'🏛️', desc:'The iconic Palace of Winds — best at golden hour', lat:26.9239, lon:75.8267, type:'monument'},
          {time:'7:00 PM', place:'Chokhi Dhani', emoji:'🎪', desc:'Cultural village dinner with folk dance and camel rides', lat:26.8140, lon:75.7781, type:'food'},
        ]
      },
      {
        theme: 'Bazaars & Local Life',
        color: '#10B981',
        stops: [
          {time:'8:00 AM', place:'Nahargarh Fort', emoji:'🌅', desc:'Sunrise over the Pink City — panoramic views', lat:26.9411, lon:75.8086, type:'monument'},
          {time:'10:30 AM', place:'Jantar Mantar', emoji:'🔭', desc:'UNESCO observatory with massive astronomical instruments', lat:26.9246, lon:75.8242, type:'culture'},
          {time:'12:30 PM', place:'Laxmi Mishthan Bhandar', emoji:'🍛', desc:'Famous for dal baati churma and pyaaz kachori', lat:26.9195, lon:75.8231, type:'food'},
          {time:'2:30 PM', place:'Johari Bazaar', emoji:'💎', desc:'Jaipur\'s famous jewellery and gem market', lat:26.9191, lon:75.8243, type:'market'},
          {time:'4:30 PM', place:'Albert Hall Museum', emoji:'🎭', desc:'Indo-Saracenic museum with rich Rajasthani collection', lat:26.9026, lon:75.8188, type:'culture'},
        ]
      }
    ]
  },
  mumbai: {
    days: [
      {
        theme: 'Heritage & Harbour',
        color: '#3B82F6',
        stops: [
          {time:'8:00 AM', place:'Gateway of India', emoji:'🗼', desc:'Iconic 1924 archway by the Arabian Sea — perfect for morning photos', lat:18.9220, lon:72.8347, type:'landmark'},
          {time:'9:30 AM', place:'Elephanta Island', emoji:'🐘', desc:'Take a ferry to ancient rock-cut Hindu caves — UNESCO heritage', lat:18.9633, lon:72.9315, type:'monument'},
          {time:'1:00 PM', place:'Britannia & Co.', emoji:'🍲', desc:'Legendary Parsi restaurant since 1923 — must-try Berry Pulao', lat:18.9257, lon:72.8354, type:'food'},
          {time:'3:00 PM', place:'CST Station', emoji:'🏛️', desc:'Victorian Gothic UNESCO landmark — also a working railway station', lat:18.9400, lon:72.8350, type:'landmark'},
          {time:'5:00 PM', place:'Marine Drive', emoji:'🌊', desc:'The Queen\'s Necklace — walk along as the sun sets over the sea', lat:18.9438, lon:72.8230, type:'landmark'},
          {time:'8:00 PM', place:'Bade Miyan', emoji:'🔥', desc:'Legendary late-night kebab stall in Colaba', lat:18.9251, lon:72.8320, type:'food'},
        ]
      },
      {
        theme: 'Bollywood & Street Food',
        color: '#EC4899',
        stops: [
          {time:'9:00 AM', place:'Dharavi', emoji:'🏙️', desc:'The world\'s most entrepreneurial slum — guided tours available', lat:19.0396, lon:72.8530, type:'culture'},
          {time:'11:30 AM', place:'Juhu Beach', emoji:'🏖️', desc:'Famous beach with street food — try pav bhaji and bhel puri', lat:19.0985, lon:72.8264, type:'nature'},
          {time:'1:30 PM', place:'Film City', emoji:'🎬', desc:'Bollywood\'s famous studio complex — guided tours', lat:19.1647, lon:72.8670, type:'culture'},
          {time:'4:00 PM', place:'Linking Road', emoji:'🛍️', desc:'Mumbai\'s favourite shopping street in Bandra', lat:19.0665, lon:72.8295, type:'market'},
          {time:'7:00 PM', place:'Trishna', emoji:'🦀', desc:'Iconic Fort-area seafood restaurant — butter garlic crab', lat:18.9358, lon:72.8349, type:'food'},
        ]
      }
    ]
  },
  goa: {
    days: [
      {
        theme: 'Beaches & Heritage',
        color: '#06B6D4',
        stops: [
          {time:'8:00 AM', place:'Calangute Beach', emoji:'🏖️', desc:'Goa\'s largest beach — morning swim before the crowds arrive', lat:15.5440, lon:73.7551, type:'nature'},
          {time:'11:00 AM', place:'Fort Aguada', emoji:'🏰', desc:'17th-century Portuguese fort with lighthouse and sea views', lat:15.5027, lon:73.7655, type:'monument'},
          {time:'1:30 PM', place:'Vinayak Family Restaurant', emoji:'🐟', desc:'Authentic Goan fish curry rice and prawn balchão', lat:15.4916, lon:73.7986, type:'food'},
          {time:'3:30 PM', place:'Old Goa Churches', emoji:'⛪', desc:'UNESCO Baroque churches — Basilica of Bom Jesus & Se Cathedral', lat:15.5008, lon:73.9121, type:'monument'},
          {time:'6:00 PM', place:'Sunset at Anjuna Beach', emoji:'🌅', desc:'Famous flea market and legendary sunset point', lat:15.5726, lon:73.7412, type:'nature'},
        ]
      },
      {
        theme: 'North Goa Vibes',
        color: '#F97316',
        stops: [
          {time:'7:00 AM', place:'Dudhsagar Falls', emoji:'💧', desc:'Spectacular four-tiered waterfall — jeep safari through forest', lat:15.3140, lon:74.3140, type:'nature'},
          {time:'1:00 PM', place:'Spice Plantation Lunch', emoji:'🌶️', desc:'Guided spice farm tour with traditional Goan thali', lat:15.4058, lon:73.9963, type:'food'},
          {time:'4:00 PM', place:'Vagator Beach', emoji:'🌊', desc:'Rocky beach with dramatic cliffs and Chapora Fort above', lat:15.5999, lon:73.7399, type:'nature'},
          {time:'7:30 PM', place:'Martin\'s Corner', emoji:'🍷', desc:'Beloved Goan-Portuguese fusion in Betalbatim', lat:15.3420, lon:73.9100, type:'food'},
        ]
      }
    ]
  },
  paris: {
    days: [
      {
        theme: 'Iconic Paris',
        color: '#6366F1',
        stops: [
          {time:'9:00 AM', place:'Eiffel Tower', emoji:'🗼', desc:'Go early to skip queues — views from the summit are breathtaking', lat:48.8584, lon:2.2945, type:'landmark'},
          {time:'11:30 AM', place:'Champ de Mars', emoji:'🌿', desc:'Picnic on the grass with croissants and café au lait', lat:48.8554, lon:2.3020, type:'nature'},
          {time:'1:30 PM', place:'Musée d\'Orsay', emoji:'🖼️', desc:'Impressionist masterpieces by Monet, Renoir & Van Gogh', lat:48.8600, lon:2.3266, type:'culture'},
          {time:'4:30 PM', place:'Notre-Dame', emoji:'⛪', desc:'Gothic cathedral rising again — historic views from the island', lat:48.8530, lon:2.3499, type:'monument'},
          {time:'7:00 PM', place:'Le Marais', emoji:'🎭', desc:'Vibrant Jewish quarter — galleries, boutiques, and falafel', lat:48.8600, lon:2.3540, type:'landmark'},
          {time:'9:00 PM', place:'Eiffel Tower Sparkling', emoji:'✨', desc:'Watch the tower sparkle every hour — magical from Trocadéro', lat:48.8638, lon:2.2887, type:'landmark'},
        ]
      },
      {
        theme: 'Art, Food & Montmartre',
        color: '#EC4899',
        stops: [
          {time:'9:00 AM', place:'The Louvre', emoji:'🏛️', desc:'World\'s largest art museum — see the Mona Lisa and Venus de Milo', lat:48.8606, lon:2.3376, type:'culture'},
          {time:'1:00 PM', place:'Café de Flore', emoji:'☕', desc:'Legendary Left Bank café — lunch with existentialists', lat:48.8538, lon:2.3327, type:'food'},
          {time:'3:00 PM', place:'Montmartre', emoji:'🎨', desc:'Hilltop artist district with winding cobblestone streets', lat:48.8867, lon:2.3431, type:'culture'},
          {time:'5:00 PM', place:'Sacré-Cœur', emoji:'⛪', desc:'White basilica with the best sunset view in Paris', lat:48.8867, lon:2.3431, type:'monument'},
          {time:'8:00 PM', place:'Bouillon Chartier', emoji:'🥩', desc:'Classic French brasserie since 1896 — authentic and affordable', lat:48.8738, lon:2.3446, type:'food'},
        ]
      }
    ]
  },
  tokyo: {
    days: [
      {
        theme: 'Tradition & Modernity',
        color: '#EF4444',
        stops: [
          {time:'7:00 AM', place:'Tsukiji Outer Market', emoji:'🍣', desc:'Fresh sushi breakfast at the world\'s most famous fish market', lat:35.6654, lon:139.7707, type:'food'},
          {time:'9:30 AM', place:'Senso-ji Temple', emoji:'⛩️', desc:'Ancient Buddhist temple in Asakusa — serene and photogenic', lat:35.7148, lon:139.7967, type:'monument'},
          {time:'11:30 AM', place:'Akihabara', emoji:'🤖', desc:'Electric Town — anime, manga, and electronics paradise', lat:35.7022, lon:139.7741, type:'culture'},
          {time:'2:00 PM', place:'teamLab Planets', emoji:'🌊', desc:'Immersive digital art museum — visually stunning', lat:35.6464, lon:139.7836, type:'culture'},
          {time:'5:00 PM', place:'Shibuya Crossing', emoji:'🚶', desc:'The world\'s busiest intersection — watch from Starbucks above', lat:35.6595, lon:139.7004, type:'landmark'},
          {time:'8:00 PM', place:'Ichiran Ramen', emoji:'🍜', desc:'Famous solo-booth ramen — deep, rich tonkotsu broth', lat:35.6590, lon:139.7005, type:'food'},
        ]
      },
      {
        theme: 'Gardens, Shrines & Skyline',
        color: '#10B981',
        stops: [
          {time:'8:00 AM', place:'Shinjuku Gyoen', emoji:'🌸', desc:'National garden — cherry blossoms or autumn foliage depending on season', lat:35.6851, lon:139.7103, type:'nature'},
          {time:'11:00 AM', place:'Meiji Shrine', emoji:'⛩️', desc:'Forested Shinto shrine — peaceful walking paths through tall cedars', lat:35.6763, lon:139.6993, type:'monument'},
          {time:'1:00 PM', place:'Harajuku Takeshita', emoji:'🌈', desc:'Wildly colourful youth fashion street and crepe stalls', lat:35.6702, lon:139.7024, type:'culture'},
          {time:'3:30 PM', place:'Tokyo Skytree', emoji:'🏙️', desc:'World\'s second-tallest tower — 360° views of the metropolis', lat:35.7101, lon:139.8107, type:'landmark'},
          {time:'7:00 PM', place:'Sukiyabashi Jiro Honten', emoji:'🍱', desc:'The world\'s most famous sushi counter (reserve months ahead)', lat:35.6717, lon:139.7640, type:'food'},
        ]
      }
    ]
  },
  bangkok: {
    days: [
      {
        theme: 'Temples & River Life',
        color: '#F59E0B',
        stops: [
          {time:'8:00 AM', place:'Grand Palace', emoji:'🏯', desc:'Dazzling royal complex with Emerald Buddha — stunning at opening time', lat:13.7500, lon:100.4914, type:'monument'},
          {time:'10:30 AM', place:'Wat Pho', emoji:'🛕', desc:'Temple of the Reclining Buddha — 46m golden statue', lat:13.7466, lon:100.4930, type:'monument'},
          {time:'12:00 PM', place:'Pad Thai Thip Samai', emoji:'🍜', desc:'Bangkok\'s most famous Pad Thai spot — queue is worth it', lat:13.7540, lon:100.5012, type:'food'},
          {time:'2:00 PM', place:'Wat Arun', emoji:'⛩️', desc:'Cross the Chao Phraya by ferry — Temple of Dawn gleams in the sun', lat:13.7440, lon:100.4888, type:'monument'},
          {time:'5:00 PM', place:'Khao San Road', emoji:'🎉', desc:'Backpacker street — drinks, street food, and chaos', lat:13.7588, lon:100.4982, type:'landmark'},
        ]
      },
      {
        theme: 'Markets & Modern Bangkok',
        color: '#8B5CF6',
        stops: [
          {time:'6:00 AM', place:'Or Tor Kor Market', emoji:'🥭', desc:'Premium fresh produce market — incredible tropical fruits', lat:13.8044, lon:100.5500, type:'market'},
          {time:'9:00 AM', place:'Chatuchak Market', emoji:'🎪', desc:'World\'s largest weekend market — 15,000 stalls', lat:13.7996, lon:100.5500, type:'market'},
          {time:'1:00 PM', place:'Jay Fai', emoji:'🦀', desc:'Michelin-starred street food — book in advance for crab omelette', lat:13.7554, lon:100.5033, type:'food'},
          {time:'4:00 PM', place:'ICONSIAM Mall', emoji:'🛍️', desc:'Stunning riverside luxury mall with floating market inside', lat:13.7269, lon:100.5104, type:'landmark'},
          {time:'7:00 PM', place:'Vertigo & Moon Bar', emoji:'🌙', desc:'Rooftop bar on the 61st floor — breathtaking city views at night', lat:13.7259, lon:100.5360, type:'landmark'},
        ]
      }
    ]
  },
  dubai: {
    days: [
      {
        theme: 'Skyscrapers & Heritage',
        color: '#D97706',
        stops: [
          {time:'9:00 AM', place:'Al Fahidi Fort', emoji:'🏰', desc:'Dubai\'s oldest building — heritage museum in the historic quarter', lat:25.2631, lon:55.2972, type:'monument'},
          {time:'11:00 AM', place:'Dubai Creek', emoji:'⛵', desc:'Ride an abra (wooden boat) across the historic trading creek', lat:25.2700, lon:55.3000, type:'landmark'},
          {time:'1:00 PM', place:'Al Ustad Special Kabab', emoji:'🍢', desc:'Famous Iranian-style kababs — a Dubai institution since 1978', lat:25.2700, lon:55.3100, type:'food'},
          {time:'3:00 PM', place:'Dubai Mall', emoji:'🛍️', desc:'World\'s largest mall — inside aquarium, skating rink, waterfall', lat:25.1972, lon:55.2796, type:'landmark'},
          {time:'5:30 PM', place:'Burj Khalifa', emoji:'🏙️', desc:'World\'s tallest building — sunset views from At The Top (148F)', lat:25.1972, lon:55.2744, type:'landmark'},
          {time:'8:00 PM', place:'Dubai Fountain', emoji:'⛲', desc:'World\'s largest choreographed fountain show', lat:25.1957, lon:55.2791, type:'landmark'},
        ]
      },
      {
        theme: 'Desert & Luxury',
        color: '#EF4444',
        stops: [
          {time:'8:00 AM', place:'Palm Jumeirah', emoji:'🌴', desc:'Ride the Palm Monorail across the iconic man-made island', lat:25.1124, lon:55.1390, type:'landmark'},
          {time:'10:30 AM', place:'Madinat Jumeirah', emoji:'🕌', desc:'Arabian heritage resort with waterways and luxury souks', lat:25.1342, lon:55.1850, type:'landmark'},
          {time:'1:00 PM', place:'Ravi Restaurant', emoji:'🍛', desc:'Legendary affordable Pakistani food beloved by locals and celebrities', lat:25.2431, lon:55.2851, type:'food'},
          {time:'3:00 PM', place:'Desert Safari', emoji:'🏜️', desc:'Dune bashing, camel ride, and Bedouin camp dinner', lat:24.8607, lon:55.0735, type:'nature'},
          {time:'8:00 PM', place:'Gold on 27 at Burj', emoji:'✨', desc:'Luxury dining with 24K gold dishes and cityscape views', lat:25.1972, lon:55.2744, type:'food'},
        ]
      }
    ]
  },
  udaipur: {
    days: [
      {
        theme: 'Palaces, Lakes & Sunsets',
        color: '#E8673A',
        stops: [
          {time:'7:30 AM', place:'Jagdish Temple', emoji:'🛕', desc:'17th-century Indo-Aryan temple — morning prayers fill the air', lat:24.5793, lon:73.6833, type:'monument'},
          {time:'9:00 AM', place:'City Palace', emoji:'🏯', desc:'Rajasthan\'s largest palace complex — stunning lake-facing architecture', lat:24.5765, lon:73.6855, type:'monument'},
          {time:'11:30 AM', place:'Lake Pichola Boat Ride', emoji:'🛶', desc:'Boat to Jag Mandir — the floating palace used by Mughal princes', lat:24.5733, lon:73.6806, type:'landmark'},
          {time:'1:30 PM', place:'Natraj Dining Hall', emoji:'🍛', desc:'Authentic dal baati churma & gatte ki sabzi — a Rajasthani feast', lat:24.5786, lon:73.6872, type:'food'},
          {time:'3:30 PM', place:'Shilpgram', emoji:'🎨', desc:'Rural arts & craft village — live demonstrations of folk arts', lat:24.5984, lon:73.6570, type:'culture'},
          {time:'6:00 PM', place:'Sajjangarh Fort', emoji:'🌅', desc:'Monsoon Palace on the hilltop — most spectacular sunset in Rajasthan', lat:24.5741, lon:73.6428, type:'monument'},
        ]
      },
      {
        theme: 'Bazaars, Gardens & Heritage',
        color: '#8B5CF6',
        stops: [
          {time:'8:00 AM', place:'Saheliyon ki Bari', emoji:'🌸', desc:'Garden of maidens — fountains, lotus pool, and marble pavilions', lat:24.5934, lon:73.6849, type:'nature'},
          {time:'10:00 AM', place:'Fateh Sagar Lake', emoji:'💧', desc:'Serene artificial lake with Nehru Island at its centre', lat:24.5991, lon:73.6710, type:'nature'},
          {time:'12:00 PM', place:'Ambrai Ghat', emoji:'🌊', desc:'Lakeside ghat with the best view of City Palace across the water', lat:24.5782, lon:73.6800, type:'landmark'},
          {time:'2:00 PM', place:'Hathi Pol Bazaar', emoji:'🛍️', desc:'Silver jewellery, miniature paintings & Rajasthani textiles', lat:24.5804, lon:73.6891, type:'market'},
          {time:'4:30 PM', place:'Vintage & Classic Car Museum', emoji:'🚗', desc:'Maharajas\' vintage car collection — Rolls Royces & Bugattis', lat:24.5920, lon:73.6907, type:'culture'},
          {time:'8:00 PM', place:'Ambrai Restaurant', emoji:'🍷', desc:'Dinner by the lake with glittering City Palace reflections', lat:24.5782, lon:73.6798, type:'food'},
        ]
      }
    ]
  },
  rishikesh: {
    days: [
      {
        theme: 'Ghats, Bridges & Aarti',
        color: '#F59E0B',
        stops: [
          {time:'6:00 AM', place:'Triveni Ghat', emoji:'🕉️', desc:'Morning dip in the holy Ganges — serene sunrise over the river', lat:30.1086, lon:78.2945, type:'monument'},
          {time:'8:00 AM', place:'Lakshman Jhula', emoji:'🌉', desc:'Iconic 1929 iron suspension bridge — panoramic Himalayan and river views', lat:30.1197, lon:78.3244, type:'landmark'},
          {time:'10:00 AM', place:'Beatles Ashram', emoji:'🎸', desc:'Maharishi\'s abandoned ashram where The Beatles composed music in 1968', lat:30.1012, lon:78.3038, type:'culture'},
          {time:'12:30 PM', place:'Little Buddha Café', emoji:'☕', desc:'Rooftop river-view café — banana lassi and Israeli shakshuka', lat:30.1198, lon:78.3243, type:'food'},
          {time:'3:00 PM', place:'Neelkanth Mahadev Temple', emoji:'🏔️', desc:'Sacred Shiva temple at 1,330m — challenging jungle hike', lat:30.1741, lon:78.3850, type:'monument'},
          {time:'6:30 PM', place:'Ganga Aarti', emoji:'🔥', desc:'Magnificent evening fire ceremony on the Ganges — unmissable', lat:30.1086, lon:78.2945, type:'culture'},
        ]
      },
      {
        theme: 'Adventure & Ashrams',
        color: '#10B981',
        stops: [
          {time:'7:00 AM', place:'White-Water Rafting', emoji:'🌊', desc:'Thrilling Grade III-IV rapids on the holy Ganges — 16km stretch', lat:30.1197, lon:78.3244, type:'nature'},
          {time:'10:30 AM', place:'Parmarth Niketan', emoji:'🧘', desc:'India\'s largest ashram — morning yoga class on the Ganges bank', lat:30.1023, lon:78.2982, type:'culture'},
          {time:'1:00 PM', place:'Chotiwala Restaurant', emoji:'🍛', desc:'Rishikesh institution since 1958 — thali and masala chai', lat:30.1195, lon:78.3231, type:'food'},
          {time:'3:00 PM', place:'Bungee Jumping (Jumpin Heights)', emoji:'⚡', desc:'India\'s highest bungee at 83m — adrenaline over the forest canopy', lat:30.0753, lon:78.3049, type:'nature'},
          {time:'6:00 PM', place:'Ram Jhula', emoji:'🌉', desc:'Second suspension bridge — sunset walk with Himalayan backdrop', lat:30.1120, lon:78.3046, type:'landmark'},
        ]
      }
    ]
  },
  manali: {
    days: [
      {
        theme: 'Temples, Valleys & Snow',
        color: '#06B6D4',
        stops: [
          {time:'8:00 AM', place:'Hadimba Devi Temple', emoji:'⛪', desc:'16th-century pagoda temple deep in ancient deodar cedar forest', lat:32.2411, lon:77.1826, type:'monument'},
          {time:'10:00 AM', place:'Manu Temple', emoji:'🛕', desc:'Sacred temple dedicated to sage Manu in Old Manali village', lat:32.2508, lon:77.1750, type:'monument'},
          {time:'11:30 AM', place:'Old Manali Café Street', emoji:'☕', desc:'Bohemian cafés and traveller hangouts — Johnston\'s is a must', lat:32.2518, lon:77.1762, type:'food'},
          {time:'2:00 PM', place:'Solang Valley', emoji:'🏔️', desc:'Paragliding, zip-lining & snow activities with glacier views', lat:32.3165, lon:77.1564, type:'nature'},
          {time:'5:00 PM', place:'Vashisht Village', emoji:'🧘', desc:'Ancient hot sulphur springs and Vashisht Rishi temple', lat:32.2558, lon:77.1993, type:'monument'},
          {time:'8:00 PM', place:'Lazy Dog Lounge', emoji:'🍕', desc:'Mountain-view rooftop — wood-fired pizza and bonfire nights', lat:32.2480, lon:77.1840, type:'food'},
        ]
      },
      {
        theme: 'Rohtang Pass & Himalayan Vistas',
        color: '#EF4444',
        stops: [
          {time:'6:00 AM', place:'Rohtang Pass', emoji:'🏔️', desc:'High mountain pass at 3,978m — snow even in summer (permit required)', lat:32.3712, lon:77.2444, type:'nature'},
          {time:'10:00 AM', place:'Beas Kund Trek', emoji:'🥾', desc:'High-altitude trek to the source of the Beas River — stunning views', lat:32.3520, lon:77.1780, type:'nature'},
          {time:'1:00 PM', place:'Rohtang Dhabas', emoji:'🔥', desc:'Steaming hot maggi and chai at 4,000m — a trekker\'s ritual', lat:32.3712, lon:77.2444, type:'food'},
          {time:'4:00 PM', place:'Manali Mall Road', emoji:'🛍️', desc:'Woollen shawls, Kullu caps, dry fruits and silver trinkets', lat:32.2396, lon:77.1887, type:'market'},
          {time:'7:30 PM', place:'Chopsticks Restaurant', emoji:'🥢', desc:'Best Chinese-Tibetan-Thai food in Manali — legendary momos', lat:32.2380, lon:77.1890, type:'food'},
        ]
      }
    ]
  },
  ladakh: {
    days: [
      {
        theme: 'Leh & Ancient Monasteries',
        color: '#F59E0B',
        stops: [
          {time:'8:00 AM', place:'Leh Palace', emoji:'🏯', desc:'17th-century nine-storey palace overlooking Leh — 360° mountain views', lat:34.1647, lon:77.5855, type:'monument'},
          {time:'10:00 AM', place:'Shanti Stupa', emoji:'⚪', desc:'Gleaming white Buddhist stupa at 3,616m — view of entire Leh valley', lat:34.1565, lon:77.5685, type:'monument'},
          {time:'12:00 PM', place:'Leh Market', emoji:'🛍️', desc:'Thangka paintings, Ladakhi jewellery, pashmina shawls', lat:34.1648, lon:77.5818, type:'market'},
          {time:'2:00 PM', place:'Thiksey Monastery', emoji:'🛕', desc:'12-storey Tibetan Buddhist gompa — resembles Lhasa\'s Potala Palace', lat:34.0422, lon:77.6666, type:'monument'},
          {time:'4:30 PM', place:'Hemis Monastery', emoji:'🎭', desc:'Ladakh\'s wealthiest monastery — frescoes, thangkas & hidden caves', lat:33.9195, lon:77.6987, type:'monument'},
          {time:'8:00 PM', place:'Gesmo Restaurant', emoji:'🍲', desc:'Leh\'s famous thukpa soup and apple pie under a star-filled sky', lat:34.1651, lon:77.5835, type:'food'},
        ]
      },
      {
        theme: 'Pangong Lake & Nubra Valley',
        color: '#8B5CF6',
        stops: [
          {time:'5:00 AM', place:'Khardung La Pass', emoji:'🏁', desc:'Drive over the world\'s highest motorable pass at 5,359m', lat:34.2777, lon:77.6016, type:'landmark'},
          {time:'9:00 AM', place:'Nubra Valley', emoji:'🌄', desc:'Surreal double-humped Bactrian camel rides in a high-altitude desert', lat:34.6400, lon:77.5700, type:'nature'},
          {time:'12:00 PM', place:'Diskit Monastery', emoji:'🛕', desc:'32m statue of Maitreya Buddha gazing over Nubra Valley', lat:34.5624, lon:77.5737, type:'monument'},
          {time:'3:00 PM', place:'Pangong Tso Lake', emoji:'🔵', desc:'The 3 Idiots lake — electric blue waters straddling India & China at 4,350m', lat:33.7544, lon:78.6430, type:'nature'},
          {time:'7:00 PM', place:'Campfire Under Stars', emoji:'🌌', desc:'Lakeside camping at Pangong — the Milky Way overhead is unmatched', lat:33.7544, lon:78.6430, type:'nature'},
        ]
      }
    ]
  },
  kerala: {
    days: [
      {
        theme: 'Backwaters & Spice Gardens',
        color: '#10B981',
        stops: [
          {time:'9:00 AM', place:'Alleppey Boat Jetty', emoji:'🛶', desc:'Board a traditional kettuvallam houseboat for the day on the backwaters', lat:9.4981, lon:76.3388, type:'landmark'},
          {time:'11:00 AM', place:'Kuttanad Backwaters', emoji:'🌴', desc:'Glide through narrow canals flanked by coconut palms and paddy fields', lat:9.4500, lon:76.3500, type:'nature'},
          {time:'1:00 PM', place:'Houseboat Lunch', emoji:'🍌', desc:'Kerala sadya — rice with 20+ traditional curries on a banana leaf', lat:9.4600, lon:76.3300, type:'food'},
          {time:'3:00 PM', place:'Punnamada Lake', emoji:'💧', desc:'Venue of the Nehru Trophy Snake Boat Race — serene and majestic', lat:9.5200, lon:76.3900, type:'nature'},
          {time:'5:30 PM', place:'Alleppey Beach Sunset', emoji:'🌅', desc:'Stunning sunset at the old Dutch-era lighthouse on the shore', lat:9.4800, lon:76.3300, type:'nature'},
          {time:'8:00 PM', place:'Paragon Restaurant', emoji:'🍚', desc:'Authentic Kerala karimeen fish fry and prawn mappas', lat:9.4981, lon:76.3388, type:'food'},
        ]
      },
      {
        theme: 'Munnar Tea Hills & Wildlife',
        color: '#06B6D4',
        stops: [
          {time:'7:00 AM', place:'Munnar Tea Estates', emoji:'🍃', desc:'Rolling emerald hills carpeted in tea — sunrise mist over the gardens', lat:10.0889, lon:77.0595, type:'nature'},
          {time:'9:30 AM', place:'Tata Tea Museum', emoji:'🫖', desc:'History of India\'s tea industry — factory tour and tasting', lat:10.0799, lon:77.0607, type:'culture'},
          {time:'12:00 PM', place:'Mattupetty Dam', emoji:'🏔️', desc:'Scenic reservoir surrounded by shola forests and the Eravikulam peaks', lat:10.1380, lon:77.1162, type:'nature'},
          {time:'2:30 PM', place:'Eravikulam National Park', emoji:'🦌', desc:'Home to the endangered Nilgiri Tahr — walking trails through grasslands', lat:10.1631, lon:77.0551, type:'nature'},
          {time:'5:00 PM', place:'Top Station', emoji:'🌄', desc:'Highest point in Munnar at 1,868m — misty views into Tamil Nadu', lat:10.1914, lon:77.1690, type:'landmark'},
          {time:'8:00 PM', place:'Saravana Bhavan', emoji:'🥞', desc:'Kerala-style dosas, appam & stew for dinner', lat:10.0889, lon:77.0595, type:'food'},
        ]
      }
    ]
  },
  switzerland: {
    days: [
      {
        theme: 'Jungfrau & Alpine Peaks',
        color: '#3B82F6',
        stops: [
          {time:'8:00 AM', place:'Interlaken', emoji:'🏔️', desc:'Gateway to the Bernese Alps — turquoise lakes on both sides', lat:46.6863, lon:7.8632, type:'landmark'},
          {time:'9:30 AM', place:'Jungfraujoch', emoji:'🚂', desc:'Top of Europe by cogwheel train — Aletsch Glacier at 3,454m', lat:46.5475, lon:7.9820, type:'landmark'},
          {time:'1:00 PM', place:'Ice Palace', emoji:'🧊', desc:'Walk through tunnels carved into the glacier — ethereal blue light', lat:46.5475, lon:7.9820, type:'culture'},
          {time:'3:00 PM', place:'Grindelwald Village', emoji:'🏘️', desc:'Picture-perfect Alpine village beneath the Eiger North Face', lat:46.6243, lon:8.0412, type:'landmark'},
          {time:'6:00 PM', place:'Fondue at a Chalet', emoji:'🧀', desc:'Authentic cheese fondue in a mountain chalet with cowbell soundtrack', lat:46.6243, lon:8.0412, type:'food'},
        ]
      },
      {
        theme: 'Lucerne & Lake Geneva',
        color: '#8B5CF6',
        stops: [
          {time:'9:00 AM', place:'Chapel Bridge Lucerne', emoji:'🌉', desc:'Europe\'s oldest wooden covered bridge dating to 1333 — iconic', lat:47.0502, lon:8.3063, type:'landmark'},
          {time:'11:00 AM', place:'Lake Lucerne Cruise', emoji:'⛵', desc:'Paddle steamer cruise with snow-capped mountains reflecting in the water', lat:47.0502, lon:8.3063, type:'nature'},
          {time:'1:30 PM', place:'Sprüngli Confiserie Zurich', emoji:'🍫', desc:'Famous Zurich chocolate house — truffles, macarons & hot cocoa', lat:47.3700, lon:8.5400, type:'food'},
          {time:'3:30 PM', place:'Chillon Castle', emoji:'🏰', desc:'Medieval island castle on Lake Geneva — inspiration for Lord Byron', lat:46.4143, lon:6.9277, type:'monument'},
          {time:'6:00 PM', place:'Montreux Riviera', emoji:'🌅', desc:'Sunset stroll along Lake Geneva\'s flower-lined promenade', lat:46.4312, lon:6.9120, type:'nature'},
          {time:'8:00 PM', place:'Geneva Old Town Dinner', emoji:'🥩', desc:'Rösti and raclette in a Vieille Ville bistro with lake views', lat:46.2044, lon:6.1432, type:'food'},
        ]
      }
    ]
  },
  rome: {
    days: [
      {
        theme: 'Ancient Rome & the Vatican',
        color: '#E8673A',
        stops: [
          {time:'8:00 AM', place:'Colosseum', emoji:'🏛️', desc:'Ancient gladiatorial arena — arrive at opening to avoid the crowds', lat:41.8902, lon:12.4922, type:'monument'},
          {time:'10:00 AM', place:'Roman Forum', emoji:'🗿', desc:'Walk through 2,500 years of history on ancient cobblestones', lat:41.8925, lon:12.4853, type:'monument'},
          {time:'12:00 PM', place:'Suppli Roma', emoji:'🍡', desc:'Crispy Roman rice balls — street food perfection near the Forum', lat:41.8957, lon:12.4762, type:'food'},
          {time:'2:00 PM', place:'Vatican Museums', emoji:'🎨', desc:'Raphael Rooms, Gallery of Maps, and the unmissable Sistine Chapel', lat:41.9065, lon:12.4536, type:'culture'},
          {time:'5:00 PM', place:'St. Peter\'s Basilica', emoji:'⛪', desc:'Climb the dome for Rome\'s most breathtaking panoramic view', lat:41.9022, lon:12.4539, type:'monument'},
          {time:'8:00 PM', place:'Trastevere Dinner', emoji:'🍝', desc:'Classic cacio e pepe at Da Enzo al 29 in Rome\'s most charming neighbourhood', lat:41.8890, lon:12.4698, type:'food'},
        ]
      },
      {
        theme: 'Piazzas, Fountains & Gelato',
        color: '#EC4899',
        stops: [
          {time:'8:30 AM', place:'Sant\'Eustachio il Caffè', emoji:'☕', desc:'Rome\'s most legendary espresso — a local morning ritual since 1938', lat:41.8986, lon:12.4730, type:'food'},
          {time:'10:00 AM', place:'Pantheon', emoji:'🏛️', desc:'2,000-year-old temple with the world\'s best-preserved ancient dome', lat:41.8986, lon:12.4769, type:'monument'},
          {time:'11:30 AM', place:'Piazza Navona', emoji:'⛲', desc:'Baroque oval piazza with Bernini\'s Fountain of the Four Rivers', lat:41.8990, lon:12.4726, type:'landmark'},
          {time:'1:00 PM', place:'Campo de\' Fiori Market', emoji:'🛍️', desc:'Vibrant morning market — fresh produce, flowers, and local cheese', lat:41.8956, lon:12.4722, type:'market'},
          {time:'3:00 PM', place:'Trevi Fountain', emoji:'⛲', desc:'Toss your coin — the world\'s most famous Baroque fountain', lat:41.9009, lon:12.4833, type:'landmark'},
          {time:'6:00 PM', place:'Spanish Steps', emoji:'🌸', desc:'137 steps down to the Piazza di Spagna — golden hour is magical', lat:41.9057, lon:12.4823, type:'landmark'},
          {time:'8:30 PM', place:'Roscioli Deli Restaurant', emoji:'🥩', desc:'World-class carbonara and artisan salumi in a legendary Roman deli', lat:41.8955, lon:12.4761, type:'food'},
        ]
      }
    ]
  },
  hawaii: {
    days: [
      {
        theme: 'Oahu — Beaches & History',
        color: '#06B6D4',
        stops: [
          {time:'7:00 AM', place:'Lanikai Beach', emoji:'🏖️', desc:'Oahu\'s most pristine beach — calm turquoise waters at sunrise', lat:21.3932, lon:-157.7136, type:'nature'},
          {time:'9:30 AM', place:'Diamond Head Crater', emoji:'🌋', desc:'1.6km hike to the volcanic summit — panoramic Honolulu views', lat:21.2618, lon:-157.8049, type:'nature'},
          {time:'12:00 PM', place:'Leonard\'s Bakery', emoji:'🍩', desc:'Iconic Honolulu malasadas — fluffy Portuguese doughnuts since 1952', lat:21.3027, lon:-157.8327, type:'food'},
          {time:'2:00 PM', place:'Pearl Harbor Memorial', emoji:'⚓', desc:'USS Arizona Memorial — solemn and moving WWII history site', lat:21.3649, lon:-157.9500, type:'culture'},
          {time:'5:00 PM', place:'Waikiki Beach', emoji:'🌊', desc:'Learn to surf or watch pros — legendary waves at sunset', lat:21.2793, lon:-157.8295, type:'nature'},
          {time:'8:00 PM', place:'Rainbow Drive-In', emoji:'🍳', desc:'Honolulu institution — loco moco, plate lunches, and shave ice', lat:21.2893, lon:-157.8180, type:'food'},
        ]
      },
      {
        theme: 'Big Island — Volcanoes & Stargazing',
        color: '#EF4444',
        stops: [
          {time:'7:00 AM', place:'Kilauea Caldera', emoji:'🌋', desc:'Walk the rim of one of the world\'s most active volcanoes at dawn', lat:19.4065, lon:-155.2834, type:'nature'},
          {time:'10:00 AM', place:'Lava Tube Walk', emoji:'🕳️', desc:'Walk inside a 500-year-old lava tube — Thurston Lava Tube', lat:19.4180, lon:-155.2360, type:'nature'},
          {time:'1:00 PM', place:'Punalu\'u Black Sand Beach', emoji:'⚫', desc:'Dramatic black volcanic sand beach with Hawaiian green sea turtles', lat:19.1366, lon:-155.5079, type:'nature'},
          {time:'4:00 PM', place:'Mauna Kea Summit Drive', emoji:'🔭', desc:'Drive to 4,205m for the world\'s finest stargazing at sunset', lat:19.8200, lon:-155.4700, type:'nature'},
          {time:'8:00 PM', place:'Mama\'s Fish House', emoji:'🐟', desc:'Legendary North Maui seafood — fresh-off-the-boat daily catch', lat:20.9370, lon:-156.3208, type:'food'},
        ]
      }
    ]
  },
  alaska: {
    days: [
      {
        theme: 'Anchorage & Kenai Fjords',
        color: '#3B82F6',
        stops: [
          {time:'8:00 AM', place:'Anchorage Market', emoji:'🛍️', desc:'Saturday market — smoked salmon, native crafts, and reindeer sausage', lat:61.2181, lon:-149.9003, type:'market'},
          {time:'10:00 AM', place:'Flightseeing Over Denali', emoji:'✈️', desc:'30-min bush plane flight over North America\'s tallest peak — life-changing', lat:63.1148, lon:-151.1926, type:'nature'},
          {time:'1:00 PM', place:'Glacier Brewhouse', emoji:'🦀', desc:'Anchorage\'s best restaurant — Alaskan king crab and craft beers', lat:61.2175, lon:-149.8984, type:'food'},
          {time:'3:00 PM', place:'Kenai Fjords National Park', emoji:'🧊', desc:'Boat tour past tidewater glaciers calving into the sea — incredible wildlife', lat:59.9222, lon:-150.0000, type:'nature'},
          {time:'6:00 PM', place:'Exit Glacier', emoji:'❄️', desc:'Walk to the face of Exit Glacier — signs mark where ice was decades ago', lat:60.1855, lon:-149.6262, type:'nature'},
        ]
      },
      {
        theme: 'Northern Lights & Wildlife',
        color: '#8B5CF6',
        stops: [
          {time:'7:00 AM', place:'Katmai National Park', emoji:'🐻', desc:'Watch brown bears catch leaping sockeye salmon at Brooks Falls', lat:58.6822, lon:-156.6688, type:'nature'},
          {time:'11:00 AM', place:'Denali National Park', emoji:'🏔️', desc:'Bus tour deep into the park — grizzlies, moose, wolves & Denali views', lat:63.1148, lon:-151.1926, type:'nature'},
          {time:'2:00 PM', place:'Salmon Bake at Denali', emoji:'🐟', desc:'Outdoor feast — grilled Alaskan salmon in the boreal forest', lat:63.7226, lon:-148.9139, type:'food'},
          {time:'5:00 PM', place:'Chena Hot Springs', emoji:'♨️', desc:'Soak in natural geothermal hot springs under the open sky', lat:65.0520, lon:-146.0456, type:'nature'},
          {time:'10:00 PM', place:'Aurora Borealis Hunt', emoji:'🌌', desc:'Drive out of Fairbanks for Northern Lights viewing (Sep–Mar only)', lat:64.8378, lon:-147.7164, type:'nature'},
        ]
      }
    ]
  }
};

function buildItinerary(cityKey, days) {
  const db = ITINERARY_DB[cityKey];
  if (!db) return generateGenericItinerary(cityKey, days);
  const result = [];
  for (let i = 0; i < days; i++) {
    const template = db.days[i % db.days.length];
    result.push({
      day: i + 1,
      theme: i < db.days.length ? template.theme : `Day ${i+1} — Explore More`,
      color: template.color,
      stops: template.stops
    });
  }
  return result;
}

function generateGenericItinerary(cityKey, days) {
  const result = [];
  for (let i = 0; i < days; i++) {
    result.push({
      day: i + 1,
      theme: `Day ${i+1} — Discover ${cityKey}`,
      color: '#8B5CF6',
      stops: [
        {time:'9:00 AM', place:'City Centre', emoji:'🏙️', desc:'Morning exploration of the city centre', lat:0, lon:0, type:'landmark'},
        {time:'12:00 PM', place:'Local Market', emoji:'🛍️', desc:'Browse the local market and pick up souvenirs', lat:0, lon:0, type:'market'},
        {time:'3:00 PM', place:'Museum', emoji:'🏛️', desc:'Visit the main cultural museum', lat:0, lon:0, type:'culture'},
        {time:'7:00 PM', place:'Local Dinner', emoji:'🍽️', desc:'Dinner at a recommended local restaurant', lat:0, lon:0, type:'food'},
      ]
    });
  }
  return result;
}
