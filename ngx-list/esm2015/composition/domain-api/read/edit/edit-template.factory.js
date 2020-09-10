/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { TemplateFactory } from '../template/template.factory';
import { EditTemplatesComponent } from './edit-templates.component';
import { DataType } from '../../../../structure/field/domain/core/field/data/data-type';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC10ZW1wbGF0ZS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9kb21haW4tYXBpL3JlYWQvZWRpdC9lZGl0LXRlbXBsYXRlLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUl4RixNQUFNLE9BQU8sbUJBQW9CLFNBQVEsZUFBdUM7Ozs7SUFFL0UsWUFBWSx3QkFBa0Q7UUFDN0QsS0FBSyxDQUNKLHNCQUFzQixFQUN0Qix3QkFBd0IsQ0FDeEIsQ0FBQztJQUNILENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUN2QixHQUFHOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQztJQUNoQyxDQUFDOzs7WUFiRCxVQUFVOzs7O1lBTkYsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZUZhY3RvcnkgfSBmcm9tICcuLi90ZW1wbGF0ZS90ZW1wbGF0ZS5mYWN0b3J5JztcbmltcG9ydCB7IEVkaXRUZW1wbGF0ZXNDb21wb25lbnQgfSBmcm9tICcuL2VkaXQtdGVtcGxhdGVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9maWVsZC9kb21haW4vY29yZS9maWVsZC9kYXRhL2RhdGEtdHlwZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVkaXRUZW1wbGF0ZUZhY3RvcnkgZXh0ZW5kcyBUZW1wbGF0ZUZhY3Rvcnk8RWRpdFRlbXBsYXRlc0NvbXBvbmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRFZGl0VGVtcGxhdGVzQ29tcG9uZW50LFxuXHRcdFx0Y29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG5cdFx0KTtcblx0fVxuXG5cdGdlbmVyYXRlTWFwS2V5cygpOiBBcnJheTxEYXRhVHlwZT4ge1xuXHRcdHJldHVybiBPYmplY3Qua2V5cyhEYXRhVHlwZSlcblx0XHRcdFx0XHQgLm1hcChrZXkgPT4gRGF0YVR5cGVba2V5XSk7XG5cdH1cbn1cbiJdfQ==