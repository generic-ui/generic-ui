/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { PagingConverter } from '../../../paging/domain-api/read/paging.converter';
import { SourceConverter } from '../../../source/domain-api/source.converter';
import { VerticalFormationConverter } from '../vertical-formation/vertical-formation.converter';
import { StructureReadModelRoot } from './structure.read-model-root';
import { ItemEntity } from '../../../source/domain/core/item/item.entity';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdC1jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9jb3JlL2RvbWFpbi1hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290LWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDbkYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRWhHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXJFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUcxRTtJQUdDLHlDQUFvQixlQUFnQyxFQUN6QyxlQUFnQyxFQUNoQywwQkFBc0Q7UUFGN0Msb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ3pDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQywrQkFBMEIsR0FBMUIsMEJBQTBCLENBQTRCO0lBQ2pFLENBQUM7Ozs7O0lBRUQsaURBQU87Ozs7SUFBUCxVQUFRLFNBQTZCOztZQUU5QixlQUFlLEdBQUcsU0FBUyxDQUFDLFNBQVMsRUFBRTs7WUFDNUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDLFdBQVcsRUFBRTs7WUFDNUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLFNBQVMsRUFBRTs7WUFDekMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLG9CQUFvQixFQUFFO1FBRXJELE9BQU8sSUFBSSxzQkFBc0IsQ0FDaEMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLGlCQUFpQixFQUFFLEVBQ3JDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxFQUM3QyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLEVBQ3RDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEVBQy9DLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FDMUQsQ0FBQztJQUNILENBQUM7Ozs7OztJQUVPLHVEQUFhOzs7OztJQUFyQixVQUFzQixNQUErQjtRQUNwRCxPQUFPLE1BQU0sQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxVQUE0QjtZQUM5QyxPQUFPLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLFdBQVcsRUFBRSxFQUFFLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUM3SCxDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7O2dCQTVCRCxVQUFVOzs7O2dCQVRGLGVBQWU7Z0JBQ2YsZUFBZTtnQkFDZiwwQkFBMEI7O0lBb0NuQyxzQ0FBQztDQUFBLEFBN0JELElBNkJDO1NBNUJZLCtCQUErQjs7Ozs7O0lBRS9CLDBEQUF3Qzs7Ozs7SUFDakQsMERBQXdDOzs7OztJQUN4QyxxRUFBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBhZ2luZ0NvbnZlcnRlciB9IGZyb20gJy4uLy4uLy4uL3BhZ2luZy9kb21haW4tYXBpL3JlYWQvcGFnaW5nLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBTb3VyY2VDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvZG9tYWluLWFwaS9zb3VyY2UuY29udmVydGVyJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uQ29udmVydGVyIH0gZnJvbSAnLi4vdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbi5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdCB9IGZyb20gJy4vc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdCc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvZG9tYWluL2NvcmUvaXRlbS9pdGVtLmVudGl0eSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RDb252ZXJ0ZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnaW5nQ29udmVydGVyOiBQYWdpbmdDb252ZXJ0ZXIsXG5cdFx0XHRcdHByaXZhdGUgc291cmNlQ29udmVydGVyOiBTb3VyY2VDb252ZXJ0ZXIsXG5cdFx0XHRcdHByaXZhdGUgdmVydGljYWxGb3JtYXRpb25Db252ZXJ0ZXI6IFZlcnRpY2FsRm9ybWF0aW9uQ29udmVydGVyKSB7XG5cdH1cblxuXHRjb252ZXJ0KGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlKTogU3RydWN0dXJlUmVhZE1vZGVsUm9vdCB7XG5cblx0XHRjb25zdCBwYWdpbmdBZ2dyZWdhdGUgPSBhZ2dyZWdhdGUuZ2V0UGFnaW5nKCksXG5cdFx0XHRvcmlnaW5JdGVtRW50aXRpZXMgPSBhZ2dyZWdhdGUuZ2V0RW50aXRpZXMoKSxcblx0XHRcdHNvdXJjZUNvb3JkaW5hdG9yID0gYWdncmVnYXRlLmdldFNvdXJjZSgpLFxuXHRcdFx0dmVydGljYWxGb3JtYXRpb24gPSBhZ2dyZWdhdGUuZ2V0VmVydGljYWxGb3JtYXRpb24oKTtcblxuXHRcdHJldHVybiBuZXcgU3RydWN0dXJlUmVhZE1vZGVsUm9vdChcblx0XHRcdGFnZ3JlZ2F0ZS5nZXRJZCgpLnRvUmVhZE1vZGVsUm9vdElkKCksXG5cdFx0XHR0aGlzLnBhZ2luZ0NvbnZlcnRlci5jb252ZXJ0KHBhZ2luZ0FnZ3JlZ2F0ZSksXG5cdFx0XHR0aGlzLmNvbnZlcnRTb3VyY2Uob3JpZ2luSXRlbUVudGl0aWVzKSxcblx0XHRcdHRoaXMuc291cmNlQ29udmVydGVyLmNvbnZlcnQoc291cmNlQ29vcmRpbmF0b3IpLFxuXHRcdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbkNvbnZlcnRlci5jb252ZXJ0KHZlcnRpY2FsRm9ybWF0aW9uKVxuXHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRTb3VyY2Uoc291cmNlOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IEFycmF5PEl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gc291cmNlLm1hcCgob3JpZ2luSXRlbTogT3JpZ2luSXRlbUVudGl0eSkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBJdGVtRW50aXR5KG9yaWdpbkl0ZW0ucmF3RGF0YSwgb3JpZ2luSXRlbS5nZXRQb3NpdGlvbigpLCBvcmlnaW5JdGVtLmdldElkKCkudG9TdHJpbmcoKSwgb3JpZ2luSXRlbS5nZXRWZXJzaW9uKCkpO1xuXHRcdH0pO1xuXHR9XG59XG4iXX0=