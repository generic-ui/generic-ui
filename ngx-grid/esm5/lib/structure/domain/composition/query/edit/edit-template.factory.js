/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { TemplateFactory } from '../template/template.factory';
import { EditTemplatesComponent } from './edit-templates.component';
import { DataType } from '../../../structure/command/field/data-type/data-type';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC10ZW1wbGF0ZS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9jb21wb3NpdGlvbi9xdWVyeS9lZGl0L2VkaXQtdGVtcGxhdGUuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUloRjtJQUN5QywrQ0FBdUM7SUFFL0UsNkJBQVksd0JBQWtEO2VBQzdELGtCQUNDLHNCQUFzQixFQUN0Qix3QkFBd0IsQ0FDeEI7SUFDRixDQUFDOzs7O0lBRUQsNkNBQWU7OztJQUFmO1FBQ0MsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUN2QixHQUFHOzs7O1FBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQWIsQ0FBYSxFQUFDLENBQUM7SUFDaEMsQ0FBQzs7Z0JBYkQsVUFBVTs7OztnQkFQRix3QkFBd0I7O0lBcUJqQywwQkFBQztDQUFBLEFBZEQsQ0FDeUMsZUFBZSxHQWF2RDtTQWJZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGVtcGxhdGVGYWN0b3J5IH0gZnJvbSAnLi4vdGVtcGxhdGUvdGVtcGxhdGUuZmFjdG9yeSc7XG5pbXBvcnQgeyBFZGl0VGVtcGxhdGVzQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0LXRlbXBsYXRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9kYXRhLXR5cGUvZGF0YS10eXBlJztcblxuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFZGl0VGVtcGxhdGVGYWN0b3J5IGV4dGVuZHMgVGVtcGxhdGVGYWN0b3J5PEVkaXRUZW1wbGF0ZXNDb21wb25lbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge1xuXHRcdHN1cGVyKFxuXHRcdFx0RWRpdFRlbXBsYXRlc0NvbXBvbmVudCxcblx0XHRcdGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuXHRcdCk7XG5cdH1cblxuXHRnZW5lcmF0ZU1hcEtleXMoKTogQXJyYXk8RGF0YVR5cGU+IHtcblx0XHRyZXR1cm4gT2JqZWN0LmtleXMoRGF0YVR5cGUpXG5cdFx0XHRcdFx0IC5tYXAoa2V5ID0+IERhdGFUeXBlW2tleV0pO1xuXHR9XG59XG4iXX0=