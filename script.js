const checkBtn = document.getElementById('check-answer');
const resultPara = document.getElementById('result');

checkBtn.addEventListener('click', function() {
  const options = document.getElementsByName('capital');
  let selectedValue = '';

  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) {
      selectedValue = options[i].value;
      break;
    }
  }

  if (!selectedValue) {
    resultPara.textContent = 'Please select an option.';
  } else if (selectedValue === 'New Delhi') {
    resultPara.textContent = 'Correct! New Delhi is the capital of India.';
  } else {
    resultPara.textContent = 'Incorrect. Try again.';
  }
});
