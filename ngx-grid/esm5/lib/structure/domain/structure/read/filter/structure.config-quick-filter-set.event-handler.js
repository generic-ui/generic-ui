/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureQuickFilterRepository } from './structure.quick-filter.repository';
import { StructureConfigQuickFilterSetEvent } from '../../command/filter/quick/structure.config-quick-filter-set.event';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbmZpZy1xdWljay1maWx0ZXItc2V0LmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9yZWFkL2ZpbHRlci9zdHJ1Y3R1cmUuY29uZmlnLXF1aWNrLWZpbHRlci1zZXQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFeEQsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDckYsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFJeEg7SUFDK0QscUVBQWtCO0lBRWhGLG1EQUFvQiw4QkFBOEQ7UUFBbEYsWUFDQyxpQkFBTyxTQUNQO1FBRm1CLG9DQUE4QixHQUE5Qiw4QkFBOEIsQ0FBZ0M7O0lBRWxGLENBQUM7Ozs7O0lBRUQsMERBQU07Ozs7SUFBTixVQUFPLEtBQXlDO1FBRS9DLElBQUksS0FBSyxZQUFZLGtDQUFrQyxFQUFFO1lBQ3hELElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxFQUFFLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1NBQzNGO0lBRUYsQ0FBQzs7Z0JBYkQsVUFBVTs7OztnQkFMRiw4QkFBOEI7O0lBb0J2QyxnREFBQztDQUFBLEFBZkQsQ0FDK0Qsa0JBQWtCLEdBY2hGO1NBZFkseUNBQXlDOzs7Ozs7SUFFekMsbUZBQXNFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVRdWlja0ZpbHRlclJlcG9zaXRvcnkgfSBmcm9tICcuL3N0cnVjdHVyZS5xdWljay1maWx0ZXIucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb25maWdRdWlja0ZpbHRlclNldEV2ZW50IH0gZnJvbSAnLi4vLi4vY29tbWFuZC9maWx0ZXIvcXVpY2svc3RydWN0dXJlLmNvbmZpZy1xdWljay1maWx0ZXItc2V0LmV2ZW50JztcblxuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb25maWdRdWlja0ZpbHRlclNldEV2ZW50SGFuZGxlciBleHRlbmRzIERvbWFpbkV2ZW50SGFuZGxlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVRdWlja0ZpbHRlclJlcG9zaXRvcnk6IFN0cnVjdHVyZVF1aWNrRmlsdGVyUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IFN0cnVjdHVyZUNvbmZpZ1F1aWNrRmlsdGVyU2V0RXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudCBpbnN0YW5jZW9mIFN0cnVjdHVyZUNvbmZpZ1F1aWNrRmlsdGVyU2V0RXZlbnQpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlUXVpY2tGaWx0ZXJSZXBvc2l0b3J5LnNldEVuYWJsZWQoZXZlbnQuZ2V0RW5hYmxlZCgpLCBldmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=