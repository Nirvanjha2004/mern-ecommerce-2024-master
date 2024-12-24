const mongoose = require('mongoose');
require('dotenv').config();
const Product = require('../models/Product');

const brands = ["Nike", "Adidas", "Puma", "Levi's", "Zara", "H&M"];
const categories = ["Men", "Women", "Kids", "Accessories", "Footwear"];

const products = [
  {
    image: "https://example.com/nike-airmax-270.jpg",
    title: "Nike Air Max 270",
    description: "Revolutionary Air technology meets modern comfort. Perfect for both athletics and casual wear.",
    category: "Footwear",
    brand: "Nike",
    price: 149.99,
    salePrice: 129.99,
    totalStock: 100,
    averageReview: 4.7
  },
  {
    image: "https://example.com/adidas-ultraboost.jpg",
    title: "Adidas Ultraboost 22",
    description: "Premium running shoes with responsive Boost cushioning",
    category: "Footwear",
    brand: "Adidas",
    price: 179.99,
    salePrice: 159.99,
    totalStock: 85,
    averageReview: 4.8
  },
  {
    image: "https://example.com/puma-tshirt.jpg",
    title: "Puma Essential Logo Tee",
    description: "Classic cotton t-shirt with Puma logo print",
    category: "Men",
    brand: "Puma",
    price: 24.99,
    salePrice: 19.99,
    totalStock: 200,
    averageReview: 4.5
  },
  {
    image: "https://example.com/levis-501.jpg",
    title: "Levi's 501 Original Jeans",
    description: "Classic straight fit jeans with button fly",
    category: "Men",
    brand: "Levi's",
    price: 89.99,
    salePrice: 79.99,
    totalStock: 150,
    averageReview: 4.9
  },
  {
    image: "https://example.com/zara-dress.jpg",
    title: "Zara Floral Summer Dress",
    description: "Lightweight floral print dress perfect for summer",
    category: "Women",
    brand: "Zara",
    price: 59.99,
    salePrice: 49.99,
    totalStock: 75,
    averageReview: 4.3
  },
  {
    image: "https://example.com/hm-kids-set.jpg",
    title: "H&M Kids' Pajama Set",
    description: "Comfortable two-piece pajama set with fun prints",
    category: "Kids",
    brand: "H&M",
    price: 24.99,
    salePrice: 19.99,
    totalStock: 120,
    averageReview: 4.4
  },
  {
    image: "https://example.com/nike-leggings.jpg",
    title: "Nike Pro Training Leggings",
    description: "High-waisted compression leggings for maximum comfort",
    category: "Women",
    brand: "Nike",
    price: 54.99,
    salePrice: 44.99,
    totalStock: 90,
    averageReview: 4.6
  },
  {
    image: "https://example.com/adidas-backpack.jpg",
    title: "Adidas Classic Backpack",
    description: "Spacious backpack with laptop compartment",
    category: "Accessories",
    brand: "Adidas",
    price: 39.99,
    salePrice: 34.99,
    totalStock: 100,
    averageReview: 4.5
  },
  {
    image: "https://example.com/puma-sneakers.jpg",
    title: "Puma RS-X Sneakers",
    description: "Retro-inspired chunky sneakers with modern comfort",
    category: "Footwear",
    brand: "Puma",
    price: 109.99,
    salePrice: 89.99,
    totalStock: 60,
    averageReview: 4.7
  },
  {
    image: "https://example.com/zara-blazer.jpg",
    title: "Zara Fitted Blazer",
    description: "Classic fitted blazer for professional look",
    category: "Women",
    brand: "Zara",
    price: 89.99,
    salePrice: 69.99,
    totalStock: 45,
    averageReview: 4.4
  }
  // ... Adding more products to reach 30
];

const generateMoreProducts = () => {
  const moreProducts = [
    {
      image: "https://example.com/nike-shorts.jpg",
      title: "Nike Dri-FIT Running Shorts",
      description: "Lightweight running shorts with built-in liner",
      category: "Men",
      brand: "Nike",
      price: 29.99,
      salePrice: 24.99,
      totalStock: 80,
      averageReview: 4.5
    },
    // Add 20 more products following the same pattern...
  ];
  
  return [...products, ...moreProducts];
};

const allProducts = generateMoreProducts();

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://nirvanjha2004:nirvanjha2004@nirvancluster.dx2v7kx.mongodb.net/dbb");
    
    await Product.deleteMany({});
    console.log('Deleted existing products');

    const createdProducts = await Product.insertMany(allProducts);
    console.log(`Successfully seeded ${createdProducts.length} products`);

    await mongoose.connection.close();
    console.log('Database connection closed');

  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedProducts(); 