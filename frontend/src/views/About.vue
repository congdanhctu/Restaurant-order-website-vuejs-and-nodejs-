<template>
  <div class="about-container">
    <!-- Hero Section với Parallax Effect -->
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 class="title">About Our Restaurant</h1>
        <p class="subtitle">Where Tradition Meets Innovation</p>
        <div class="decorative-line"></div>
      </div>
    </section>

    <!-- About Section với Animation -->
    <section class="about-section">
      <div class="content-wrapper">
        <div class="content-block fade-in">
          <div class="icon-wrapper">
            <i class="fas fa-history"></i>
          </div>
          <h2 class="section-title">Our Story</h2>
          <div class="text-content">
            <p>
              Established in 2020, we started with a mission to bring authentic and delicious dishes to our community. With a focus on fresh ingredients and unique flavors, we provide an unforgettable dining experience for every guest.
            </p>
          </div>
        </div>

        <div class="content-block fade-in">
          <div class="icon-wrapper">
            <i class="fas fa-eye"></i>
          </div>
          <h2 class="section-title">Our Vision</h2>
          <div class="text-content">
            <p>
              At our restaurant, we aim to combine traditional recipes with modern culinary techniques. Our vision is to offer a place where people can come together and enjoy not just food, but an atmosphere of warmth and hospitality.
            </p>
          </div>
        </div>

        <div class="content-block fade-in">
          <div class="icon-wrapper">
            <i class="fas fa-users"></i>
          </div>
          <h2 class="section-title">Our Team</h2>
          <div class="text-content">
            <p>
              Our talented chefs and friendly staff are committed to providing the best service and quality. From the kitchen to the table, we work as a team to ensure you have an exceptional experience.
            </p>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="stats-section">
        <div class="stat-item">
          <span class="stat-number">5000+</span>
          <span class="stat-label">Happy Customers</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">50+</span>
          <span class="stat-label">Special Dishes</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">15+</span>
          <span class="stat-label">Expert Chefs</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">3</span>
          <span class="stat-label">Restaurant Awards</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});
</script>

<style scoped>
.about-container {
  font-family: 'Playfair Display', serif;
  color: #2c3e50;
  overflow-x: hidden;
}

.hero-section {
  background-image: url('../assets/images/background.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%);
}

.hero-content {
  text-align: center;
  position: relative;
  z-index: 2;
  padding: 40px 60px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: fadeIn 1.5s ease-out;
}

.title {
  font-size: 4.5rem;
  font-weight: 700;
  margin: 0;
  color: #fff;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
  letter-spacing: 2px;
}

.subtitle {
  font-size: 1.8rem;
  margin-top: 20px;
  color: #f1c40f;
  font-style: italic;
  letter-spacing: 1.5px;
}

.decorative-line {
  width: 150px;
  height: 3px;
  background: linear-gradient(90deg, transparent, #f1c40f, transparent);
  margin: 25px auto 0;
}

.about-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
}

.content-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-bottom: 80px;
}

.content-block {
  background: #fff;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  opacity: 0;
  transform: translateY(30px);
  position: relative;
  border-top: 5px solid #27ae60;
}

.content-block.show {
  opacity: 1;
  transform: translateY(0);
}

.content-block:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.icon-wrapper {
  position: absolute;
  top: -25px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: #27ae60;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5rem;
  box-shadow: 0 5px 15px rgba(39, 174, 96, 0.3);
}

.section-title {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 15px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background: #27ae60;
}

.text-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
  margin: 0;
}

.stats-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 60px;
  padding: 40px;
  background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%);
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(39, 174, 96, 0.2);
}

.stat-item {
  text-align: center;
  color: white;
  padding: 20px;
}

.stat-number {
  display: block;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.stat-label {
  font-size: 1.2rem;
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@keyframes fadeIn {
  from { 
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .hero-section {
    height: 400px;
  }

  .hero-content {
    padding: 30px;
  }

  .title {
    font-size: 3rem;
  }

  .subtitle {
    font-size: 1.4rem;
  }

  .content-wrapper {
    grid-template-columns: 1fr;
  }

  .stats-section {
    grid-template-columns: repeat(2, 1fr);
  }

  .stat-number {
    font-size: 2.5rem;
  }

  .stat-label {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 2.5rem;
  }

  .hero-content {
    padding: 20px;
  }

  .stats-section {
    grid-template-columns: 1fr;
  }

  .content-block {
    padding: 30px;
  }
}
</style>