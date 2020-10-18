/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../common/cdk/smart-component';
import { PagingWarehouse } from '../core/api/paging.warehouse';
import { PagingCommandInvoker } from '../core/api/paging.command-invoker';
import { SourceWarehouse } from '../../source/core/api/source.warehouse';
import { PagingDisplayModeArchive } from './mode/paging-display-mode.archive';
import { PagingDisplayMode } from './mode/paging-display-mode';
import { PagingPosition } from './paging-position';
var PagingComponent = /** @class */ (function (_super) {
    tslib_1.__extends(PagingComponent, _super);
    function PagingComponent(renderer2, elementRef, changeDetectorRef, structurePagingWarehouse, pagingCommandService, structureSourceWarehouse, structurePagingDisplayModeArchive) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.renderer2 = renderer2;
        _this.elementRef = elementRef;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structurePagingWarehouse = structurePagingWarehouse;
        _this.pagingCommandService = pagingCommandService;
        _this.structureSourceWarehouse = structureSourceWarehouse;
        _this.structurePagingDisplayModeArchive = structurePagingDisplayModeArchive;
        _this.alternativeDisplay = false;
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    PagingComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
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
    };
    /**
     * @return {?}
     */
    PagingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.structurePagingDisplayModeArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} mode
         * @return {?}
         */
        function (mode) {
            _this.alternativeDisplay = mode === PagingDisplayMode.ADVANCED;
            _this.changeDetectorRef.detectChanges();
        }));
        this.structurePagingWarehouse
            .onPaging()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} paging
         * @return {?}
         */
        function (paging) {
            _this.paging = paging;
            _this.changeDetectorRef.detectChanges();
        }));
        this.structureSourceWarehouse
            .onOriginSize()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} size
         * @return {?}
         */
        function (size) {
            _this.sourceSize = size;
            _this.changeDetectorRef.detectChanges();
        }));
    };
    /**
     * @return {?}
     */
    PagingComponent.prototype.isPagingVisible = /**
     * @return {?}
     */
    function () {
        return this.paging && this.paging.isEnabled() &&
            (((this.position === PagingPosition.TOP) && this.paging.isPagerTop()) ||
                ((this.position === PagingPosition.BOTTOM) && this.paging.isPagerBottom()));
    };
    /**
     * @param {?} pageSize
     * @return {?}
     */
    PagingComponent.prototype.changePageSize = /**
     * @param {?} pageSize
     * @return {?}
     */
    function (pageSize) {
        this.pagingCommandService.changePageSize(pageSize);
    };
    /**
     * @return {?}
     */
    PagingComponent.prototype.nextPage = /**
     * @return {?}
     */
    function () {
        if (!this.sourceSize) {
            return;
        }
        this.pagingCommandService.nextPage();
    };
    /**
     * @return {?}
     */
    PagingComponent.prototype.prevPage = /**
     * @return {?}
     */
    function () {
        this.pagingCommandService.prevPage();
    };
    PagingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-paging[position]',
                    template: "<ng-container *ngIf=\"isPagingVisible() && !alternativeDisplay\">\n\n\t<ng-container *ngIf=\"!minimal; else minimalTemplate\">\n\n\t\t<gui-paging-select\n\t\t\t\t(pageSizeChanged)=\"changePageSize($event)\"\n\t\t\t\t[paging]=\"paging\">\n\t\t</gui-paging-select>\n\n\t\t<gui-paging-stats\n\t\t\t\t[paging]=\"paging\">\n\t\t</gui-paging-stats>\n\n\t\t<gui-paging-navigator\n\t\t\t\t(nextPageChanged)=\"nextPage()\"\n\t\t\t\t(prevPageChanged)=\"prevPage()\"\n\t\t\t\t[paging]=\"paging\"\n\t\t\t\t[sourceSize]=\"sourceSize\">\n\t\t</gui-paging-navigator>\n\n\t</ng-container>\n\n\t<ng-template #minimalTemplate>\n\n\t\t<gui-paging-stats\n\t\t\t\t[paging]=\"paging\">\n\t\t</gui-paging-stats>\n\n\t\t<gui-paging-navigator\n\t\t\t\t(nextPageChanged)=\"nextPage()\"\n\t\t\t\t(prevPageChanged)=\"prevPage()\"\n\t\t\t\t[paging]=\"paging\"\n\t\t\t\t[sourceSize]=\"sourceSize\">\n\t\t</gui-paging-navigator>\n\n\t</ng-template>\n\n</ng-container>\n\n<ng-container *ngIf=\"isPagingVisible() && alternativeDisplay\">\n\n\t<gui-paging-select\n\t\t\t(pageSizeChanged)=\"changePageSize($event)\"\n\t\t\t[paging]=\"paging\">\n\t</gui-paging-select>\n\n\t<gui-alternative-paging-navigator\n\t\t\t(nextPageChanged)=\"nextPage()\"\n\t\t\t(prevPageChanged)=\"prevPage()\"\n\t\t\t[paging]=\"paging\"\n\t\t\t[sourceSize]=\"sourceSize\">\n\n\t\t<gui-alternative-paging-pages\n\t\t\t\t[paging]=\"paging\"\n\t\t\t\t[sourceSize]=\"sourceSize\">\n\t\t</gui-alternative-paging-pages>\n\n\t</gui-alternative-paging-navigator>\n\n</ng-container>\n",
                    host: {
                        '[class.gui-paging]': "\"true\""
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: [".gui-paging{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center;padding:4px}.gui-paging>*{padding-left:16px}.gui-paging .gui-paging-select span{display:inline-block;margin:0 6px 0 0}.gui-paging .gui-paging-navigator button{margin-right:6px}.gui-paging .gui-paging-navigator button:last-of-type{margin-right:0}.gui-paging .gui-paging-stats span{display:inline-block;margin:0 2px 0 0}.gui-paging .gui-alternative-paging-navigator{display:-ms-flexbox;display:flex;padding:0}.gui-paging .gui-alternative-paging-navigator .gui-alternative-paging-pages{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;line-height:21px}.gui-paging .gui-alternative-paging-navigator .gui-alternative-paging-pages .gui-paging-page{display:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-paging .gui-alternative-paging-navigator .gui-alternative-paging-pages .gui-paging-visible-page{position:relative}.gui-paging .gui-alternative-paging-navigator .gui-alternative-paging-pages .gui-paging-visible-page .gui-paging-page{display:block;cursor:pointer;padding:0 8px;font-weight:400;font-family:Arial,serif}.gui-paging .gui-alternative-paging-navigator .gui-alternative-paging-pages .gui-paging-visible-page.gui-paging-active-page{color:#333}.gui-paging .gui-alternative-paging-navigator .gui-alternative-paging-pages .gui-paging-visible-page.gui-paging-active-page .gui-paging-page{font-weight:700}.gui-paging .gui-alternative-paging-navigator .gui-alternative-paging-pages .gui-paging-visible-page.gui-paging-active-page::after{content:'';position:absolute;bottom:-8px;display:block;height:1px;width:100%;background:#333}.gui-paging .gui-alternative-paging-navigator .gui-button{display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;margin:0 2px;background:0 0;padding:0;font-size:14px;line-height:21px}.gui-paging .gui-alternative-paging-navigator .gui-button svg{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;height:12px;width:auto;margin:-1px 2px 0}.gui-paging .gui-alternative-paging-navigator .gui-button svg path{stroke:#ccc;transition:stroke .3s ease-in-out}.gui-paging .gui-alternative-paging-navigator .gui-button:hover{background:0 0}.gui-paging .gui-alternative-paging-navigator .gui-button:hover svg path{stroke:#333}.gui-paging .gui-alternative-paging-navigator .gui-button:disabled svg{opacity:.4}.gui-paging .gui-alternative-paging-navigator .gui-material .gui-button{padding:2px 16px}.gui-paging.gui-paging-bottom{border-top:1px solid;border-color:inherit}.gui-paging.gui-paging-top{border-bottom:1px solid;border-color:inherit}", ".gui-generic .gui-paging,.gui-generic .gui-paging *{border-color:rgba(34,36,38,.1);font-size:14px}"]
                }] }
    ];
    /** @nocollapse */
    PagingComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: PagingWarehouse },
        { type: PagingCommandInvoker },
        { type: SourceWarehouse },
        { type: PagingDisplayModeArchive }
    ]; };
    PagingComponent.propDecorators = {
        position: [{ type: Input }],
        minimal: [{ type: Input }]
    };
    return PagingComponent;
}(SmartComponent));
export { PagingComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3BhZ2luZy9mZWF0dXJlL3BhZ2luZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFFTCxTQUFTLEVBRVQsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUdyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUduRDtJQWFxQywyQ0FBYztJQWNsRCx5QkFBNkIsU0FBb0IsRUFDN0IsVUFBc0IsRUFDdEIsaUJBQW9DLEVBQ3BDLHdCQUF5QyxFQUN6QyxvQkFBMEMsRUFDMUMsd0JBQXlDLEVBQ3pDLGlDQUEyRDtRQU4vRSxZQU9DLGtCQUFNLGlCQUFpQixDQUFDLFNBQ3hCO1FBUjRCLGVBQVMsR0FBVCxTQUFTLENBQVc7UUFDN0IsZ0JBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyw4QkFBd0IsR0FBeEIsd0JBQXdCLENBQWlCO1FBQ3pDLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsOEJBQXdCLEdB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OztJQUFSO1FBQ0MsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3RDLENBQUM7O2dCQXhHRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMseS9DQUFvQztvQkFLcEMsSUFBSSxFQUFFO3dCQUNMLG9CQUFvQixFQUFFLFVBQVE7cUJBQzlCO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3JDOzs7O2dCQTVCQSxTQUFTO2dCQUhULFVBQVU7Z0JBRlYsaUJBQWlCO2dCQWFULGVBQWU7Z0JBQ2Ysb0JBQW9CO2dCQUNwQixlQUFlO2dCQUNmLHdCQUF3Qjs7OzJCQW9CL0IsS0FBSzswQkFHTCxLQUFLOztJQXdGUCxzQkFBQztDQUFBLEFBMUdELENBYXFDLGNBQWMsR0E2RmxEO1NBN0ZZLGVBQWU7OztJQUUzQixtQ0FDeUI7O0lBRXpCLGtDQUNpQjs7SUFFakIscUNBQW1COztJQUVuQixpQ0FBZTs7SUFFZiw2Q0FBb0M7Ozs7O0lBRXhCLG9DQUFxQzs7Ozs7SUFDOUMscUNBQXVDOzs7OztJQUN2Qyw0Q0FBcUQ7Ozs7O0lBQ3JELG1EQUEwRDs7Ozs7SUFDMUQsK0NBQTJEOzs7OztJQUMzRCxtREFBMEQ7Ozs7O0lBQzFELDREQUE0RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRJbnB1dCxcblx0T25Jbml0LFxuXHRSZW5kZXJlcjIsXG5cdFNpbXBsZUNoYW5nZXMsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgUGFnaW5nIH0gZnJvbSAnLi4vY29yZS9hcGkvcmVhZC9wYWdpbmcnO1xuaW1wb3J0IHsgUGFnaW5nV2FyZWhvdXNlIH0gZnJvbSAnLi4vY29yZS9hcGkvcGFnaW5nLndhcmVob3VzZSc7XG5pbXBvcnQgeyBQYWdpbmdDb21tYW5kSW52b2tlciB9IGZyb20gJy4uL2NvcmUvYXBpL3BhZ2luZy5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU291cmNlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vc291cmNlL2NvcmUvYXBpL3NvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgUGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlIH0gZnJvbSAnLi9tb2RlL3BhZ2luZy1kaXNwbGF5LW1vZGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBQYWdpbmdEaXNwbGF5TW9kZSB9IGZyb20gJy4vbW9kZS9wYWdpbmctZGlzcGxheS1tb2RlJztcbmltcG9ydCB7IFBhZ2luZ1Bvc2l0aW9uIH0gZnJvbSAnLi9wYWdpbmctcG9zaXRpb24nO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1wYWdpbmdbcG9zaXRpb25dJyxcblx0dGVtcGxhdGVVcmw6ICdwYWdpbmcuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9zdHlsZS9wYWdpbmcubmd4LnNjc3MnLFxuXHRcdCcuL3N0eWxlL3RoZW1lL2dlbmVyaWMucGFnaW5nLm5neC5zY3NzJ1xuXHRdLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktcGFnaW5nXSc6IGBcInRydWVcImBcblx0fSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5nQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBJbnB1dCgpXG5cdHBvc2l0aW9uOiBQYWdpbmdQb3NpdGlvbjtcblxuXHRASW5wdXQoKVxuXHRtaW5pbWFsOiBib29sZWFuO1xuXG5cdHNvdXJjZVNpemU6IG51bWJlcjtcblxuXHRwYWdpbmc6IFBhZ2luZztcblxuXHRhbHRlcm5hdGl2ZURpc3BsYXk6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyMjogUmVuZGVyZXIyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVBhZ2luZ1dhcmVob3VzZTogUGFnaW5nV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2luZ0NvbW1hbmRTZXJ2aWNlOiBQYWdpbmdDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2U6IFNvdXJjZVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmU6IFBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuXHRcdGlmIChjaGFuZ2VzLnBvc2l0aW9uKSB7XG5cblx0XHRcdGlmICh0aGlzLnBvc2l0aW9uID09PSBQYWdpbmdQb3NpdGlvbi5CT1RUT00pIHtcblx0XHRcdFx0dGhpcy5yZW5kZXJlcjIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdndWktcGFnaW5nLXRvcCcpO1xuXHRcdFx0XHR0aGlzLnJlbmRlcmVyMi5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2d1aS1wYWdpbmctYm90dG9tJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnJlbmRlcmVyMi5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2d1aS1wYWdpbmctYm90dG9tJyk7XG5cdFx0XHRcdHRoaXMucmVuZGVyZXIyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZ3VpLXBhZ2luZy10b3AnKTtcblx0XHRcdH1cblxuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmVcblx0XHRcdC5vblZhbHVlKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChtb2RlOiBQYWdpbmdEaXNwbGF5TW9kZSkgPT4ge1xuXHRcdFx0XHR0aGlzLmFsdGVybmF0aXZlRGlzcGxheSA9IG1vZGUgPT09IFBhZ2luZ0Rpc3BsYXlNb2RlLkFEVkFOQ0VEO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVQYWdpbmdXYXJlaG91c2Vcblx0XHRcdC5vblBhZ2luZygpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgocGFnaW5nOiBQYWdpbmcpID0+IHtcblx0XHRcdFx0dGhpcy5wYWdpbmcgPSBwYWdpbmc7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZVxuXHRcdFx0Lm9uT3JpZ2luU2l6ZSgpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoc2l6ZTogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMuc291cmNlU2l6ZSA9IHNpemU7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRpc1BhZ2luZ1Zpc2libGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucGFnaW5nICYmIHRoaXMucGFnaW5nLmlzRW5hYmxlZCgpICYmXG5cdFx0XHQoKCh0aGlzLnBvc2l0aW9uID09PSBQYWdpbmdQb3NpdGlvbi5UT1ApICYmIHRoaXMucGFnaW5nLmlzUGFnZXJUb3AoKSkgfHxcblx0XHRcdFx0KCh0aGlzLnBvc2l0aW9uID09PSBQYWdpbmdQb3NpdGlvbi5CT1RUT00pICYmIHRoaXMucGFnaW5nLmlzUGFnZXJCb3R0b20oKSkpO1xuXHR9XG5cblx0Y2hhbmdlUGFnZVNpemUocGFnZVNpemU6IG51bWJlcikge1xuXHRcdHRoaXMucGFnaW5nQ29tbWFuZFNlcnZpY2UuY2hhbmdlUGFnZVNpemUocGFnZVNpemUpO1xuXHR9XG5cblx0bmV4dFBhZ2UoKTogdm9pZCB7XG5cblx0XHRpZiAoIXRoaXMuc291cmNlU2l6ZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMucGFnaW5nQ29tbWFuZFNlcnZpY2UubmV4dFBhZ2UoKTtcblx0fVxuXG5cdHByZXZQYWdlKCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nQ29tbWFuZFNlcnZpY2UucHJldlBhZ2UoKTtcblx0fVxuXG59XG4iXX0=