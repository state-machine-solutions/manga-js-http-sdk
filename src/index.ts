import axios from "axios";

export interface MangaPathBody{
    path?:string;
}
export interface MangaValueBody extends MangaPathBody{
    value:any;
}

export interface MangaDataReturn {
    success:boolean;
    result?:any;
    messages?:string[];
}
export default class HttpManga{
    endpoint: string;
    requestConfig: { headers: { 'Content-Type': string; Accept: string; }; };

    constructor(endpoint:string){
        this.endpoint = endpoint[endpoint.length-1] == '/'? endpoint.substring(0, endpoint.length-2):  endpoint;
        this.requestConfig = {
            headers:{
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        }
    }
    protected async post(method:string, body:MangaPathBody|MangaValueBody):Promise<MangaDataReturn>{
        const result = await axios.post(this.endpoint+method, body, this.requestConfig);
        return result.data as MangaDataReturn;
    }
    protected async put(method:string, body:MangaValueBody):Promise<MangaDataReturn>{
        const result = await axios.put(this.endpoint+method, body, this.requestConfig);
        return result.data as MangaDataReturn;
    }
    public async get(path:string = ''):Promise<any>{
        let url:string = this.endpoint+'/get';
        if(path){
            url += '?path='+path;
        }
        const result = await axios.get(url, this.requestConfig);
        return result?.data;
    }
    public async set(path:string, value:any):Promise<MangaDataReturn>{
        return this.post('/set', {path, value})
    }
    public async reset(path:string, value:any):Promise<MangaDataReturn>{
        return this.put('/', {path, value})
    }
    public async delete(path:string):Promise<MangaDataReturn>{
        return this.post('/delete', {path})
    }
    public async clear():Promise<MangaDataReturn>{
        return this.post('/clear', {});
    }
}