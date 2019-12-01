/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Override } from '../../../../../common/cdk/decorators';
import { CompositionQueryService } from '../../api/composition/composition.query-service';
import { CompositionId } from '../../../domain/composition/composition-id';
import { CompositionRepository } from '../../../domain/composition/query/composition.repository';
import { globalCompositionId } from '../../../domain/composition/global-composition-id';
export class LocalCompositionQueryService extends CompositionQueryService {
    /**
     * @param {?} compositionId
     * @param {?} compositionRepository
     */
    constructor(compositionId, compositionRepository) {
        super(compositionRepository);
        this.compositionId = compositionId;
    }
    /**
     * @return {?}
     */
    selectHeaderColumns() {
        return super.selectHeaderColumns(this.compositionId);
    }
    /**
     * @return {?}
     */
    selectTemplateColumns() {
        return super.selectTemplateColumns(this.compositionId);
    }
    /**
     * @return {?}
     */
    selectWidthForEachColumn() {
        return super.selectWidthForEachColumn(this.compositionId);
    }
    /**
     * @return {?}
     */
    selectWidth() {
        return super.selectWidth(this.compositionId);
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    selectContainerWidth(compositionId = globalCompositionId) {
        return super.selectContainerWidth(this.compositionId);
    }
    /**
     * @return {?}
     */
    selectResizeWidth() {
        return super.selectResizeWidth(this.compositionId);
    }
}
LocalCompositionQueryService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalCompositionQueryService.ctorParameters = () => [
    { type: CompositionId },
    { type: CompositionRepository }
];
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalCompositionQueryService.prototype, "selectHeaderColumns", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalCompositionQueryService.prototype, "selectTemplateColumns", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalCompositionQueryService.prototype, "selectWidthForEachColumn", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalCompositionQueryService.prototype, "selectWidth", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CompositionId]),
    tslib_1.__metadata("design:returntype", Observable)
], LocalCompositionQueryService.prototype, "selectContainerWidth", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalCompositionQueryService.prototype, "selectResizeWidth", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalCompositionQueryService.prototype.compositionId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtY29tcG9zaXRpb24tcXVlcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9sb2NhbC9jb21wb3NpdGlvbi9sb2NhbC1jb21wb3NpdGlvbi1xdWVyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUVoRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMxRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFHakcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFLeEYsTUFBTSxPQUFPLDRCQUE2QixTQUFRLHVCQUF1Qjs7Ozs7SUFFeEUsWUFBNkIsYUFBNEIsRUFDdEQscUJBQTRDO1FBQzlDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRkQsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFHekQsQ0FBQzs7OztJQUdELG1CQUFtQjtRQUNsQixPQUFPLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7OztJQUdELHFCQUFxQjtRQUNwQixPQUFPLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7OztJQUdELHdCQUF3QjtRQUN2QixPQUFPLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7OztJQUdELFdBQVc7UUFDVixPQUFPLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7O0lBR0Qsb0JBQW9CLENBQUMsZ0JBQStCLG1CQUFtQjtRQUN0RSxPQUFPLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7OztJQUdELGlCQUFpQjtRQUNoQixPQUFPLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7O1lBcENELFVBQVU7Ozs7WUFSRixhQUFhO1lBQ2IscUJBQXFCOztBQWdCN0I7SUFEQyxRQUFROzs7NENBQ2MsVUFBVTt1RUFFaEM7QUFHRDtJQURDLFFBQVE7Ozs0Q0FDZ0IsVUFBVTt5RUFFbEM7QUFHRDtJQURDLFFBQVE7Ozs0Q0FDbUIsVUFBVTs0RUFFckM7QUFHRDtJQURDLFFBQVE7Ozs0Q0FDTSxVQUFVOytEQUV4QjtBQUdEO0lBREMsUUFBUTs7NkNBQzJCLGFBQWE7NENBQXlCLFVBQVU7d0VBRW5GO0FBR0Q7SUFEQyxRQUFROzs7NENBQ1ksVUFBVTtxRUFFOUI7Ozs7OztJQWpDVyxxREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25RdWVyeVNlcnZpY2UgfSBmcm9tICcuLi8uLi9hcGkvY29tcG9zaXRpb24vY29tcG9zaXRpb24ucXVlcnktc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL2NvbXBvc2l0aW9uLWlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9xdWVyeS9jb21wb3NpdGlvbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL3F1ZXJ5L2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL3F1ZXJ5L2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yJztcbmltcG9ydCB7IGdsb2JhbENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vZ2xvYmFsLWNvbXBvc2l0aW9uLWlkJztcblxuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbENvbXBvc2l0aW9uUXVlcnlTZXJ2aWNlIGV4dGVuZHMgQ29tcG9zaXRpb25RdWVyeVNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0Y29tcG9zaXRpb25SZXBvc2l0b3J5OiBDb21wb3NpdGlvblJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcihjb21wb3NpdGlvblJlcG9zaXRvcnkpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNlbGVjdEhlYWRlckNvbHVtbnMoKTogT2JzZXJ2YWJsZTxBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4+IHtcblx0XHRyZXR1cm4gc3VwZXIuc2VsZWN0SGVhZGVyQ29sdW1ucyh0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNlbGVjdFRlbXBsYXRlQ29sdW1ucygpOiBPYnNlcnZhYmxlPEFycmF5PENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3Nvcj4+IHtcblx0XHRyZXR1cm4gc3VwZXIuc2VsZWN0VGVtcGxhdGVDb2x1bW5zKHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2VsZWN0V2lkdGhGb3JFYWNoQ29sdW1uKCk6IE9ic2VydmFibGU8QXJyYXk8bnVtYmVyPj4ge1xuXHRcdHJldHVybiBzdXBlci5zZWxlY3RXaWR0aEZvckVhY2hDb2x1bW4odGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZWxlY3RXaWR0aCgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiBzdXBlci5zZWxlY3RXaWR0aCh0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNlbGVjdENvbnRhaW5lcldpZHRoKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBnbG9iYWxDb21wb3NpdGlvbklkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gc3VwZXIuc2VsZWN0Q29udGFpbmVyV2lkdGgodGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZWxlY3RSZXNpemVXaWR0aCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gc3VwZXIuc2VsZWN0UmVzaXplV2lkdGgodGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG59XG4iXX0=