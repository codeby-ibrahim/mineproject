const input = document.querySelector('input');

input.addEventListener('input', (e) => {
  const inputValue = e.target.value;
  console.log(inputValue);

  if (inputValue.length === 4) {
    const areaCode = '234'.substring(0, 2); // "23"
    const lastDigit = inputValue[inputValue.length - 1];
    input.value = `+(${areaCode})- ${lastDigit}`;
  }
});
