
(()=>{

    const section = document.querySelector('#camp-activities-inquiry');
    const activities = document.querySelector('#activity-select');
    const loadingTemp = document.querySelector('#submit-template');
    activities.required = true;

    const submitDialog = loadingTemp.content.firstElementChild.cloneNode(true);
    document.body.append(submitDialog);

    const resetBtn = document.querySelector('#reset-btn');
    resetBtn.addEventListener('click', ()=>{
        section.className = '';
        submitDialog.className = '';
    });

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
            submitDialog.classList.add('submitting');

            // Simulating callback to server:
            setTimeout(() => {
                submitDialog.classList.remove('submitting');
                submitDialog.classList.add('submitted');
                resetBtn.disabled = false;
            }, 5000);
        });

})();
