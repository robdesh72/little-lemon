import { useState } from "react";
const today = new Date().toLocaleDateString("en-CA");
function BookingForm() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    alert(
  `Reservation date: ${selectedDate}\nReservation time: ${selectedTime}\nGuests: ${guests}`
);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Book a Table</h2>

      <label htmlFor="res-date">Choose date*</label>
      <input
        id="res-date"
        type="date"
        min={today}
        value={selectedDate}
        onChange={(event) => setSelectedDate(event.target.value)}
        required
      />

      <label htmlFor="res-time">Choose time*</label>
      <select
        id="res-time"
        value={selectedTime}
        onChange={(event) => setSelectedTime(event.target.value)}
        required
      >
        <option value="">Select a time</option>
        <option value="17:00">5:00 PM</option>
        <option value="18:00">6:00 PM</option>
        <option value="19:00">7:00 PM</option>
        <option value="20:00">8:00 PM</option>
      </select>

      <label htmlFor="guests">Number of guests*</label>
      <input
        id="guests"
        type="number"
        min="1"
        max="10"
        value={guests}
        onChange={(event) => setGuests(event.target.value)}
        required
      />

      <label htmlFor="occasion">Occasion (optional)</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(event) => setOccasion(event.target.value)}
      >
        <option value=""></option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <label htmlFor="full-name">Full name*</label>
      <input
        id="full-name"
        name="fullName"
        type="text"
        autoComplete="name"
        value={fullName}
        onChange={(event) => setFullName(event.target.value)}
        required
      />

      <label htmlFor="email">Email address*</label>
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />

      <label htmlFor="phone">Phone number (optional)</label>
      <input
        id="phone"
        name="phone"
        type="tel"
        autoComplete="tel"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />

      <button type="submit">Make Your Reservation</button>
    </form>
  );
}

export default BookingForm;
