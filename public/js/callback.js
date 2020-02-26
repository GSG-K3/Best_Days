const xhr = new XMLHttpRequest();

const apiCall = (method,url,callback) => {
    // console.log('123')
    // console.log(typeof callback)
    xhr.onreadystatechange = () => {
        if(xhr.status === 200 && xhr.readyState === 4){
        let response = JSON.parse(xhr.responseText);
        if(typeof callback === 'function') 
        {
        callback(response);
        }
    } else {
        console.log('Error :',xhr.status,'|',xhr.readyState);   
    }
        }
    xhr.open(method,url);
    xhr.send();
    };
    