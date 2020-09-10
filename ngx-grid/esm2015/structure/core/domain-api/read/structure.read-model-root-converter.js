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
            return new ItemEntity(originItem.rawData, originItem.getPosition(), originItem.getId().toString(), originItem.getVersion());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdC1jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9jb3JlL2RvbWFpbi1hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290LWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDbkYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRWhHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXJFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUkxRSxNQUFNLE9BQU8sK0JBQStCOzs7Ozs7SUFFM0MsWUFBb0IsZUFBZ0MsRUFDekMsZUFBZ0MsRUFDaEMsMEJBQXNEO1FBRjdDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUN6QyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtJQUNqRSxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxTQUE2Qjs7Y0FFOUIsZUFBZSxHQUFHLFNBQVMsQ0FBQyxTQUFTLEVBQUU7O2NBQzVDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxXQUFXLEVBQUU7O2NBQzVDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxTQUFTLEVBQUU7O2NBQ3pDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxvQkFBb0IsRUFBRTtRQUVyRCxPQUFPLElBQUksc0JBQXNCLENBQ2hDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxFQUNyQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFDN0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxFQUN0QyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUMvQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQzFELENBQUM7SUFDSCxDQUFDOzs7Ozs7SUFFTyxhQUFhLENBQUMsTUFBK0I7UUFDcEQsT0FBTyxNQUFNLENBQUMsR0FBRzs7OztRQUFDLENBQUMsVUFBNEIsRUFBRSxFQUFFO1lBQ2xELE9BQU8sSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsV0FBVyxFQUFFLEVBQUUsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQzdILENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7O1lBNUJELFVBQVU7Ozs7WUFURixlQUFlO1lBQ2YsZUFBZTtZQUNmLDBCQUEwQjs7Ozs7OztJQVV0QiwwREFBd0M7Ozs7O0lBQ2pELDBEQUF3Qzs7Ozs7SUFDeEMscUVBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQYWdpbmdDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi8uLi9wYWdpbmcvZG9tYWluLWFwaS9yZWFkL3BhZ2luZy5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU291cmNlQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2RvbWFpbi1hcGkvc291cmNlLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbkNvbnZlcnRlciB9IGZyb20gJy4uL3ZlcnRpY2FsLWZvcm1hdGlvbi92ZXJ0aWNhbC1mb3JtYXRpb24uY29udmVydGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QgfSBmcm9tICcuL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9kb21haW4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2RvbWFpbi9jb3JlL2l0ZW0vaXRlbS5lbnRpdHknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290Q29udmVydGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2luZ0NvbnZlcnRlcjogUGFnaW5nQ29udmVydGVyLFxuXHRcdFx0XHRwcml2YXRlIHNvdXJjZUNvbnZlcnRlcjogU291cmNlQ29udmVydGVyLFxuXHRcdFx0XHRwcml2YXRlIHZlcnRpY2FsRm9ybWF0aW9uQ29udmVydGVyOiBWZXJ0aWNhbEZvcm1hdGlvbkNvbnZlcnRlcikge1xuXHR9XG5cblx0Y29udmVydChhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSk6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3Qge1xuXG5cdFx0Y29uc3QgcGFnaW5nQWdncmVnYXRlID0gYWdncmVnYXRlLmdldFBhZ2luZygpLFxuXHRcdFx0b3JpZ2luSXRlbUVudGl0aWVzID0gYWdncmVnYXRlLmdldEVudGl0aWVzKCksXG5cdFx0XHRzb3VyY2VDb29yZGluYXRvciA9IGFnZ3JlZ2F0ZS5nZXRTb3VyY2UoKSxcblx0XHRcdHZlcnRpY2FsRm9ybWF0aW9uID0gYWdncmVnYXRlLmdldFZlcnRpY2FsRm9ybWF0aW9uKCk7XG5cblx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QoXG5cdFx0XHRhZ2dyZWdhdGUuZ2V0SWQoKS50b1JlYWRNb2RlbFJvb3RJZCgpLFxuXHRcdFx0dGhpcy5wYWdpbmdDb252ZXJ0ZXIuY29udmVydChwYWdpbmdBZ2dyZWdhdGUpLFxuXHRcdFx0dGhpcy5jb252ZXJ0U291cmNlKG9yaWdpbkl0ZW1FbnRpdGllcyksXG5cdFx0XHR0aGlzLnNvdXJjZUNvbnZlcnRlci5jb252ZXJ0KHNvdXJjZUNvb3JkaW5hdG9yKSxcblx0XHRcdHRoaXMudmVydGljYWxGb3JtYXRpb25Db252ZXJ0ZXIuY29udmVydCh2ZXJ0aWNhbEZvcm1hdGlvbilcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0U291cmNlKHNvdXJjZTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiBBcnJheTxJdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIHNvdXJjZS5tYXAoKG9yaWdpbkl0ZW06IE9yaWdpbkl0ZW1FbnRpdHkpID0+IHtcblx0XHRcdHJldHVybiBuZXcgSXRlbUVudGl0eShvcmlnaW5JdGVtLnJhd0RhdGEsIG9yaWdpbkl0ZW0uZ2V0UG9zaXRpb24oKSwgb3JpZ2luSXRlbS5nZXRJZCgpLnRvU3RyaW5nKCksIG9yaWdpbkl0ZW0uZ2V0VmVyc2lvbigpKTtcblx0XHR9KTtcblx0fVxufVxuIl19