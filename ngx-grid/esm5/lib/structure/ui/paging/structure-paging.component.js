/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { PagingQueryService } from '../../app/paging/paging-query.service';
import { PagingCommandService } from '../../app/paging/paging-command.service';
import { SourceQueryService } from '../../app/source/source-query.service';
var StructurePagingComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructurePagingComponent, _super);
    function StructurePagingComponent(changeDetectorRef, pagingQueryService, pagingCommandService, sourceQueryService) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.pagingQueryService = pagingQueryService;
        _this.pagingCommandService = pagingCommandService;
        _this.sourceQueryService = sourceQueryService;
        _this.alternativeDisplay = false;
        return _this;
    }
    /**
     * @return {?}
     */
    StructurePagingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.pagingQueryService
            .select()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} paging
         * @return {?}
         */
        function (paging) {
            _this.paging = paging;
            _this.changeDetectorRef.detectChanges();
        }));
        this.sourceQueryService
            .selectOriginSize()
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
     * @param {?} pageSize
     * @return {?}
     */
    StructurePagingComponent.prototype.changePageSize = /**
     * @param {?} pageSize
     * @return {?}
     */
    function (pageSize) {
        this.pagingCommandService.changePageSize(pageSize);
    };
    /**
     * @return {?}
     */
    StructurePagingComponent.prototype.nextPage = /**
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
    StructurePagingComponent.prototype.prevPage = /**
     * @return {?}
     */
    function () {
        this.pagingCommandService.prevPage();
    };
    StructurePagingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-paging',
                    template: "<ng-container *ngIf=\"paging && !alternativeDisplay\">\n\n\t<gui-structure-paging-select\n\t\t[paging]=\"paging\"\n\t\t(pageSizeChanged)=\"changePageSize($event)\">\n\t</gui-structure-paging-select>\n\n\t<gui-structure-paging-stats\n\t\t[paging]=\"paging\"\n\t\t[sourceSize]=\"sourceSize\">\n\t</gui-structure-paging-stats>\n\n\t<gui-structure-paging-navigator\n\t\t[paging]=\"paging\"\n\t\t[sourceSize]=\"sourceSize\"\n\t\t(prevPageChanged)=\"prevPage()\"\n\t\t(nextPageChanged)=\"nextPage()\">\n\t</gui-structure-paging-navigator>\n\n</ng-container>\n\n<ng-container *ngIf=\"paging && alternativeDisplay\">\n\n\t\t<gui-structure-paging-select\n\t\t\t[paging]=\"paging\"\n\t\t\t(pageSizeChanged)=\"changePageSize($event)\">\n\t\t</gui-structure-paging-select>\n\n\t\t<gui-structure-alternative-paging-navigator\n\t\t\t[paging]=\"paging\"\n\t\t\t[sourceSize]=\"sourceSize\"\n\t\t\t(prevPageChanged)=\"prevPage()\"\n\t\t\t(nextPageChanged)=\"nextPage()\">\n\n\t\t\t<gui-structure-alternative-paging-pages\n\t\t\t\t[paging]=\"paging\"\n\t\t\t\t[sourceSize]=\"sourceSize\">\n\t\t\t</gui-structure-alternative-paging-pages>\n\n\t\t</gui-structure-alternative-paging-navigator>\n\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    StructurePagingComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: PagingQueryService },
        { type: PagingCommandService },
        { type: SourceQueryService }
    ]; };
    return StructurePagingComponent;
}(SmartComponent));
export { StructurePagingComponent };
if (false) {
    /** @type {?} */
    StructurePagingComponent.prototype.sourceSize;
    /** @type {?} */
    StructurePagingComponent.prototype.paging;
    /** @type {?} */
    StructurePagingComponent.prototype.alternativeDisplay;
    /**
     * @type {?}
     * @private
     */
    StructurePagingComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructurePagingComponent.prototype.pagingQueryService;
    /**
     * @type {?}
     * @private
     */
    StructurePagingComponent.prototype.pagingCommandService;
    /**
     * @type {?}
     * @private
     */
    StructurePagingComponent.prototype.sourceQueryService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXBhZ2luZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvcGFnaW5nL3N0cnVjdHVyZS1wYWdpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUU5RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFHeEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDM0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFHM0U7SUFLOEMsb0RBQWM7SUFRM0Qsa0NBQW9CLGlCQUFvQyxFQUM3QyxrQkFBc0MsRUFDdEMsb0JBQTBDLEVBQzFDLGtCQUFzQztRQUhqRCxZQUlDLGlCQUFPLFNBQ1A7UUFMbUIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3Qyx3QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsd0JBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUxqRCx3QkFBa0IsR0FBWSxLQUFLLENBQUM7O0lBT3BDLENBQUM7Ozs7SUFFRCwyQ0FBUTs7O0lBQVI7UUFBQSxpQkFrQkM7UUFqQkEsSUFBSSxDQUFDLGtCQUFrQjthQUNyQixNQUFNLEVBQUU7YUFDUixJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLE1BQWM7WUFDekIsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDckIsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO1FBRUosSUFBSSxDQUFDLGtCQUFrQjthQUNyQixnQkFBZ0IsRUFBRTthQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3RCLFNBQVM7Ozs7UUFBQyxVQUFDLElBQVk7WUFDdkIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxpREFBYzs7OztJQUFkLFVBQWUsUUFBZ0I7UUFDOUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQsMkNBQVE7OztJQUFSO1FBRUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDckIsT0FBTztTQUNQO1FBRUQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCwyQ0FBUTs7O0lBQVI7UUFDQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDdEMsQ0FBQzs7Z0JBdkRELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxxckNBQThDO29CQUM5QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDL0M7Ozs7Z0JBZGlDLGlCQUFpQjtnQkFLMUMsa0JBQWtCO2dCQUNsQixvQkFBb0I7Z0JBQ3BCLGtCQUFrQjs7SUE0RDNCLCtCQUFDO0NBQUEsQUF6REQsQ0FLOEMsY0FBYyxHQW9EM0Q7U0FwRFksd0JBQXdCOzs7SUFFcEMsOENBQW1COztJQUVuQiwwQ0FBZTs7SUFFZixzREFBb0M7Ozs7O0lBRXhCLHFEQUE0Qzs7Ozs7SUFDckQsc0RBQThDOzs7OztJQUM5Qyx3REFBa0Q7Ozs7O0lBQ2xELHNEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFBhZ2luZyB9IGZyb20gJy4uLy4uL2RvbWFpbi9wYWdpbmcvcXVlcnkvcGFnaW5nJztcbmltcG9ydCB7IFBhZ2luZ1F1ZXJ5U2VydmljZSB9IGZyb20gJy4uLy4uL2FwcC9wYWdpbmcvcGFnaW5nLXF1ZXJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnaW5nQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hcHAvcGFnaW5nL3BhZ2luZy1jb21tYW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgU291cmNlUXVlcnlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXBwL3NvdXJjZS9zb3VyY2UtcXVlcnkuc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1wYWdpbmcnLFxuXHR0ZW1wbGF0ZVVybDogJ3N0cnVjdHVyZS1wYWdpbmcuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVQYWdpbmdDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0c291cmNlU2l6ZTogbnVtYmVyO1xuXG5cdHBhZ2luZzogUGFnaW5nO1xuXG5cdGFsdGVybmF0aXZlRGlzcGxheTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHBhZ2luZ1F1ZXJ5U2VydmljZTogUGFnaW5nUXVlcnlTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHBhZ2luZ0NvbW1hbmRTZXJ2aWNlOiBQYWdpbmdDb21tYW5kU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSBzb3VyY2VRdWVyeVNlcnZpY2U6IFNvdXJjZVF1ZXJ5U2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLnBhZ2luZ1F1ZXJ5U2VydmljZVxuXHRcdFx0LnNlbGVjdCgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgocGFnaW5nOiBQYWdpbmcpID0+IHtcblx0XHRcdFx0dGhpcy5wYWdpbmcgPSBwYWdpbmc7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnNvdXJjZVF1ZXJ5U2VydmljZVxuXHRcdFx0LnNlbGVjdE9yaWdpblNpemUoKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKHNpemU6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnNvdXJjZVNpemUgPSBzaXplO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0Y2hhbmdlUGFnZVNpemUocGFnZVNpemU6IG51bWJlcikge1xuXHRcdHRoaXMucGFnaW5nQ29tbWFuZFNlcnZpY2UuY2hhbmdlUGFnZVNpemUocGFnZVNpemUpO1xuXHR9XG5cblx0bmV4dFBhZ2UoKTogdm9pZCB7XG5cblx0XHRpZiAoIXRoaXMuc291cmNlU2l6ZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMucGFnaW5nQ29tbWFuZFNlcnZpY2UubmV4dFBhZ2UoKTtcblx0fVxuXG5cdHByZXZQYWdlKCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nQ29tbWFuZFNlcnZpY2UucHJldlBhZ2UoKTtcblx0fVxuXG59XG4iXX0=