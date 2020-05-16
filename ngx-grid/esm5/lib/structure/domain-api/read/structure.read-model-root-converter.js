/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FormationConverter } from '../formation/read/formation.converter';
import { PagingConverter } from '../../../../structure/paging/domain-api/read/paging.converter';
import { SourceConverter } from '../source/source.converter';
import { VerticalFormationConverter } from '../vertical-formation/vertical-formation.converter';
import { StructureReadModelRoot } from './structure.read-model-root';
import { ItemEntity } from '../../domain/source/item.entity';
var StructureReadModelRootConverter = /** @class */ (function () {
    function StructureReadModelRootConverter(formationConverter, pagingConverter, sourceConverter, verticalFormationConverter) {
        this.formationConverter = formationConverter;
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
        var formationAggregate = aggregate.getFormation();
        /** @type {?} */
        var pagingAggregate = aggregate.getPaging();
        /** @type {?} */
        var originItemEntities = aggregate.getEntities();
        /** @type {?} */
        var sourceCoordinator = aggregate.getSource();
        /** @type {?} */
        var verticalFormation = aggregate.getVerticalFormation();
        return new StructureReadModelRoot(aggregate.getId().toReadModelRootId(), this.formationConverter.convert(formationAggregate), this.pagingConverter.convert(pagingAggregate), this.convertSource(originItemEntities), this.sourceConverter.convert(sourceCoordinator), this.verticalFormationConverter.convert(verticalFormation));
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
        { type: FormationConverter },
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
    StructureReadModelRootConverter.prototype.formationConverter;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdC1jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluLWFwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QtY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUNoRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFFaEcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFckUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRzdEO0lBR0MseUNBQW9CLGtCQUFzQyxFQUMvQyxlQUFnQyxFQUNoQyxlQUFnQyxFQUNoQywwQkFBc0Q7UUFIN0MsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUMvQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBNEI7SUFDakUsQ0FBQzs7Ozs7SUFFRCxpREFBTzs7OztJQUFQLFVBQVEsU0FBNkI7O1lBRTlCLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxZQUFZLEVBQUU7O1lBQ2xELGVBQWUsR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFOztZQUN2QyxrQkFBa0IsR0FBRyxTQUFTLENBQUMsV0FBVyxFQUFFOztZQUM1QyxpQkFBaUIsR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFOztZQUN6QyxpQkFBaUIsR0FBRyxTQUFTLENBQUMsb0JBQW9CLEVBQUU7UUFFckQsT0FBTyxJQUFJLHNCQUFzQixDQUNoQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsRUFDckMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxFQUNuRCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFDN0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxFQUN0QyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUMvQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQzFELENBQUM7SUFDSCxDQUFDOzs7Ozs7SUFFTyx1REFBYTs7Ozs7SUFBckIsVUFBc0IsTUFBK0I7UUFDcEQsT0FBTyxNQUFNLENBQUMsR0FBRzs7OztRQUFDLFVBQUMsVUFBNEI7WUFDOUMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxXQUFXLEVBQUUsRUFBRSxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDN0gsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOztnQkEvQkQsVUFBVTs7OztnQkFWRixrQkFBa0I7Z0JBQ2xCLGVBQWU7Z0JBQ2YsZUFBZTtnQkFDZiwwQkFBMEI7O0lBdUNuQyxzQ0FBQztDQUFBLEFBaENELElBZ0NDO1NBL0JZLCtCQUErQjs7Ozs7O0lBRS9CLDZEQUE4Qzs7Ozs7SUFDdkQsMERBQXdDOzs7OztJQUN4QywwREFBd0M7Ozs7O0lBQ3hDLHFFQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRm9ybWF0aW9uQ29udmVydGVyIH0gZnJvbSAnLi4vZm9ybWF0aW9uL3JlYWQvZm9ybWF0aW9uLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBQYWdpbmdDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvcGFnaW5nL2RvbWFpbi1hcGkvcmVhZC9wYWdpbmcuY29udmVydGVyJztcbmltcG9ydCB7IFNvdXJjZUNvbnZlcnRlciB9IGZyb20gJy4uL3NvdXJjZS9zb3VyY2UuY29udmVydGVyJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uQ29udmVydGVyIH0gZnJvbSAnLi4vdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbi5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QgfSBmcm9tICcuL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zb3VyY2Uvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3NvdXJjZS9pdGVtLmVudGl0eSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RDb252ZXJ0ZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybWF0aW9uQ29udmVydGVyOiBGb3JtYXRpb25Db252ZXJ0ZXIsXG5cdFx0XHRcdHByaXZhdGUgcGFnaW5nQ29udmVydGVyOiBQYWdpbmdDb252ZXJ0ZXIsXG5cdFx0XHRcdHByaXZhdGUgc291cmNlQ29udmVydGVyOiBTb3VyY2VDb252ZXJ0ZXIsXG5cdFx0XHRcdHByaXZhdGUgdmVydGljYWxGb3JtYXRpb25Db252ZXJ0ZXI6IFZlcnRpY2FsRm9ybWF0aW9uQ29udmVydGVyKSB7XG5cdH1cblxuXHRjb252ZXJ0KGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlKTogU3RydWN0dXJlUmVhZE1vZGVsUm9vdCB7XG5cblx0XHRjb25zdCBmb3JtYXRpb25BZ2dyZWdhdGUgPSBhZ2dyZWdhdGUuZ2V0Rm9ybWF0aW9uKCksXG5cdFx0XHRwYWdpbmdBZ2dyZWdhdGUgPSBhZ2dyZWdhdGUuZ2V0UGFnaW5nKCksXG5cdFx0XHRvcmlnaW5JdGVtRW50aXRpZXMgPSBhZ2dyZWdhdGUuZ2V0RW50aXRpZXMoKSxcblx0XHRcdHNvdXJjZUNvb3JkaW5hdG9yID0gYWdncmVnYXRlLmdldFNvdXJjZSgpLFxuXHRcdFx0dmVydGljYWxGb3JtYXRpb24gPSBhZ2dyZWdhdGUuZ2V0VmVydGljYWxGb3JtYXRpb24oKTtcblxuXHRcdHJldHVybiBuZXcgU3RydWN0dXJlUmVhZE1vZGVsUm9vdChcblx0XHRcdGFnZ3JlZ2F0ZS5nZXRJZCgpLnRvUmVhZE1vZGVsUm9vdElkKCksXG5cdFx0XHR0aGlzLmZvcm1hdGlvbkNvbnZlcnRlci5jb252ZXJ0KGZvcm1hdGlvbkFnZ3JlZ2F0ZSksXG5cdFx0XHR0aGlzLnBhZ2luZ0NvbnZlcnRlci5jb252ZXJ0KHBhZ2luZ0FnZ3JlZ2F0ZSksXG5cdFx0XHR0aGlzLmNvbnZlcnRTb3VyY2Uob3JpZ2luSXRlbUVudGl0aWVzKSxcblx0XHRcdHRoaXMuc291cmNlQ29udmVydGVyLmNvbnZlcnQoc291cmNlQ29vcmRpbmF0b3IpLFxuXHRcdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbkNvbnZlcnRlci5jb252ZXJ0KHZlcnRpY2FsRm9ybWF0aW9uKVxuXHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRTb3VyY2Uoc291cmNlOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IEFycmF5PEl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gc291cmNlLm1hcCgob3JpZ2luSXRlbTogT3JpZ2luSXRlbUVudGl0eSkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBJdGVtRW50aXR5KG9yaWdpbkl0ZW0ucmF3RGF0YSwgb3JpZ2luSXRlbS5nZXRQb3NpdGlvbigpLCBvcmlnaW5JdGVtLmdldElkKCkudG9TdHJpbmcoKSwgb3JpZ2luSXRlbS5nZXRWZXJzaW9uKCkpO1xuXHRcdH0pO1xuXHR9XG59XG4iXX0=