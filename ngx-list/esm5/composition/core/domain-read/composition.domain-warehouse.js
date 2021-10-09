/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CompositionReadModelRootRepository } from './composition.read-model-root-repository';
import { CompositionGroupArchive } from './group/composition-group.archive';
import { CompositionWarehouse } from '../api/composition.warehouse';
import { Injectable } from '@angular/core';
import { hermesFilter, hermesMap } from '@generic-ui/hermes';
var CompositionDomainWarehouse = /** @class */ (function (_super) {
    tslib_1.__extends(CompositionDomainWarehouse, _super);
    function CompositionDomainWarehouse(compositionRepository, compositionGroupArchive) {
        var _this = _super.call(this) || this;
        _this.compositionRepository = compositionRepository;
        _this.compositionGroupArchive = compositionGroupArchive;
        return _this;
    }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    CompositionDomainWarehouse.prototype.onWidth = /**
     * @param {?} compositionId
     * @return {?}
     */
    function (compositionId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(hermesMap((/**
         * @param {?} composition
         * @return {?}
         */
        function (composition) { return composition.getWidth(); })));
    };
    /**
     * @param {?} compositionId
     * @return {?}
     */
    CompositionDomainWarehouse.prototype.onContainerWidth = /**
     * @param {?} compositionId
     * @return {?}
     */
    function (compositionId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(hermesMap((/**
         * @param {?} composition
         * @return {?}
         */
        function (composition) { return composition.getContainerWidth(); })));
    };
    /**
     * @param {?} compositionId
     * @return {?}
     */
    CompositionDomainWarehouse.prototype.onWidthForEachColumn = /**
     * @param {?} compositionId
     * @return {?}
     */
    function (compositionId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(hermesMap((/**
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
     * @param {?} compositionId
     * @return {?}
     */
    CompositionDomainWarehouse.prototype.onHeaderColumns = /**
     * @param {?} compositionId
     * @return {?}
     */
    function (compositionId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(hermesMap((/**
         * @param {?} composition
         * @return {?}
         */
        function (composition) { return composition.getActiveHeaderColumns(); })));
    };
    /**
     * @param {?} compositionId
     * @return {?}
     */
    CompositionDomainWarehouse.prototype.onAllColumns = /**
     * @param {?} compositionId
     * @return {?}
     */
    function (compositionId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(hermesMap((/**
         * @param {?} composition
         * @return {?}
         */
        function (composition) { return composition.getHeaderColumns(); })));
    };
    /**
     * @param {?} fieldId
     * @param {?} compositionId
     * @return {?}
     */
    CompositionDomainWarehouse.prototype.onSortOrder = /**
     * @param {?} fieldId
     * @param {?} compositionId
     * @return {?}
     */
    function (fieldId, compositionId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(hermesMap((/**
         * @param {?} composition
         * @return {?}
         */
        function (composition) { return composition.getActiveHeaderColumns(); })), hermesMap((/**
         * @param {?} columns
         * @return {?}
         */
        function (columns) {
            return columns.filter((/**
             * @param {?} c
             * @return {?}
             */
            function (c) { return c.getFieldId().equals(fieldId); }));
        })), hermesFilter((/**
         * @param {?} columns
         * @return {?}
         */
        function (columns) {
            return columns.length > 0;
        })), hermesMap((/**
         * @param {?} columns
         * @return {?}
         */
        function (columns) { return columns[0].getSortStatus(); })));
    };
    /**
     * @param {?} compositionId
     * @return {?}
     */
    CompositionDomainWarehouse.prototype.onTemplateColumns = /**
     * @param {?} compositionId
     * @return {?}
     */
    function (compositionId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(hermesMap((/**
         * @param {?} composition
         * @return {?}
         */
        function (composition) { return composition.getTemplateColumns(); })));
    };
    /**
     * @param {?} compositionId
     * @return {?}
     */
    CompositionDomainWarehouse.prototype.onResizeWidth = /**
     * @param {?} compositionId
     * @return {?}
     */
    function (compositionId) {
        return this.compositionRepository
            .on(compositionId)
            .pipe(hermesMap((/**
         * @param {?} composition
         * @return {?}
         */
        function (composition) { return composition.isResizeWidthEnabled(); })));
    };
    /**
     * @param {?} compositionId
     * @return {?}
     */
    CompositionDomainWarehouse.prototype.onGroups = /**
     * @param {?} compositionId
     * @return {?}
     */
    function (compositionId) {
        return this.compositionGroupArchive.on(compositionId);
    };
    CompositionDomainWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionDomainWarehouse.ctorParameters = function () { return [
        { type: CompositionReadModelRootRepository },
        { type: CompositionGroupArchive }
    ]; };
    return CompositionDomainWarehouse;
}(CompositionWarehouse));
export { CompositionDomainWarehouse };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZG9tYWluLXdhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9jb21wb3NpdGlvbi5kb21haW4td2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDOUYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFRNUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBb0IsTUFBTSxvQkFBb0IsQ0FBQztBQUUvRTtJQUNnRCxzREFBb0I7SUFFbkUsb0NBQTZCLHFCQUF5RCxFQUNsRSx1QkFBZ0Q7UUFEcEUsWUFFQyxpQkFBTyxTQUNQO1FBSDRCLDJCQUFxQixHQUFyQixxQkFBcUIsQ0FBb0M7UUFDbEUsNkJBQXVCLEdBQXZCLHVCQUF1QixDQUF5Qjs7SUFFcEUsQ0FBQzs7Ozs7SUFFRCw0Q0FBTzs7OztJQUFQLFVBQVEsYUFBNEI7UUFDbkMsT0FBTyxJQUFJLENBQUMscUJBQXFCO2FBQzNCLEVBQUUsQ0FBQyxhQUFhLENBQUM7YUFDakIsSUFBSSxDQUNKLFNBQVM7Ozs7UUFBQyxVQUFDLFdBQW9DLElBQUssT0FBQSxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQXRCLENBQXNCLEVBQUMsQ0FDM0UsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQscURBQWdCOzs7O0lBQWhCLFVBQWlCLGFBQTRCO1FBQzVDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQjthQUMzQixFQUFFLENBQUMsYUFBYSxDQUFDO2FBQ2pCLElBQUksQ0FDSixTQUFTOzs7O1FBQUMsVUFBQyxX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RkQsVUFBVTs7OztnQkFiRixrQ0FBa0M7Z0JBQ2xDLHVCQUF1Qjs7SUErRmhDLGlDQUFDO0NBQUEsQUFuRkQsQ0FDZ0Qsb0JBQW9CLEdBa0ZuRTtTQWxGWSwwQkFBMEI7Ozs7OztJQUUxQiwyREFBMEU7Ozs7O0lBQ25GLDZEQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdFJlcG9zaXRvcnkgfSBmcm9tICcuL2NvbXBvc2l0aW9uLnJlYWQtbW9kZWwtcm9vdC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uR3JvdXBBcmNoaXZlIH0gZnJvbSAnLi9ncm91cC9jb21wb3NpdGlvbi1ncm91cC5hcmNoaXZlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi9kb21haW4vY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZVJvb3QgfSBmcm9tICcuL2NvbXBvc2l0aW9uLnJlYWQtbW9kZS1yb290JztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnLi4vZG9tYWluL2NvbHVtbi9zb3J0L3NvcnQtb3JkZXInO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBHcm91cENvbGxlY3Rpb24gfSBmcm9tICcuLi9hcGkvZ3JvdXAvZ3JvdXAuY29sbGVjdGlvbic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldhcmVob3VzZSB9IGZyb20gJy4uL2FwaS9jb21wb3NpdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaGVybWVzRmlsdGVyLCBoZXJtZXNNYXAsIEhlcm1lc09ic2VydmFibGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25Eb21haW5XYXJlaG91c2UgZXh0ZW5kcyBDb21wb3NpdGlvbldhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvblJlcG9zaXRvcnk6IENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdFJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25Hcm91cEFyY2hpdmU6IENvbXBvc2l0aW9uR3JvdXBBcmNoaXZlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG9uV2lkdGgoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IEhlcm1lc09ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25SZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihjb21wb3NpdGlvbklkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvblJlYWRNb2RlUm9vdCkgPT4gY29tcG9zaXRpb24uZ2V0V2lkdGgoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uQ29udGFpbmVyV2lkdGgoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IEhlcm1lc09ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25SZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihjb21wb3NpdGlvbklkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvblJlYWRNb2RlUm9vdCkgPT4gY29tcG9zaXRpb24uZ2V0Q29udGFpbmVyV2lkdGgoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uV2lkdGhGb3JFYWNoQ29sdW1uKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiBIZXJtZXNPYnNlcnZhYmxlPFJlYWRvbmx5QXJyYXk8bnVtYmVyPj4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oY29tcG9zaXRpb25JZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChjb21wb3NpdGlvbjogQ29tcG9zaXRpb25SZWFkTW9kZVJvb3QpID0+IGNvbXBvc2l0aW9uLmdldEFsbENvbHVtbnMoKS5tYXAoYyA9PiBjLndpZHRoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uSGVhZGVyQ29sdW1ucyhjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogSGVybWVzT2JzZXJ2YWJsZTxSZWFkb25seUFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0Pj4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oY29tcG9zaXRpb25JZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChjb21wb3NpdGlvbjogQ29tcG9zaXRpb25SZWFkTW9kZVJvb3QpID0+IGNvbXBvc2l0aW9uLmdldEFjdGl2ZUhlYWRlckNvbHVtbnMoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uQWxsQ29sdW1ucyhjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogSGVybWVzT2JzZXJ2YWJsZTxSZWFkb25seUFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0Pj4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oY29tcG9zaXRpb25JZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChjb21wb3NpdGlvbjogQ29tcG9zaXRpb25SZWFkTW9kZVJvb3QpID0+IGNvbXBvc2l0aW9uLmdldEhlYWRlckNvbHVtbnMoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uU29ydE9yZGVyKGZpZWxkSWQ6IEZpZWxkSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiBIZXJtZXNPYnNlcnZhYmxlPFNvcnRPcmRlcj4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oY29tcG9zaXRpb25JZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChjb21wb3NpdGlvbjogQ29tcG9zaXRpb25SZWFkTW9kZVJvb3QpID0+IGNvbXBvc2l0aW9uLmdldEFjdGl2ZUhlYWRlckNvbHVtbnMoKSksXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4pID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBjb2x1bW5zLmZpbHRlcigoYykgPT4gYy5nZXRGaWVsZElkKCkuZXF1YWxzKGZpZWxkSWQpKTtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBoZXJtZXNGaWx0ZXIoKGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIGNvbHVtbnMubGVuZ3RoID4gMDtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoY29sdW1ucyA9PiBjb2x1bW5zWzBdLmdldFNvcnRTdGF0dXMoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uVGVtcGxhdGVDb2x1bW5zKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiBIZXJtZXNPYnNlcnZhYmxlPFJlYWRvbmx5QXJyYXk8Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yPj4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oY29tcG9zaXRpb25JZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChjb21wb3NpdGlvbjogQ29tcG9zaXRpb25SZWFkTW9kZVJvb3QpID0+IGNvbXBvc2l0aW9uLmdldFRlbXBsYXRlQ29sdW1ucygpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25SZXNpemVXaWR0aChjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogSGVybWVzT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25SZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihjb21wb3NpdGlvbklkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvblJlYWRNb2RlUm9vdCkgPT4gY29tcG9zaXRpb24uaXNSZXNpemVXaWR0aEVuYWJsZWQoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uR3JvdXBzKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiBIZXJtZXNPYnNlcnZhYmxlPEdyb3VwQ29sbGVjdGlvbj4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uR3JvdXBBcmNoaXZlLm9uKGNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cbn1cbiJdfQ==