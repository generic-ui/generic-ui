/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { ViewTemplatesComponent } from './view-templates.component';
import { CellView } from '../../../domain/column/cell-view';
import { TemplateFactory } from '../template/template.factory';
export class ViewTemplateFactory extends TemplateFactory {
    /**
     * @param {?} componentFactoryResolver
     */
    constructor(componentFactoryResolver) {
        super(ViewTemplatesComponent, componentFactoryResolver);
    }
    /**
     * @return {?}
     */
    generateMapKeys() {
        return Object.keys(CellView)
            .map((/**
         * @param {?} key
         * @return {?}
         */
        key => CellView[key]));
    }
}
ViewTemplateFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ViewTemplateFactory.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy10ZW1wbGF0ZS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9kb21haW4tYXBpL3JlYWQvdmlldy92aWV3LXRlbXBsYXRlLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUkvRCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsZUFBdUM7Ozs7SUFFL0UsWUFBWSx3QkFBa0Q7UUFDN0QsS0FBSyxDQUNKLHNCQUFzQixFQUN0Qix3QkFBd0IsQ0FDeEIsQ0FBQztJQUNILENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUN2QixHQUFHOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQztJQUNoQyxDQUFDOzs7WUFiRCxVQUFVOzs7O1lBUEYsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFZpZXdUZW1wbGF0ZXNDb21wb25lbnQgfSBmcm9tICcuL3ZpZXctdGVtcGxhdGVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb2x1bW4vY2VsbC12aWV3JztcbmltcG9ydCB7IFRlbXBsYXRlRmFjdG9yeSB9IGZyb20gJy4uL3RlbXBsYXRlL3RlbXBsYXRlLmZhY3RvcnknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWaWV3VGVtcGxhdGVGYWN0b3J5IGV4dGVuZHMgVGVtcGxhdGVGYWN0b3J5PFZpZXdUZW1wbGF0ZXNDb21wb25lbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge1xuXHRcdHN1cGVyKFxuXHRcdFx0Vmlld1RlbXBsYXRlc0NvbXBvbmVudCxcblx0XHRcdGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuXHRcdCk7XG5cdH1cblxuXHRnZW5lcmF0ZU1hcEtleXMoKTogQXJyYXk8Q2VsbFZpZXc+IHtcblx0XHRyZXR1cm4gT2JqZWN0LmtleXMoQ2VsbFZpZXcpXG5cdFx0XHRcdFx0IC5tYXAoa2V5ID0+IENlbGxWaWV3W2tleV0pO1xuXHR9XG59XG4iXX0=