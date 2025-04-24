<template>
  <div>
    <!-- Home Main Section -->
    <section class="home-main">
      <div class="content">
        <span class="welcome-badge">Welcome Food Lovers</span>
        <h3>Authentic Vietnamese Flavors 😋</h3>
        <p>We are committed to using the freshest ingredients of the highest quality. Customers will enjoy Vietnamese cuisine with its distinctive, refined flavors.</p>
        <router-link @click="scrollToTop" to="/menu" class="btn-order">
          <span>Order Now</span>
          <i class="fas fa-arrow-right"></i>
        </router-link>
      </div>
      <div class="image">
        <img src="../assets/images/b.png" alt="Main Image" class="home-img">
        <img src="../assets/images/a.jpeg" alt="Parallax Image" class="home-parallax-img">
      </div>
    </section>

    <!-- Home Category Section -->
    <section class="home-category-wrapper">
      <div class="section-title">
        <h2>Explore Our Dishes</h2>
        <div class="title-underline"></div>
      </div>
      <button class="scroll-btn left" @click="scrollLeft">❮</button>
      <div class="home-category">
        <router-link @click="scrollToTop" to="/menu" class="box">
          <div class="img-container">
            <img src="../assets/images/taco-img.png" alt="pancake">
          </div>
          <h3>Vietnamese Pancake</h3>
        </router-link>
        <router-link @click="scrollToTop" to="/menu" class="box">
          <div class="img-container">
            <img src="../assets/images/pho.png" alt="Pho">
          </div>
          <h3>Phở</h3>
        </router-link>
        <router-link @click="scrollToTop" to="/menu" class="box">
          <div class="img-container">
            <img src="../assets/images/buncha1.png" alt="buncha">
          </div>
          <h3>Grilled Pork Noodle</h3>
        </router-link>
        <router-link @click="scrollToTop" to="/menu" class="box">
          <div class="img-container">
            <img src="../assets/images/bunrieu.png" alt="Bunrieu">
          </div>
          <h3>Crab Noodle Soup</h3>
        </router-link>
        <router-link @click="scrollToTop" to="/menu" class="box">
          <div class="img-container">
            <img src="../assets/images/salad-img.png" alt="Sides">
          </div>
          <h3>Side Dishes</h3>
        </router-link>
        <router-link @click="scrollToTop" to="/menu" class="box">
          <div class="img-container">
            <img src="../assets/images/dessert-img.png" alt="Dessert">
          </div>
          <h3>Desserts</h3>
        </router-link>
        <router-link @click="scrollToTop" to="/menu" class="box">
          <div class="img-container">
            <img src="../assets/images/coca-img.png" alt="Drink">
          </div>
          <h3>Drinks</h3>
        </router-link>
      </div>
      <button class="scroll-btn right" @click="scrollRight">❯</button>
    </section>

    <!-- Home Banner Section -->
    <section class="home-banner">
      <div class="grid-banner">
        <div class="grid">
          <img src="../assets/images/dis-1.jpg" alt="Special Offer 1">
          <div class="content">
            <span class="offer-badge">Special Offer</span>
            <h3>Up to 50% Off</h3>
            <router-link @click="scrollToTop" to="/menu" class="btn-banner">Order Now</router-link>
          </div>
        </div>
        <div class="grid">
          <img src="../assets/images/dis-2.png" alt="Special Offer 2">
          <div class="content center">
            <span class="offer-badge">Special Offer</span>
            <h3>Extra 25% Discount</h3>
            <router-link @click="scrollToTop" to="/menu" class="btn-banner">Order Now</router-link>
          </div>
        </div>
        <div class="grid">
          <img src="../assets/images/dis-3.jpg" alt="Special Offer 3">
          <div class="content">
            <span class="offer-badge">Limited Offer</span>
            <h3>100% Cashback</h3>
            <router-link @click="scrollToTop" to="/menu" class="btn-banner">Order Now</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Home About Section -->
    <section class="home-about">
      <div class="image">
        <img src="../assets/images/about-img.jpg" alt="About Us">
      </div>
      <div class="content">
        <span class="about-badge">Why Choose Us?</span>
        <h3 class="title">What Makes Our Flavors Exceptional!</h3>
        <p>The food we serve is always guaranteed to be of the highest quality. Our dishes are prepared by world-class five-star chefs from around the globe.</p>
        <router-link @click="scrollToTop" to="/about" class="btn-about">Learn More</router-link>

        <div class="icons-container">
          <div class="icons">
            <div class="icon-img">
              <img src="../assets/images/serv-1.png" alt="Fast Delivery">
            </div>
            <h3>Fast Delivery</h3>
          </div>
          <div class="icons">
            <div class="icon-img">
              <img src="../assets/images/serv-2.png" alt="Fresh Food">
            </div>
            <h3>Fresh Food</h3>
          </div>
          <div class="icons">
            <div class="icon-img">
              <img src="../assets/images/serv-3.png" alt="Best Quality">
            </div>
            <h3>Best Quality</h3>
          </div>
          <div class="icons">
            <div class="icon-img">
              <img src="../assets/images/serv-4.png" alt="24/7 Support">
            </div>
            <h3>24/7 Support</h3>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

