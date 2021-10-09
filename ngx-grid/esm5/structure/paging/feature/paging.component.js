/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var PagingComponent = /** @class */ (function (_super) {
    tslib_1.__extends(PagingComponent, _super);
    function PagingComponent(elRef, changeDetectorRef, cssClassModifier, structureId, pagingWarehouse, pagingCommandInvoker, sourceWarehouse, pagingDisplayModeArchive) {
        var _this = _super.call(this, changeDetectorRef, elRef) || this;
        _this.elRef = elRef;
        _this.changeDetectorRef = changeDetectorRef;
        _this.cssClassModifier = cssClassModifier;
        _this.structureId = structureId;
        _this.pagingWarehouse = pagingWarehouse;
        _this.pagingCommandInvoker = pagingCommandInvoker;
        _this.sourceWarehouse = sourceWarehouse;
        _this.pagingDisplayModeArchive = pagingDisplayModeArchive;
        _this.alternativeDisplay = false;
        _this.isPagingVisible = false;
        _this.localStreamCloser = new StreamCloser();
        _this.addClassToHost('gui-flex');
        _this.addClassToHost('gui-justify-end');
        _this.addClassToHost('gui-items-center');
        _this.addClassToHost('gui-p-4');
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
                this.cssClassModifier.remove(this.elRef.nativeElement, CssClass.PAGING_TOP_CLASS_NAME);
                this.cssClassModifier.add(this.elRef.nativeElement, CssClass.PAGING_BOTTOM_CLASS_NAME);
            }
            else {
                this.cssClassModifier.remove(this.elRef.nativeElement, CssClass.PAGING_BOTTOM_CLASS_NAME);
                this.cssClassModifier.add(this.elRef.nativeElement, CssClass.PAGING_TOP_CLASS_NAME);
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
        this.hermesSubscribe(this.pagingDisplayModeArchive.on(), (/**
         * @param {?} mode
         * @return {?}
         */
        function (mode) {
            _this.alternativeDisplay = mode === PagingDisplayMode.ADVANCED;
        }));
        this.hermesSubscribe(this.pagingWarehouse.onPaging(this.structureId), (/**
         * @param {?} paging
         * @return {?}
         */
        function (paging) {
            _this.paging = paging;
            _this.calculatePagingVisibility();
        }));
        this.hermesSubscribe(this.sourceWarehouse.onOriginSize(this.structureId), (/**
         * @param {?} size
         * @return {?}
         */
        function (size) {
            _this.sourceSize = size;
        }));
    };
    /**
     * @return {?}
     */
    PagingComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.localStreamCloser.unsubscribe();
        _super.prototype.ngOnDestroy.call(this);
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
        this.pagingCommandInvoker.changePageSize(pageSize, this.structureId);
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
        this.pagingCommandInvoker.nextPage(this.structureId);
    };
    /**
     * @return {?}
     */
    PagingComponent.prototype.prevPage = /**
     * @return {?}
     */
    function () {
        this.pagingCommandInvoker.prevPage(this.structureId);
    };
    /**
     * @private
     * @return {?}
     */
    PagingComponent.prototype.calculatePagingVisibility = /**
     * @private
     * @return {?}
     */
    function () {
        this.isPagingVisible = this.paging && this.paging.isEnabled() &&
            (((this.position === PagingPosition.TOP) && this.paging.isPagerTop()) ||
                ((this.position === PagingPosition.BOTTOM) && this.paging.isPagerBottom()));
    };
    /**
     * @protected
     * @return {?}
     */
    PagingComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-paging';
    };
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
    PagingComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: CssClassModifier },
        { type: StructureId },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3BhZ2luZy9mZWF0dXJlL3BhZ2luZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEksT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRy9FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDekUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRzFEO0lBVXFDLDJDQUFjO0lBa0JsRCx5QkFBNkIsS0FBaUIsRUFDMUIsaUJBQW9DLEVBQ3BDLGdCQUFrQyxFQUNsQyxXQUF3QixFQUN4QixlQUFnQyxFQUNoQyxvQkFBMEMsRUFDMUMsZUFBZ0MsRUFDaEMsd0JBQWtEO1FBUHRFLFlBUUMsa0JBQU0saUJBQWlCLEVBQUUsS0FBSyxDQUFDLFNBSy9CO1FBYjRCLFdBQUssR0FBTCxLQUFLLENBQVk7UUFDMUIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQywwQkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLHFCQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyw4QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBYnRFLHdCQUFrQixHQUFZLEtBQUssQ0FBQztRQUVwQyxxQkFBZSxHQUFHLEtBQUssQ0FBQztRQUVQLHVCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFXdkQsS0FBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoQyxLQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDdkMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3hDLEtBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7O0lBQ2hDLENBQUM7Ozs7O0lBRUQscUNBQVc7Ozs7SUFBWCxVQUFZLE9BQW1DO1FBRTlDLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUVyQixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssY0FBYyxDQUFDLE1BQU0sRUFBRTtnQkFDNUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMscUJBQXFCLENBQUMsQ0FBQztnQkFDdkYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsd0JBQXdCLENBQUMsQ0FBQzthQUN2RjtpQkFBTTtnQkFDTixJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2dCQUMxRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2FBQ3BGO1NBQ0Q7SUFDRixDQUFDOzs7O0lBRUQsa0NBQVE7OztJQUFSO1FBQUEsaUJBdUJDO1FBckJBLElBQUksQ0FBQyxlQUFlLENBQ25CLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLEVBQUU7Ozs7UUFDbEMsVUFBQyxJQUF1QjtZQUN2QixLQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxLQUFLLGlCQUFpQixDQUFDLFFBQVEsQ0FBQztRQUMvRCxDQUFDLEVBQ0QsQ0FBQztRQUVGLElBQUksQ0FBQyxlQUFlLENBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7Ozs7UUFDL0MsVUFBQyxNQUFjO1lBQ2QsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDckIsS0FBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7UUFDbEMsQ0FBQyxFQUNELENBQUM7UUFFRixJQUFJLENBQUMsZUFBZSxDQUNuQixJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDOzs7O1FBQ25ELFVBQUMsSUFBWTtZQUNaLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLENBQUMsRUFDRCxDQUFDO0lBQ0gsQ0FBQzs7OztJQUVELHFDQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQyxpQkFBTSxXQUFXLFdBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELHdDQUFjOzs7O0lBQWQsVUFBZSxRQUFnQjtRQUM5QixJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7OztJQUVELGtDQUFROzs7SUFBUjtRQUVDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3JCLE9BQU87U0FDUDtRQUVELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7SUFFRCxrQ0FBUTs7O0lBQVI7UUFDQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7OztJQUVPLG1EQUF5Qjs7OztJQUFqQztRQUNDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtZQUM1RCxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNwRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0UsQ0FBQzs7Ozs7SUFFUyx5Q0FBZTs7OztJQUF6QjtRQUNDLE9BQU8sWUFBWSxDQUFDO0lBQ3JCLENBQUM7O2dCQWhIRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsazhDQUFzQztvQkFLdEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDckM7Ozs7Z0JBM0IrRCxVQUFVO2dCQUF4QyxpQkFBaUI7Z0JBWTFDLGdCQUFnQjtnQkFHaEIsV0FBVztnQkFWWCxlQUFlO2dCQUNmLG9CQUFvQjtnQkFDcEIsZUFBZTtnQkFDZix3QkFBd0I7OzsyQkFzQi9CLEtBQUs7MEJBR0wsS0FBSzs7SUFtR1Asc0JBQUM7Q0FBQSxBQWxIRCxDQVVxQyxjQUFjLEdBd0dsRDtTQXhHWSxlQUFlOzs7SUFFM0IsbUNBQ3lCOztJQUV6QixrQ0FDaUI7O0lBRWpCLHFDQUFtQjs7SUFFbkIsaUNBQWU7O0lBRWYsNkNBQW9DOztJQUVwQywwQ0FBd0I7Ozs7O0lBRXhCLDRDQUF3RDs7Ozs7SUFFNUMsZ0NBQWtDOzs7OztJQUMzQyw0Q0FBcUQ7Ozs7O0lBQ3JELDJDQUFtRDs7Ozs7SUFDbkQsc0NBQXlDOzs7OztJQUN6QywwQ0FBaUQ7Ozs7O0lBQ2pELCtDQUEyRDs7Ozs7SUFDM0QsMENBQWlEOzs7OztJQUNqRCxtREFBbUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBQYWdpbmcgfSBmcm9tICcuLi9jb3JlL2FwaS9yZWFkL3BhZ2luZyc7XG5pbXBvcnQgeyBQYWdpbmdXYXJlaG91c2UgfSBmcm9tICcuLi9jb3JlL2FwaS9wYWdpbmcud2FyZWhvdXNlJztcbmltcG9ydCB7IFBhZ2luZ0NvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vY29yZS9hcGkvcGFnaW5nLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi8uLi9zb3VyY2UvY29yZS9hcGkvc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmUgfSBmcm9tICcuL21vZGUvcGFnaW5nLWRpc3BsYXktbW9kZS5hcmNoaXZlJztcbmltcG9ydCB7IFBhZ2luZ0Rpc3BsYXlNb2RlIH0gZnJvbSAnLi9tb2RlL3BhZ2luZy1kaXNwbGF5LW1vZGUnO1xuaW1wb3J0IHsgUGFnaW5nUG9zaXRpb24gfSBmcm9tICcuL3BhZ2luZy1wb3NpdGlvbic7XG5pbXBvcnQgeyBTdHJlYW1DbG9zZXIgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL3JlYWN0aXZlL3N0cmVhbS1jbG9zZXInO1xuaW1wb3J0IHsgQ3NzQ2xhc3NNb2RpZmllciB9IGZyb20gJy4uLy4uL2NvbW1vbi9jc3MtY2xhc3MvY3NzLWNsYXNzLm1vZGlmaWVyJztcbmltcG9ydCB7IENzc0NsYXNzIH0gZnJvbSAnLi4vLi4vY29tbW9uL2Nzcy1jbGFzcy9jc3MtY2xhc3MnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvbmctY2hhbmdlcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1wYWdpbmddW3Bvc2l0aW9uXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9wYWdpbmcuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9zdHlsZS9wYWdpbmcubmd4LnNjc3MnLFxuXHRcdCcuL3N0eWxlL3RoZW1lL2dlbmVyaWMucGFnaW5nLm5neC5zY3NzJ1xuXHRdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmdDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0QElucHV0KClcblx0cG9zaXRpb246IFBhZ2luZ1Bvc2l0aW9uO1xuXG5cdEBJbnB1dCgpXG5cdG1pbmltYWw6IGJvb2xlYW47XG5cblx0c291cmNlU2l6ZTogbnVtYmVyO1xuXG5cdHBhZ2luZzogUGFnaW5nO1xuXG5cdGFsdGVybmF0aXZlRGlzcGxheTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGlzUGFnaW5nVmlzaWJsZSA9IGZhbHNlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgbG9jYWxTdHJlYW1DbG9zZXIgPSBuZXcgU3RyZWFtQ2xvc2VyKCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBlbFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY3NzQ2xhc3NNb2RpZmllcjogQ3NzQ2xhc3NNb2RpZmllcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcGFnaW5nV2FyZWhvdXNlOiBQYWdpbmdXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcGFnaW5nQ29tbWFuZEludm9rZXI6IFBhZ2luZ0NvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZVdhcmVob3VzZTogU291cmNlV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZTogUGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsUmVmKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktZmxleCcpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1qdXN0aWZ5LWVuZCcpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1pdGVtcy1jZW50ZXInKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktcC00Jyk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8UGFnaW5nQ29tcG9uZW50Pikge1xuXG5cdFx0aWYgKGNoYW5nZXMucG9zaXRpb24pIHtcblxuXHRcdFx0aWYgKHRoaXMucG9zaXRpb24gPT09IFBhZ2luZ1Bvc2l0aW9uLkJPVFRPTSkge1xuXHRcdFx0XHR0aGlzLmNzc0NsYXNzTW9kaWZpZXIucmVtb3ZlKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgQ3NzQ2xhc3MuUEFHSU5HX1RPUF9DTEFTU19OQU1FKTtcblx0XHRcdFx0dGhpcy5jc3NDbGFzc01vZGlmaWVyLmFkZCh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsIENzc0NsYXNzLlBBR0lOR19CT1RUT01fQ0xBU1NfTkFNRSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmNzc0NsYXNzTW9kaWZpZXIucmVtb3ZlKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgQ3NzQ2xhc3MuUEFHSU5HX0JPVFRPTV9DTEFTU19OQU1FKTtcblx0XHRcdFx0dGhpcy5jc3NDbGFzc01vZGlmaWVyLmFkZCh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsIENzc0NsYXNzLlBBR0lOR19UT1BfQ0xBU1NfTkFNRSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMucGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlLm9uKCksXG5cdFx0XHQobW9kZTogUGFnaW5nRGlzcGxheU1vZGUpID0+IHtcblx0XHRcdFx0dGhpcy5hbHRlcm5hdGl2ZURpc3BsYXkgPSBtb2RlID09PSBQYWdpbmdEaXNwbGF5TW9kZS5BRFZBTkNFRDtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnBhZ2luZ1dhcmVob3VzZS5vblBhZ2luZyh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChwYWdpbmc6IFBhZ2luZykgPT4ge1xuXHRcdFx0XHR0aGlzLnBhZ2luZyA9IHBhZ2luZztcblx0XHRcdFx0dGhpcy5jYWxjdWxhdGVQYWdpbmdWaXNpYmlsaXR5KCk7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5zb3VyY2VXYXJlaG91c2Uub25PcmlnaW5TaXplKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KHNpemU6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnNvdXJjZVNpemUgPSBzaXplO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLmxvY2FsU3RyZWFtQ2xvc2VyLnVuc3Vic2NyaWJlKCk7XG5cdFx0c3VwZXIubmdPbkRlc3Ryb3koKTtcblx0fVxuXG5cdGNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIpIHtcblx0XHR0aGlzLnBhZ2luZ0NvbW1hbmRJbnZva2VyLmNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdG5leHRQYWdlKCk6IHZvaWQge1xuXG5cdFx0aWYgKCF0aGlzLnNvdXJjZVNpemUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnBhZ2luZ0NvbW1hbmRJbnZva2VyLm5leHRQYWdlKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0cHJldlBhZ2UoKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdpbmdDb21tYW5kSW52b2tlci5wcmV2UGFnZSh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlUGFnaW5nVmlzaWJpbGl0eSgpOiB2b2lkIHtcblx0XHR0aGlzLmlzUGFnaW5nVmlzaWJsZSA9IHRoaXMucGFnaW5nICYmIHRoaXMucGFnaW5nLmlzRW5hYmxlZCgpICYmXG5cdFx0XHQoKCh0aGlzLnBvc2l0aW9uID09PSBQYWdpbmdQb3NpdGlvbi5UT1ApICYmIHRoaXMucGFnaW5nLmlzUGFnZXJUb3AoKSkgfHxcblx0XHRcdFx0KCh0aGlzLnBvc2l0aW9uID09PSBQYWdpbmdQb3NpdGlvbi5CT1RUT00pICYmIHRoaXMucGFnaW5nLmlzUGFnZXJCb3R0b20oKSkpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXBhZ2luZyc7XG5cdH1cblxufVxuIl19