import {describe, expect, test} from '@jest/globals';

import HttpManga from "../src/index"

const httpManga = new HttpManga("http://localhost:80");

console.log("Start server before run tests");
const testObject = {x:10, y:15}

describe('save data', () => {
  test('add obj using set and get', () => {
    httpManga.set('test.one', testObject).then((r)=>{
        httpManga.get('test.one.x').then((gr)=>{
            expect(gr).toBe(testObject.x)
        })
    });
  });
  test('add obj using reset and get', () => {
    httpManga.reset('test.two', testObject).then((r)=>{
        httpManga.get('test.two.x').then((gr)=>{
            expect(gr).toBe(testObject.x)
        })
    });
  });
});