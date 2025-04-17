<template>
  <div>
    <!-- Home Main Section -->
    <section class="home-main">
      <div class="content">
        <span>welcome foodies</span>
        <h3>Original taste from VietNam 😋</h3>
        <p>We guarantee to use fresh food with the best quality. Customers will enjoy Vietnamese cuisine with explosive,
          sophisticated flavors.</p>
        <router-link @click="scrollToTop" to="/menu" class="btn btn-primary">order now</router-link>
      </div>
      <div class="image">
        <img src="../assets/images/b.png" alt="Main Image" class="home-img">
        <img src="../assets/images/a.jpeg" alt="Parallax Image" class="home-parallax-img">
      </div>
    </section>

    <!-- Home Category Section -->
    <section class="home-category-wrapper">
      <button class="scroll-btn left" @click="scrollLeft">&#10094;</button>
      <div class="home-category">
        <router-link @click="scrollToTop" to="/menu" class="box">
          <img src="../assets/images/taco-img.png" alt="pancake">
          <h3>pancake</h3>
        </router-link>
        <router-link @click="scrollToTop" to="/menu" class="box">
          <img src="../assets/images/pho.png" alt="Pho">
          <h3>Pho</h3>
        </router-link>
        <router-link @click="scrollToTop" to="/menu" class="box">
          <img src="../assets/images/buncha1.png" alt="buncha">
          <h3>Bun Cha</h3>
        </router-link>
        <router-link @click="scrollToTop" to="/menu" class="box">
          <img src="../assets/images/bunrieu.png" alt="Bunrieu">
          <h3>Bun rieu</h3>
        </router-link>
        <router-link @click="scrollToTop" to="/menu" class="box">
          <img src="../assets/images/salad-img.png" alt="Sides">
          <h3>sides</h3>
        </router-link>
        <router-link @click="scrollToTop" to="/menu" class="box">
          <img src="../assets/images/dessert-img.png" alt="Dessert">
          <h3>dessert</h3>
        </router-link>
        <router-link @click="scrollToTop" to="/menu" class="box">
          <img src="../assets/images/coca-img.png" alt="Drink">
          <h3>drink</h3>
        </router-link>
      </div>
      <button class="scroll-btn right" @click="scrollRight">&#10095;</button>
    </section>

    <!-- Home Banner Section -->
    <section class="home-banner">
      <div class="grid-banner">
        <div class="grid">
          <img src="../assets/images/dis-1.jpg" alt="Special Offer 1">
          <div class="content">
            <span>special offer</span>
            <h3>upto 50% off</h3>
            <router-link @click="scrollToTop" to="/menu" class="btn btn-primary">order now</router-link>
          </div>
        </div>
        <div class="grid">
          <img src="../assets/images/dis-2.png" alt="Special Offer 2">
          <div class="content center">
            <span>special offer</span>
            <h3>upto 25% extra</h3>
            <router-link @click="scrollToTop" to="/menu" class="btn btn-primary">order now</router-link>
          </div>
        </div>
        <div class="grid">
          <img src="../assets/images/dis-3.jpg" alt="Special Offer 3">
          <div class="content">
            <span>limited offer</span>
            <h3>100% cashback</h3>
            <router-link @click="scrollToTop" to="/menu" class="btn btn-primary">order now</router-link>
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
        <span>why choose us?</span>
        <h3 class="title">what's make our food delicious!</h3>
        <p>Food to customers is always guaranteed of the best quality. Our food is made by five-star chefs around the
          world.</p>
        <router-link @click="scrollToTop" to="/about" class="btn btn-primary">read more</router-link>

        <div class="icons-container">
          <div class="icons">
            <img src="../assets/images/serv-1.png" alt="Fast Delivery">
            <h3>fast delivery</h3>
          </div>
          <div class="icons">
            <img src="../assets/images/serv-2.png" alt="Fresh Food">
            <h3>fresh food</h3>
          </div>
          <div class="icons">
            <img src="../assets/images/serv-3.png" alt="Best Quality">
            <h3>best quality</h3>
          </div>
          <div class="icons">
            <img src="../assets/images/serv-4.png" alt="24/7 Support">
            <h3>24/7 support</h3>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>

// Phương thức cuộn lên trên cùng
const scrollToTop = () => {
  window.scrollTo(0, 0);
};