// Method to scroll to top
const scrollToTop = () => {
  window.scrollTo(0, 0);
};

// Method to scroll left
const scrollLeft = () => {
  const container = document.querySelector('.home-category');
  container.scrollBy({ top: 0, left: -300, behavior: 'smooth' });
};

// Method to scroll right
const scrollRight = () => {
  const container = document.querySelector('.home-category');
  container.scrollBy({ top: 0, left: 300, behavior: 'smooth' });
};

// Add animation effects on scroll
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.1 });
  
  const sections = document.querySelectorAll('.home-main, .home-category-wrapper, .home-banner, .home-about');
  sections.forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
  });
});
</script>

<style scoped>
/* General Setup */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', 'Arial', sans-serif;
}

/* Animation Effects */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-in.show {
  opacity: 1;
  transform: translateY(0);
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

/* Home Main Section */
.home-main {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
  position: relative;
  overflow: hidden;
  padding: 5rem 3rem;
  background-color: #f9f9f9;
  border-radius: 15px;
  margin: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
}

.home-main .content {
  flex: 1;
  max-width: 50%;
}

.home-main .content .welcome-badge {
  font-size: 1.8rem;
  color: #27ae60;
  font-weight: 600;
  display: inline-block;
  background: rgba(39, 174, 96, 0.1);
  padding: 8px 20px;
  border-radius: 30px;
  margin-bottom: 1.5rem;
  text-transform: capitalize;
}

.home-main .content h3 {
  font-size: 4.2rem;
  color: #130f40;
  margin-bottom: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
  font-family: 'Playfair Display', serif;
}

.home-main .content p {
  font-size: 1.6rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 2.5rem;
}

.home-main .content .btn-order {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 35px;
  font-size: 1.6rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  background-color: #27ae60;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  box-shadow: 0 5px 15px rgba(39, 174, 96, 0.3);
}

.home-main .content .btn-order:hover {
  background-color: #219150;
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(39, 174, 96, 0.4);
}

.home-main .content .btn-order i {
  transition: transform 0.3s ease;
}

.home-main .content .btn-order:hover i {
  transform: translateX(5px);
}

.home-main .image {
  flex: 1;
  position: relative;
  max-width: 50%;
  transition: transform 0.5s ease;
}

.home-main .image .home-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 15px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  animation: float 6s ease-in-out infinite;
}

.home-main .home-parallax-img {
  position: fixed;
  top: -10%;
  right: -10%;
  width: 120%;
  height: auto;
  z-index: -1;
  opacity: 0.3;
}

/* Section Title */
.section-title {
  text-align: center;
  margin-bottom: 3rem;
  padding-top: 2rem;
}

.section-title h2 {
  font-size: 3rem;
  color: #130f40;
  font-weight: 700;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
}

.title-underline {
  height: 4px;
  width: 80px;
  background: linear-gradient(90deg, #27ae60, transparent);
  margin: 0 auto;
  border-radius: 2px;
}

/* Home Category */
.home-category-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem 2rem;
  padding: 2rem;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
}

.home-category {
  display: flex;
  overflow-x: hidden;
  scroll-behavior: smooth;
  gap: 2rem;
  padding: 2rem 0;
  width: 100%;
}

