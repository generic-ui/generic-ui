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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy10ZW1wbGF0ZS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9jb21wb3NpdGlvbi9yZWFkL3ZpZXcvdmlldy10ZW1wbGF0ZS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHdCQUF3QixFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRy9EO0lBQ3lDLCtDQUF1QztJQUUvRSw2QkFBWSx3QkFBa0Q7ZUFDN0Qsa0JBQ0Msc0JBQXNCLEVBQ3RCLHdCQUF3QixDQUN4QjtJQUNGLENBQUM7Ozs7SUFFRCw2Q0FBZTs7O0lBQWY7UUFDQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQ3ZCLEdBQUc7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBYixDQUFhLEVBQUMsQ0FBQztJQUNoQyxDQUFDOztnQkFiRCxVQUFVOzs7O2dCQVBGLHdCQUF3Qjs7SUFxQmpDLDBCQUFDO0NBQUEsQUFkRCxDQUN5QyxlQUFlLEdBYXZEO1NBYlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFZpZXdUZW1wbGF0ZXNDb21wb25lbnQgfSBmcm9tICcuL3ZpZXctdGVtcGxhdGVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4uLy4uL2NlbGwtdmlldyc7XG5pbXBvcnQgeyBUZW1wbGF0ZUZhY3RvcnkgfSBmcm9tICcuLi90ZW1wbGF0ZS90ZW1wbGF0ZS5mYWN0b3J5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmlld1RlbXBsYXRlRmFjdG9yeSBleHRlbmRzIFRlbXBsYXRlRmFjdG9yeTxWaWV3VGVtcGxhdGVzQ29tcG9uZW50PiB7XG5cblx0Y29uc3RydWN0b3IoY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHtcblx0XHRzdXBlcihcblx0XHRcdFZpZXdUZW1wbGF0ZXNDb21wb25lbnQsXG5cdFx0XHRjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcblx0XHQpO1xuXHR9XG5cblx0Z2VuZXJhdGVNYXBLZXlzKCk6IEFycmF5PENlbGxWaWV3PiB7XG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKENlbGxWaWV3KVxuXHRcdFx0XHRcdCAubWFwKGtleSA9PiBDZWxsVmlld1trZXldKTtcblx0fVxufVxuIl19