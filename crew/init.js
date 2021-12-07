let crewTileInit = function () {

    let crewPopup = document.getElementById('popup');
    crewPopup.style.display = 'block';

    console.log('I am the init function for the CREW tile');

    let onCrewResponse = function (response) {
        let crewData = response.data;

        // evrey other subsequent code that uses the spacex data will be written here
        // :

        let the5thCosmonaut = crewData[4];
        console.log(the5thCosmonaut.name);
    };

    axios.get('https://api.spacexdata.com/v4/crew').then(onCrewResponse);
};