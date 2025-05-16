const input = document.querySelector('input');

input.addEventListener('input', (e) => {
  const inputvalue = e.target.value
  if(inputvalue.length === 4 )
  console.log(e.target.value)
})