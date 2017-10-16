import 'whatwg-fetch';

export function getData(url) {
    const objPromise = new Promise((resolve, reject) => {
        fetch(url)
            .then(function(response) {
                return response.json();
            }).then(function(json) {
                resolve(json);
            }).catch(function(ex) {
                reject(ex);
            });
    });
    
    return objPromise;
}
export function postData(url, jData) {
    //const data = new FormData();
    const objPromise = new Promise((resolve, reject) => {
       // data.append('json', JSON.stringify(jData));
        fetch(url, {
            method: 'POST',
            mode: 'cors', 
            headers: new Headers(),
            body: JSON.stringify(jData)
            
        }).then((response) => {
            return response.json();
        }).then((json) => {
            resolve(json);
        }).catch((ex) => {
            alert(ex);
            reject(ex);
        });
    });
    
    return objPromise;
}