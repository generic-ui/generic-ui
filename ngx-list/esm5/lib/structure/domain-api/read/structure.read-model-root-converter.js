/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { PagingConverter } from '../../../../structure/paging/domain-api/read/paging.converter';
import { SourceConverter } from '../../../../structure/source/domain-api/source.converter';
import { VerticalFormationConverter } from '../vertical-formation/vertical-formation.converter';
import { StructureReadModelRoot } from './structure.read-model-root';
import { ItemEntity } from '../../../../structure/source/domain/core/item/item.entity';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdC1jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluLWFwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QtY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUNoRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDM0YsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFFaEcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFckUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBR3ZGO0lBR0MseUNBQW9CLGVBQWdDLEVBQ3pDLGVBQWdDLEVBQ2hDLDBCQUFzRDtRQUY3QyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDekMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBNEI7SUFDakUsQ0FBQzs7Ozs7SUFFRCxpREFBTzs7OztJQUFQLFVBQVEsU0FBNkI7O1lBRTlCLGVBQWUsR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFOztZQUM1QyxrQkFBa0IsR0FBRyxTQUFTLENBQUMsV0FBVyxFQUFFOztZQUM1QyxpQkFBaUIsR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFOztZQUN6QyxpQkFBaUIsR0FBRyxTQUFTLENBQUMsb0JBQW9CLEVBQUU7UUFFckQsT0FBTyxJQUFJLHNCQUFzQixDQUNoQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsRUFDckMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQzdDLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsRUFDdEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsRUFDL0MsSUFBSSxDQUFDLDBCQUEwQixDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUMxRCxDQUFDO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sdURBQWE7Ozs7O0lBQXJCLFVBQXNCLE1BQStCO1FBQ3BELE9BQU8sTUFBTSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFDLFVBQTRCO1lBQzlDLE9BQU8sSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsV0FBVyxFQUFFLEVBQUUsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQzdILENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Z0JBNUJELFVBQVU7Ozs7Z0JBVEYsZUFBZTtnQkFDZixlQUFlO2dCQUNmLDBCQUEwQjs7SUFvQ25DLHNDQUFDO0NBQUEsQUE3QkQsSUE2QkM7U0E1QlksK0JBQStCOzs7Ozs7SUFFL0IsMERBQXdDOzs7OztJQUNqRCwwREFBd0M7Ozs7O0lBQ3hDLHFFQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGFnaW5nQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL3BhZ2luZy9kb21haW4tYXBpL3JlYWQvcGFnaW5nLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBTb3VyY2VDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2RvbWFpbi1hcGkvc291cmNlLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbkNvbnZlcnRlciB9IGZyb20gJy4uL3ZlcnRpY2FsLWZvcm1hdGlvbi92ZXJ0aWNhbC1mb3JtYXRpb24uY29udmVydGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290IH0gZnJvbSAnLi9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290JztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2RvbWFpbi9jb3JlL2l0ZW0vaXRlbS5lbnRpdHknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290Q29udmVydGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2luZ0NvbnZlcnRlcjogUGFnaW5nQ29udmVydGVyLFxuXHRcdFx0XHRwcml2YXRlIHNvdXJjZUNvbnZlcnRlcjogU291cmNlQ29udmVydGVyLFxuXHRcdFx0XHRwcml2YXRlIHZlcnRpY2FsRm9ybWF0aW9uQ29udmVydGVyOiBWZXJ0aWNhbEZvcm1hdGlvbkNvbnZlcnRlcikge1xuXHR9XG5cblx0Y29udmVydChhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSk6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3Qge1xuXG5cdFx0Y29uc3QgcGFnaW5nQWdncmVnYXRlID0gYWdncmVnYXRlLmdldFBhZ2luZygpLFxuXHRcdFx0b3JpZ2luSXRlbUVudGl0aWVzID0gYWdncmVnYXRlLmdldEVudGl0aWVzKCksXG5cdFx0XHRzb3VyY2VDb29yZGluYXRvciA9IGFnZ3JlZ2F0ZS5nZXRTb3VyY2UoKSxcblx0XHRcdHZlcnRpY2FsRm9ybWF0aW9uID0gYWdncmVnYXRlLmdldFZlcnRpY2FsRm9ybWF0aW9uKCk7XG5cblx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QoXG5cdFx0XHRhZ2dyZWdhdGUuZ2V0SWQoKS50b1JlYWRNb2RlbFJvb3RJZCgpLFxuXHRcdFx0dGhpcy5wYWdpbmdDb252ZXJ0ZXIuY29udmVydChwYWdpbmdBZ2dyZWdhdGUpLFxuXHRcdFx0dGhpcy5jb252ZXJ0U291cmNlKG9yaWdpbkl0ZW1FbnRpdGllcyksXG5cdFx0XHR0aGlzLnNvdXJjZUNvbnZlcnRlci5jb252ZXJ0KHNvdXJjZUNvb3JkaW5hdG9yKSxcblx0XHRcdHRoaXMudmVydGljYWxGb3JtYXRpb25Db252ZXJ0ZXIuY29udmVydCh2ZXJ0aWNhbEZvcm1hdGlvbilcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0U291cmNlKHNvdXJjZTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiBBcnJheTxJdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIHNvdXJjZS5tYXAoKG9yaWdpbkl0ZW06IE9yaWdpbkl0ZW1FbnRpdHkpID0+IHtcblx0XHRcdHJldHVybiBuZXcgSXRlbUVudGl0eShvcmlnaW5JdGVtLnJhd0RhdGEsIG9yaWdpbkl0ZW0uZ2V0UG9zaXRpb24oKSwgb3JpZ2luSXRlbS5nZXRJZCgpLnRvU3RyaW5nKCksIG9yaWdpbkl0ZW0uZ2V0VmVyc2lvbigpKTtcblx0XHR9KTtcblx0fVxufVxuIl19