/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ClassModifier } from '../../../common/cdk/dom/class/class-modifier';
import { CssClass } from './css-class';
var CssClassModifier = /** @class */ (function () {
    function CssClassModifier() {
        this.classModifier = new ClassModifier();
    }
    /**
     * @param {?} htmlElement
     * @return {?}
     */
    CssClassModifier.prototype.select = /**
     * @param {?} htmlElement
     * @return {?}
     */
    function (htmlElement) {
        this.classModifier.getElement(htmlElement).add(CssClass.SELECTED);
    };
    /**
     * @param {?} htmlElement
     * @return {?}
     */
    CssClassModifier.prototype.unselect = /**
     * @param {?} htmlElement
     * @return {?}
     */
    function (htmlElement) {
        this.classModifier.getElement(htmlElement).remove(CssClass.SELECTED);
    };
    /**
     * @param {?} htmlElement
     * @param {?} clazzName
     * @return {?}
     */
    CssClassModifier.prototype.add = /**
     * @param {?} htmlElement
     * @param {?} clazzName
     * @return {?}
     */
    function (htmlElement, clazzName) {
        this.classModifier.getElement(htmlElement).add(clazzName);
    };
    /**
     * @param {?} htmlElement
     * @param {?} clazzName
     * @return {?}
     */
    CssClassModifier.prototype.remove = /**
     * @param {?} htmlElement
     * @param {?} clazzName
     * @return {?}
     */
    function (htmlElement, clazzName) {
        this.classModifier.getElement(htmlElement).remove(clazzName);
    };
    /**
     * @param {?} htmlElement
     * @return {?}
     */
    CssClassModifier.prototype.toggle = /**
     * @param {?} htmlElement
     * @return {?}
     */
    function (htmlElement) {
    };
    CssClassModifier.decorators = [
        { type: Injectable }
    ];
    return CssClassModifier;
}());
export { CssClassModifier };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CssClassModifier.prototype.classModifier;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NzLWNsYXNzLm1vZGlmaWVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvY29tbW9uL2Nzcy1jbGFzcy9jc3MtY2xhc3MubW9kaWZpZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFdkM7SUFBQTtRQUdrQixrQkFBYSxHQUFrQixJQUFJLGFBQWEsRUFBRSxDQUFDO0lBcUJyRSxDQUFDOzs7OztJQW5CQSxpQ0FBTTs7OztJQUFOLFVBQU8sV0FBd0I7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7OztJQUVELG1DQUFROzs7O0lBQVIsVUFBUyxXQUF3QjtRQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7Ozs7OztJQUVELDhCQUFHOzs7OztJQUFILFVBQUksV0FBd0IsRUFBRSxTQUFpQjtRQUM5QyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7O0lBRUQsaUNBQU07Ozs7O0lBQU4sVUFBTyxXQUF3QixFQUFFLFNBQWlCO1FBQ2pELElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7OztJQUVELGlDQUFNOzs7O0lBQU4sVUFBTyxXQUF3QjtJQUMvQixDQUFDOztnQkF0QkQsVUFBVTs7SUF3QlgsdUJBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQXZCWSxnQkFBZ0I7Ozs7OztJQUU1Qix5Q0FBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENsYXNzTW9kaWZpZXIgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL2RvbS9jbGFzcy9jbGFzcy1tb2RpZmllcic7XG5pbXBvcnQgeyBDc3NDbGFzcyB9IGZyb20gJy4vY3NzLWNsYXNzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENzc0NsYXNzTW9kaWZpZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY2xhc3NNb2RpZmllcjogQ2xhc3NNb2RpZmllciA9IG5ldyBDbGFzc01vZGlmaWVyKCk7XG5cblx0c2VsZWN0KGh0bWxFbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuXHRcdHRoaXMuY2xhc3NNb2RpZmllci5nZXRFbGVtZW50KGh0bWxFbGVtZW50KS5hZGQoQ3NzQ2xhc3MuU0VMRUNURUQpO1xuXHR9XG5cblx0dW5zZWxlY3QoaHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG5cdFx0dGhpcy5jbGFzc01vZGlmaWVyLmdldEVsZW1lbnQoaHRtbEVsZW1lbnQpLnJlbW92ZShDc3NDbGFzcy5TRUxFQ1RFRCk7XG5cdH1cblxuXHRhZGQoaHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50LCBjbGF6ek5hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuY2xhc3NNb2RpZmllci5nZXRFbGVtZW50KGh0bWxFbGVtZW50KS5hZGQoY2xhenpOYW1lKTtcblx0fVxuXG5cdHJlbW92ZShodG1sRWxlbWVudDogSFRNTEVsZW1lbnQsIGNsYXp6TmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5jbGFzc01vZGlmaWVyLmdldEVsZW1lbnQoaHRtbEVsZW1lbnQpLnJlbW92ZShjbGF6ek5hbWUpO1xuXHR9XG5cblx0dG9nZ2xlKGh0bWxFbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuXHR9XG5cbn1cbiJdfQ==