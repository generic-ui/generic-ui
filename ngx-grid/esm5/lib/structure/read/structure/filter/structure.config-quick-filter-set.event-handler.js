/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureQuickFilterRepository } from './structure.quick-filter.repository';
import { StructureConfigQuickFilterSetEvent } from '../../../domain/structure/filter/quick/structure.config-quick-filter-set.event';
var StructureConfigQuickFilterSetEventHandler = /** @class */ (function (_super) {
    tslib_1.__extends(StructureConfigQuickFilterSetEventHandler, _super);
    function StructureConfigQuickFilterSetEventHandler(structureQuickFilterRepository) {
        var _this = _super.call(this) || this;
        _this.structureQuickFilterRepository = structureQuickFilterRepository;
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    StructureConfigQuickFilterSetEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event instanceof StructureConfigQuickFilterSetEvent) {
            this.structureQuickFilterRepository.setEnabled(event.getEnabled(), event.getAggregateId());
        }
    };
    StructureConfigQuickFilterSetEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureConfigQuickFilterSetEventHandler.ctorParameters = function () { return [
        { type: StructureQuickFilterRepository }
    ]; };
    return StructureConfigQuickFilterSetEventHandler;
}(DomainEventHandler));
export { StructureConfigQuickFilterSetEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureConfigQuickFilterSetEventHandler.prototype.structureQuickFilterRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbmZpZy1xdWljay1maWx0ZXItc2V0LmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvcmVhZC9zdHJ1Y3R1cmUvZmlsdGVyL3N0cnVjdHVyZS5jb25maWctcXVpY2stZmlsdGVyLXNldC5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNyRixPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxnRkFBZ0YsQ0FBQztBQUdwSTtJQUMrRCxxRUFBa0I7SUFFaEYsbURBQW9CLDhCQUE4RDtRQUFsRixZQUNDLGlCQUFPLFNBQ1A7UUFGbUIsb0NBQThCLEdBQTlCLDhCQUE4QixDQUFnQzs7SUFFbEYsQ0FBQzs7Ozs7SUFFRCwwREFBTTs7OztJQUFOLFVBQU8sS0FBeUM7UUFFL0MsSUFBSSxLQUFLLFlBQVksa0NBQWtDLEVBQUU7WUFDeEQsSUFBSSxDQUFDLDhCQUE4QixDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLEVBQUUsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7U0FDM0Y7SUFFRixDQUFDOztnQkFiRCxVQUFVOzs7O2dCQUpGLDhCQUE4Qjs7SUFtQnZDLGdEQUFDO0NBQUEsQUFmRCxDQUMrRCxrQkFBa0IsR0FjaEY7U0FkWSx5Q0FBeUM7Ozs7OztJQUV6QyxtRkFBc0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVF1aWNrRmlsdGVyUmVwb3NpdG9yeSB9IGZyb20gJy4vc3RydWN0dXJlLnF1aWNrLWZpbHRlci5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbmZpZ1F1aWNrRmlsdGVyU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL2ZpbHRlci9xdWljay9zdHJ1Y3R1cmUuY29uZmlnLXF1aWNrLWZpbHRlci1zZXQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb25maWdRdWlja0ZpbHRlclNldEV2ZW50SGFuZGxlciBleHRlbmRzIERvbWFpbkV2ZW50SGFuZGxlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVRdWlja0ZpbHRlclJlcG9zaXRvcnk6IFN0cnVjdHVyZVF1aWNrRmlsdGVyUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IFN0cnVjdHVyZUNvbmZpZ1F1aWNrRmlsdGVyU2V0RXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudCBpbnN0YW5jZW9mIFN0cnVjdHVyZUNvbmZpZ1F1aWNrRmlsdGVyU2V0RXZlbnQpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlUXVpY2tGaWx0ZXJSZXBvc2l0b3J5LnNldEVuYWJsZWQoZXZlbnQuZ2V0RW5hYmxlZCgpLCBldmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=