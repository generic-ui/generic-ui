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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy10ZW1wbGF0ZS5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9jb21wb3NpdGlvbi9xdWVyeS92aWV3L3ZpZXctdGVtcGxhdGUucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUs5RDtJQUdDLGdDQUFvQixxQkFBMEM7UUFBMUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUFxQjtJQUM5RCxDQUFDOzs7OztJQUVELDZDQUFZOzs7O0lBQVosVUFBYSxJQUFjOztZQUNwQixjQUFjLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksRUFBRTtRQUVoRSxPQUFPLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Z0JBVkQsVUFBVTs7OztnQkFMRixtQkFBbUI7O0lBaUI1Qiw2QkFBQztDQUFBLEFBWkQsSUFZQztTQVhZLHNCQUFzQjs7Ozs7O0lBRXRCLHVEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWaWV3VGVtcGxhdGVGYWN0b3J5IH0gZnJvbSAnLi92aWV3LXRlbXBsYXRlLmZhY3RvcnknO1xuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi9jZWxsLXZpZXcnO1xuXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZpZXdUZW1wbGF0ZVJlcG9zaXRvcnkge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29sdW1uVGVtcGxhdGVGYWN0b3J5OiBWaWV3VGVtcGxhdGVGYWN0b3J5KSB7XG5cdH1cblxuXHRmaW5kVGVtcGxhdGUodmlldzogQ2VsbFZpZXcpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcblx0XHRjb25zdCB0eXBlVG9UZW1wbGF0ZSA9IHRoaXMuY29sdW1uVGVtcGxhdGVGYWN0b3J5LmdldFRlbXBsYXRlcygpO1xuXG5cdFx0cmV0dXJuIHR5cGVUb1RlbXBsYXRlLmdldCh2aWV3KTtcblx0fVxuXG59XG4iXX0=