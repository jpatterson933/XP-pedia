//grabs the game information that is searched for
function getGameAPI(searchTerm) {
    //joins are platforms selection
    // var platformsJoined = platforms.join(",");
    var baseUrl = "https://rawg-video-games-database.p.rapidapi.com/games" + searchTerm;

   // var query = baseUrl + "?search=" + searchTerm + "&page_size=100&search_exact=true&platforms=" + platformsJoined;
    //we now limit search terms to 5
    return fetch(baseUrl, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "3ae9d6acaemshb175628a0959ccfp18deb7jsn8c86242e0312",
            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com"
        }
    });
}

const mario = "/mario"

getGameAPI(mario)
.then(function(response) {
    console.log(response)
    return response.json()
});

console.log(getGameAPI)