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
var StructureConverter = /** @class */ (function () {
    function StructureConverter(formationConverter, schemaConverter, pagingConverter, sourceConverter, verticalFormationConverter) {
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
    StructureConverter.prototype.convert = /**
     * @param {?} aggregate
     * @return {?}
     */
    function (aggregate) {
        /** @type {?} */
        var formationAggregate = aggregate.getFormation();
        /** @type {?} */
        var schemaAggregate = aggregate.getSchema();
        /** @type {?} */
        var pagingAggregate = aggregate.getPaging();
        /** @type {?} */
        var sourceQuery = aggregate.getEntities();
        /** @type {?} */
        var sourceCoordinator = aggregate.getSource();
        /** @type {?} */
        var verticalFormation = aggregate.getVerticalFormation();
        return new Structure(aggregate.getId(), 
        // this.originConverter.convert(originAggregate),
        this.formationConverter.convert(formationAggregate), this.schemaConverter.convert(schemaAggregate), this.pagingConverter.convert(pagingAggregate), this.convertSource(sourceQuery), this.sourceConverter.convert(sourceCoordinator), this.verticalFormationConverter.convert(verticalFormation));
    };
    /**
     * @private
     * @param {?} source
     * @return {?}
     */
    StructureConverter.prototype.convertSource = /**
     * @private
     * @param {?} source
     * @return {?}
     */
    function (source) {
        return source.map((/**
         * @param {?} originItem
         * @return {?}
         */
        function (originItem) { return new ItemEntity(originItem.rawData, originItem.id, originItem.getVersion()); }));
    };
    StructureConverter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureConverter.ctorParameters = function () { return [
        { type: FormationConverter },
        { type: SchemaConverter },
        { type: PagingConverter },
        { type: SourceConverter },
        { type: VerticalFormationConverter }
    ]; };
    return StructureConverter;
}());
export { StructureConverter };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL3N0cnVjdHVyZS5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFFcEcsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUduRDtJQUdDLDRCQUFvQixrQkFBc0MsRUFDL0MsZUFBZ0MsRUFDaEMsZUFBZ0MsRUFDaEMsZUFBZ0MsRUFDaEMsMEJBQXNEO1FBSjdDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDL0Msb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtJQUFHLENBQUM7Ozs7O0lBRXJFLG9DQUFPOzs7O0lBQVAsVUFBUSxTQUE2Qjs7WUFFOUIsa0JBQWtCLEdBQUcsU0FBUyxDQUFDLFlBQVksRUFBRTs7WUFDbEQsZUFBZSxHQUFHLFNBQVMsQ0FBQyxTQUFTLEVBQUU7O1lBQ3ZDLGVBQWUsR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFOztZQUN2QyxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsRUFBRTs7WUFDckMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLFNBQVMsRUFBRTs7WUFDekMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLG9CQUFvQixFQUFFO1FBRXJELE9BQU8sSUFBSSxTQUFTLENBQ25CLFNBQVMsQ0FBQyxLQUFLLEVBQUU7UUFDakIsaURBQWlEO1FBQ2pELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsRUFDbkQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQzdDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxFQUM3QyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUMvQixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUMvQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQzFELENBQUM7SUFDSCxDQUFDOzs7Ozs7SUFFTywwQ0FBYTs7Ozs7SUFBckIsVUFBc0IsTUFBK0I7UUFDcEQsT0FBTyxNQUFNLENBQUMsR0FBRzs7OztRQUFDLFVBQUMsVUFBNEIsSUFBSyxPQUFBLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBMUUsQ0FBMEUsRUFBQyxDQUFDO0lBQ2pJLENBQUM7O2dCQWhDRCxVQUFVOzs7O2dCQVhGLGtCQUFrQjtnQkFDbEIsZUFBZTtnQkFDZixlQUFlO2dCQUNmLGVBQWU7Z0JBQ2YsMEJBQTBCOztJQXdDbkMseUJBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQWhDWSxrQkFBa0I7Ozs7OztJQUVsQixnREFBOEM7Ozs7O0lBQ3ZELDZDQUF3Qzs7Ozs7SUFDeEMsNkNBQXdDOzs7OztJQUN4Qyw2Q0FBd0M7Ozs7O0lBQ3hDLHdEQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRm9ybWF0aW9uQ29udmVydGVyIH0gZnJvbSAnLi4vZm9ybWF0aW9uL2Zvcm1hdGlvbi5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU2NoZW1hQ29udmVydGVyIH0gZnJvbSAnLi4vc2NoZW1hL3NjaGVtYS5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgUGFnaW5nQ29udmVydGVyIH0gZnJvbSAnLi4vcGFnaW5nL3BhZ2luZy5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU291cmNlQ29udmVydGVyIH0gZnJvbSAnLi4vc291cmNlL3NvdXJjZS5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25Db252ZXJ0ZXIgfSBmcm9tICcuL3JlYWQvdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbi5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi9jb21tYW5kL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlIH0gZnJvbSAnLi9yZWFkL3N0cnVjdHVyZSc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vc291cmNlL2NvbW1hbmQvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vc291cmNlL2l0ZW0uZW50aXR5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29udmVydGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1hdGlvbkNvbnZlcnRlcjogRm9ybWF0aW9uQ29udmVydGVyLFxuXHRcdFx0XHRwcml2YXRlIHNjaGVtYUNvbnZlcnRlcjogU2NoZW1hQ29udmVydGVyLFxuXHRcdFx0XHRwcml2YXRlIHBhZ2luZ0NvbnZlcnRlcjogUGFnaW5nQ29udmVydGVyLFxuXHRcdFx0XHRwcml2YXRlIHNvdXJjZUNvbnZlcnRlcjogU291cmNlQ29udmVydGVyLFxuXHRcdFx0XHRwcml2YXRlIHZlcnRpY2FsRm9ybWF0aW9uQ29udmVydGVyOiBWZXJ0aWNhbEZvcm1hdGlvbkNvbnZlcnRlcikge31cblxuXHRjb252ZXJ0KGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlKTogU3RydWN0dXJlIHtcblxuXHRcdGNvbnN0IGZvcm1hdGlvbkFnZ3JlZ2F0ZSA9IGFnZ3JlZ2F0ZS5nZXRGb3JtYXRpb24oKSxcblx0XHRcdHNjaGVtYUFnZ3JlZ2F0ZSA9IGFnZ3JlZ2F0ZS5nZXRTY2hlbWEoKSxcblx0XHRcdHBhZ2luZ0FnZ3JlZ2F0ZSA9IGFnZ3JlZ2F0ZS5nZXRQYWdpbmcoKSxcblx0XHRcdHNvdXJjZVF1ZXJ5ID0gYWdncmVnYXRlLmdldEVudGl0aWVzKCksXG5cdFx0XHRzb3VyY2VDb29yZGluYXRvciA9IGFnZ3JlZ2F0ZS5nZXRTb3VyY2UoKSxcblx0XHRcdHZlcnRpY2FsRm9ybWF0aW9uID0gYWdncmVnYXRlLmdldFZlcnRpY2FsRm9ybWF0aW9uKCk7XG5cblx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZShcblx0XHRcdGFnZ3JlZ2F0ZS5nZXRJZCgpLFxuXHRcdFx0Ly8gdGhpcy5vcmlnaW5Db252ZXJ0ZXIuY29udmVydChvcmlnaW5BZ2dyZWdhdGUpLFxuXHRcdFx0dGhpcy5mb3JtYXRpb25Db252ZXJ0ZXIuY29udmVydChmb3JtYXRpb25BZ2dyZWdhdGUpLFxuXHRcdFx0dGhpcy5zY2hlbWFDb252ZXJ0ZXIuY29udmVydChzY2hlbWFBZ2dyZWdhdGUpLFxuXHRcdFx0dGhpcy5wYWdpbmdDb252ZXJ0ZXIuY29udmVydChwYWdpbmdBZ2dyZWdhdGUpLFxuXHRcdFx0dGhpcy5jb252ZXJ0U291cmNlKHNvdXJjZVF1ZXJ5KSxcblx0XHRcdHRoaXMuc291cmNlQ29udmVydGVyLmNvbnZlcnQoc291cmNlQ29vcmRpbmF0b3IpLFxuXHRcdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbkNvbnZlcnRlci5jb252ZXJ0KHZlcnRpY2FsRm9ybWF0aW9uKVxuXHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRTb3VyY2Uoc291cmNlOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IEFycmF5PEl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gc291cmNlLm1hcCgob3JpZ2luSXRlbTogT3JpZ2luSXRlbUVudGl0eSkgPT4gbmV3IEl0ZW1FbnRpdHkob3JpZ2luSXRlbS5yYXdEYXRhLCBvcmlnaW5JdGVtLmlkLCBvcmlnaW5JdGVtLmdldFZlcnNpb24oKSkpO1xuXHR9XG59XG4iXX0=