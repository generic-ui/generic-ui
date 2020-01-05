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
        return new Structure(aggregate.getId(), this.formationConverter.convert(formationAggregate), this.schemaConverter.convert(schemaAggregate), this.pagingConverter.convert(pagingAggregate), this.convertSource(sourceQuery), this.sourceConverter.convert(sourceCoordinator), this.verticalFormationConverter.convert(verticalFormation));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL3N0cnVjdHVyZS5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFFcEcsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUluRCxNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7OztJQUU5QixZQUFvQixrQkFBc0MsRUFDL0MsZUFBZ0MsRUFDaEMsZUFBZ0MsRUFDaEMsZUFBZ0MsRUFDaEMsMEJBQXNEO1FBSjdDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDL0Msb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtJQUFHLENBQUM7Ozs7O0lBRXJFLE9BQU8sQ0FBQyxTQUE2Qjs7Y0FFOUIsa0JBQWtCLEdBQUcsU0FBUyxDQUFDLFlBQVksRUFBRTs7Y0FDbEQsZUFBZSxHQUFHLFNBQVMsQ0FBQyxTQUFTLEVBQUU7O2NBQ3ZDLGVBQWUsR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFOztjQUN2QyxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsRUFBRTs7Y0FDckMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLFNBQVMsRUFBRTs7Y0FDekMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLG9CQUFvQixFQUFFO1FBRXJELE9BQU8sSUFBSSxTQUFTLENBQ25CLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFDakIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxFQUNuRCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFDN0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQzdDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEVBQy9CLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEVBQy9DLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FDMUQsQ0FBQztJQUNILENBQUM7Ozs7OztJQUVPLGFBQWEsQ0FBQyxNQUErQjtRQUNwRCxPQUFPLE1BQU0sQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxVQUE0QixFQUFFLEVBQUUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUMsQ0FBQztJQUNqSSxDQUFDOzs7WUEvQkQsVUFBVTs7OztZQVhGLGtCQUFrQjtZQUNsQixlQUFlO1lBQ2YsZUFBZTtZQUNmLGVBQWU7WUFDZiwwQkFBMEI7Ozs7Ozs7SUFVdEIsZ0RBQThDOzs7OztJQUN2RCw2Q0FBd0M7Ozs7O0lBQ3hDLDZDQUF3Qzs7Ozs7SUFDeEMsNkNBQXdDOzs7OztJQUN4Qyx3REFBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZvcm1hdGlvbkNvbnZlcnRlciB9IGZyb20gJy4uL2Zvcm1hdGlvbi9mb3JtYXRpb24uY29udmVydGVyJztcbmltcG9ydCB7IFNjaGVtYUNvbnZlcnRlciB9IGZyb20gJy4uL3NjaGVtYS9zY2hlbWEuY29udmVydGVyJztcbmltcG9ydCB7IFBhZ2luZ0NvbnZlcnRlciB9IGZyb20gJy4uL3BhZ2luZy9wYWdpbmcuY29udmVydGVyJztcbmltcG9ydCB7IFNvdXJjZUNvbnZlcnRlciB9IGZyb20gJy4uL3NvdXJjZS9zb3VyY2UuY29udmVydGVyJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uQ29udmVydGVyIH0gZnJvbSAnLi9yZWFkL3ZlcnRpY2FsLWZvcm1hdGlvbi92ZXJ0aWNhbC1mb3JtYXRpb24uY29udmVydGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4vY29tbWFuZC9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZSB9IGZyb20gJy4vcmVhZC9zdHJ1Y3R1cmUnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uL3NvdXJjZS9jb21tYW5kL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uL3NvdXJjZS9pdGVtLmVudGl0eSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbnZlcnRlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBmb3JtYXRpb25Db252ZXJ0ZXI6IEZvcm1hdGlvbkNvbnZlcnRlcixcblx0XHRcdFx0cHJpdmF0ZSBzY2hlbWFDb252ZXJ0ZXI6IFNjaGVtYUNvbnZlcnRlcixcblx0XHRcdFx0cHJpdmF0ZSBwYWdpbmdDb252ZXJ0ZXI6IFBhZ2luZ0NvbnZlcnRlcixcblx0XHRcdFx0cHJpdmF0ZSBzb3VyY2VDb252ZXJ0ZXI6IFNvdXJjZUNvbnZlcnRlcixcblx0XHRcdFx0cHJpdmF0ZSB2ZXJ0aWNhbEZvcm1hdGlvbkNvbnZlcnRlcjogVmVydGljYWxGb3JtYXRpb25Db252ZXJ0ZXIpIHt9XG5cblx0Y29udmVydChhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSk6IFN0cnVjdHVyZSB7XG5cblx0XHRjb25zdCBmb3JtYXRpb25BZ2dyZWdhdGUgPSBhZ2dyZWdhdGUuZ2V0Rm9ybWF0aW9uKCksXG5cdFx0XHRzY2hlbWFBZ2dyZWdhdGUgPSBhZ2dyZWdhdGUuZ2V0U2NoZW1hKCksXG5cdFx0XHRwYWdpbmdBZ2dyZWdhdGUgPSBhZ2dyZWdhdGUuZ2V0UGFnaW5nKCksXG5cdFx0XHRzb3VyY2VRdWVyeSA9IGFnZ3JlZ2F0ZS5nZXRFbnRpdGllcygpLFxuXHRcdFx0c291cmNlQ29vcmRpbmF0b3IgPSBhZ2dyZWdhdGUuZ2V0U291cmNlKCksXG5cdFx0XHR2ZXJ0aWNhbEZvcm1hdGlvbiA9IGFnZ3JlZ2F0ZS5nZXRWZXJ0aWNhbEZvcm1hdGlvbigpO1xuXG5cdFx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmUoXG5cdFx0XHRhZ2dyZWdhdGUuZ2V0SWQoKSxcblx0XHRcdHRoaXMuZm9ybWF0aW9uQ29udmVydGVyLmNvbnZlcnQoZm9ybWF0aW9uQWdncmVnYXRlKSxcblx0XHRcdHRoaXMuc2NoZW1hQ29udmVydGVyLmNvbnZlcnQoc2NoZW1hQWdncmVnYXRlKSxcblx0XHRcdHRoaXMucGFnaW5nQ29udmVydGVyLmNvbnZlcnQocGFnaW5nQWdncmVnYXRlKSxcblx0XHRcdHRoaXMuY29udmVydFNvdXJjZShzb3VyY2VRdWVyeSksXG5cdFx0XHR0aGlzLnNvdXJjZUNvbnZlcnRlci5jb252ZXJ0KHNvdXJjZUNvb3JkaW5hdG9yKSxcblx0XHRcdHRoaXMudmVydGljYWxGb3JtYXRpb25Db252ZXJ0ZXIuY29udmVydCh2ZXJ0aWNhbEZvcm1hdGlvbilcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0U291cmNlKHNvdXJjZTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiBBcnJheTxJdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIHNvdXJjZS5tYXAoKG9yaWdpbkl0ZW06IE9yaWdpbkl0ZW1FbnRpdHkpID0+IG5ldyBJdGVtRW50aXR5KG9yaWdpbkl0ZW0ucmF3RGF0YSwgb3JpZ2luSXRlbS5pZCwgb3JpZ2luSXRlbS5nZXRWZXJzaW9uKCkpKTtcblx0fVxufVxuIl19