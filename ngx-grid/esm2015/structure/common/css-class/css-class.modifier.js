/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ClassModifier } from '../../../common/cdk/dom/class/class-modifier';
import { CssClass } from './css-class';
export class CssClassModifier {
    constructor() {
        this.classModifier = new ClassModifier();
    }
    /**
     * @param {?} htmlElement
     * @return {?}
     */
    select(htmlElement) {
        this.classModifier.getElement(htmlElement).add(CssClass.SELECTED);
    }
    /**
     * @param {?} htmlElement
     * @return {?}
     */
    unselect(htmlElement) {
        this.classModifier.getElement(htmlElement).remove(CssClass.SELECTED);
    }
    /**
     * @param {?} htmlElement
     * @param {?} clazzName
     * @return {?}
     */
    add(htmlElement, clazzName) {
        this.classModifier.getElement(htmlElement).add(clazzName);
    }
    /**
     * @param {?} htmlElement
     * @param {?} clazzName
     * @return {?}
     */
    remove(htmlElement, clazzName) {
        this.classModifier.getElement(htmlElement).remove(clazzName);
    }
    /**
     * @param {?} htmlElement
     * @return {?}
     */
    toggle(htmlElement) {
    }
}
CssClassModifier.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CssClassModifier.prototype.classModifier;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NzLWNsYXNzLm1vZGlmaWVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvY29tbW9uL2Nzcy1jbGFzcy9jc3MtY2xhc3MubW9kaWZpZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHdkMsTUFBTSxPQUFPLGdCQUFnQjtJQUQ3QjtRQUdrQixrQkFBYSxHQUFrQixJQUFJLGFBQWEsRUFBRSxDQUFDO0lBcUJyRSxDQUFDOzs7OztJQW5CQSxNQUFNLENBQUMsV0FBd0I7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxXQUF3QjtRQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7Ozs7OztJQUVELEdBQUcsQ0FBQyxXQUF3QixFQUFFLFNBQWlCO1FBQzlDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsV0FBd0IsRUFBRSxTQUFpQjtRQUNqRCxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsV0FBd0I7SUFDL0IsQ0FBQzs7O1lBdEJELFVBQVU7Ozs7Ozs7SUFHVix5Q0FBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENsYXNzTW9kaWZpZXIgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL2RvbS9jbGFzcy9jbGFzcy1tb2RpZmllcic7XG5pbXBvcnQgeyBDc3NDbGFzcyB9IGZyb20gJy4vY3NzLWNsYXNzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENzc0NsYXNzTW9kaWZpZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY2xhc3NNb2RpZmllcjogQ2xhc3NNb2RpZmllciA9IG5ldyBDbGFzc01vZGlmaWVyKCk7XG5cblx0c2VsZWN0KGh0bWxFbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuXHRcdHRoaXMuY2xhc3NNb2RpZmllci5nZXRFbGVtZW50KGh0bWxFbGVtZW50KS5hZGQoQ3NzQ2xhc3MuU0VMRUNURUQpO1xuXHR9XG5cblx0dW5zZWxlY3QoaHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG5cdFx0dGhpcy5jbGFzc01vZGlmaWVyLmdldEVsZW1lbnQoaHRtbEVsZW1lbnQpLnJlbW92ZShDc3NDbGFzcy5TRUxFQ1RFRCk7XG5cdH1cblxuXHRhZGQoaHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50LCBjbGF6ek5hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuY2xhc3NNb2RpZmllci5nZXRFbGVtZW50KGh0bWxFbGVtZW50KS5hZGQoY2xhenpOYW1lKTtcblx0fVxuXG5cdHJlbW92ZShodG1sRWxlbWVudDogSFRNTEVsZW1lbnQsIGNsYXp6TmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5jbGFzc01vZGlmaWVyLmdldEVsZW1lbnQoaHRtbEVsZW1lbnQpLnJlbW92ZShjbGF6ek5hbWUpO1xuXHR9XG5cblx0dG9nZ2xlKGh0bWxFbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuXHR9XG5cbn1cbiJdfQ==