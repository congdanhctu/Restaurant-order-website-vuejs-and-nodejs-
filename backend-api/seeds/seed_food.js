exports.seed = function (knex) {
  // Delete all existing entries
  return knex("food")
    .del()
    .then(function () {
      // Insert new seed entries
      return knex("food").insert([
        {
          food_name: "Banh Tieu",
          food_price: "15000",
          food_discount: "300",
          food_desc: "Crispy Vietnamese donut with a sweet and fluffy texture.",
          food_status: "available",
          food_type: "snack",
          food_src: "uploads/banhtieu.jpg",
        },
        {
          food_name: "Pho Bo",
          food_price: "40000",
          food_discount: "5000",
          food_desc:
            "Traditional beef pho with savory broth and tender noodles.",
          food_status: "available",
          food_type: "main",
          food_src: "uploads/phobo.jpg",
        },
        {
          food_name: "Bun Cha",
          food_price: "35000",
          food_discount: "2000",
          food_desc:
            "Grilled pork served with vermicelli noodles and tangy dipping sauce.",
          food_status: "available",
          food_type: "main",
          food_src: "uploads/buncha.jpg",
        },
        {
          food_name: "Banh Mi",
          food_price: "20000",
          food_discount: "1000",
          food_desc:
            "Crispy Vietnamese baguette sandwich filled with pork, pate, and veggies.",
          food_status: "available",
          food_type: "snack",
          food_src: "uploads/banhmi.jpg",
        },
        {
          food_name: "Goi Cuon",
          food_price: "25000",
          food_discount: "500",
          food_desc:
            "Fresh spring rolls with shrimp, pork, vermicelli, and herbs wrapped in rice paper.",
          food_status: "available",
          food_type: "snack",
          food_src: "uploads/goicuon.jpg",
        },
        {
          food_name: "Com Tam",
          food_price: "45000",
          food_discount: "3000",
          food_desc:
            "Broken rice with grilled pork chop, fried egg, and pickled vegetables.",
          food_status: "available",
          food_type: "main",
          food_src: "uploads/comtam.jpg",
        },
        {
          food_name: "Banh Xeo",
          food_price: "30000",
          food_discount: "1000",
          food_desc:
            "Vietnamese crispy pancake filled with shrimp, pork, and bean sprouts.",
          food_status: "available",
          food_type: "main",
          food_src: "uploads/banhxeo.jpg",
        },
        {
          food_name: "Cha Gio",
          food_price: "18000",
          food_discount: "500",
          food_desc:
            "Fried spring rolls stuffed with ground pork, shrimp, and vegetables.",
          food_status: "available",
          food_type: "snack",
          food_src: "uploads/chagio.jpg",
        },
        {
          food_name: "Hu Tieu",
          food_price: "35000",
          food_discount: "2000",
          food_desc:
            "Rice noodle soup with shrimp, pork, and a light, savory broth.",
          food_status: "available",
          food_type: "main",
          food_src: "uploads/hutieu.jpg",
        },
        {
          food_name: "Bun Bo Hue",
          food_price: "40000",
          food_discount: "3000",
          food_desc:
            "Spicy beef noodle soup from Hue, rich in flavor with lemongrass and chili.",
          food_status: "available",
          food_type: "main",
          food_src: "uploads/bunbohue.jpg",
        },
        {
          food_name: "Mi Quang",
          food_price: "38000",
          food_discount: "1500",
          food_desc:
            "Turmeric-infused noodles with pork, shrimp, peanuts, and fresh herbs.",
          food_status: "available",
          food_type: "main",
          food_src: "uploads/miquang.jpg",
        },
        {
          food_name: "Ca Kho To",
          food_price: "50000",
          food_discount: "4000",
          food_desc:
            "Braised fish in a clay pot with caramelized sauce and black pepper.",
          food_status: "available",
          food_type: "main",
          food_src: "uploads/cakhoto.jpg",
        },
        {
          food_name: "Banh Cuon",
          food_price: "25000",
          food_discount: "1000",
          food_desc:
            "Steamed rice rolls filled with minced pork and mushrooms, served with fish sauce.",
          food_status: "available",
          food_type: "snack",
          food_src: "uploads/banhcuon.jpg",
        },
        {
          food_name: "Xoi Man",
          food_price: "20000",
          food_discount: "500",
          food_desc:
            "Savory sticky rice topped with pork floss, sausage, and quail egg.",
          food_status: "available",
          food_type: "snack",
          food_src: "uploads/xoiman.jpg",
        },
        {
          food_name: "Lau Thai",
          food_price: "70000",
          food_discount: "5000",
          food_desc:
            "Spicy Thai-style hotpot with seafood, mushrooms, and vegetables.",
          food_status: "available",
          food_type: "main",
          food_src: "uploads/laubai.jpg",
        },
        {
          food_name: "Ca Phe Trung",
          food_price: "30000",
          food_discount: "1000",
          food_desc:
            "Vietnamese egg coffee with creamy whipped egg yolk and rich espresso.",
          food_status: "available",
          food_type: "beverage",
          food_src: "uploads/caphetrung.jpg",
        },
        {
          food_name: "Che Ba Mau",
          food_price: "18000",
          food_discount: "500",
          food_desc:
            "Colorful three-layered dessert with beans, jelly, and coconut milk.",
          food_status: "available",
          food_type: "dessert",
          food_src: "uploads/chebamau.jpg",
        },
        {
          food_name: "Sua Dau Nanh",
          food_price: "10000",
          food_discount: "500",
          food_desc:
            "Fresh soybean milk, a healthy and popular drink in Vietnam.",
          food_status: "available",
          food_type: "beverage",
          food_src: "uploads/suadaunanh.jpg",
        },
        {
          food_name: "Nem Nuong",
          food_price: "35000",
          food_discount: "1500",
          food_desc:
            "Grilled pork skewers served with fresh veggies and dipping sauce.",
          food_status: "available",
          food_type: "main",
          food_src: "uploads/nemnuong.jpg",
        },
        {
          food_name: "Bo La Lot",
          food_price: "40000",
          food_discount: "2000",
          food_desc:
            "Grilled beef wrapped in betel leaves, full of fragrant herbs and spices.",
          food_status: "available",
          food_type: "main",
          food_src: "uploads/bolalot.jpg",
        },
      ]);
    });
};
