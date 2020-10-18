/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { TemplateFactory } from '../template/template.factory';
import { EditTemplatesComponent } from './edit-templates.component';
import { DataType } from '../../../../structure/field/core/domain/field/data/data-type';
export class EditTemplateFactory extends TemplateFactory {
    /**
     * @param {?} componentFactoryResolver
     */
    constructor(componentFactoryResolver) {
        super(EditTemplatesComponent, componentFactoryResolver);
    }
    /**
     * @return {?}
     */
    generateMapKeys() {
        return Object.keys(DataType)
            .map((/**
         * @param {?} key
         * @return {?}
         */
        key => DataType[key]));
    }
}
EditTemplateFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
EditTemplateFactory.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC10ZW1wbGF0ZS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2VkaXQvZWRpdC10ZW1wbGF0ZS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOERBQThELENBQUM7QUFJeEYsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGVBQXVDOzs7O0lBRS9FLFlBQVksd0JBQWtEO1FBQzdELEtBQUssQ0FDSixzQkFBc0IsRUFDdEIsd0JBQXdCLENBQ3hCLENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDdkIsR0FBRzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUM7SUFDaEMsQ0FBQzs7O1lBYkQsVUFBVTs7OztZQU5GLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGVtcGxhdGVGYWN0b3J5IH0gZnJvbSAnLi4vdGVtcGxhdGUvdGVtcGxhdGUuZmFjdG9yeSc7XG5pbXBvcnQgeyBFZGl0VGVtcGxhdGVzQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0LXRlbXBsYXRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZmllbGQvY29yZS9kb21haW4vZmllbGQvZGF0YS9kYXRhLXR5cGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFZGl0VGVtcGxhdGVGYWN0b3J5IGV4dGVuZHMgVGVtcGxhdGVGYWN0b3J5PEVkaXRUZW1wbGF0ZXNDb21wb25lbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge1xuXHRcdHN1cGVyKFxuXHRcdFx0RWRpdFRlbXBsYXRlc0NvbXBvbmVudCxcblx0XHRcdGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuXHRcdCk7XG5cdH1cblxuXHRnZW5lcmF0ZU1hcEtleXMoKTogQXJyYXk8RGF0YVR5cGU+IHtcblx0XHRyZXR1cm4gT2JqZWN0LmtleXMoRGF0YVR5cGUpXG5cdFx0XHRcdFx0IC5tYXAoa2V5ID0+IERhdGFUeXBlW2tleV0pO1xuXHR9XG59XG4iXX0=