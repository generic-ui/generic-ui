/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureFilterRepository } from './structure.filter.repository';
import { StructureConfigFilterSetEvent } from '../../../domain/structure/filter/config/structure.config-filter-set.event';
var StructureConfigFilterSetEventHandler = /** @class */ (function (_super) {
    tslib_1.__extends(StructureConfigFilterSetEventHandler, _super);
    function StructureConfigFilterSetEventHandler(structureFilterRepository) {
        var _this = _super.call(this) || this;
        _this.structureFilterRepository = structureFilterRepository;
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    StructureConfigFilterSetEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event instanceof StructureConfigFilterSetEvent) {
            this.structureFilterRepository.setEnabled(event.getEnabled(), event.getAggregateId());
        }
    };
    StructureConfigFilterSetEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureConfigFilterSetEventHandler.ctorParameters = function () { return [
        { type: StructureFilterRepository }
    ]; };
    return StructureConfigFilterSetEventHandler;
}(DomainEventHandler));
export { StructureConfigFilterSetEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureConfigFilterSetEventHandler.prototype.structureFilterRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbmZpZy1maWx0ZXItc2V0LmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvcmVhZC9zdHJ1Y3R1cmUvZmlsdGVyL3N0cnVjdHVyZS5jb25maWctZmlsdGVyLXNldC5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwyRUFBMkUsQ0FBQztBQUcxSDtJQUMwRCxnRUFBa0I7SUFFM0UsOENBQW9CLHlCQUFvRDtRQUF4RSxZQUNDLGlCQUFPLFNBQ1A7UUFGbUIsK0JBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjs7SUFFeEUsQ0FBQzs7Ozs7SUFFRCxxREFBTTs7OztJQUFOLFVBQU8sS0FBb0M7UUFFMUMsSUFBSSxLQUFLLFlBQVksNkJBQTZCLEVBQUU7WUFDbkQsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLEVBQUUsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7U0FDdEY7SUFFRixDQUFDOztnQkFiRCxVQUFVOzs7O2dCQUpGLHlCQUF5Qjs7SUFtQmxDLDJDQUFDO0NBQUEsQUFmRCxDQUMwRCxrQkFBa0IsR0FjM0U7U0FkWSxvQ0FBb0M7Ozs7OztJQUVwQyx5RUFBNEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWx0ZXJSZXBvc2l0b3J5IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuZmlsdGVyLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29uZmlnRmlsdGVyU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL2ZpbHRlci9jb25maWcvc3RydWN0dXJlLmNvbmZpZy1maWx0ZXItc2V0LmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29uZmlnRmlsdGVyU2V0RXZlbnRIYW5kbGVyIGV4dGVuZHMgRG9tYWluRXZlbnRIYW5kbGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUZpbHRlclJlcG9zaXRvcnk6IFN0cnVjdHVyZUZpbHRlclJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBTdHJ1Y3R1cmVDb25maWdGaWx0ZXJTZXRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50IGluc3RhbmNlb2YgU3RydWN0dXJlQ29uZmlnRmlsdGVyU2V0RXZlbnQpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlRmlsdGVyUmVwb3NpdG9yeS5zZXRFbmFibGVkKGV2ZW50LmdldEVuYWJsZWQoKSwgZXZlbnQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cdFx0fVxuXG5cdH1cblxufVxuIl19