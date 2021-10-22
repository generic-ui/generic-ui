/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CompositionReadModelRootRepository } from './composition.read-model-root-repository';
import { CompositionGroupArchive } from './group/composition-group.archive';
import { CompositionWarehouse } from '../api/composition.warehouse';
import { Injectable } from '@angular/core';
import { hermesFilter, hermesMap } from '@generic-ui/hermes';
import { ColumnHighlightArchive } from '../domain/highlight/column-highlight.archive';
export class CompositionDomainWarehouse extends CompositionWarehouse {
    /**
     * @param {?} compositionRepository
     * @param {?} compositionGroupArchive
     * @param {?} columnHighlightArchive
     */
    constructor(compositionRepository, compositionGroupArchive, columnHighlightArchive) {
        super();
        this.compositionRepository = compositionRepository;
        this.compositionGroupArchive = compositionGroupArchive;
        this.columnHighlightArchive = columnHighlightArchive;
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
    /**
     * @param {?} columnId
     * @param {?} compositionId
     * @return {?}
     */
    onHighlightedColumn(columnId, compositionId) {
        return this.columnHighlightArchive
            .on(compositionId)
            .pipe(hermesMap((/**
         * @param {?} manager
         * @return {?}
         */
        (manager) => manager.isHighlighted(columnId))));
    }
}
CompositionDomainWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionDomainWarehouse.ctorParameters = () => [
    { type: CompositionReadModelRootRepository },
    { type: CompositionGroupArchive },
    { type: ColumnHighlightArchive }
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
    /**
     * @type {?}
     * @private
     */
    CompositionDomainWarehouse.prototype.columnHighlightArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZG9tYWluLXdhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9jb21wb3NpdGlvbi5kb21haW4td2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM5RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQVE1RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFvQixNQUFNLG9CQUFvQixDQUFDO0FBRS9FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBSXRGLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxvQkFBb0I7Ozs7OztJQUVuRSxZQUE2QixxQkFBeUQsRUFDbEUsdUJBQWdELEVBQ2hELHNCQUE4QztRQUNqRSxLQUFLLEVBQUUsQ0FBQztRQUhvQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQW9DO1FBQ2xFLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtJQUVsRSxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxhQUE0QjtRQUNuQyxPQUFPLElBQUksQ0FBQyxxQkFBcUI7YUFDM0IsRUFBRSxDQUFDLGFBQWEsQ0FBQzthQUNqQixJQUFJLENBQ0osU0FBUzs7OztRQUFDLENBQUMsV0FBb0MsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFDLENBQzNFLENBQUM7SUFDUixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLGFBQTRCO1FBQzVDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQjthQUMzQixFQUFFLENBQUMsYUFBYSxDQUFDO2FBQ2pCLElBQUksQ0FDSixTQUFTOzs7O1FBQUMsQ0FBQyxXQUFvQyxFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsRUFBQyxDQUNwRixDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxvQkFBb0IsQ0FBQyxhQUE0QjtRQUNoRCxPQUFPLElBQUksQ0FBQyxxQkFBcUI7YUFDM0IsRUFBRSxDQUFDLGFBQWEsQ0FBQzthQUNqQixJQUFJLENBQ0osU0FBUzs7OztRQUFDLENBQUMsV0FBb0MsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUMsRUFBQyxDQUNsRyxDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsYUFBNEI7UUFDM0MsT0FBTyxJQUFJLENBQUMscUJBQXFCO2FBQzNCLEVBQUUsQ0FBQyxhQUFhLENBQUM7YUFDakIsSUFBSSxDQUNKLFNBQVM7Ozs7UUFBQyxDQUFDLFdBQW9DLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsRUFBRSxFQUFDLENBQ3pGLENBQUM7SUFDUixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxhQUE0QjtRQUN4QyxPQUFPLElBQUksQ0FBQyxxQkFBcUI7YUFDM0IsRUFBRSxDQUFDLGFBQWEsQ0FBQzthQUNqQixJQUFJLENBQ0osU0FBUzs7OztRQUFDLENBQUMsV0FBb0MsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLEVBQUMsQ0FDbkYsQ0FBQztJQUNSLENBQUM7Ozs7OztJQUVELFdBQVcsQ0FBQyxPQUFnQixFQUFFLGFBQTRCO1FBQ3pELE9BQU8sSUFBSSxDQUFDLHFCQUFxQjthQUMzQixFQUFFLENBQUMsYUFBYSxDQUFDO2FBQ2pCLElBQUksQ0FDSixTQUFTOzs7O1FBQUMsQ0FBQyxXQUFvQyxFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsc0JBQXNCLEVBQUUsRUFBQyxFQUN6RixTQUFTOzs7O1FBQUMsQ0FBQyxPQUF1QyxFQUFFLEVBQUU7WUFDckQsT0FBTyxPQUFPLENBQUMsTUFBTTs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFDLENBQUM7UUFDOUQsQ0FBQyxFQUFDLEVBQ0YsWUFBWTs7OztRQUFDLENBQUMsT0FBdUMsRUFBRSxFQUFFO1lBQ3hELE9BQU8sT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxFQUFDLEVBQ0YsU0FBUzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFDLENBQ2hELENBQUM7SUFDUixDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLGFBQTRCO1FBQzdDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQjthQUMzQixFQUFFLENBQUMsYUFBYSxDQUFDO2FBQ2pCLElBQUksQ0FDSixTQUFTOzs7O1FBQUMsQ0FBQyxXQUFvQyxFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLEVBQUUsRUFBQyxDQUNyRixDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsYUFBNEI7UUFDekMsT0FBTyxJQUFJLENBQUMscUJBQXFCO2FBQzNCLEVBQUUsQ0FBQyxhQUFhLENBQUM7YUFDakIsSUFBSSxDQUNKLFNBQVM7Ozs7UUFBQyxDQUFDLFdBQW9DLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsRUFBRSxFQUFDLENBQ3ZGLENBQUM7SUFDUixDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxhQUE0QjtRQUNwQyxPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Ozs7O0lBRUQsbUJBQW1CLENBQUMsUUFBa0IsRUFBRSxhQUE0QjtRQUNuRSxPQUFPLElBQUksQ0FBQyxzQkFBc0I7YUFDNUIsRUFBRSxDQUFDLGFBQWEsQ0FBQzthQUNqQixJQUFJLENBQ0osU0FBUzs7OztRQUFDLENBQUMsT0FBK0IsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBQyxDQUMvRSxDQUFDO0lBQ1IsQ0FBQzs7O1lBMUZELFVBQVU7Ozs7WUFoQkYsa0NBQWtDO1lBQ2xDLHVCQUF1QjtZQVl2QixzQkFBc0I7Ozs7Ozs7SUFNbEIsMkRBQTBFOzs7OztJQUNuRiw2REFBaUU7Ozs7O0lBQ2pFLDREQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdFJlcG9zaXRvcnkgfSBmcm9tICcuL2NvbXBvc2l0aW9uLnJlYWQtbW9kZWwtcm9vdC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uR3JvdXBBcmNoaXZlIH0gZnJvbSAnLi9ncm91cC9jb21wb3NpdGlvbi1ncm91cC5hcmNoaXZlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi9hcGkvY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZVJvb3QgfSBmcm9tICcuL2NvbXBvc2l0aW9uLnJlYWQtbW9kZS1yb290JztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnLi4vZG9tYWluL2NvbHVtbi9zb3J0L3NvcnQtb3JkZXInO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBHcm91cENvbGxlY3Rpb24gfSBmcm9tICcuLi9hcGkvZ3JvdXAvZ3JvdXAuY29sbGVjdGlvbic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldhcmVob3VzZSB9IGZyb20gJy4uL2FwaS9jb21wb3NpdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaGVybWVzRmlsdGVyLCBoZXJtZXNNYXAsIEhlcm1lc09ic2VydmFibGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgQ29sdW1uSWQgfSBmcm9tICcuLi9hcGkvY29sdW1uL2NvbHVtbi5pZCc7XG5pbXBvcnQgeyBDb2x1bW5IaWdobGlnaHRBcmNoaXZlIH0gZnJvbSAnLi4vZG9tYWluL2hpZ2hsaWdodC9jb2x1bW4taGlnaGxpZ2h0LmFyY2hpdmUnO1xuaW1wb3J0IHsgQ29sdW1uSGlnaGxpZ2h0TWFuYWdlciB9IGZyb20gJy4uL2RvbWFpbi9oaWdobGlnaHQvY29sdW1uLWhpZ2hsaWdodC5tYW5hZ2VyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uRG9tYWluV2FyZWhvdXNlIGV4dGVuZHMgQ29tcG9zaXRpb25XYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25SZXBvc2l0b3J5OiBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uR3JvdXBBcmNoaXZlOiBDb21wb3NpdGlvbkdyb3VwQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5IaWdobGlnaHRBcmNoaXZlOiBDb2x1bW5IaWdobGlnaHRBcmNoaXZlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG9uV2lkdGgoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IEhlcm1lc09ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25SZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihjb21wb3NpdGlvbklkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvblJlYWRNb2RlUm9vdCkgPT4gY29tcG9zaXRpb24uZ2V0V2lkdGgoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uQ29udGFpbmVyV2lkdGgoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IEhlcm1lc09ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25SZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihjb21wb3NpdGlvbklkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvblJlYWRNb2RlUm9vdCkgPT4gY29tcG9zaXRpb24uZ2V0Q29udGFpbmVyV2lkdGgoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uV2lkdGhGb3JFYWNoQ29sdW1uKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiBIZXJtZXNPYnNlcnZhYmxlPFJlYWRvbmx5QXJyYXk8bnVtYmVyPj4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oY29tcG9zaXRpb25JZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChjb21wb3NpdGlvbjogQ29tcG9zaXRpb25SZWFkTW9kZVJvb3QpID0+IGNvbXBvc2l0aW9uLmdldEFsbENvbHVtbnMoKS5tYXAoYyA9PiBjLndpZHRoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uSGVhZGVyQ29sdW1ucyhjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogSGVybWVzT2JzZXJ2YWJsZTxSZWFkb25seUFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0Pj4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oY29tcG9zaXRpb25JZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChjb21wb3NpdGlvbjogQ29tcG9zaXRpb25SZWFkTW9kZVJvb3QpID0+IGNvbXBvc2l0aW9uLmdldEFjdGl2ZUhlYWRlckNvbHVtbnMoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uQWxsQ29sdW1ucyhjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogSGVybWVzT2JzZXJ2YWJsZTxSZWFkb25seUFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0Pj4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oY29tcG9zaXRpb25JZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChjb21wb3NpdGlvbjogQ29tcG9zaXRpb25SZWFkTW9kZVJvb3QpID0+IGNvbXBvc2l0aW9uLmdldEhlYWRlckNvbHVtbnMoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uU29ydE9yZGVyKGZpZWxkSWQ6IEZpZWxkSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiBIZXJtZXNPYnNlcnZhYmxlPFNvcnRPcmRlcj4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oY29tcG9zaXRpb25JZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChjb21wb3NpdGlvbjogQ29tcG9zaXRpb25SZWFkTW9kZVJvb3QpID0+IGNvbXBvc2l0aW9uLmdldEFjdGl2ZUhlYWRlckNvbHVtbnMoKSksXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4pID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBjb2x1bW5zLmZpbHRlcigoYykgPT4gYy5nZXRGaWVsZElkKCkuZXF1YWxzKGZpZWxkSWQpKTtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBoZXJtZXNGaWx0ZXIoKGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIGNvbHVtbnMubGVuZ3RoID4gMDtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoY29sdW1ucyA9PiBjb2x1bW5zWzBdLmdldFNvcnRTdGF0dXMoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uVGVtcGxhdGVDb2x1bW5zKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiBIZXJtZXNPYnNlcnZhYmxlPFJlYWRvbmx5QXJyYXk8Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yPj4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oY29tcG9zaXRpb25JZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChjb21wb3NpdGlvbjogQ29tcG9zaXRpb25SZWFkTW9kZVJvb3QpID0+IGNvbXBvc2l0aW9uLmdldFRlbXBsYXRlQ29sdW1ucygpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25SZXNpemVXaWR0aChjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogSGVybWVzT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25SZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihjb21wb3NpdGlvbklkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvblJlYWRNb2RlUm9vdCkgPT4gY29tcG9zaXRpb24uaXNSZXNpemVXaWR0aEVuYWJsZWQoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uR3JvdXBzKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiBIZXJtZXNPYnNlcnZhYmxlPEdyb3VwQ29sbGVjdGlvbj4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uR3JvdXBBcmNoaXZlLm9uKGNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0b25IaWdobGlnaHRlZENvbHVtbihjb2x1bW5JZDogQ29sdW1uSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiBIZXJtZXNPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5IaWdobGlnaHRBcmNoaXZlXG5cdFx0XHRcdCAgIC5vbihjb21wb3NpdGlvbklkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKG1hbmFnZXI6IENvbHVtbkhpZ2hsaWdodE1hbmFnZXIpID0+IG1hbmFnZXIuaXNIaWdobGlnaHRlZChjb2x1bW5JZCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxufVxuIl19