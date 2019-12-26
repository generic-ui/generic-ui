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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy10ZW1wbGF0ZS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9jb21wb3NpdGlvbi9yZWFkL3ZpZXcvdmlldy10ZW1wbGF0ZS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFJL0QsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGVBQXVDOzs7O0lBRS9FLFlBQVksd0JBQWtEO1FBQzdELEtBQUssQ0FDSixzQkFBc0IsRUFDdEIsd0JBQXdCLENBQ3hCLENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDdkIsR0FBRzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUM7SUFDaEMsQ0FBQzs7O1lBYkQsVUFBVTs7OztZQVBGLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBWaWV3VGVtcGxhdGVzQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3LXRlbXBsYXRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi9jZWxsLXZpZXcnO1xuaW1wb3J0IHsgVGVtcGxhdGVGYWN0b3J5IH0gZnJvbSAnLi4vdGVtcGxhdGUvdGVtcGxhdGUuZmFjdG9yeSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZpZXdUZW1wbGF0ZUZhY3RvcnkgZXh0ZW5kcyBUZW1wbGF0ZUZhY3Rvcnk8Vmlld1RlbXBsYXRlc0NvbXBvbmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRWaWV3VGVtcGxhdGVzQ29tcG9uZW50LFxuXHRcdFx0Y29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG5cdFx0KTtcblx0fVxuXG5cdGdlbmVyYXRlTWFwS2V5cygpOiBBcnJheTxDZWxsVmlldz4ge1xuXHRcdHJldHVybiBPYmplY3Qua2V5cyhDZWxsVmlldylcblx0XHRcdFx0XHQgLm1hcChrZXkgPT4gQ2VsbFZpZXdba2V5XSk7XG5cdH1cbn1cbiJdfQ==