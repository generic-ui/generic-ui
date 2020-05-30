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
export class LocalSchemaWarehouse extends SchemaWarehouse {
    /**
     * @param {?} schemaReadModelRootId
     * @param {?} schemaCssClassesRepository
     * @param {?} schemaThemeRepository
     * @param {?} schemaHorizontalGridRepository
     * @param {?} schemaRowColoringRepository
     * @param {?} schemaVerticalGridRepository
     */
    constructor(schemaReadModelRootId, schemaCssClassesRepository, schemaThemeRepository, schemaHorizontalGridRepository, schemaRowColoringRepository, schemaVerticalGridRepository) {
        super(schemaCssClassesRepository, schemaThemeRepository, schemaHorizontalGridRepository, schemaRowColoringRepository, schemaVerticalGridRepository);
        this.schemaReadModelRootId = schemaReadModelRootId;
    }
    /**
     * @return {?}
     */
    onSingleTheme() {
        return super.onSingleTheme(this.schemaReadModelRootId);
    }
    /**
     * @return {?}
     */
    onTheme() {
        return super.onTheme(this.schemaReadModelRootId);
    }
    /**
     * @return {?}
     */
    onHorizontalGrid() {
        return super.onHorizontalGrid(this.schemaReadModelRootId);
    }
    /**
     * @return {?}
     */
    onVerticalGrid() {
        return super.onVerticalGrid(this.schemaReadModelRootId);
    }
    /**
     * @return {?}
     */
    onRowColoring() {
        return super.onRowColoring(this.schemaReadModelRootId);
    }
    /**
     * @return {?}
     */
    onCssClasses() {
        return super.onCssClasses(this.schemaReadModelRootId);
    }
}
LocalSchemaWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalSchemaWarehouse.ctorParameters = () => [
    { type: SchemaReadModelRootId },
    { type: SchemaCssClassesRepository },
    { type: SchemaThemeRepository },
    { type: SchemaHorizontalGridRepository },
    { type: SchemaRowColoringRepository },
    { type: SchemaVerticalGridRepository }
];
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalSchemaWarehouse.prototype.schemaReadModelRootId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc2NoZW1hLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL2xvY2FsL3NjaGVtYS9sb2NhbC1zY2hlbWEud2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBRXhHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUVwRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFaEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFDeEgsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDdkcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sb0ZBQW9GLENBQUM7QUFDcEksT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sOEVBQThFLENBQUM7QUFDM0gsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0ZBQWdGLENBQUM7QUFNOUgsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGVBQWU7Ozs7Ozs7OztJQUV4RCxZQUE2QixxQkFBNEMsRUFDdEUsMEJBQXNELEVBQ3RELHFCQUE0QyxFQUM1Qyw4QkFBOEQsRUFDOUQsMkJBQXdELEVBQ3hELDRCQUEwRDtRQUM1RCxLQUFLLENBQUMsMEJBQTBCLEVBQUUscUJBQXFCLEVBQUUsOEJBQThCLEVBQ3RGLDJCQUEyQixFQUFFLDRCQUE0QixDQUFDLENBQUM7UUFQaEMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQVF6RSxDQUFDOzs7O0lBR0QsYUFBYTtRQUNaLE9BQU8sS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBR0QsT0FBTztRQUNOLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7O0lBR0QsZ0JBQWdCO1FBQ2YsT0FBTyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDM0QsQ0FBQzs7OztJQUdELGNBQWM7UUFDYixPQUFPLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDekQsQ0FBQzs7OztJQUdELGFBQWE7UUFDWixPQUFPLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDeEQsQ0FBQzs7OztJQUdELFlBQVk7UUFDWCxPQUFPLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDdkQsQ0FBQzs7O1lBekNELFVBQVU7Ozs7WUFmRixxQkFBcUI7WUFNckIsMEJBQTBCO1lBQzFCLHFCQUFxQjtZQUNyQiw4QkFBOEI7WUFDOUIsMkJBQTJCO1lBQzNCLDRCQUE0Qjs7QUFtQnBDO0lBREMsUUFBUTs7OzRDQUNRLFVBQVU7eURBRTFCO0FBR0Q7SUFEQyxRQUFROzs7NENBQ0UsVUFBVTttREFFcEI7QUFHRDtJQURDLFFBQVE7Ozs0Q0FDVyxVQUFVOzREQUU3QjtBQUdEO0lBREMsUUFBUTs7OzRDQUNTLFVBQVU7MERBRTNCO0FBR0Q7SUFEQyxRQUFROzs7NENBQ1EsVUFBVTt5REFFMUI7QUFHRDtJQURDLFFBQVE7Ozs0Q0FDTyxVQUFVO3dEQUV6Qjs7Ozs7O0lBdENXLHFEQUE2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi1hcGkvcmVhZC9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi1hcGkvc2NoZW1hLndhcmVob3VzZSc7XG5cbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcbmltcG9ydCB7IFNjaGVtYUNzc0NsYXNzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi1hcGkvY3NzLWNsYXNzZXMvc2NoZW1hLWNzcy1jbGFzcyc7XG5pbXBvcnQgeyBTY2hlbWFDc3NDbGFzc2VzUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4tYXBpL2Nzcy1jbGFzc2VzL3NjaGVtYS5jc3MtY2xhc3Nlcy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYVRoZW1lUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4tYXBpL3RoZW1lL3NjaGVtYS50aGVtZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYUhvcml6b250YWxHcmlkUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4tYXBpL2hvcml6b250YWwtZ3JpZC9zY2hlbWEuaG9yaXpvbnRhbC1ncmlkLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmdSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi1hcGkvcm93LWNvbG9yaW5nL3NjaGVtYS5yb3ctY29sb3JpbmcucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFWZXJ0aWNhbEdyaWRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi1hcGkvdmVydGljYWwtZ3JpZC9zY2hlbWEudmVydGljYWwtZ3JpZC5yZXBvc2l0b3J5JztcbmltcG9ydCB7IHNjaGVtYUdsb2JhbElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi1hcGkvcmVhZC9zY2hlbWEuZ2xvYmFsLWlkJztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi9jb2xvcmluZy9zY2hlbWEtcm93LWNvbG9yaW5nJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxTY2hlbWFXYXJlaG91c2UgZXh0ZW5kcyBTY2hlbWFXYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hUmVhZE1vZGVsUm9vdElkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdHNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5OiBTY2hlbWFDc3NDbGFzc2VzUmVwb3NpdG9yeSxcblx0XHRcdFx0c2NoZW1hVGhlbWVSZXBvc2l0b3J5OiBTY2hlbWFUaGVtZVJlcG9zaXRvcnksXG5cdFx0XHRcdHNjaGVtYUhvcml6b250YWxHcmlkUmVwb3NpdG9yeTogU2NoZW1hSG9yaXpvbnRhbEdyaWRSZXBvc2l0b3J5LFxuXHRcdFx0XHRzY2hlbWFSb3dDb2xvcmluZ1JlcG9zaXRvcnk6IFNjaGVtYVJvd0NvbG9yaW5nUmVwb3NpdG9yeSxcblx0XHRcdFx0c2NoZW1hVmVydGljYWxHcmlkUmVwb3NpdG9yeTogU2NoZW1hVmVydGljYWxHcmlkUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKHNjaGVtYUNzc0NsYXNzZXNSZXBvc2l0b3J5LCBzY2hlbWFUaGVtZVJlcG9zaXRvcnksIHNjaGVtYUhvcml6b250YWxHcmlkUmVwb3NpdG9yeSxcblx0XHRcdHNjaGVtYVJvd0NvbG9yaW5nUmVwb3NpdG9yeSwgc2NoZW1hVmVydGljYWxHcmlkUmVwb3NpdG9yeSk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25TaW5nbGVUaGVtZSgpOiBPYnNlcnZhYmxlPFNjaGVtYVRoZW1lPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uU2luZ2xlVGhlbWUodGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uVGhlbWUoKTogT2JzZXJ2YWJsZTxTY2hlbWFUaGVtZT4ge1xuXHRcdHJldHVybiBzdXBlci5vblRoZW1lKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvbkhvcml6b250YWxHcmlkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiBzdXBlci5vbkhvcml6b250YWxHcmlkKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblZlcnRpY2FsR3JpZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gc3VwZXIub25WZXJ0aWNhbEdyaWQodGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uUm93Q29sb3JpbmcoKTogT2JzZXJ2YWJsZTxTY2hlbWFSb3dDb2xvcmluZz4ge1xuXHRcdHJldHVybiBzdXBlci5vblJvd0NvbG9yaW5nKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvbkNzc0NsYXNzZXMoKTogT2JzZXJ2YWJsZTxTY2hlbWFDc3NDbGFzcz4ge1xuXHRcdHJldHVybiBzdXBlci5vbkNzc0NsYXNzZXModGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cbn1cbiJdfQ==