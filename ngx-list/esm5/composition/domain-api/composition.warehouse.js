/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { CompositionReadModelRootRepository } from './read/composition.read-model-root-repository';
import { compositionGlobalId } from './composition.global-id';
var CompositionWarehouse = /** @class */ (function () {
    function CompositionWarehouse(compositionRepository) {
        this.compositionRepository = compositionRepository;
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionWarehouse.prototype.onWidth = /**
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
    CompositionWarehouse.prototype.onContainerWidth = /**
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
    CompositionWarehouse.prototype.onWidthForEachColumn = /**
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
    CompositionWarehouse.prototype.onHeaderColumns = /**
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
    CompositionWarehouse.prototype.onAllColumns = /**
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
    CompositionWarehouse.prototype.onSortOrder = /**
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
    CompositionWarehouse.prototype.onTemplateColumns = /**
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
    CompositionWarehouse.prototype.onResizeWidth = /**
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
    CompositionWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionWarehouse.ctorParameters = function () { return [
        { type: CompositionReadModelRootRepository }
    ]; };
    return CompositionWarehouse;
}());
export { CompositionWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionWarehouse.prototype.compositionRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ud2FyZWhvdXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9kb21haW4tYXBpL2NvbXBvc2l0aW9uLndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSTdDLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRW5HLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBUTlEO0lBR0MsOEJBQW9CLHFCQUF5RDtRQUF6RCwwQkFBcUIsR0FBckIscUJBQXFCLENBQW9DO0lBQzdFLENBQUM7Ozs7O0lBRUQsc0NBQU87Ozs7SUFBUCxVQUFRLGFBQWtEO1FBQWxELDhCQUFBLEVBQUEsbUNBQWtEO1FBQ3pELE9BQU8sSUFBSSxDQUFDLHFCQUFxQjthQUMzQixFQUFFLENBQUMsYUFBYSxDQUFDO2FBQ2pCLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsVUFBQyxXQUFvQyxJQUFLLE9BQUEsV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUF0QixDQUFzQixFQUFDLENBQ3JFLENBQUM7SUFDUixDQUFDOzs7OztJQUVELCtDQUFnQjs7OztJQUFoQixVQUFpQixhQUFrRDtRQUFsRCw4QkFBQSxFQUFBLG1DQUFrRDtRQUNsRSxPQUFPLElBQUksQ0FBQyxxQkFBcUI7YUFDM0IsRUFBRSxDQUFDLGFBQWEsQ0FBQzthQUNqQixJQUFJLENBQ0osR0FBRzs7OztRQUFDLFVBQUMsV0FBb0MsSUFBSyxPQUFBLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxFQUEvQixDQUErQixFQUFDLENBQzlFLENBQUM7SUFDUixDQUFDOzs7OztJQUVELG1EQUFvQjs7OztJQUFwQixV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LG9CQUFvQjs7Ozs7O0lBRXBCLHFEQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBXYXJlaG91c2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RSZXBvc2l0b3J5IH0gZnJvbSAnLi9yZWFkL2NvbXBvc2l0aW9uLnJlYWQtbW9kZWwtcm9vdC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi9kb21haW4vY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgY29tcG9zaXRpb25HbG9iYWxJZCB9IGZyb20gJy4vY29tcG9zaXRpb24uZ2xvYmFsLWlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVhZE1vZGVSb290IH0gZnJvbSAnLi9yZWFkL2NvbXBvc2l0aW9uLnJlYWQtbW9kZS1yb290JztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yJztcbmltcG9ydCB7IFNvcnRPcmRlciB9IGZyb20gJy4uL2RvbWFpbi9jb2x1bW4vc29ydC9zb3J0LW9yZGVyJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUvZmllbGQvZG9tYWluL2NvcmUvZmllbGQvZmllbGQuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbldhcmVob3VzZSBpbXBsZW1lbnRzIFdhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb21wb3NpdGlvblJlcG9zaXRvcnk6IENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdFJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdG9uV2lkdGgoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oY29tcG9zaXRpb25JZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChjb21wb3NpdGlvbjogQ29tcG9zaXRpb25SZWFkTW9kZVJvb3QpID0+IGNvbXBvc2l0aW9uLmdldFdpZHRoKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvbkNvbnRhaW5lcldpZHRoKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvblJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKGNvbXBvc2l0aW9uSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoY29tcG9zaXRpb246IENvbXBvc2l0aW9uUmVhZE1vZGVSb290KSA9PiBjb21wb3NpdGlvbi5nZXRDb250YWluZXJXaWR0aCgpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25XaWR0aEZvckVhY2hDb2x1bW4oY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiBPYnNlcnZhYmxlPEFycmF5PG51bWJlcj4+IHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvblJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKGNvbXBvc2l0aW9uSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoY29tcG9zaXRpb246IENvbXBvc2l0aW9uUmVhZE1vZGVSb290KSA9PiBjb21wb3NpdGlvbi5nZXRBbGxDb2x1bW5zKCkubWFwKGMgPT4gYy53aWR0aCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvbkhlYWRlckNvbHVtbnMoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiBPYnNlcnZhYmxlPEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0Pj4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oY29tcG9zaXRpb25JZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChjb21wb3NpdGlvbjogQ29tcG9zaXRpb25SZWFkTW9kZVJvb3QpID0+IGNvbXBvc2l0aW9uLmdldEFjdGl2ZUhlYWRlckNvbHVtbnMoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uQWxsQ29sdW1ucyhjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IE9ic2VydmFibGU8QXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+PiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25SZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihjb21wb3NpdGlvbklkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvblJlYWRNb2RlUm9vdCkgPT4gY29tcG9zaXRpb24uZ2V0SGVhZGVyQ29sdW1ucygpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25Tb3J0T3JkZXIoZmllbGRJZDogRmllbGRJZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiBPYnNlcnZhYmxlPFNvcnRPcmRlcj4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oY29tcG9zaXRpb25JZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChjb21wb3NpdGlvbjogQ29tcG9zaXRpb25SZWFkTW9kZVJvb3QpID0+IGNvbXBvc2l0aW9uLmdldEFjdGl2ZUhlYWRlckNvbHVtbnMoKSksXG5cdFx0XHRcdFx0ICAgbWFwKChjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4pID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBjb2x1bW5zLmZpbHRlcigoYykgPT4gYy5nZXRGaWVsZElkKCkuZXF1YWxzKGZpZWxkSWQpKTtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIGNvbHVtbnMubGVuZ3RoID4gMDtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBtYXAoY29sdW1ucyA9PiBjb2x1bW5zWzBdLmdldFNvcnRTdGF0dXMoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uVGVtcGxhdGVDb2x1bW5zKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogT2JzZXJ2YWJsZTxBcnJheTxDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3I+PiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25SZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihjb21wb3NpdGlvbklkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvblJlYWRNb2RlUm9vdCkgPT4gY29tcG9zaXRpb24uZ2V0VGVtcGxhdGVDb2x1bW5zKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvblJlc2l6ZVdpZHRoKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25SZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihjb21wb3NpdGlvbklkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvblJlYWRNb2RlUm9vdCkgPT4gY29tcG9zaXRpb24uaXNSZXNpemVXaWR0aEVuYWJsZWQoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=