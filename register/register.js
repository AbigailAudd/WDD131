let participantCount = 1;

document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.getElementById('add');
  addBtn.addEventListener('click', addParticipant);

  const form = document.getElementById('registerForm');
  form.addEventListener('submit', submitForm);
});

function addParticipant() {
  participantCount++;
  const addBtn = document.getElementById('add');
  const newHTML = participantTemplate(participantCount);
  addBtn.insertAdjacentHTML('beforebegin', newHTML);
}

function participantTemplate(count) {
  return `
    <section class="participant${count}">
      <label for="name${count}">Participant ${count} Name:</label>
      <input type="text" id="name${count}" name="name${count}" required />

      <label for="age${count}">Age:</label>
      <input type="number" id="age${count}" name="age${count}" required />

      <label for="fee${count}">Fee:</label>
      <input type="number" id="fee${count}" name="fee${count}" required />
    </section>
  `;
}

function submitForm(event) {
  event.preventDefault();

  const adultName = document.getElementById('adultName').value;
  const total = totalFees();

  const message = successTemplate({
    name: adultName,
    count: participantCount,
    total: total
  });

  document.getElementById('registerForm').style.display = 'none';
  const summary = document.getElementById('summary');
  summary.innerHTML = message;
  summary.classList.remove('hide');
}

function totalFees() {
  let feeElements = [...document.querySelectorAll('[id^=fee]')];
  return feeElements.reduce((sum, el) => sum + Number(el.value || 0), 0);
}

function successTemplate(info) {
  return `
    <h2>Thank You!</h2>
    <p>Thank you ${info.name} for registering. You have registered ${info.count} participants and owe $${info.total} in fees.</p>
  `;
}
