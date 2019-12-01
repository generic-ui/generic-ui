/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CompositionRepository } from '../../../domain/composition/query/composition.repository';
import { globalCompositionId } from '../../../domain/composition/global-composition-id';
var CompositionQueryService = /** @class */ (function () {
    function CompositionQueryService(compositionRepository) {
        this.compositionRepository = compositionRepository;
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionQueryService.prototype.selectWidth = /**
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
    CompositionQueryService.prototype.selectContainerWidth = /**
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
    CompositionQueryService.prototype.selectWidthForEachColumn = /**
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
    CompositionQueryService.prototype.selectHeaderColumns = /**
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
    CompositionQueryService.prototype.selectTemplateColumns = /**
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
    CompositionQueryService.prototype.selectResizeWidth = /**
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
    CompositionQueryService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionQueryService.ctorParameters = function () { return [
        { type: CompositionRepository }
    ]; };
    return CompositionQueryService;
}());
export { CompositionQueryService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionQueryService.prototype.compositionRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ucXVlcnktc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9hcGkvY29tcG9zaXRpb24vY29tcG9zaXRpb24ucXVlcnktc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFFakcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFPeEY7SUFHQyxpQ0FBb0IscUJBQTRDO1FBQTVDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7SUFDaEUsQ0FBQzs7Ozs7SUFFRCw2Q0FBVzs7OztJQUFYLFVBQVksYUFBa0Q7UUFBbEQsOEJBQUEsRUFBQSxtQ0FBa0Q7UUFDN0QsT0FBTyxJQUFJLENBQUMscUJBQXFCO2FBQzNCLE1BQU0sQ0FBQyxhQUFhLENBQUM7YUFDckIsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxVQUFDLFdBQXdCLElBQUssT0FBQSxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQXRCLENBQXNCLEVBQUMsQ0FDekQsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsc0RBQW9COzs7O0lBQXBCLFVBQXFCLGFBQWtEO1FBQWxELDhCQUFBLEVBQUEsbUNBQWtEO1FBQ3RFLE9BQU8sSUFBSSxDQUFDLHFCQUFxQjthQUMzQixNQUFNLENBQUMsYUFBYSxDQUFDO2FBQ3JCLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsVUFBQyxXQUF3QixJQUFLLE9BQUEsV0FBVyxDQUFDLGlCQUFpQixFQUFFLEVBQS9CLENBQStCLEVBQUMsQ0FDbEUsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsMERBQXdCOzs7O0lBQXhCLFVBQXlCLGFBQWtEO1FBQWxELDhCQUFBLEVBQUEsbUNBQWtEO1FBQzFFLE9BQU8sSUFBSSxDQUFDLHFCQUFxQjthQUMzQixNQUFNLENBQUMsYUFBYSxDQUFDO2FBQ3JCLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsVUFBQyxXQUF3QixJQUFLLE9BQUEsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxFQUFDLEVBQTFDLENBQTBDLEVBQUMsQ0FDN0UsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQscURBQW1COzs7O0lBQW5CLFVBQW9CLGFBQWtEO1FBQWxELDhCQUFBLEVBQUEsbUNBQWtEO1FBQ3JFLE9BQU8sSUFBSSxDQUFDLHFCQUFxQjthQUMzQixNQUFNLENBQUMsYUFBYSxDQUFDO2FBQ3JCLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsVUFBQyxXQUF3QixJQUFLLE9BQUEsV0FBVyxDQUFDLGdCQUFnQixFQUFFLEVBQTlCLENBQThCLEVBQUMsQ0FDakUsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsdURBQXFCOzs7O0lBQXJCLFVBQXNCLGFBQWtEO1FBQWxELDhCQUFBLEVBQUEsbUNBQWtEO1FBQ3ZFLE9BQU8sSUFBSSxDQUFDLHFCQUFxQjthQUMzQixNQUFNLENBQUMsYUFBYSxDQUFDO2FBQ3JCLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsVUFBQyxXQUF3QixJQUFLLE9BQUEsV0FBVyxDQUFDLGtCQUFrQixFQUFFLEVBQWhDLENBQWdDLEVBQUMsQ0FDbkUsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsbURBQWlCOzs7O0lBQWpCLFVBQWtCLGFBQWtEO1FBQWxELDhCQUFBLEVBQUEsbUNBQWtEO1FBQ25FLE9BQU8sSUFBSSxDQUFDLHFCQUFxQjthQUMzQixNQUFNLENBQUMsYUFBYSxDQUFDO2FBQ3JCLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsVUFBQyxXQUF3QixJQUFLLE9BQUEsV0FBVyxDQUFDLG9CQUFvQixFQUFFLEVBQWxDLENBQWtDLEVBQUMsQ0FDckUsQ0FBQztJQUNSLENBQUM7O2dCQXBERCxVQUFVOzs7O2dCQVRGLHFCQUFxQjs7SUErRDlCLDhCQUFDO0NBQUEsQUF0REQsSUFzREM7U0FyRFksdUJBQXVCOzs7Ozs7SUFFdkIsd0RBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvblJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vcXVlcnkvY29tcG9zaXRpb24ucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL2NvbXBvc2l0aW9uLWlkJztcbmltcG9ydCB7IGdsb2JhbENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vZ2xvYmFsLWNvbXBvc2l0aW9uLWlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL3F1ZXJ5L2NvbXBvc2l0aW9uJztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL3F1ZXJ5L2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL3F1ZXJ5L2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yJztcblxuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvblF1ZXJ5U2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb21wb3NpdGlvblJlcG9zaXRvcnk6IENvbXBvc2l0aW9uUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0c2VsZWN0V2lkdGgoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGdsb2JhbENvbXBvc2l0aW9uSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAuc2VsZWN0KGNvbXBvc2l0aW9uSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoY29tcG9zaXRpb246IENvbXBvc2l0aW9uKSA9PiBjb21wb3NpdGlvbi5nZXRXaWR0aCgpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0c2VsZWN0Q29udGFpbmVyV2lkdGgoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGdsb2JhbENvbXBvc2l0aW9uSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAuc2VsZWN0KGNvbXBvc2l0aW9uSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoY29tcG9zaXRpb246IENvbXBvc2l0aW9uKSA9PiBjb21wb3NpdGlvbi5nZXRDb250YWluZXJXaWR0aCgpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0c2VsZWN0V2lkdGhGb3JFYWNoQ29sdW1uKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBnbG9iYWxDb21wb3NpdGlvbklkKTogT2JzZXJ2YWJsZTxBcnJheTxudW1iZXI+PiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25SZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5zZWxlY3QoY29tcG9zaXRpb25JZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChjb21wb3NpdGlvbjogQ29tcG9zaXRpb24pID0+IGNvbXBvc2l0aW9uLmdldENvbHVtbnMoKS5tYXAoYyA9PiBjLndpZHRoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdHNlbGVjdEhlYWRlckNvbHVtbnMoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGdsb2JhbENvbXBvc2l0aW9uSWQpOiBPYnNlcnZhYmxlPEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0Pj4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAuc2VsZWN0KGNvbXBvc2l0aW9uSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIG1hcCgoY29tcG9zaXRpb246IENvbXBvc2l0aW9uKSA9PiBjb21wb3NpdGlvbi5nZXRIZWFkZXJDb2x1bW5zKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRzZWxlY3RUZW1wbGF0ZUNvbHVtbnMoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGdsb2JhbENvbXBvc2l0aW9uSWQpOiBPYnNlcnZhYmxlPEFycmF5PENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3Nvcj4+IHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvblJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLnNlbGVjdChjb21wb3NpdGlvbklkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvbikgPT4gY29tcG9zaXRpb24uZ2V0VGVtcGxhdGVDb2x1bW5zKCkpLFxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0c2VsZWN0UmVzaXplV2lkdGgoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGdsb2JhbENvbXBvc2l0aW9uSWQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvblJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLnNlbGVjdChjb21wb3NpdGlvbklkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvbikgPT4gY29tcG9zaXRpb24uaXNSZXNpemVXaWR0aEVuYWJsZWQoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=