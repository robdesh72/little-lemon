
# Little Lemon Restaurant Website

This project is a React website for the Little Lemon restaurant. It includes a homepage and a table booking form.

## Features

- Restaurant homepage with navigation and images
- Table booking form with date, time, number of guests, and occasion
- Available booking times that update when the selected date changes
- Form validation and a booking confirmation page
- Unit tests for the booking-time functions

## How to Run the Project

1. Install Node.js and npm if they are not already installed.
2. Download or clone this GitHub repository.
3. Open the `little-lemon` project folder in VS Code.
4. Open a terminal in the project folder and install the dependencies:

   ```bash
   npm install
   ```

5. Start the development server:

   ```bash
   npm start
   ```

6. Open http://localhost:3000 in your browser.

**Windows PowerShell note:** If PowerShell blocks `npm`, use `npm.cmd install` and `npm.cmd start` instead.

## How to Test the Booking Form

1. Open the homepage and find the table booking form.
2. Select a date and an available time.
3. Enter the number of guests and complete the required fields.
4. Submit the form.
5. Check that the booking confirmation page appears.

The project uses a local mock booking API for available times and form submission. It does not create real restaurant reservations.

## Run Unit Tests

Run the tests once with:

```bash
npm test -- --watchAll=false
```

On Windows PowerShell, you can use:

```powershell
npm.cmd test -- --watchAll=false
```

## Create a Production Build

```bash
npm run build
```