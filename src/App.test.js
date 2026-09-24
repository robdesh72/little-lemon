import { initializeTimes, updateTimes } from "./App";

beforeEach(() => {
  window.fetchAPI = jest.fn(() => ["17:00", "18:00", "19:00"]);
});

test("initializeTimes returns available booking times", () => {
  const availableTimes = initializeTimes();

  expect(Array.isArray(availableTimes)).toBe(true);
  expect(availableTimes.length).toBeGreaterThan(0);
});

test("updateTimes returns available times for the selected date", () => {
  const selectedDate = "2026-10-15";

  const availableTimes = updateTimes([], selectedDate);

  expect(window.fetchAPI).toHaveBeenCalledWith(new Date(selectedDate));
  expect(availableTimes).toEqual(["17:00", "18:00", "19:00"]);
});