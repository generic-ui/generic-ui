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
export class StructureReadModelRootConverter {
    /**
     * @param {?} pagingConverter
     * @param {?} sourceConverter
     * @param {?} verticalFormationConverter
     */
    constructor(pagingConverter, sourceConverter, verticalFormationConverter) {
        this.pagingConverter = pagingConverter;
        this.sourceConverter = sourceConverter;
        this.verticalFormationConverter = verticalFormationConverter;
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    convert(aggregate) {
        /** @type {?} */
        const pagingAggregate = aggregate.getPaging();
        /** @type {?} */
        const originItemEntities = aggregate.getEntities();
        /** @type {?} */
        const sourceCoordinator = aggregate.getSource();
        /** @type {?} */
        const verticalFormation = aggregate.getVerticalFormation();
        return new StructureReadModelRoot(aggregate.getId().toReadModelRootId(), this.pagingConverter.convert(pagingAggregate), this.convertSource(originItemEntities), this.sourceConverter.convert(sourceCoordinator), this.verticalFormationConverter.convert(verticalFormation));
    }
    /**
     * @private
     * @param {?} source
     * @return {?}
     */
    convertSource(source) {
        return source.map((/**
         * @param {?} originItem
         * @return {?}
         */
        (originItem) => {
            return new ItemEntity(originItem.sourceItem, originItem.getPosition(), originItem.getId().toString(), originItem.getVersion());
        }));
    }
}
StructureReadModelRootConverter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureReadModelRootConverter.ctorParameters = () => [
    { type: PagingConverter },
    { type: SourceConverter },
    { type: VerticalFormationConverter }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdC1jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2NvcmUvYXBpL3JlYWQvc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdC1jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUVsSCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVyRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFJbEYsTUFBTSxPQUFPLCtCQUErQjs7Ozs7O0lBRTNDLFlBQW9CLGVBQWdDLEVBQ3pDLGVBQWdDLEVBQ2hDLDBCQUFzRDtRQUY3QyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDekMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBNEI7SUFDakUsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsU0FBNkI7O2NBRTlCLGVBQWUsR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFOztjQUM1QyxrQkFBa0IsR0FBRyxTQUFTLENBQUMsV0FBVyxFQUFFOztjQUM1QyxpQkFBaUIsR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFOztjQUN6QyxpQkFBaUIsR0FBRyxTQUFTLENBQUMsb0JBQW9CLEVBQUU7UUFFckQsT0FBTyxJQUFJLHNCQUFzQixDQUNoQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsRUFDckMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQzdDLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsRUFDdEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsRUFDL0MsSUFBSSxDQUFDLDBCQUEwQixDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUMxRCxDQUFDO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sYUFBYSxDQUFDLE1BQStCO1FBQ3BELE9BQU8sTUFBTSxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLFVBQTRCLEVBQUUsRUFBRTtZQUNsRCxPQUFPLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLFdBQVcsRUFBRSxFQUFFLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUNoSSxDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7OztZQTVCRCxVQUFVOzs7O1lBVEYsZUFBZTtZQUNmLGVBQWU7WUFDZiwwQkFBMEI7Ozs7Ozs7SUFVdEIsMERBQXdDOzs7OztJQUNqRCwwREFBd0M7Ozs7O0lBQ3hDLHFFQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGFnaW5nQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vcGFnaW5nL2NvcmUvYXBpL3JlYWQvcGFnaW5nLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBTb3VyY2VDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvc291cmNlLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbkNvbnZlcnRlciB9IGZyb20gJy4uLy4uLy4uLy4uL3ZlcnRpY2FsLWZvcm1hdGlvbi9jb3JlL2FwaS92ZXJ0aWNhbC1mb3JtYXRpb24uY29udmVydGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdCB9IGZyb20gJy4vc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdCc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9jb3JlL2l0ZW0vaXRlbS5lbnRpdHknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290Q29udmVydGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2luZ0NvbnZlcnRlcjogUGFnaW5nQ29udmVydGVyLFxuXHRcdFx0XHRwcml2YXRlIHNvdXJjZUNvbnZlcnRlcjogU291cmNlQ29udmVydGVyLFxuXHRcdFx0XHRwcml2YXRlIHZlcnRpY2FsRm9ybWF0aW9uQ29udmVydGVyOiBWZXJ0aWNhbEZvcm1hdGlvbkNvbnZlcnRlcikge1xuXHR9XG5cblx0Y29udmVydChhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSk6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3Qge1xuXG5cdFx0Y29uc3QgcGFnaW5nQWdncmVnYXRlID0gYWdncmVnYXRlLmdldFBhZ2luZygpLFxuXHRcdFx0b3JpZ2luSXRlbUVudGl0aWVzID0gYWdncmVnYXRlLmdldEVudGl0aWVzKCksXG5cdFx0XHRzb3VyY2VDb29yZGluYXRvciA9IGFnZ3JlZ2F0ZS5nZXRTb3VyY2UoKSxcblx0XHRcdHZlcnRpY2FsRm9ybWF0aW9uID0gYWdncmVnYXRlLmdldFZlcnRpY2FsRm9ybWF0aW9uKCk7XG5cblx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QoXG5cdFx0XHRhZ2dyZWdhdGUuZ2V0SWQoKS50b1JlYWRNb2RlbFJvb3RJZCgpLFxuXHRcdFx0dGhpcy5wYWdpbmdDb252ZXJ0ZXIuY29udmVydChwYWdpbmdBZ2dyZWdhdGUpLFxuXHRcdFx0dGhpcy5jb252ZXJ0U291cmNlKG9yaWdpbkl0ZW1FbnRpdGllcyksXG5cdFx0XHR0aGlzLnNvdXJjZUNvbnZlcnRlci5jb252ZXJ0KHNvdXJjZUNvb3JkaW5hdG9yKSxcblx0XHRcdHRoaXMudmVydGljYWxGb3JtYXRpb25Db252ZXJ0ZXIuY29udmVydCh2ZXJ0aWNhbEZvcm1hdGlvbilcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0U291cmNlKHNvdXJjZTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiBBcnJheTxJdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIHNvdXJjZS5tYXAoKG9yaWdpbkl0ZW06IE9yaWdpbkl0ZW1FbnRpdHkpID0+IHtcblx0XHRcdHJldHVybiBuZXcgSXRlbUVudGl0eShvcmlnaW5JdGVtLnNvdXJjZUl0ZW0sIG9yaWdpbkl0ZW0uZ2V0UG9zaXRpb24oKSwgb3JpZ2luSXRlbS5nZXRJZCgpLnRvU3RyaW5nKCksIG9yaWdpbkl0ZW0uZ2V0VmVyc2lvbigpKTtcblx0XHR9KTtcblx0fVxufVxuIl19