/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SchemaReadModelRootId } from '../../../../../schema/domain-api/read/schema.read-model-root-id';
import { SchemaWarehouse } from '../../../../../schema/domain-api/schema.warehouse';
import { Override } from '../../../../../common/cdk/decorators';
import { SchemaCssClassesRepository } from '../../../../../schema/domain-api/css-classes/schema.css-classes.repository';
import { SchemaThemeRepository } from '../../../../../schema/domain-api/theme/schema.theme.repository';
import { SchemaHorizontalGridRepository } from '../../../../../schema/domain-api/horizontal-grid/schema.horizontal-grid.repository';
import { SchemaRowColoringRepository } from '../../../../../schema/domain-api/row-coloring/schema.row-coloring.repository';
import { SchemaVerticalGridRepository } from '../../../../../schema/domain-api/vertical-grid/schema.vertical-grid.repository';
var LocalSchemaWarehouse = /** @class */ (function (_super) {
    tslib_1.__extends(LocalSchemaWarehouse, _super);
    function LocalSchemaWarehouse(schemaReadModelRootId, schemaCssClassesRepository, schemaThemeRepository, schemaHorizontalGridRepository, schemaRowColoringRepository, schemaVerticalGridRepository) {
        var _this = _super.call(this, schemaCssClassesRepository, schemaThemeRepository, schemaHorizontalGridRepository, schemaRowColoringRepository, schemaVerticalGridRepository) || this;
        _this.schemaReadModelRootId = schemaReadModelRootId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalSchemaWarehouse.prototype.onSingleTheme = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onSingleTheme.call(this, this.schemaReadModelRootId);
    };
    /**
     * @return {?}
     */
    LocalSchemaWarehouse.prototype.onTheme = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onTheme.call(this, this.schemaReadModelRootId);
    };
    /**
     * @return {?}
     */
    LocalSchemaWarehouse.prototype.onHorizontalGrid = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onHorizontalGrid.call(this, this.schemaReadModelRootId);
    };
    /**
     * @return {?}
     */
    LocalSchemaWarehouse.prototype.onVerticalGrid = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onVerticalGrid.call(this, this.schemaReadModelRootId);
    };
    /**
     * @return {?}
     */
    LocalSchemaWarehouse.prototype.onRowColoring = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onRowColoring.call(this, this.schemaReadModelRootId);
    };
    /**
     * @return {?}
     */
    LocalSchemaWarehouse.prototype.onCssClasses = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onCssClasses.call(this, this.schemaReadModelRootId);
    };
    LocalSchemaWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalSchemaWarehouse.ctorParameters = function () { return [
        { type: SchemaReadModelRootId },
        { type: SchemaCssClassesRepository },
        { type: SchemaThemeRepository },
        { type: SchemaHorizontalGridRepository },
        { type: SchemaRowColoringRepository },
        { type: SchemaVerticalGridRepository }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalSchemaWarehouse.prototype, "onSingleTheme", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalSchemaWarehouse.prototype, "onTheme", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalSchemaWarehouse.prototype, "onHorizontalGrid", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalSchemaWarehouse.prototype, "onVerticalGrid", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalSchemaWarehouse.prototype, "onRowColoring", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalSchemaWarehouse.prototype, "onCssClasses", null);
    return LocalSchemaWarehouse;
}(SchemaWarehouse));
export { LocalSchemaWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalSchemaWarehouse.prototype.schemaReadModelRootId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc2NoZW1hLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL2xvY2FsL3NjaGVtYS9sb2NhbC1zY2hlbWEud2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBRXhHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUVwRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFaEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFDeEgsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDdkcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sb0ZBQW9GLENBQUM7QUFDcEksT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sOEVBQThFLENBQUM7QUFDM0gsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0ZBQWdGLENBQUM7QUFLOUg7SUFDMEMsZ0RBQWU7SUFFeEQsOEJBQTZCLHFCQUE0QyxFQUN0RSwwQkFBc0QsRUFDdEQscUJBQTRDLEVBQzVDLDhCQUE4RCxFQUM5RCwyQkFBd0QsRUFDeEQsNEJBQTBEO1FBTDdELFlBTUMsa0JBQU0sMEJBQTBCLEVBQUUscUJBQXFCLEVBQUUsOEJBQThCLEVBQ3RGLDJCQUEyQixFQUFFLDRCQUE0QixDQUFDLFNBQzNEO1FBUjRCLDJCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7O0lBUXpFLENBQUM7Ozs7SUFHRCw0Q0FBYTs7O0lBQWI7UUFDQyxPQUFPLGlCQUFNLGFBQWEsWUFBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBR0Qsc0NBQU87OztJQUFQO1FBQ0MsT0FBTyxpQkFBTSxPQUFPLFlBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDbEQsQ0FBQzs7OztJQUdELCtDQUFnQjs7O0lBQWhCO1FBQ0MsT0FBTyxpQkFBTSxnQkFBZ0IsWUFBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7O0lBR0QsNkNBQWM7OztJQUFkO1FBQ0MsT0FBTyxpQkFBTSxjQUFjLFlBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDekQsQ0FBQzs7OztJQUdELDRDQUFhOzs7SUFBYjtRQUNDLE9BQU8saUJBQU0sYUFBYSxZQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFHRCwyQ0FBWTs7O0lBQVo7UUFDQyxPQUFPLGlCQUFNLFlBQVksWUFBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN2RCxDQUFDOztnQkF6Q0QsVUFBVTs7OztnQkFmRixxQkFBcUI7Z0JBTXJCLDBCQUEwQjtnQkFDMUIscUJBQXFCO2dCQUNyQiw4QkFBOEI7Z0JBQzlCLDJCQUEyQjtnQkFDM0IsNEJBQTRCOztJQW1CcEM7UUFEQyxRQUFROzs7Z0RBQ1EsVUFBVTs2REFFMUI7SUFHRDtRQURDLFFBQVE7OztnREFDRSxVQUFVO3VEQUVwQjtJQUdEO1FBREMsUUFBUTs7O2dEQUNXLFVBQVU7Z0VBRTdCO0lBR0Q7UUFEQyxRQUFROzs7Z0RBQ1MsVUFBVTs4REFFM0I7SUFHRDtRQURDLFFBQVE7OztnREFDUSxVQUFVOzZEQUUxQjtJQUdEO1FBREMsUUFBUTs7O2dEQUNPLFVBQVU7NERBRXpCO0lBRUYsMkJBQUM7Q0FBQSxBQTNDRCxDQUMwQyxlQUFlLEdBMEN4RDtTQTFDWSxvQkFBb0I7Ozs7OztJQUVwQixxREFBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4tYXBpL3JlYWQvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4vdGhlbWUvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4tYXBpL3NjaGVtYS53YXJlaG91c2UnO1xuXG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBTY2hlbWFDc3NDbGFzcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4tYXBpL2Nzcy1jbGFzc2VzL3NjaGVtYS1jc3MtY2xhc3MnO1xuaW1wb3J0IHsgU2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluLWFwaS9jc3MtY2xhc3Nlcy9zY2hlbWEuY3NzLWNsYXNzZXMucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluLWFwaS90aGVtZS9zY2hlbWEudGhlbWUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFIb3Jpem9udGFsR3JpZFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluLWFwaS9ob3Jpem9udGFsLWdyaWQvc2NoZW1hLmhvcml6b250YWwtZ3JpZC5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4tYXBpL3Jvdy1jb2xvcmluZy9zY2hlbWEucm93LWNvbG9yaW5nLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hVmVydGljYWxHcmlkUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4tYXBpL3ZlcnRpY2FsLWdyaWQvc2NoZW1hLnZlcnRpY2FsLWdyaWQucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBzY2hlbWFHbG9iYWxJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4tYXBpL3JlYWQvc2NoZW1hLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4vY29sb3Jpbmcvc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsU2NoZW1hV2FyZWhvdXNlIGV4dGVuZHMgU2NoZW1hV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVJlYWRNb2RlbFJvb3RJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0XHRzY2hlbWFDc3NDbGFzc2VzUmVwb3NpdG9yeTogU2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnksXG5cdFx0XHRcdHNjaGVtYVRoZW1lUmVwb3NpdG9yeTogU2NoZW1hVGhlbWVSZXBvc2l0b3J5LFxuXHRcdFx0XHRzY2hlbWFIb3Jpem9udGFsR3JpZFJlcG9zaXRvcnk6IFNjaGVtYUhvcml6b250YWxHcmlkUmVwb3NpdG9yeSxcblx0XHRcdFx0c2NoZW1hUm93Q29sb3JpbmdSZXBvc2l0b3J5OiBTY2hlbWFSb3dDb2xvcmluZ1JlcG9zaXRvcnksXG5cdFx0XHRcdHNjaGVtYVZlcnRpY2FsR3JpZFJlcG9zaXRvcnk6IFNjaGVtYVZlcnRpY2FsR3JpZFJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcihzY2hlbWFDc3NDbGFzc2VzUmVwb3NpdG9yeSwgc2NoZW1hVGhlbWVSZXBvc2l0b3J5LCBzY2hlbWFIb3Jpem9udGFsR3JpZFJlcG9zaXRvcnksXG5cdFx0XHRzY2hlbWFSb3dDb2xvcmluZ1JlcG9zaXRvcnksIHNjaGVtYVZlcnRpY2FsR3JpZFJlcG9zaXRvcnkpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uU2luZ2xlVGhlbWUoKTogT2JzZXJ2YWJsZTxTY2hlbWFUaGVtZT4ge1xuXHRcdHJldHVybiBzdXBlci5vblNpbmdsZVRoZW1lKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblRoZW1lKCk6IE9ic2VydmFibGU8U2NoZW1hVGhlbWU+IHtcblx0XHRyZXR1cm4gc3VwZXIub25UaGVtZSh0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25Ib3Jpem9udGFsR3JpZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gc3VwZXIub25Ib3Jpem9udGFsR3JpZCh0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25WZXJ0aWNhbEdyaWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uVmVydGljYWxHcmlkKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblJvd0NvbG9yaW5nKCk6IE9ic2VydmFibGU8U2NoZW1hUm93Q29sb3Jpbmc+IHtcblx0XHRyZXR1cm4gc3VwZXIub25Sb3dDb2xvcmluZyh0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25Dc3NDbGFzc2VzKCk6IE9ic2VydmFibGU8U2NoZW1hQ3NzQ2xhc3M+IHtcblx0XHRyZXR1cm4gc3VwZXIub25Dc3NDbGFzc2VzKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKTtcblx0fVxuXG59XG4iXX0=