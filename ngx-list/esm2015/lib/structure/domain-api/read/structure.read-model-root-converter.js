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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdC1jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluLWFwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QtY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUNoRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDM0YsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFFaEcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFckUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBSXZGLE1BQU0sT0FBTywrQkFBK0I7Ozs7OztJQUUzQyxZQUFvQixlQUFnQyxFQUN6QyxlQUFnQyxFQUNoQywwQkFBc0Q7UUFGN0Msb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ3pDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQywrQkFBMEIsR0FBMUIsMEJBQTBCLENBQTRCO0lBQ2pFLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLFNBQTZCOztjQUU5QixlQUFlLEdBQUcsU0FBUyxDQUFDLFNBQVMsRUFBRTs7Y0FDNUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDLFdBQVcsRUFBRTs7Y0FDNUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLFNBQVMsRUFBRTs7Y0FDekMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLG9CQUFvQixFQUFFO1FBRXJELE9BQU8sSUFBSSxzQkFBc0IsQ0FDaEMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLGlCQUFpQixFQUFFLEVBQ3JDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxFQUM3QyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLEVBQ3RDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEVBQy9DLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FDMUQsQ0FBQztJQUNILENBQUM7Ozs7OztJQUVPLGFBQWEsQ0FBQyxNQUErQjtRQUNwRCxPQUFPLE1BQU0sQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxVQUE0QixFQUFFLEVBQUU7WUFDbEQsT0FBTyxJQUFJLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxXQUFXLEVBQUUsRUFBRSxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDN0gsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7WUE1QkQsVUFBVTs7OztZQVRGLGVBQWU7WUFDZixlQUFlO1lBQ2YsMEJBQTBCOzs7Ozs7O0lBVXRCLDBEQUF3Qzs7Ozs7SUFDakQsMERBQXdDOzs7OztJQUN4QyxxRUFBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBhZ2luZ0NvbnZlcnRlciB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9wYWdpbmcvZG9tYWluLWFwaS9yZWFkL3BhZ2luZy5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU291cmNlQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9kb21haW4tYXBpL3NvdXJjZS5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25Db252ZXJ0ZXIgfSBmcm9tICcuLi92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdCB9IGZyb20gJy4vc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdCc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9kb21haW4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9kb21haW4vY29yZS9pdGVtL2l0ZW0uZW50aXR5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUmVhZE1vZGVsUm9vdENvbnZlcnRlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBwYWdpbmdDb252ZXJ0ZXI6IFBhZ2luZ0NvbnZlcnRlcixcblx0XHRcdFx0cHJpdmF0ZSBzb3VyY2VDb252ZXJ0ZXI6IFNvdXJjZUNvbnZlcnRlcixcblx0XHRcdFx0cHJpdmF0ZSB2ZXJ0aWNhbEZvcm1hdGlvbkNvbnZlcnRlcjogVmVydGljYWxGb3JtYXRpb25Db252ZXJ0ZXIpIHtcblx0fVxuXG5cdGNvbnZlcnQoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUpOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290IHtcblxuXHRcdGNvbnN0IHBhZ2luZ0FnZ3JlZ2F0ZSA9IGFnZ3JlZ2F0ZS5nZXRQYWdpbmcoKSxcblx0XHRcdG9yaWdpbkl0ZW1FbnRpdGllcyA9IGFnZ3JlZ2F0ZS5nZXRFbnRpdGllcygpLFxuXHRcdFx0c291cmNlQ29vcmRpbmF0b3IgPSBhZ2dyZWdhdGUuZ2V0U291cmNlKCksXG5cdFx0XHR2ZXJ0aWNhbEZvcm1hdGlvbiA9IGFnZ3JlZ2F0ZS5nZXRWZXJ0aWNhbEZvcm1hdGlvbigpO1xuXG5cdFx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290KFxuXHRcdFx0YWdncmVnYXRlLmdldElkKCkudG9SZWFkTW9kZWxSb290SWQoKSxcblx0XHRcdHRoaXMucGFnaW5nQ29udmVydGVyLmNvbnZlcnQocGFnaW5nQWdncmVnYXRlKSxcblx0XHRcdHRoaXMuY29udmVydFNvdXJjZShvcmlnaW5JdGVtRW50aXRpZXMpLFxuXHRcdFx0dGhpcy5zb3VyY2VDb252ZXJ0ZXIuY29udmVydChzb3VyY2VDb29yZGluYXRvciksXG5cdFx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uQ29udmVydGVyLmNvbnZlcnQodmVydGljYWxGb3JtYXRpb24pXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgY29udmVydFNvdXJjZShzb3VyY2U6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogQXJyYXk8SXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiBzb3VyY2UubWFwKChvcmlnaW5JdGVtOiBPcmlnaW5JdGVtRW50aXR5KSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IEl0ZW1FbnRpdHkob3JpZ2luSXRlbS5yYXdEYXRhLCBvcmlnaW5JdGVtLmdldFBvc2l0aW9uKCksIG9yaWdpbkl0ZW0uZ2V0SWQoKS50b1N0cmluZygpLCBvcmlnaW5JdGVtLmdldFZlcnNpb24oKSk7XG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==