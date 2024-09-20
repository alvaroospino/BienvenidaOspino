const toggleBtn = document.getElementById('toggleBtn');
const hiddenContent = document.getElementById('hiddenContent');
let isOpen = false;

toggleBtn.addEventListener('click', () => {
    isOpen = !isOpen;
    hiddenContent.style.maxHeight = isOpen ? hiddenContent.scrollHeight + "px" : "0";
    toggleBtn.querySelector('svg').style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0)';
});
