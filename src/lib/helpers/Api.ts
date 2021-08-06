class Api {
    static headers(jwt = null) {
        if (sessionStorage.getItem('jwtToken')) {
            return {
                'Accept': 'application/json',
                'Content-Type': 'application/vnd.api+json',
                'authorization': sessionStorage.getItem('jwtToken'),
            }
        } else {
            return {
                'Accept': 'application/json',
                'Content-Type': 'application/vnd.api+json',
            };
        }
    }

    static getZip(zip) {
        var url = "https://api.zippopotam.us/us/" + zip;
        const options = Object.assign(
            {method: "GET"},
        );
        var request = new Request(url, options)
        return fetch(request).then(resp => {
            return resp.json().then(data => {
                return data;
            })
        }).catch(e => console.error(e))
    }

    static getLatLong(address, key) {
        var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=" + key;
        const options = Object.assign(
            {method: "GET"},
        );
        var request = new Request(url, options)
        return fetch(request).then(resp => {
            return resp.json().then(data => {
                return data;
            })
        }).catch(e => console.error(e))
    }


    static get(route, jwt = null) {
        return this.xhr(route, null, 'GET', jwt);
    }

    static put(route, params, jwt = null) {
        return this.xhr(route, params, 'PUT', jwt);
    }

    static post(route, params, jwt = null) {
        return this.xhr(route, params, 'POST', jwt);
    }

    static patch(route, params, jwt = null) {
        return this.xhr(route, params, 'PATCH', jwt);
    }

    static delete(route, jwt = null) {
        return this.xhr(route, null, 'DELETE', jwt);
    }

    static xhr(route, params, verb, jwt = null) {

        const options = Object.assign(
            {method: verb},
            params ? {body: JSON.stringify(params)} : null,
        );
        options.headers = Api.headers(jwt);

        var request = new Request(route, options);

        return fetch(request).then(resp => {
            if (resp.headers.get('Authorization')) {
                sessionStorage.setItem('jwtToken', resp.headers.get('Authorization'));
            }
            if (options.method === "POST" && resp.status === 204) {
                return true;
            }
            if (options.method === "DELETE" && resp.status === 200) {
                return true;
            }
            return resp.json().then(data => {
                return data;
            }).catch((error) => {
                console.error('Api.js error: ', error);
            });
        }).catch(e => console.error(e));
    }
}

export default Api;
