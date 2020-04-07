/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { FabricInlineDialogComponent } from './fabric-inline-dialog.component';
import { InlineDialogPlacement } from './placement';
import { InlineDialogGeometryService } from './fabric-inline-dialog-geometry.service';
import { DialogService } from '../common/dialog.service';
import { Theme } from '../../themes/theme';
import { themeToken } from '../../themes/theme.token';
var FabricInlineDialogService = /** @class */ (function (_super) {
    tslib_1.__extends(FabricInlineDialogService, _super);
    function FabricInlineDialogService(componentFactoryResolver, applicationRef, injector, document, inlineDialogGeometryService) {
        var _this = _super.call(this) || this;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.applicationRef = applicationRef;
        _this.injector = injector;
        _this.document = document;
        _this.inlineDialogGeometryService = inlineDialogGeometryService;
        _this.inlineDialogRef = null;
        _this.opened = false;
        _this.opened$ = new BehaviorSubject(false);
        return _this;
    }
    /**
     * @return {?}
     */
    FabricInlineDialogService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.removeInlineDialog();
        _super.prototype.ngOnDestroy.call(this);
    };
    /**
     * @param {?} element
     * @param {?} component
     * @param {?=} config
     * @return {?}
     */
    FabricInlineDialogService.prototype.open = /**
     * @param {?} element
     * @param {?} component
     * @param {?=} config
     * @return {?}
     */
    function (element, component, config) {
        if (event) {
            event.stopPropagation();
        }
        if (!this.inlineDialogRef) {
            /** @type {?} */
            var parentInjector = this.injector;
            /** @type {?} */
            var placement = InlineDialogPlacement.Top;
            /** @type {?} */
            var offset = 0;
            /** @type {?} */
            var theme = Theme.FABRIC;
            if (config && config.injector) {
                parentInjector = config.injector;
            }
            if (config && config.placement) {
                placement = config.placement;
            }
            if (config && config.offset) {
                offset = config.offset;
            }
            if (config && config.theme) {
                theme = config.theme;
            }
            /** @type {?} */
            var injector = Injector.create({
                providers: [{
                        provide: themeToken,
                        useValue: theme
                    }],
                parent: parentInjector
            });
            this.setOpened(true);
            this.appendInlineDialogToElement(component, injector);
            this.inlineDialogGeometryService.getInlineDialogCords(element, placement, offset);
        }
        else {
            this.close();
        }
    };
    /**
     * @return {?}
     */
    FabricInlineDialogService.prototype.close = /**
     * @return {?}
     */
    function () {
        this.removeInlineDialog();
        this.setOpened(false);
    };
    /**
     * @return {?}
     */
    FabricInlineDialogService.prototype.isOpened = /**
     * @return {?}
     */
    function () {
        return this.opened;
    };
    /**
     * @return {?}
     */
    FabricInlineDialogService.prototype.onOpened = /**
     * @return {?}
     */
    function () {
        return this.opened$.asObservable();
    };
    /**
     * @private
     * @param {?} component
     * @param {?} injector
     * @return {?}
     */
    FabricInlineDialogService.prototype.appendInlineDialogToElement = /**
     * @private
     * @param {?} component
     * @param {?} injector
     * @return {?}
     */
    function (component, injector) {
        /** @type {?} */
        var componentRef = this.componentFactoryResolver
            .resolveComponentFactory(FabricInlineDialogComponent)
            .create(injector);
        componentRef.instance.inlineDialogNestedComponent = component;
        componentRef.changeDetectorRef.detectChanges();
        this.applicationRef.attachView(componentRef.hostView);
        /** @type {?} */
        var domDialogElement = (/** @type {?} */ (((/** @type {?} */ (componentRef.hostView)))
            .rootNodes[0]));
        this.document.body.appendChild(domDialogElement);
        this.inlineDialogRef = componentRef;
    };
    /**
     * @private
     * @return {?}
     */
    FabricInlineDialogService.prototype.removeInlineDialog = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.inlineDialogRef) {
            this.applicationRef.detachView(this.inlineDialogRef.hostView);
            this.inlineDialogRef.destroy();
            this.inlineDialogRef = null;
        }
    };
    /**
     * @private
     * @param {?} opened
     * @return {?}
     */
    FabricInlineDialogService.prototype.setOpened = /**
     * @private
     * @param {?} opened
     * @return {?}
     */
    function (opened) {
        this.opened = opened;
        this.opened$.next(this.opened);
    };
    FabricInlineDialogService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FabricInlineDialogService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: Injector },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: InlineDialogGeometryService }
    ]; };
    return FabricInlineDialogService;
}(DialogService));
export { FabricInlineDialogService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogService.prototype.inlineDialogRef;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogService.prototype.opened;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogService.prototype.opened$;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogService.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogService.prototype.applicationRef;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogService.prototype.document;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogService.prototype.inlineDialogGeometryService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWlubGluZS1kaWFsb2cuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbIm1vZGFsL2lubGluZS1kaWFsb2cvZmFicmljLWlubGluZS1kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTixjQUFjLEVBQ2Qsd0JBQXdCLEVBSXhCLE1BQU0sRUFDTixVQUFVLEVBQ1YsUUFBUSxFQUdSLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBRW5ELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN0RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUl0RDtJQUMrQyxxREFBYTtJQVEzRCxtQ0FBb0Isd0JBQWtELEVBQzNELGNBQThCLEVBQzlCLFFBQWtCLEVBQ0EsUUFBYSxFQUMvQiwyQkFBd0Q7UUFKbkUsWUFLQyxpQkFBTyxTQUNQO1FBTm1CLDhCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDM0Qsb0JBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGNBQVEsR0FBUixRQUFRLENBQVU7UUFDQSxjQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLGlDQUEyQixHQUEzQiwyQkFBMkIsQ0FBNkI7UUFWM0QscUJBQWUsR0FBOEMsSUFBSSxDQUFDO1FBRWxFLFlBQU0sR0FBRyxLQUFLLENBQUM7UUFFZixhQUFPLEdBQUcsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7O0lBUTdDLENBQUM7Ozs7SUFFRCwrQ0FBVzs7O0lBQVg7UUFDQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixpQkFBTSxXQUFXLFdBQUUsQ0FBQztJQUNyQixDQUFDOzs7Ozs7O0lBRUQsd0NBQUk7Ozs7OztJQUFKLFVBQUssT0FBbUIsRUFBRSxTQUE0QyxFQUFFLE1BQW1HO1FBRTFLLElBQUksS0FBSyxFQUFFO1lBQ1YsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7O2dCQUV0QixjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVE7O2dCQUNqQyxTQUFTLEdBQUcscUJBQXFCLENBQUMsR0FBRzs7Z0JBQ3JDLE1BQU0sR0FBRyxDQUFDOztnQkFDVixLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU07WUFFckIsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRTtnQkFDOUIsY0FBYyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7YUFDakM7WUFFRCxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFO2dCQUMvQixTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQzthQUM3QjtZQUVELElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7Z0JBQzVCLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO2FBQ3ZCO1lBRUQsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtnQkFDM0IsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7YUFDckI7O2dCQUVLLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO2dCQUNoQyxTQUFTLEVBQUUsQ0FBQzt3QkFDWCxPQUFPLEVBQUUsVUFBVTt3QkFDbkIsUUFBUSxFQUFFLEtBQUs7cUJBQ2YsQ0FBQztnQkFDRixNQUFNLEVBQUUsY0FBYzthQUN0QixDQUFDO1lBRUYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsMkJBQTJCLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQywyQkFBMkIsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ2xGO2FBQU07WUFDTixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDYjtJQUNGLENBQUM7Ozs7SUFFRCx5Q0FBSzs7O0lBQUw7UUFDQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCw0Q0FBUTs7O0lBQVI7UUFDQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELDRDQUFROzs7SUFBUjtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNwQyxDQUFDOzs7Ozs7O0lBRU8sK0RBQTJCOzs7Ozs7SUFBbkMsVUFBb0MsU0FBYyxFQUFFLFFBQWtCOztZQUUvRCxZQUFZLEdBQUcsSUFBSSxDQUFDLHdCQUF3QjthQUMxQyx1QkFBdUIsQ0FBQywyQkFBMkIsQ0FBQzthQUNwRCxNQUFNLENBQUMsUUFBUSxDQUFDO1FBRXhCLFlBQVksQ0FBQyxRQUFRLENBQUMsMkJBQTJCLEdBQUcsU0FBUyxDQUFDO1FBRTlELFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUUvQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7O1lBRWhELGdCQUFnQixHQUFHLG1CQUFBLENBQUMsbUJBQUEsWUFBWSxDQUFDLFFBQVEsRUFBd0IsQ0FBQzthQUN0RSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQWU7UUFFN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFakQsSUFBSSxDQUFDLGVBQWUsR0FBRyxZQUFZLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFTyxzREFBa0I7Ozs7SUFBMUI7UUFDQyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDekIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1NBQzVCO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sNkNBQVM7Ozs7O0lBQWpCLFVBQWtCLE1BQWU7UUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7O2dCQS9HRCxVQUFVOzs7O2dCQXRCVix3QkFBd0I7Z0JBRHhCLGNBQWM7Z0JBT2QsUUFBUTtnREE0QkosTUFBTSxTQUFDLFFBQVE7Z0JBbkJYLDJCQUEyQjs7SUF3SHBDLGdDQUFDO0NBQUEsQUFqSEQsQ0FDK0MsYUFBYSxHQWdIM0Q7U0FoSFkseUJBQXlCOzs7Ozs7SUFFckMsb0RBQTBFOzs7OztJQUUxRSwyQ0FBdUI7Ozs7O0lBRXZCLDRDQUE2Qzs7Ozs7SUFFakMsNkRBQTBEOzs7OztJQUNuRSxtREFBc0M7Ozs7O0lBQ3RDLDZDQUEwQjs7Ozs7SUFDMUIsNkNBQXVDOzs7OztJQUN2QyxnRUFBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRBcHBsaWNhdGlvblJlZixcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRDb21wb25lbnRSZWYsXG5cdEVsZW1lbnRSZWYsXG5cdEVtYmVkZGVkVmlld1JlZixcblx0SW5qZWN0LFxuXHRJbmplY3RhYmxlLFxuXHRJbmplY3Rvcixcblx0T25EZXN0cm95LFxuXHRUeXBlXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEZhYnJpY0lubGluZURpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vZmFicmljLWlubGluZS1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IElubGluZURpYWxvZ1BsYWNlbWVudCB9IGZyb20gJy4vcGxhY2VtZW50JztcbmltcG9ydCB7IElubGluZURpYWxvZ0dlb21ldHJ5U2VydmljZSB9IGZyb20gJy4vZmFicmljLWlubGluZS1kaWFsb2ctZ2VvbWV0cnkuc2VydmljZSc7XG5pbXBvcnQgeyBEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vY29tbW9uL2RpYWxvZy5zZXJ2aWNlJztcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWVzL3RoZW1lJztcbmltcG9ydCB7IHRoZW1lVG9rZW4gfSBmcm9tICcuLi8uLi90aGVtZXMvdGhlbWUudG9rZW4nO1xuaW1wb3J0IHsgRmFicmljTmVzdGVkRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2ZhYnJpYy5uZXN0ZWQtZGlhbG9nLmNvbXBvbmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhYnJpY0lubGluZURpYWxvZ1NlcnZpY2UgZXh0ZW5kcyBEaWFsb2dTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRwcml2YXRlIGlubGluZURpYWxvZ1JlZjogQ29tcG9uZW50UmVmPEZhYnJpY05lc3RlZERpYWxvZ0NvbXBvbmVudD4gPSBudWxsO1xuXG5cdHByaXZhdGUgb3BlbmVkID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBvcGVuZWQkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHRcdFx0cHJpdmF0ZSBhcHBsaWNhdGlvblJlZjogQXBwbGljYXRpb25SZWYsXG5cdFx0XHRcdHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG5cdFx0XHRcdHByaXZhdGUgaW5saW5lRGlhbG9nR2VvbWV0cnlTZXJ2aWNlOiBJbmxpbmVEaWFsb2dHZW9tZXRyeVNlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5yZW1vdmVJbmxpbmVEaWFsb2coKTtcblx0XHRzdXBlci5uZ09uRGVzdHJveSgpO1xuXHR9XG5cblx0b3BlbihlbGVtZW50OiBFbGVtZW50UmVmLCBjb21wb25lbnQ6IFR5cGU8RmFicmljTmVzdGVkRGlhbG9nQ29tcG9uZW50PiwgY29uZmlnPzogeyBpbmplY3Rvcj86IEluamVjdG9yLCBwbGFjZW1lbnQ/OiBJbmxpbmVEaWFsb2dQbGFjZW1lbnQsIG9mZnNldD86IG51bWJlciwgdGhlbWU/OiBUaGVtZSB9KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQpIHtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH1cblxuXHRcdGlmICghdGhpcy5pbmxpbmVEaWFsb2dSZWYpIHtcblxuXHRcdFx0bGV0IHBhcmVudEluamVjdG9yID0gdGhpcy5pbmplY3Rvcixcblx0XHRcdFx0cGxhY2VtZW50ID0gSW5saW5lRGlhbG9nUGxhY2VtZW50LlRvcCxcblx0XHRcdFx0b2Zmc2V0ID0gMCxcblx0XHRcdFx0dGhlbWUgPSBUaGVtZS5GQUJSSUM7XG5cblx0XHRcdGlmIChjb25maWcgJiYgY29uZmlnLmluamVjdG9yKSB7XG5cdFx0XHRcdHBhcmVudEluamVjdG9yID0gY29uZmlnLmluamVjdG9yO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy5wbGFjZW1lbnQpIHtcblx0XHRcdFx0cGxhY2VtZW50ID0gY29uZmlnLnBsYWNlbWVudDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGNvbmZpZyAmJiBjb25maWcub2Zmc2V0KSB7XG5cdFx0XHRcdG9mZnNldCA9IGNvbmZpZy5vZmZzZXQ7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjb25maWcgJiYgY29uZmlnLnRoZW1lKSB7XG5cdFx0XHRcdHRoZW1lID0gY29uZmlnLnRoZW1lO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBpbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XG5cdFx0XHRcdHByb3ZpZGVyczogW3tcblx0XHRcdFx0XHRwcm92aWRlOiB0aGVtZVRva2VuLFxuXHRcdFx0XHRcdHVzZVZhbHVlOiB0aGVtZVxuXHRcdFx0XHR9XSxcblx0XHRcdFx0cGFyZW50OiBwYXJlbnRJbmplY3RvclxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuc2V0T3BlbmVkKHRydWUpO1xuXHRcdFx0dGhpcy5hcHBlbmRJbmxpbmVEaWFsb2dUb0VsZW1lbnQoY29tcG9uZW50LCBpbmplY3Rvcik7XG5cdFx0XHR0aGlzLmlubGluZURpYWxvZ0dlb21ldHJ5U2VydmljZS5nZXRJbmxpbmVEaWFsb2dDb3JkcyhlbGVtZW50LCBwbGFjZW1lbnQsIG9mZnNldCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY2xvc2UoKTtcblx0XHR9XG5cdH1cblxuXHRjbG9zZSgpOiB2b2lkIHtcblx0XHR0aGlzLnJlbW92ZUlubGluZURpYWxvZygpO1xuXHRcdHRoaXMuc2V0T3BlbmVkKGZhbHNlKTtcblx0fVxuXG5cdGlzT3BlbmVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm9wZW5lZDtcblx0fVxuXG5cdG9uT3BlbmVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLm9wZW5lZCQuYXNPYnNlcnZhYmxlKCk7XG5cdH1cblxuXHRwcml2YXRlIGFwcGVuZElubGluZURpYWxvZ1RvRWxlbWVudChjb21wb25lbnQ6IGFueSwgaW5qZWN0b3I6IEluamVjdG9yKTogdm9pZCB7XG5cblx0XHRjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuXHRcdFx0XHRcdFx0XHRcdCAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoRmFicmljSW5saW5lRGlhbG9nQ29tcG9uZW50KVxuXHRcdFx0XHRcdFx0XHRcdCAuY3JlYXRlKGluamVjdG9yKTtcblxuXHRcdGNvbXBvbmVudFJlZi5pbnN0YW5jZS5pbmxpbmVEaWFsb2dOZXN0ZWRDb21wb25lbnQgPSBjb21wb25lbnQ7XG5cblx0XHRjb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXG5cdFx0dGhpcy5hcHBsaWNhdGlvblJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG5cblx0XHRjb25zdCBkb21EaWFsb2dFbGVtZW50ID0gKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55Pilcblx0XHRcdC5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG5cblx0XHR0aGlzLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9tRGlhbG9nRWxlbWVudCk7XG5cblx0XHR0aGlzLmlubGluZURpYWxvZ1JlZiA9IGNvbXBvbmVudFJlZjtcblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlSW5saW5lRGlhbG9nKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlubGluZURpYWxvZ1JlZikge1xuXHRcdFx0dGhpcy5hcHBsaWNhdGlvblJlZi5kZXRhY2hWaWV3KHRoaXMuaW5saW5lRGlhbG9nUmVmLmhvc3RWaWV3KTtcblx0XHRcdHRoaXMuaW5saW5lRGlhbG9nUmVmLmRlc3Ryb3koKTtcblx0XHRcdHRoaXMuaW5saW5lRGlhbG9nUmVmID0gbnVsbDtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHNldE9wZW5lZChvcGVuZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLm9wZW5lZCA9IG9wZW5lZDtcblx0XHR0aGlzLm9wZW5lZCQubmV4dCh0aGlzLm9wZW5lZCk7XG5cdH1cblxufVxuIl19