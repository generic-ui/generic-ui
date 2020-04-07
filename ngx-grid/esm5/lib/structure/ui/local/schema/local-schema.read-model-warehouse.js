/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SchemaReadModelRootRepository } from '../../../../schema/read/schema.read-model-root-repository';
import { SchemaReadModelRootId } from '../../../../schema/read/schema.read-model-root-id';
import { SchemaReadModelWarehouse } from '../../../../schema/ui-api/schema.read-model-warehouse';
import { Override } from '../../../../../common/cdk/decorators';
var LocalSchemaReadModelWarehouse = /** @class */ (function (_super) {
    tslib_1.__extends(LocalSchemaReadModelWarehouse, _super);
    function LocalSchemaReadModelWarehouse(schemaReadModelRootId, schemaReadModelRootRepository) {
        var _this = _super.call(this, schemaReadModelRootRepository) || this;
        _this.schemaReadModelRootId = schemaReadModelRootId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalSchemaReadModelWarehouse.prototype.onSingleTheme = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onSingleTheme.call(this, this.schemaReadModelRootId);
    };
    /**
     * @return {?}
     */
    LocalSchemaReadModelWarehouse.prototype.onCssClasses = /**
     * @return {?}
     */
    function () {
        return _super.prototype.onCssClasses.call(this, this.schemaReadModelRootId);
    };
    LocalSchemaReadModelWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalSchemaReadModelWarehouse.ctorParameters = function () { return [
        { type: SchemaReadModelRootId },
        { type: SchemaReadModelRootRepository }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalSchemaReadModelWarehouse.prototype, "onSingleTheme", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Observable)
    ], LocalSchemaReadModelWarehouse.prototype, "onCssClasses", null);
    return LocalSchemaReadModelWarehouse;
}(SchemaReadModelWarehouse));
export { LocalSchemaReadModelWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalSchemaReadModelWarehouse.prototype.schemaReadModelRootId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc2NoZW1hLnJlYWQtbW9kZWwtd2FyZWhvdXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2xvY2FsL3NjaGVtYS9sb2NhbC1zY2hlbWEucmVhZC1tb2RlbC13YXJlaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDMUcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFFMUYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFFakcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBSWhFO0lBQ21ELHlEQUF3QjtJQUUxRSx1Q0FBNkIscUJBQTRDLEVBQ3RFLDZCQUE0RDtRQUQvRCxZQUVDLGtCQUFNLDZCQUE2QixDQUFDLFNBQ3BDO1FBSDRCLDJCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7O0lBR3pFLENBQUM7Ozs7SUFHRCxxREFBYTs7O0lBQWI7UUFDQyxPQUFPLGlCQUFNLGFBQWEsWUFBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBR0Qsb0RBQVk7OztJQUFaO1FBQ0MsT0FBTyxpQkFBTSxZQUFZLFlBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Z0JBaEJELFVBQVU7Ozs7Z0JBUkYscUJBQXFCO2dCQURyQiw2QkFBNkI7O0lBa0JyQztRQURDLFFBQVE7OztnREFDUSxVQUFVO3NFQUUxQjtJQUdEO1FBREMsUUFBUTs7O2dEQUNPLFVBQVU7cUVBRXpCO0lBRUYsb0NBQUM7Q0FBQSxBQWxCRCxDQUNtRCx3QkFBd0IsR0FpQjFFO1NBakJZLDZCQUE2Qjs7Ozs7O0lBRTdCLDhEQUE2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvcmVhZC9zY2hlbWEucmVhZC1tb2RlbC1yb290LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL3JlYWQvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4vc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS91aS1hcGkvc2NoZW1hLnJlYWQtbW9kZWwtd2FyZWhvdXNlJztcblxuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgU2NoZW1hQ3NzQ2xhc3MgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvcmVhZC9zY2hlbWEtY3NzLWNsYXNzJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxTY2hlbWFSZWFkTW9kZWxXYXJlaG91c2UgZXh0ZW5kcyBTY2hlbWFSZWFkTW9kZWxXYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hUmVhZE1vZGVsUm9vdElkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdHNjaGVtYVJlYWRNb2RlbFJvb3RSZXBvc2l0b3J5OiBTY2hlbWFSZWFkTW9kZWxSb290UmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKHNjaGVtYVJlYWRNb2RlbFJvb3RSZXBvc2l0b3J5KTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblNpbmdsZVRoZW1lKCk6IE9ic2VydmFibGU8U2NoZW1hVGhlbWU+IHtcblx0XHRyZXR1cm4gc3VwZXIub25TaW5nbGVUaGVtZSh0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25Dc3NDbGFzc2VzKCk6IE9ic2VydmFibGU8U2NoZW1hQ3NzQ2xhc3M+IHtcblx0XHRyZXR1cm4gc3VwZXIub25Dc3NDbGFzc2VzKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKTtcblx0fVxuXG59XG4iXX0=