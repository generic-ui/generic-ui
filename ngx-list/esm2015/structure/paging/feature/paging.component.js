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
import { distinctUntilChanged } from 'rxjs/operators';
export class PagingComponent extends SmartComponent {
    /**
     * @param {?} elRef
     * @param {?} changeDetectorRef
     * @param {?} cssClassModifier
     * @param {?} structurePagingWarehouse
     * @param {?} pagingCommandService
     * @param {?} structureSourceWarehouse
     * @param {?} structurePagingDisplayModeArchive
     */
    constructor(elRef, changeDetectorRef, cssClassModifier, structurePagingWarehouse, pagingCommandService, structureSourceWarehouse, structurePagingDisplayModeArchive) {
        super(changeDetectorRef, elRef);
        this.elRef = elRef;
        this.changeDetectorRef = changeDetectorRef;
        this.cssClassModifier = cssClassModifier;
        this.structurePagingWarehouse = structurePagingWarehouse;
        this.pagingCommandService = pagingCommandService;
        this.structureSourceWarehouse = structureSourceWarehouse;
        this.structurePagingDisplayModeArchive = structurePagingDisplayModeArchive;
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
        this.structurePagingDisplayModeArchive
            .on()
            .pipe(distinctUntilChanged(), this.localStreamCloser.takeUntil())
            .subscribe((/**
         * @param {?} mode
         * @return {?}
         */
        (mode) => {
            this.alternativeDisplay = mode === PagingDisplayMode.ADVANCED;
            this.changeDetectorRef.detectChanges();
        }));
        this.structurePagingWarehouse
            .onPaging()
            .pipe(distinctUntilChanged((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => {
            return a.compare(b);
        })), this.localStreamCloser.takeUntil())
            .subscribe((/**
         * @param {?} paging
         * @return {?}
         */
        (paging) => {
            this.paging = paging;
            this.calculatePagingVisibility();
            this.changeDetectorRef.detectChanges();
        }));
        this.structureSourceWarehouse
            .onOriginSize()
            .pipe(this.localStreamCloser.takeUntil())
            .subscribe((/**
         * @param {?} size
         * @return {?}
         */
        (size) => {
            this.sourceSize = size;
            this.changeDetectorRef.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.localStreamCloser.unsubscribe();
    }
    /**
     * @param {?} pageSize
     * @return {?}
     */
    changePageSize(pageSize) {
        this.pagingCommandService.changePageSize(pageSize);
    }
    /**
     * @return {?}
     */
    nextPage() {
        if (!this.sourceSize) {
            return;
        }
        this.pagingCommandService.nextPage();
    }
    /**
     * @return {?}
     */
    prevPage() {
        this.pagingCommandService.prevPage();
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
    PagingComponent.prototype.structurePagingWarehouse;
    /**
     * @type {?}
     * @private
     */
    PagingComponent.prototype.pagingCommandService;
    /**
     * @type {?}
     * @private
     */
    PagingComponent.prototype.structureSourceWarehouse;
    /**
     * @type {?}
     * @private
     */
    PagingComponent.prototype.structurePagingDisplayModeArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3BhZ2luZy9mZWF0dXJlL3BhZ2luZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwSSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFHL0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUU1RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQWF0RCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxjQUFjOzs7Ozs7Ozs7O0lBa0JsRCxZQUE2QixLQUFpQixFQUMxQixpQkFBb0MsRUFDcEMsZ0JBQWtDLEVBQ2xDLHdCQUF5QyxFQUN6QyxvQkFBMEMsRUFDMUMsd0JBQXlDLEVBQ3pDLGlDQUEyRDtRQUM5RSxLQUFLLENB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QWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDckM7Ozs7WUEzQitELFVBQVU7WUFBeEMsaUJBQWlCO1lBWTFDLGdCQUFnQjtZQVBoQixlQUFlO1lBQ2Ysb0JBQW9CO1lBQ3BCLGVBQWU7WUFDZix3QkFBd0I7Ozt1QkFzQi9CLEtBQUs7c0JBR0wsS0FBSzs7OztJQUhOLG1DQUN5Qjs7SUFFekIsa0NBQ2lCOztJQUVqQixxQ0FBbUI7O0lBRW5CLGlDQUFlOztJQUVmLDZDQUFvQzs7SUFFcEMsMENBQXdCOzs7OztJQUV4Qiw0Q0FBd0Q7Ozs7O0lBRTVDLGdDQUFrQzs7Ozs7SUFDM0MsNENBQXFEOzs7OztJQUNyRCwyQ0FBbUQ7Ozs7O0lBQ25ELG1EQUEwRDs7Ozs7SUFDMUQsK0NBQTJEOzs7OztJQUMzRCxtREFBMEQ7Ozs7O0lBQzFELDREQUE0RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFBhZ2luZyB9IGZyb20gJy4uL2NvcmUvYXBpL3JlYWQvcGFnaW5nJztcbmltcG9ydCB7IFBhZ2luZ1dhcmVob3VzZSB9IGZyb20gJy4uL2NvcmUvYXBpL3BhZ2luZy53YXJlaG91c2UnO1xuaW1wb3J0IHsgUGFnaW5nQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi9jb3JlL2FwaS9wYWdpbmcuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9zb3VyY2Uud2FyZWhvdXNlJztcbmltcG9ydCB7IFBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZSB9IGZyb20gJy4vbW9kZS9wYWdpbmctZGlzcGxheS1tb2RlLmFyY2hpdmUnO1xuaW1wb3J0IHsgUGFnaW5nRGlzcGxheU1vZGUgfSBmcm9tICcuL21vZGUvcGFnaW5nLWRpc3BsYXktbW9kZSc7XG5pbXBvcnQgeyBQYWdpbmdQb3NpdGlvbiB9IGZyb20gJy4vcGFnaW5nLXBvc2l0aW9uJztcbmltcG9ydCB7IFN0cmVhbUNsb3NlciB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jZGsvcmVhY3RpdmUvc3RyZWFtLWNsb3Nlcic7XG5pbXBvcnQgeyBDc3NDbGFzc01vZGlmaWVyIH0gZnJvbSAnLi4vLi4vY29tbW9uL2Nzcy1jbGFzcy9jc3MtY2xhc3MubW9kaWZpZXInO1xuaW1wb3J0IHsgQ3NzQ2xhc3MgfSBmcm9tICcuLi8uLi9jb21tb24vY3NzLWNsYXNzL2Nzcy1jbGFzcyc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktcGFnaW5nXVtwb3NpdGlvbl0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vcGFnaW5nLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vc3R5bGUvcGFnaW5nLm5neC5zY3NzJyxcblx0XHQnLi9zdHlsZS90aGVtZS9nZW5lcmljLnBhZ2luZy5uZ3guc2Nzcydcblx0XSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5nQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdHBvc2l0aW9uOiBQYWdpbmdQb3NpdGlvbjtcblxuXHRASW5wdXQoKVxuXHRtaW5pbWFsOiBib29sZWFuO1xuXG5cdHNvdXJjZVNpemU6IG51bWJlcjtcblxuXHRwYWdpbmc6IFBhZ2luZztcblxuXHRhbHRlcm5hdGl2ZURpc3BsYXk6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRpc1BhZ2luZ1Zpc2libGUgPSBmYWxzZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGxvY2FsU3RyZWFtQ2xvc2VyID0gbmV3IFN0cmVhbUNsb3NlcigpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZWxSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNzc0NsYXNzTW9kaWZpZXI6IENzc0NsYXNzTW9kaWZpZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlUGFnaW5nV2FyZWhvdXNlOiBQYWdpbmdXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcGFnaW5nQ29tbWFuZFNlcnZpY2U6IFBhZ2luZ0NvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZTogU291cmNlV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZTogUGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsUmVmKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktZmxleCcpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1qdXN0aWZ5LWVuZCcpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1pdGVtcy1jZW50ZXInKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktcC00Jyk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8UGFnaW5nQ29tcG9uZW50Pikge1xuXG5cdFx0aWYgKGNoYW5nZXMucG9zaXRpb24pIHtcblxuXHRcdFx0aWYgKHRoaXMucG9zaXRpb24gPT09IFBhZ2luZ1Bvc2l0aW9uLkJPVFRPTSkge1xuXHRcdFx0XHR0aGlzLmNzc0NsYXNzTW9kaWZpZXIucmVtb3ZlKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgQ3NzQ2xhc3MuUEFHSU5HX1RPUF9DTEFTU19OQU1FKTtcblx0XHRcdFx0dGhpcy5jc3NDbGFzc01vZGlmaWVyLmFkZCh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsIENzc0NsYXNzLlBBR0lOR19CT1RUT01fQ0xBU1NfTkFNRSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmNzc0NsYXNzTW9kaWZpZXIucmVtb3ZlKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgQ3NzQ2xhc3MuUEFHSU5HX0JPVFRPTV9DTEFTU19OQU1FKTtcblx0XHRcdFx0dGhpcy5jc3NDbGFzc01vZGlmaWVyLmFkZCh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsIENzc0NsYXNzLlBBR0lOR19UT1BfQ0xBU1NfTkFNRSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZVxuXHRcdFx0Lm9uKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuXHRcdFx0XHR0aGlzLmxvY2FsU3RyZWFtQ2xvc2VyLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChtb2RlOiBQYWdpbmdEaXNwbGF5TW9kZSkgPT4ge1xuXHRcdFx0XHR0aGlzLmFsdGVybmF0aXZlRGlzcGxheSA9IG1vZGUgPT09IFBhZ2luZ0Rpc3BsYXlNb2RlLkFEVkFOQ0VEO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVQYWdpbmdXYXJlaG91c2Vcblx0XHRcdC5vblBhZ2luZygpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZGlzdGluY3RVbnRpbENoYW5nZWQoKGE6IFBhZ2luZywgYjogUGFnaW5nKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGEuY29tcGFyZShiKTtcblx0XHRcdFx0fSksXG5cdFx0XHRcdHRoaXMubG9jYWxTdHJlYW1DbG9zZXIudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHBhZ2luZzogUGFnaW5nKSA9PiB7XG5cdFx0XHRcdHRoaXMucGFnaW5nID0gcGFnaW5nO1xuXHRcdFx0XHR0aGlzLmNhbGN1bGF0ZVBhZ2luZ1Zpc2liaWxpdHkoKTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlU291cmNlV2FyZWhvdXNlXG5cdFx0XHQub25PcmlnaW5TaXplKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLmxvY2FsU3RyZWFtQ2xvc2VyLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChzaXplOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5zb3VyY2VTaXplID0gc2l6ZTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMubG9jYWxTdHJlYW1DbG9zZXIudW5zdWJzY3JpYmUoKTtcblx0fVxuXG5cdGNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIpIHtcblx0XHR0aGlzLnBhZ2luZ0NvbW1hbmRTZXJ2aWNlLmNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplKTtcblx0fVxuXG5cdG5leHRQYWdlKCk6IHZvaWQge1xuXG5cdFx0aWYgKCF0aGlzLnNvdXJjZVNpemUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnBhZ2luZ0NvbW1hbmRTZXJ2aWNlLm5leHRQYWdlKCk7XG5cdH1cblxuXHRwcmV2UGFnZSgpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0NvbW1hbmRTZXJ2aWNlLnByZXZQYWdlKCk7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZVBhZ2luZ1Zpc2liaWxpdHkoKTogdm9pZCB7XG5cdFx0dGhpcy5pc1BhZ2luZ1Zpc2libGUgPSB0aGlzLnBhZ2luZyAmJiB0aGlzLnBhZ2luZy5pc0VuYWJsZWQoKSAmJlxuXHRcdFx0KCgodGhpcy5wb3NpdGlvbiA9PT0gUGFnaW5nUG9zaXRpb24uVE9QKSAmJiB0aGlzLnBhZ2luZy5pc1BhZ2VyVG9wKCkpIHx8XG5cdFx0XHRcdCgodGhpcy5wb3NpdGlvbiA9PT0gUGFnaW5nUG9zaXRpb24uQk9UVE9NKSAmJiB0aGlzLnBhZ2luZy5pc1BhZ2VyQm90dG9tKCkpKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1wYWdpbmcnO1xuXHR9XG5cbn1cbiJdfQ==