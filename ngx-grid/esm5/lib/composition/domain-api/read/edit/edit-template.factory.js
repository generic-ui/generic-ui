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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC10ZW1wbGF0ZS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluLWFwaS9yZWFkL2VkaXQvZWRpdC10ZW1wbGF0ZS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHdCQUF3QixFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBRzVGO0lBQ3lDLCtDQUF1QztJQUUvRSw2QkFBWSx3QkFBa0Q7ZUFDN0Qsa0JBQ0Msc0JBQXNCLEVBQ3RCLHdCQUF3QixDQUN4QjtJQUNGLENBQUM7Ozs7SUFFRCw2Q0FBZTs7O0lBQWY7UUFDQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQ3ZCLEdBQUc7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBYixDQUFhLEVBQUMsQ0FBQztJQUNoQyxDQUFDOztnQkFiRCxVQUFVOzs7O2dCQU5GLHdCQUF3Qjs7SUFvQmpDLDBCQUFDO0NBQUEsQUFkRCxDQUN5QyxlQUFlLEdBYXZEO1NBYlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZUZhY3RvcnkgfSBmcm9tICcuLi90ZW1wbGF0ZS90ZW1wbGF0ZS5mYWN0b3J5JztcbmltcG9ydCB7IEVkaXRUZW1wbGF0ZXNDb21wb25lbnQgfSBmcm9tICcuL2VkaXQtdGVtcGxhdGVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2ZpZWxkL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFZGl0VGVtcGxhdGVGYWN0b3J5IGV4dGVuZHMgVGVtcGxhdGVGYWN0b3J5PEVkaXRUZW1wbGF0ZXNDb21wb25lbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge1xuXHRcdHN1cGVyKFxuXHRcdFx0RWRpdFRlbXBsYXRlc0NvbXBvbmVudCxcblx0XHRcdGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuXHRcdCk7XG5cdH1cblxuXHRnZW5lcmF0ZU1hcEtleXMoKTogQXJyYXk8RGF0YVR5cGU+IHtcblx0XHRyZXR1cm4gT2JqZWN0LmtleXMoRGF0YVR5cGUpXG5cdFx0XHRcdFx0IC5tYXAoa2V5ID0+IERhdGFUeXBlW2tleV0pO1xuXHR9XG59XG4iXX0=