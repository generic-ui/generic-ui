/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureSearchingRepository } from './structure.searching.repository';
import { StructureConfigSearchingSetEvent } from '../../../command/search/config/structure.config-searching-set.event';
var StructureConfigSearchingSetEventHandler = /** @class */ (function (_super) {
    tslib_1.__extends(StructureConfigSearchingSetEventHandler, _super);
    function StructureConfigSearchingSetEventHandler(structureSearchingRepository) {
        var _this = _super.call(this) || this;
        _this.structureSearchingRepository = structureSearchingRepository;
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    StructureConfigSearchingSetEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event instanceof StructureConfigSearchingSetEvent) {
            this.structureSearchingRepository.setEnabled(event.getEnabled(), event.getAggregateId());
        }
    };
    StructureConfigSearchingSetEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureConfigSearchingSetEventHandler.ctorParameters = function () { return [
        { type: StructureSearchingRepository }
    ]; };
    return StructureConfigSearchingSetEventHandler;
}(DomainEventHandler));
export { StructureConfigSearchingSetEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureConfigSearchingSetEventHandler.prototype.structureSearchingRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbmZpZy1zZWFyY2hpbmctc2V0LmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9yZWFkL3NlYXJjaGluZy9lbmFibGVkL3N0cnVjdHVyZS5jb25maWctc2VhcmNoaW5nLXNldC5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVoRixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUd2SDtJQUM2RCxtRUFBa0I7SUFFOUUsaURBQW9CLDRCQUEwRDtRQUE5RSxZQUNDLGlCQUFPLFNBQ1A7UUFGbUIsa0NBQTRCLEdBQTVCLDRCQUE0QixDQUE4Qjs7SUFFOUUsQ0FBQzs7Ozs7SUFFRCx3REFBTTs7OztJQUFOLFVBQU8sS0FBdUM7UUFFN0MsSUFBSSxLQUFLLFlBQVksZ0NBQWdDLEVBQUU7WUFDdEQsSUFBSSxDQUFDLDRCQUE0QixDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLEVBQUUsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7U0FDekY7SUFFRixDQUFDOztnQkFiRCxVQUFVOzs7O2dCQUxGLDRCQUE0Qjs7SUFvQnJDLDhDQUFDO0NBQUEsQUFmRCxDQUM2RCxrQkFBa0IsR0FjOUU7U0FkWSx1Q0FBdUM7Ozs7OztJQUV2QywrRUFBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVNlYXJjaGluZ1JlcG9zaXRvcnkgfSBmcm9tICcuL3N0cnVjdHVyZS5zZWFyY2hpbmcucmVwb3NpdG9yeSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUNvbmZpZ1NlYXJjaGluZ1NldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vY29tbWFuZC9zZWFyY2gvY29uZmlnL3N0cnVjdHVyZS5jb25maWctc2VhcmNoaW5nLXNldC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbmZpZ1NlYXJjaGluZ1NldEV2ZW50SGFuZGxlciBleHRlbmRzIERvbWFpbkV2ZW50SGFuZGxlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVTZWFyY2hpbmdSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVTZWFyY2hpbmdSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGhhbmRsZShldmVudDogU3RydWN0dXJlQ29uZmlnU2VhcmNoaW5nU2V0RXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudCBpbnN0YW5jZW9mIFN0cnVjdHVyZUNvbmZpZ1NlYXJjaGluZ1NldEV2ZW50KSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZVNlYXJjaGluZ1JlcG9zaXRvcnkuc2V0RW5hYmxlZChldmVudC5nZXRFbmFibGVkKCksIGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==