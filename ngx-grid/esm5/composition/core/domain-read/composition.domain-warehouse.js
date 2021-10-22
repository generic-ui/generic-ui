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
import { ColumnHighlightArchive } from '../domain/highlight/column-highlight.archive';
var CompositionDomainWarehouse = /** @class */ (function (_super) {
    tslib_1.__extends(CompositionDomainWarehouse, _super);
    function CompositionDomainWarehouse(compositionRepository, compositionGroupArchive, columnHighlightArchive) {
        var _this = _super.call(this) || this;
        _this.compositionRepository = compositionRepository;
        _this.compositionGroupArchive = compositionGroupArchive;
        _this.columnHighlightArchive = columnHighlightArchive;
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
    /**
     * @param {?} columnId
     * @param {?} compositionId
     * @return {?}
     */
    CompositionDomainWarehouse.prototype.onHighlightedColumn = /**
     * @param {?} columnId
     * @param {?} compositionId
     * @return {?}
     */
    function (columnId, compositionId) {
        return this.columnHighlightArchive
            .on(compositionId)
            .pipe(hermesMap((/**
         * @param {?} manager
         * @return {?}
         */
        function (manager) { return manager.isHighlighted(columnId); })));
    };
    CompositionDomainWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionDomainWarehouse.ctorParameters = function () { return [
        { type: CompositionReadModelRootRepository },
        { type: CompositionGroupArchive },
        { type: ColumnHighlightArchive }
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
    /**
     * @type {?}
     * @private
     */
    CompositionDomainWarehouse.prototype.columnHighlightArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZG9tYWluLXdhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9jb21wb3NpdGlvbi5kb21haW4td2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDOUYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFRNUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBb0IsTUFBTSxvQkFBb0IsQ0FBQztBQUUvRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUd0RjtJQUNnRCxzREFBb0I7SUFFbkUsb0NBQTZCLHFCQUF5RCxFQUNsRSx1QkFBZ0QsRUFDaEQsc0JBQThDO1FBRmxFLFlBR0MsaUJBQU8sU0FDUDtRQUo0QiwyQkFBcUIsR0FBckIscUJBQXFCLENBQW9DO1FBQ2xFLDZCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsNEJBQXNCLEdBQXRCLHNCQUFzQixDQUF3Qjs7SUFFbEUsQ0FBQzs7Ozs7SUFFRCw0Q0FBTzs7OztJQUFQLFVBQVEsYUFBNEI7UUFDbkMsT0FBTyxJQUFJLENBQUMscUJBQXFCO2FBQzNCLEVBQUUsQ0FBQyxhQUFhLENBQUM7YUFDakIsSUFBSSxDQUNKLFNBQVM7Ozs7UUFBQyxVQUFDLFdBQW9DLElBQUssT0FBQSxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQXRCLENBQXNCLEVBQUMsQ0FDM0UsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQscURBQWdCOzs7O0lBQWhCLFVBQWlCLGFBQTRC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SUFBUixVQUFTLGFBQTRCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7Ozs7SUFFRCx3REFBbUI7Ozs7O0lBQW5CLFVBQW9CLFFBQWtCLEVBQUUsYUFBNEI7UUFDbkUsT0FBTyxJQUFJLENBQUMsc0JBQXNCO2FBQzVCLEVBQUUsQ0FBQyxhQUFhLENBQUM7YUFDakIsSUFBSSxDQUNKLFNBQVM7Ozs7UUFBQyxVQUFDLE9BQStCLElBQUssT0FBQSxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUEvQixDQUErQixFQUFDLENBQy9FLENBQUM7SUFDUixDQUFDOztnQkExRkQsVUFBVTs7OztnQkFoQkYsa0NBQWtDO2dCQUNsQyx1QkFBdUI7Z0JBWXZCLHNCQUFzQjs7SUErRi9CLGlDQUFDO0NBQUEsQUE1RkQsQ0FDZ0Qsb0JBQW9CLEdBMkZuRTtTQTNGWSwwQkFBMEI7Ozs7OztJQUUxQiwyREFBMEU7Ozs7O0lBQ25GLDZEQUFpRTs7Ozs7SUFDakUsNERBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZWxSb290UmVwb3NpdG9yeSB9IGZyb20gJy4vY29tcG9zaXRpb24ucmVhZC1tb2RlbC1yb290LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Hcm91cEFyY2hpdmUgfSBmcm9tICcuL2dyb3VwL2NvbXBvc2l0aW9uLWdyb3VwLmFyY2hpdmUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uL2FwaS9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlYWRNb2RlUm9vdCB9IGZyb20gJy4vY29tcG9zaXRpb24ucmVhZC1tb2RlLXJvb3QnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9maWVsZC5pZCc7XG5pbXBvcnQgeyBTb3J0T3JkZXIgfSBmcm9tICcuLi9kb21haW4vY29sdW1uL3NvcnQvc29ydC1vcmRlcic7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yJztcbmltcG9ydCB7IEdyb3VwQ29sbGVjdGlvbiB9IGZyb20gJy4uL2FwaS9ncm91cC9ncm91cC5jb2xsZWN0aW9uJztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vYXBpL2NvbXBvc2l0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBoZXJtZXNGaWx0ZXIsIGhlcm1lc01hcCwgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4uL2FwaS9jb2x1bW4vY29sdW1uLmlkJztcbmltcG9ydCB7IENvbHVtbkhpZ2hsaWdodEFyY2hpdmUgfSBmcm9tICcuLi9kb21haW4vaGlnaGxpZ2h0L2NvbHVtbi1oaWdobGlnaHQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBDb2x1bW5IaWdobGlnaHRNYW5hZ2VyIH0gZnJvbSAnLi4vZG9tYWluL2hpZ2hsaWdodC9jb2x1bW4taGlnaGxpZ2h0Lm1hbmFnZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25Eb21haW5XYXJlaG91c2UgZXh0ZW5kcyBDb21wb3NpdGlvbldhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvblJlcG9zaXRvcnk6IENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdFJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25Hcm91cEFyY2hpdmU6IENvbXBvc2l0aW9uR3JvdXBBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbkhpZ2hsaWdodEFyY2hpdmU6IENvbHVtbkhpZ2hsaWdodEFyY2hpdmUpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0b25XaWR0aChjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogSGVybWVzT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvblJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKGNvbXBvc2l0aW9uSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgoY29tcG9zaXRpb246IENvbXBvc2l0aW9uUmVhZE1vZGVSb290KSA9PiBjb21wb3NpdGlvbi5nZXRXaWR0aCgpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25Db250YWluZXJXaWR0aChjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogSGVybWVzT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvblJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKGNvbXBvc2l0aW9uSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgoY29tcG9zaXRpb246IENvbXBvc2l0aW9uUmVhZE1vZGVSb290KSA9PiBjb21wb3NpdGlvbi5nZXRDb250YWluZXJXaWR0aCgpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25XaWR0aEZvckVhY2hDb2x1bW4oY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IEhlcm1lc09ic2VydmFibGU8UmVhZG9ubHlBcnJheTxudW1iZXI+PiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25SZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihjb21wb3NpdGlvbklkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvblJlYWRNb2RlUm9vdCkgPT4gY29tcG9zaXRpb24uZ2V0QWxsQ29sdW1ucygpLm1hcChjID0+IGMud2lkdGgpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25IZWFkZXJDb2x1bW5zKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiBIZXJtZXNPYnNlcnZhYmxlPFJlYWRvbmx5QXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+PiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25SZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihjb21wb3NpdGlvbklkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvblJlYWRNb2RlUm9vdCkgPT4gY29tcG9zaXRpb24uZ2V0QWN0aXZlSGVhZGVyQ29sdW1ucygpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25BbGxDb2x1bW5zKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiBIZXJtZXNPYnNlcnZhYmxlPFJlYWRvbmx5QXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+PiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25SZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihjb21wb3NpdGlvbklkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvblJlYWRNb2RlUm9vdCkgPT4gY29tcG9zaXRpb24uZ2V0SGVhZGVyQ29sdW1ucygpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25Tb3J0T3JkZXIoZmllbGRJZDogRmllbGRJZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IEhlcm1lc09ic2VydmFibGU8U29ydE9yZGVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25SZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihjb21wb3NpdGlvbklkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvblJlYWRNb2RlUm9vdCkgPT4gY29tcG9zaXRpb24uZ2V0QWN0aXZlSGVhZGVyQ29sdW1ucygpKSxcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIGNvbHVtbnMuZmlsdGVyKChjKSA9PiBjLmdldEZpZWxkSWQoKS5lcXVhbHMoZmllbGRJZCkpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIGhlcm1lc0ZpbHRlcigoY29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gY29sdW1ucy5sZW5ndGggPiAwO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcChjb2x1bW5zID0+IGNvbHVtbnNbMF0uZ2V0U29ydFN0YXR1cygpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25UZW1wbGF0ZUNvbHVtbnMoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IEhlcm1lc09ic2VydmFibGU8UmVhZG9ubHlBcnJheTxDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3I+PiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25SZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihjb21wb3NpdGlvbklkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKGNvbXBvc2l0aW9uOiBDb21wb3NpdGlvblJlYWRNb2RlUm9vdCkgPT4gY29tcG9zaXRpb24uZ2V0VGVtcGxhdGVDb2x1bW5zKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvblJlc2l6ZVdpZHRoKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiBIZXJtZXNPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvblJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKGNvbXBvc2l0aW9uSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgoY29tcG9zaXRpb246IENvbXBvc2l0aW9uUmVhZE1vZGVSb290KSA9PiBjb21wb3NpdGlvbi5pc1Jlc2l6ZVdpZHRoRW5hYmxlZCgpKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25Hcm91cHMoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IEhlcm1lc09ic2VydmFibGU8R3JvdXBDb2xsZWN0aW9uPiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25Hcm91cEFyY2hpdmUub24oY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRvbkhpZ2hsaWdodGVkQ29sdW1uKGNvbHVtbklkOiBDb2x1bW5JZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IEhlcm1lc09ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbkhpZ2hsaWdodEFyY2hpdmVcblx0XHRcdFx0ICAgLm9uKGNvbXBvc2l0aW9uSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgobWFuYWdlcjogQ29sdW1uSGlnaGxpZ2h0TWFuYWdlcikgPT4gbWFuYWdlci5pc0hpZ2hsaWdodGVkKGNvbHVtbklkKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG59XG4iXX0=