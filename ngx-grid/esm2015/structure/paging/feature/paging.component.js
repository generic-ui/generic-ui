/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../common/cdk/smart-component';
import { PagingWarehouse } from '../domain-api/paging.warehouse';
import { PagingCommandInvoker } from '../domain-api/paging.command-invoker';
import { SourceWarehouse } from '../../source/domain-api/source.warehouse';
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
                styles: [".gui-paging{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center;padding:4px}.gui-paging>*{padding-left:16px}.gui-paging .gui-paging-select span{display:inline-block;margin:0 6px 0 0}.gui-paging .gui-paging-navigator button{margin-right:6px}.gui-paging .gui-paging-navigator button:last-of-type{margin-right:0}.gui-paging .gui-paging-stats span{display:inline-block;margin:0 2px 0 0}.gui-paging .gui-alternative-paging-navigator{display:-ms-flexbox;display:flex;padding:0}.gui-paging .gui-alternative-paging-navigator .gui-alternative-paging-pages{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;line-height:21px}.gui-paging .gui-alternative-paging-navigator .gui-alternative-paging-pages .gui-paging-page{display:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-paging .gui-alternative-paging-navigator .gui-alternative-paging-pages .gui-paging-visible-page{position:relative}.gui-paging .gui-alternative-paging-navigator .gui-alternative-paging-pages .gui-paging-visible-page .gui-paging-page{display:block;cursor:pointer;padding:0 8px;font-weight:400;font-family:Arial,serif}.gui-paging .gui-alternative-paging-navigator .gui-alternative-paging-pages .gui-paging-visible-page.gui-paging-active-page{color:#333}.gui-paging .gui-alternative-paging-navigator .gui-alternative-paging-pages .gui-paging-visible-page.gui-paging-active-page .gui-paging-page{font-weight:700}.gui-paging .gui-alternative-paging-navigator .gui-alternative-paging-pages .gui-paging-visible-page.gui-paging-active-page::after{content:'';position:absolute;bottom:-8px;display:block;height:1px;width:100%;background:#333}.gui-paging .gui-alternative-paging-navigator .gui-button{display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;margin:0 2px;background:0 0;padding:0;font-size:14px;line-height:21px}.gui-paging .gui-alternative-paging-navigator .gui-button svg{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;height:12px;width:auto;margin:-1px 2px 0}.gui-paging .gui-alternative-paging-navigator .gui-button svg path{stroke:#ccc;transition:stroke .3s ease-in-out}.gui-paging .gui-alternative-paging-navigator .gui-button:hover{background:0 0}.gui-paging .gui-alternative-paging-navigator .gui-button:hover svg path{stroke:#333}.gui-paging .gui-alternative-paging-navigator .gui-button:disabled svg{opacity:.4}.gui-paging .gui-alternative-paging-navigator .gui-material .gui-button{padding:2px 16px}.gui-paging.gui-paging-bottom{border-top:1px solid;border-color:inherit}.gui-paging.gui-paging-top{border-bottom:1px solid;border-color:inherit}", ".gui-generic .gui-paging,.gui-generic .gui-paging *{border-color:rgba(34,36,38,.1);font-size:14px}"]
            }] }
];
/** @nocollapse */
PagingComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3BhZ2luZy9mZWF0dXJlL3BhZ2luZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUVMLFNBQVMsRUFFVCxpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBR3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBZ0JuRCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxjQUFjOzs7Ozs7Ozs7O0lBY2xELFlBQTZCLFNBQW9CLEVBQzdCLFVBQXNCLEVBQ3RCLGlCQUFvQyxFQUNwQyx3QkFBeUMsRUFDekMsb0JBQTBDLEVBQzFDLHdCQUF5QyxFQUN6QyxpQ0FBMkQ7UUFDOUUsS0FBSyxFQUFFLENBQUM7UUFQb0IsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUM3QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUFpQjtRQUN6Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLDZC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QixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3RDLENBQUM7OztZQXhHRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMseS9DQUFvQztnQkFLcEMsSUFBSSxFQUFFO29CQUNMLG9CQUFvQixFQUFFLFFBQVE7aUJBQzlCO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDckM7Ozs7WUE1QkEsU0FBUztZQUhULFVBQVU7WUFGVixpQkFBaUI7WUFhVCxlQUFlO1lBQ2Ysb0JBQW9CO1lBQ3BCLGVBQWU7WUFDZix3QkFBd0I7Ozt1QkFvQi9CLEtBQUs7c0JBR0wsS0FBSzs7OztJQUhOLG1DQUN5Qjs7SUFFekIsa0NBQ2lCOztJQUVqQixxQ0FBbUI7O0lBRW5CLGlDQUFlOztJQUVmLDZDQUFvQzs7Ozs7SUFFeEIsb0NBQXFDOzs7OztJQUM5QyxxQ0FBdUM7Ozs7O0lBQ3ZDLDRDQUFxRDs7Ozs7SUFDckQsbURBQTBEOzs7OztJQUMxRCwrQ0FBMkQ7Ozs7O0lBQzNELG1EQUEwRDs7Ozs7SUFDMUQsNERBQTRFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdElucHV0LFxuXHRPbkluaXQsXG5cdFJlbmRlcmVyMixcblx0U2ltcGxlQ2hhbmdlcyxcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBQYWdpbmcgfSBmcm9tICcuLi9kb21haW4tYXBpL3JlYWQvcGFnaW5nJztcbmltcG9ydCB7IFBhZ2luZ1dhcmVob3VzZSB9IGZyb20gJy4uL2RvbWFpbi1hcGkvcGFnaW5nLndhcmVob3VzZSc7XG5pbXBvcnQgeyBQYWdpbmdDb21tYW5kSW52b2tlciB9IGZyb20gJy4uL2RvbWFpbi1hcGkvcGFnaW5nLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi8uLi9zb3VyY2UvZG9tYWluLWFwaS9zb3VyY2Uud2FyZWhvdXNlJztcbmltcG9ydCB7IFBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZSB9IGZyb20gJy4vbW9kZS9wYWdpbmctZGlzcGxheS1tb2RlLmFyY2hpdmUnO1xuaW1wb3J0IHsgUGFnaW5nRGlzcGxheU1vZGUgfSBmcm9tICcuL21vZGUvcGFnaW5nLWRpc3BsYXktbW9kZSc7XG5pbXBvcnQgeyBQYWdpbmdQb3NpdGlvbiB9IGZyb20gJy4vcGFnaW5nLXBvc2l0aW9uJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktcGFnaW5nW3Bvc2l0aW9uXScsXG5cdHRlbXBsYXRlVXJsOiAncGFnaW5nLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vc3R5bGUvcGFnaW5nLm5neC5zY3NzJyxcblx0XHQnLi9zdHlsZS90aGVtZS9nZW5lcmljLnBhZ2luZy5uZ3guc2Nzcydcblx0XSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLXBhZ2luZ10nOiBgXCJ0cnVlXCJgXG5cdH0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luZ0NvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRASW5wdXQoKVxuXHRwb3NpdGlvbjogUGFnaW5nUG9zaXRpb247XG5cblx0QElucHV0KClcblx0bWluaW1hbDogYm9vbGVhbjtcblxuXHRzb3VyY2VTaXplOiBudW1iZXI7XG5cblx0cGFnaW5nOiBQYWdpbmc7XG5cblx0YWx0ZXJuYXRpdmVEaXNwbGF5OiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjI6IFJlbmRlcmVyMixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVQYWdpbmdXYXJlaG91c2U6IFBhZ2luZ1dhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwYWdpbmdDb21tYW5kU2VydmljZTogUGFnaW5nQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlU291cmNlV2FyZWhvdXNlOiBTb3VyY2VXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlUGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlOiBQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmUpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG5cdFx0aWYgKGNoYW5nZXMucG9zaXRpb24pIHtcblxuXHRcdFx0aWYgKHRoaXMucG9zaXRpb24gPT09IFBhZ2luZ1Bvc2l0aW9uLkJPVFRPTSkge1xuXHRcdFx0XHR0aGlzLnJlbmRlcmVyMi5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2d1aS1wYWdpbmctdG9wJyk7XG5cdFx0XHRcdHRoaXMucmVuZGVyZXIyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZ3VpLXBhZ2luZy1ib3R0b20nKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMucmVuZGVyZXIyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZ3VpLXBhZ2luZy1ib3R0b20nKTtcblx0XHRcdFx0dGhpcy5yZW5kZXJlcjIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdndWktcGFnaW5nLXRvcCcpO1xuXHRcdFx0fVxuXG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZVxuXHRcdFx0Lm9uVmFsdWUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKG1vZGU6IFBhZ2luZ0Rpc3BsYXlNb2RlKSA9PiB7XG5cdFx0XHRcdHRoaXMuYWx0ZXJuYXRpdmVEaXNwbGF5ID0gbW9kZSA9PT0gUGFnaW5nRGlzcGxheU1vZGUuQURWQU5DRUQ7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVBhZ2luZ1dhcmVob3VzZVxuXHRcdFx0Lm9uUGFnaW5nKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChwYWdpbmc6IFBhZ2luZykgPT4ge1xuXHRcdFx0XHR0aGlzLnBhZ2luZyA9IHBhZ2luZztcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlU291cmNlV2FyZWhvdXNlXG5cdFx0XHQub25PcmlnaW5TaXplKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChzaXplOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5zb3VyY2VTaXplID0gc2l6ZTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGlzUGFnaW5nVmlzaWJsZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdpbmcgJiYgdGhpcy5wYWdpbmcuaXNFbmFibGVkKCkgJiZcblx0XHRcdCgoKHRoaXMucG9zaXRpb24gPT09IFBhZ2luZ1Bvc2l0aW9uLlRPUCkgJiYgdGhpcy5wYWdpbmcuaXNQYWdlclRvcCgpKSB8fFxuXHRcdFx0XHQoKHRoaXMucG9zaXRpb24gPT09IFBhZ2luZ1Bvc2l0aW9uLkJPVFRPTSkgJiYgdGhpcy5wYWdpbmcuaXNQYWdlckJvdHRvbSgpKSk7XG5cdH1cblxuXHRjaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5wYWdpbmdDb21tYW5kU2VydmljZS5jaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZSk7XG5cdH1cblxuXHRuZXh0UGFnZSgpOiB2b2lkIHtcblxuXHRcdGlmICghdGhpcy5zb3VyY2VTaXplKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5wYWdpbmdDb21tYW5kU2VydmljZS5uZXh0UGFnZSgpO1xuXHR9XG5cblx0cHJldlBhZ2UoKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdDb21tYW5kU2VydmljZS5wcmV2UGFnZSgpO1xuXHR9XG5cbn1cbiJdfQ==