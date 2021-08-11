/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector } from '@angular/core';
import { FabricModal } from '../../common/modal/fabric-modal';
import { FabricSelectOptionsComponent } from './options/select-options.component';
import { SelectOptionsGeometryService } from './options/select-options-geometry.service';
import { DOCUMENT } from '@angular/common';
export class SelectOptionModalService extends FabricModal {
    /**
     * @param {?} selectOptionsGeometryService
     * @param {?} componentFactoryResolver
     * @param {?} applicationRef
     * @param {?} injector
     * @param {?} document
     */
    constructor(selectOptionsGeometryService, componentFactoryResolver, applicationRef, injector, document) {
        super(componentFactoryResolver, applicationRef, injector, document);
        this.selectOptionsGeometryService = selectOptionsGeometryService;
    }
    /**
     * @return {?}
     */
    getComponent() {
        return FabricSelectOptionsComponent;
    }
    /**
     * @param {?} options
     * @param {?} width
     * @return {?}
     */
    open(options, width) {
        this.createAndAppend();
        this.getComponentRef().instance.options = options;
        this.getComponentRef().instance.width = width;
        this.getComponentRef().instance.detectChanges();
        this.selectOptionsGeometryService.setGeometry(this.getComponentRef().instance.getElementRef());
        this.getComponentRef().instance.detectChanges();
    }
    /**
     * @return {?}
     */
    closeOptions() {
        this.removeComponent();
    }
}
SelectOptionModalService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SelectOptionModalService.ctorParameters = () => [
    { type: SelectOptionsGeometryService },
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: Injector },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SelectOptionModalService.prototype.selectOptionsGeometryService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW9wdGlvbi1tb2RhbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiZm9ybS9zZWxlY3Qvc2VsZWN0LW9wdGlvbi1tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM5RCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN6RixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFJM0MsTUFBTSxPQUFPLHdCQUF5QixTQUFRLFdBQXlDOzs7Ozs7OztJQUV0RixZQUE2Qiw0QkFBMEQsRUFDcEYsd0JBQWtELEVBQ2xELGNBQThCLEVBQzlCLFFBQWtCLEVBQ0EsUUFBYTtRQUNqQyxLQUFLLENBQUMsd0JBQXdCLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUx4QyxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO0lBTXZGLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1gsT0FBTyw0QkFBNEIsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7SUFFRCxJQUFJLENBQUMsT0FBK0IsRUFBRSxLQUFhO1FBQ2xELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDbEQsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQzlDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLDRCQUE0QixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFDL0YsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNqRCxDQUFDOzs7O0lBRUQsWUFBWTtRQUNYLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7WUExQkQsVUFBVTs7OztZQUpGLDRCQUE0QjtZQUhaLHdCQUF3QjtZQUF4QyxjQUFjO1lBQWdELFFBQVE7NENBYzFFLE1BQU0sU0FBQyxRQUFROzs7Ozs7O0lBSlAsZ0VBQTJFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwbGljYXRpb25SZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmFicmljTW9kYWwgfSBmcm9tICcuLi8uLi9jb21tb24vbW9kYWwvZmFicmljLW1vZGFsJztcbmltcG9ydCB7IEZhYnJpY1NlbGVjdE9wdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL29wdGlvbnMvc2VsZWN0LW9wdGlvbnMuY29tcG9uZW50JztcbmltcG9ydCB7IFNlbGVjdE9wdGlvbnNHZW9tZXRyeVNlcnZpY2UgfSBmcm9tICcuL29wdGlvbnMvc2VsZWN0LW9wdGlvbnMtZ2VvbWV0cnkuc2VydmljZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBHdWlTZWxlY3RPcHRpb24gfSBmcm9tICcuL3NlbGVjdC1vcHRpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VsZWN0T3B0aW9uTW9kYWxTZXJ2aWNlIGV4dGVuZHMgRmFicmljTW9kYWw8RmFicmljU2VsZWN0T3B0aW9uc0NvbXBvbmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc2VsZWN0T3B0aW9uc0dlb21ldHJ5U2VydmljZTogU2VsZWN0T3B0aW9uc0dlb21ldHJ5U2VydmljZSxcblx0XHRcdFx0Y29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0XHRcdGFwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZixcblx0XHRcdFx0aW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRASW5qZWN0KERPQ1VNRU5UKSBkb2N1bWVudDogYW55KSB7XG5cdFx0c3VwZXIoY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBhcHBsaWNhdGlvblJlZiwgaW5qZWN0b3IsIGRvY3VtZW50KTtcblx0fVxuXG5cdGdldENvbXBvbmVudCgpOiBUeXBlPEZhYnJpY1NlbGVjdE9wdGlvbnNDb21wb25lbnQ+IHtcblx0XHRyZXR1cm4gRmFicmljU2VsZWN0T3B0aW9uc0NvbXBvbmVudDtcblx0fVxuXG5cdG9wZW4ob3B0aW9uczogQXJyYXk8R3VpU2VsZWN0T3B0aW9uPiwgd2lkdGg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuY3JlYXRlQW5kQXBwZW5kKCk7XG5cdFx0dGhpcy5nZXRDb21wb25lbnRSZWYoKS5pbnN0YW5jZS5vcHRpb25zID0gb3B0aW9ucztcblx0XHR0aGlzLmdldENvbXBvbmVudFJlZigpLmluc3RhbmNlLndpZHRoID0gd2lkdGg7XG5cdFx0dGhpcy5nZXRDb21wb25lbnRSZWYoKS5pbnN0YW5jZS5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0dGhpcy5zZWxlY3RPcHRpb25zR2VvbWV0cnlTZXJ2aWNlLnNldEdlb21ldHJ5KHRoaXMuZ2V0Q29tcG9uZW50UmVmKCkuaW5zdGFuY2UuZ2V0RWxlbWVudFJlZigpKTtcblx0XHR0aGlzLmdldENvbXBvbmVudFJlZigpLmluc3RhbmNlLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG5cdGNsb3NlT3B0aW9ucygpOiB2b2lkIHtcblx0XHR0aGlzLnJlbW92ZUNvbXBvbmVudCgpO1xuXHR9XG59XG4iXX0=