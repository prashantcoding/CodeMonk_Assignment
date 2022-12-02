const products = [
  {
    id: 1,
    name: "Earphones",
    price: 12690,
    imageUrl:
      "https://res.cloudinary.com/derkfut8m/image/upload/v1669913970/codemonk/Earphone_glfrok.png",
    desc: "Silver",
    qty: 1,
  },
  {
    id: 2,
    tagline: "200 Cash back",
    name: "Test 6X",
    price: 14000,
    imageUrl:
      "https://res.cloudinary.com/derkfut8m/image/upload/v1669913974/codemonk/phone_l3vlpi.png",
    desc: "32GB Gold \n\n Extended Warranty",
    planLink: "http://pointstonothing.com/linktoplan",
    gift: {
      name: "Glory Selfie Stick",
      desc: "Silver Moon",
      price: 175,
    },
    qty: 1,
  },
  {
    id: 3,
    name: "Test 6X",
    price: 18000,
    imageUrl:
      "https://res.cloudinary.com/derkfut8m/image/upload/v1669913974/codemonk/phone_l3vlpi.png",
    desc: "64GB Gold \n\n Extended Warranty",
    planLink: "http://pointstonothing.com/linktoplan",
    gift: {
      name: "Glory Selfie Stick",
      desc: "Silver Moon",
      price: 175,
    },
    qty: 1,
  },
  {
    id: 4,
    tagline: "100 Cash back",
    name: "Earphones",
    price: 11690,
    imageUrl:
      "https://res.cloudinary.com/derkfut8m/image/upload/v1669913970/codemonk/Earphone_glfrok.png",
    desc: "White",
    qty: 1,
  },
  {
    id: 5,
    name: "Earphones",
    price: 11690,
    imageUrl:
      "https://res.cloudinary.com/derkfut8m/image/upload/v1669913970/codemonk/Earphone_glfrok.png",
    desc: "Orange",
    qty: 1,
  },
  {
    id: 6,
    name: "Test 5X",
    price: 10000,
    imageUrl:
      "https://res.cloudinary.com/derkfut8m/image/upload/v1669913974/codemonk/phone_l3vlpi.png",
    desc: "32GB Gold",
    qty: 1,
  },
];

const pincode = [
  {
    id: 560066,
    deliveryPrice: 50,
    cashOnDelivery: false,
    estimatedDays: {
      min: 2,
      max: 5,
    },
  },
  {
    id: 560067,
    deliveryPrice: 0,
    cashOnDelivery: true,
    estimatedDays: {
      min: 3,
      max: 5,
    },
  },
  {
    id: 560068,
    deliveryPrice: 0,
    cashOnDelivery: false,
    estimatedDays: {
      min: 5,
      max: 5,
    },
  },
];
const discount = {
  minTotal: 5000,
  discountPercentage: 10,
};

export { products, discount, pincode };
