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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy10ZW1wbGF0ZS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZmVhdHVyZS1hcGkvcmVhZC92aWV3L3ZpZXctdGVtcGxhdGUuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUcvRDtJQUN5QywrQ0FBdUM7SUFFL0UsNkJBQVksd0JBQWtEO2VBQzdELGtCQUNDLHNCQUFzQixFQUN0Qix3QkFBd0IsQ0FDeEI7SUFDRixDQUFDOzs7O0lBRUQsNkNBQWU7OztJQUFmO1FBQ0MsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUN2QixHQUFHOzs7O1FBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQWIsQ0FBYSxFQUFDLENBQUM7SUFDaEMsQ0FBQzs7Z0JBYkQsVUFBVTs7OztnQkFQRix3QkFBd0I7O0lBcUJqQywwQkFBQztDQUFBLEFBZEQsQ0FDeUMsZUFBZSxHQWF2RDtTQWJZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBWaWV3VGVtcGxhdGVzQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3LXRlbXBsYXRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29sdW1uL2NlbGwtdmlldyc7XG5pbXBvcnQgeyBUZW1wbGF0ZUZhY3RvcnkgfSBmcm9tICcuLi90ZW1wbGF0ZS90ZW1wbGF0ZS5mYWN0b3J5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmlld1RlbXBsYXRlRmFjdG9yeSBleHRlbmRzIFRlbXBsYXRlRmFjdG9yeTxWaWV3VGVtcGxhdGVzQ29tcG9uZW50PiB7XG5cblx0Y29uc3RydWN0b3IoY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHtcblx0XHRzdXBlcihcblx0XHRcdFZpZXdUZW1wbGF0ZXNDb21wb25lbnQsXG5cdFx0XHRjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcblx0XHQpO1xuXHR9XG5cblx0Z2VuZXJhdGVNYXBLZXlzKCk6IEFycmF5PENlbGxWaWV3PiB7XG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKENlbGxWaWV3KVxuXHRcdFx0XHRcdCAubWFwKGtleSA9PiBDZWxsVmlld1trZXldKTtcblx0fVxufVxuIl19