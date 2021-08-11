/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector } from '@angular/core';
import { FabricModal } from '../../common/modal/fabric-modal';
import { FabricMessageComponent } from './fabric-message.component';
import { DOCUMENT } from '@angular/common';
export class FabricMessageService extends FabricModal {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} applicationRef
     * @param {?} injector
     * @param {?} document
     */
    constructor(componentFactoryResolver, applicationRef, injector, document) {
        super(componentFactoryResolver, applicationRef, injector, document);
    }
    /**
     * @return {?}
     */
    getComponent() {
        return FabricMessageComponent;
    }
    /**
     * @param {?} text
     * @return {?}
     */
    open(text) {
        this.createAndAppend();
        this.getComponentRef().instance.text = text;
        this.getComponentRef().instance.detectChanges();
    }
    /**
     * @return {?}
     */
    close() {
        this.removeComponent();
    }
}
FabricMessageService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FabricMessageService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: Injector },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW1lc3NhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbIm1vZGFsL21lc3NhZ2UvZmFicmljLW1lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRzNDLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxXQUFtQzs7Ozs7OztJQUU1RSxZQUFZLHdCQUFrRCxFQUMzRCxjQUE4QixFQUM5QixRQUFrQixFQUNBLFFBQWE7UUFDakMsS0FBSyxDQUFDLHdCQUF3QixFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDckUsQ0FBQzs7OztJQUVELFlBQVk7UUFDWCxPQUFPLHNCQUFzQixDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsSUFBSSxDQUFDLElBQVk7UUFDaEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUM1QyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ2pELENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0osSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3hCLENBQUM7OztZQXRCRCxVQUFVOzs7O1lBTGMsd0JBQXdCO1lBQXhDLGNBQWM7WUFBZ0QsUUFBUTs0Q0FXMUUsTUFBTSxTQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBsaWNhdGlvblJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBJbmplY3QsIEluamVjdGFibGUsIEluamVjdG9yLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGYWJyaWNNb2RhbCB9IGZyb20gJy4uLy4uL2NvbW1vbi9tb2RhbC9mYWJyaWMtbW9kYWwnO1xuaW1wb3J0IHsgRmFicmljTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4vZmFicmljLW1lc3NhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhYnJpY01lc3NhZ2VTZXJ2aWNlIGV4dGVuZHMgRmFicmljTW9kYWw8RmFicmljTWVzc2FnZUNvbXBvbmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdFx0XHRhcHBsaWNhdGlvblJlZjogQXBwbGljYXRpb25SZWYsXG5cdFx0XHRcdGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0QEluamVjdChET0NVTUVOVCkgZG9jdW1lbnQ6IGFueSkge1xuXHRcdHN1cGVyKGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgYXBwbGljYXRpb25SZWYsIGluamVjdG9yLCBkb2N1bWVudCk7XG5cdH1cblxuXHRnZXRDb21wb25lbnQoKTogVHlwZTxGYWJyaWNNZXNzYWdlQ29tcG9uZW50PiB7XG5cdFx0cmV0dXJuIEZhYnJpY01lc3NhZ2VDb21wb25lbnQ7XG5cdH1cblxuXHRvcGVuKHRleHQ6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuY3JlYXRlQW5kQXBwZW5kKCk7XG5cdFx0dGhpcy5nZXRDb21wb25lbnRSZWYoKS5pbnN0YW5jZS50ZXh0ID0gdGV4dDtcblx0XHR0aGlzLmdldENvbXBvbmVudFJlZigpLmluc3RhbmNlLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG5cdGNsb3NlKCk6IHZvaWQge1xuXHRcdHRoaXMucmVtb3ZlQ29tcG9uZW50KCk7XG5cdH1cbn1cbiJdfQ==