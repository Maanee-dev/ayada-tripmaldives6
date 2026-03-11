import { ResortData } from './types';

export const ayadaData: ResortData = {
  id: 'ayada-maldives',
  name: 'Ayada Maldives',
  slug: 'ayada-maldives',
  atoll: 'Gaafu Dhaalu Atoll',
  price_range: '$$$$',
  rating: '5',
  short_description: 'A Multi-Award Winning Luxury Resort',
  description: 'Ayada Maldives is a luxury private island resort offering a truly luxurious retreat with a genuine Maldivian style. Located in the relatively unexplored Gaafu Dhaalu Atoll in the south of the country, which is famous for its pristine beaches and crystal clear shallow lagoons.',
  images: [
    'https://picsum.photos/seed/ayada1/1920/1080',
    'https://picsum.photos/seed/ayada2/1280/720',
    'https://picsum.photos/seed/ayada3/1280/720',
    'https://picsum.photos/seed/ayada4/1280/720',
    'https://picsum.photos/seed/ayada5/1280/720',
  ],
  features: ['Private Pools', 'Butler Service', 'Award-winning Spa', 'Surf Spot Nearby'],
  transfers: ['Domestic Flight + Speedboat'],
  meal_plans: ['Bed_and_Breakfast', 'Half_Board', 'Full_Board', 'Crystal_All_Inclusive'],
  uvp: 'Voted the "World\'s Leading Luxury Ocean View Resort" and "Indian Ocean\'s Leading Luxury Resort"',
  room_types: [
    {
      id: 'garden-villa',
      name: 'Garden Villa',
      size: '101 sqm',
      image: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1680344545031-LG6OKGX6EQNO33T96S7V/Garden+Villa+1.jpg?format=2500w',
      images: [
        'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1680344545031-LG6OKGX6EQNO33T96S7V/Garden+Villa+1.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1533283180231-1100ER779RL5L3HOOB3L/garden_villa2.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1680344545031-LG6OKGX6EQNO33T96S7V/Garden+Villa+1.jpg?format=2500w'
      ],
      capacity: '2 Adults + 1 Child',
      description: 'Nestled in the lush tropical gardens, these villas offer a private sanctuary with a spacious veranda and a private pool.',
      map_url: 'https://www.google.com/maps/embed?pb=!4v1533289297040!6m8!1m7!1sCAoSLEFGMVFpcE4xeGIyUDBHZVBwZ3dQdXVEVVhpdjEtYTBwRUxQOGdHNGhtanF6!2m2!1d0.2764119336230769!2d73.3558128563991!3f77.65!4f1.2999999999999972!5f0.5970117501821992'
    },
    {
      id: 'beach-villa',
      name: 'Beach Villa with Pool',
      size: '103 sqm',
      image: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1532678056046-2I393HL258IGMVG5LB7Z/351bbf9b32ea226d4294d111dad38ed0.jpg?format=2500w',
       images: [
        'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1532678062056-MBU0DEZ6A5O7SJB6DTSC/beach-villas-img4.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1532678097920-UBU3UWXGCMG3SVO79R7D/Ayada-Maldives-villas-BEACH-VILLA-1.jpg?format=2500w'
      ],
      capacity: '2 Adults + 1 Child',
      description: 'Located directly on the beach, these villas feature a private pool and a large outdoor bathroom with a bathtub and rain shower.',
      map_url: 'https://www.google.com/maps/embed?pb=!4v1533289383476!6m8!1m7!1sCAoSLEFGMVFpcFBWRDQ0SWwzTEtBTENwQVh3M3F2bXZNNmJjQ0YzSUE2UGxGR2d2!2m2!1d0.2776306007460441!2d73.35778663788881!3f265.05!4f-14.480000000000004!5f0.5970117501821992'
    },
   {
      id: 'beach-suite',
      name: 'Beach suite with pool',
      size: '115 sqm',
      image: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1534935258602-B5QKG7F1TYECM2I6I6KD/Ayada+Maldives+Villas+BEACH+SUITE+%282%29.jpg?format=2500w',
       images: [
        'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1534935258020-KA8SFV40EG1JHPQBR4G0/Ayada+Maldives+Villas+BEACH+SUITE+%283%29.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1533282713836-BQ7JU7T2AT32W85JFOZQ/sbs1.jpg?format=2500w'
      ],
      capacity: '3 adults or 2 adults + 2 children',
      description: 'Located on beautiful white sand beaches. Large bedroom, spacious veranda with sunbeds, plunge pool in private garden. Ideal for families or couples preferring larger living space. Bathroom with bathtub and large back courtyard with outdoor shower.',
      map_url: 'https://www.google.com/maps/embed?pb=!4v1533289383476!6m8!1m7!1sCAoSLEFGMVFpcFBWRDQ0SWwzTEtBTENwQVh3M3F2bXZNNmJjQ0YzSUE2UGxGR2d2!2m2!1d0.2776306007460441!2d73.35778663788881!3f265.05!4f-14.480000000000004!5f0.5970117501821992'
    },
      {
      id: 'sunset-beach-suite',
      name: 'Sunset Beach Suite with Pool',
      size: '137 sqm',
      image: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1533282363375-VBLFVYO1PKXVFL7OICJU/Ayada+Maldives+villas+SUNSET+BEACH+SUITE+%282%29.jpg?format=2500w',
       images: [
        'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1533282498207-BX02S40S9F76XNHUWYZJ/sbs2.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1533282548114-JZ82R9XKLZF9REYWO5NB/sbs5.jpg?format=2500w'
      ],
      capacity: '3 adults or 2 adults + 2 children',
      description: 'Spacious beachfront suites with large living space, indoor and outdoor shower, spacious outdoor terrace, secluded garden with private pool and direct beach access. Located where sunsets are most beautiful.',
      map_url: 'https://www.google.com/maps/embed?pb=!4v1533289588819!6m8!1m7!1sCAoSLEFGMVFpcFBob0o0MmFqaWNrZEtYQlY5OTBPYkFnM200b2lwLWlVMVNqU3VS!2m2!1d0.2774525621663824!2d73.35787217292955!3f269.77!4f-5.069999999999993!5f0.5970117501821992'
    },
        {
      id: 'sunset-lagoon-suite',
      name: 'Sunset Lagoon Suite with Pool',
      size: '156 sqm',
      image: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1533275941818-K7CI7DFL3EAP99UKCVRJ/Ayada+Maldives+villas+SUNSET+LAGOON+SUITE+%281%29.jpg?format=2500w',
       images: [
        'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1533276224141-XNPEP2EQJH6H4TJSJWTJ/Ayada+Maldives+Sunset+Lagoon+Suite+Pool.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1533275995361-SCI91SCA3OE8YY2SNWU1/Ayada+Maldives+villas+SUNSET+LAGOON+SUITE+%282%29.jpg?format=2500w'
      ],
      capacity: '3 adults or 2 adults + 2 children',
      description: 'Resting on land with outdoor terrace over ocean, combining tropical garden with magical lagoon view. Large area encompassing living and bedroom area with bathroom opening into private garden. Outdoor terraces with plush swing sofas, plunge pool, direct lagoon access.',
      map_url: 'src="https://www.google.com/maps/embed?pb=!4v1533289849094!6m8!1m7!1sCAoSLEFGMVFpcFAtSkpQMDhUZTFoSGZaWE83QzFaU2pPLXdSUFU0aFZNTlhRMWI4!2m2!1d0.2825091893138589!2d73.35602034072963!3f66.10501662467122!4f-7.08734222006801!5f0.7820865974627469"'
    },
           {
      id: 'ocean-villa-with-pool',
      name: 'Ocean Villa with Pool',
      size: '108 sqm',
      image: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1533282066069-145RDAGJ0I93OL2TLZLM/Ayada+Maldives+villas+OCEAN+VILLA+%283%29.jpg?format=2500w',
       images: [
        'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1614936160673-42JMHW0UPYDLSD5BNVEY/Ayada_Maldives059.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1533282064585-ULINSXG87E3D7UO8JD6F/Ayada+Maldives+villas+OCEAN+VILLA+bathroom.jpg?format=2500w'
      ],
      capacity: '2 adults + 1 child',
      description: 'Poised over lagoon, allowing idyllic contemplation while lounging on ocean hammocks. Spacious villa with private outdoor terrace, ocean hammocks, plunge pool, uninterrupted view of horizon and direct lagoon access.',
      map_url: 'https://www.google.com/maps/embed?pb=!4v1533289716797!6m8!1m7!1sCAoSLEFGMVFpcFBranNDOU5GMTdLR3VVS041WTJMTUNNblFTa29Kam5ILWVWNmRO!2m2!1d0.2783142904663271!2d73.3553233862674!3f279.7660406309005!4f-5.452429267719509!5f0.7820865974627469'
    }, 
               {
      id: 'sunset-ocean-suite-with-pool',
      name: 'Sunset Ocean Suite with Pool',
      size: '172 sqm',
      image: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1533275638438-UBGTNUUSBGX41U5GN9W2/Ayada+Maldives+villas+SUNSET+OCEAN+SUITE+%281%29.jpg?format=2500w',
       images: [
        'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1533275629506-W4UVASMFP83IH8GB85ND/Ayada+Maldives+villas+SUNSET+OCEAN+SUITE+%283%29.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1533275670463-UP6TMV2IBEQP2KW5MU01/Ayada+Maldives+villas+SUNSET+OCEAN+SUITE+%286%29.jpg?format=2500w'
      ],
      capacity: '4 adults or 2 adults + 3 children',
      description: 'Over-water suite offering absolute luxury and serenity over Indian Ocean. Master bedroom with private bathroom, living area with glass floor panel, additional bathroom and pantry area, huge sundeck with ocean hammocks, direct lagoon access and infinite horizon views.',
      map_url: 'https://www.google.com/maps/embed?pb=!4v1534325321699!6m8!1m7!1sCAoSLEFGMVFpcE5XQkJmcVR1cEJUMXYwdjJHU2pfZHdkbEh3TXk5c1NhRGJEWE5I!2m2!1d0.2829964714818609!2d73.35404793152657!3f24.88!4f-2.1200000000000045!5f0.5970117501821992'
    }, 
                   {
      id: 'sunset-lagoon-suite-two-bedroom',
      name: 'Sunset Lagoon Suite with Two Bedrooms',
      size: '172 sqm',
      image: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1614852992200-DJR7M9LI1CEN88WBFJVZ/Ayada_Maldives059.jpg?format=2500w',
       images: [
        'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1533275995361-SCI91SCA3OE8YY2SNWU1/Ayada+Maldives+villas+SUNSET+LAGOON+SUITE+%282%29.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1748930065404-9DIKJJCC1YVO5PO5ZYNK/Ayada+Maldives+Sunset+Lagoon+Suite+Pool+2.jpg?format=2500w'
      ],
      capacity: '4 adults or 2 adults + 3 children',
      description: 'Ideal for families with older children. Two bedrooms (one with two single beds and shower room, master with en suite full bathroom). Huge sun deck with dining table, over-water hammocks, private pool, sun loungers, daybed and steps into ocean. Floor-to-ceiling windows with direct terrace access.',
      map_url: 'https://www.google.com/maps/embed?pb=!4v1533289849094!6m8!1m7!1sCAoSLEFGMVFpcFAtSkpQMDhUZTFoSGZaWE83QzFaU2pPLXdSUFU0aFZNTlhRMWI4!2m2!1d0.2825091893138589!2d73.35602034072963!3f66.10501662467122!4f-7.08734222006801!5f0.7820865974627469'
    },

                  {
      id: 'family-beach-suite-with-pool',
      name: 'Family Beach Suite with Pool',
      size: '172 sqm',
      image: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1534935258602-B5QKG7F1TYECM2I6I6KD/Ayada+Maldives+Villas+BEACH+SUITE+%282%29.jpg?format=2500w',
       images: [
        'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1748939626271-MAF99WQ1X8WI4ON70O0P/Ayada+Maldives+Villas+BEACH+SUITE+%281%29.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1533282713836-BQ7JU7T2AT32W85JFOZQ/sbs1.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1543397802038-100SRTC1OS9SPMR2445Z/Ayada_Maldives139.jpg?format=2500w'
      ],
      capacity: '4 adults or 2 adults + 2 children',
      description: 'Beach Family Suites are Beach Suites interconnected with a Beach Villa, ensuring family privacy and direct access when needed. Tropical vegetation screens private pool with sun terrace, loungers, umbrella, outdoor dining table. Indoors, king-sized canopy beds, spacious bathroom with twin sinks, indoor and outdoor showers, huge terrazzo bathtub.',
      map_url: 'https://www.google.com/maps/embed?pb=!4v1533289588819!6m8!1m7!1sCAoSLEFGMVFpcFBob0o0MmFqaWNrZEtYQlY5OTBPYkFnM200b2lwLWlVMVNqU3VS!2m2!1d0.2774525621663824!2d73.35787217292955!3f269.77!4f-5.069999999999993!5f0.5970117501821992'
    }, 
                  {
      id: 'ayada-royal-ocean-suite',
      name: 'Ayada Royal Ocean Suite',
      size: '318 sqm',
      image: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1748949151245-H9IU4A2GERX07BDBV3OT/IMG_4292.jpg?format=2500w',
       images: [
        'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1533274181255-U37GR1PNTQ7FSAHUDSP4/Ayada+Maldives+Villas+ROYAL+OCEAN+SUITE+%286%29.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1533274084262-W40W2YRI40EBQZ9UDDFO/Ayada+Maldives+Villas+ROYAL+OCEAN+SUITE+%282%29.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1533274244866-13HPCBJO6G2I2IVLNH3M/Ayada+Maldives+Villas+ROYAL+OCEAN+SUITE+%288%29.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1533274238576-KUKA9607QSD0FAGHWXRI/Ayada+Maldives+Villas+ROYAL+OCEAN+SUITE+%287%29.jpg?format=2500w'
      ],
      capacity: '4 adults or 2 adults + 2 children',
      description: 'Beach Family Suites are Beach Suites interconnected with a Beach Villa, ensuring family privacy and direct access when needed. Tropical vegetation screens private pool with sun terrace, loungers, umbrella, outdoor dining table. Indoors, king-sized canopy beds, spacious bathroom with twin sinks, indoor and outdoor showers, huge terrazzo bathtub.',
      map_url: 'https://www.google.com/maps/embed?pb=!4v1564130297527!6m8!1m7!1sCAoSLEFGMVFpcE5MVmFET2FEYTA2SDlwNThGUk1JUnRmNmxkVTdsTnRSTWlsU2NK!2m2!1d0.2830082828995951!2d73.35353217706563!3f136!4f0!5f0.4125900490817119'
    }, 

  ],
  dining_venues: [
    {
      id: 'magu',
      name: 'Magu',
      image: 'https://picsum.photos/seed/magu/800/600',
      cuisine: 'International Buffet',
      highlights: ['Live Cooking Stations', 'Themed Nights', 'Beachfront Dining'],
      description: 'The main restaurant offering a lavish buffet for breakfast and dinner with a different theme every night.'
    },
    {
      id: 'ocean-breeze',
      name: 'Ocean Breeze',
      image: 'https://picsum.photos/seed/breeze/800/600',
      cuisine: 'Modern European',
      highlights: ['Overwater Setting', 'Sunset Views', 'Fine Dining'],
      description: 'An elegant overwater restaurant and bar offering a sophisticated dining experience with stunning views.'
    },
    {
      id: 'kai',
      name: 'Kai',
      image: 'https://picsum.photos/seed/kai/800/600',
      cuisine: 'Far East Asian',
      highlights: ['Sushi Bar', 'Teppanyaki', 'Tropical Setting'],
      description: 'Experience the flavors of the Far East in a beautiful tropical setting.'
    }
  ],
  activities: [
    {
      id: 'house-reef-snorkeling',
      name: 'Private House Reef Snorkeling',
      category: 'Nature',
      image: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1601714583995-SYJVM31NQE8929Y5KTLH/_AGU1570.jpg?format=2500w',
      description: 'The house reef is one of the best in the country. Let the resort guides take you to explore its beauty.',
      details: ['1 Hour duration', '1 guide for 2 guests', 'Equipment provided'],
      duration: '1 Hour',
      priceRange: '$75/pp'
    },
    {
      id: 'sunset-fishing',
      name: 'Fishing at Sunset',
      category: 'Excursion',
      image: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1601808385538-AEBKLIAW1W2ZH1N37A5H/sunset+cruise.jpg?format=2500w',
      description: 'Take a traditional Maldivian wooden boat and try your hand at traditional Maldivian fishing as we set sail before sunset. If you’re lucky, our chef will prepare your catch for you tomorrow.',
      details: ['2 Hours duration', 'Traditional Dhoni boat', 'Catch preparation available'],
      duration: '2 Hours',
      priceRange: '$75/pp'
    },
    {
      id: 'glass-bottom-boat',
      name: 'Glass-Bottomed Boat Tour',
      category: 'Excursion',
      image: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1601713523097-QXXY418CTTSPK9KTM7J0/image-asset.jpeg?format=2500w',
      description: 'See the sights of the undersea world from the breezy comfort of the resort\'s glass bottomed boat as they take you for a drive above the beautiful coral reefs.',
      details: ['1 Hour duration', 'Max 6 persons', 'Perfect for non-swimmers'],
      duration: '1 Hour',
      priceRange: '$120'
    },
    {
      id: 'deserted-island-picnic',
      name: 'Deserted Island Picnic',
      category: 'Excursion',
      image: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1601713728638-FF1S7ZURZJCGA6MGI603/_GPX0011.jpg?format=2500w',
      description: 'Let the resort team take you to a nearby deserted island for a romantic Robinson Crusoe experience you’ll treasure forever.',
      details: ['3 Hours duration', 'Gourmet picnic included', 'Private experience'],
      duration: '3 Hours',
      priceRange: '$550'
    },
    {
      id: 'local-island-visit',
      name: 'Local Island Visit',
      category: 'Excursion',
      image: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1601713941054-69BK6P8PZIRV762Q5LM6/DJI_0984.jpg?format=2500w',
      description: 'See what life is like on a real Maldivian island. This adventure starts at a traditional local village where you can immerse yourself in the local community.',
      details: ['Cultural experience', 'Fresh coconut included', 'Guided tour'],
      duration: 'Half Day'
    },
    {
      id: 'sandbank-experience',
      name: 'Sandbank Experience',
      category: 'Excursion',
      image: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1601714727123-OXVD7H3NXL21AQGODF7U/DSC03065.jpg?format=2500w',
      description: 'Enjoy either a picnic or dinner experience on a nearby Sandbank. Relax and enjoy unspoilt natural beauty being alone on a tiny island.',
      details: ['2.5 Hours duration', 'Picnic or Dinner', 'Unspoilt beauty'],
      duration: '2.5 Hours',
      priceRange: '$550'
    },
    {
      id: 'island-safari',
      name: 'Island Safari',
      category: 'Nature',
      image: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1601714315629-6LKZE9RIH7NK4SAV9164/Dhoni_Island.jpg?format=2500w',
      description: 'Find out for yourself why the resort has a worldwide reputation for amazing coral reefs as they take you snorkeling to two of their favorite sites.',
      details: ['2 locations', 'Guided snorkeling', 'Equipment included'],
      duration: '3 Hours',
      priceRange: '$150/pp'
    },
    {
      id: 'dolphin-spotting',
      name: 'Dolphin Spotting Trip',
      category: 'Excursion',
      image: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1601808417964-SQYUCZG8T4MF5I2I1R5F/dolphins.jpg?format=2500w',
      description: 'The resort team heads out to join their neighbors in the ocean, the spinner dolphins to see them play and leap.',
      details: ['2 Hours duration', 'High sighting rate', 'Refreshments included'],
      duration: '2 Hours',
      priceRange: '$99/pp'
    }
  ],
  spa_treatments: [
    {
      id: 'turkish-hammam',
      name: 'Authentic Turkish Hammam',
      category: 'Wellness',
      duration: '60 / 90 mins',
      description: 'A traditional cleansing ritual that leaves your skin soft and your mind at peace.',
      benefits: ['Deep cleansing', 'Improved circulation', 'Total relaxation'],
      image: 'https://picsum.photos/seed/spa1/800/600'
    },
    {
      id: 'maldivian-massage',
      name: 'Signature Maldivian Massage',
      category: 'Massage',
      duration: '60 / 90 mins',
      description: 'Using local coconut oil and traditional techniques to soothe tired muscles.',
      benefits: ['Muscle relief', 'Hydrating', 'Stress reduction'],
      image: 'https://picsum.photos/seed/spa2/800/600'
    }
  ],
  wedding_packages: [
    {
      id: 'beach-wedding',
      name: 'Barefoot Beach Wedding',
      description: 'A romantic ceremony on the white sandy shores under a floral canopy.',
      inclusions: ['Ceremony coordinator', 'Floral decorations', 'Champagne toast', 'Traditional Bodu Beru drummers'],
      image: 'https://picsum.photos/seed/wedding1/800/600'
    }
  ]
};
