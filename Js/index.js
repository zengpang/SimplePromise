const getWeather=city=>new SimplePromise((resolve,reject) =>{
    let xhr=new XMLHttpRequest();
    xhr.open('GET', 'http://rap2api.taobao.org/app/mock/244238/getWeather?city='+city, true);
    xhr.onload=()=>{
        if(xhr.status===200)
        {
            resolve(JSON.parse(xhr.responseText));
        }
        else{
            reject(`获取${city}天气失败`);
        }
    }
    xhr.send();
});
getWeather(`北京`).then(data=>{
    console.log(data);
},err=>{
    console.log(error);
})