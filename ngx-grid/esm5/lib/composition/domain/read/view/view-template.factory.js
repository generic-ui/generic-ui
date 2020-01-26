/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { ViewTemplatesComponent } from './view-templates.component';
import { CellView } from '../../cell-view';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy10ZW1wbGF0ZS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL3JlYWQvdmlldy92aWV3LXRlbXBsYXRlLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFHL0Q7SUFDeUMsK0NBQXVDO0lBRS9FLDZCQUFZLHdCQUFrRDtlQUM3RCxrQkFDQyxzQkFBc0IsRUFDdEIsd0JBQXdCLENBQ3hCO0lBQ0YsQ0FBQzs7OztJQUVELDZDQUFlOzs7SUFBZjtRQUNDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDdkIsR0FBRzs7OztRQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFiLENBQWEsRUFBQyxDQUFDO0lBQ2hDLENBQUM7O2dCQWJELFVBQVU7Ozs7Z0JBUEYsd0JBQXdCOztJQXFCakMsMEJBQUM7Q0FBQSxBQWRELENBQ3lDLGVBQWUsR0FhdkQ7U0FiWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVmlld1RlbXBsYXRlc0NvbXBvbmVudCB9IGZyb20gJy4vdmlldy10ZW1wbGF0ZXMuY29tcG9uZW50JztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vY2VsbC12aWV3JztcbmltcG9ydCB7IFRlbXBsYXRlRmFjdG9yeSB9IGZyb20gJy4uL3RlbXBsYXRlL3RlbXBsYXRlLmZhY3RvcnknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWaWV3VGVtcGxhdGVGYWN0b3J5IGV4dGVuZHMgVGVtcGxhdGVGYWN0b3J5PFZpZXdUZW1wbGF0ZXNDb21wb25lbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge1xuXHRcdHN1cGVyKFxuXHRcdFx0Vmlld1RlbXBsYXRlc0NvbXBvbmVudCxcblx0XHRcdGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuXHRcdCk7XG5cdH1cblxuXHRnZW5lcmF0ZU1hcEtleXMoKTogQXJyYXk8Q2VsbFZpZXc+IHtcblx0XHRyZXR1cm4gT2JqZWN0LmtleXMoQ2VsbFZpZXcpXG5cdFx0XHRcdFx0IC5tYXAoa2V5ID0+IENlbGxWaWV3W2tleV0pO1xuXHR9XG59XG4iXX0=