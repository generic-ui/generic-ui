/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { StructurePagingReadModelWarehouse } from '../../ui-api/paging/structure-paging.read-model-warehouse';
import { StructurePagingCommandDispatcher } from '../../ui-api/paging/structure-paging.command-dispatcher';
import { StructureSourceReadModelWarehouse } from '../../ui-api/source/structure-source.read-model-warehouse';
import { StructurePagingDisplayModeArchive } from './mode/structure-paging.display-mode.archive';
import { PagingDisplayMode } from './mode/paging-display-mode';
var StructurePagingComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructurePagingComponent, _super);
    function StructurePagingComponent(changeDetectorRef, pagingReadModelService, pagingCommandService, sourceReadModelService, structurePagingDisplayModeArchive) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.pagingReadModelService = pagingReadModelService;
        _this.pagingCommandService = pagingCommandService;
        _this.sourceReadModelService = sourceReadModelService;
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
        this.pagingReadModelService
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
        this.sourceReadModelService
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
        { type: StructurePagingReadModelWarehouse },
        { type: StructurePagingCommandDispatcher },
        { type: StructureSourceReadModelWarehouse },
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
    StructurePagingComponent.prototype.pagingReadModelService;
    /**
     * @type {?}
     * @private
     */
    StructurePagingComponent.prototype.pagingCommandService;
    /**
     * @type {?}
     * @private
     */
    StructurePagingComponent.prototype.sourceReadModelService;
    /**
     * @type {?}
     * @private
     */
    StructurePagingComponent.prototype.structurePagingDisplayModeArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXBhZ2luZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvcGFnaW5nL3N0cnVjdHVyZS1wYWdpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUU5RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFHeEUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDOUcsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0seURBQXlELENBQUM7QUFDM0csT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDOUcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDakcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHL0Q7SUFLOEMsb0RBQWM7SUFRM0Qsa0NBQW9CLGlCQUFvQyxFQUM3QyxzQkFBeUQsRUFDekQsb0JBQXNELEVBQ3RELHNCQUF5RCxFQUN6RCxpQ0FBb0U7UUFKL0UsWUFLQyxpQkFBTyxTQUNQO1FBTm1CLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0MsNEJBQXNCLEdBQXRCLHNCQUFzQixDQUFtQztRQUN6RCwwQkFBb0IsR0FBcEIsb0JBQW9CLENBQWtDO1FBQ3RELDRCQUFzQixHQUF0QixzQkFBc0IsQ0FBbUM7UUFDekQsdUNBQWlDLEdBQWpDLGlDQUFpQyxDQUFtQztRQU4vRSx3QkFBa0IsR0FBWSxLQUFLLENBQUM7O0lBUXBDLENBQUM7Ozs7SUFFRCwyQ0FBUTs7O0lBQVI7UUFBQSxpQkE2QkM7UUEzQkEsSUFBSSxDQUFDLGlDQUFpQzthQUNwQyxPQUFPLEVBQUU7YUFDVCxJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLElBQXVCO1lBQ2xDLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLEtBQUssaUJBQWlCLENBQUMsUUFBUSxDQUFDO1lBQzlELEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyxzQkFBc0I7YUFDekIsUUFBUSxFQUFFO2FBQ1YsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxNQUFjO1lBQ3pCLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyxzQkFBc0I7YUFDekIsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN0QixTQUFTOzs7O1FBQUMsVUFBQyxJQUFZO1lBQ3ZCLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsaURBQWM7Ozs7SUFBZCxVQUFlLFFBQWdCO1FBQzlCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVELDJDQUFROzs7SUFBUjtRQUVDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3JCLE9BQU87U0FDUDtRQUVELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsMkNBQVE7OztJQUFSO1FBQ0MsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3RDLENBQUM7O2dCQW5FRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsd25DQUE4QztvQkFDOUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQy9DOzs7O2dCQWhCaUMsaUJBQWlCO2dCQUsxQyxpQ0FBaUM7Z0JBQ2pDLGdDQUFnQztnQkFDaEMsaUNBQWlDO2dCQUNqQyxpQ0FBaUM7O0lBeUUxQywrQkFBQztDQUFBLEFBckVELENBSzhDLGNBQWMsR0FnRTNEO1NBaEVZLHdCQUF3Qjs7O0lBRXBDLDhDQUFtQjs7SUFFbkIsMENBQWU7O0lBRWYsc0RBQW9DOzs7OztJQUV4QixxREFBNEM7Ozs7O0lBQ3JELDBEQUFpRTs7Ozs7SUFDakUsd0RBQThEOzs7OztJQUM5RCwwREFBaUU7Ozs7O0lBQ2pFLHFFQUE0RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFBhZ2luZyB9IGZyb20gJy4uLy4uL3JlYWQvcGFnaW5nL3BhZ2luZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQYWdpbmdSZWFkTW9kZWxXYXJlaG91c2UgfSBmcm9tICcuLi8uLi91aS1hcGkvcGFnaW5nL3N0cnVjdHVyZS1wYWdpbmcucmVhZC1tb2RlbC13YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlUGFnaW5nQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi91aS1hcGkvcGFnaW5nL3N0cnVjdHVyZS1wYWdpbmcuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZVJlYWRNb2RlbFdhcmVob3VzZSB9IGZyb20gJy4uLy4uL3VpLWFwaS9zb3VyY2Uvc3RydWN0dXJlLXNvdXJjZS5yZWFkLW1vZGVsLXdhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmUgfSBmcm9tICcuL21vZGUvc3RydWN0dXJlLXBhZ2luZy5kaXNwbGF5LW1vZGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBQYWdpbmdEaXNwbGF5TW9kZSB9IGZyb20gJy4vbW9kZS9wYWdpbmctZGlzcGxheS1tb2RlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLXBhZ2luZycsXG5cdHRlbXBsYXRlVXJsOiAnc3RydWN0dXJlLXBhZ2luZy5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVBhZ2luZ0NvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRzb3VyY2VTaXplOiBudW1iZXI7XG5cblx0cGFnaW5nOiBQYWdpbmc7XG5cblx0YWx0ZXJuYXRpdmVEaXNwbGF5OiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcGFnaW5nUmVhZE1vZGVsU2VydmljZTogU3RydWN0dXJlUGFnaW5nUmVhZE1vZGVsV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHBhZ2luZ0NvbW1hbmRTZXJ2aWNlOiBTdHJ1Y3R1cmVQYWdpbmdDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSBzb3VyY2VSZWFkTW9kZWxTZXJ2aWNlOiBTdHJ1Y3R1cmVTb3VyY2VSZWFkTW9kZWxXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlUGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlOiBTdHJ1Y3R1cmVQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmUpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZVxuXHRcdFx0Lm9uVmFsdWUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKG1vZGU6IFBhZ2luZ0Rpc3BsYXlNb2RlKSA9PiB7XG5cdFx0XHRcdHRoaXMuYWx0ZXJuYXRpdmVEaXNwbGF5ID0gbW9kZSA9PT0gUGFnaW5nRGlzcGxheU1vZGUuQURWQU5DRUQ7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnBhZ2luZ1JlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vblBhZ2luZygpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgocGFnaW5nOiBQYWdpbmcpID0+IHtcblx0XHRcdFx0dGhpcy5wYWdpbmcgPSBwYWdpbmc7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnNvdXJjZVJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vbk9yaWdpblNpemUoKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKHNpemU6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnNvdXJjZVNpemUgPSBzaXplO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0Y2hhbmdlUGFnZVNpemUocGFnZVNpemU6IG51bWJlcikge1xuXHRcdHRoaXMucGFnaW5nQ29tbWFuZFNlcnZpY2UuY2hhbmdlUGFnZVNpemUocGFnZVNpemUpO1xuXHR9XG5cblx0bmV4dFBhZ2UoKTogdm9pZCB7XG5cblx0XHRpZiAoIXRoaXMuc291cmNlU2l6ZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMucGFnaW5nQ29tbWFuZFNlcnZpY2UubmV4dFBhZ2UoKTtcblx0fVxuXG5cdHByZXZQYWdlKCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nQ29tbWFuZFNlcnZpY2UucHJldlBhZ2UoKTtcblx0fVxuXG59XG4iXX0=