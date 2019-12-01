/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FormationConverter } from '../formation/formation.converter';
import { SchemaConverter } from '../schema/schema.converter';
import { PagingConverter } from '../paging/paging.converter';
import { SourceConverter } from '../source/source.converter';
import { VerticalFormationConverter } from './query/vertical-formation/vertical-formation.converter';
import { Structure } from './query/structure';
import { Entity } from '../source/entity';
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
        (originItem) => new Entity(originItem.rawData, originItem.id, originItem.getVersion())));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL3N0cnVjdHVyZS5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFFckcsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUkxQyxNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7OztJQUU5QixZQUFvQixrQkFBc0MsRUFDL0MsZUFBZ0MsRUFDaEMsZUFBZ0MsRUFDaEMsZUFBZ0MsRUFDaEMsMEJBQXNEO1FBSjdDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDL0Msb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtJQUFHLENBQUM7Ozs7O0lBRXJFLE9BQU8sQ0FBQyxTQUE2Qjs7Y0FFOUIsa0JBQWtCLEdBQUcsU0FBUyxDQUFDLFlBQVksRUFBRTs7Y0FDbEQsZUFBZSxHQUFHLFNBQVMsQ0FBQyxTQUFTLEVBQUU7O2NBQ3ZDLGVBQWUsR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFOztjQUN2QyxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsRUFBRTs7Y0FDckMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLFNBQVMsRUFBRTs7Y0FDekMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLG9CQUFvQixFQUFFO1FBRXJELE9BQU8sSUFBSSxTQUFTLENBQ25CLFNBQVMsQ0FBQyxLQUFLLEVBQUU7UUFDakIsaURBQWlEO1FBQ2pELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsRUFDbkQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQzdDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxFQUM3QyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUMvQixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUMvQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQzFELENBQUM7SUFDSCxDQUFDOzs7Ozs7SUFFTyxhQUFhLENBQUMsTUFBK0I7UUFDcEQsT0FBTyxNQUFNLENBQUMsR0FBRzs7OztRQUFDLENBQUMsVUFBNEIsRUFBRSxFQUFFLENBQUMsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFDLENBQUM7SUFDN0gsQ0FBQzs7O1lBaENELFVBQVU7Ozs7WUFYRixrQkFBa0I7WUFDbEIsZUFBZTtZQUNmLGVBQWU7WUFDZixlQUFlO1lBQ2YsMEJBQTBCOzs7Ozs7O0lBVXRCLGdEQUE4Qzs7Ozs7SUFDdkQsNkNBQXdDOzs7OztJQUN4Qyw2Q0FBd0M7Ozs7O0lBQ3hDLDZDQUF3Qzs7Ozs7SUFDeEMsd0RBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGb3JtYXRpb25Db252ZXJ0ZXIgfSBmcm9tICcuLi9mb3JtYXRpb24vZm9ybWF0aW9uLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBTY2hlbWFDb252ZXJ0ZXIgfSBmcm9tICcuLi9zY2hlbWEvc2NoZW1hLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBQYWdpbmdDb252ZXJ0ZXIgfSBmcm9tICcuLi9wYWdpbmcvcGFnaW5nLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBTb3VyY2VDb252ZXJ0ZXIgfSBmcm9tICcuLi9zb3VyY2Uvc291cmNlLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbkNvbnZlcnRlciB9IGZyb20gJy4vcXVlcnkvdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbi5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi9jb21tYW5kL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlIH0gZnJvbSAnLi9xdWVyeS9zdHJ1Y3R1cmUnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uL3NvdXJjZS9jb21tYW5kL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnLi4vc291cmNlL2VudGl0eSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbnZlcnRlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBmb3JtYXRpb25Db252ZXJ0ZXI6IEZvcm1hdGlvbkNvbnZlcnRlcixcblx0XHRcdFx0cHJpdmF0ZSBzY2hlbWFDb252ZXJ0ZXI6IFNjaGVtYUNvbnZlcnRlcixcblx0XHRcdFx0cHJpdmF0ZSBwYWdpbmdDb252ZXJ0ZXI6IFBhZ2luZ0NvbnZlcnRlcixcblx0XHRcdFx0cHJpdmF0ZSBzb3VyY2VDb252ZXJ0ZXI6IFNvdXJjZUNvbnZlcnRlcixcblx0XHRcdFx0cHJpdmF0ZSB2ZXJ0aWNhbEZvcm1hdGlvbkNvbnZlcnRlcjogVmVydGljYWxGb3JtYXRpb25Db252ZXJ0ZXIpIHt9XG5cblx0Y29udmVydChhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSk6IFN0cnVjdHVyZSB7XG5cblx0XHRjb25zdCBmb3JtYXRpb25BZ2dyZWdhdGUgPSBhZ2dyZWdhdGUuZ2V0Rm9ybWF0aW9uKCksXG5cdFx0XHRzY2hlbWFBZ2dyZWdhdGUgPSBhZ2dyZWdhdGUuZ2V0U2NoZW1hKCksXG5cdFx0XHRwYWdpbmdBZ2dyZWdhdGUgPSBhZ2dyZWdhdGUuZ2V0UGFnaW5nKCksXG5cdFx0XHRzb3VyY2VRdWVyeSA9IGFnZ3JlZ2F0ZS5nZXRFbnRpdGllcygpLFxuXHRcdFx0c291cmNlQ29vcmRpbmF0b3IgPSBhZ2dyZWdhdGUuZ2V0U291cmNlKCksXG5cdFx0XHR2ZXJ0aWNhbEZvcm1hdGlvbiA9IGFnZ3JlZ2F0ZS5nZXRWZXJ0aWNhbEZvcm1hdGlvbigpO1xuXG5cdFx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmUoXG5cdFx0XHRhZ2dyZWdhdGUuZ2V0SWQoKSxcblx0XHRcdC8vIHRoaXMub3JpZ2luQ29udmVydGVyLmNvbnZlcnQob3JpZ2luQWdncmVnYXRlKSxcblx0XHRcdHRoaXMuZm9ybWF0aW9uQ29udmVydGVyLmNvbnZlcnQoZm9ybWF0aW9uQWdncmVnYXRlKSxcblx0XHRcdHRoaXMuc2NoZW1hQ29udmVydGVyLmNvbnZlcnQoc2NoZW1hQWdncmVnYXRlKSxcblx0XHRcdHRoaXMucGFnaW5nQ29udmVydGVyLmNvbnZlcnQocGFnaW5nQWdncmVnYXRlKSxcblx0XHRcdHRoaXMuY29udmVydFNvdXJjZShzb3VyY2VRdWVyeSksXG5cdFx0XHR0aGlzLnNvdXJjZUNvbnZlcnRlci5jb252ZXJ0KHNvdXJjZUNvb3JkaW5hdG9yKSxcblx0XHRcdHRoaXMudmVydGljYWxGb3JtYXRpb25Db252ZXJ0ZXIuY29udmVydCh2ZXJ0aWNhbEZvcm1hdGlvbilcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0U291cmNlKHNvdXJjZTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiBBcnJheTxFbnRpdHk+IHtcblx0XHRyZXR1cm4gc291cmNlLm1hcCgob3JpZ2luSXRlbTogT3JpZ2luSXRlbUVudGl0eSkgPT4gbmV3IEVudGl0eShvcmlnaW5JdGVtLnJhd0RhdGEsIG9yaWdpbkl0ZW0uaWQsIG9yaWdpbkl0ZW0uZ2V0VmVyc2lvbigpKSk7XG5cdH1cbn1cbiJdfQ==