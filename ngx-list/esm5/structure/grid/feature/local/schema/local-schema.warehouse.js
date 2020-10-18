/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SchemaReadModelRootId } from '../../../../../schema/core/domain-read/schema.read-model-root-id';
import { SchemaWarehouse } from '../../../../../schema/core/api/schema.warehouse';
import { Override } from '../../../../../common/cdk/decorators';
import { SchemaCssClassesRepository } from '../../../../../schema/core/domain-read/css-classes/schema.css-classes.repository';
import { SchemaThemeRepository } from '../../../../../schema/core/domain-read/theme/schema.theme.repository';
import { SchemaHorizontalGridRepository } from '../../../../../schema/core/domain-read/horizontal-grid/schema.horizontal-grid.repository';
import { SchemaRowColoringRepository } from '../../../../../schema/core/domain-read/row-coloring/schema.row-coloring.repository';
import { SchemaVerticalGridRepository } from '../../../../../schema/core/domain-read/vertical-grid/schema.vertical-grid.repository';
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
    LocalSchemaWarehouse.prototype.onSingleTheme = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onSingleTheme.call(this, this.schemaReadModelRootId);
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
    ], LocalSchemaWarehouse.prototype, "onSingleTheme", null);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc2NoZW1hLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9sb2NhbC9zY2hlbWEvbG9jYWwtc2NoZW1hLndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUV6RyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFFbEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtGQUFrRixDQUFDO0FBQzlILE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQzdHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDBGQUEwRixDQUFDO0FBQzFJLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG9GQUFvRixDQUFDO0FBQ2pJLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHNGQUFzRixDQUFDO0FBSXBJO0lBQzBDLGdEQUFlO0lBRXhELDhCQUE2QixxQkFBNEMsRUFDdEUsMEJBQXNELEVBQ3RELHFCQUE0QyxFQUM1Qyw4QkFBOEQsRUFDOUQsMkJBQXdELEVBQ3hELDRCQUEwRDtRQUw3RCxZQU1DLGtCQUFNLDBCQUEwQixFQUFFLHFCQUFxQixFQUFFLDhCQUE4QixFQUN0RiwyQkFBMkIsRUFBRSw0QkFBNEIsQ0FBQyxTQUMzRDtRQVI0QiwyQkFBcUIsR0FBckIscUJBQXFCLENBQXVCOztJQVF6RSxDQUFDOzs7O0lBR0Qsc0NBQU87OztJQUFQO1FBQ0MsT0FBTyxpQkFBTSxPQUFPLFlBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDbEQsQ0FBQzs7OztJQUdELCtDQUFnQjs7O0lBQWhCO1FBQ0MsT0FBTyxpQkFBTSxnQkFBZ0IsWUFBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7O0lBR0QsNkNBQWM7OztJQUFkO1FBQ0MsT0FBTyxpQkFBTSxjQUFjLFlBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDekQsQ0FBQzs7OztJQUdELDRDQUFhOzs7SUFBYjtRQUNDLE9BQU8saUJBQU0sYUFBYSxZQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFHRCw0Q0FBYTs7O0lBQWI7UUFDQyxPQUFPLGlCQUFNLGFBQWEsWUFBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBR0QsMkNBQVk7OztJQUFaO1FBQ0MsT0FBTyxpQkFBTSxZQUFZLFlBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Z0JBekNELFVBQVU7Ozs7Z0JBZEYscUJBQXFCO2dCQU1yQiwwQkFBMEI7Z0JBQzFCLHFCQUFxQjtnQkFDckIsOEJBQThCO2dCQUM5QiwyQkFBMkI7Z0JBQzNCLDRCQUE0Qjs7SUFrQnBDO1FBREMsUUFBUTs7O2dEQUNFLFVBQVU7dURBRXBCO0lBR0Q7UUFEQyxRQUFROzs7Z0RBQ1csVUFBVTtnRUFFN0I7SUFHRDtRQURDLFFBQVE7OztnREFDUyxVQUFVOzhEQUUzQjtJQUdEO1FBREMsUUFBUTs7O2dEQUNRLFVBQVU7NkRBRTFCO0lBR0Q7UUFEQyxRQUFROzs7Z0RBQ1EsVUFBVTs2REFFMUI7SUFHRDtRQURDLFFBQVE7OztnREFDTyxVQUFVOzREQUV6QjtJQUVGLDJCQUFDO0NBQUEsQUEzQ0QsQ0FDMEMsZUFBZSxHQTBDeEQ7U0ExQ1ksb0JBQW9COzs7Ozs7SUFFcEIscURBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9kb21haW4tcmVhZC9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTY2hlbWFXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc2NoZW1hLndhcmVob3VzZSc7XG5cbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcbmltcG9ydCB7IFNjaGVtYUNzc0NsYXNzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL2Nzcy1jbGFzc2VzL3NjaGVtYS1jc3MtY2xhc3MnO1xuaW1wb3J0IHsgU2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9kb21haW4tcmVhZC9jc3MtY2xhc3Nlcy9zY2hlbWEuY3NzLWNsYXNzZXMucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9kb21haW4tcmVhZC90aGVtZS9zY2hlbWEudGhlbWUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFIb3Jpem9udGFsR3JpZFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9kb21haW4tcmVhZC9ob3Jpem9udGFsLWdyaWQvc2NoZW1hLmhvcml6b250YWwtZ3JpZC5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2RvbWFpbi1yZWFkL3Jvdy1jb2xvcmluZy9zY2hlbWEucm93LWNvbG9yaW5nLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hVmVydGljYWxHcmlkUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2RvbWFpbi1yZWFkL3ZlcnRpY2FsLWdyaWQvc2NoZW1hLnZlcnRpY2FsLWdyaWQucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zY2hlbWEtcm93LWNvbG9yaW5nJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxTY2hlbWFXYXJlaG91c2UgZXh0ZW5kcyBTY2hlbWFXYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hUmVhZE1vZGVsUm9vdElkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdHNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5OiBTY2hlbWFDc3NDbGFzc2VzUmVwb3NpdG9yeSxcblx0XHRcdFx0c2NoZW1hVGhlbWVSZXBvc2l0b3J5OiBTY2hlbWFUaGVtZVJlcG9zaXRvcnksXG5cdFx0XHRcdHNjaGVtYUhvcml6b250YWxHcmlkUmVwb3NpdG9yeTogU2NoZW1hSG9yaXpvbnRhbEdyaWRSZXBvc2l0b3J5LFxuXHRcdFx0XHRzY2hlbWFSb3dDb2xvcmluZ1JlcG9zaXRvcnk6IFNjaGVtYVJvd0NvbG9yaW5nUmVwb3NpdG9yeSxcblx0XHRcdFx0c2NoZW1hVmVydGljYWxHcmlkUmVwb3NpdG9yeTogU2NoZW1hVmVydGljYWxHcmlkUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKHNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5LCBzY2hlbWFUaGVtZVJlcG9zaXRvcnksIHNjaGVtYUhvcml6b250YWxHcmlkUmVwb3NpdG9yeSxcblx0XHRcdHNjaGVtYVJvd0NvbG9yaW5nUmVwb3NpdG9yeSwgc2NoZW1hVmVydGljYWxHcmlkUmVwb3NpdG9yeSk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25UaGVtZSgpOiBPYnNlcnZhYmxlPFNjaGVtYVRoZW1lPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uVGhlbWUodGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uSG9yaXpvbnRhbEdyaWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uSG9yaXpvbnRhbEdyaWQodGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uVmVydGljYWxHcmlkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiBzdXBlci5vblZlcnRpY2FsR3JpZCh0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25Sb3dDb2xvcmluZygpOiBPYnNlcnZhYmxlPFNjaGVtYVJvd0NvbG9yaW5nPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uUm93Q29sb3JpbmcodGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uU2luZ2xlVGhlbWUoKTogT2JzZXJ2YWJsZTxTY2hlbWFUaGVtZT4ge1xuXHRcdHJldHVybiBzdXBlci5vblNpbmdsZVRoZW1lKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvbkNzc0NsYXNzZXMoKTogT2JzZXJ2YWJsZTxTY2hlbWFDc3NDbGFzcz4ge1xuXHRcdHJldHVybiBzdXBlci5vbkNzc0NsYXNzZXModGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cbn1cbiJdfQ==