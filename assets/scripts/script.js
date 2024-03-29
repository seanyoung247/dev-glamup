(()=>{

    document.querySelector("#camp-activities-inquiry > form > button[type='submit']")
        .addEventListener('click', e => {
            e.preventDefault();
            console.log('Submit clicked');
        });

})()