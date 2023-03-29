# manga-js-http-sdk

Sdk Client to http calls on manga server project

## Usage

### import

```
import HttpManga from "manga-js-http-sdk"

const httpManga = new HttpManga("http://localhost:80");

```

## SET 

```
httpManga.set("your.path.here", { yourValueHere: true, anything:[1,2,3]}).then((r)=>{
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

