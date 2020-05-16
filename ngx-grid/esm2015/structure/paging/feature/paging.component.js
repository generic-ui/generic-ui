/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../common/cdk/smart-component';
import { PagingWarehouse } from '../domain-api/paging.warehouse';
import { PagingCommandDispatcher } from '../domain-api/paging.command-dispatcher';
import { StructureSourceWarehouse } from '../../../lib/structure/domain-api/source/structure-source.warehouse';
import { PagingDisplayModeArchive } from './mode/paging-display-mode.archive';
import { PagingDisplayMode } from './mode/paging-display-mode';
import { PagingPosition } from './paging-position';
export class PagingComponent extends SmartComponent {
    /**
     * @param {?} renderer2
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} structurePagingWarehouse
     * @param {?} pagingCommandService
     * @param {?} structureSourceWarehouse
     * @param {?} structurePagingDisplayModeArchive
     */
    constructor(renderer2, elementRef, changeDetectorRef, structurePagingWarehouse, pagingCommandService, structureSourceWarehouse, structurePagingDisplayModeArchive) {
        super();
        this.renderer2 = renderer2;
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.structurePagingWarehouse = structurePagingWarehouse;
        this.pagingCommandService = pagingCommandService;
        this.structureSourceWarehouse = structureSourceWarehouse;
        this.structurePagingDisplayModeArchive = structurePagingDisplayModeArchive;
        this.alternativeDisplay = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.position) {
            if (this.position === PagingPosition.BOTTOM) {
                this.renderer2.removeClass(this.elementRef.nativeElement, 'gui-paging-top');
                this.renderer2.addClass(this.elementRef.nativeElement, 'gui-paging-bottom');
            }
            else {
                this.renderer2.removeClass(this.elementRef.nativeElement, 'gui-paging-bottom');
                this.renderer2.addClass(this.elementRef.nativeElement, 'gui-paging-top');
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.structurePagingDisplayModeArchive
            .onValue()
            .pipe(this.takeUntil())
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
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} paging
         * @return {?}
         */
        (paging) => {
            this.paging = paging;
            this.changeDetectorRef.detectChanges();
        }));
        this.structureSourceWarehouse
            .onOriginSize()
            .pipe(this.takeUntil())
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
    isPagingVisible() {
        return this.paging && this.paging.isEnabled() &&
            (((this.position === PagingPosition.TOP) && this.paging.isPagerTop()) ||
                ((this.position === PagingPosition.BOTTOM) && this.paging.isPagerBottom()));
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
}
PagingComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-paging[position]',
                template: "<ng-container *ngIf=\"isPagingVisible() && !alternativeDisplay\">\n\n\t<ng-container *ngIf=\"!minimal; else minimalTemplate\">\n\n\t\t<gui-paging-select\n\t\t\t\t(pageSizeChanged)=\"changePageSize($event)\"\n\t\t\t\t[paging]=\"paging\">\n\t\t</gui-paging-select>\n\n\t\t<gui-paging-stats\n\t\t\t\t[paging]=\"paging\">\n\t\t</gui-paging-stats>\n\n\t\t<gui-paging-navigator\n\t\t\t\t(nextPageChanged)=\"nextPage()\"\n\t\t\t\t(prevPageChanged)=\"prevPage()\"\n\t\t\t\t[paging]=\"paging\"\n\t\t\t\t[sourceSize]=\"sourceSize\">\n\t\t</gui-paging-navigator>\n\n\t</ng-container>\n\n\t<ng-template #minimalTemplate>\n\n\t\t<gui-paging-stats\n\t\t\t\t[paging]=\"paging\">\n\t\t</gui-paging-stats>\n\n\t\t<gui-paging-navigator\n\t\t\t\t(nextPageChanged)=\"nextPage()\"\n\t\t\t\t(prevPageChanged)=\"prevPage()\"\n\t\t\t\t[paging]=\"paging\"\n\t\t\t\t[sourceSize]=\"sourceSize\">\n\t\t</gui-paging-navigator>\n\n\t</ng-template>\n\n</ng-container>\n\n<ng-container *ngIf=\"isPagingVisible() && alternativeDisplay\">\n\n\t<gui-paging-select\n\t\t\t(pageSizeChanged)=\"changePageSize($event)\"\n\t\t\t[paging]=\"paging\">\n\t</gui-paging-select>\n\n\t<gui-alternative-paging-navigator\n\t\t\t(nextPageChanged)=\"nextPage()\"\n\t\t\t(prevPageChanged)=\"prevPage()\"\n\t\t\t[paging]=\"paging\"\n\t\t\t[sourceSize]=\"sourceSize\">\n\n\t\t<gui-alternative-paging-pages\n\t\t\t\t[paging]=\"paging\"\n\t\t\t\t[sourceSize]=\"sourceSize\">\n\t\t</gui-alternative-paging-pages>\n\n\t</gui-alternative-paging-navigator>\n\n</ng-container>\n",
                host: {
                    '[class.gui-paging]': `"true"`
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".gui-paging{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center;padding:4px}.gui-paging>*{padding-left:16px}.gui-paging .gui-paging-select span{display:inline-block;margin:0 6px 0 0}.gui-paging .gui-paging-navigator button{margin-right:6px}.gui-paging .gui-paging-navigator button:last-of-type{margin-right:0}.gui-paging .gui-paging-stats span{display:inline-block;margin:0 2px 0 0}.gui-paging .gui-alternative-paging-navigator{display:-ms-flexbox;display:flex;padding:0}.gui-paging .gui-alternative-paging-navigator .gui-alternative-paging-pages{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;line-height:21px}.gui-paging .gui-alternative-paging-navigator .gui-alternative-paging-pages .gui-paging-page{display:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-paging .gui-alternative-paging-navigator .gui-alternative-paging-pages .gui-paging-visible-page{position:relative}.gui-paging .gui-alternative-paging-navigator .gui-alternative-paging-pages .gui-paging-visible-page .gui-paging-page{display:block;cursor:pointer;padding:0 8px;font-weight:400;font-family:Arial,serif}.gui-paging .gui-alternative-paging-navigator .gui-alternative-paging-pages .gui-paging-visible-page.gui-paging-active-page{color:#333}.gui-paging .gui-alternative-paging-navigator .gui-alternative-paging-pages .gui-paging-visible-page.gui-paging-active-page .gui-paging-page{font-weight:700}.gui-paging .gui-alternative-paging-navigator .gui-alternative-paging-pages .gui-paging-visible-page.gui-paging-active-page::after{content:'';position:absolute;bottom:-8px;display:block;height:1px;width:100%;background:#333}.gui-paging .gui-alternative-paging-navigator .gui-button{display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;margin:0 2px;background:0 0;padding:0;font-size:14px;line-height:21px}.gui-paging .gui-alternative-paging-navigator .gui-button svg{height:12px;width:auto;margin:0 2px}.gui-paging .gui-alternative-paging-navigator .gui-button svg path{stroke:#ccc;transition:stroke .3s ease-in-out}.gui-paging .gui-alternative-paging-navigator .gui-button:hover{background:0 0}.gui-paging .gui-alternative-paging-navigator .gui-button:hover svg path{stroke:#333}.gui-paging .gui-alternative-paging-navigator .gui-button:disabled svg{opacity:.4}.gui-paging .gui-alternative-paging-navigator .gui-material .gui-button{padding:2px 16px}.gui-paging.gui-paging-bottom{border-top:1px solid;border-color:inherit}.gui-paging.gui-paging-top{border-bottom:1px solid;border-color:inherit}", ".gui-generic .gui-paging,.gui-generic .gui-paging *{border-color:rgba(34,36,38,.1);font-size:14px}"]
            }] }
];
/** @nocollapse */
PagingComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: PagingWarehouse },
    { type: PagingCommandDispatcher },
    { type: StructureSourceWarehouse },
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
    /**
     * @type {?}
     * @private
     */
    PagingComponent.prototype.renderer2;
    /**
     * @type {?}
     * @private
     */
    PagingComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    PagingComponent.prototype.changeDetectorRef;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3BhZ2luZy9mZWF0dXJlL3BhZ2luZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUVMLFNBQVMsRUFFVCxpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBR3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUMvRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFnQm5ELE1BQU0sT0FBTyxlQUFnQixTQUFRLGNBQWM7Ozs7Ozs7Ozs7SUFjbEQsWUFBNkIsU0FBb0IsRUFDN0IsVUFBc0IsRUFDdEIsaUJBQW9DLEVBQ3BDLHdCQUF5QyxFQUN6QyxvQkFBNkMsRUFDN0Msd0JBQWtELEVBQ2xELGlDQUEyRDtRQUM5RSxLQUFLLEVBQUUsQ0FBQztRQVBvQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQzdCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQWlCO1FBQ3pDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBeUI7UUFDN0Ms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QW9CLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDdEMsQ0FBQzs7O1lBeEdELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyx5L0NBQW9DO2dCQUtwQyxJQUFJLEVBQUU7b0JBQ0wsb0JBQW9CLEVBQUUsUUFBUTtpQkFDOUI7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUNyQzs7OztZQTVCQSxTQUFTO1lBSFQsVUFBVTtZQUZWLGlCQUFpQjtZQWFULGVBQWU7WUFDZix1QkFBdUI7WUFDdkIsd0JBQXdCO1lBQ3hCLHdCQUF3Qjs7O3VCQW9CL0IsS0FBSztzQkFHTCxLQUFLOzs7O0lBSE4sbUNBQ3lCOztJQUV6QixrQ0FDaUI7O0lBRWpCLHFDQUFtQjs7SUFFbkIsaUNBQWU7O0lBRWYsNkNBQW9DOzs7OztJQUV4QixvQ0FBcUM7Ozs7O0lBQzlDLHFDQUF1Qzs7Ozs7SUFDdkMsNENBQXFEOzs7OztJQUNyRCxtREFBMEQ7Ozs7O0lBQzFELCtDQUE4RDs7Ozs7SUFDOUQsbURBQW1FOzs7OztJQUNuRSw0REFBNEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0SW5wdXQsXG5cdE9uSW5pdCxcblx0UmVuZGVyZXIyLFxuXHRTaW1wbGVDaGFuZ2VzLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFBhZ2luZyB9IGZyb20gJy4uL2RvbWFpbi1hcGkvcmVhZC9wYWdpbmcnO1xuaW1wb3J0IHsgUGFnaW5nV2FyZWhvdXNlIH0gZnJvbSAnLi4vZG9tYWluLWFwaS9wYWdpbmcud2FyZWhvdXNlJztcbmltcG9ydCB7IFBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vZG9tYWluLWFwaS9wYWdpbmcuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluLWFwaS9zb3VyY2Uvc3RydWN0dXJlLXNvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgUGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlIH0gZnJvbSAnLi9tb2RlL3BhZ2luZy1kaXNwbGF5LW1vZGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBQYWdpbmdEaXNwbGF5TW9kZSB9IGZyb20gJy4vbW9kZS9wYWdpbmctZGlzcGxheS1tb2RlJztcbmltcG9ydCB7IFBhZ2luZ1Bvc2l0aW9uIH0gZnJvbSAnLi9wYWdpbmctcG9zaXRpb24nO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1wYWdpbmdbcG9zaXRpb25dJyxcblx0dGVtcGxhdGVVcmw6ICdwYWdpbmcuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9zdHlsZS9wYWdpbmcubmd4LnNjc3MnLFxuXHRcdCcuL3N0eWxlL3RoZW1lL2dlbmVyaWMucGFnaW5nLm5neC5zY3NzJ1xuXHRdLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktcGFnaW5nXSc6IGBcInRydWVcImBcblx0fSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5nQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdHBvc2l0aW9uOiBQYWdpbmdQb3NpdGlvbjtcblxuXHRASW5wdXQoKVxuXHRtaW5pbWFsOiBib29sZWFuO1xuXG5cdHNvdXJjZVNpemU6IG51bWJlcjtcblxuXHRwYWdpbmc6IFBhZ2luZztcblxuXHRhbHRlcm5hdGl2ZURpc3BsYXk6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyMjogUmVuZGVyZXIyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVBhZ2luZ1dhcmVob3VzZTogUGFnaW5nV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2luZ0NvbW1hbmRTZXJ2aWNlOiBQYWdpbmdDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2U6IFN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmU6IFBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cblx0XHRpZiAoY2hhbmdlcy5wb3NpdGlvbikge1xuXG5cdFx0XHRpZiAodGhpcy5wb3NpdGlvbiA9PT0gUGFnaW5nUG9zaXRpb24uQk9UVE9NKSB7XG5cdFx0XHRcdHRoaXMucmVuZGVyZXIyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZ3VpLXBhZ2luZy10b3AnKTtcblx0XHRcdFx0dGhpcy5yZW5kZXJlcjIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdndWktcGFnaW5nLWJvdHRvbScpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5yZW5kZXJlcjIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdndWktcGFnaW5nLWJvdHRvbScpO1xuXHRcdFx0XHR0aGlzLnJlbmRlcmVyMi5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2d1aS1wYWdpbmctdG9wJyk7XG5cdFx0XHR9XG5cblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuc3RydWN0dXJlUGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgobW9kZTogUGFnaW5nRGlzcGxheU1vZGUpID0+IHtcblx0XHRcdFx0dGhpcy5hbHRlcm5hdGl2ZURpc3BsYXkgPSBtb2RlID09PSBQYWdpbmdEaXNwbGF5TW9kZS5BRFZBTkNFRDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlUGFnaW5nV2FyZWhvdXNlXG5cdFx0XHQub25QYWdpbmcoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHBhZ2luZzogUGFnaW5nKSA9PiB7XG5cdFx0XHRcdHRoaXMucGFnaW5nID0gcGFnaW5nO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2Vcblx0XHRcdC5vbk9yaWdpblNpemUoKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKHNpemU6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnNvdXJjZVNpemUgPSBzaXplO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0aXNQYWdpbmdWaXNpYmxlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnBhZ2luZyAmJiB0aGlzLnBhZ2luZy5pc0VuYWJsZWQoKSAmJlxuXHRcdFx0KCgodGhpcy5wb3NpdGlvbiA9PT0gUGFnaW5nUG9zaXRpb24uVE9QKSAmJiB0aGlzLnBhZ2luZy5pc1BhZ2VyVG9wKCkpIHx8XG5cdFx0XHRcdCgodGhpcy5wb3NpdGlvbiA9PT0gUGFnaW5nUG9zaXRpb24uQk9UVE9NKSAmJiB0aGlzLnBhZ2luZy5pc1BhZ2VyQm90dG9tKCkpKTtcblx0fVxuXG5cdGNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIpIHtcblx0XHR0aGlzLnBhZ2luZ0NvbW1hbmRTZXJ2aWNlLmNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplKTtcblx0fVxuXG5cdG5leHRQYWdlKCk6IHZvaWQge1xuXG5cdFx0aWYgKCF0aGlzLnNvdXJjZVNpemUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnBhZ2luZ0NvbW1hbmRTZXJ2aWNlLm5leHRQYWdlKCk7XG5cdH1cblxuXHRwcmV2UGFnZSgpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0NvbW1hbmRTZXJ2aWNlLnByZXZQYWdlKCk7XG5cdH1cblxufVxuIl19