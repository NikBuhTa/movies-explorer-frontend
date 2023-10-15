const options = {
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        "Accept" : "application/json",
        'Content-Type': 'application/json'
    }
}

class MoviesApi {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _makeRequest(endpoint, method, body = undefined) {
        const config = {
            method: method,
            headers: this._headers,
        }
    
        return fetch(`${this._baseUrl}/${endpoint}`, config)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
    }

    getFilms(){
        return this._makeRequest('/', 'GET');
    }
}

const moviesApi = new MoviesApi(options);

export default moviesApi;