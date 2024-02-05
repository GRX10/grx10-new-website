var profile = document.getElementById('profile');
var profilecard = document.getElementById('profilecard');

profilecard.addEventListener('click', function () {
    if (profilecard.style.visibility == 'visible'){
        profilecard.style.visibility = 'hidden';
        profile.style.visibility = 'visible';
    }
});

profile.addEventListener('click', function () {
    if (profile.style.visibility == 'visible'){
        profile.style.visibility = 'hidden';
        profilecard.style.visibility = 'visible';
    }
});