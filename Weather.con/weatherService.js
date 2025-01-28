app.factory('weatherService', ['$http', function ($http) {
    const API_KEY = '0c50aca668cceb6bcc4b257c2df1b89e';
    const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

    return {
        getWeather: function (city) {
            const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
            return $http.get(url);
        }
    };
}]);
