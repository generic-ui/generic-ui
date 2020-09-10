/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { ViewTemplatesComponent } from './view-templates.component';
import { CellView } from '../../../domain/column/cell-view';
import { TemplateFactory } from '../template/template.factory';
var ViewTemplateFactory = /** @class */ (function (_super) {
    tslib_1.__extends(ViewTemplateFactory, _super);
    function ViewTemplateFactory(componentFactoryResolver) {
        return _super.call(this, ViewTemplatesComponent, componentFactoryResolver) || this;
    }
    /**
     * @return {?}
     */
    ViewTemplateFactory.prototype.generateMapKeys = /**
     * @return {?}
     */
    function () {
        return Object.keys(CellView)
            .map((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return CellView[key]; }));
    };
    ViewTemplateFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ViewTemplateFactory.ctorParameters = function () { return [
        { type: ComponentFactoryResolver }
    ]; };
    return ViewTemplateFactory;
}(TemplateFactory));
export { ViewTemplateFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy10ZW1wbGF0ZS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9kb21haW4tYXBpL3JlYWQvdmlldy92aWV3LXRlbXBsYXRlLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFHL0Q7SUFDeUMsK0NBQXVDO0lBRS9FLDZCQUFZLHdCQUFrRDtlQUM3RCxrQkFDQyxzQkFBc0IsRUFDdEIsd0JBQXdCLENBQ3hCO0lBQ0YsQ0FBQzs7OztJQUVELDZDQUFlOzs7SUFBZjtRQUNDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDdkIsR0FBRzs7OztRQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFiLENBQWEsRUFBQyxDQUFDO0lBQ2hDLENBQUM7O2dCQWJELFVBQVU7Ozs7Z0JBUEYsd0JBQXdCOztJQXFCakMsMEJBQUM7Q0FBQSxBQWRELENBQ3lDLGVBQWUsR0FhdkQ7U0FiWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVmlld1RlbXBsYXRlc0NvbXBvbmVudCB9IGZyb20gJy4vdmlldy10ZW1wbGF0ZXMuY29tcG9uZW50JztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbHVtbi9jZWxsLXZpZXcnO1xuaW1wb3J0IHsgVGVtcGxhdGVGYWN0b3J5IH0gZnJvbSAnLi4vdGVtcGxhdGUvdGVtcGxhdGUuZmFjdG9yeSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZpZXdUZW1wbGF0ZUZhY3RvcnkgZXh0ZW5kcyBUZW1wbGF0ZUZhY3Rvcnk8Vmlld1RlbXBsYXRlc0NvbXBvbmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRWaWV3VGVtcGxhdGVzQ29tcG9uZW50LFxuXHRcdFx0Y29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG5cdFx0KTtcblx0fVxuXG5cdGdlbmVyYXRlTWFwS2V5cygpOiBBcnJheTxDZWxsVmlldz4ge1xuXHRcdHJldHVybiBPYmplY3Qua2V5cyhDZWxsVmlldylcblx0XHRcdFx0XHQgLm1hcChrZXkgPT4gQ2VsbFZpZXdba2V5XSk7XG5cdH1cbn1cbiJdfQ==