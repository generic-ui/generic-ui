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
export class StructureReadModelRootConverter {
    /**
     * @param {?} formationConverter
     * @param {?} pagingConverter
     * @param {?} sourceConverter
     * @param {?} verticalFormationConverter
     */
    constructor(formationConverter, pagingConverter, sourceConverter, verticalFormationConverter) {
        this.formationConverter = formationConverter;
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
        const formationAggregate = aggregate.getFormation();
        /** @type {?} */
        const pagingAggregate = aggregate.getPaging();
        /** @type {?} */
        const originItemEntities = aggregate.getEntities();
        /** @type {?} */
        const sourceCoordinator = aggregate.getSource();
        /** @type {?} */
        const verticalFormation = aggregate.getVerticalFormation();
        return new StructureReadModelRoot(aggregate.getId().toReadModelRootId(), this.formationConverter.convert(formationAggregate), this.pagingConverter.convert(pagingAggregate), this.convertSource(originItemEntities), this.sourceConverter.convert(sourceCoordinator), this.verticalFormationConverter.convert(verticalFormation));
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
    { type: FormationConverter },
    { type: PagingConverter },
    { type: SourceConverter },
    { type: VerticalFormationConverter }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdC1jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluLWFwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QtY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUNoRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFFaEcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFckUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBSTdELE1BQU0sT0FBTywrQkFBK0I7Ozs7Ozs7SUFFM0MsWUFBb0Isa0JBQXNDLEVBQy9DLGVBQWdDLEVBQ2hDLGVBQWdDLEVBQ2hDLDBCQUFzRDtRQUg3Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQy9DLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtJQUNqRSxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxTQUE2Qjs7Y0FFOUIsa0JBQWtCLEdBQUcsU0FBUyxDQUFDLFlBQVksRUFBRTs7Y0FDbEQsZUFBZSxHQUFHLFNBQVMsQ0FBQyxTQUFTLEVBQUU7O2NBQ3ZDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxXQUFXLEVBQUU7O2NBQzVDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxTQUFTLEVBQUU7O2NBQ3pDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxvQkFBb0IsRUFBRTtRQUVyRCxPQUFPLElBQUksc0JBQXNCLENBQ2hDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxFQUNyQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLEVBQ25ELElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxFQUM3QyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLEVBQ3RDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEVBQy9DLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FDMUQsQ0FBQztJQUNILENBQUM7Ozs7OztJQUVPLGFBQWEsQ0FBQyxNQUErQjtRQUNwRCxPQUFPLE1BQU0sQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxVQUE0QixFQUFFLEVBQUU7WUFDbEQsT0FBTyxJQUFJLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxXQUFXLEVBQUUsRUFBRSxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDN0gsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7WUEvQkQsVUFBVTs7OztZQVZGLGtCQUFrQjtZQUNsQixlQUFlO1lBQ2YsZUFBZTtZQUNmLDBCQUEwQjs7Ozs7OztJQVV0Qiw2REFBOEM7Ozs7O0lBQ3ZELDBEQUF3Qzs7Ozs7SUFDeEMsMERBQXdDOzs7OztJQUN4QyxxRUFBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZvcm1hdGlvbkNvbnZlcnRlciB9IGZyb20gJy4uL2Zvcm1hdGlvbi9yZWFkL2Zvcm1hdGlvbi5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgUGFnaW5nQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL3BhZ2luZy9kb21haW4tYXBpL3JlYWQvcGFnaW5nLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBTb3VyY2VDb252ZXJ0ZXIgfSBmcm9tICcuLi9zb3VyY2Uvc291cmNlLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbkNvbnZlcnRlciB9IGZyb20gJy4uL3ZlcnRpY2FsLWZvcm1hdGlvbi92ZXJ0aWNhbC1mb3JtYXRpb24uY29udmVydGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290IH0gZnJvbSAnLi9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290JztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi9kb21haW4vc291cmNlL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zb3VyY2UvaXRlbS5lbnRpdHknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290Q29udmVydGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1hdGlvbkNvbnZlcnRlcjogRm9ybWF0aW9uQ29udmVydGVyLFxuXHRcdFx0XHRwcml2YXRlIHBhZ2luZ0NvbnZlcnRlcjogUGFnaW5nQ29udmVydGVyLFxuXHRcdFx0XHRwcml2YXRlIHNvdXJjZUNvbnZlcnRlcjogU291cmNlQ29udmVydGVyLFxuXHRcdFx0XHRwcml2YXRlIHZlcnRpY2FsRm9ybWF0aW9uQ29udmVydGVyOiBWZXJ0aWNhbEZvcm1hdGlvbkNvbnZlcnRlcikge1xuXHR9XG5cblx0Y29udmVydChhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSk6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3Qge1xuXG5cdFx0Y29uc3QgZm9ybWF0aW9uQWdncmVnYXRlID0gYWdncmVnYXRlLmdldEZvcm1hdGlvbigpLFxuXHRcdFx0cGFnaW5nQWdncmVnYXRlID0gYWdncmVnYXRlLmdldFBhZ2luZygpLFxuXHRcdFx0b3JpZ2luSXRlbUVudGl0aWVzID0gYWdncmVnYXRlLmdldEVudGl0aWVzKCksXG5cdFx0XHRzb3VyY2VDb29yZGluYXRvciA9IGFnZ3JlZ2F0ZS5nZXRTb3VyY2UoKSxcblx0XHRcdHZlcnRpY2FsRm9ybWF0aW9uID0gYWdncmVnYXRlLmdldFZlcnRpY2FsRm9ybWF0aW9uKCk7XG5cblx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QoXG5cdFx0XHRhZ2dyZWdhdGUuZ2V0SWQoKS50b1JlYWRNb2RlbFJvb3RJZCgpLFxuXHRcdFx0dGhpcy5mb3JtYXRpb25Db252ZXJ0ZXIuY29udmVydChmb3JtYXRpb25BZ2dyZWdhdGUpLFxuXHRcdFx0dGhpcy5wYWdpbmdDb252ZXJ0ZXIuY29udmVydChwYWdpbmdBZ2dyZWdhdGUpLFxuXHRcdFx0dGhpcy5jb252ZXJ0U291cmNlKG9yaWdpbkl0ZW1FbnRpdGllcyksXG5cdFx0XHR0aGlzLnNvdXJjZUNvbnZlcnRlci5jb252ZXJ0KHNvdXJjZUNvb3JkaW5hdG9yKSxcblx0XHRcdHRoaXMudmVydGljYWxGb3JtYXRpb25Db252ZXJ0ZXIuY29udmVydCh2ZXJ0aWNhbEZvcm1hdGlvbilcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0U291cmNlKHNvdXJjZTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiBBcnJheTxJdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIHNvdXJjZS5tYXAoKG9yaWdpbkl0ZW06IE9yaWdpbkl0ZW1FbnRpdHkpID0+IHtcblx0XHRcdHJldHVybiBuZXcgSXRlbUVudGl0eShvcmlnaW5JdGVtLnJhd0RhdGEsIG9yaWdpbkl0ZW0uZ2V0UG9zaXRpb24oKSwgb3JpZ2luSXRlbS5nZXRJZCgpLnRvU3RyaW5nKCksIG9yaWdpbkl0ZW0uZ2V0VmVyc2lvbigpKTtcblx0XHR9KTtcblx0fVxufVxuIl19