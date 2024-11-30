const sampleListings = [
  {
    title: "Seaside Serenity Villa",
    description:
      " Nestled along the pristine coastline, this luxurious villa offers breathtaking views of the Arabian Sea. Featuring spacious bedrooms, a private infinity pool, and direct access to a secluded beach, it’s the perfect escape for those seeking tranquility and elegance. Enjoy evening strolls on the sand, relax in the lush garden, or indulge in local seafood delicacies at nearby coastal restaurants.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-1208478853883571250/original/03aef6b8-3992-463d-94ca-2422c2d82757.jpeg?im_w=720&im_format=avif",
    },
    price: 30000,
    location: "Goa",
    country: " India",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      " Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-984786254699522803/original/f85b7184-7428-47fa-a41d-8b5dbc9a8eda.jpeg?im_w=720&im_format=avif",
    },
    price: 45000,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat Cabin",
    description:
      " Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1065989580566097661/original/f66debd2-223b-49ba-b458-3168c123fc9b.jpeg?im_w=720&im_format=avif",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      " Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/9533b6e3-a37e-4346-98d8-baeb58fc7718.jpg?im_w=720&im_format=avif",
    },
    price: 25500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise  Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/eab913c1-5f28-4d45-841b-0797378216e4.jpg?im_w=720&im_format=avif",
    },
    price: 88000,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      " Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-908611595823138745/original/e2ea2ccc-df2a-4e49-b81d-a508508aae02.jpeg?im_w=720&im_format=avif",
    },
    price: 20000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      " Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-715042081842800060/original/6e77a6a7-008c-41d5-bc2d-e4bc7ffbb823.jpeg?im_w=720&im_format=avif",
    },
    price: 90000,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      " Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1235628139520552085/original/bc7be6b7-7fcb-442d-8cae-9491f0d3025f.jpeg?im_w=720&im_format=avif",
    },
    price: 83500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps. Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/7d60dfe0-60b4-4c9a-98e8-5cc18637d777.jpg?im_w=720&im_format=avif",
    },
    price: 63000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      " Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/ml/photo_enhancement/pictures/b5578ff1-b361-4206-b3d6-e789e2f1f288.jpg?im_w=720&im_format=avif",
    },
    price: 64000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Historic Canal House",
    description:
      " Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/ml/photo_enhancement/pictures/89565da2-41b0-443f-84a6-62930398d3cd.jpg?im_w=720&im_format=avif",
    },
    price: 141800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    description:
      " Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-944991643902274568/original/5781132a-1a78-4762-8f22-ecd151035623.jpeg?im_w=720&im_format=avif",
    },
    price: 10040,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      " Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-790339765440041647/original/4a70b2af-7de0-4f34-9264-066ea1ff5845.jpeg?im_w=720&im_format=avif",
    },
    price: 13200,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      " Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting.Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-1282336331218799848/original/37d989f7-4942-4c6a-8a19-15e67de7e0d9.jpeg?im_w=720&im_format=avif",
    },
    price: 42200,
    location: "Boston",
    country: "United States",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      " Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-1079743415735990041/original/8be1840f-721f-4a4e-8ac4-741f56043256.jpeg?im_w=720&im_format=avif",
    },
    price: 18000,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      " Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting.Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/8efb200c-6dcb-460d-a367-caa511506077.jpg?im_w=720&im_format=avif",
    },
    price: 85000,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step  Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting. into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/ml/photo_enhancement/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=720&im_format=avif",
    },
    price: 86600,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape  Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting. to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/f7f79d47-7d08-4b2d-acaa-8117736b6c7b.jpg?im_w=720&im_format=avif",
    },
    price: 83000,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live  Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting. like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-713793474951553871/original/2ac03203-3d06-441c-bc82-77f28ac26c6a.jpeg?im_w=720&im_format=avif",
    },
    price: 48000,
    location: "Scottish Highlands",
    country: "United Kingdom",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private  Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting. pool.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/1587524e-f8f5-4c20-8507-c809dffda998.jpg?im_w=720&im_format=avif",
    },
    price: 50000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug  Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting.and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1169286884178002264/original/2cd1ddaa-294d-40b3-b093-4bc91525a357.jpeg?im_w=720&im_format=avif",
    },
    price: 110000,
    location: "Montana",
    country: "United States",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the  Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting. crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/337660c5-939a-439b-976f-19219dbc80c7.jpg?im_w=720&im_format=avif",
    },
    price: 25000,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse  Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting. nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/ml/photo_enhancement/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTgwMTA4OTIxNDU1NDcwODMz/original/a33eeb62-a82c-4424-9016-99e9164bd815.jpeg?im_w=720&im_format=avif",
    },
    price: 75000,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting. the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/108c1e02-aa40-40e4-aa14-c7bb52dacdbc.jpg?im_w=720&im_format=avif",
    },
    price: 160044,
    location: "Charleston",
    country: "United States",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo  Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting.from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/ml/photo_enhancement/pictures/2c0f4b90-e315-4f30-bf1e-8ea885e75948.jpg?im_w=720&im_format=avif",
    },
    price: 20000,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend you Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting.r days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-53356466/original/f353fb80-0915-40ab-8032-6bc810ac273e.jpeg?im_w=720&im_format=avif",
    },
    price: 72000,
    location: "New Hampshire",
    country: "United States",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge  Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting. in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-53519419/original/f0f0a291-65a9-442b-9036-45b7e5e25676.jpeg?im_w=720&im_format=avif",
    },
    price: 60000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the  Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting. slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-1196451576617675144/original/ccda7793-d09d-40f6-aa13-40f1ebc19759.jpeg?im_w=720&im_format=avif",
    },
    price: 40000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to  Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting. a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/47a239d9-3739-4f32-ae97-3c706ec23d7e.jpg?im_w=720&im_format=avif",
    },
    price: 18000,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and  Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting. easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-1041398366372889590/original/37eec4e5-40fe-4167-a296-7db08ac68d9f.jpeg?im_w=720&im_format=avif",
    },
    price: 85000,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views  Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting. and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/b87046c6-c860-4469-87b5-62b5201f2310.jpg?im_w=720&im_format=avif",
    },
    price: 80500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views  Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting. and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/9f028184-f893-4789-9b09-6739274ee7a2.jpg?im_w=720&im_format=avif",
    },
    price: 10500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views a Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting.nd easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-681506574120137388/original/b2a2d280-e39d-42d3-8499-e32bc96729a0.jpeg?im_w=720&im_format=avif",
    },
    price: 15000,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and  Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting. easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-680047698365743252/original/509a4a27-0932-4dbe-97eb-5102f9ef4aab.jpeg?im_w=720&im_format=avif",
    },
    price: 31500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escap Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting.e to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTc1MTA2ODgwNDI5NjA2MDkw/original/a20799ad-10fb-4546-bdbd-9f38073fd54d.jpeg?im_w=720&im_format=avif",
    },
    price: 61500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escap Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting.e to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/a187513d-fc2d-43ce-9dac-32811514a8fb.jpg?im_w=720&im_format=avif",
    },
    price: 89500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting. to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/d81912fe-74bd-4574-92c8-f560320d4ef1.jpg?im_w=720&im_format=avif",
    },
    price: 150055,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to  Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting.this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-629505065235913525/original/2802fad6-7498-4dde-824a-dc269946db29.jpeg?im_w=720&im_format=avif",
    },
    price: 66500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting. to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-1052596389405709924/original/92e366ff-b139-44ee-a6f0-b41622fb30e5.jpeg?im_w=720&im_format=avif",
    },
    price: 11500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting. to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/47d64566-d90a-4555-aff0-de925930897f.jpg?im_w=720&im_format=avif",
    },
    price: 88500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting. to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-730701464294551671/original/54399689-139d-45d1-8aca-aecd99b8e4e1.jpeg?im_w=720&im_format=avif",
    },
    price: 55500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting. to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-1063712572252279192/original/c91edc2a-8db5-4661-b7d0-d3f6cf50dc56.jpeg?im_w=720&im_format=avif",
    },
    price: 77500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting. to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/4e49d645-045e-474d-8fbe-f5cc4721d0b0.jpg?im_w=720&im_format=avif",
    },
    price: 44500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting. to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-740794570290746812/original/8dbab716-dbe3-44f8-b3cf-d5fc55facc2b.jpeg?im_w=720&im_format=avif",
    },
    price: 55500,
    location: "Malibu",
    country: "United States",
  },

  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting. to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-643572739930449226/original/de03ed31-8557-4e35-af49-3f7292054e49.jpeg?im_w=720&im_format=avif",
    },
    price: 15400,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape  Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting.to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-1249782926113604395/original/c68432ce-519b-46fc-afa2-35987cb7a722.jpeg?im_w=720&im_format=avif",
    },
    price: 41500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escap Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting.e to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-696847375839509250/original/74c47993-1eda-4726-b9ee-d485bc53bc4d.jpeg?im_w=720&im_format=avif",
    },
    price: 150000,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and e Perched in the serene hills of Manali, this cozy wooden cabin provides a perfect blend of rustic charm and modern comfort. Wake up to panoramic views of the snow-capped Himalayas and enjoy the warmth of the indoor fireplace on chilly evenings. The property includes hiking trails, outdoor decks, and nearby access to adventure sports like paragliding and river rafting.asy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-1070696735628222726/original/2c7862d0-de16-45be-b580-164944ec402c.jpeg?im_w=720&im_format=avif",
    },
    price: 99500,
    location: "Malibu",
    country: "United States",
  },
];

module.exports = { data: sampleListings };
