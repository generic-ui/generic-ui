/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { CompositionReadModelRootRepository } from '../read/composition.read-model-root-repository';
import { compositionGlobalId } from './composition.global-id';
var CompositionReadModelWarehouse = /** @class */ (function () {
    function CompositionReadModelWarehouse(compositionRepository) {
        this.compositionRepository = compositionRepository;
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionReadModelWarehouse.prototype.onWidth = /**
     * @param {?=} compositionId
     * @return {?}
     */
    function (compositionId) {
        if (compositionId === void 0) { compositionId = compositionGlobalId; }
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
    CompositionReadModelWarehouse.prototype.onContainerWidth = /**
     * @param {?=} compositionId
     * @return {?}
     */
    function (compositionId) {
        if (compositionId === void 0) { compositionId = compositionGlobalId; }
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
    CompositionReadModelWarehouse.prototype.onWidthForEachColumn = /**
     * @param {?=} compositionId
     * @return {?}
     */
    function (compositionId) {
        if (compositionId === void 0) { compositionId = compositionGlobalId; }
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
    CompositionReadModelWarehouse.prototype.onHeaderColumns = /**
     * @param {?=} compositionId
     * @return {?}
     */
    function (compositionId) {
        if (compositionId === void 0) { compositionId = compositionGlobalId; }
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
    CompositionReadModelWarehouse.prototype.onAllColumns = /**
     * @param {?=} compositionId
     * @return {?}
     */
    function (compositionId) {
        if (compositionId === void 0) { compositionId = compositionGlobalId; }
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
    CompositionReadModelWarehouse.prototype.onSortOrder = /**
     * @param {?} fieldId
     * @param {?=} compositionId
     * @return {?}
     */
    function (fieldId, compositionId) {
        if (compositionId === void 0) { compositionId = compositionGlobalId; }
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
    CompositionReadModelWarehouse.prototype.onTemplateColumns = /**
     * @param {?=} compositionId
     * @return {?}
     */
    function (compositionId) {
        if (compositionId === void 0) { compositionId = compositionGlobalId; }
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
    CompositionReadModelWarehouse.prototype.onResizeWidth = /**
     * @param {?=} compositionId
     * @return {?}
     */
    function (compositionId) {
        if (compositionId === void 0) { compositionId = compositionGlobalId; }
        return this.compositionRepository
            .on(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        function (composition) { return composition.isResizeWidthEnabled(); })));
    };
    CompositionReadModelWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionReadModelWarehouse.ctorParameters = function () { return [
        { type: CompositionReadModelRootRepository }
    ]; };
    return CompositionReadModelWarehouse;
}());
export { CompositionReadModelWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionReadModelWarehouse.prototype.compositionRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ucmVhZC1tb2RlbC13YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi91aS1hcGkvY29tcG9zaXRpb24ucmVhZC1tb2RlbC13YXJlaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUVwRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQVE5RDtJQUdDLHVDQUFvQixxQkFBeUQ7UUFBekQsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUFvQztJQUM3RSxDQUFDOzs7OztJQUVELCtDQUFPOzs7O0lBQVAsVUFBUSxhQUFrRDtRQUFsRCw4QkFBQSxFQUFBLG1DQUFrRDtRQUN6RCxPQUFPLElBQUksQ0FBQyxxQkFBcUI7YUFDM0IsRUFBRSxDQUFDLGFBQWEsQ0FBQzthQUNqQixJQUFJLENBQ0osR0FBRzs7OztRQUFDLFVBQUMsV0FBb0MsSUFBSyxPQUFBLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBdEIsQ0FBc0IsRUFBQyxDQUNyRSxDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCx3REFBZ0I7Ozs7SUFBaEIsVUFBaUIsYUFBa0Q7UUFBbEQsOEJBQUEsRUFBQSxtQ0FBa0Q7UUFDbEUsT0FBTyxJQUFJLENBQUMscUJBQXFCO2FBQzNCLEVBQUUsQ0FBQyxhQUFhLENBQUM7YUFDakIsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxVQUFDLFdBQW9DLElBQUssT0FBQSxXQUFXLENBQUMsaUJBQWlCLEVBQUUsRUFBL0IsQ0FBK0IsRUFBQyxDQUM5RSxDQUFDO0lBQ1IsQ0FBQzs7Ozs7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Q0FBQSxBQTdFRCxJQTZFQztTQTVFWSw2QkFBNkI7Ozs7OztJQUU3Qiw4REFBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZWxSb290UmVwb3NpdG9yeSB9IGZyb20gJy4uL3JlYWQvY29tcG9zaXRpb24ucmVhZC1tb2RlbC1yb290LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uL2RvbWFpbi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBjb21wb3NpdGlvbkdsb2JhbElkIH0gZnJvbSAnLi9jb21wb3NpdGlvbi5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZVJvb3QgfSBmcm9tICcuLi9yZWFkL2NvbXBvc2l0aW9uLnJlYWQtbW9kZS1yb290JztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvciB9IGZyb20gJy4uL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3InO1xuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnLi4vZG9tYWluL2NvbHVtbi9zb3J0L3NvcnQtb3JkZXInO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2ZpZWxkL2RhdGEtdHlwZS9maWVsZC5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uUmVhZE1vZGVsV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvc2l0aW9uUmVwb3NpdG9yeTogQ29tcG9zaXRpb25SZWFkTW9kZWxSb290UmVwb3NpdG9yeSkge1xuXHR9XG5cblx0b25XaWR0aChjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25SZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihjb21wb3NpdGlvbklkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvblJlYWRNb2RlUm9vdCkgPT4gY29tcG9zaXRpb24uZ2V0V2lkdGgoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uQ29udGFpbmVyV2lkdGgoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oY29tcG9zaXRpb25JZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChjb21wb3NpdGlvbjogQ29tcG9zaXRpb25SZWFkTW9kZVJvb3QpID0+IGNvbXBvc2l0aW9uLmdldENvbnRhaW5lcldpZHRoKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvbldpZHRoRm9yRWFjaENvbHVtbihjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IE9ic2VydmFibGU8QXJyYXk8bnVtYmVyPj4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oY29tcG9zaXRpb25JZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChjb21wb3NpdGlvbjogQ29tcG9zaXRpb25SZWFkTW9kZVJvb3QpID0+IGNvbXBvc2l0aW9uLmdldEFsbENvbHVtbnMoKS5tYXAoYyA9PiBjLndpZHRoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uSGVhZGVyQ29sdW1ucyhjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IE9ic2VydmFibGU8QXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+PiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25SZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihjb21wb3NpdGlvbklkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvblJlYWRNb2RlUm9vdCkgPT4gY29tcG9zaXRpb24uZ2V0QWN0aXZlSGVhZGVyQ29sdW1ucygpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25BbGxDb2x1bW5zKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogT2JzZXJ2YWJsZTxBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4+IHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvblJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKGNvbXBvc2l0aW9uSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoY29tcG9zaXRpb246IENvbXBvc2l0aW9uUmVhZE1vZGVSb290KSA9PiBjb21wb3NpdGlvbi5nZXRIZWFkZXJDb2x1bW5zKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvblNvcnRPcmRlcihmaWVsZElkOiBGaWVsZElkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IE9ic2VydmFibGU8U29ydE9yZGVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25SZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihjb21wb3NpdGlvbklkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvblJlYWRNb2RlUm9vdCkgPT4gY29tcG9zaXRpb24uZ2V0QWN0aXZlSGVhZGVyQ29sdW1ucygpKSxcblx0XHRcdFx0XHQgICBtYXAoKGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIGNvbHVtbnMuZmlsdGVyKChjKSA9PiBjLmdldEZpZWxkSWQoKS5lcXVhbHMoZmllbGRJZCkpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoY29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gY29sdW1ucy5sZW5ndGggPiAwO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIG1hcChjb2x1bW5zID0+IGNvbHVtbnNbMF0uZ2V0U29ydFN0YXR1cygpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25UZW1wbGF0ZUNvbHVtbnMoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiBPYnNlcnZhYmxlPEFycmF5PENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3Nvcj4+IHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvblJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKGNvbXBvc2l0aW9uSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoY29tcG9zaXRpb246IENvbXBvc2l0aW9uUmVhZE1vZGVSb290KSA9PiBjb21wb3NpdGlvbi5nZXRUZW1wbGF0ZUNvbHVtbnMoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uUmVzaXplV2lkdGgoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvblJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKGNvbXBvc2l0aW9uSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoY29tcG9zaXRpb246IENvbXBvc2l0aW9uUmVhZE1vZGVSb290KSA9PiBjb21wb3NpdGlvbi5pc1Jlc2l6ZVdpZHRoRW5hYmxlZCgpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==