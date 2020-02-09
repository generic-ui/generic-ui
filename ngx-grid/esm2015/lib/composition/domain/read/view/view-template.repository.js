/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ViewTemplateFactory } from './view-template.factory';
export class ViewTemplateRepository {
    /**
     * @param {?} columnTemplateFactory
     */
    constructor(columnTemplateFactory) {
        this.columnTemplateFactory = columnTemplateFactory;
    }
    /**
     * @param {?} view
     * @return {?}
     */
    findTemplate(view) {
        /** @type {?} */
        const typeToTemplate = this.columnTemplateFactory.getTemplates();
        return typeToTemplate.get(view);
    }
}
ViewTemplateRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ViewTemplateRepository.ctorParameters = () => [
    { type: ViewTemplateFactory }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ViewTemplateRepository.prototype.columnTemplateFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy10ZW1wbGF0ZS5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL3JlYWQvdmlldy92aWV3LXRlbXBsYXRlLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFLOUQsTUFBTSxPQUFPLHNCQUFzQjs7OztJQUVsQyxZQUFvQixxQkFBMEM7UUFBMUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUFxQjtJQUM5RCxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxJQUFjOztjQUNwQixjQUFjLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksRUFBRTtRQUVoRSxPQUFPLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7O1lBVkQsVUFBVTs7OztZQUpGLG1CQUFtQjs7Ozs7OztJQU9mLHVEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWaWV3VGVtcGxhdGVGYWN0b3J5IH0gZnJvbSAnLi92aWV3LXRlbXBsYXRlLmZhY3RvcnknO1xuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi9jZWxsLXZpZXcnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWaWV3VGVtcGxhdGVSZXBvc2l0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbHVtblRlbXBsYXRlRmFjdG9yeTogVmlld1RlbXBsYXRlRmFjdG9yeSkge1xuXHR9XG5cblx0ZmluZFRlbXBsYXRlKHZpZXc6IENlbGxWaWV3KTogVGVtcGxhdGVSZWY8YW55PiB7XG5cdFx0Y29uc3QgdHlwZVRvVGVtcGxhdGUgPSB0aGlzLmNvbHVtblRlbXBsYXRlRmFjdG9yeS5nZXRUZW1wbGF0ZXMoKTtcblxuXHRcdHJldHVybiB0eXBlVG9UZW1wbGF0ZS5nZXQodmlldyk7XG5cdH1cblxufVxuIl19