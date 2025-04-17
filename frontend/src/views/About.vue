<template>
  <div class="about-container">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="title">About Our Restaurant</h1>
        <p class="subtitle">Where passion meets flavor</p>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section container my-5">
      <div class="content-block">
        <h2 class="section-title">Our Story</h2>
        <p>
          Established in 2020, we started with a mission to bring authentic and delicious dishes to our community. With a focus on fresh ingredients and unique flavors, we provide an unforgettable dining experience for every guest.
        </p>
      </div>

      <div class="content-block mt-5">
        <h2 class="section-title">Our Vision</h2>
        <p>
          At our restaurant, we aim to combine traditional recipes with modern culinary techniques. Our vision is to offer a place where people can come together and enjoy not just food, but an atmosphere of warmth and hospitality.
        </p>
      </div>

      <div class="content-block mt-5">
        <h2 class="section-title">Our Team</h2>
        <p>
          Our talented chefs and friendly staff are committed to providing the best service and quality. From the kitchen to the table, we work as a team to ensure you have an exceptional experience.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
defineProps();
</script>

<style scoped>
.about-container {
  font-family: 'Roboto', sans-serif;
  color: #2c3e50;
}

.hero-section {
  background-image: url('../assets/images/background.png');
  background-size: cover;
  background-position: center;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.hero-content {
  text-align: center;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 30px;
  border-radius: 10px;
  color: #fff;
}

.title {
  font-size: 52px;
  font-weight: 700;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.subtitle {
  font-size: 24px;
  margin-top: 15px;
  font-weight: 300;
  color: #f1c40f;
}

.about-section {
  max-width: 1100px;
  margin: auto;
  padding: 50px 20px;
}

.section-title {
  font-size: 36px;
  margin-bottom: 20px;
  font-weight: 600;
  position: relative;
  color: #34495e;
}

.section-title::after {
  content: "";
  width: 80px;
  height: 4px;
  background-color: #e74c3c;
  position: absolute;
  left: 0;
  bottom: -10px;
}

.content-block {
  background-color: #ecf0f1;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.content-block:hover {
  transform: translateY(-5px);
}

p {
  font-size: 18px;
  line-height: 1.7;
  color: #7f8c8d;
}

@media (max-width: 768px) {
  .title {
    font-size: 36px;
  }

  .subtitle {
    font-size: 20px;
  }

  .section-title {
    font-size: 28px;
  }

  p {
    font-size: 16px;
  }
}
</style>
