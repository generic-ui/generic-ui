/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FormationConverter } from '../formation/read/formation.converter';
import { PagingConverter } from '../paging/read/paging.converter';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdC1jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS1hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290LWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRWhHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXJFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUk3RCxNQUFNLE9BQU8sK0JBQStCOzs7Ozs7O0lBRTNDLFlBQW9CLGtCQUFzQyxFQUMvQyxlQUFnQyxFQUNoQyxlQUFnQyxFQUNoQywwQkFBc0Q7UUFIN0MsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUMvQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBNEI7SUFDakUsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsU0FBNkI7O2NBRTlCLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxZQUFZLEVBQUU7O2NBQ2xELGVBQWUsR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFOztjQUN2QyxrQkFBa0IsR0FBRyxTQUFTLENBQUMsV0FBVyxFQUFFOztjQUM1QyxpQkFBaUIsR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFOztjQUN6QyxpQkFBaUIsR0FBRyxTQUFTLENBQUMsb0JBQW9CLEVBQUU7UUFFckQsT0FBTyxJQUFJLHNCQUFzQixDQUNoQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsRUFDckMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxFQUNuRCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFDN0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxFQUN0QyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUMvQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQzFELENBQUM7SUFDSCxDQUFDOzs7Ozs7SUFFTyxhQUFhLENBQUMsTUFBK0I7UUFDcEQsT0FBTyxNQUFNLENBQUMsR0FBRzs7OztRQUFDLENBQUMsVUFBNEIsRUFBRSxFQUFFO1lBQ2xELE9BQU8sSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsV0FBVyxFQUFFLEVBQUUsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQzdILENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7O1lBL0JELFVBQVU7Ozs7WUFWRixrQkFBa0I7WUFDbEIsZUFBZTtZQUNmLGVBQWU7WUFDZiwwQkFBMEI7Ozs7Ozs7SUFVdEIsNkRBQThDOzs7OztJQUN2RCwwREFBd0M7Ozs7O0lBQ3hDLDBEQUF3Qzs7Ozs7SUFDeEMscUVBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGb3JtYXRpb25Db252ZXJ0ZXIgfSBmcm9tICcuLi9mb3JtYXRpb24vcmVhZC9mb3JtYXRpb24uY29udmVydGVyJztcbmltcG9ydCB7IFBhZ2luZ0NvbnZlcnRlciB9IGZyb20gJy4uL3BhZ2luZy9yZWFkL3BhZ2luZy5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU291cmNlQ29udmVydGVyIH0gZnJvbSAnLi4vc291cmNlL3NvdXJjZS5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25Db252ZXJ0ZXIgfSBmcm9tICcuLi92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdCB9IGZyb20gJy4vc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdCc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3NvdXJjZS9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi9kb21haW4vc291cmNlL2l0ZW0uZW50aXR5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUmVhZE1vZGVsUm9vdENvbnZlcnRlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBmb3JtYXRpb25Db252ZXJ0ZXI6IEZvcm1hdGlvbkNvbnZlcnRlcixcblx0XHRcdFx0cHJpdmF0ZSBwYWdpbmdDb252ZXJ0ZXI6IFBhZ2luZ0NvbnZlcnRlcixcblx0XHRcdFx0cHJpdmF0ZSBzb3VyY2VDb252ZXJ0ZXI6IFNvdXJjZUNvbnZlcnRlcixcblx0XHRcdFx0cHJpdmF0ZSB2ZXJ0aWNhbEZvcm1hdGlvbkNvbnZlcnRlcjogVmVydGljYWxGb3JtYXRpb25Db252ZXJ0ZXIpIHtcblx0fVxuXG5cdGNvbnZlcnQoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUpOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290IHtcblxuXHRcdGNvbnN0IGZvcm1hdGlvbkFnZ3JlZ2F0ZSA9IGFnZ3JlZ2F0ZS5nZXRGb3JtYXRpb24oKSxcblx0XHRcdHBhZ2luZ0FnZ3JlZ2F0ZSA9IGFnZ3JlZ2F0ZS5nZXRQYWdpbmcoKSxcblx0XHRcdG9yaWdpbkl0ZW1FbnRpdGllcyA9IGFnZ3JlZ2F0ZS5nZXRFbnRpdGllcygpLFxuXHRcdFx0c291cmNlQ29vcmRpbmF0b3IgPSBhZ2dyZWdhdGUuZ2V0U291cmNlKCksXG5cdFx0XHR2ZXJ0aWNhbEZvcm1hdGlvbiA9IGFnZ3JlZ2F0ZS5nZXRWZXJ0aWNhbEZvcm1hdGlvbigpO1xuXG5cdFx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290KFxuXHRcdFx0YWdncmVnYXRlLmdldElkKCkudG9SZWFkTW9kZWxSb290SWQoKSxcblx0XHRcdHRoaXMuZm9ybWF0aW9uQ29udmVydGVyLmNvbnZlcnQoZm9ybWF0aW9uQWdncmVnYXRlKSxcblx0XHRcdHRoaXMucGFnaW5nQ29udmVydGVyLmNvbnZlcnQocGFnaW5nQWdncmVnYXRlKSxcblx0XHRcdHRoaXMuY29udmVydFNvdXJjZShvcmlnaW5JdGVtRW50aXRpZXMpLFxuXHRcdFx0dGhpcy5zb3VyY2VDb252ZXJ0ZXIuY29udmVydChzb3VyY2VDb29yZGluYXRvciksXG5cdFx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uQ29udmVydGVyLmNvbnZlcnQodmVydGljYWxGb3JtYXRpb24pXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgY29udmVydFNvdXJjZShzb3VyY2U6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogQXJyYXk8SXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiBzb3VyY2UubWFwKChvcmlnaW5JdGVtOiBPcmlnaW5JdGVtRW50aXR5KSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IEl0ZW1FbnRpdHkob3JpZ2luSXRlbS5yYXdEYXRhLCBvcmlnaW5JdGVtLmdldFBvc2l0aW9uKCksIG9yaWdpbkl0ZW0uZ2V0SWQoKS50b1N0cmluZygpLCBvcmlnaW5JdGVtLmdldFZlcnNpb24oKSk7XG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==