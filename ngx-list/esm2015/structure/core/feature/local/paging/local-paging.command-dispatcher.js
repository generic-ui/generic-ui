/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Override } from '../../../../../common/cdk/decorators';
import { PagingCommandInvoker } from '../../../../paging/domain-api/paging.command-invoker';
import { StructureId } from '../../../domain/structure.id';
import { PagingManagerFactory } from '../../../../paging/domain/paging.manager-factory';
import { PagingDispatcher } from '../../../../paging/domain/paging.dispatcher';
export class LocalPagingCommandDispatcher extends PagingCommandInvoker {
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
LocalPagingCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalPagingCommandDispatcher.ctorParameters = () => [
    { type: StructureId },
    { type: PagingManagerFactory },
    { type: PagingDispatcher }
];
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalPagingCommandDispatcher.prototype, "setPaging", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalPagingCommandDispatcher.prototype, "changePageSize", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], LocalPagingCommandDispatcher.prototype, "nextPage", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], LocalPagingCommandDispatcher.prototype, "prevPage", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalPagingCommandDispatcher.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    LocalPagingCommandDispatcher.prototype.aggregateFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtcGFnaW5nLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZmVhdHVyZS9sb2NhbC9wYWdpbmcvbG9jYWwtcGFnaW5nLmNvbW1hbmQtZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUsvRSxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsb0JBQW9COzs7Ozs7SUFFckUsWUFBb0IsV0FBd0IsRUFDakMsZ0JBQXNDLEVBQzlDLGdCQUFrQztRQUNwQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUhMLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2pDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBc0I7SUFHakQsQ0FBQzs7OztJQUVELGdCQUFnQjs7Y0FFVCx1QkFBdUIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFO1FBRXJFLEtBQUssQ0FBQyxTQUFTLENBQUM7WUFDZixJQUFJLEVBQUUsdUJBQXVCLENBQUMsT0FBTyxFQUFFO1lBQ3ZDLFFBQVEsRUFBRSx1QkFBdUIsQ0FBQyxXQUFXLEVBQUU7WUFDL0MsU0FBUyxFQUFFLHVCQUF1QixDQUFDLFlBQVksRUFBRTtTQUNqRCxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0QixDQUFDOzs7OztJQUdELFNBQVMsQ0FBQyxNQUFvQjtRQUM3QixLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFHRCxjQUFjLENBQUMsUUFBZ0I7UUFDOUIsS0FBSyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFHRCxRQUFRO1FBQ1AsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7OztJQUdELFFBQVE7UUFDUCxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7WUF0Q0QsVUFBVTs7OztZQU5GLFdBQVc7WUFDWCxvQkFBb0I7WUFDcEIsZ0JBQWdCOztBQXlCeEI7SUFEQyxRQUFROzs7OzZEQUdSO0FBR0Q7SUFEQyxRQUFROzs7O2tFQUdSO0FBR0Q7SUFEQyxRQUFROzs7OzREQUdSO0FBR0Q7SUFEQyxRQUFROzs7OzREQUdSOzs7Ozs7SUFuQ1csbURBQWdDOzs7OztJQUN6Qyx3REFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgUGFnaW5nQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9wYWdpbmcvZG9tYWluLWFwaS9wYWdpbmcuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBQYWdpbmdNYW5hZ2VyRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uL3BhZ2luZy9kb21haW4vcGFnaW5nLm1hbmFnZXItZmFjdG9yeSc7XG5pbXBvcnQgeyBQYWdpbmdEaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vcGFnaW5nL2RvbWFpbi9wYWdpbmcuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBQYWdpbmdDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9wYWdpbmcvZG9tYWluLWFwaS9wYWdpbmctY29uZmlnJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxQYWdpbmdDb21tYW5kRGlzcGF0Y2hlciBleHRlbmRzIFBhZ2luZ0NvbW1hbmRJbnZva2VyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSBhZ2dyZWdhdGVGYWN0b3J5OiBQYWdpbmdNYW5hZ2VyRmFjdG9yeSxcblx0XHRcdFx0cGFnaW5nRGlzcGF0Y2hlcjogUGFnaW5nRGlzcGF0Y2hlcikge1xuXHRcdHN1cGVyKHBhZ2luZ0Rpc3BhdGNoZXIpO1xuXHR9XG5cblx0c2V0RGVmYXVsdFBhZ2luZygpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGRlZmF1bHRQYWdnaW5nQWdncmVnYXRlID0gdGhpcy5hZ2dyZWdhdGVGYWN0b3J5LmNyZWF0ZURlZmF1bHQoKTtcblxuXHRcdHN1cGVyLnNldFBhZ2luZyh7XG5cdFx0XHRwYWdlOiBkZWZhdWx0UGFnZ2luZ0FnZ3JlZ2F0ZS5nZXRQYWdlKCksXG5cdFx0XHRwYWdlU2l6ZTogZGVmYXVsdFBhZ2dpbmdBZ2dyZWdhdGUuZ2V0UGFnZVNpemUoKSxcblx0XHRcdHBhZ2VTaXplczogZGVmYXVsdFBhZ2dpbmdBZ2dyZWdhdGUuZ2V0UGFnZVNpemVzKClcblx0XHR9LCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRQYWdpbmcocGFnaW5nOiBQYWdpbmdDb25maWcpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRQYWdpbmcocGFnaW5nLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRjaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0c3VwZXIuY2hhbmdlUGFnZVNpemUocGFnZVNpemUsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG5leHRQYWdlKCk6IHZvaWQge1xuXHRcdHN1cGVyLm5leHRQYWdlKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHByZXZQYWdlKCk6IHZvaWQge1xuXHRcdHN1cGVyLnByZXZQYWdlKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==