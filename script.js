/* =========================
   TOKENOMICS PIE CHART
========================= */

const ctx = document.getElementById("tokenChart");

new Chart(ctx, {
  type: "pie",
  data: [50, 20, 15, 10, 5],
labels: [
  "Community & Liquidity",
  "Ecosystem & Incentives",
  "Team",
  "Treasury",
  "Marketing"
],

    ],
    datasets: [
      {
        data: [40, 25, 15, 10, 10],
        backgroundColor: [
          "#7f5cff",
          "#00ffa3",
          "#ffcc00",
          "#ff6b6b",
          "#4dabf7"
        ],
        borderWidth: 0
      }
    ]
  },
  options: {
    responsive: true,
    animation: {
      animateScale: true,
      duration: 1500
    },
    plugins: {
      legend: {
        labels: {
          color: "white"
        }
      }
    }
  }
});

/* =========================
   SCROLL FADE-IN ANIMATION
========================= */

const elements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

elements.forEach(el => observer.observe(el));
