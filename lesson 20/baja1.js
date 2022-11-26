function add_user() {
  try {
  let x = document.getElementById('tab').rows.length
  if(x <= 10) {
    fetch("https://randomuser.me/api")  
    .then(effect => effect.json())
    .then(effect => {
      $('#tab').append(`<tr id="table1" class="table table-success table-striped">
        <td>${effect.results[0].name.first}</td>
        <td>${effect.results[0].name.last}</td>
        <td>${effect.results[0].dob.age > 18}</td>
        <td>${effect.results[0].location.street.name}</td>
        <td>${effect.results[0].gender}</td></tr>`)
    })
  }
  else {
 throw Error('error')
  }
}
catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'cannot add more!!!',
      footer: '<a href="">Why do I have this issue?</a>'
  })
  }
}
function remove_user() {
  try {
  let x = document.getElementById('tab').rows.length
  if (x > 1) {
    $('#tab').remove()
  } 
  else {
    throw Error('delete')
  }
}
 catch (error) {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'no more rows to remove!',
    footer: '<a href="">Why do I have this issue?</a>'
})
 }
}