import Image from "next/image"
import Header from "./components/Header"
import Footer from "./components/Footer"
import BookingWidget from "./components/BookingWidget"
import RealMomentsCarousel from "./components/RealMomentsCarousel"
import RoomsCarousel from "./components/RoomsCarousel"
import { FaHome, FaBed, FaCar, FaBath, FaUsers, FaFan, FaChild, FaPaw } from 'react-icons/fa';

export default function Home() {
  const realMoments = [
    { id: 1, src: "/assets/bedcard.png", alt: "Sunset view from the villa" },
    { id: 2, src: "/assets/bedcard.png", alt: "Luxurious living room" },
    { id: 3, src: "/assets/bedcard.png", alt: "Infinity pool overlooking the ocean" },
    { id: 4, src: "/assets/bedcard.png", alt: "Gourmet kitchen" },
    { id: 5, src: "/assets/bedcard.png", alt: "Beachfront yoga session" },
    { id: 6, src: "/assets/bedcard.png", alt: "Romantic dinner setup" },
  ];

  const rooms = [
    {
      id: 1,
      name: "Master Suite",
      image: "/assets/bedrect.png",
      description: "Spacious master bedroom with a king-size bed, en-suite bathroom, and private balcony overlooking the ocean.",
      beds: "1 King"
    },
    {
      id: 2,
      name: "Guest Room 1",
      image: "/assets/bedrect.png",
      description: "Cozy guest room with two queen-size beds, perfect for families or groups of friends.",
      beds: "2 Queens"
    },
    {
      id: 3,
      name: "Guest Room 2",
      image: "/assets/bedrect.png",
      description: "Charming room with a queen-size bed and a small work area, ideal for those who need to stay connected.",
      beds: "1 Queen"
    },
    {
      id: 4,
      name: "Children's Room",
      image: "/assets/bedrect.png",
      description: "Fun and colorful room with two twin beds, perfect for younger guests.",
      beds: "2 Twins"
    },
    {
      id: 5,
      name: "Studio Apartment",
      image: "/assets/bedrect.png",
      description: "Self-contained studio with a kitchenette and a queen-size Murphy bed, offering flexibility for various guest needs.",
      beds: "1 Murphy (Queen)"
    }
  ];

  return (
    <div className="app">
      <Header />
      <main>
        <div className="hero">
          <Image
            src="/assets/hero.png"
            alt="Sea La Vie Villa"
            fill
            className="hero-image"
            priority
          />
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>Sea La Vie</h1>
            <p>Alibaug, Maharashtra</p>
            <div className="hero-button">
              <img className="hero-logo" src="/assets/xseries.png" alt=" Logo" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="content-grid">
            <div className="main-content">
              <div className="rating-section">
                <div className="rating">
                  <span className="star">★</span>
                  <span className="score">4.5/5 | </span>
                  <span className="reviews">105 reviews</span>
                </div>
                <div className="actions">
                  <button className="icon-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
                  </button>
                  <button className="icon-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                  </button>
                </div>
              </div>

              <div className="details">
                <div className="block"> <FaHome size={20} color="#BBBBBB" /> Entire Villa</div>
                <div className="block"> <FaUsers size={20} color="#BBBBBB" /> 6-12 Guests </div>
                <div className="block"><FaBed size={20} color="#BBBBBB" /> 8 Bedrooms</div>
                <div className="block"> <FaPaw size={20} color="#BBBBBB" />Pet-Friendly</div>
              </div>

              <section className="about-section">
                <h2>About</h2>
                <ul className="about-list">
                  <li>Tucked away nicely in the lap of nature, this is the perfect destination getaway for a vacation trip near sand and tranquility.</li>
                  <li>The tourist-favourite Seaside Lane is only a stone's throw away. <span style={{ fontWeight: "bold", color: "rgba(207, 183, 125, 1)", textDecoration: "underline" }}>Read more</span></li>
                </ul>
                <div className="button-group">
                  <button className="secondary-button">House Rules</button>
                  <button className="secondary-button">Cancellation Policy</button>
                  <button className="secondary-button">Things you need to know</button>
                  <button className="secondary-button">Things to do</button>
                </div>
              </section>

              <section className="amenities-section">
                <h2>Amenities</h2>
                <div className="amenities-grid">
                  <div className="amenity">
                    <div className="amenity-icon">
                      <FaBed />
                    </div>
                    <span>3 Bedrooms</span>
                  </div>
                  <div className="amenity">
                    <div className="amenity-icon">
                      <FaCar />
                    </div>
                    <span>Free parking</span>
                  </div>
                  <div className="amenity">
                    <div className="amenity-icon">
                      <FaBath />
                    </div>
                    <span>4 Bathrooms</span>
                  </div>
                  <div className="amenity">
                    <div className="amenity-icon">
                      <FaUsers />
                    </div>
                    <span>10 Guests</span>
                  </div>
                  <div className="amenity">
                    <div className="amenity-icon">
                      <FaFan />
                    </div>
                    <span>Air conditioning</span>
                  </div>
                  <div className="amenity">
                    <div className="amenity-icon">
                      <FaChild />
                    </div>
                    <span>5 Guests</span>
                  </div>
                </div>
                <button className="link-button">View all amenities</button>
              </section>

              <section className="meals-section">
                <h2>Meals</h2>
                <p>
                A cook is available to prepare local specialities and a delicious spread of home-cooked meals all day, at an additional charge
                </p>
                <div className="meal-options">
                  <div className="meal-option">
                    <img src="./assets/veg.png" alt="" />
                    <span>Veg</span>
                  </div>
                  <div className="meal-option">
                  <img src="./assets/nonveg.png" alt="" />
                    <span>Non Veg</span>
                  </div>
                </div>
                <div className="button-group">
                  <button className="link-button">View Menu</button>
                  <button className="link-button">Mean Rate Card</button>
                </div>
              </section>

              <section className="moments-section">
                <h2>Real Moments</h2>
                <RealMomentsCarousel moments={realMoments} />
              </section>

              <section className="location-section">
                <h2>Location</h2>
                <div className="map-container">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.021355161756!2d-122.0842496!3d37.4219994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5b5d7378793%3A0x4c0b5b5e21723ed!2sGoogleplex!5e0!3m2!1sen!2sin!4v1696468273015!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <button className="link-button">Get Direction</button>
              </section>

              <section className="rooms-section">
                <h2>Rooms & Beds</h2>
                <RoomsCarousel rooms={rooms} />
              </section>
            </div>

            <div className="sidebar">
              <BookingWidget />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

