export const categories = [
  {
    label: "Beach",
    icon: "TbBeach",
    description: "This property is close to the beach!",
  },
  {
    label: "Windmills",
    icon: "GiWindmill",
    description: "This property is has windmills!",
  },
  {
    label: "Modern",
    icon: "MdOutlineVilla",
    description: "This property is modern!",
  },
  {
    label: "Countryside",
    icon: "TbMountain",
    description: "This property is in the countryside!",
  },
  {
    label: "Pools",
    icon: "TbPool",
    description: "This is property has a beautiful pool!",
  },
  {
    label: "Islands",
    icon: "GiIsland",
    description: "This property is on an island!",
  },
  {
    label: "Lake",
    icon: "GiBoatFishing",
    description: "This property is near a lake!",
  },
  {
    label: "Skiing",
    icon: "FaSkiing",
    description: "This property has skiing activies!",
  },
  {
    label: "Castles",
    icon: "GiCastle",
    description: "This property is an ancient castle!",
  },
  {
    label: "Caves",
    icon: "GiCaveEntrance",
    description: "This property is in a spooky cave!",
  },
  {
    label: "Camping",
    icon: "GiForestCamp",
    description: "This property offers camping activities!",
  },
  {
    label: "Arctic",
    icon: "BsSnow",
    description: "This property is in arctic environment!",
  },
  {
    label: "Desert",
    icon: "GiCactus",
    description: "This property is in the desert!",
  },
  {
    label: "Barns",
    icon: "GiBarn",
    description: "This property is in a barn!",
  },
  {
    label: "Lux",
    icon: "IoDiamond",
    description: "This property is brand new and luxurious!",
  },
] as const;
const amenities = [
  {
    label: "TV",
    description: "this place has TV",
  },
  {
    label: "Wifi",
    description: "this place has Wifi",
  },
  {
    label: "Kitchen",
    description: "this place has Kitchen",
  },
  {
    label: "Pets allowed",
    description: "pets are always welcome",
  },
  {
    label: "Smoking allowed",
    description: "this palce alowed smoking",
  },
  {
    label: "Washer",
    description: "this palce provides washing machine",
  },
  {
    label: "Hot wate",
    description: "this palce provides boiler for hot water",
  },
  {
    label: "Refrigerator",
    description: "this palce provides Refrigerator",
  },
  {
    label: "AC",
    description: "this palce provides air conditioning",
  },
  {
    label: "pool",
    description: "shared outdoor pool",
  },
] as const;

export const seedCtg = async () => {
  try {
    const ctgPrm = categories.map((ctg) => {
      return prisma?.category.create({
        data: {
          description: ctg.description,
          icon: ctg.icon,
          label: ctg.label,
        },
      });
    });
    const res = await Promise.allSettled(ctgPrm);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const seedAmenities = async () => {
  try {
    const amnPrm = amenities.map((amn) => {
      return prisma?.amenitiy.create({
        data: {
          description: amn.description,
          label: amn.label,
        },
      });
    });

    const res = await Promise.allSettled(amnPrm);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
