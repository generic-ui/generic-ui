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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy10ZW1wbGF0ZS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluLWFwaS9yZWFkL3ZpZXcvdmlldy10ZW1wbGF0ZS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFJL0QsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGVBQXVDOzs7O0lBRS9FLFlBQVksd0JBQWtEO1FBQzdELEtBQUssQ0FDSixzQkFBc0IsRUFDdEIsd0JBQXdCLENBQ3hCLENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDdkIsR0FBRzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUM7SUFDaEMsQ0FBQzs7O1lBYkQsVUFBVTs7OztZQVBGLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBWaWV3VGVtcGxhdGVzQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3LXRlbXBsYXRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29sdW1uL2NlbGwtdmlldyc7XG5pbXBvcnQgeyBUZW1wbGF0ZUZhY3RvcnkgfSBmcm9tICcuLi90ZW1wbGF0ZS90ZW1wbGF0ZS5mYWN0b3J5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmlld1RlbXBsYXRlRmFjdG9yeSBleHRlbmRzIFRlbXBsYXRlRmFjdG9yeTxWaWV3VGVtcGxhdGVzQ29tcG9uZW50PiB7XG5cblx0Y29uc3RydWN0b3IoY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHtcblx0XHRzdXBlcihcblx0XHRcdFZpZXdUZW1wbGF0ZXNDb21wb25lbnQsXG5cdFx0XHRjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcblx0XHQpO1xuXHR9XG5cblx0Z2VuZXJhdGVNYXBLZXlzKCk6IEFycmF5PENlbGxWaWV3PiB7XG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKENlbGxWaWV3KVxuXHRcdFx0XHRcdCAubWFwKGtleSA9PiBDZWxsVmlld1trZXldKTtcblx0fVxufVxuIl19