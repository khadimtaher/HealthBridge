import React from "react";
import styles from "./Testimonial.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Dr. Arjun Mehta",
    role: "Cardiologist",
    feedback:
      "HealthBridge has simplified our hospital workflow. Managing patients and appointments has never been this smooth!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Patient",
    feedback:
      "Booking appointments online is super easy. I also get reminders, which saves me from missing visits.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Rajesh Patel",
    role: "Clinic Admin",
    feedback:
      "We can manage doctors, staff, and patients in one dashboard. The system saves us hours of manual work!",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    id: 4,
    name: "Anita Verma",
    role: "Nurse",
    feedback:
      "I can easily track patient reports and prescriptions. It has made my job stress-free!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function Testimonial() {
  return (
    <section className={styles.testimonial}>
      <h2>What Our Users Say</h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id}>
            <div className={styles.card}>
              <img src={t.image} alt={t.name} className={styles.avatar} />
              <p className={styles.feedback}>"{t.feedback}"</p>
              <h3>{t.name}</h3>
              <span>{t.role}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
