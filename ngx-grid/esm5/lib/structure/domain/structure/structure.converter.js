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
        function (originItem) { return new Entity(originItem.rawData, originItem.id, originItem.getVersion()); }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL3N0cnVjdHVyZS5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFFckcsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUcxQztJQUdDLDRCQUFvQixrQkFBc0MsRUFDL0MsZUFBZ0MsRUFDaEMsZUFBZ0MsRUFDaEMsZUFBZ0MsRUFDaEMsMEJBQXNEO1FBSjdDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDL0Msb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtJQUFHLENBQUM7Ozs7O0lBRXJFLG9DQUFPOzs7O0lBQVAsVUFBUSxTQUE2Qjs7WUFFOUIsa0JBQWtCLEdBQUcsU0FBUyxDQUFDLFlBQVksRUFBRTs7WUFDbEQsZUFBZSxHQUFHLFNBQVMsQ0FBQyxTQUFTLEVBQUU7O1lBQ3ZDLGVBQWUsR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFOztZQUN2QyxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsRUFBRTs7WUFDckMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLFNBQVMsRUFBRTs7WUFDekMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLG9CQUFvQixFQUFFO1FBRXJELE9BQU8sSUFBSSxTQUFTLENBQ25CLFNBQVMsQ0FBQyxLQUFLLEVBQUU7UUFDakIsaURBQWlEO1FBQ2pELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsRUFDbkQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQzdDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxFQUM3QyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUMvQixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUMvQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQzFELENBQUM7SUFDSCxDQUFDOzs7Ozs7SUFFTywwQ0FBYTs7Ozs7SUFBckIsVUFBc0IsTUFBK0I7UUFDcEQsT0FBTyxNQUFNLENBQUMsR0FBRzs7OztRQUFDLFVBQUMsVUFBNEIsSUFBSyxPQUFBLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBdEUsQ0FBc0UsRUFBQyxDQUFDO0lBQzdILENBQUM7O2dCQWhDRCxVQUFVOzs7O2dCQVhGLGtCQUFrQjtnQkFDbEIsZUFBZTtnQkFDZixlQUFlO2dCQUNmLGVBQWU7Z0JBQ2YsMEJBQTBCOztJQXdDbkMseUJBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQWhDWSxrQkFBa0I7Ozs7OztJQUVsQixnREFBOEM7Ozs7O0lBQ3ZELDZDQUF3Qzs7Ozs7SUFDeEMsNkNBQXdDOzs7OztJQUN4Qyw2Q0FBd0M7Ozs7O0lBQ3hDLHdEQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRm9ybWF0aW9uQ29udmVydGVyIH0gZnJvbSAnLi4vZm9ybWF0aW9uL2Zvcm1hdGlvbi5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU2NoZW1hQ29udmVydGVyIH0gZnJvbSAnLi4vc2NoZW1hL3NjaGVtYS5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgUGFnaW5nQ29udmVydGVyIH0gZnJvbSAnLi4vcGFnaW5nL3BhZ2luZy5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU291cmNlQ29udmVydGVyIH0gZnJvbSAnLi4vc291cmNlL3NvdXJjZS5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25Db252ZXJ0ZXIgfSBmcm9tICcuL3F1ZXJ5L3ZlcnRpY2FsLWZvcm1hdGlvbi92ZXJ0aWNhbC1mb3JtYXRpb24uY29udmVydGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4vY29tbWFuZC9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZSB9IGZyb20gJy4vcXVlcnkvc3RydWN0dXJlJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi9zb3VyY2UvY29tbWFuZC9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4uL3NvdXJjZS9lbnRpdHknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb252ZXJ0ZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybWF0aW9uQ29udmVydGVyOiBGb3JtYXRpb25Db252ZXJ0ZXIsXG5cdFx0XHRcdHByaXZhdGUgc2NoZW1hQ29udmVydGVyOiBTY2hlbWFDb252ZXJ0ZXIsXG5cdFx0XHRcdHByaXZhdGUgcGFnaW5nQ29udmVydGVyOiBQYWdpbmdDb252ZXJ0ZXIsXG5cdFx0XHRcdHByaXZhdGUgc291cmNlQ29udmVydGVyOiBTb3VyY2VDb252ZXJ0ZXIsXG5cdFx0XHRcdHByaXZhdGUgdmVydGljYWxGb3JtYXRpb25Db252ZXJ0ZXI6IFZlcnRpY2FsRm9ybWF0aW9uQ29udmVydGVyKSB7fVxuXG5cdGNvbnZlcnQoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUpOiBTdHJ1Y3R1cmUge1xuXG5cdFx0Y29uc3QgZm9ybWF0aW9uQWdncmVnYXRlID0gYWdncmVnYXRlLmdldEZvcm1hdGlvbigpLFxuXHRcdFx0c2NoZW1hQWdncmVnYXRlID0gYWdncmVnYXRlLmdldFNjaGVtYSgpLFxuXHRcdFx0cGFnaW5nQWdncmVnYXRlID0gYWdncmVnYXRlLmdldFBhZ2luZygpLFxuXHRcdFx0c291cmNlUXVlcnkgPSBhZ2dyZWdhdGUuZ2V0RW50aXRpZXMoKSxcblx0XHRcdHNvdXJjZUNvb3JkaW5hdG9yID0gYWdncmVnYXRlLmdldFNvdXJjZSgpLFxuXHRcdFx0dmVydGljYWxGb3JtYXRpb24gPSBhZ2dyZWdhdGUuZ2V0VmVydGljYWxGb3JtYXRpb24oKTtcblxuXHRcdHJldHVybiBuZXcgU3RydWN0dXJlKFxuXHRcdFx0YWdncmVnYXRlLmdldElkKCksXG5cdFx0XHQvLyB0aGlzLm9yaWdpbkNvbnZlcnRlci5jb252ZXJ0KG9yaWdpbkFnZ3JlZ2F0ZSksXG5cdFx0XHR0aGlzLmZvcm1hdGlvbkNvbnZlcnRlci5jb252ZXJ0KGZvcm1hdGlvbkFnZ3JlZ2F0ZSksXG5cdFx0XHR0aGlzLnNjaGVtYUNvbnZlcnRlci5jb252ZXJ0KHNjaGVtYUFnZ3JlZ2F0ZSksXG5cdFx0XHR0aGlzLnBhZ2luZ0NvbnZlcnRlci5jb252ZXJ0KHBhZ2luZ0FnZ3JlZ2F0ZSksXG5cdFx0XHR0aGlzLmNvbnZlcnRTb3VyY2Uoc291cmNlUXVlcnkpLFxuXHRcdFx0dGhpcy5zb3VyY2VDb252ZXJ0ZXIuY29udmVydChzb3VyY2VDb29yZGluYXRvciksXG5cdFx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uQ29udmVydGVyLmNvbnZlcnQodmVydGljYWxGb3JtYXRpb24pXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgY29udmVydFNvdXJjZShzb3VyY2U6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogQXJyYXk8RW50aXR5PiB7XG5cdFx0cmV0dXJuIHNvdXJjZS5tYXAoKG9yaWdpbkl0ZW06IE9yaWdpbkl0ZW1FbnRpdHkpID0+IG5ldyBFbnRpdHkob3JpZ2luSXRlbS5yYXdEYXRhLCBvcmlnaW5JdGVtLmlkLCBvcmlnaW5JdGVtLmdldFZlcnNpb24oKSkpO1xuXHR9XG59XG4iXX0=