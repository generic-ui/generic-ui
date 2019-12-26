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
export class LocalPagingCommandService extends PagingCommandService {
    /**
     * @param {?} structureId
     * @param {?} aggregateFactory
     * @param {?} pagingDispatcher
     */
    constructor(structureId, aggregateFactory, pagingDispatcher) {
        super(pagingDispatcher);
        this.structureId = structureId;
        this.aggregateFactory = aggregateFactory;
    }
    /**
     * @return {?}
     */
    setDefaultPaging() {
        /** @type {?} */
        const defaultPaggingAggregate = this.aggregateFactory.createDefault();
        super.setPaging({
            page: defaultPaggingAggregate.getPage(),
            pageSize: defaultPaggingAggregate.getPageSize(),
            pageSizes: defaultPaggingAggregate.getPageSizes()
        }, this.structureId);
    }
    /**
     * @param {?} paging
     * @return {?}
     */
    setPaging(paging) {
        super.setPaging(paging, this.structureId);
    }
    /**
     * @param {?} pageSize
     * @return {?}
     */
    changePageSize(pageSize) {
        super.changePageSize(pageSize, this.structureId);
    }
    /**
     * @return {?}
     */
    nextPage() {
        super.nextPage(this.structureId);
    }
    /**
     * @return {?}
     */
    prevPage() {
        super.prevPage(this.structureId);
    }
}
LocalPagingCommandService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalPagingCommandService.ctorParameters = () => [
    { type: StructureId },
    { type: PagingAggregateFactory },
    { type: PagingDispatcher }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtcGFnaW5nLWNvbW1hbmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9sb2NhbC9wYWdpbmcvbG9jYWwtcGFnaW5nLWNvbW1hbmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUtwRixNQUFNLE9BQU8seUJBQTBCLFNBQVEsb0JBQW9COzs7Ozs7SUFFbEUsWUFBb0IsV0FBd0IsRUFDakMsZ0JBQXdDLEVBQ2hELGdCQUFrQztRQUNwQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUhMLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2pDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBd0I7SUFHbkQsQ0FBQzs7OztJQUVELGdCQUFnQjs7Y0FFVCx1QkFBdUIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFO1FBRXJFLEtBQUssQ0FBQyxTQUFTLENBQUM7WUFDZixJQUFJLEVBQUUsdUJBQXVCLENBQUMsT0FBTyxFQUFFO1lBQ3ZDLFFBQVEsRUFBRSx1QkFBdUIsQ0FBQyxXQUFXLEVBQUU7WUFDL0MsU0FBUyxFQUFFLHVCQUF1QixDQUFDLFlBQVksRUFBRTtTQUNqRCxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0QixDQUFDOzs7OztJQUdELFNBQVMsQ0FBQyxNQUFvQjtRQUM3QixLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFHRCxjQUFjLENBQUMsUUFBZ0I7UUFDOUIsS0FBSyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFHRCxRQUFRO1FBQ1AsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7OztJQUdELFFBQVE7UUFDUCxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7WUF0Q0QsVUFBVTs7OztZQU5GLFdBQVc7WUFDWCxzQkFBc0I7WUFDdEIsZ0JBQWdCOztBQXlCeEI7SUFEQyxRQUFROzs7OzBEQUdSO0FBR0Q7SUFEQyxRQUFROzs7OytEQUdSO0FBR0Q7SUFEQyxRQUFROzs7O3lEQUdSO0FBR0Q7SUFEQyxRQUFROzs7O3lEQUdSOzs7Ozs7SUFuQ1csZ0RBQWdDOzs7OztJQUN6QyxxREFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgUGFnaW5nQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvcGFnaW5nL3BhZ2luZy1jb21tYW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFBhZ2luZ0FnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vcGFnaW5nL2NvbW1hbmQvcGFnaW5nLmFnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IFBhZ2luZ0Rpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vcGFnaW5nL2NvbW1hbmQvcGFnaW5nLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgUGFnaW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3BhZ2luZy9wYWdpbmctY29uZmlnJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxQYWdpbmdDb21tYW5kU2VydmljZSBleHRlbmRzIFBhZ2luZ0NvbW1hbmRTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSBhZ2dyZWdhdGVGYWN0b3J5OiBQYWdpbmdBZ2dyZWdhdGVGYWN0b3J5LFxuXHRcdFx0XHRwYWdpbmdEaXNwYXRjaGVyOiBQYWdpbmdEaXNwYXRjaGVyKSB7XG5cdFx0c3VwZXIocGFnaW5nRGlzcGF0Y2hlcik7XG5cdH1cblxuXHRzZXREZWZhdWx0UGFnaW5nKCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZGVmYXVsdFBhZ2dpbmdBZ2dyZWdhdGUgPSB0aGlzLmFnZ3JlZ2F0ZUZhY3RvcnkuY3JlYXRlRGVmYXVsdCgpO1xuXG5cdFx0c3VwZXIuc2V0UGFnaW5nKHtcblx0XHRcdHBhZ2U6IGRlZmF1bHRQYWdnaW5nQWdncmVnYXRlLmdldFBhZ2UoKSxcblx0XHRcdHBhZ2VTaXplOiBkZWZhdWx0UGFnZ2luZ0FnZ3JlZ2F0ZS5nZXRQYWdlU2l6ZSgpLFxuXHRcdFx0cGFnZVNpemVzOiBkZWZhdWx0UGFnZ2luZ0FnZ3JlZ2F0ZS5nZXRQYWdlU2l6ZXMoKVxuXHRcdH0sIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldFBhZ2luZyhwYWdpbmc6IFBhZ2luZ0NvbmZpZyk6IHZvaWQge1xuXHRcdHN1cGVyLnNldFBhZ2luZyhwYWdpbmcsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdGNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIpOiB2b2lkIHtcblx0XHRzdXBlci5jaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0bmV4dFBhZ2UoKTogdm9pZCB7XG5cdFx0c3VwZXIubmV4dFBhZ2UodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0cHJldlBhZ2UoKTogdm9pZCB7XG5cdFx0c3VwZXIucHJldlBhZ2UodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19