import { useReducer } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import BookingForm from "./components/BookingForm";
import ConfirmedBooking from "./components/ConfirmedBooking";

export function initializeTimes() {
  return window.fetchAPI(new Date());
}

export function updateTimes(state, selectedDate) {
  return window.fetchAPI(new Date(selectedDate));
}

function BookingPage({ availableTimes, dispatch }) {
  const navigate = useNavigate();

  function submitForm(formData) {
    if (window.submitAPI(formData)) {
      navigate("/confirmed");
    }
  }

  return (
    <BookingForm
      availableTimes={availableTimes}
      dispatch={dispatch}
      submitForm={submitForm}
    />
  );
}

function App() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes,
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <header>
                <img
                  src="/images/header-logo.png"
                  alt="Little Lemon Restaurant"
                />
              </header>

              <nav>
                <ul>
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#menu">Menu</a>
                  </li>
                  <li>
                    <a href="#booking">Reservations</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                </ul>
              </nav>

              <main id="home">
                <section className="promotion">
                  <article>
                    <h1>Mediterranean Weekend Special</h1>
                    <p>
                      Enjoy a selection of seasonal Mediterranean favorites
                      inspired by Italy, Greece, and Turkey.
                    </p>
                    <a href="#menu" className="promo-button">
                      Explore Our Menu
                    </a>
                  </article>
                </section>

                <section className="content-cards">
                  <article id="menu">
                    <h2>
                      <a href="#menu">Our New Menu</a>
                    </h2>
                    <img
                      src="/images/menu.jpg"
                      alt="Mediterranean dishes from Little Lemon"
                    />
                    <p>
                      Try our new seasonal menu featuring special Mediterranean
                      dishes inspired by Italian, Greek, and Turkish cuisine.
                    </p>
                  </article>

                  <article id="reservations">
                    <h2>
                      <a href="#booking">Book a Table</a>
                    </h2>
                    <img
                      src="/images/reservation.jpg"
                      alt="Restaurant table prepared for dining"
                    />
                    <p>
                      Join us for a relaxed Mediterranean dining experience with
                      family and friends.
                    </p>
                  </article>

                  <article id="about">
                    <h2>
                      <a href="#about">About Little Lemon</a>
                    </h2>
                    <img
                      src="/images/about.jpg"
                      alt="Interior of a Mediterranean restaurant"
                    />
                    <p>
                      Little Lemon is a family-owned Mediterranean restaurant in
                      Chicago, serving traditional recipes with a modern twist.
                    </p>
                  </article>
                </section>

                <section
                  id="booking"
                  className="booking-section"
                  aria-label="Table reservation"
                >
                  <BookingPage
                    availableTimes={availableTimes}
                    dispatch={dispatch}
                  />
                </section>
              </main>

              <footer>
                <div className="footer-logo">
                  <img src="/images/footer-logo.png" alt="Little Lemon logo" />
                </div>

                <div className="footer-copyright">
                  <p>&copy; 2026 Little Lemon. All rights reserved.</p>
                </div>
              </footer>
            </div>
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
