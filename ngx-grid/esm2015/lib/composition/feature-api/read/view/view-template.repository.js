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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy10ZW1wbGF0ZS5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZmVhdHVyZS1hcGkvcmVhZC92aWV3L3ZpZXctdGVtcGxhdGUucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUs5RCxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBRWxDLFlBQW9CLHFCQUEwQztRQUExQywwQkFBcUIsR0FBckIscUJBQXFCLENBQXFCO0lBQzlELENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLElBQWM7O2NBQ3BCLGNBQWMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxFQUFFO1FBRWhFLE9BQU8sY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7WUFWRCxVQUFVOzs7O1lBSkYsbUJBQW1COzs7Ozs7O0lBT2YsdURBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZpZXdUZW1wbGF0ZUZhY3RvcnkgfSBmcm9tICcuL3ZpZXctdGVtcGxhdGUuZmFjdG9yeSc7XG5pbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb2x1bW4vY2VsbC12aWV3JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmlld1RlbXBsYXRlUmVwb3NpdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb2x1bW5UZW1wbGF0ZUZhY3Rvcnk6IFZpZXdUZW1wbGF0ZUZhY3RvcnkpIHtcblx0fVxuXG5cdGZpbmRUZW1wbGF0ZSh2aWV3OiBDZWxsVmlldyk6IFRlbXBsYXRlUmVmPGFueT4ge1xuXHRcdGNvbnN0IHR5cGVUb1RlbXBsYXRlID0gdGhpcy5jb2x1bW5UZW1wbGF0ZUZhY3RvcnkuZ2V0VGVtcGxhdGVzKCk7XG5cblx0XHRyZXR1cm4gdHlwZVRvVGVtcGxhdGUuZ2V0KHZpZXcpO1xuXHR9XG5cbn1cbiJdfQ==