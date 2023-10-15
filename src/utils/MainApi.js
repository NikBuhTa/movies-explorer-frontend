const options = {
    baseUrl: 'http://localhost:2500',
    headers: {
        "Accept" : "application/json",
        'Content-Type': 'application/json'
    }
}

class MainApi {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _makeRequest(endpoint, method, body = undefined) {
        const config = {
            method: method,
            credentials: 'include',
            headers: this._headers,
        }
    
        if (body !== undefined) {
            config.body = JSON.stringify(body)
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

    register({name, email, password}) {
        return this._makeRequest('signup', 'POST', {name, email, password})
    }

    login({email, password}) {
        return this._makeRequest('signin', 'POST', {email, password})
    }

    logout() {
        return this._makeRequest('signout', 'POST');
    }

    getUserData() {
        return this._makeRequest('users/me', 'GET')
    }

    updateUserData({name, email}) {
        return this._makeRequest('users/me', 'PATCH', {name, email})
    }

    addFilm(info) {
        return this._makeRequest('movies', 'POST', info)
    }

    getFilms() {
        return this._makeRequest('movies', 'GET');
    }

    deleteFilm(id) {
        return this._makeRequest(`movies/${id}`, 'DELETE');
    }
}

const mainApi = new MainApi(options);

export default mainApi;