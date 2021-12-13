let crewTileInit = function () {

    let crewPopup = document.getElementById('crewPopup');
    crewPopup.style.display = 'block';

    console.log('I am the init function for the CREW tile');

    let onCrewResponse = function (response) {
        let crewData = response.data;

        // evrey other subsequent code that uses the spacex data will be written here
        // :

        let nasaColElement = document.getElementById('nasaCol');
        let spacexColElement = document.getElementById('spacexCol');

        for (let i = 0; i < crewData.length; i = i + 1) {

            let theCosmonaut = crewData[i];

            if (theCosmonaut.agency === 'NASA') {
                nasaColElement.innerHTML = nasaColElement.innerHTML + theCosmonaut.name + '<br>';

            }

            if (theCosmonaut.agency === 'SpaceX') {
                spacexColElement.innerHTML = spacexColElement.innerHTML + theCosmonaut.name + '<br>';

            }

        }
    };

    axios.get('https://api.spacexdata.com/v4/crew').then(onCrewResponse);
};