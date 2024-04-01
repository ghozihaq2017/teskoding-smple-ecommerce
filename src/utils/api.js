const api = (() => {
  // Data statis products
  const products = [
    {
      id: 1,
      title: 'DWP XV Garuda Barong Black Cuban Shirt',
      price: 600000,
      category: 'Shirts',
      description:
        'DWP XV Garuda Barong Black Shirt, designed by Monstore for official merchandise Djakarta Warehouse Project. Shirts made for unisex using high quality manual printed cotton rayon fabric.',
      imageUrl:
        'https://monstore-sos-ecom.s3-ap-southeast-1.amazonaws.com/images/productthumbnail/d40be08433c7ff0f40252e65a52e06c76ce690be.jpg',
    },
    {
      id: 2,
      title: 'New World Disorder Black Cuban',
      price: 499000,
      category: 'Shirts',
      description:
        "New World Disorder Black Cuban Shirt, designed by Monstore from New Fictional Temptation collection. Oversized cutting t-shirt made for unisex with high quality screen printing and rayon cotton. We're choosing the best quality material for daily use. Men Model's height 178cm wearing size L and Women Model's height 163cm wearing size S.",
      imageUrl:
        'https://monstore-sos-ecom.s3-ap-southeast-1.amazonaws.com/images/productthumbnail/a100f79d7f6677904630d24c2823443224595685.jpg',
    },
    {
      id: 3,
      title: 'DWP XV Monographic Off White Tee',
      price: 400000,
      category: 'Tees',
      description:
        "DWP XV Monographic Off White Tee designed by Monstore for Djakarta Warehouse Project 2023 Official Merchandise. Using high quality cotton combed 24's with screen printing technique. Made for unisex. *Line up on merch are subject to change.",
      imageUrl:
        'https://monstore-sos-ecom.s3-ap-southeast-1.amazonaws.com/images/productthumbnail/3a0a04a7c55194787e6b2e36ee5bf16ce4136035.jpg',
    },
    {
      id: 4,
      title: 'DWP XV Save Tonight Navy Tee',
      price: 400000,
      category: 'Tees',
      description:
        "DWP XV Save Tonight Navy Tee designed by Monstore for Djakarta Warehouse Project 2023 Official Merchandise. Using high quality cotton combed 24's with screen printing technique. Made for unisex.",
      imageUrl:
        'https://monstore-sos-ecom.s3-ap-southeast-1.amazonaws.com/images/productthumbnail/abc00d93cdae5f5b57e4406112ee47c2e00db098.jpg',
    },
    {
      id: 5,
      title: 'WAGMI Grey Hoodie',
      price: 18.49,
      category: 'Hoodies & Sweaters',
      description:
        "WAGMI Grey Hoodie, designed by Monstore from New Fictional Temptation collection. Oversized cutting t-shirt made for unisex with high quality screen printing and fleece material. We're choosing the best quality material for daily use. Men Model's height 178cm wearing size L and Women Model's height 163cm wearing size S.",
      imageUrl:
        'https://monstore-sos-ecom.s3-ap-southeast-1.amazonaws.com/images/productthumbnail/ce352b2f5f6de474535306eaefac3ed808cf7321.jpg',
    },
    {
      id: 6,
      title: 'WAGMI Colour Block Cardigan',
      price: 549000,
      category: 'Outerwears',
      description:
        "WAGMI Colour Block Cardigan, designed by Monstore from New Fictional Temptation collection. Knitted cardigan using acrilic yarn. We're choosing the best quality material for daily use.Men Model's height 178cm wearing size L and Women Model's height 163cm wearing size L.",
      imageUrl:
        'https://monstore-sos-ecom.s3-ap-southeast-1.amazonaws.com/images/productthumbnail/acade4f8b603bd8257c69550b1cc815057728343.jpg',
    },
    {
      id: 7,
      title: 'DWP XV Angels Crop Tee',
      price: 400000,
      category: 'Tees',
      description:
        "DWP XV Angels Crop Tee, designed by Monstore for Djakarta Warehouse Project 2023 Official Merchandise. Using high quality cotton combed 24's with screen printing technique. Made for women. ",
      imageUrl:
        'https://monstore-sos-ecom.s3-ap-southeast-1.amazonaws.com/images/productthumbnail/031dc01794a0114da61f149a3a99adeb9aef397e.jpg',
    },
    {
      id: 8,
      title: 'DWP XV Garuda Neon Kimono',
      price: 600000,
      category: 'Outerwears',
      description:
        'DWP XV Garuda Neon Kimono designed by Monstore collection from Djakarta Warehouse Project 2023. Made for women with high quality printing and material.',
      imageUrl:
        'https://monstore-sos-ecom.s3-ap-southeast-1.amazonaws.com/images/productthumbnail/d9e9afe8c51f64f504535da6fce685ff1dc2de1a.jpg',
    },
    {
      id: 9,
      title: 'DWP XV Angels Crop Tee',
      price: 400000,
      category: 'Tees',
      description:
        "DWP XV Angels Crop Tee, designed by Monstore for Djakarta Warehouse Project 2023 Official Merchandise. Using high quality cotton combed 24's with screen printing technique. Made for women. ",
      imageUrl:
        'https://monstore-sos-ecom.s3-ap-southeast-1.amazonaws.com/images/productthumbnail/031dc01794a0114da61f149a3a99adeb9aef397e.jpg',
    },
    {
      id: 10,
      title: 'DWP XV Glyph String Bag',
      price: 300000,
      category: 'Bags',
      description:
        'DWP XV Glyph String Bag, designed by Monstore for Djakarta Warehouse Project 2023 Official Merchandise. Using high quality material with screen printing technique.',
      imageUrl:
        'https://monstore-sos-ecom.s3-ap-southeast-1.amazonaws.com/images/productthumbnail/a897396e97bb6b56a64cdca0f4c24bb985051855.jpg',
    },
    {
      id: 11,
      title: 'DWP XV Logo Bucket Hat',
      price: 300000,
      category: 'Hat',
      description:
        "DWP XV Logo Bucket Hat, designed by Monstore for official merchandise Djakarta Warehouse Project 2023. Using taslan material. We're choosing the best quality material for daily use.",
      imageUrl:
        'https://monstore-sos-ecom.s3-ap-southeast-1.amazonaws.com/images/productthumbnail/c2d037416aea5b018be4c36e5ca76b2882575964.jpg',
    },
    {
      id: 12,
      title: 'DWP XV Star Bali White Muscle Tee',
      price: 400000,
      category: 'Tanks',
      description:
        "DWP XV Star Bali White Muscle Tee designed by Monstore for Djakarta Warehouse Project 2023 Official Merchandise. Using high quality cotton combed 24's with screen printing technique. Made for unisex.",
      imageUrl:
        'https://monstore-sos-ecom.s3-ap-southeast-1.amazonaws.com/images/productthumbnail/db3baebb2b69eb47e246eb3b54acf69e4dd424a6.jpg',
    },
  ];

  // Fungsi untuk mendapatkan semau produk
  function getAllProducts() {
    return products;
  }

  // Fungsi untuk mendapatkan detail produk by id
  function getDetailProduct(id) {
    const product = products.find((item) => item.id === id);
    return product ? product : null;
  }

  return {
    getAllProducts,
    getDetailProduct,
  };
})();

export default api;
