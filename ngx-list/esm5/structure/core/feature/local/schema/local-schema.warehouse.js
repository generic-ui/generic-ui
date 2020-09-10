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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc2NoZW1hLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZmVhdHVyZS9sb2NhbC9zY2hlbWEvbG9jYWwtc2NoZW1hLndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUV4RyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFFcEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDRFQUE0RSxDQUFDO0FBQ3hILE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLG9GQUFvRixDQUFDO0FBQ3BJLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDhFQUE4RSxDQUFDO0FBQzNILE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdGQUFnRixDQUFDO0FBSTlIO0lBQzBDLGdEQUFlO0lBRXhELDhCQUE2QixxQkFBNEMsRUFDdEUsMEJBQXNELEVBQ3RELHFCQUE0QyxFQUM1Qyw4QkFBOEQsRUFDOUQsMkJBQXdELEVBQ3hELDRCQUEwRDtRQUw3RCxZQU1DLGtCQUFNLDBCQUEwQixFQUFFLHFCQUFxQixFQUFFLDhCQUE4QixFQUN0RiwyQkFBMkIsRUFBRSw0QkFBNEIsQ0FBQyxTQUMzRDtRQVI0QiwyQkFBcUIsR0FBckIscUJBQXFCLENBQXVCOztJQVF6RSxDQUFDOzs7O0lBR0Qsc0NBQU87OztJQUFQO1FBQ0MsT0FBTyxpQkFBTSxPQUFPLFlBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDbEQsQ0FBQzs7OztJQUdELCtDQUFnQjs7O0lBQWhCO1FBQ0MsT0FBTyxpQkFBTSxnQkFBZ0IsWUFBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7O0lBR0QsNkNBQWM7OztJQUFkO1FBQ0MsT0FBTyxpQkFBTSxjQUFjLFlBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDekQsQ0FBQzs7OztJQUdELDRDQUFhOzs7SUFBYjtRQUNDLE9BQU8saUJBQU0sYUFBYSxZQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFHRCw0Q0FBYTs7O0lBQWI7UUFDQyxPQUFPLGlCQUFNLGFBQWEsWUFBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBR0QsMkNBQVk7OztJQUFaO1FBQ0MsT0FBTyxpQkFBTSxZQUFZLFlBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Z0JBekNELFVBQVU7Ozs7Z0JBZEYscUJBQXFCO2dCQU1yQiwwQkFBMEI7Z0JBQzFCLHFCQUFxQjtnQkFDckIsOEJBQThCO2dCQUM5QiwyQkFBMkI7Z0JBQzNCLDRCQUE0Qjs7SUFrQnBDO1FBREMsUUFBUTs7O2dEQUNFLFVBQVU7dURBRXBCO0lBR0Q7UUFEQyxRQUFROzs7Z0RBQ1csVUFBVTtnRUFFN0I7SUFHRDtRQURDLFFBQVE7OztnREFDUyxVQUFVOzhEQUUzQjtJQUdEO1FBREMsUUFBUTs7O2dEQUNRLFVBQVU7NkRBRTFCO0lBR0Q7UUFEQyxRQUFROzs7Z0RBQ1EsVUFBVTs2REFFMUI7SUFHRDtRQURDLFFBQVE7OztnREFDTyxVQUFVOzREQUV6QjtJQUVGLDJCQUFDO0NBQUEsQUEzQ0QsQ0FDMEMsZUFBZSxHQTBDeEQ7U0ExQ1ksb0JBQW9COzs7Ozs7SUFFcEIscURBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluLWFwaS9yZWFkL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTY2hlbWFXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluLWFwaS9zY2hlbWEud2FyZWhvdXNlJztcblxuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgU2NoZW1hQ3NzQ2xhc3MgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluLWFwaS9jc3MtY2xhc3Nlcy9zY2hlbWEtY3NzLWNsYXNzJztcbmltcG9ydCB7IFNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi1hcGkvY3NzLWNsYXNzZXMvc2NoZW1hLmNzcy1jbGFzc2VzLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi1hcGkvdGhlbWUvc2NoZW1hLnRoZW1lLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hSG9yaXpvbnRhbEdyaWRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi1hcGkvaG9yaXpvbnRhbC1ncmlkL3NjaGVtYS5ob3Jpem9udGFsLWdyaWQucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZ1JlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluLWFwaS9yb3ctY29sb3Jpbmcvc2NoZW1hLnJvdy1jb2xvcmluZy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYVZlcnRpY2FsR3JpZFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluLWFwaS92ZXJ0aWNhbC1ncmlkL3NjaGVtYS52ZXJ0aWNhbC1ncmlkLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluL2NvbG9yaW5nL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbFNjaGVtYVdhcmVob3VzZSBleHRlbmRzIFNjaGVtYVdhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzY2hlbWFSZWFkTW9kZWxSb290SWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCxcblx0XHRcdFx0c2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnk6IFNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5LFxuXHRcdFx0XHRzY2hlbWFUaGVtZVJlcG9zaXRvcnk6IFNjaGVtYVRoZW1lUmVwb3NpdG9yeSxcblx0XHRcdFx0c2NoZW1hSG9yaXpvbnRhbEdyaWRSZXBvc2l0b3J5OiBTY2hlbWFIb3Jpem9udGFsR3JpZFJlcG9zaXRvcnksXG5cdFx0XHRcdHNjaGVtYVJvd0NvbG9yaW5nUmVwb3NpdG9yeTogU2NoZW1hUm93Q29sb3JpbmdSZXBvc2l0b3J5LFxuXHRcdFx0XHRzY2hlbWFWZXJ0aWNhbEdyaWRSZXBvc2l0b3J5OiBTY2hlbWFWZXJ0aWNhbEdyaWRSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoc2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnksIHNjaGVtYVRoZW1lUmVwb3NpdG9yeSwgc2NoZW1hSG9yaXpvbnRhbEdyaWRSZXBvc2l0b3J5LFxuXHRcdFx0c2NoZW1hUm93Q29sb3JpbmdSZXBvc2l0b3J5LCBzY2hlbWFWZXJ0aWNhbEdyaWRSZXBvc2l0b3J5KTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblRoZW1lKCk6IE9ic2VydmFibGU8U2NoZW1hVGhlbWU+IHtcblx0XHRyZXR1cm4gc3VwZXIub25UaGVtZSh0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25Ib3Jpem9udGFsR3JpZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gc3VwZXIub25Ib3Jpem9udGFsR3JpZCh0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25WZXJ0aWNhbEdyaWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uVmVydGljYWxHcmlkKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblJvd0NvbG9yaW5nKCk6IE9ic2VydmFibGU8U2NoZW1hUm93Q29sb3Jpbmc+IHtcblx0XHRyZXR1cm4gc3VwZXIub25Sb3dDb2xvcmluZyh0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25TaW5nbGVUaGVtZSgpOiBPYnNlcnZhYmxlPFNjaGVtYVRoZW1lPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uU2luZ2xlVGhlbWUodGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uQ3NzQ2xhc3NlcygpOiBPYnNlcnZhYmxlPFNjaGVtYUNzc0NsYXNzPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uQ3NzQ2xhc3Nlcyh0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cdH1cblxufVxuIl19