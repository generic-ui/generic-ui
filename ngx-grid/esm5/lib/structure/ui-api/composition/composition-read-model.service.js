/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
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
            .select(compositionId)
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
            .select(compositionId)
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
            .select(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        function (composition) { return composition.getColumns().map((/**
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
            .select(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        function (composition) { return composition.getHeaderColumns(); })));
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
            .select(compositionId)
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
            .select(compositionId)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tcmVhZC1tb2RlbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpLWFwaS9jb21wb3NpdGlvbi9jb21wb3NpdGlvbi1yZWFkLW1vZGVsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRTdGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBT3JGO0lBR0MscUNBQW9CLHFCQUE0QztRQUE1QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0lBQ2hFLENBQUM7Ozs7O0lBRUQsNkNBQU87Ozs7SUFBUCxVQUFRLGFBQWtEO1FBQWxELDhCQUFBLEVBQUEsbUNBQWtEO1FBQ3pELE9BQU8sSUFBSSxDQUFDLHFCQUFxQjthQUMzQixNQUFNLENBQUMsYUFBYSxDQUFDO2FBQ3JCLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsVUFBQyxXQUF3QixJQUFLLE9BQUEsV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUF0QixDQUFzQixFQUFDLENBQ3pELENBQUM7SUFDUixDQUFDOzs7OztJQUVELHNEQUFnQjs7OztJQUFoQixVQUFpQixhQUFrRDtRQUFsRCw4QkFBQSxFQUFBLG1DQUFrRDtRQUNsRSxPQUFPLElBQUksQ0FBQyxxQkFBcUI7YUFDM0IsTUFBTSxDQUFDLGFBQWEsQ0FBQzthQUNyQixJQUFJLENBQ0osR0FBRzs7OztRQUFDLFVBQUMsV0FBd0IsSUFBSyxPQUFBLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxFQUEvQixDQUErQixFQUFDLENBQ2xFLENBQUM7SUFDUixDQUFDOzs7OztJQUVELDBEQUFvQjs7OztJQUFwQixVQUFxQixhQUFrRDtRQUFsRCw4QkFBQSxFQUFBLG1DQUFrRDtRQUN0RSxPQUFPLElBQUksQ0FBQyxxQkFBcUI7YUFDM0IsTUFBTSxDQUFDLGFBQWEsQ0FBQzthQUNyQixJQUFJLENBQ0osR0FBRzs7OztRQUFDLFVBQUMsV0FBd0IsSUFBSyxPQUFBLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxFQUFQLENBQU8sRUFBQyxFQUExQyxDQUEwQyxFQUFDLENBQzdFLENBQUM7SUFDUixDQUFDOzs7OztJQUVELHFEQUFlOzs7O0lBQWYsVUFBZ0IsYUFBa0Q7UUFBbEQsOEJBQUEsRUFBQSxtQ0FBa0Q7UUFDakUsT0FBTyxJQUFJLENBQUMscUJBQXFCO2FBQzNCLE1BQU0sQ0FBQyxhQUFhLENBQUM7YUFDckIsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxVQUFDLFdBQXdCLElBQUssT0FBQSxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsRUFBOUIsQ0FBOEIsRUFBQyxDQUNqRSxDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCx1REFBaUI7Ozs7SUFBakIsVUFBa0IsYUFBa0Q7UUFBbEQsOEJBQUEsRUFBQSxtQ0FBa0Q7UUFDbkUsT0FBTyxJQUFJLENBQUMscUJBQXFCO2FBQzNCLE1BQU0sQ0FBQyxhQUFhLENBQUM7YUFDckIsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxVQUFDLFdBQXdCLElBQUssT0FBQSxXQUFXLENBQUMsa0JBQWtCLEVBQUUsRUFBaEMsQ0FBZ0MsRUFBQyxDQUNuRSxDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxtREFBYTs7OztJQUFiLFVBQWMsYUFBa0Q7UUFBbEQsOEJBQUEsRUFBQSxtQ0FBa0Q7UUFDL0QsT0FBTyxJQUFJLENBQUMscUJBQXFCO2FBQzNCLE1BQU0sQ0FBQyxhQUFhLENBQUM7YUFDckIsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxVQUFDLFdBQXdCLElBQUssT0FBQSxXQUFXLENBQUMsb0JBQW9CLEVBQUUsRUFBbEMsQ0FBa0MsRUFBQyxDQUNyRSxDQUFDO0lBQ1IsQ0FBQzs7Z0JBcERELFVBQVU7Ozs7Z0JBVEYscUJBQXFCOztJQStEOUIsa0NBQUM7Q0FBQSxBQXRERCxJQXNEQztTQXJEWSwyQkFBMkI7Ozs7OztJQUUzQiw0REFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9yZWFkL2NvbXBvc2l0aW9uLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21wb3NpdGlvbi1pZCc7XG5pbXBvcnQgeyBnbG9iYWxDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL2dsb2JhbC1jb21wb3NpdGlvbi1pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbiB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9yZWFkL2NvbXBvc2l0aW9uJztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuLi8uLi9kb21haW4vY29tcG9zaXRpb24vcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1hY2Nlc3Nvcic7XG5cblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvc2l0aW9uUmVwb3NpdG9yeTogQ29tcG9zaXRpb25SZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRvbldpZHRoKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBnbG9iYWxDb21wb3NpdGlvbklkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvblJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLnNlbGVjdChjb21wb3NpdGlvbklkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvbikgPT4gY29tcG9zaXRpb24uZ2V0V2lkdGgoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uQ29udGFpbmVyV2lkdGgoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGdsb2JhbENvbXBvc2l0aW9uSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAuc2VsZWN0KGNvbXBvc2l0aW9uSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoY29tcG9zaXRpb246IENvbXBvc2l0aW9uKSA9PiBjb21wb3NpdGlvbi5nZXRDb250YWluZXJXaWR0aCgpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25XaWR0aEZvckVhY2hDb2x1bW4oY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGdsb2JhbENvbXBvc2l0aW9uSWQpOiBPYnNlcnZhYmxlPEFycmF5PG51bWJlcj4+IHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvblJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLnNlbGVjdChjb21wb3NpdGlvbklkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvbikgPT4gY29tcG9zaXRpb24uZ2V0Q29sdW1ucygpLm1hcChjID0+IGMud2lkdGgpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25IZWFkZXJDb2x1bW5zKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBnbG9iYWxDb21wb3NpdGlvbklkKTogT2JzZXJ2YWJsZTxBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4+IHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvblJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLnNlbGVjdChjb21wb3NpdGlvbklkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvbikgPT4gY29tcG9zaXRpb24uZ2V0SGVhZGVyQ29sdW1ucygpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25UZW1wbGF0ZUNvbHVtbnMoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGdsb2JhbENvbXBvc2l0aW9uSWQpOiBPYnNlcnZhYmxlPEFycmF5PENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3Nvcj4+IHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvblJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLnNlbGVjdChjb21wb3NpdGlvbklkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvbikgPT4gY29tcG9zaXRpb24uZ2V0VGVtcGxhdGVDb2x1bW5zKCkpLFxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25SZXNpemVXaWR0aChjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gZ2xvYmFsQ29tcG9zaXRpb25JZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAuc2VsZWN0KGNvbXBvc2l0aW9uSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoY29tcG9zaXRpb246IENvbXBvc2l0aW9uKSA9PiBjb21wb3NpdGlvbi5pc1Jlc2l6ZVdpZHRoRW5hYmxlZCgpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==