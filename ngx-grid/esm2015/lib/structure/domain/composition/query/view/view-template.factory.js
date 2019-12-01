/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { ViewTemplatesComponent } from './view-templates.component';
import { CellView } from '../../cell-view';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy10ZW1wbGF0ZS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9jb21wb3NpdGlvbi9xdWVyeS92aWV3L3ZpZXctdGVtcGxhdGUuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHdCQUF3QixFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBSS9ELE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxlQUF1Qzs7OztJQUUvRSxZQUFZLHdCQUFrRDtRQUM3RCxLQUFLLENBQ0osc0JBQXNCLEVBQ3RCLHdCQUF3QixDQUN4QixDQUFDO0lBQ0gsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQ3ZCLEdBQUc7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDO0lBQ2hDLENBQUM7OztZQWJELFVBQVU7Ozs7WUFQRix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVmlld1RlbXBsYXRlc0NvbXBvbmVudCB9IGZyb20gJy4vdmlldy10ZW1wbGF0ZXMuY29tcG9uZW50JztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vY2VsbC12aWV3JztcbmltcG9ydCB7IFRlbXBsYXRlRmFjdG9yeSB9IGZyb20gJy4uL3RlbXBsYXRlL3RlbXBsYXRlLmZhY3RvcnknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWaWV3VGVtcGxhdGVGYWN0b3J5IGV4dGVuZHMgVGVtcGxhdGVGYWN0b3J5PFZpZXdUZW1wbGF0ZXNDb21wb25lbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge1xuXHRcdHN1cGVyKFxuXHRcdFx0Vmlld1RlbXBsYXRlc0NvbXBvbmVudCxcblx0XHRcdGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuXHRcdCk7XG5cdH1cblxuXHRnZW5lcmF0ZU1hcEtleXMoKTogQXJyYXk8Q2VsbFZpZXc+IHtcblx0XHRyZXR1cm4gT2JqZWN0LmtleXMoQ2VsbFZpZXcpXG5cdFx0XHRcdFx0IC5tYXAoa2V5ID0+IENlbGxWaWV3W2tleV0pO1xuXHR9XG59XG4iXX0=