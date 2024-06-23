# manga-js-http-sdk

Sdk Client to http calls on manga server project

## Usage

### import

```
import { HttpManga } from "manga-js-http-sdk"

const httpManga = new HttpManga("http://localhost:80");

```

## SET

```
httpManga.set("your.path.here", { yourValueHere: true, anything:[1,2,3]}).then((r)=>{
    console.log(r);
});
```

## SET with timeout and garbage collector

It just works if the server is setted to use garbage collector `USE_TEMP_DATA=true` on server env

```
const timeoutInSecconds = 3;
//after 3 secconds server execute delete to your.path.here
httpManga.set("your.path.here", { yourValueHere: true, anything:[1,2,3]}, timeoutInSecconds).then((r)=>{
    console.log(r);
});
```

## GET

```
httpManga.get("your.path.here").then((r)=>{
    console.log(r);//here he value saved on your.path.here
});
```

## RESET

```
httpManga.reset("your.path.here", { yourValueHere: true, anything:[1,2,3]}).then((r)=>{
    console.log(r);
});
```

## RESET with timeout and garbage collecotr

It just works if the server is setted to use garbage collector `USE_TEMP_DATA=true` on server env

```
const timeoutInSecconds = 3;
//after 3 secconds server execute delete to your.path.here
httpManga.reset("your.path.here", { yourValueHere: true, anything:[1,2,3]}, timeoutInSecconds ).then((r)=>{
    console.log(r);
});
```

## DELETE

```
httpManga.delete("your.path.here").then((r)=>{
    console.log(r);
});
```

## CLEAR

```
httpManga.clear().then((r)=>{
    console.log(r);//there is no more data on server
});
```
