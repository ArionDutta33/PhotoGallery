const menuBtn = document.querySelector("i")
const sidebar = document.querySelector(".sidebar")
const cross = document.querySelector(".sidebar img")
cross.addEventListener("click", function () {
    sidebar.style.display = "none"
})
menuBtn.addEventListener("click", function () {
    sidebar.style.display = "flex"
})