/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { CompositionRepository } from '../../domain/composition/read/composition.repository';
import { globalCompositionId } from '../../domain/composition/global-composition-id';
var CompositionReadModelService = /** @class */ (function () {
    function CompositionReadModelService(compositionRepository) {
        this.compositionRepository = compositionRepository;
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionReadModelService.prototype.onWidth = /**
     * @param {?=} compositionId
     * @return {?}
     */
    function (compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        return this.compositionRepository
            .on(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        function (composition) { return composition.getWidth(); })));
    };
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionReadModelService.prototype.onContainerWidth = /**
     * @param {?=} compositionId
     * @return {?}
     */
    function (compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        return this.compositionRepository
            .on(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        function (composition) { return composition.getContainerWidth(); })));
    };
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionReadModelService.prototype.onWidthForEachColumn = /**
     * @param {?=} compositionId
     * @return {?}
     */
    function (compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        return this.compositionRepository
            .on(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        function (composition) { return composition.getAllColumns().map((/**
         * @param {?} c
         * @return {?}
         */
        function (c) { return c.width; })); })));
    };
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionReadModelService.prototype.onHeaderColumns = /**
     * @param {?=} compositionId
     * @return {?}
     */
    function (compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        return this.compositionRepository
            .on(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        function (composition) { return composition.getActiveHeaderColumns(); })));
    };
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionReadModelService.prototype.onAllColumns = /**
     * @param {?=} compositionId
     * @return {?}
     */
    function (compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        return this.compositionRepository
            .on(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        function (composition) { return composition.getHeaderColumns(); })));
    };
    /**
     * @param {?} fieldId
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionReadModelService.prototype.onSortOrder = /**
     * @param {?} fieldId
     * @param {?=} compositionId
     * @return {?}
     */
    function (fieldId, compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        return this.compositionRepository
            .on(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        function (composition) { return composition.getActiveHeaderColumns(); })), map((/**
         * @param {?} columns
         * @return {?}
         */
        function (columns) {
            return columns.filter((/**
             * @param {?} c
             * @return {?}
             */
            function (c) { return c.getFieldId().equals(fieldId); }));
        })), filter((/**
         * @param {?} columns
         * @return {?}
         */
        function (columns) {
            return columns.length > 0;
        })), map((/**
         * @param {?} columns
         * @return {?}
         */
        function (columns) { return columns[0].getSortStatus(); })));
    };
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionReadModelService.prototype.onTemplateColumns = /**
     * @param {?=} compositionId
     * @return {?}
     */
    function (compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        return this.compositionRepository
            .on(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        function (composition) { return composition.getTemplateColumns(); })));
    };
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionReadModelService.prototype.onResizeWidth = /**
     * @param {?=} compositionId
     * @return {?}
     */
    function (compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        return this.compositionRepository
            .on(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        function (composition) { return composition.isResizeWidthEnabled(); })));
    };
    CompositionReadModelService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionReadModelService.ctorParameters = function () { return [
        { type: CompositionRepository }
    ]; };
    return CompositionReadModelService;
}());
export { CompositionReadModelService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionReadModelService.prototype.compositionRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tcmVhZC1tb2RlbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpLWFwaS9jb21wb3NpdGlvbi9jb21wb3NpdGlvbi1yZWFkLW1vZGVsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQU8sTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUU3RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQVFyRjtJQUdDLHFDQUFvQixxQkFBNEM7UUFBNUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUNoRSxDQUFDOzs7OztJQUVELDZDQUFPOzs7O0lBQVAsVUFBUSxhQUFrRDtRQUFsRCw4QkFBQSxFQUFBLG1DQUFrRDtRQUN6RCxPQUFPLElBQUksQ0FBQyxxQkFBcUI7YUFDM0IsRUFBRSxDQUFDLGFBQWEsQ0FBQzthQUNqQixJQUFJLENBQ0osR0FBRzs7OztRQUFDLFVBQUMsV0FBd0IsSUFBSyxPQUFBLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBdEIsQ0FBc0IsRUFBQyxDQUN6RCxDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxzREFBZ0I7Ozs7SUFBaEIsVUFBaUIsYUFBa0Q7UUFBbEQsOEJBQUEsRUFBQSxtQ0FBa0Q7UUFDbEUsT0FBTyxJQUFJLENBQUMscUJBQXFCO2FBQzNCLEVBQUUsQ0FBQyxhQUFhLENBQUM7YUFDakIsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxVQUFDLFdBQXdCLElBQUssT0FBQSxXQUFXLENBQUMsaUJBQWlCLEVBQUUsRUFBL0IsQ0FBK0IsRUFBQyxDQUNsRSxDQUFDO0lBQ1IsQ0FB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a0NBQUM7Q0FBQSxBQTdFRCxJQTZFQztTQTVFWSwyQkFBMkI7Ozs7OztJQUUzQiw0REFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvblJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vY29tcG9zaXRpb24vcmVhZC9jb21wb3NpdGlvbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi9kb21haW4vY29tcG9zaXRpb24vY29tcG9zaXRpb24taWQnO1xuaW1wb3J0IHsgZ2xvYmFsQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9nbG9iYWwtY29tcG9zaXRpb24taWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb24gfSBmcm9tICcuLi8uLi9kb21haW4vY29tcG9zaXRpb24vcmVhZC9jb21wb3NpdGlvbic7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3InO1xuaW1wb3J0IHsgU29ydFN0YXR1cyB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2NvbHVtbi9zb3J0L3NvcnQtc3RhdHVzJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZGF0YS10eXBlL2ZpZWxkLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvc2l0aW9uUmVwb3NpdG9yeTogQ29tcG9zaXRpb25SZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRvbldpZHRoKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBnbG9iYWxDb21wb3NpdGlvbklkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvblJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKGNvbXBvc2l0aW9uSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoY29tcG9zaXRpb246IENvbXBvc2l0aW9uKSA9PiBjb21wb3NpdGlvbi5nZXRXaWR0aCgpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25Db250YWluZXJXaWR0aChjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gZ2xvYmFsQ29tcG9zaXRpb25JZCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25SZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihjb21wb3NpdGlvbklkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvbikgPT4gY29tcG9zaXRpb24uZ2V0Q29udGFpbmVyV2lkdGgoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uV2lkdGhGb3JFYWNoQ29sdW1uKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBnbG9iYWxDb21wb3NpdGlvbklkKTogT2JzZXJ2YWJsZTxBcnJheTxudW1iZXI+PiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25SZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihjb21wb3NpdGlvbklkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvbikgPT4gY29tcG9zaXRpb24uZ2V0QWxsQ29sdW1ucygpLm1hcChjID0+IGMud2lkdGgpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25IZWFkZXJDb2x1bW5zKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBnbG9iYWxDb21wb3NpdGlvbklkKTogT2JzZXJ2YWJsZTxBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4+IHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvblJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKGNvbXBvc2l0aW9uSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoY29tcG9zaXRpb246IENvbXBvc2l0aW9uKSA9PiBjb21wb3NpdGlvbi5nZXRBY3RpdmVIZWFkZXJDb2x1bW5zKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvbkFsbENvbHVtbnMoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGdsb2JhbENvbXBvc2l0aW9uSWQpOiBPYnNlcnZhYmxlPEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0Pj4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oY29tcG9zaXRpb25JZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChjb21wb3NpdGlvbjogQ29tcG9zaXRpb24pID0+IGNvbXBvc2l0aW9uLmdldEhlYWRlckNvbHVtbnMoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uU29ydE9yZGVyKGZpZWxkSWQ6IEZpZWxkSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBnbG9iYWxDb21wb3NpdGlvbklkKTogT2JzZXJ2YWJsZTxTb3J0U3RhdHVzPiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25SZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihjb21wb3NpdGlvbklkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvbikgPT4gY29tcG9zaXRpb24uZ2V0QWN0aXZlSGVhZGVyQ29sdW1ucygpKSxcblx0XHRcdFx0XHQgICBtYXAoKGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIGNvbHVtbnMuZmlsdGVyKChjKSA9PiBjLmdldEZpZWxkSWQoKS5lcXVhbHMoZmllbGRJZCkpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoY29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gY29sdW1ucy5sZW5ndGggPiAwO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIG1hcChjb2x1bW5zID0+IGNvbHVtbnNbMF0uZ2V0U29ydFN0YXR1cygpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25UZW1wbGF0ZUNvbHVtbnMoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGdsb2JhbENvbXBvc2l0aW9uSWQpOiBPYnNlcnZhYmxlPEFycmF5PENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3Nvcj4+IHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvblJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKGNvbXBvc2l0aW9uSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoY29tcG9zaXRpb246IENvbXBvc2l0aW9uKSA9PiBjb21wb3NpdGlvbi5nZXRUZW1wbGF0ZUNvbHVtbnMoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uUmVzaXplV2lkdGgoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGdsb2JhbENvbXBvc2l0aW9uSWQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvblJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKGNvbXBvc2l0aW9uSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoY29tcG9zaXRpb246IENvbXBvc2l0aW9uKSA9PiBjb21wb3NpdGlvbi5pc1Jlc2l6ZVdpZHRoRW5hYmxlZCgpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==