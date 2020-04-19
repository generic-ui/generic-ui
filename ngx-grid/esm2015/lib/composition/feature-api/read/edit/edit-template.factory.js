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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC10ZW1wbGF0ZS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZmVhdHVyZS1hcGkvcmVhZC9lZGl0L2VkaXQtdGVtcGxhdGUuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHdCQUF3QixFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBSTVGLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxlQUF1Qzs7OztJQUUvRSxZQUFZLHdCQUFrRDtRQUM3RCxLQUFLLENBQ0osc0JBQXNCLEVBQ3RCLHdCQUF3QixDQUN4QixDQUFDO0lBQ0gsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQ3ZCLEdBQUc7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDO0lBQ2hDLENBQUM7OztZQWJELFVBQVU7Ozs7WUFORix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRlbXBsYXRlRmFjdG9yeSB9IGZyb20gJy4uL3RlbXBsYXRlL3RlbXBsYXRlLmZhY3RvcnknO1xuaW1wb3J0IHsgRWRpdFRlbXBsYXRlc0NvbXBvbmVudCB9IGZyb20gJy4vZWRpdC10ZW1wbGF0ZXMuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvZmllbGQvZGF0YS10eXBlL2RhdGEtdHlwZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVkaXRUZW1wbGF0ZUZhY3RvcnkgZXh0ZW5kcyBUZW1wbGF0ZUZhY3Rvcnk8RWRpdFRlbXBsYXRlc0NvbXBvbmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRFZGl0VGVtcGxhdGVzQ29tcG9uZW50LFxuXHRcdFx0Y29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG5cdFx0KTtcblx0fVxuXG5cdGdlbmVyYXRlTWFwS2V5cygpOiBBcnJheTxEYXRhVHlwZT4ge1xuXHRcdHJldHVybiBPYmplY3Qua2V5cyhEYXRhVHlwZSlcblx0XHRcdFx0XHQgLm1hcChrZXkgPT4gRGF0YVR5cGVba2V5XSk7XG5cdH1cbn1cbiJdfQ==