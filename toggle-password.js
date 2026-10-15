document.addEventListener("click", (e) => {
  // Cek apakah yang diklik adalah ikon mata
  const icon = e.target.closest(".icon-right");
  if (!icon) return;

  const input = icon.parentElement.querySelector("input");
  const tampilkan = input.type === "password";

  input.type = tampilkan ? "text" : "password";
  icon.classList.toggle("fa-eye", tampilkan);
  icon.classList.toggle("fa-eye-slash", !tampilkan);
});