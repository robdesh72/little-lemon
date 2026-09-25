import { useLocation } from "react-router-dom";

function ConfirmedBooking() {
  const location = useLocation();
  const reservation = location.state?.reservation;

  if (!reservation) {
    return (
      <main className="confirmation-page">
        <h1>No Reservation Details Found</h1>
        <p>Please complete the booking form first.</p>
        <a href="/">Return to Home</a>
      </main>
    );
  }

  return (
    <main className="confirmation-page">
      <h1>Booking Confirmed!</h1>
      <p>Your table reservation has been confirmed.</p>

      <h2>Here are your reservation details:</h2>
      <ul>
        <li>Date: {reservation.date}</li>
        <li>
          Time:{" "}
          {new Date(`2000-01-01T${reservation.time}:00`).toLocaleTimeString(
            "en-US",
            {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            },
          )}
        </li>
        <li>Number of guests: {reservation.guests}</li>
        <li>Occasion: {reservation.occasion || "Not provided"}</li>
        <li>Full name: {reservation.fullName}</li>
        <li>Email address: {reservation.email}</li>
        <li>Phone number: {reservation.phone || "Not provided"}</li>
      </ul>

      <a href="/">Return to Home</a>
    </main>
  );
}

export default ConfirmedBooking;
