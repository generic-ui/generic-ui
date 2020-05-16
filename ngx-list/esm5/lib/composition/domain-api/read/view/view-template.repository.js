/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ViewTemplateFactory } from './view-template.factory';
var ViewTemplateRepository = /** @class */ (function () {
    function ViewTemplateRepository(columnTemplateFactory) {
        this.columnTemplateFactory = columnTemplateFactory;
    }
    /**
     * @param {?} view
     * @return {?}
     */
    ViewTemplateRepository.prototype.findTemplate = /**
     * @param {?} view
     * @return {?}
     */
    function (view) {
        /** @type {?} */
        var typeToTemplate = this.columnTemplateFactory.getTemplates();
        return typeToTemplate.get(view);
    };
    ViewTemplateRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ViewTemplateRepository.ctorParameters = function () { return [
        { type: ViewTemplateFactory }
    ]; };
    return ViewTemplateRepository;
}());
export { ViewTemplateRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ViewTemplateRepository.prototype.columnTemplateFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy10ZW1wbGF0ZS5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluLWFwaS9yZWFkL3ZpZXcvdmlldy10ZW1wbGF0ZS5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBSTlEO0lBR0MsZ0NBQW9CLHFCQUEwQztRQUExQywwQkFBcUIsR0FBckIscUJBQXFCLENBQXFCO0lBQzlELENBQUM7Ozs7O0lBRUQsNkNBQVk7Ozs7SUFBWixVQUFhLElBQWM7O1lBQ3BCLGNBQWMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxFQUFFO1FBRWhFLE9BQU8sY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDOztnQkFWRCxVQUFVOzs7O2dCQUpGLG1CQUFtQjs7SUFnQjVCLDZCQUFDO0NBQUEsQUFaRCxJQVlDO1NBWFksc0JBQXNCOzs7Ozs7SUFFdEIsdURBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZpZXdUZW1wbGF0ZUZhY3RvcnkgfSBmcm9tICcuL3ZpZXctdGVtcGxhdGUuZmFjdG9yeSc7XG5pbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb2x1bW4vY2VsbC12aWV3JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmlld1RlbXBsYXRlUmVwb3NpdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb2x1bW5UZW1wbGF0ZUZhY3Rvcnk6IFZpZXdUZW1wbGF0ZUZhY3RvcnkpIHtcblx0fVxuXG5cdGZpbmRUZW1wbGF0ZSh2aWV3OiBDZWxsVmlldyk6IFRlbXBsYXRlUmVmPGFueT4ge1xuXHRcdGNvbnN0IHR5cGVUb1RlbXBsYXRlID0gdGhpcy5jb2x1bW5UZW1wbGF0ZUZhY3RvcnkuZ2V0VGVtcGxhdGVzKCk7XG5cblx0XHRyZXR1cm4gdHlwZVRvVGVtcGxhdGUuZ2V0KHZpZXcpO1xuXHR9XG5cbn1cbiJdfQ==