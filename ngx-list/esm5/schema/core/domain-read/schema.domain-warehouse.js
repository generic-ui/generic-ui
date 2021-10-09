/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { SchemaCssClassesRepository } from './css-classes/schema.css-classes.repository';
import { SchemaThemeRepository } from './theme/schema.theme.repository';
import { SchemaHorizontalGridRepository } from './horizontal-grid/schema.horizontal-grid.repository';
import { SchemaRowColoringRepository } from './row-coloring/schema.row-coloring.repository';
import { SchemaVerticalGridRepository } from './vertical-grid/schema.vertical-grid.repository';
import { SchemaWarehouse } from '../api/schema.warehouse';
import { Injectable } from '@angular/core';
import { hermesTake } from '@generic-ui/hermes';
var SchemaDomainWarehouse = /** @class */ (function (_super) {
    tslib_1.__extends(SchemaDomainWarehouse, _super);
    function SchemaDomainWarehouse(schemaCssClassesRepository, schemaThemeRepository, schemaHorizontalGridRepository, schemaRowColoringRepository, schemaVerticalGridRepository) {
        var _this = _super.call(this) || this;
        _this.schemaCssClassesRepository = schemaCssClassesRepository;
        _this.schemaThemeRepository = schemaThemeRepository;
        _this.schemaHorizontalGridRepository = schemaHorizontalGridRepository;
        _this.schemaRowColoringRepository = schemaRowColoringRepository;
        _this.schemaVerticalGridRepository = schemaVerticalGridRepository;
        return _this;
    }
    /**
     * @param {?} schemaId
     * @return {?}
     */
    SchemaDomainWarehouse.prototype.onTheme = /**
     * @param {?} schemaId
     * @return {?}
     */
    function (schemaId) {
        return this.schemaThemeRepository
            .on(schemaId.toAggregateId());
    };
    /**
     * @param {?} schemaId
     * @return {?}
     */
    SchemaDomainWarehouse.prototype.onceTheme = /**
     * @param {?} schemaId
     * @return {?}
     */
    function (schemaId) {
        return this.onTheme(schemaId)
            .pipe(hermesTake(1));
    };
    /**
     * @param {?} schemaId
     * @return {?}
     */
    SchemaDomainWarehouse.prototype.onHorizontalGrid = /**
     * @param {?} schemaId
     * @return {?}
     */
    function (schemaId) {
        return this.schemaHorizontalGridRepository
            .on(schemaId.toAggregateId());
    };
    /**
     * @param {?} schemaId
     * @return {?}
     */
    SchemaDomainWarehouse.prototype.onVerticalGrid = /**
     * @param {?} schemaId
     * @return {?}
     */
    function (schemaId) {
        return this.schemaVerticalGridRepository
            .on(schemaId.toAggregateId());
    };
    /**
     * @param {?} schemaId
     * @return {?}
     */
    SchemaDomainWarehouse.prototype.onRowColoring = /**
     * @param {?} schemaId
     * @return {?}
     */
    function (schemaId) {
        return this.schemaRowColoringRepository
            .on(schemaId.toAggregateId());
    };
    /**
     * @param {?} schemaId
     * @return {?}
     */
    SchemaDomainWarehouse.prototype.onCssClasses = /**
     * @param {?} schemaId
     * @return {?}
     */
    function (schemaId) {
        return this.schemaCssClassesRepository
            .on(schemaId.toAggregateId());
    };
    SchemaDomainWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SchemaDomainWarehouse.ctorParameters = function () { return [
        { type: SchemaCssClassesRepository },
        { type: SchemaThemeRepository },
        { type: SchemaHorizontalGridRepository },
        { type: SchemaRowColoringRepository },
        { type: SchemaVerticalGridRepository }
    ]; };
    return SchemaDomainWarehouse;
}(SchemaWarehouse));
export { SchemaDomainWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaDomainWarehouse.prototype.schemaCssClassesRepository;
    /**
     * @type {?}
     * @private
     */
    SchemaDomainWarehouse.prototype.schemaThemeRepository;
    /**
     * @type {?}
     * @private
     */
    SchemaDomainWarehouse.prototype.schemaHorizontalGridRepository;
    /**
     * @type {?}
     * @private
     */
    SchemaDomainWarehouse.prototype.schemaRowColoringRepository;
    /**
     * @type {?}
     * @private
     */
    SchemaDomainWarehouse.prototype.schemaVerticalGridRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmRvbWFpbi13YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInNjaGVtYS9jb3JlL2RvbWFpbi1yZWFkL3NjaGVtYS5kb21haW4td2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDekYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDckcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDNUYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFLL0YsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzFELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFvQixVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdsRTtJQUMyQyxpREFBZTtJQUV6RCwrQkFBNkIsMEJBQXNELEVBQy9ELHFCQUE0QyxFQUM1Qyw4QkFBOEQsRUFDOUQsMkJBQXdELEVBQ3hELDRCQUEwRDtRQUo5RSxZQUtDLGlCQUFPLFNBQ1A7UUFONEIsZ0NBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtRQUMvRCwyQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLG9DQUE4QixHQUE5Qiw4QkFBOEIsQ0FBZ0M7UUFDOUQsaUNBQTJCLEdBQTNCLDJCQUEyQixDQUE2QjtRQUN4RCxrQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCOztJQUU5RSxDQUFDOzs7OztJQUVELHVDQUFPOzs7O0lBQVAsVUFBUSxRQUErQjtRQUN0QyxPQUFPLElBQUksQ0FBQyxxQkFBcUI7YUFDM0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRUQseUNBQVM7Ozs7SUFBVCxVQUFVLFFBQStCO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7YUFDdkIsSUFBSSxDQUNKLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FDYixDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxnREFBZ0I7Ozs7SUFBaEIsVUFBaUIsUUFBK0I7UUFDL0MsT0FBTyxJQUFJLENBQUMsOEJBQThCO2FBQ3BDLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVELDhDQUFjOzs7O0lBQWQsVUFBZSxRQUErQjtRQUM3QyxPQUFPLElBQUksQ0FBQyw0QkFBNEI7YUFDbEMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRUQsNkNBQWE7Ozs7SUFBYixVQUFjLFFBQStCO1FBQzVDLE9BQU8sSUFBSSxDQUFDLDJCQUEyQjthQUNqQyxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCw0Q0FBWTs7OztJQUFaLFVBQWEsUUFBK0I7UUFDM0MsT0FBTyxJQUFJLENBQUMsMEJBQTBCO2FBQ2hDLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUNwQyxDQUFDOztnQkF6Q0QsVUFBVTs7OztnQkFkRiwwQkFBMEI7Z0JBQzFCLHFCQUFxQjtnQkFDckIsOEJBQThCO2dCQUM5QiwyQkFBMkI7Z0JBQzNCLDRCQUE0Qjs7SUFxRHJDLDRCQUFDO0NBQUEsQUEzQ0QsQ0FDMkMsZUFBZSxHQTBDekQ7U0ExQ1kscUJBQXFCOzs7Ozs7SUFFckIsMkRBQXVFOzs7OztJQUNoRixzREFBNkQ7Ozs7O0lBQzdELCtEQUErRTs7Ozs7SUFDL0UsNERBQXlFOzs7OztJQUN6RSw2REFBMkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWFDc3NDbGFzc2VzUmVwb3NpdG9yeSB9IGZyb20gJy4vY3NzLWNsYXNzZXMvc2NoZW1hLmNzcy1jbGFzc2VzLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWVSZXBvc2l0b3J5IH0gZnJvbSAnLi90aGVtZS9zY2hlbWEudGhlbWUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFIb3Jpem9udGFsR3JpZFJlcG9zaXRvcnkgfSBmcm9tICcuL2hvcml6b250YWwtZ3JpZC9zY2hlbWEuaG9yaXpvbnRhbC1ncmlkLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmdSZXBvc2l0b3J5IH0gZnJvbSAnLi9yb3ctY29sb3Jpbmcvc2NoZW1hLnJvdy1jb2xvcmluZy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYVZlcnRpY2FsR3JpZFJlcG9zaXRvcnkgfSBmcm9tICcuL3ZlcnRpY2FsLWdyaWQvc2NoZW1hLnZlcnRpY2FsLWdyaWQucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi9hcGkvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uL2FwaS90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuLi9hcGkvcm93LWNvbG9yaW5nL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU2NoZW1hQ3NzQ2xhc3MgfSBmcm9tICcuLi9hcGkvY3NzLWNsYXNzZXMvc2NoZW1hLWNzcy1jbGFzcyc7XG5pbXBvcnQgeyBTY2hlbWFXYXJlaG91c2UgfSBmcm9tICcuLi9hcGkvc2NoZW1hLndhcmVob3VzZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlLCBoZXJtZXNUYWtlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NoZW1hRG9tYWluV2FyZWhvdXNlIGV4dGVuZHMgU2NoZW1hV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5OiBTY2hlbWFDc3NDbGFzc2VzUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFUaGVtZVJlcG9zaXRvcnk6IFNjaGVtYVRoZW1lUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFIb3Jpem9udGFsR3JpZFJlcG9zaXRvcnk6IFNjaGVtYUhvcml6b250YWxHcmlkUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFSb3dDb2xvcmluZ1JlcG9zaXRvcnk6IFNjaGVtYVJvd0NvbG9yaW5nUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFWZXJ0aWNhbEdyaWRSZXBvc2l0b3J5OiBTY2hlbWFWZXJ0aWNhbEdyaWRSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG9uVGhlbWUoc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCk6IEhlcm1lc09ic2VydmFibGU8U2NoZW1hVGhlbWU+IHtcblx0XHRyZXR1cm4gdGhpcy5zY2hlbWFUaGVtZVJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKHNjaGVtYUlkLnRvQWdncmVnYXRlSWQoKSk7XG5cdH1cblxuXHRvbmNlVGhlbWUoc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCk6IEhlcm1lc09ic2VydmFibGU8U2NoZW1hVGhlbWU+IHtcblx0XHRyZXR1cm4gdGhpcy5vblRoZW1lKHNjaGVtYUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNUYWtlKDEpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvbkhvcml6b250YWxHcmlkKHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQpOiBIZXJtZXNPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5zY2hlbWFIb3Jpem9udGFsR3JpZFJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKHNjaGVtYUlkLnRvQWdncmVnYXRlSWQoKSk7XG5cdH1cblxuXHRvblZlcnRpY2FsR3JpZChzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkKTogSGVybWVzT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuc2NoZW1hVmVydGljYWxHcmlkUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oc2NoZW1hSWQudG9BZ2dyZWdhdGVJZCgpKTtcblx0fVxuXG5cdG9uUm93Q29sb3Jpbmcoc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCk6IEhlcm1lc09ic2VydmFibGU8U2NoZW1hUm93Q29sb3Jpbmc+IHtcblx0XHRyZXR1cm4gdGhpcy5zY2hlbWFSb3dDb2xvcmluZ1JlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKHNjaGVtYUlkLnRvQWdncmVnYXRlSWQoKSk7XG5cdH1cblxuXHRvbkNzc0NsYXNzZXMoc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCk6IEhlcm1lc09ic2VydmFibGU8U2NoZW1hQ3NzQ2xhc3M+IHtcblx0XHRyZXR1cm4gdGhpcy5zY2hlbWFDc3NDbGFzc2VzUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oc2NoZW1hSWQudG9BZ2dyZWdhdGVJZCgpKTtcblx0fVxuXG59XG4iXX0=