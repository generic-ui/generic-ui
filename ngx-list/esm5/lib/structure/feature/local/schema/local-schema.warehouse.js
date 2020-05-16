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
var LocalSchemaWarehouse = /** @class */ (function (_super) {
    tslib_1.__extends(LocalSchemaWarehouse, _super);
    function LocalSchemaWarehouse(schemaReadModelRootId, schemaCssClassesRepository, schemaThemeRepository) {
        var _this = _super.call(this, schemaCssClassesRepository, schemaThemeRepository) || this;
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
        { type: SchemaThemeRepository }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc2NoZW1hLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL2xvY2FsL3NjaGVtYS9sb2NhbC1zY2hlbWEud2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBRXhHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUVwRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFaEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFDeEgsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFHdkc7SUFDMEMsZ0RBQWU7SUFFeEQsOEJBQTZCLHFCQUE0QyxFQUN0RSwwQkFBc0QsRUFDdEQscUJBQTRDO1FBRi9DLFlBR0Msa0JBQU0sMEJBQTBCLEVBQUUscUJBQXFCLENBQUMsU0FDeEQ7UUFKNEIsMkJBQXFCLEdBQXJCLHFCQUFxQixDQUF1Qjs7SUFJekUsQ0FBQzs7OztJQUdELDRDQUFhOzs7SUFBYjtRQUNDLE9BQU8saUJBQU0sYUFBYSxZQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFHRCwyQ0FBWTs7O0lBQVo7UUFDQyxPQUFPLGlCQUFNLFlBQVksWUFBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN2RCxDQUFDOztnQkFqQkQsVUFBVTs7OztnQkFWRixxQkFBcUI7Z0JBTXJCLDBCQUEwQjtnQkFDMUIscUJBQXFCOztJQWE3QjtRQURDLFFBQVE7OztnREFDUSxVQUFVOzZEQUUxQjtJQUdEO1FBREMsUUFBUTs7O2dEQUNPLFVBQVU7NERBRXpCO0lBRUYsMkJBQUM7Q0FBQSxBQW5CRCxDQUMwQyxlQUFlLEdBa0J4RDtTQWxCWSxvQkFBb0I7Ozs7OztJQUVwQixxREFBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4tYXBpL3JlYWQvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4vdGhlbWUvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4tYXBpL3NjaGVtYS53YXJlaG91c2UnO1xuXG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBTY2hlbWFDc3NDbGFzcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4tYXBpL2Nzcy1jbGFzc2VzL3NjaGVtYS1jc3MtY2xhc3MnO1xuaW1wb3J0IHsgU2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluLWFwaS9jc3MtY2xhc3Nlcy9zY2hlbWEuY3NzLWNsYXNzZXMucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluLWFwaS90aGVtZS9zY2hlbWEudGhlbWUucmVwb3NpdG9yeSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsU2NoZW1hV2FyZWhvdXNlIGV4dGVuZHMgU2NoZW1hV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVJlYWRNb2RlbFJvb3RJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0XHRzY2hlbWFDc3NDbGFzc2VzUmVwb3NpdG9yeTogU2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnksXG5cdFx0XHRcdHNjaGVtYVRoZW1lUmVwb3NpdG9yeTogU2NoZW1hVGhlbWVSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoc2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnksIHNjaGVtYVRoZW1lUmVwb3NpdG9yeSk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25TaW5nbGVUaGVtZSgpOiBPYnNlcnZhYmxlPFNjaGVtYVRoZW1lPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uU2luZ2xlVGhlbWUodGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG9uQ3NzQ2xhc3NlcygpOiBPYnNlcnZhYmxlPFNjaGVtYUNzc0NsYXNzPiB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uQ3NzQ2xhc3Nlcyh0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cdH1cblxufVxuIl19