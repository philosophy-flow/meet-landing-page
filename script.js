// handles scroll to about section
const scrollTarget = document.getElementById('scroll-target');
const scrollBtn = document.getElementById('scroll-btn');
scrollBtn.addEventListener('click', () => scrollTarget.scrollIntoView({behavior:'smooth'}));


// handles opening modal w/ both download btn
const modal = document.getElementById('modal');
const modalBtn1 = document.getElementById('download-btn-1');
const modalBtn2 = document.getElementById('download-btn-2');

[modalBtn1, modalBtn2].forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.add('active');
    document.body.style.overflowY = 'hidden';
  })
});


// handles closing modal
const closeBtn = document.getElementById('close-modal-btn');
closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
  document.body.style.overflowY = 'auto';
})
