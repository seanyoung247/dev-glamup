
(()=>{

    const section = document.querySelector('#camp-activities-inquiry');
    const activities = document.querySelector('#activity-select');
    activities.required = true;

    activities.addEventListener('change', () => {
        if (activities.value !== '') activities.classList.remove('invalid');
    });

    document.querySelectorAll('textarea').forEach(element => {
        element.addEventListener('focusout', e => {
            if (e.target.value !== '') e.target.classList.add('filled');
            else e.target.classList.remove('filled');
        });
    });

    document.querySelector("#camp-activities-inquiry > form > button[type='submit']")
        .addEventListener('click', e => {
            e.preventDefault();
            if (activities.value === '') {
                activities.classList.add('invalid');
                // Forces the invalid animation to replay
                section.style.animation = 'none';
                section.offsetHeight;
                section.style.animation = null;
                return
            }

            section.classList.add('submitting');
        });

})();
      