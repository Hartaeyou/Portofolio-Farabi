// navbar Fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixed_navbar = header.offsetTop;

    if(window.pageYOffset > fixed_navbar) {
        header.classList.add('navbar-fixed');
    }
    else{
        header.classList.remove('navbar-fixed');
    }
};
// Hamburger
const hamburger = document.querySelector('#hamburger');
const navbar_menu = document.querySelector('#nav-menu');

hamburger. addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active')
    navbar_menu.classList.toggle('hidden');
});

function SendMail(event) {
    emailjs.init("z6bzcraJrh6Gieehq");
    event.preventDefault();  // Prevent default form submission
    var nama = document.getElementById('Nama').value;
    var email = document.getElementById('Email').value;
    var pesan = document.getElementById('pesan').value;

    if (!nama || !email || !pesan){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Mohon isi semua bidang dalam formulir.',
        });
    }
    else{
        
        var parameters = {
            Nama : nama,
            Email : email,
            pesan : pesan
        };
        Swal.fire({
            imageUrl: 'src/img/loadingg.gif',
            imageHeight: 200,
            imageWidth: 200,
            title: 'Mohon Tunggu',
            text: 'Pesan Anda Sedang dalam Proses',
            showConfirmButton: false,
            allowOutsideClick: false
        });
        
        emailjs.send("service_cpajmkc", "template_qlce284", parameters)
        .then(function(response) {
            Swal.fire({
                icon: 'success',
                title: 'Berhasil',
                text: 'Email telah berhasil terkirim.',
            });
        }
    )}
};
