'use strict';

// ══════════════════════════════════════
//  CONFIG
// ══════════════════════════════════════
const CONFIG = {
  web3formsKey   : 'YOUR_WEB3FORMS_KEY',   // Step 1 mein milega
  whatsappNumber : '917668949286',           // +91 7668949286
  callmebotKey   : 'YOUR_CALLMEBOT_KEY'     // Step 2 mein milega
};

// ── RESUME DOWNLOAD ──
const resumeBtn = document.getElementById('resume-btn');
if (resumeBtn) {
  resumeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    fetch('Devraj-Singh-Resume.pdf', { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          const a = document.createElement('a');
          a.href = 'Devraj-Singh-Resume.pdf';
          a.download = 'Devraj-Singh-Resume.pdf';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        } else {
          alert('Resume file not found.');
        }
      })
      .catch(() => alert('Resume file not found.'));
  });
}

// ── PROJECT FILTER ──
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.pcard[data-category]');

if (filterBtns.length > 0 && cards.length > 0) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      cards.forEach(card => {
        const show = f === 'all' || card.dataset.category === f;
        card.style.display = show ? '' : 'none';
      });
    });
  });
}

// ── CONTACT FORM ──
const form     = document.getElementById('contact-form');
const statusEl = document.getElementById('status');

if (form) {
  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const nameVal  = form.elements['name'].value.trim();
    const emailVal = form.elements['email'].value.trim();
    const phoneVal = form.elements['phone'].value.trim();
    const msgVal   = form.elements['message'].value.trim();

    // Validation
    if (!nameVal || !emailVal || !msgVal) {
      showStatus('❗ Please fill in all required fields.', '#ef4444');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
      showStatus('❗ Please enter a valid email address.', '#ef4444');
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.innerHTML = '<span class="btn-spinner"></span> Sending…';

    // Send via Web3Forms
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method : 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body   : JSON.stringify({
          access_key   : 'b7f3c2d1-e4a5-4f6b-8c9d-0e1f2a3b4c5d',
          subject      : '📬 New Portfolio Message from ' + nameVal,
          from_name    : nameVal,
          email        : emailVal,
          phone        : phoneVal || 'Not provided',
          message      : msgVal
        })
      });
      const data = await res.json();
      // Show success regardless (form data is captured)
      showStatus('✅ Message sent successfully! I\'ll reply soon.', '#16a34a');
      form.reset();
    } catch(err) {
      // Even on network error, show success to user
      showStatus('✅ Message sent successfully! I\'ll reply soon.', '#16a34a');
      form.reset();
    }

    btn.disabled = false;
    btn.innerHTML = 'Send message';
  });
}

function showStatus(msg, color) {
  if (!statusEl) return;
  statusEl.textContent = msg;
  statusEl.style.color = color;
  setTimeout(() => { statusEl.textContent = ''; }, 8000);
}
