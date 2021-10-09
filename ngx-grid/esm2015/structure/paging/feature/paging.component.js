/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../common/cdk/component/smart-component';
import { PagingWarehouse } from '../core/api/paging.warehouse';
import { PagingCommandInvoker } from '../core/api/paging.command-invoker';
import { SourceWarehouse } from '../../source/core/api/source.warehouse';
import { PagingDisplayModeArchive } from './mode/paging-display-mode.archive';
import { PagingDisplayMode } from './mode/paging-display-mode';
import { PagingPosition } from './paging-position';
import { StreamCloser } from '../../../common/cdk/reactive/stream-closer';
import { CssClassModifier } from '../../common/css-class/css-class.modifier';
import { CssClass } from '../../common/css-class/css-class';
import { StructureId } from '../../core/api/structure.id';
export class PagingComponent extends SmartComponent {
    /**
     * @param {?} elRef
     * @param {?} changeDetectorRef
     * @param {?} cssClassModifier
     * @param {?} structureId
     * @param {?} pagingWarehouse
     * @param {?} pagingCommandInvoker
     * @param {?} sourceWarehouse
     * @param {?} pagingDisplayModeArchive
     */
    constructor(elRef, changeDetectorRef, cssClassModifier, structureId, pagingWarehouse, pagingCommandInvoker, sourceWarehouse, pagingDisplayModeArchive) {
        super(changeDetectorRef, elRef);
        this.elRef = elRef;
        this.changeDetectorRef = changeDetectorRef;
        this.cssClassModifier = cssClassModifier;
        this.structureId = structureId;
        this.pagingWarehouse = pagingWarehouse;
        this.pagingCommandInvoker = pagingCommandInvoker;
        this.sourceWarehouse = sourceWarehouse;
        this.pagingDisplayModeArchive = pagingDisplayModeArchive;
        this.alternativeDisplay = false;
        this.isPagingVisible = false;
        this.localStreamCloser = new StreamCloser();
        this.addClassToHost('gui-flex');
        this.addClassToHost('gui-justify-end');
        this.addClassToHost('gui-items-center');
        this.addClassToHost('gui-p-4');
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.position) {
            if (this.position === PagingPosition.BOTTOM) {
                this.cssClassModifier.remove(this.elRef.nativeElement, CssClass.PAGING_TOP_CLASS_NAME);
                this.cssClassModifier.add(this.elRef.nativeElement, CssClass.PAGING_BOTTOM_CLASS_NAME);
            }
            else {
                this.cssClassModifier.remove(this.elRef.nativeElement, CssClass.PAGING_BOTTOM_CLASS_NAME);
                this.cssClassModifier.add(this.elRef.nativeElement, CssClass.PAGING_TOP_CLASS_NAME);
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.hermesSubscribe(this.pagingDisplayModeArchive.on(), (/**
         * @param {?} mode
         * @return {?}
         */
        (mode) => {
            this.alternativeDisplay = mode === PagingDisplayMode.ADVANCED;
        }));
        this.hermesSubscribe(this.pagingWarehouse.onPaging(this.structureId), (/**
         * @param {?} paging
         * @return {?}
         */
        (paging) => {
            this.paging = paging;
            this.calculatePagingVisibility();
        }));
        this.hermesSubscribe(this.sourceWarehouse.onOriginSize(this.structureId), (/**
         * @param {?} size
         * @return {?}
         */
        (size) => {
            this.sourceSize = size;
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.localStreamCloser.unsubscribe();
        super.ngOnDestroy();
    }
    /**
     * @param {?} pageSize
     * @return {?}
     */
    changePageSize(pageSize) {
        this.pagingCommandInvoker.changePageSize(pageSize, this.structureId);
    }
    /**
     * @return {?}
     */
    nextPage() {
        if (!this.sourceSize) {
            return;
        }
        this.pagingCommandInvoker.nextPage(this.structureId);
    }
    /**
     * @return {?}
     */
    prevPage() {
        this.pagingCommandInvoker.prevPage(this.structureId);
    }
    /**
     * @private
     * @return {?}
     */
    calculatePagingVisibility() {
        this.isPagingVisible = this.paging && this.paging.isEnabled() &&
            (((this.position === PagingPosition.TOP) && this.paging.isPagerTop()) ||
                ((this.position === PagingPosition.BOTTOM) && this.paging.isPagerBottom()));
    }
    /**
     * @protected
     * @return {?}
     */
    getSelectorName() {
        return 'gui-paging';
    }
}
PagingComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-paging][position]',
                template: "<ng-container *ngIf=\"isPagingVisible && !alternativeDisplay\">\n\n\t<ng-container *ngIf=\"!minimal; else minimalTemplate\">\n\n\t\t<div (pageSizeChanged)=\"changePageSize($event)\"\n\t\t\t [paging]=\"paging\"\n\t\t\t gui-paging-select>\n\t\t</div>\n\n\t\t<div [paging]=\"paging\"\n\t\t\t gui-paging-stats>\n\t\t</div>\n\n\t\t<div (nextPageChanged)=\"nextPage()\"\n\t\t\t (prevPageChanged)=\"prevPage()\"\n\t\t\t [paging]=\"paging\"\n\t\t\t [sourceSize]=\"sourceSize\"\n\t\t\t gui-paging-navigator>\n\t\t</div>\n\n\t</ng-container>\n\n\t<ng-template #minimalTemplate>\n\n\t\t<div [paging]=\"paging\"\n\t\t\t gui-paging-stats>\n\t\t</div>\n\n\t\t<div (nextPageChanged)=\"nextPage()\"\n\t\t\t (prevPageChanged)=\"prevPage()\"\n\t\t\t [paging]=\"paging\"\n\t\t\t [sourceSize]=\"sourceSize\"\n\t\t\t gui-paging-navigator>\n\t\t</div>\n\n\t</ng-template>\n\n</ng-container>\n\n<ng-container *ngIf=\"isPagingVisible && alternativeDisplay\">\n\n\t<div (pageSizeChanged)=\"changePageSize($event)\"\n\t\t [paging]=\"paging\"\n\t\t gui-paging-select>\n\t</div>\n\n\t<div (nextPageChanged)=\"nextPage()\"\n\t\t (prevPageChanged)=\"prevPage()\"\n\t\t [paging]=\"paging\"\n\t\t [sourceSize]=\"sourceSize\"\n\t\t class=\"gui-flex gui-p-0\"\n\t\t gui-paging-alternative-navigator>\n\n\t\t<div [paging]=\"paging\"\n\t\t\t [sourceSize]=\"sourceSize\"\n\t\t\t class=\"gui-flex gui-justify-center\"\n\t\t\t gui-paging-alternative-pages>\n\t\t</div>\n\n\t</div>\n\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".gui-paging-alternative-navigator .gui-button{-ms-flex-line-pack:center;align-content:center;background:0 0;display:-ms-flexbox;display:flex;font-size:14px;line-height:21px;margin:0 2px;padding:0}.gui-paging-alternative-navigator .gui-button svg{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;height:12px;margin:-1px 2px 0;width:auto}.gui-paging-alternative-navigator .gui-button svg path{stroke:#ccc;transition:stroke .3s ease-in-out}.gui-paging-alternative-navigator .gui-button:hover{background:0 0}.gui-paging-alternative-navigator .gui-button:hover svg path{stroke:#333}.gui-paging-alternative-navigator .gui-button:disabled svg{opacity:.4}.gui-paging-alternative-navigator .gui-material .gui-button{padding:2px 16px}.gui-paging-alternative-pages{line-height:21px}.gui-paging-alternative-pages .gui-paging-page{display:none}.gui-paging-alternative-pages .gui-paging-visible-page .gui-paging-page{display:block;font-family:Arial,serif}.gui-paging-alternative-pages .gui-paging-visible-page.gui-paging-active-page{color:#333}.gui-paging-alternative-pages .gui-paging-visible-page.gui-paging-active-page .gui-paging-page{font-weight:700}.gui-paging-bottom{border-top:1px solid;border-top-color:inherit}.gui-paging-top{border-bottom:1px solid;border-bottom-color:inherit}", ".gui-generic .gui-paging,.gui-generic .gui-paging *{border-color:rgba(34,36,38,.1);font-size:14px}"]
            }] }
];
/** @nocollapse */
PagingComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: CssClassModifier },
    { type: StructureId },
    { type: PagingWarehouse },
    { type: PagingCommandInvoker },
    { type: SourceWarehouse },
    { type: PagingDisplayModeArchive }
];
PagingComponent.propDecorators = {
    position: [{ type: Input }],
    minimal: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    PagingComponent.prototype.position;
    /** @type {?} */
    PagingComponent.prototype.minimal;
    /** @type {?} */
    PagingComponent.prototype.sourceSize;
    /** @type {?} */
    PagingComponent.prototype.paging;
    /** @type {?} */
    PagingComponent.prototype.alternativeDisplay;
    /** @type {?} */
    PagingComponent.prototype.isPagingVisible;
    /**
     * @type {?}
     * @private
     */
    PagingComponent.prototype.localStreamCloser;
    /**
     * @type {?}
     * @private
     */
    PagingComponent.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    PagingComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    PagingComponent.prototype.cssClassModifier;
    /**
     * @type {?}
     * @private
     */
    PagingComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    PagingComponent.prototype.pagingWarehouse;
    /**
     * @type {?}
     * @private
     */
    PagingComponent.prototype.pagingCommandInvoker;
    /**
     * @type {?}
     * @private
     */
    PagingComponent.prototype.sourceWarehouse;
    /**
     * @type {?}
     * @private
     */
    PagingComponent.prototype.pagingDisplayModeArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3BhZ2luZy9mZWF0dXJlL3BhZ2luZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwSSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFHL0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUU1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFhMUQsTUFBTSxPQUFPLGVBQWdCLFNBQVEsY0FBYzs7Ozs7Ozs7Ozs7SUFrQmxELFlBQTZCLEtBQWlCLEVBQzFCLGlCQUFvQyxFQUNwQyxnQkFBa0MsRUFDbEMsV0FBd0IsRUFDeEIsZUFBZ0MsRUFDaEMsb0JBQTBDLEVBQzFDLGVBQWdDLEVBQ2hDLHdCQUFrRDtRQUNy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OztJQUVuQixpQ0FBZTs7SUFFZiw2Q0FBb0M7O0lBRXBDLDBDQUF3Qjs7Ozs7SUFFeEIsNENBQXdEOzs7OztJQUU1QyxnQ0FBa0M7Ozs7O0lBQzNDLDRDQUFxRDs7Ozs7SUFDckQsMkNBQW1EOzs7OztJQUNuRCxzQ0FBeUM7Ozs7O0lBQ3pDLDBDQUFpRDs7Ozs7SUFDakQsK0NBQTJEOzs7OztJQUMzRCwwQ0FBaUQ7Ozs7O0lBQ2pELG1EQUFtRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFBhZ2luZyB9IGZyb20gJy4uL2NvcmUvYXBpL3JlYWQvcGFnaW5nJztcbmltcG9ydCB7IFBhZ2luZ1dhcmVob3VzZSB9IGZyb20gJy4uL2NvcmUvYXBpL3BhZ2luZy53YXJlaG91c2UnO1xuaW1wb3J0IHsgUGFnaW5nQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi9jb3JlL2FwaS9wYWdpbmcuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9zb3VyY2Uud2FyZWhvdXNlJztcbmltcG9ydCB7IFBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZSB9IGZyb20gJy4vbW9kZS9wYWdpbmctZGlzcGxheS1tb2RlLmFyY2hpdmUnO1xuaW1wb3J0IHsgUGFnaW5nRGlzcGxheU1vZGUgfSBmcm9tICcuL21vZGUvcGFnaW5nLWRpc3BsYXktbW9kZSc7XG5pbXBvcnQgeyBQYWdpbmdQb3NpdGlvbiB9IGZyb20gJy4vcGFnaW5nLXBvc2l0aW9uJztcbmltcG9ydCB7IFN0cmVhbUNsb3NlciB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jZGsvcmVhY3RpdmUvc3RyZWFtLWNsb3Nlcic7XG5pbXBvcnQgeyBDc3NDbGFzc01vZGlmaWVyIH0gZnJvbSAnLi4vLi4vY29tbW9uL2Nzcy1jbGFzcy9jc3MtY2xhc3MubW9kaWZpZXInO1xuaW1wb3J0IHsgQ3NzQ2xhc3MgfSBmcm9tICcuLi8uLi9jb21tb24vY3NzLWNsYXNzL2Nzcy1jbGFzcyc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXBhZ2luZ11bcG9zaXRpb25dJyxcblx0dGVtcGxhdGVVcmw6ICcuL3BhZ2luZy5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL3N0eWxlL3BhZ2luZy5uZ3guc2NzcycsXG5cdFx0Jy4vc3R5bGUvdGhlbWUvZ2VuZXJpYy5wYWdpbmcubmd4LnNjc3MnXG5cdF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luZ0NvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRASW5wdXQoKVxuXHRwb3NpdGlvbjogUGFnaW5nUG9zaXRpb247XG5cblx0QElucHV0KClcblx0bWluaW1hbDogYm9vbGVhbjtcblxuXHRzb3VyY2VTaXplOiBudW1iZXI7XG5cblx0cGFnaW5nOiBQYWdpbmc7XG5cblx0YWx0ZXJuYXRpdmVEaXNwbGF5OiBib29sZWFuID0gZmFsc2U7XG5cblx0aXNQYWdpbmdWaXNpYmxlID0gZmFsc2U7XG5cblx0cHJpdmF0ZSByZWFkb25seSBsb2NhbFN0cmVhbUNsb3NlciA9IG5ldyBTdHJlYW1DbG9zZXIoKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGVsUmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjc3NDbGFzc01vZGlmaWVyOiBDc3NDbGFzc01vZGlmaWVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwYWdpbmdXYXJlaG91c2U6IFBhZ2luZ1dhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwYWdpbmdDb21tYW5kSW52b2tlcjogUGFnaW5nQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlV2FyZWhvdXNlOiBTb3VyY2VXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlOiBQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmUpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxSZWYpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1mbGV4Jyk7XG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLWp1c3RpZnktZW5kJyk7XG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLWl0ZW1zLWNlbnRlcicpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1wLTQnKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxQYWdpbmdDb21wb25lbnQ+KSB7XG5cblx0XHRpZiAoY2hhbmdlcy5wb3NpdGlvbikge1xuXG5cdFx0XHRpZiAodGhpcy5wb3NpdGlvbiA9PT0gUGFnaW5nUG9zaXRpb24uQk9UVE9NKSB7XG5cdFx0XHRcdHRoaXMuY3NzQ2xhc3NNb2RpZmllci5yZW1vdmUodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCBDc3NDbGFzcy5QQUdJTkdfVE9QX0NMQVNTX05BTUUpO1xuXHRcdFx0XHR0aGlzLmNzc0NsYXNzTW9kaWZpZXIuYWRkKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgQ3NzQ2xhc3MuUEFHSU5HX0JPVFRPTV9DTEFTU19OQU1FKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuY3NzQ2xhc3NNb2RpZmllci5yZW1vdmUodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCBDc3NDbGFzcy5QQUdJTkdfQk9UVE9NX0NMQVNTX05BTUUpO1xuXHRcdFx0XHR0aGlzLmNzc0NsYXNzTW9kaWZpZXIuYWRkKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgQ3NzQ2xhc3MuUEFHSU5HX1RPUF9DTEFTU19OQU1FKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5wYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmUub24oKSxcblx0XHRcdChtb2RlOiBQYWdpbmdEaXNwbGF5TW9kZSkgPT4ge1xuXHRcdFx0XHR0aGlzLmFsdGVybmF0aXZlRGlzcGxheSA9IG1vZGUgPT09IFBhZ2luZ0Rpc3BsYXlNb2RlLkFEVkFOQ0VEO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMucGFnaW5nV2FyZWhvdXNlLm9uUGFnaW5nKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KHBhZ2luZzogUGFnaW5nKSA9PiB7XG5cdFx0XHRcdHRoaXMucGFnaW5nID0gcGFnaW5nO1xuXHRcdFx0XHR0aGlzLmNhbGN1bGF0ZVBhZ2luZ1Zpc2liaWxpdHkoKTtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnNvdXJjZVdhcmVob3VzZS5vbk9yaWdpblNpemUodGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHQoc2l6ZTogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMuc291cmNlU2l6ZSA9IHNpemU7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMubG9jYWxTdHJlYW1DbG9zZXIudW5zdWJzY3JpYmUoKTtcblx0XHRzdXBlci5uZ09uRGVzdHJveSgpO1xuXHR9XG5cblx0Y2hhbmdlUGFnZVNpemUocGFnZVNpemU6IG51bWJlcikge1xuXHRcdHRoaXMucGFnaW5nQ29tbWFuZEludm9rZXIuY2hhbmdlUGFnZVNpemUocGFnZVNpemUsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0bmV4dFBhZ2UoKTogdm9pZCB7XG5cblx0XHRpZiAoIXRoaXMuc291cmNlU2l6ZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMucGFnaW5nQ29tbWFuZEludm9rZXIubmV4dFBhZ2UodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRwcmV2UGFnZSgpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0NvbW1hbmRJbnZva2VyLnByZXZQYWdlKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVQYWdpbmdWaXNpYmlsaXR5KCk6IHZvaWQge1xuXHRcdHRoaXMuaXNQYWdpbmdWaXNpYmxlID0gdGhpcy5wYWdpbmcgJiYgdGhpcy5wYWdpbmcuaXNFbmFibGVkKCkgJiZcblx0XHRcdCgoKHRoaXMucG9zaXRpb24gPT09IFBhZ2luZ1Bvc2l0aW9uLlRPUCkgJiYgdGhpcy5wYWdpbmcuaXNQYWdlclRvcCgpKSB8fFxuXHRcdFx0XHQoKHRoaXMucG9zaXRpb24gPT09IFBhZ2luZ1Bvc2l0aW9uLkJPVFRPTSkgJiYgdGhpcy5wYWdpbmcuaXNQYWdlckJvdHRvbSgpKSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktcGFnaW5nJztcblx0fVxuXG59XG4iXX0=