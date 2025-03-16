document.addEventListener("DOMContentLoaded", function () {
  // Set your estimated launch date here (YYYY, MM - 1, DD)
  const launchDate = new Date(2025, 4, 15); // Example: December 31, 2024

  const options = { year: "numeric", month: "long", day: "numeric" };
  document.getElementById("launch-date").textContent =
    launchDate.toLocaleDateString(undefined, options);
});
