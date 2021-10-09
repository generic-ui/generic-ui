/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CompositionReadModelRootRepository } from './composition.read-model-root-repository';
import { CompositionGroupArchive } from './group/composition-group.archive';
import { CompositionWarehouse } from '../api/composition.warehouse';
import { Injectable } from '@angular/core';
import { hermesFilter, hermesMap } from '@generic-ui/hermes';
export class CompositionDomainWarehouse extends CompositionWarehouse {
    /**
     * @param {?} compositionRepository
     * @param {?} compositionGroupArchive
     */
    constructor(compositionRepository, compositionGroupArchive) {
        super();
        this.compositionRepository = compositionRepository;
        this.compositionGroupArchive = compositionGroupArchive;
    }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    onWidth(compositionId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(hermesMap((/**
         * @param {?} composition
         * @return {?}
         */
        (composition) => composition.getWidth())));
    }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    onContainerWidth(compositionId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(hermesMap((/**
         * @param {?} composition
         * @return {?}
         */
        (composition) => composition.getContainerWidth())));
    }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    onWidthForEachColumn(compositionId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(hermesMap((/**
         * @param {?} composition
         * @return {?}
         */
        (composition) => composition.getAllColumns().map((/**
         * @param {?} c
         * @return {?}
         */
        c => c.width)))));
    }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    onHeaderColumns(compositionId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(hermesMap((/**
         * @param {?} composition
         * @return {?}
         */
        (composition) => composition.getActiveHeaderColumns())));
    }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    onAllColumns(compositionId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(hermesMap((/**
         * @param {?} composition
         * @return {?}
         */
        (composition) => composition.getHeaderColumns())));
    }
    /**
     * @param {?} fieldId
     * @param {?} compositionId
     * @return {?}
     */
    onSortOrder(fieldId, compositionId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(hermesMap((/**
         * @param {?} composition
         * @return {?}
         */
        (composition) => composition.getActiveHeaderColumns())), hermesMap((/**
         * @param {?} columns
         * @return {?}
         */
        (columns) => {
            return columns.filter((/**
             * @param {?} c
             * @return {?}
             */
            (c) => c.getFieldId().equals(fieldId)));
        })), hermesFilter((/**
         * @param {?} columns
         * @return {?}
         */
        (columns) => {
            return columns.length > 0;
        })), hermesMap((/**
         * @param {?} columns
         * @return {?}
         */
        columns => columns[0].getSortStatus())));
    }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    onTemplateColumns(compositionId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(hermesMap((/**
         * @param {?} composition
         * @return {?}
         */
        (composition) => composition.getTemplateColumns())));
    }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    onResizeWidth(compositionId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(hermesMap((/**
         * @param {?} composition
         * @return {?}
         */
        (composition) => composition.isResizeWidthEnabled())));
    }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    onGroups(compositionId) {
        return this.compositionGroupArchive.on(compositionId);
    }
}
CompositionDomainWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionDomainWarehouse.ctorParameters = () => [
    { type: CompositionReadModelRootRepository },
    { type: CompositionGroupArchive }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionDomainWarehouse.prototype.compositionRepository;
    /**
     * @type {?}
     * @private
     */
    CompositionDomainWarehouse.prototype.compositionGroupArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZG9tYWluLXdhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9jb21wb3NpdGlvbi5kb21haW4td2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM5RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQVE1RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFvQixNQUFNLG9CQUFvQixDQUFDO0FBRy9FLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxvQkFBb0I7Ozs7O0lBRW5FLFlBQTZCLHFCQUF5RCxFQUNsRSx1QkFBZ0Q7UUFDbkUsS0FBSyxFQUFFLENBQUM7UUFGb0IsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUFvQztRQUNsRSw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO0lBRXBFLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLGFBQTRCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLHFCQUFxQjthQUMzQixFQUFFLENBQUMsYUFBYSxDQUFDO2FBQ2pCLElBQUksQ0FDSixTQUFTOzs7O1FBQUMsQ0FBQyxXQUFvQyxFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQUMsQ0FDM0UsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsYUFBNEI7UUFDNUMsT0FBTyxJQUFJLENBQUMscUJBQXFCO2FBQzNCLEVBQUUsQ0FBQyxhQUFhLENBQUM7YUFDakIsSUFBSSxDQUNKLFNBQVM7Ozs7UUFBQyxDQUFDLFdBQW9DLEVBQUUs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IH0gZnJvbSAnLi9jb21wb3NpdGlvbi5yZWFkLW1vZGVsLXJvb3QtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkdyb3VwQXJjaGl2ZSB9IGZyb20gJy4vZ3JvdXAvY29tcG9zaXRpb24tZ3JvdXAuYXJjaGl2ZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vZG9tYWluL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVhZE1vZGVSb290IH0gZnJvbSAnLi9jb21wb3NpdGlvbi5yZWFkLW1vZGUtcm9vdCc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4vZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2ZpZWxkLmlkJztcbmltcG9ydCB7IFNvcnRPcmRlciB9IGZyb20gJy4uL2RvbWFpbi9jb2x1bW4vc29ydC9zb3J0LW9yZGVyJztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvciB9IGZyb20gJy4vZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3InO1xuaW1wb3J0IHsgR3JvdXBDb2xsZWN0aW9uIH0gZnJvbSAnLi4vYXBpL2dyb3VwL2dyb3VwLmNvbGxlY3Rpb24nO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi9hcGkvY29tcG9zaXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGhlcm1lc0ZpbHRlciwgaGVybWVzTWFwLCBIZXJtZXNPYnNlcnZhYmxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uRG9tYWluV2FyZWhvdXNlIGV4dGVuZHMgQ29tcG9zaXRpb25XYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25SZXBvc2l0b3J5OiBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uR3JvdXBBcmNoaXZlOiBDb21wb3NpdGlvbkdyb3VwQXJjaGl2ZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRvbldpZHRoKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiBIZXJtZXNPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oY29tcG9zaXRpb25JZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChjb21wb3NpdGlvbjogQ29tcG9zaXRpb25SZWFkTW9kZVJvb3QpID0+IGNvbXBvc2l0aW9uLmdldFdpZHRoKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvbkNvbnRhaW5lcldpZHRoKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiBIZXJtZXNPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oY29tcG9zaXRpb25JZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChjb21wb3NpdGlvbjogQ29tcG9zaXRpb25SZWFkTW9kZVJvb3QpID0+IGNvbXBvc2l0aW9uLmdldENvbnRhaW5lcldpZHRoKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvbldpZHRoRm9yRWFjaENvbHVtbihjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogSGVybWVzT2JzZXJ2YWJsZTxSZWFkb25seUFycmF5PG51bWJlcj4+IHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvblJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKGNvbXBvc2l0aW9uSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgoY29tcG9zaXRpb246IENvbXBvc2l0aW9uUmVhZE1vZGVSb290KSA9PiBjb21wb3NpdGlvbi5nZXRBbGxDb2x1bW5zKCkubWFwKGMgPT4gYy53aWR0aCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvbkhlYWRlckNvbHVtbnMoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IEhlcm1lc09ic2VydmFibGU8UmVhZG9ubHlBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4+IHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvblJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKGNvbXBvc2l0aW9uSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgoY29tcG9zaXRpb246IENvbXBvc2l0aW9uUmVhZE1vZGVSb290KSA9PiBjb21wb3NpdGlvbi5nZXRBY3RpdmVIZWFkZXJDb2x1bW5zKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvbkFsbENvbHVtbnMoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IEhlcm1lc09ic2VydmFibGU8UmVhZG9ubHlBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4+IHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvblJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKGNvbXBvc2l0aW9uSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgoY29tcG9zaXRpb246IENvbXBvc2l0aW9uUmVhZE1vZGVSb290KSA9PiBjb21wb3NpdGlvbi5nZXRIZWFkZXJDb2x1bW5zKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvblNvcnRPcmRlcihmaWVsZElkOiBGaWVsZElkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogSGVybWVzT2JzZXJ2YWJsZTxTb3J0T3JkZXI+IHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvblJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKGNvbXBvc2l0aW9uSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgoY29tcG9zaXRpb246IENvbXBvc2l0aW9uUmVhZE1vZGVSb290KSA9PiBjb21wb3NpdGlvbi5nZXRBY3RpdmVIZWFkZXJDb2x1bW5zKCkpLFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgoY29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gY29sdW1ucy5maWx0ZXIoKGMpID0+IGMuZ2V0RmllbGRJZCgpLmVxdWFscyhmaWVsZElkKSk7XG5cdFx0XHRcdFx0ICAgfSksXG5cdFx0XHRcdFx0ICAgaGVybWVzRmlsdGVyKChjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4pID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBjb2x1bW5zLmxlbmd0aCA+IDA7XG5cdFx0XHRcdFx0ICAgfSksXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKGNvbHVtbnMgPT4gY29sdW1uc1swXS5nZXRTb3J0U3RhdHVzKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvblRlbXBsYXRlQ29sdW1ucyhjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogSGVybWVzT2JzZXJ2YWJsZTxSZWFkb25seUFycmF5PENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3Nvcj4+IHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvblJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKGNvbXBvc2l0aW9uSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgoY29tcG9zaXRpb246IENvbXBvc2l0aW9uUmVhZE1vZGVSb290KSA9PiBjb21wb3NpdGlvbi5nZXRUZW1wbGF0ZUNvbHVtbnMoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uUmVzaXplV2lkdGgoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IEhlcm1lc09ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oY29tcG9zaXRpb25JZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChjb21wb3NpdGlvbjogQ29tcG9zaXRpb25SZWFkTW9kZVJvb3QpID0+IGNvbXBvc2l0aW9uLmlzUmVzaXplV2lkdGhFbmFibGVkKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvbkdyb3Vwcyhjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogSGVybWVzT2JzZXJ2YWJsZTxHcm91cENvbGxlY3Rpb24+IHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvbkdyb3VwQXJjaGl2ZS5vbihjb21wb3NpdGlvbklkKTtcblx0fVxuXG59XG4iXX0=