.home-category .box {
  min-width: 220px;
  padding: 2rem;
  text-align: center;
  border-radius: 15px;
  background: #f7f7f7;
  flex: 0 0 auto;
  transition: all 0.3s ease;
  text-decoration: none;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  border: 2px solid transparent;
}

.home-category .box:hover {
  background: #27ae60;
  transform: translateY(-10px);
  box-shadow: 0 10px 25px rgba(39, 174, 96, 0.3);
}

.home-category .box .img-container {
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.home-category .box img {
  height: 9rem;
  width: auto;
  transition: transform 0.3s ease;
}

.home-category .box:hover img {
  transform: scale(1.1);
}

.home-category .box h3 {
  font-size: 1.8rem;
  color: #130f40;
  font-weight: 600;
  transition: all 0.3s ease;
}

.home-category .box:hover h3 {
  color: #fff;
}

/* Scroll Buttons */
.scroll-btn {
  background-color: rgba(39, 174, 96, 0.8);
  color: white;
  font-size: 2.2rem;
  border: none;
  cursor: pointer;
  padding: 1rem 1.2rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  border-radius: 50%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.scroll-btn:hover {
  background-color: rgba(39, 174, 96, 1);
  transform: translateY(-50%) scale(1.1);
}

.scroll-btn.left {
  left: 10px;
}

.scroll-btn.right {
  right: 10px;
}

/* Home Banner */
.home-banner {
  padding: 5rem 2rem;
  margin: 4rem 2rem;
}

.grid-banner {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.grid-banner .grid {
  flex: 1 1 30rem;
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.grid-banner .grid:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.grid-banner .grid img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.grid-banner .grid:hover img {
  transform: scale(1.1);
}

.grid-banner .grid .content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0) 100%);
}

.grid-banner .grid .content.center {
  align-items: center;
  text-align: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0) 100%);
}

.grid-banner .grid .content .offer-badge {
  font-size: 1.6rem;
  color: #fff;
  background: rgba(39, 174, 96, 0.8);
  padding: 5px 15px;
  border-radius: 20px;
  margin-bottom: 1rem;
  font-weight: 500;
}

.grid-banner .grid .content h3 {
  font-size: 2.5rem;
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-weight: 700;
}

