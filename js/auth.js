window.onload = () => {

    let checkData = () => {

        let login = localStorage.getItem('login');
        let pas = localStorage.getItem('password');

        if (login === 'lubimy' && pas === '123456789') {
            location.href = 'main.html'
        }
    };

    setTimeout(checkData, 3000);

    //
    //
    // if (localStorage.getItem('login') !== 'lybimy' && localStorage.getItem('password') !== '123456789') {
    //     location.href = 'main.html'
    // }
}