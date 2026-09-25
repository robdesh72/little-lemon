import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

test("renders the booking form fields", () => {
  const availableTimes = ["17:00", "18:00", "19:00"];
  const dispatch = jest.fn();
  const submitForm = jest.fn();

  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatch={dispatch}
      submitForm={submitForm}
    />
  );

  expect(screen.getByLabelText("Choose date*")).toBeInTheDocument();
  expect(screen.getByLabelText("Choose time*")).toBeInTheDocument();
  expect(screen.getByLabelText("Number of guests*")).toBeInTheDocument();
  expect(screen.getByLabelText("Full name*")).toBeInTheDocument();
  expect(screen.getByLabelText("Email address*")).toBeInTheDocument();
});

test("required booking fields have validation attributes", () => {
  const availableTimes = ["17:00", "18:00", "19:00"];
  const dispatch = jest.fn();
  const submitForm = jest.fn();

  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatch={dispatch}
      submitForm={submitForm}
    />
  );

  expect(screen.getByLabelText("Choose date*")).toBeRequired();
  expect(screen.getByLabelText("Choose time*")).toBeRequired();

  const guestsInput = screen.getByLabelText("Number of guests*");
  expect(guestsInput).toBeRequired();
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");

  expect(screen.getByLabelText("Full name*")).toBeRequired();

  const emailInput = screen.getByLabelText("Email address*");
  expect(emailInput).toBeRequired();
  expect(emailInput).toHaveAttribute("type", "email");
});