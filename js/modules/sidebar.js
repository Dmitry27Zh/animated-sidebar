const sidebarBtn = document.querySelector('[data-btn="sidebar"]')
const sidebar = document.querySelector('[data-sidebar]')

sidebarBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open')
})
