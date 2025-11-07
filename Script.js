// Mobile nav toggle
const mobileToggle = document.getElementById('mobileToggle');
mobileToggle.addEventListener('click', () => {
  let nav = document.querySelector('nav ul');
  if (nav.style.display === 'flex') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.right = '12px';
    nav.style.top = '72px';
    nav.style.background = 'white';
    nav.style.padding = '12px';
    nav.style.borderRadius = '8px';
    nav.style.boxShadow = '0 8px 20px rgba(3,40,50,0.08)';
  }
});

// Contact form (simulação)
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value || 'amigo';
  alert('Obrigado, ' + name + '! Sua mensagem foi recebida. Entraremos em contato em breve.');
  this.reset();
});

// Ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();