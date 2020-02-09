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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy10ZW1wbGF0ZS5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL3JlYWQvdmlldy92aWV3LXRlbXBsYXRlLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFJOUQ7SUFHQyxnQ0FBb0IscUJBQTBDO1FBQTFDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBcUI7SUFDOUQsQ0FBQzs7Ozs7SUFFRCw2Q0FBWTs7OztJQUFaLFVBQWEsSUFBYzs7WUFDcEIsY0FBYyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLEVBQUU7UUFFaEUsT0FBTyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7O2dCQVZELFVBQVU7Ozs7Z0JBSkYsbUJBQW1COztJQWdCNUIsNkJBQUM7Q0FBQSxBQVpELElBWUM7U0FYWSxzQkFBc0I7Ozs7OztJQUV0Qix1REFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmlld1RlbXBsYXRlRmFjdG9yeSB9IGZyb20gJy4vdmlldy10ZW1wbGF0ZS5mYWN0b3J5JztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vY2VsbC12aWV3JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmlld1RlbXBsYXRlUmVwb3NpdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb2x1bW5UZW1wbGF0ZUZhY3Rvcnk6IFZpZXdUZW1wbGF0ZUZhY3RvcnkpIHtcblx0fVxuXG5cdGZpbmRUZW1wbGF0ZSh2aWV3OiBDZWxsVmlldyk6IFRlbXBsYXRlUmVmPGFueT4ge1xuXHRcdGNvbnN0IHR5cGVUb1RlbXBsYXRlID0gdGhpcy5jb2x1bW5UZW1wbGF0ZUZhY3RvcnkuZ2V0VGVtcGxhdGVzKCk7XG5cblx0XHRyZXR1cm4gdHlwZVRvVGVtcGxhdGUuZ2V0KHZpZXcpO1xuXHR9XG5cbn1cbiJdfQ==