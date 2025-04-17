<template>
  <div class="footer">
    <div class="news-letter">
      <h3>Receive event notifications</h3>
      <form @submit.prevent>
        <input
          type="email"
          name="useremailreceiveinfo"
          placeholder="enter your email"
          id="useremailreceiveinfo"
        />
        <input type="submit" value="subscribe" />
      </form>
    </div>

    <div class="box-container">
      <div class="box">
        <h3>our Restaurant</h3>
        <p>123 Đường 3/2, Quận Ninh Kiều, Thành phố Cần Thơ</p>
        <p><i class="fas fa-phone"></i> +84 123 456 789</p>
        <p><i class="fas fa-envelope"></i> DanhB2111917@student.ctu.edu.vn</p>
      </div>

      <div class="box">
        <h3>Contact</h3>
        <p><i class="fas fa-phone"></i> +84 123 456 789</p>
        <p><i class="fas fa-envelope"></i> support@example.com</p>
        <router-link @click="scrollToTop" to="/contact"
          ><i class="fas fa-arrow-right"></i> Contact Us</router-link
        >
      </div>

      <div class="box">
        <h3>Support</h3>
        <router-link @click="scrollToTop" to="/faq"
          ><i class="fas fa-arrow-right"></i> FAQ</router-link
        >
        <router-link @click="scrollToTop" to="/terms"
          ><i class="fas fa-arrow-right"></i> Terms of Service</router-link
        >
        <router-link @click="scrollToTop" to="/privacy"
          ><i class="fas fa-arrow-right"></i> Privacy Policy</router-link
        >
      </div>

      <div class="box">
        <h3>opening hours</h3>
        <p>everyday : 7:00am to 10:00pm</p>
      </div>
    </div>

    <div class="bottom">
      <div class="share">
        <a href="https://www.facebook.com/" class="fab fa-facebook-f"></a>
        <a href="https://twitter.com/?lang=en" class="fab fa-twitter"></a>
        <a href="https://www.instagram.com/" class="fab fa-instagram"></a>
        <a href="https://www.pinterest.com/" class="fab fa-pinterest"></a>
      </div>
    </div>
  </div>
</template>

<script setup>

function scrollToTop() {
  window.scrollTo(0, 0);
}
</script>

<style scoped>
/* footer */
.footer {
  background: #f7f7f7;
  padding: 1.5rem 5%;
}

.footer .news-letter {
  text-align: center;
  margin-bottom: 1.5rem;
}

.footer .news-letter h3 {
  font-size: 2rem;
  color: #130f40;
  padding-bottom: 0.5rem;
}

.footer .news-letter form {
  max-width: 50rem;
  margin: 1rem auto;
  display: flex;
  border-radius: 0.5rem;
  overflow: hidden;
}

.footer .news-letter form input[type="email"] {
  height: 100%;
  width: 100%;
  padding: 0.8rem 1rem;
  font-size: 1.4rem;
  color: #130f40;
  text-transform: none;
}

.footer .news-letter form input[type="submit"] {
  padding: 0 1.5rem;
  font-size: 1.4rem;
  color: #fff;
  background: #27ae60;
  cursor: pointer;
}

.footer .news-letter form input[type="submit"]:hover {
  background: #130f40;
}

.footer .box-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  gap: 1rem;
}

.footer .box-container .box h3 {
  font-size: 1.8rem;
  color: #130f40;
  padding: 0.8rem 0;
}

.footer .box-container .box p {
  font-size: 1.2rem;
  color: #666;
  padding: 0.1rem 0;
}

.footer .box-container .box a {
  display: block;
  font-size: 1.2rem;
  color: #666;
  padding: 0.8rem 0;
}

.footer .box-container .box a:hover {
  color: #27ae60;
}

.footer .box-container .box a:hover i {
  padding-right: 1.5rem;
}

.footer .box-container .box a i {
  padding-right: 0.5rem;
  color: #27ae60;
}

.footer .bottom {
  padding-top: 1rem;
  text-align: center;
}

.footer .bottom .share {
  margin: 1rem 0;
}

.footer .bottom .share a {
  height: 3.5rem;
  width: 3.5rem;
  line-height: 3.5rem;
  font-size: 1.8rem;
  border-radius: 0.5rem;
  margin: 0 0.2rem;
  color: #fff;
  background: #27ae60;
}

.footer .bottom .share a:hover {
  background: #130f40;
}

@media (max-width: 576px) {
  .footer .box-container {
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  }
}
</style>
