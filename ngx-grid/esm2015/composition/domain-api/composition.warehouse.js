/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { CompositionReadModelRootRepository } from './read/composition.read-model-root-repository';
import { compositionGlobalId } from './composition.global-id';
export class CompositionWarehouse {
    /**
     * @param {?} compositionRepository
     */
    constructor(compositionRepository) {
        this.compositionRepository = compositionRepository;
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    onWidth(compositionId = compositionGlobalId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        (composition) => composition.getWidth())));
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    onContainerWidth(compositionId = compositionGlobalId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        (composition) => composition.getContainerWidth())));
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    onWidthForEachColumn(compositionId = compositionGlobalId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(map((/**
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
     * @param {?=} compositionId
     * @return {?}
     */
    onHeaderColumns(compositionId = compositionGlobalId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        (composition) => composition.getActiveHeaderColumns())));
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    onAllColumns(compositionId = compositionGlobalId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        (composition) => composition.getHeaderColumns())));
    }
    /**
     * @param {?} fieldId
     * @param {?=} compositionId
     * @return {?}
     */
    onSortOrder(fieldId, compositionId = compositionGlobalId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        (composition) => composition.getActiveHeaderColumns())), map((/**
         * @param {?} columns
         * @return {?}
         */
        (columns) => {
            return columns.filter((/**
             * @param {?} c
             * @return {?}
             */
            (c) => c.getFieldId().equals(fieldId)));
        })), filter((/**
         * @param {?} columns
         * @return {?}
         */
        (columns) => {
            return columns.length > 0;
        })), map((/**
         * @param {?} columns
         * @return {?}
         */
        columns => columns[0].getSortStatus())));
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    onTemplateColumns(compositionId = compositionGlobalId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        (composition) => composition.getTemplateColumns())));
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    onResizeWidth(compositionId = compositionGlobalId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        (composition) => composition.isResizeWidthEnabled())));
    }
}
CompositionWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionWarehouse.ctorParameters = () => [
    { type: CompositionReadModelRootRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionWarehouse.prototype.compositionRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ud2FyZWhvdXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9kb21haW4tYXBpL2NvbXBvc2l0aW9uLndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSTdDLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRW5HLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBUzlELE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFFaEMsWUFBb0IscUJBQXlEO1FBQXpELDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBb0M7SUFDN0UsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsZ0JBQStCLG1CQUFtQjtRQUN6RCxPQUFPLElBQUksQ0FBQyxxQkFBcUI7YUFDM0IsRUFBRSxDQUFDLGFBQWEsQ0FBQzthQUNqQixJQUFJLENBQ0osR0FBRzs7OztRQUFDLENBQUMsV0FBb0MsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFDLENBQ3JFLENBQUM7SUFDUixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLGdCQUErQixtQkFBbUI7UUFDbEUsT0FBTyxJQUFJLENBQUMscUJBQXFCO2FBQzNCLEVBQUUsQ0FBQyxhQUFhLENBQUM7YUFDakIsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxDQUFDLFdBQW9DLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxFQUFDLENBQzlFLENBQUM7SUFDUixDQUFDOzs7OztJQUVELG9CQUFvQixDQUFDLGdCQUErQixtQkFBbUI7UUFDdEUsT0FBTyxJQUFJLENBQUMscUJBQXFCO2FBQzNCLEVBQUUsQ0FBQyxhQUFhLENBQUM7YUFDakIsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxDQUFDLFdBQW9DLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFDLEVBQUMsQ0FDNUYsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLGdCQUErQixtQkFBbUI7UUFDakUsT0FBTyxJQUFJLENBQUMscUJBQXFCO2FBQzNCLEVBQUUsQ0FBQyxhQUFhLENBQUM7YUFDakIsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxDQUFDLFdBQW9DLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsRUFBRSxFQUFDLENBQ25GLENBQUM7SUFDUixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxnQkFBK0IsbUJBQW1CO1FBQzlELE9BQU8sSUFBSSxDQUFDLHFCQUFxQjthQUMzQixFQUFFLENBQUMsYUFBYSxDQUFDO2FBQ2pCLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsQ0FBQyxXQUFvQyxFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsRUFBQyxDQUM3RSxDQUFDO0lBQ1IsQ0FBQzs7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQWdCLEVBQUUsZ0JBQStCLG1CQUFtQjtRQUMvRSxPQUFPLElBQUksQ0FBQyxxQkFBcUI7YUFDM0IsRUFBRSxDQUFDLGFBQWEsQ0FBQzthQUNqQixJQUFJLENBQ0osR0FBRzs7OztRQUFDLENBQUMsV0FBb0MsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLHNCQUFzQixFQUFFLEVBQUMsRUFDbkYsR0FBRzs7OztRQUFDLENBQUMsT0FBdUMsRUFBRSxFQUFFO1lBQy9DLE9BQU8sT0FBTyxDQUFDLE1BQU07Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUFDO1FBQzlELENBQUMsRUFBQyxFQUNGLE1BQU07Ozs7UUFBQyxDQUFDLE9BQXVDLEVBQUUsRUFBRTtZQUNsRCxPQUFPLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLENBQUMsRUFBQyxFQUNGLEdBQUc7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsRUFBQyxDQUMxQyxDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxnQkFBK0IsbUJBQW1CO1FBQ25FLE9BQU8sSUFBSSxDQUFDLHFCQUFxQjthQUMzQixFQUFFLENBQUMsYUFBYSxDQUFDO2FBQ2pCLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsQ0FBQyxXQUFvQyxFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLEVBQUUsRUFBQyxDQUMvRSxDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsZ0JBQStCLG1CQUFtQjtRQUMvRCxPQUFPLElBQUksQ0FBQyxxQkFBcUI7YUFDM0IsRUFBRSxDQUFDLGFBQWEsQ0FBQzthQUNqQixJQUFJLENBQ0osR0FBRzs7OztRQUFDLENBQUMsV0FBb0MsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLG9CQUFvQixFQUFFLEVBQUMsQ0FDakYsQ0FBQztJQUNSLENBQUM7OztZQTNFRCxVQUFVOzs7O1lBVkYsa0NBQWtDOzs7Ozs7O0lBYTlCLHFEQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBXYXJlaG91c2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RSZXBvc2l0b3J5IH0gZnJvbSAnLi9yZWFkL2NvbXBvc2l0aW9uLnJlYWQtbW9kZWwtcm9vdC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi9kb21haW4vY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgY29tcG9zaXRpb25HbG9iYWxJZCB9IGZyb20gJy4vY29tcG9zaXRpb24uZ2xvYmFsLWlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVhZE1vZGVSb290IH0gZnJvbSAnLi9yZWFkL2NvbXBvc2l0aW9uLnJlYWQtbW9kZS1yb290JztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yJztcbmltcG9ydCB7IFNvcnRPcmRlciB9IGZyb20gJy4uL2RvbWFpbi9jb2x1bW4vc29ydC9zb3J0LW9yZGVyJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUvZmllbGQvZG9tYWluL2NvcmUvZmllbGQvZmllbGQuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbldhcmVob3VzZSBpbXBsZW1lbnRzIFdhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb21wb3NpdGlvblJlcG9zaXRvcnk6IENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdFJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdG9uV2lkdGgoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oY29tcG9zaXRpb25JZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChjb21wb3NpdGlvbjogQ29tcG9zaXRpb25SZWFkTW9kZVJvb3QpID0+IGNvbXBvc2l0aW9uLmdldFdpZHRoKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvbkNvbnRhaW5lcldpZHRoKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvblJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKGNvbXBvc2l0aW9uSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoY29tcG9zaXRpb246IENvbXBvc2l0aW9uUmVhZE1vZGVSb290KSA9PiBjb21wb3NpdGlvbi5nZXRDb250YWluZXJXaWR0aCgpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25XaWR0aEZvckVhY2hDb2x1bW4oY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiBPYnNlcnZhYmxlPEFycmF5PG51bWJlcj4+IHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvblJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKGNvbXBvc2l0aW9uSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoY29tcG9zaXRpb246IENvbXBvc2l0aW9uUmVhZE1vZGVSb290KSA9PiBjb21wb3NpdGlvbi5nZXRBbGxDb2x1bW5zKCkubWFwKGMgPT4gYy53aWR0aCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvbkhlYWRlckNvbHVtbnMoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiBPYnNlcnZhYmxlPEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0Pj4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oY29tcG9zaXRpb25JZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChjb21wb3NpdGlvbjogQ29tcG9zaXRpb25SZWFkTW9kZVJvb3QpID0+IGNvbXBvc2l0aW9uLmdldEFjdGl2ZUhlYWRlckNvbHVtbnMoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uQWxsQ29sdW1ucyhjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IE9ic2VydmFibGU8QXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+PiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25SZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihjb21wb3NpdGlvbklkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvblJlYWRNb2RlUm9vdCkgPT4gY29tcG9zaXRpb24uZ2V0SGVhZGVyQ29sdW1ucygpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25Tb3J0T3JkZXIoZmllbGRJZDogRmllbGRJZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiBPYnNlcnZhYmxlPFNvcnRPcmRlcj4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oY29tcG9zaXRpb25JZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChjb21wb3NpdGlvbjogQ29tcG9zaXRpb25SZWFkTW9kZVJvb3QpID0+IGNvbXBvc2l0aW9uLmdldEFjdGl2ZUhlYWRlckNvbHVtbnMoKSksXG5cdFx0XHRcdFx0ICAgbWFwKChjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4pID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBjb2x1bW5zLmZpbHRlcigoYykgPT4gYy5nZXRGaWVsZElkKCkuZXF1YWxzKGZpZWxkSWQpKTtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIGNvbHVtbnMubGVuZ3RoID4gMDtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBtYXAoY29sdW1ucyA9PiBjb2x1bW5zWzBdLmdldFNvcnRTdGF0dXMoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uVGVtcGxhdGVDb2x1bW5zKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogT2JzZXJ2YWJsZTxBcnJheTxDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3I+PiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25SZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihjb21wb3NpdGlvbklkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvblJlYWRNb2RlUm9vdCkgPT4gY29tcG9zaXRpb24uZ2V0VGVtcGxhdGVDb2x1bW5zKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvblJlc2l6ZVdpZHRoKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25SZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihjb21wb3NpdGlvbklkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvblJlYWRNb2RlUm9vdCkgPT4gY29tcG9zaXRpb24uaXNSZXNpemVXaWR0aEVuYWJsZWQoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=