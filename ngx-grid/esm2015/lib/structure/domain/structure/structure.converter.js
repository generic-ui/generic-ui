/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FormationConverter } from '../formation/formation.converter';
import { SchemaConverter } from '../schema/schema.converter';
import { PagingConverter } from '../paging/paging.converter';
import { SourceConverter } from '../source/source.converter';
import { VerticalFormationConverter } from './read/vertical-formation/vertical-formation.converter';
import { Structure } from './read/structure';
import { ItemEntity } from '../source/item.entity';
export class StructureConverter {
    /**
     * @param {?} formationConverter
     * @param {?} schemaConverter
     * @param {?} pagingConverter
     * @param {?} sourceConverter
     * @param {?} verticalFormationConverter
     */
    constructor(formationConverter, schemaConverter, pagingConverter, sourceConverter, verticalFormationConverter) {
        this.formationConverter = formationConverter;
        this.schemaConverter = schemaConverter;
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
        const schemaAggregate = aggregate.getSchema();
        /** @type {?} */
        const pagingAggregate = aggregate.getPaging();
        /** @type {?} */
        const sourceQuery = aggregate.getEntities();
        /** @type {?} */
        const sourceCoordinator = aggregate.getSource();
        /** @type {?} */
        const verticalFormation = aggregate.getVerticalFormation();
        return new Structure(aggregate.getId(), 
        // this.originConverter.convert(originAggregate),
        this.formationConverter.convert(formationAggregate), this.schemaConverter.convert(schemaAggregate), this.pagingConverter.convert(pagingAggregate), this.convertSource(sourceQuery), this.sourceConverter.convert(sourceCoordinator), this.verticalFormationConverter.convert(verticalFormation));
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
        (originItem) => new ItemEntity(originItem.rawData, originItem.id, originItem.getVersion())));
    }
}
StructureConverter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureConverter.ctorParameters = () => [
    { type: FormationConverter },
    { type: SchemaConverter },
    { type: PagingConverter },
    { type: SourceConverter },
    { type: VerticalFormationConverter }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureConverter.prototype.formationConverter;
    /**
     * @type {?}
     * @private
     */
    StructureConverter.prototype.schemaConverter;
    /**
     * @type {?}
     * @private
     */
    StructureConverter.prototype.pagingConverter;
    /**
     * @type {?}
     * @private
     */
    StructureConverter.prototype.sourceConverter;
    /**
     * @type {?}
     * @private
     */
    StructureConverter.prototype.verticalFormationConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL3N0cnVjdHVyZS5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFFcEcsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUluRCxNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7OztJQUU5QixZQUFvQixrQkFBc0MsRUFDL0MsZUFBZ0MsRUFDaEMsZUFBZ0MsRUFDaEMsZUFBZ0MsRUFDaEMsMEJBQXNEO1FBSjdDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDL0Msb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtJQUFHLENBQUM7Ozs7O0lBRXJFLE9BQU8sQ0FBQyxTQUE2Qjs7Y0FFOUIsa0JBQWtCLEdBQUcsU0FBUyxDQUFDLFlBQVksRUFBRTs7Y0FDbEQsZUFBZSxHQUFHLFNBQVMsQ0FBQyxTQUFTLEVBQUU7O2NBQ3ZDLGVBQWUsR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFOztjQUN2QyxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsRUFBRTs7Y0FDckMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLFNBQVMsRUFBRTs7Y0FDekMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLG9CQUFvQixFQUFFO1FBRXJELE9BQU8sSUFBSSxTQUFTLENBQ25CLFNBQVMsQ0FBQyxLQUFLLEVBQUU7UUFDakIsaURBQWlEO1FBQ2pELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsRUFDbkQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQzdDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxFQUM3QyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUMvQixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUMvQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQzFELENBQUM7SUFDSCxDQUFDOzs7Ozs7SUFFTyxhQUFhLENBQUMsTUFBK0I7UUFDcEQsT0FBTyxNQUFNLENBQUMsR0FBRzs7OztRQUFDLENBQUMsVUFBNEIsRUFBRSxFQUFFLENBQUMsSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFDLENBQUM7SUFDakksQ0FBQzs7O1lBaENELFVBQVU7Ozs7WUFYRixrQkFBa0I7WUFDbEIsZUFBZTtZQUNmLGVBQWU7WUFDZixlQUFlO1lBQ2YsMEJBQTBCOzs7Ozs7O0lBVXRCLGdEQUE4Qzs7Ozs7SUFDdkQsNkNBQXdDOzs7OztJQUN4Qyw2Q0FBd0M7Ozs7O0lBQ3hDLDZDQUF3Qzs7Ozs7SUFDeEMsd0RBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGb3JtYXRpb25Db252ZXJ0ZXIgfSBmcm9tICcuLi9mb3JtYXRpb24vZm9ybWF0aW9uLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBTY2hlbWFDb252ZXJ0ZXIgfSBmcm9tICcuLi9zY2hlbWEvc2NoZW1hLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBQYWdpbmdDb252ZXJ0ZXIgfSBmcm9tICcuLi9wYWdpbmcvcGFnaW5nLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBTb3VyY2VDb252ZXJ0ZXIgfSBmcm9tICcuLi9zb3VyY2Uvc291cmNlLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbkNvbnZlcnRlciB9IGZyb20gJy4vcmVhZC92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuL2NvbW1hbmQvc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmUgfSBmcm9tICcuL3JlYWQvc3RydWN0dXJlJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi9zb3VyY2UvY29tbWFuZC9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi9zb3VyY2UvaXRlbS5lbnRpdHknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb252ZXJ0ZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybWF0aW9uQ29udmVydGVyOiBGb3JtYXRpb25Db252ZXJ0ZXIsXG5cdFx0XHRcdHByaXZhdGUgc2NoZW1hQ29udmVydGVyOiBTY2hlbWFDb252ZXJ0ZXIsXG5cdFx0XHRcdHByaXZhdGUgcGFnaW5nQ29udmVydGVyOiBQYWdpbmdDb252ZXJ0ZXIsXG5cdFx0XHRcdHByaXZhdGUgc291cmNlQ29udmVydGVyOiBTb3VyY2VDb252ZXJ0ZXIsXG5cdFx0XHRcdHByaXZhdGUgdmVydGljYWxGb3JtYXRpb25Db252ZXJ0ZXI6IFZlcnRpY2FsRm9ybWF0aW9uQ29udmVydGVyKSB7fVxuXG5cdGNvbnZlcnQoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUpOiBTdHJ1Y3R1cmUge1xuXG5cdFx0Y29uc3QgZm9ybWF0aW9uQWdncmVnYXRlID0gYWdncmVnYXRlLmdldEZvcm1hdGlvbigpLFxuXHRcdFx0c2NoZW1hQWdncmVnYXRlID0gYWdncmVnYXRlLmdldFNjaGVtYSgpLFxuXHRcdFx0cGFnaW5nQWdncmVnYXRlID0gYWdncmVnYXRlLmdldFBhZ2luZygpLFxuXHRcdFx0c291cmNlUXVlcnkgPSBhZ2dyZWdhdGUuZ2V0RW50aXRpZXMoKSxcblx0XHRcdHNvdXJjZUNvb3JkaW5hdG9yID0gYWdncmVnYXRlLmdldFNvdXJjZSgpLFxuXHRcdFx0dmVydGljYWxGb3JtYXRpb24gPSBhZ2dyZWdhdGUuZ2V0VmVydGljYWxGb3JtYXRpb24oKTtcblxuXHRcdHJldHVybiBuZXcgU3RydWN0dXJlKFxuXHRcdFx0YWdncmVnYXRlLmdldElkKCksXG5cdFx0XHQvLyB0aGlzLm9yaWdpbkNvbnZlcnRlci5jb252ZXJ0KG9yaWdpbkFnZ3JlZ2F0ZSksXG5cdFx0XHR0aGlzLmZvcm1hdGlvbkNvbnZlcnRlci5jb252ZXJ0KGZvcm1hdGlvbkFnZ3JlZ2F0ZSksXG5cdFx0XHR0aGlzLnNjaGVtYUNvbnZlcnRlci5jb252ZXJ0KHNjaGVtYUFnZ3JlZ2F0ZSksXG5cdFx0XHR0aGlzLnBhZ2luZ0NvbnZlcnRlci5jb252ZXJ0KHBhZ2luZ0FnZ3JlZ2F0ZSksXG5cdFx0XHR0aGlzLmNvbnZlcnRTb3VyY2Uoc291cmNlUXVlcnkpLFxuXHRcdFx0dGhpcy5zb3VyY2VDb252ZXJ0ZXIuY29udmVydChzb3VyY2VDb29yZGluYXRvciksXG5cdFx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uQ29udmVydGVyLmNvbnZlcnQodmVydGljYWxGb3JtYXRpb24pXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgY29udmVydFNvdXJjZShzb3VyY2U6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogQXJyYXk8SXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiBzb3VyY2UubWFwKChvcmlnaW5JdGVtOiBPcmlnaW5JdGVtRW50aXR5KSA9PiBuZXcgSXRlbUVudGl0eShvcmlnaW5JdGVtLnJhd0RhdGEsIG9yaWdpbkl0ZW0uaWQsIG9yaWdpbkl0ZW0uZ2V0VmVyc2lvbigpKSk7XG5cdH1cbn1cbiJdfQ==