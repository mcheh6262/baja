const details = { 'first name': 'chedvi', 'last name': 'baum', 'age': 30,'adress': 'hachartzit 20', 'gender': 'female' }
const user = {}

function send1() {
    try {
    user.id_firstname = $('#id_firstname').val ()
    user.id_lastname = $('#id_lastname').val ()
    user.vehicle1 = $('#vehicle1')[0].checked
    user.id_adress = $('#id_adress').val ()
    user.gender = $('#gender').val ()
    document.write(`${JSON.stringify(user)}`)
    
    if(user.id_firstname == "" || user.id_lastname == "" || user.id_adress == "" ) {
        throw Error ('emty filther');
    }
    }
    catch (error) {
        console.log(error);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }
  

    }

    function random1() {
        const puple = [{'first_name': 'yehoda', 'last_name': 'klein', 'over_18': true, 'Adress': 'ashdod', 'gender': 'male'},
                     {'first_name': 'tzvi', 'last_name': 'lasri', 'over_18': false, 'Adress': 'tel aviv', 'gender': 'male'},
                     {'first_name': 'shmuel', 'last_name': 'cohen', 'over_18': false, 'Adress': 'bat yam', 'gender': 'male'},
                     {'first_name': 'leah', 'last_name': 'levi', 'over_18': false, 'Adress': 'heifa', 'gender': 'female'},
                     {'first_name': 'tali', 'last_name': 'katzh', 'over_18': true, 'Adress': 'hadera', 'gender': 'female'}
    ]
  $('#id_firstname').val(puple [Math.floor(Math.random() *puple.length)].first_name)
  $('#id_lastname').val(puple [Math.floor(Math.random() *puple.length)].last_name)
  $('#vehicle1')[0].checked = puple [Math.floor(Math.random() *puple.length)].over_18
  $('#id_adress').val(puple [Math.floor(Math.random() *puple.length)].Adress)
 $('#gender').val(puple [Math.floor(Math.random() *puple.length)].gender).change() 
    }
 

function xhr1() {
    var xhr = new XMLHttpRequest();

    const result = [{}]

    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest. DONE) {
           let arr = JSON.parse(xhr.responseText)
               $('#id_firstname').val(arr.results[0].name.first)
               $('#id_lastname').val(arr.results[0].name.last)
               $('#vehicle1')[0].checked = arr.results[0].dob.age > 18
               $('#id_adress').val(arr.results[0].location.street.name)
               $('#gender').val(arr.results[0].gender).change()
        
        }
    }
xhr.open('GET',"https://randomuser.me/api", true);
xhr.send();

}

function jQuery1() {
    $.ajax({
        url:"https://randomuser.me/api", 
        success: effect => {
            $('#id_firstname').val(effect.results[0].name.first)
            $('#id_lastname').val(effect.results[0].name.last)
            $('#vehicle1')[0].checked = effect.results[0].dob.age > 18
            $('#id_adress').val(effect.results[0].location.street.name)
            $('#gender').val(effect.results[0].gender).change()
        }
    }

    )
}
function fetch1() {
    fetch("https://randomuser.me/api")  
    .then(effect => effect.json())
    .then(effect => {
        $('#id_firstname').val(effect.results[0].name.first)
        $('#id_lastname').val(effect.results[0].name.last)
        $('#vehicle1')[0].checked = effect.results[0].dob.age > 18
        $('#id_adress').val(effect.results[0].location.street.name)
        $('#gender').val(effect.results[0].gender).change()
    })
}



    
 
