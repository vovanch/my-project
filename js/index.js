document.querySelector('.login-form').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    fetch('form.php', {
        method: 'POST',
        body: new FormData(document.querySelector('.login-form'))
    })
    .then( response => response.text() )
    .then( html => document.querySelector('.server-response')
                                .innerHTML = html );
}

var dt = new Date();
document.getElementById("datetime").innerHTML = (("0"+dt.getDate()).slice(-2))+"."+ (("0"+(dt.getMonth()+1)).slice(-2)) +"."+ (dt.getFullYear()) +" "+ (("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));