// Phương thức cuộn trái
const scrollLeft = () => {
  const container = document.querySelector('.home-category');
  container.scrollBy({ top: 0, left: -300, behavior: 'smooth' });
};

// Phương thức cuộn phải
const scrollRight = () => {
  const container = document.querySelector('.home-category');
  container.scrollBy({ top: 0, left: 300, behavior: 'smooth' });
};
</script>

<style scoped>
.home-main {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  position: relative;
  overflow: hidden;
  padding: 2rem;
}

.home-main .content {
  flex: 1;
  max-width: 50%;
}

.home-main .content span {
  font-size: 2rem;
  color: #27ae60;
}

.home-main .content h3 {
  font-size: 4rem;
  color: #130f40;
  padding-top: 1rem;
}

.home-main .content p {
  font-size: 1.4rem;
  color: #666;
  line-height: 2;
  padding: 1rem 0;
}

.home-main .image {
  flex: 1;
  position: relative;
  max-width: 50%;
}

.home-main .image .home-img {
  width: 100%;
  height: auto;
  display: block;
  margin-top: 2rem;
}

.home-main .home-parallax-img {
  position: fixed;
  top: -10%;
  right: -10%;
  width: 120%;
  height: auto;
  z-index: -1;
}

/* Home Category */
.home-category-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.home-category {
  display: flex;
  overflow-x: hidden;
  scroll-behavior: smooth;
  gap: 1.5rem;
  padding: 2rem 0;
  width: 100%;
}

.home-category .box {
  min-width: 200px;
  padding: 2rem;
  text-align: center;
  border-radius: 0.5rem;
  background: #f7f7f7;
  flex: 0 0 auto;
}

.home-category .box:hover {
  background: #27ae60;
}

.home-category .box:hover h3 {
  color: #fff;
}

.home-category .box img {
  height: 7rem;
  width: auto;
}

.home-category .box h3 {
  font-size: 1.8rem;
  color: #130f40;
}

/* Scroll Buttons */
.scroll-btn {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 2rem;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}

.scroll-btn.left {
  left: 0;
}

.scroll-btn.right {
  right: 0;
}

/* Home Banner */
.home-banner {
  padding: 5rem 0;
}

.grid-banner {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.grid-banner .grid {
  flex: 1 1 30rem;
  position: relative;
  overflow: hidden;
}

.grid-banner .grid img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.grid-banner .grid .content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  text-align: center;
  transition: all 0.3s ease-in-out;
}

.grid-banner .grid .content h3 {
  font-size: 2rem;
}

.grid-banner .grid:hover .content {
  background: rgba(0, 0, 0, 0.7);
}

.grid-banner .grid:hover .content h3 {
  color: #27ae60;
}

/* Home About */
.home-about {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 5rem 0;
}

.home-about .image {
  flex: 1;
}

.home-about .image img {
  width: 100%;
  height: auto;
}

.home-about .content {
  flex: 1;
  max-width: 50%;
}

.home-about .content span {
  font-size: 2rem;
  color: #27ae60;
}

.home-about .content .title {
  font-size: 4rem;
  color: #130f40;
  padding-top: 1rem;
}

.home-about .content p {
  font-size: 1.4rem;
  color: #666;
  line-height: 2;
  padding: 1rem 0;
}

.icons-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding-top: 15px;
  padding-right: 15px;
}

.icons-container .icons {
  flex: 1;
  text-align: center;
  background-color: #27ae60;
  border-radius: 4px;
  padding-top: 15px;
}


.icons-container .icons h3 {
  font-size: 1.4rem;
  color: #130f40;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .home-main .content h3 {
    font-size: 3rem;
  }

  .home-category .box {
    min-width: 150px;
  }

  .home-category .box img {
    height: 5rem;
  }

  .home-category .box h3 {
    font-size: 1.4rem;
  }
}

@media (max-width: 576px) {
  .home-main .content span {
    font-size: 1.5rem;
  }

  .home-main .content h3 {
    font-size: 2.5rem;
  }

  .home-category .box {
    min-width: 120px;
  }

  .home-category .box img {
    height: 4rem;
  }

  .home-category .box h3 {
    font-size: 1.2rem;
  }

  .home-about .content .title {
    font-size: 2.5rem;
  }

  .home-about .content p {
    font-size: 1.2rem;
  }
}
</style>
