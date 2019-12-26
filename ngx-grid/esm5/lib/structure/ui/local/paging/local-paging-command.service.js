/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Override } from '../../../../../common/cdk/decorators';
import { PagingCommandService } from '../../../ui-api/paging/paging-command.service';
import { StructureId } from '../../../domain/structure-id';
import { PagingAggregateFactory } from '../../../domain/paging/command/paging.aggregate-factory';
import { PagingDispatcher } from '../../../domain/paging/command/paging.dispatcher';
var LocalPagingCommandService = /** @class */ (function (_super) {
    tslib_1.__extends(LocalPagingCommandService, _super);
    function LocalPagingCommandService(structureId, aggregateFactory, pagingDispatcher) {
        var _this = _super.call(this, pagingDispatcher) || this;
        _this.structureId = structureId;
        _this.aggregateFactory = aggregateFactory;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalPagingCommandService.prototype.setDefaultPaging = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var defaultPaggingAggregate = this.aggregateFactory.createDefault();
        _super.prototype.setPaging.call(this, {
            page: defaultPaggingAggregate.getPage(),
            pageSize: defaultPaggingAggregate.getPageSize(),
            pageSizes: defaultPaggingAggregate.getPageSizes()
        }, this.structureId);
    };
    /**
     * @param {?} paging
     * @return {?}
     */
    LocalPagingCommandService.prototype.setPaging = /**
     * @param {?} paging
     * @return {?}
     */
    function (paging) {
        _super.prototype.setPaging.call(this, paging, this.structureId);
    };
    /**
     * @param {?} pageSize
     * @return {?}
     */
    LocalPagingCommandService.prototype.changePageSize = /**
     * @param {?} pageSize
     * @return {?}
     */
    function (pageSize) {
        _super.prototype.changePageSize.call(this, pageSize, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalPagingCommandService.prototype.nextPage = /**
     * @return {?}
     */
    function () {
        _super.prototype.nextPage.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalPagingCommandService.prototype.prevPage = /**
     * @return {?}
     */
    function () {
        _super.prototype.prevPage.call(this, this.structureId);
    };
    LocalPagingCommandService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalPagingCommandService.ctorParameters = function () { return [
        { type: StructureId },
        { type: PagingAggregateFactory },
        { type: PagingDispatcher }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalPagingCommandService.prototype, "setPaging", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalPagingCommandService.prototype, "changePageSize", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalPagingCommandService.prototype, "nextPage", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalPagingCommandService.prototype, "prevPage", null);
    return LocalPagingCommandService;
}(PagingCommandService));
export { LocalPagingCommandService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalPagingCommandService.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    LocalPagingCommandService.prototype.aggregateFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtcGFnaW5nLWNvbW1hbmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9sb2NhbC9wYWdpbmcvbG9jYWwtcGFnaW5nLWNvbW1hbmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUlwRjtJQUMrQyxxREFBb0I7SUFFbEUsbUNBQW9CLFdBQXdCLEVBQ2pDLGdCQUF3QyxFQUNoRCxnQkFBa0M7UUFGckMsWUFHQyxrQkFBTSxnQkFBZ0IsQ0FBQyxTQUN2QjtRQUptQixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNqQyxzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXdCOztJQUduRCxDQUFDOzs7O0lBRUQsb0RBQWdCOzs7SUFBaEI7O1lBRU8sdUJBQXVCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRTtRQUVyRSxpQkFBTSxTQUFTLFlBQUM7WUFDZixJQUFJLEVBQUUsdUJBQXVCLENBQUMsT0FBTyxFQUFFO1lBQ3ZDLFFBQVEsRUFBRSx1QkFBdUIsQ0FBQyxXQUFXLEVBQUU7WUFDL0MsU0FBUyxFQUFFLHVCQUF1QixDQUFDLFlBQVksRUFBRTtTQUNqRCxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0QixDQUFDOzs7OztJQUdELDZDQUFTOzs7O0lBQVQsVUFBVSxNQUFvQjtRQUM3QixpQkFBTSxTQUFTLFlBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUdELGtEQUFjOzs7O0lBQWQsVUFBZSxRQUFnQjtRQUM5QixpQkFBTSxjQUFjLFlBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7O0lBR0QsNENBQVE7OztJQUFSO1FBQ0MsaUJBQU0sUUFBUSxZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7O0lBR0QsNENBQVE7OztJQUFSO1FBQ0MsaUJBQU0sUUFBUSxZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsQyxDQUFDOztnQkF0Q0QsVUFBVTs7OztnQkFORixXQUFXO2dCQUNYLHNCQUFzQjtnQkFDdEIsZ0JBQWdCOztJQXlCeEI7UUFEQyxRQUFROzs7OzhEQUdSO0lBR0Q7UUFEQyxRQUFROzs7O21FQUdSO0lBR0Q7UUFEQyxRQUFROzs7OzZEQUdSO0lBR0Q7UUFEQyxRQUFROzs7OzZEQUdSO0lBRUYsZ0NBQUM7Q0FBQSxBQXhDRCxDQUMrQyxvQkFBb0IsR0F1Q2xFO1NBdkNZLHlCQUF5Qjs7Ozs7O0lBRXpCLGdEQUFnQzs7Ozs7SUFDekMscURBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IFBhZ2luZ0NvbW1hbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3BhZ2luZy9wYWdpbmctY29tbWFuZC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBQYWdpbmdBZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3BhZ2luZy9jb21tYW5kL3BhZ2luZy5hZ2dyZWdhdGUtZmFjdG9yeSc7XG5pbXBvcnQgeyBQYWdpbmdEaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3BhZ2luZy9jb21tYW5kL3BhZ2luZy5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFBhZ2luZ0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9wYWdpbmcvcGFnaW5nLWNvbmZpZyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsUGFnaW5nQ29tbWFuZFNlcnZpY2UgZXh0ZW5kcyBQYWdpbmdDb21tYW5kU2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgYWdncmVnYXRlRmFjdG9yeTogUGFnaW5nQWdncmVnYXRlRmFjdG9yeSxcblx0XHRcdFx0cGFnaW5nRGlzcGF0Y2hlcjogUGFnaW5nRGlzcGF0Y2hlcikge1xuXHRcdHN1cGVyKHBhZ2luZ0Rpc3BhdGNoZXIpO1xuXHR9XG5cblx0c2V0RGVmYXVsdFBhZ2luZygpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGRlZmF1bHRQYWdnaW5nQWdncmVnYXRlID0gdGhpcy5hZ2dyZWdhdGVGYWN0b3J5LmNyZWF0ZURlZmF1bHQoKTtcblxuXHRcdHN1cGVyLnNldFBhZ2luZyh7XG5cdFx0XHRwYWdlOiBkZWZhdWx0UGFnZ2luZ0FnZ3JlZ2F0ZS5nZXRQYWdlKCksXG5cdFx0XHRwYWdlU2l6ZTogZGVmYXVsdFBhZ2dpbmdBZ2dyZWdhdGUuZ2V0UGFnZVNpemUoKSxcblx0XHRcdHBhZ2VTaXplczogZGVmYXVsdFBhZ2dpbmdBZ2dyZWdhdGUuZ2V0UGFnZVNpemVzKClcblx0XHR9LCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRQYWdpbmcocGFnaW5nOiBQYWdpbmdDb25maWcpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRQYWdpbmcocGFnaW5nLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRjaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0c3VwZXIuY2hhbmdlUGFnZVNpemUocGFnZVNpemUsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG5leHRQYWdlKCk6IHZvaWQge1xuXHRcdHN1cGVyLm5leHRQYWdlKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHByZXZQYWdlKCk6IHZvaWQge1xuXHRcdHN1cGVyLnByZXZQYWdlKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==