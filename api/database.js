const users = [
  {
    email: "john@gmail.com",
    password: "random",
  },
  {
    email: "jack@gmail.com",
    password: "JackPassword",
  },
];

const MenuItems = [
  {
    id: 1,
    
    name: "Sandwich",
    imgSrc:
      "https://b.zmtcdn.com/data/dish_photos/730/2e60ba1e0c62ecd25e24d3a38b5e5730.jpg",
      price: "55"
  },
  {
    id: 2,
 
    name: "Burger",
    imgSrc:
      "https://b.zmtcdn.com/data/dish_photos/d24/475d3d899c1502cba2344267b0077d24.jpg",
      price: "120"
  },
  {
    id: 3,
   
    name: "Biriyani",
    imgSrc:
      "https://b.zmtcdn.com/data/dish_photos/f8a/20042ceab67859cbc6a7de58e4cabf8a.jpg",
      price: "150"
  },
  {
    id: 4,
    
    name: "Pizza",
    imgSrc:
      "https://b.zmtcdn.com/data/dish_photos/7da/528dfee3643ae9f8cb15d19ecaab97da.jpg",
      price: "99"
  },
  {
    id: 5,
    
    name: "Poori",
    imgSrc:
      "https://b.zmtcdn.com/data/dish_photos/b17/b36c628058ba9827546bc958b99d0b17.jpg",
      price: "40"
  },
  {
    id: 6,
   
    name: "Chai",
    imgSrc:
      "https://b.zmtcdn.com/data/dish_photos/787/c6c38c5885303cf183d40c8fb1c63787.png",
      price: "20"
  },
];

const privatePosts = [
  {
    title: "Post 3",
    content: "Post 3 is private",
  },
];

module.exports = { users, MenuItems, privatePosts };
