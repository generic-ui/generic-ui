import { Injectable } from '@angular/core';
import { ClassModifier } from '../../../common/cdk/dom/class/class-modifier';
import { CssClass } from './css-class';
import * as i0 from "@angular/core";
export class CssClassModifier {
    constructor() {
        this.classModifier = new ClassModifier();
    }
    select(htmlElement) {
        this.classModifier.getElement(htmlElement).add(CssClass.SELECTED);
    }
    unselect(htmlElement) {
        this.classModifier.getElement(htmlElement).remove(CssClass.SELECTED);
    }
    add(htmlElement, clazzName) {
        this.classModifier.getElement(htmlElement).add(clazzName);
    }
    remove(htmlElement, clazzName) {
        this.classModifier.getElement(htmlElement).remove(clazzName);
    }
    toggle(htmlElement) {
    }
}
CssClassModifier.ɵfac = function CssClassModifier_Factory(t) { return new (t || CssClassModifier)(); };
CssClassModifier.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CssClassModifier, factory: CssClassModifier.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CssClassModifier, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NzLWNsYXNzLm1vZGlmaWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvY29tbW9uL2Nzcy1jbGFzcy9jc3MtY2xhc3MubW9kaWZpZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDN0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFHdkMsTUFBTSxPQUFPLGdCQUFnQjtJQUQ3QjtRQUdrQixrQkFBYSxHQUFrQixJQUFJLGFBQWEsRUFBRSxDQUFDO0tBcUJwRTtJQW5CQSxNQUFNLENBQUMsV0FBd0I7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsUUFBUSxDQUFDLFdBQXdCO1FBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVELEdBQUcsQ0FBQyxXQUF3QixFQUFFLFNBQWlCO1FBQzlDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsTUFBTSxDQUFDLFdBQXdCLEVBQUUsU0FBaUI7UUFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxNQUFNLENBQUMsV0FBd0I7SUFDL0IsQ0FBQzs7Z0ZBckJXLGdCQUFnQjtzRUFBaEIsZ0JBQWdCLFdBQWhCLGdCQUFnQjt1RkFBaEIsZ0JBQWdCO2NBRDVCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENsYXNzTW9kaWZpZXIgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL2RvbS9jbGFzcy9jbGFzcy1tb2RpZmllcic7XG5pbXBvcnQgeyBDc3NDbGFzcyB9IGZyb20gJy4vY3NzLWNsYXNzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENzc0NsYXNzTW9kaWZpZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY2xhc3NNb2RpZmllcjogQ2xhc3NNb2RpZmllciA9IG5ldyBDbGFzc01vZGlmaWVyKCk7XG5cblx0c2VsZWN0KGh0bWxFbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuXHRcdHRoaXMuY2xhc3NNb2RpZmllci5nZXRFbGVtZW50KGh0bWxFbGVtZW50KS5hZGQoQ3NzQ2xhc3MuU0VMRUNURUQpO1xuXHR9XG5cblx0dW5zZWxlY3QoaHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG5cdFx0dGhpcy5jbGFzc01vZGlmaWVyLmdldEVsZW1lbnQoaHRtbEVsZW1lbnQpLnJlbW92ZShDc3NDbGFzcy5TRUxFQ1RFRCk7XG5cdH1cblxuXHRhZGQoaHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50LCBjbGF6ek5hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuY2xhc3NNb2RpZmllci5nZXRFbGVtZW50KGh0bWxFbGVtZW50KS5hZGQoY2xhenpOYW1lKTtcblx0fVxuXG5cdHJlbW92ZShodG1sRWxlbWVudDogSFRNTEVsZW1lbnQsIGNsYXp6TmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5jbGFzc01vZGlmaWVyLmdldEVsZW1lbnQoaHRtbEVsZW1lbnQpLnJlbW92ZShjbGF6ek5hbWUpO1xuXHR9XG5cblx0dG9nZ2xlKGh0bWxFbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuXHR9XG5cbn1cbiJdfQ==