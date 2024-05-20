function findStore() {
    const searchInput = $('#mokumapfinder');
    const hidden = 'sItem--hidden';
    const result = $('#result');

    let filter = searchInput.val().toUpperCase();
    let count = 0; // reset on each function call

    for (let i = 0; i < items.length; i++) {
        let name = items[i].getAttribute('data-name').toUpperCase();
        let country = items[i].getAttribute('data-country').toUpperCase();
        let city = items[i].getAttribute('data-city').toUpperCase();

        if (name.toUpperCase().indexOf(filter) > -1) { // check Name
            items[i].classList.remove(hidden);
            count = count + 1;
        } else if (country.toUpperCase().indexOf(filter) > -1) { // Name not found, check country
            items[i].classList.remove(hidden);
            count = count + 1;
        } else if (city.toUpperCase().indexOf(filter) > -1) { // Country not found, check city
            items[i].classList.remove(hidden);
            count = count + 1;
        } else { // nothing found
            items[i].classList.add(hidden);
        }
    }
    result.html(count + ' Places - <a href="javascript:clearSearch();">Reset</a>'); // print the seartch result
}

// reset map
function resetMap() {
    mymap.closePopup();
    mymap.setView([startLat, startLon], startZoom);
}

// clear search
function clearSearch() {
    document.getElementById('mokumapfinder').value = '';
    findStore();
    resetMap();
}

