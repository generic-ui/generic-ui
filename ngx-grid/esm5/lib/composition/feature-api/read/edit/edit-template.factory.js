/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { TemplateFactory } from '../template/template.factory';
import { EditTemplatesComponent } from './edit-templates.component';
import { DataType } from '../../../../structure/domain/structure/field/data-type/data-type';
var EditTemplateFactory = /** @class */ (function (_super) {
    tslib_1.__extends(EditTemplateFactory, _super);
    function EditTemplateFactory(componentFactoryResolver) {
        return _super.call(this, EditTemplatesComponent, componentFactoryResolver) || this;
    }
    /**
     * @return {?}
     */
    EditTemplateFactory.prototype.generateMapKeys = /**
     * @return {?}
     */
    function () {
        return Object.keys(DataType)
            .map((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return DataType[key]; }));
    };
    EditTemplateFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    EditTemplateFactory.ctorParameters = function () { return [
        { type: ComponentFactoryResolver }
    ]; };
    return EditTemplateFactory;
}(TemplateFactory));
export { EditTemplateFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC10ZW1wbGF0ZS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZmVhdHVyZS1hcGkvcmVhZC9lZGl0L2VkaXQtdGVtcGxhdGUuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUc1RjtJQUN5QywrQ0FBdUM7SUFFL0UsNkJBQVksd0JBQWtEO2VBQzdELGtCQUNDLHNCQUFzQixFQUN0Qix3QkFBd0IsQ0FDeEI7SUFDRixDQUFDOzs7O0lBRUQsNkNBQWU7OztJQUFmO1FBQ0MsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUN2QixHQUFHOzs7O1FBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQWIsQ0FBYSxFQUFDLENBQUM7SUFDaEMsQ0FBQzs7Z0JBYkQsVUFBVTs7OztnQkFORix3QkFBd0I7O0lBb0JqQywwQkFBQztDQUFBLEFBZEQsQ0FDeUMsZUFBZSxHQWF2RDtTQWJZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGVtcGxhdGVGYWN0b3J5IH0gZnJvbSAnLi4vdGVtcGxhdGUvdGVtcGxhdGUuZmFjdG9yeSc7XG5pbXBvcnQgeyBFZGl0VGVtcGxhdGVzQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0LXRlbXBsYXRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9maWVsZC9kYXRhLXR5cGUvZGF0YS10eXBlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRWRpdFRlbXBsYXRlRmFjdG9yeSBleHRlbmRzIFRlbXBsYXRlRmFjdG9yeTxFZGl0VGVtcGxhdGVzQ29tcG9uZW50PiB7XG5cblx0Y29uc3RydWN0b3IoY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHtcblx0XHRzdXBlcihcblx0XHRcdEVkaXRUZW1wbGF0ZXNDb21wb25lbnQsXG5cdFx0XHRjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcblx0XHQpO1xuXHR9XG5cblx0Z2VuZXJhdGVNYXBLZXlzKCk6IEFycmF5PERhdGFUeXBlPiB7XG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKERhdGFUeXBlKVxuXHRcdFx0XHRcdCAubWFwKGtleSA9PiBEYXRhVHlwZVtrZXldKTtcblx0fVxufVxuIl19