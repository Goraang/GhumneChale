const TRANSPORT_DATA = {
  default: {
    summary: 'A variety of transport options are available in this destination.',
    modes: [
      {
        id:'metro', name:'Metro / Subway', emoji:'🚇',
        desc:'Fast, affordable, and air-conditioned. Best for long distances across the city.',
        cost:'Low', comfort:'Medium', speed:'Fast', eco:'♻️ Eco-friendly',
        tips:['Get a day/weekly pass to save money','Avoid peak hours 8–10 AM and 5–8 PM','Download the local metro app']
      },
      {
        id:'cab', name:'Cab / Rideshare', emoji:'🚖',
        desc:'Door-to-door convenience. Use apps like Uber, Ola, Grab, or Careem.',
        cost:'Medium', comfort:'High', speed:'Medium', eco:'',
        tips:['Enable fare estimate before booking','Share rides to split costs','Prefer app cabs over street hailing for safety']
      },
      {
        id:'auto', name:'Auto-Rickshaw', emoji:'🛺',
        desc:'Iconic three-wheelers — perfect for short distances and local exploration.',
        cost:'Low', comfort:'Low', speed:'Medium', eco:'',
        tips:['Always insist on the meter or agree on fare upfront','Great for narrow lanes and markets','A quintessential local experience']
      },
      {
        id:'walk', name:'Walking', emoji:'🚶',
        desc:'The best way to discover hidden gems, street art, and local life.',
        cost:'Free', comfort:'Varies', speed:'Slow', eco:'♻️ Zero emission',
        tips:['Wear comfortable shoes','Use Google Maps offline','Early mornings are ideal — cool and less crowded']
      },
      {
        id:'bus', name:'City Bus', emoji:'🚌',
        desc:'Cheapest option, covers areas metro doesn\'t reach.',
        cost:'Very Low', comfort:'Low', speed:'Slow', eco:'♻️ Eco-friendly',
        tips:['Carry exact change','Ask locals or hotel for best routes','Avoid rush hours']
      },
      {
        id:'bike', name:'Bike / Scooter', emoji:'🛵',
        desc:'Freedom to explore at your own pace — perfect for Goa, Bali, and similar destinations.',
        cost:'Low', comfort:'Medium', speed:'Medium', eco:'',
        tips:['Always wear a helmet','Carry your license','Check fuel gauge before heading out']
      },
    ]
  },
  delhi: {
    summary: 'Delhi has one of Asia\'s largest metro networks covering the entire city, along with autos, e-rickshaws, and app cabs.',
    featured: ['metro','auto','cab','walk'],
    booking: {
      metro: { name:'Delhi Metro Rail', url:'https://www.delhimetrorail.com', note:'Buy a Delhi Metro Card for unlimited travel discounts' },
      cab: { name:'Ola / Uber', url:'https://www.olacabs.com', note:'Both work excellently in Delhi — surge pricing during peak hours' },
    }
  },
  jaipur: {
    summary: 'Jaipur is best navigated by auto-rickshaws for heritage areas and app cabs for longer routes. No metro currently.',
    featured: ['auto','cab','bike','walk'],
    booking: {
      cab: { name:'Ola / Uber', url:'https://www.olacabs.com', note:'Hire a driver for the day — usually ₹800–1500 all inclusive' },
    }
  },
  mumbai: {
    summary: 'Mumbai\'s local trains are its lifeline — fast and cheap. The new Metro is expanding rapidly.',
    featured: ['metro','bus','cab','walk'],
    booking: {
      metro: { name:'Mumbai Metro / Local Rail', url:'https://mumbaimetro1.com', note:'Get a smart card for local trains — valid across all suburban lines' },
      cab: { name:'Ola / Uber', url:'https://www.olacabs.com', note:'Traffic can be brutal — always check time estimates before booking' },
    }
  },
  goa: {
    summary: 'Rent a scooter for maximum freedom. Pre-paid taxis are available at the airport and major hubs.',
    featured: ['bike','cab','walk','bus'],
    booking: {
      bike: { name:'Scooter Rentals', url:'https://www.goarentals.com', note:'₹300–500/day — check condition thoroughly before renting' },
    }
  },
  paris: {
    summary: 'The Paris Métro is one of the world\'s finest urban rail systems. Also try Vélib\' bike sharing and river Bateaux.',
    featured: ['metro','walk','bike','cab'],
    booking: {
      metro: { name:'RATP Métro', url:'https://www.ratp.fr', note:'Buy a Navigo weekly pass (€22.80) for unlimited travel' },
      bike: { name:'Vélib\' Metropole', url:'https://www.velib-metropole.fr', note:'30 min free with day pass — perfect for flat river areas' },
    }
  },
  tokyo: {
    summary: 'Tokyo\'s train network is the most punctual in the world. Get a Suica card — it works on all trains, subways, and even at convenience stores.',
    featured: ['metro','walk','cab','bus'],
    booking: {
      metro: { name:'Tokyo Metro / JR East', url:'https://www.jreast.co.jp', note:'Get a SUICA card from any station — works everywhere' },
    }
  },
  bangkok: {
    summary: 'Bangkok has BTS Skytrain, MRT subway, river ferries, and Grab app. Tuk-tuks are fun but always agree on a price first.',
    featured: ['metro','bus','cab','walk'],
    booking: {
      metro: { name:'BTS Skytrain / MRT', url:'https://www.bts.co.th', note:'Buy a Rabbit Card for BTS — reload as needed' },
      cab: { name:'Grab Thailand', url:'https://grab.com', note:'Safest and most transparent option for taxis in Bangkok' },
    }
  },
  dubai: {
    summary: 'Dubai Metro is modern, clean, and air-conditioned. Taxis are metered and affordable. Careem is the regional Uber.',
    featured: ['metro','cab','walk','bus'],
    booking: {
      metro: { name:'Dubai Metro (RTA)', url:'https://rta.ae', note:'Get a Nol Card — required for metro and buses' },
      cab: { name:'Careem / Uber', url:'https://www.careem.com', note:'Both work well — Careem is locally preferred' },
    }
  },
  udaipur: {
    summary: 'Udaipur is best explored by auto-rickshaws and e-rickshaws for the old city. Boats on Lake Pichola are the most scenic way to travel. Cab apps work for longer routes.',
    featured: ['auto','walk','bike','cab'],
    booking: {
      cab: { name:'Ola / Uber', url:'https://www.olacabs.com', note:'Hire a full-day cab for ₹1,000–1,500 to cover all major sights' },
    }
  },
  rishikesh: {
    summary: 'Rishikesh is very walkable between the main ghats and bridges. Shared autos connect the main market to Laxman Jhula. For adventure sports, operators provide transport.',
    featured: ['walk','auto','bike','cab'],
    booking: {
      cab: { name:'Ola / Uber', url:'https://www.olacabs.com', note:'Cabs connect Rishikesh to Haridwar airport (₹600–800)' },
    }
  },
  manali: {
    summary: 'Within Manali, walking is the best option for the old village and market. Local taxis are plentiful for day trips to Rohtang Pass and Solang Valley.',
    featured: ['walk','cab','bike','bus'],
    booking: {
      cab: { name:'Himachal Taxi Union', url:'https://himachalpradesh.gov.in', note:'Fixed rates for Rohtang Pass (₹3,000–4,000 roundtrip) — book at stand' },
    }
  },
  ladakh: {
    summary: 'Ladakh is vast. Hire a local taxi or rent a Royal Enfield for epic road trips. Shared jeeps connect Leh to major valleys. Fly into Leh (Kushok Bakula Rimpochhe Airport) from Delhi or Srinagar.',
    featured: ['cab','bike','walk','bus'],
    booking: {
      cab: { name:'Leh Taxi Union', url:'https://lehtaxiunion.com', note:'Fixed rates for Pangong, Nubra, Khardung La — book a day ahead' },
    }
  },
  kerala: {
    summary: 'Houseboats are the iconic Kerala transport on the backwaters. KSRTC buses are reliable between cities. Auto-rickshaws and app cabs handle local rides efficiently.',
    featured: ['auto','bus','walk','cab'],
    booking: {
      cab: { name:'Kerala Tourism Cabs', url:'https://www.keralatourism.org', note:'Pre-book government-approved cabs for inter-city routes' },
    }
  },
  switzerland: {
    summary: 'Switzerland has Europe\'s most reliable rail network. The Swiss Travel Pass covers unlimited travel on trains, buses, boats, and most mountain railways — exceptional value.',
    featured: ['metro','walk','bike','cab'],
    booking: {
      metro: { name:'Swiss Travel Pass', url:'https://www.swisstravelsystem.com', note:'Consecutive-day or Flexi pass — book before arrival for best prices' },
      bike: { name:'PubliBike', url:'https://www.publibike.ch', note:'Bike sharing available in Zurich, Geneva, Bern, and Lausanne' },
    }
  },
  rome: {
    summary: 'Rome\'s historic centre is compact and best explored on foot. Metro Lines A & B cover major sites. Trams and buses fill the gaps. Taxis are metered from the airport.',
    featured: ['walk','metro','bus','cab'],
    booking: {
      metro: { name:'ATAC Roma', url:'https://www.atac.roma.it', note:'48hr or 72hr tourist passes include metro, bus & tram' },
      cab: { name:'itTaxi / FREE NOW', url:'https://www.ittaxi.it', note:'Use apps to avoid tourist-targeted overcharging' },
    }
  },
  hawaii: {
    summary: 'Rental cars are essential on most Hawaiian islands. Oahu has TheBus (public transport). Inter-island travel is by Hawaiian Airlines. Book rental cars well in advance.',
    featured: ['cab','bike','walk','bus'],
    booking: {
      cab: { name:'Alamo / Enterprise Rentals', url:'https://www.alamo.com', note:'Book rental cars months ahead — summer demand is very high' },
    }
  },
  alaska: {
    summary: 'Alaska requires careful transport planning. Bush planes reach remote areas. The Alaska Railroad connects Anchorage–Denali–Fairbanks. Rental cars for city exploration.',
    featured: ['cab','walk','bus','bike'],
    booking: {
      cab: { name:'Alaska Railroad', url:'https://www.alaskarailroad.com', note:'Scenic rail pass from Anchorage to Denali — book months ahead in summer' },
    }
  },
  amritsar: {
    summary: 'Amritsar\'s main sites are compact and walkable from the Golden Temple. E-rickshaws and cycle-rickshaws are the best way to explore the old city. Cabs connect to Wagah Border (28km).',
    featured: ['walk','auto','bike','cab'],
    booking: {
      cab: { name:'Ola / Uber', url:'https://www.olacabs.com', note:'Book a cab to Wagah Border — ₹400–600 one way; auto-rickshaws won\'t go that far' },
    }
  },
  ludhiana: {
    summary: 'Ludhiana is a large spread-out city. Auto-rickshaws handle local trips and city buses cover longer routes. App cabs are reliable. The railway junction connects to Delhi (4.5 hrs), Amritsar (2 hrs) and Chandigarh (1.5 hrs).',
    featured: ['auto','bus','cab','walk'],
    booking: {
      cab: { name:'Ola / Uber', url:'https://www.olacabs.com', note:'Cab hire for the day ₹1,200–1,800 is the most efficient way to see all sights' },
    }
  },
  jalandhar: {
    summary: 'Jalandhar is well-connected by NH-44. Auto-rickshaws and e-rickshaws cover local areas. The railway junction is one of Punjab\'s busiest. Cabs are ideal for the Kartarpur Corridor (48km away).',
    featured: ['auto','bus','cab','walk'],
    booking: {
      cab: { name:'Ola / Uber', url:'https://www.olacabs.com', note:'Book a cab for the Kartarpur Corridor pilgrimage — ₹800–1,200 roundtrip' },
    }
  },
  agra: {
    summary: 'Agra\'s key monuments are spread across the city. E-rickshaws and pre-paid autos are the best option near the Taj. Diesel vehicles are banned within 500m of the Taj Mahal to protect the marble. Book a cab for the Fatehpur Sikri day trip (40km).',
    featured: ['auto','walk','cab','bike'],
    booking: {
      cab: { name:'Ola / Uber', url:'https://www.olacabs.com', note:'Book a full-day cab (₹1,500–2,500) for Fatehpur Sikri + Sikandra + monuments tour' },
    }
  }
};

function getTransportData(cityKey) {
  const cityData = TRANSPORT_DATA[cityKey] || {};
  const base = TRANSPORT_DATA.default;
  const featured = cityData.featured || ['metro','cab','walk','bus'];
  const modes = base.modes.filter(m => featured.includes(m.id));
  const remaining = base.modes.filter(m => !featured.includes(m.id));
  return {
    summary: cityData.summary || base.summary,
    modes: [...modes, ...remaining],
    booking: cityData.booking || {}
  };
}
