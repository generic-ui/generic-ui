import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class RandomStringGenerator {
    static generate() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + `${RandomStringGenerator.index++}`;
    }
}
RandomStringGenerator.index = 0;
RandomStringGenerator.ɵfac = function RandomStringGenerator_Factory(t) { return new (t || RandomStringGenerator)(); };
RandomStringGenerator.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RandomStringGenerator, factory: RandomStringGenerator.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RandomStringGenerator, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZG9tLXN0cmluZy5nZW5lcmF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvY29tbW9uL3JhbmRvbS1zdHJpbmcuZ2VuZXJhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNDLE1BQU0sT0FBTyxxQkFBcUI7SUFJakMsTUFBTSxDQUFDLFFBQVE7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO0lBQ3ZJLENBQUM7O0FBSk0sMkJBQUssR0FBRyxDQUFDLENBQUM7MEZBRkwscUJBQXFCOzJFQUFyQixxQkFBcUIsV0FBckIscUJBQXFCO3VGQUFyQixxQkFBcUI7Y0FEakMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJhbmRvbVN0cmluZ0dlbmVyYXRvciB7XG5cblx0c3RhdGljIGluZGV4ID0gMDtcblxuXHRzdGF0aWMgZ2VuZXJhdGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDE1KSArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCAxNSkgKyBgJHtSYW5kb21TdHJpbmdHZW5lcmF0b3IuaW5kZXgrK31gO1xuXHR9XG5cbn1cbiJdfQ==