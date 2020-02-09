/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { PagingReadModelService } from '../../ui-api/paging/paging-read-model.service';
import { PagingCommandService } from '../../ui-api/paging/paging-command.service';
import { SourceReadModelService } from '../../ui-api/source/source-read-model.service';
import { StructurePagingDisplayModeArchive } from './mode/structure-paging.display-mode.archive';
import { PagingDisplayMode } from './mode/paging-display-mode';
var StructurePagingComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructurePagingComponent, _super);
    function StructurePagingComponent(changeDetectorRef, pagingQueryService, pagingCommandService, sourceQueryService, structurePagingDisplayModeArchive) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.pagingQueryService = pagingQueryService;
        _this.pagingCommandService = pagingCommandService;
        _this.sourceQueryService = sourceQueryService;
        _this.structurePagingDisplayModeArchive = structurePagingDisplayModeArchive;
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
        this.pagingQueryService
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
        this.sourceQueryService
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
                    template: "<ng-container *ngIf=\"paging && !alternativeDisplay\">\n\n\t<gui-structure-paging-select\n\t\t(pageSizeChanged)=\"changePageSize($event)\"\n\t\t[paging]=\"paging\">\n\t</gui-structure-paging-select>\n\n\t<gui-structure-paging-stats\n\t\t[paging]=\"paging\">\n\t</gui-structure-paging-stats>\n\n\t<gui-structure-paging-navigator\n\t\t(nextPageChanged)=\"nextPage()\"\n\t\t(prevPageChanged)=\"prevPage()\"\n\t\t[paging]=\"paging\"\n\t\t[sourceSize]=\"sourceSize\">\n\t</gui-structure-paging-navigator>\n\n</ng-container>\n\n<ng-container *ngIf=\"paging && alternativeDisplay\">\n\n\t<gui-structure-paging-select\n\t\t(pageSizeChanged)=\"changePageSize($event)\"\n\t\t[paging]=\"paging\">\n\t</gui-structure-paging-select>\n\n\t<gui-structure-alternative-paging-navigator\n\t\t(nextPageChanged)=\"nextPage()\"\n\t\t(prevPageChanged)=\"prevPage()\"\n\t\t[paging]=\"paging\"\n\t\t[sourceSize]=\"sourceSize\">\n\n\t\t<gui-structure-alternative-paging-pages\n\t\t\t[paging]=\"paging\"\n\t\t\t[sourceSize]=\"sourceSize\">\n\t\t</gui-structure-alternative-paging-pages>\n\n\t</gui-structure-alternative-paging-navigator>\n\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    StructurePagingComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: PagingReadModelService },
        { type: PagingCommandService },
        { type: SourceReadModelService },
        { type: StructurePagingDisplayModeArchive }
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
    /**
     * @type {?}
     * @private
     */
    StructurePagingComponent.prototype.structurePagingDisplayModeArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXBhZ2luZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvcGFnaW5nL3N0cnVjdHVyZS1wYWdpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUU5RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFHeEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdkYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdkYsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDakcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHL0Q7SUFLOEMsb0RBQWM7SUFRM0Qsa0NBQW9CLGlCQUFvQyxFQUM3QyxrQkFBMEMsRUFDMUMsb0JBQTBDLEVBQzFDLGtCQUEwQyxFQUMxQyxpQ0FBb0U7UUFKL0UsWUFLQyxpQkFBTyxTQUNQO1FBTm1CLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0Msd0JBQWtCLEdBQWxCLGtCQUFrQixDQUF3QjtRQUMxQywwQkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLHdCQUFrQixHQUFsQixrQkFBa0IsQ0FBd0I7UUFDMUMsdUNBQWlDLEdBQWpDLGlDQUFpQyxDQUFtQztRQU4vRSx3QkFBa0IsR0FBWSxLQUFLLENBQUM7O0lBUXBDLENBQUM7Ozs7SUFFRCwyQ0FBUTs7O0lBQVI7UUFBQSxpQkE2QkM7UUEzQkEsSUFBSSxDQUFDLGlDQUFpQzthQUNwQyxPQUFPLEVBQUU7YUFDVCxJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLElBQXVCO1lBQ2xDLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLEtBQUssaUJBQWlCLENBQUMsUUFBUSxDQUFDO1lBQzlELEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyxrQkFBa0I7YUFDckIsUUFBUSxFQUFFO2FBQ1YsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxNQUFjO1lBQ3pCLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyxrQkFBa0I7YUFDckIsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN0QixTQUFTOzs7O1FBQUMsVUFBQyxJQUFZO1lBQ3ZCLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsaURBQWM7Ozs7SUFBZCxVQUFlLFFBQWdCO1FBQzlCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVELDJDQUFROzs7SUFBUjtRQUVDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3JCLE9BQU87U0FDUDtRQUVELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsMkNBQVE7OztJQUFSO1FBQ0MsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3RDLENBQUM7O2dCQW5FRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsd25DQUE4QztvQkFDOUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQy9DOzs7O2dCQWhCaUMsaUJBQWlCO2dCQUsxQyxzQkFBc0I7Z0JBQ3RCLG9CQUFvQjtnQkFDcEIsc0JBQXNCO2dCQUN0QixpQ0FBaUM7O0lBeUUxQywrQkFBQztDQUFBLEFBckVELENBSzhDLGNBQWMsR0FnRTNEO1NBaEVZLHdCQUF3Qjs7O0lBRXBDLDhDQUFtQjs7SUFFbkIsMENBQWU7O0lBRWYsc0RBQW9DOzs7OztJQUV4QixxREFBNEM7Ozs7O0lBQ3JELHNEQUFrRDs7Ozs7SUFDbEQsd0RBQWtEOzs7OztJQUNsRCxzREFBa0Q7Ozs7O0lBQ2xELHFFQUE0RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFBhZ2luZyB9IGZyb20gJy4uLy4uL2RvbWFpbi9wYWdpbmcvcmVhZC9wYWdpbmcnO1xuaW1wb3J0IHsgUGFnaW5nUmVhZE1vZGVsU2VydmljZSB9IGZyb20gJy4uLy4uL3VpLWFwaS9wYWdpbmcvcGFnaW5nLXJlYWQtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdpbmdDb21tYW5kU2VydmljZSB9IGZyb20gJy4uLy4uL3VpLWFwaS9wYWdpbmcvcGFnaW5nLWNvbW1hbmQuc2VydmljZSc7XG5pbXBvcnQgeyBTb3VyY2VSZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdWktYXBpL3NvdXJjZS9zb3VyY2UtcmVhZC1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZVBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZSB9IGZyb20gJy4vbW9kZS9zdHJ1Y3R1cmUtcGFnaW5nLmRpc3BsYXktbW9kZS5hcmNoaXZlJztcbmltcG9ydCB7IFBhZ2luZ0Rpc3BsYXlNb2RlIH0gZnJvbSAnLi9tb2RlL3BhZ2luZy1kaXNwbGF5LW1vZGUnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtcGFnaW5nJyxcblx0dGVtcGxhdGVVcmw6ICdzdHJ1Y3R1cmUtcGFnaW5nLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUGFnaW5nQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHNvdXJjZVNpemU6IG51bWJlcjtcblxuXHRwYWdpbmc6IFBhZ2luZztcblxuXHRhbHRlcm5hdGl2ZURpc3BsYXk6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSBwYWdpbmdRdWVyeVNlcnZpY2U6IFBhZ2luZ1JlYWRNb2RlbFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcGFnaW5nQ29tbWFuZFNlcnZpY2U6IFBhZ2luZ0NvbW1hbmRTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHNvdXJjZVF1ZXJ5U2VydmljZTogU291cmNlUmVhZE1vZGVsU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmU6IFN0cnVjdHVyZVBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuc3RydWN0dXJlUGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgobW9kZTogUGFnaW5nRGlzcGxheU1vZGUpID0+IHtcblx0XHRcdFx0dGhpcy5hbHRlcm5hdGl2ZURpc3BsYXkgPSBtb2RlID09PSBQYWdpbmdEaXNwbGF5TW9kZS5BRFZBTkNFRDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMucGFnaW5nUXVlcnlTZXJ2aWNlXG5cdFx0XHQub25QYWdpbmcoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHBhZ2luZzogUGFnaW5nKSA9PiB7XG5cdFx0XHRcdHRoaXMucGFnaW5nID0gcGFnaW5nO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zb3VyY2VRdWVyeVNlcnZpY2Vcblx0XHRcdC5vbk9yaWdpblNpemUoKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKHNpemU6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnNvdXJjZVNpemUgPSBzaXplO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0Y2hhbmdlUGFnZVNpemUocGFnZVNpemU6IG51bWJlcikge1xuXHRcdHRoaXMucGFnaW5nQ29tbWFuZFNlcnZpY2UuY2hhbmdlUGFnZVNpemUocGFnZVNpemUpO1xuXHR9XG5cblx0bmV4dFBhZ2UoKTogdm9pZCB7XG5cblx0XHRpZiAoIXRoaXMuc291cmNlU2l6ZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMucGFnaW5nQ29tbWFuZFNlcnZpY2UubmV4dFBhZ2UoKTtcblx0fVxuXG5cdHByZXZQYWdlKCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nQ29tbWFuZFNlcnZpY2UucHJldlBhZ2UoKTtcblx0fVxuXG59XG4iXX0=