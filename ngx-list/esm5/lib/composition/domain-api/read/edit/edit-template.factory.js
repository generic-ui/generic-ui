/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { TemplateFactory } from '../template/template.factory';
import { EditTemplatesComponent } from './edit-templates.component';
import { DataType } from '../../../../../structure/field/domain/data-type/data-type';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC10ZW1wbGF0ZS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluLWFwaS9yZWFkL2VkaXQvZWRpdC10ZW1wbGF0ZS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHdCQUF3QixFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBR3JGO0lBQ3lDLCtDQUF1QztJQUUvRSw2QkFBWSx3QkFBa0Q7ZUFDN0Qsa0JBQ0Msc0JBQXNCLEVBQ3RCLHdCQUF3QixDQUN4QjtJQUNGLENBQUM7Ozs7SUFFRCw2Q0FBZTs7O0lBQWY7UUFDQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQ3ZCLEdBQUc7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBYixDQUFhLEVBQUMsQ0FBQztJQUNoQyxDQUFDOztnQkFiRCxVQUFVOzs7O2dCQU5GLHdCQUF3Qjs7SUFvQmpDLDBCQUFDO0NBQUEsQUFkRCxDQUN5QyxlQUFlLEdBYXZEO1NBYlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZUZhY3RvcnkgfSBmcm9tICcuLi90ZW1wbGF0ZS90ZW1wbGF0ZS5mYWN0b3J5JztcbmltcG9ydCB7IEVkaXRUZW1wbGF0ZXNDb21wb25lbnQgfSBmcm9tICcuL2VkaXQtdGVtcGxhdGVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9maWVsZC9kb21haW4vZGF0YS10eXBlL2RhdGEtdHlwZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVkaXRUZW1wbGF0ZUZhY3RvcnkgZXh0ZW5kcyBUZW1wbGF0ZUZhY3Rvcnk8RWRpdFRlbXBsYXRlc0NvbXBvbmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRFZGl0VGVtcGxhdGVzQ29tcG9uZW50LFxuXHRcdFx0Y29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG5cdFx0KTtcblx0fVxuXG5cdGdlbmVyYXRlTWFwS2V5cygpOiBBcnJheTxEYXRhVHlwZT4ge1xuXHRcdHJldHVybiBPYmplY3Qua2V5cyhEYXRhVHlwZSlcblx0XHRcdFx0XHQgLm1hcChrZXkgPT4gRGF0YVR5cGVba2V5XSk7XG5cdH1cbn1cbiJdfQ==