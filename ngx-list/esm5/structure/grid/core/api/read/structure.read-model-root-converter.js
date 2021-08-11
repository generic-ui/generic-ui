/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { PagingConverter } from '../../../../paging/core/api/read/paging.converter';
import { SourceConverter } from '../../../../source/core/api/source.converter';
import { VerticalFormationConverter } from '../../../../vertical-formation/core/api/vertical-formation.converter';
import { StructureReadModelRoot } from './structure.read-model-root';
import { ItemEntity } from '../../../../source/core/domain/core/item/item.entity';
var StructureReadModelRootConverter = /** @class */ (function () {
    function StructureReadModelRootConverter(pagingConverter, sourceConverter, verticalFormationConverter) {
        this.pagingConverter = pagingConverter;
        this.sourceConverter = sourceConverter;
        this.verticalFormationConverter = verticalFormationConverter;
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    StructureReadModelRootConverter.prototype.convert = /**
     * @param {?} aggregate
     * @return {?}
     */
    function (aggregate) {
        /** @type {?} */
        var pagingAggregate = aggregate.getPaging();
        /** @type {?} */
        var originItemEntities = aggregate.getEntities();
        /** @type {?} */
        var sourceCoordinator = aggregate.getSource();
        /** @type {?} */
        var verticalFormation = aggregate.getVerticalFormation();
        return new StructureReadModelRoot(aggregate.getId().toReadModelRootId(), this.pagingConverter.convert(pagingAggregate), this.convertSource(originItemEntities), this.sourceConverter.convert(sourceCoordinator), this.verticalFormationConverter.convert(verticalFormation));
    };
    /**
     * @private
     * @param {?} source
     * @return {?}
     */
    StructureReadModelRootConverter.prototype.convertSource = /**
     * @private
     * @param {?} source
     * @return {?}
     */
    function (source) {
        return source.map((/**
         * @param {?} originItem
         * @return {?}
         */
        function (originItem) {
            return new ItemEntity(originItem.rawData, originItem.getPosition(), originItem.getId().toString(), originItem.getVersion());
        }));
    };
    StructureReadModelRootConverter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureReadModelRootConverter.ctorParameters = function () { return [
        { type: PagingConverter },
        { type: SourceConverter },
        { type: VerticalFormationConverter }
    ]; };
    return StructureReadModelRootConverter;
}());
export { StructureReadModelRootConverter };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureReadModelRootConverter.prototype.pagingConverter;
    /**
     * @type {?}
     * @private
     */
    StructureReadModelRootConverter.prototype.sourceConverter;
    /**
     * @type {?}
     * @private
     */
    StructureReadModelRootConverter.prototype.verticalFormationConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdC1jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2NvcmUvYXBpL3JlYWQvc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdC1jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUVsSCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVyRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFHbEY7SUFHQyx5Q0FBb0IsZUFBZ0MsRUFDekMsZUFBZ0MsRUFDaEMsMEJBQXNEO1FBRjdDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUN6QyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtJQUNqRSxDQUFDOzs7OztJQUVELGlEQUFPOzs7O0lBQVAsVUFBUSxTQUE2Qjs7WUFFOUIsZUFBZSxHQUFHLFNBQVMsQ0FBQyxTQUFTLEVBQUU7O1lBQzVDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxXQUFXLEVBQUU7O1lBQzVDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxTQUFTLEVBQUU7O1lBQ3pDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxvQkFBb0IsRUFBRTtRQUVyRCxPQUFPLElBQUksc0JBQXNCLENBQ2hDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxFQUNyQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFDN0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxFQUN0QyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUMvQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQzFELENBQUM7SUFDSCxDQUFDOzs7Ozs7SUFFTyx1REFBYTs7Ozs7SUFBckIsVUFBc0IsTUFBK0I7UUFDcEQsT0FBTyxNQUFNLENBQUMsR0FBRzs7OztRQUFDLFVBQUMsVUFBNEI7WUFDOUMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxXQUFXLEVBQUUsRUFBRSxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDN0gsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOztnQkE1QkQsVUFBVTs7OztnQkFURixlQUFlO2dCQUNmLGVBQWU7Z0JBQ2YsMEJBQTBCOztJQW9DbkMsc0NBQUM7Q0FBQSxBQTdCRCxJQTZCQztTQTVCWSwrQkFBK0I7Ozs7OztJQUUvQiwwREFBd0M7Ozs7O0lBQ2pELDBEQUF3Qzs7Ozs7SUFDeEMscUVBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQYWdpbmdDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9wYWdpbmcvY29yZS9hcGkvcmVhZC9wYWdpbmcuY29udmVydGVyJztcbmltcG9ydCB7IFNvdXJjZUNvbnZlcnRlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9zb3VyY2UuY29udmVydGVyJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdmVydGljYWwtZm9ybWF0aW9uL2NvcmUvYXBpL3ZlcnRpY2FsLWZvcm1hdGlvbi5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290IH0gZnJvbSAnLi9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290JztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL2NvcmUvaXRlbS9pdGVtLmVudGl0eSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RDb252ZXJ0ZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnaW5nQ29udmVydGVyOiBQYWdpbmdDb252ZXJ0ZXIsXG5cdFx0XHRcdHByaXZhdGUgc291cmNlQ29udmVydGVyOiBTb3VyY2VDb252ZXJ0ZXIsXG5cdFx0XHRcdHByaXZhdGUgdmVydGljYWxGb3JtYXRpb25Db252ZXJ0ZXI6IFZlcnRpY2FsRm9ybWF0aW9uQ29udmVydGVyKSB7XG5cdH1cblxuXHRjb252ZXJ0KGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlKTogU3RydWN0dXJlUmVhZE1vZGVsUm9vdCB7XG5cblx0XHRjb25zdCBwYWdpbmdBZ2dyZWdhdGUgPSBhZ2dyZWdhdGUuZ2V0UGFnaW5nKCksXG5cdFx0XHRvcmlnaW5JdGVtRW50aXRpZXMgPSBhZ2dyZWdhdGUuZ2V0RW50aXRpZXMoKSxcblx0XHRcdHNvdXJjZUNvb3JkaW5hdG9yID0gYWdncmVnYXRlLmdldFNvdXJjZSgpLFxuXHRcdFx0dmVydGljYWxGb3JtYXRpb24gPSBhZ2dyZWdhdGUuZ2V0VmVydGljYWxGb3JtYXRpb24oKTtcblxuXHRcdHJldHVybiBuZXcgU3RydWN0dXJlUmVhZE1vZGVsUm9vdChcblx0XHRcdGFnZ3JlZ2F0ZS5nZXRJZCgpLnRvUmVhZE1vZGVsUm9vdElkKCksXG5cdFx0XHR0aGlzLnBhZ2luZ0NvbnZlcnRlci5jb252ZXJ0KHBhZ2luZ0FnZ3JlZ2F0ZSksXG5cdFx0XHR0aGlzLmNvbnZlcnRTb3VyY2Uob3JpZ2luSXRlbUVudGl0aWVzKSxcblx0XHRcdHRoaXMuc291cmNlQ29udmVydGVyLmNvbnZlcnQoc291cmNlQ29vcmRpbmF0b3IpLFxuXHRcdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbkNvbnZlcnRlci5jb252ZXJ0KHZlcnRpY2FsRm9ybWF0aW9uKVxuXHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRTb3VyY2Uoc291cmNlOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IEFycmF5PEl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gc291cmNlLm1hcCgob3JpZ2luSXRlbTogT3JpZ2luSXRlbUVudGl0eSkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBJdGVtRW50aXR5KG9yaWdpbkl0ZW0ucmF3RGF0YSwgb3JpZ2luSXRlbS5nZXRQb3NpdGlvbigpLCBvcmlnaW5JdGVtLmdldElkKCkudG9TdHJpbmcoKSwgb3JpZ2luSXRlbS5nZXRWZXJzaW9uKCkpO1xuXHRcdH0pO1xuXHR9XG59XG4iXX0=