.grid-banner .grid .content .btn-banner {
  padding: 12px 25px;
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;
  background-color: #27ae60;
  color: white;
  border: none;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.grid-banner .grid .content .btn-banner:hover {
  background-color: #fff;
  color: #27ae60;
  transform: translateY(-3px);
}

/* Home About */
.home-about {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 3rem;
  padding: 5rem 2rem;
  background-color: #f9f9f9;
  border-radius: 15px;
  margin: 4rem 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.home-about .image {
  flex: 1 1 40rem;
}

.home-about .image img {
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.home-about .image img:hover {
  transform: scale(1.03);
}

.home-about .content {
  flex: 1 1 40rem;
  padding: 2rem;
}

.home-about .content .about-badge {
  font-size: 1.8rem;
  color: #27ae60;
  font-weight: 600;
  display: inline-block;
  background: rgba(39, 174, 96, 0.1);
  padding: 8px 20px;
  border-radius: 30px;
  margin-bottom: 1.5rem;
}

.home-about .content .title {
  font-size: 3.5rem;
  color: #130f40;
  margin-bottom: 2rem;
  font-weight: 700;
  line-height: 1.2;
  font-family: 'Playfair Display', serif;
}

.home-about .content p {
  font-size: 1.6rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 2.5rem;
}

.home-about .content .btn-about {
  display: inline-block;
  padding: 15px 35px;
  font-size: 1.6rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  background-color: #27ae60;
  color: white;
  border: none;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(39, 174, 96, 0.3);
  margin-bottom: 3rem;
}

.home-about .content .btn-about:hover {
  background-color: #219150;
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(39, 174, 96, 0.4);
}

.home-about .content .icons-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 1rem;
}

.home-about .content .icons-container .icons {
  flex: 1 1 15rem;
  text-align: center;
  padding: 2rem;
  border-radius: 10px;
  background: #fff;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.home-about .content .icons-container .icons:hover {
  background: #27ae60;
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(39, 174, 96, 0.2);
}

.home-about .content .icons-container .icons .icon-img {
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.home-about .content .icons-container .icons img {
  height: 5rem;
  transition: transform 0.3s ease;
}

.home-about .content .icons-container .icons:hover img {
  transform: scale(1.1);
}

.home-about .content .icons-container .icons h3 {
  font-size: 1.7rem;
  color: #130f40;
  font-weight: 600;
  transition: all 0.3s ease;
}

.home-about .content .icons-container .icons:hover h3 {
  color: #fff;
}

/* Responsive Design */
@media (max-width: 991px) {
  .home-main .content h3 {
    font-size: 3.5rem;
  }
  
  .home-main .content,
  .home-main .image {
    max-width: 100%;
  }
  
  .home-about .content .title {
    font-size: 3rem;
  }
  
  .section-title h2 {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .home-main {
    padding: 3rem 2rem;
  }
  
  .home-main .content h3 {
    font-size: 3rem;
  }
  
  .home-main .content p {
    font-size: 1.4rem;
  }
  
  .home-category .box {
    min-width: 180px;
    padding: 1.5rem;
  }
  
  .home-category .box .img-container {
    height: 100px;
  }
  
  .home-category .box img {
    height: 7rem;
  }
  
  .home-category .box h3 {
    font-size: 1.6rem;
  }
  
  .grid-banner .grid .content h3 {
    font-size: 2rem;
  }
  
  .home-about {
    padding: 3rem 2rem;
  }
  
  .home-about .content .title {
    font-size: 2.5rem;
  }
  
  .home-about .content p {
    font-size: 1.4rem;
  }
  
  .home-about .content .icons-container .icons {
    padding: 1.5rem;
  }
}

@media (max-width: 576px) {
  .home-main {
    padding: 2rem;
    margin: 1rem;
  }
  
  .home-main .content .welcome-badge {
    font-size: 1.5rem;
    padding: 5px 15px;
  }
  
  .home-main .content h3 {
    font-size: 2.5rem;
  }
  
  .home-main .content p {
    font-size: 1.3rem;
  }
  
  .home-main .content .btn-order {
    padding: 12px 25px;
    font-size: 1.4rem;
  }
  
  .section-title h2 {
    font-size: 2.2rem;
  }
  
  .home-category-wrapper {
    margin: 2rem 1rem;
    padding: 1rem;
  }
  
  .home-category .box {
    min-width: 150px;
    padding: 1.2rem;
  }
  
  .home-category .box .img-container {
    height: 80px;
  }
  
  .home-category .box img {
    height: 6rem;
  }
  
  .home-category .box h3 {
    font-size: 1.4rem;
  }
  
  .scroll-btn {
    font-size: 1.8rem;
    padding: 0.8rem 1rem;
  }
  
  .home-banner {
    padding: 3rem 1rem;
    margin: 2rem 1rem;
  }
  
  .grid-banner .grid .content .offer-badge {
    font-size: 1.4rem;
  }
  
  .grid-banner .grid .content h3 {
    font-size: 1.8rem;
  }
  
  .grid-banner .grid .content .btn-banner {
    padding: 10px 20px;
    font-size: 1.3rem;
  }
  
  .home-about {
    padding: 2rem 1rem;
    margin: 2rem 1rem;
  }
  
  .home-about .content .about-badge {
    font-size: 1.5rem;
    padding: 5px 15px;
  }
  
  .home-about .content .title {
    font-size: 2.2rem;
  }
  
  .home-about .content p {
    font-size: 1.3rem;
  }
  
  .home-about .content .btn-about {
    padding: 12px 25px;
    font-size: 1.4rem;
  }
  
  .home-about .content .icons-container .icons {
    padding: 1.2rem;
  }
  
  .home-about .content .icons-container .icons .icon-img {
    height: 60px;
  }
  
  .home-about .content .icons-container .icons img {
    height: 4rem;
  }
  
  .home-about .content .icons-container .icons h3 {
    font-size: 1.4rem;
  }
}

@media (max-width: 450px) {
  .home-main .content h3 {
    font-size: 2.2rem;
  }
  
  .home-category .box {
    min-width: 130px;
  }
  
  .home-category .box img {
    height: 5rem;
  }
  
  .home-category .box h3 {
    font-size: 1.3rem;
  }
  
  .grid-banner .grid {
    flex: 1 1 100%;
  }
  
  .home-about .content .icons-container .icons {
    flex: 1 1 100%;
  }
}
</style>