/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { TemplateFactory } from '../template/template.factory';
import { EditTemplatesComponent } from './edit-templates.component';
import { DataType } from '../../../../structure/domain/structure/field/data-type/data-type';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC10ZW1wbGF0ZS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluLWFwaS9yZWFkL2VkaXQvZWRpdC10ZW1wbGF0ZS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFJNUYsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGVBQXVDOzs7O0lBRS9FLFlBQVksd0JBQWtEO1FBQzdELEtBQUssQ0FDSixzQkFBc0IsRUFDdEIsd0JBQXdCLENBQ3hCLENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDdkIsR0FBRzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUM7SUFDaEMsQ0FBQzs7O1lBYkQsVUFBVTs7OztZQU5GLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGVtcGxhdGVGYWN0b3J5IH0gZnJvbSAnLi4vdGVtcGxhdGUvdGVtcGxhdGUuZmFjdG9yeSc7XG5pbXBvcnQgeyBFZGl0VGVtcGxhdGVzQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0LXRlbXBsYXRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9maWVsZC9kYXRhLXR5cGUvZGF0YS10eXBlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRWRpdFRlbXBsYXRlRmFjdG9yeSBleHRlbmRzIFRlbXBsYXRlRmFjdG9yeTxFZGl0VGVtcGxhdGVzQ29tcG9uZW50PiB7XG5cblx0Y29uc3RydWN0b3IoY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHtcblx0XHRzdXBlcihcblx0XHRcdEVkaXRUZW1wbGF0ZXNDb21wb25lbnQsXG5cdFx0XHRjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcblx0XHQpO1xuXHR9XG5cblx0Z2VuZXJhdGVNYXBLZXlzKCk6IEFycmF5PERhdGFUeXBlPiB7XG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKERhdGFUeXBlKVxuXHRcdFx0XHRcdCAubWFwKGtleSA9PiBEYXRhVHlwZVtrZXldKTtcblx0fVxufVxuIl19