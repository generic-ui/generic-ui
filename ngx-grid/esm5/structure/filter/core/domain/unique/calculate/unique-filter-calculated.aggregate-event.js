/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { UniqueFilterCalculatedEvent } from './unique-filter-calculated.event';
import { StructureAggregateEvent } from '../../../../../core/domain/structure.aggregate-event';
var UniqueFilterCalculatedAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(UniqueFilterCalculatedAggregateEvent, _super);
    function UniqueFilterCalculatedAggregateEvent(aggregateId, map) {
        var _this = _super.call(this, aggregateId, 'UniqueFilterCalculatedAggregateEvent') || this;
        _this.map = map;
        return _this;
    }
    /**
     * @return {?}
     */
    UniqueFilterCalculatedAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new UniqueFilterCalculatedEvent(this.getAggregateId(), this.map);
    };
    return UniqueFilterCalculatedAggregateEvent;
}(StructureAggregateEvent));
export { UniqueFilterCalculatedAggregateEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    UniqueFilterCalculatedAggregateEvent.prototype.map;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLWZpbHRlci1jYWxjdWxhdGVkLmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9jb3JlL2RvbWFpbi91bmlxdWUvY2FsY3VsYXRlL3VuaXF1ZS1maWx0ZXItY2FsY3VsYXRlZC5hZ2dyZWdhdGUtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUUvRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUcvRjtJQUEwRCxnRUFBdUI7SUFFaEYsOENBQVksV0FBd0IsRUFDaEIsR0FBb0M7UUFEeEQsWUFFQyxrQkFBTSxXQUFXLEVBQUUsc0NBQXNDLENBQUMsU0FDMUQ7UUFGbUIsU0FBRyxHQUFILEdBQUcsQ0FBaUM7O0lBRXhELENBQUM7Ozs7SUFFRCw0REFBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksMkJBQTJCLENBQ3JDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FDUixDQUFDO0lBQ0gsQ0FBQztJQUVGLDJDQUFDO0FBQUQsQ0FBQyxBQWRELENBQTBELHVCQUF1QixHQWNoRjs7Ozs7OztJQVhHLG1EQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgVW5pcXVlRmlsdGVyQ2FsY3VsYXRlZEV2ZW50IH0gZnJvbSAnLi91bmlxdWUtZmlsdGVyLWNhbGN1bGF0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWUgfSBmcm9tICcuLi91bmlxdWUtdmFsdWUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlLWV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgVW5pcXVlRmlsdGVyQ2FsY3VsYXRlZEFnZ3JlZ2F0ZUV2ZW50IGV4dGVuZHMgU3RydWN0dXJlQWdncmVnYXRlRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBtYXA6IE1hcDxzdHJpbmcsIEFycmF5PFVuaXF1ZVZhbHVlPj4pIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgJ1VuaXF1ZUZpbHRlckNhbGN1bGF0ZWRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXHRcdHJldHVybiBuZXcgVW5pcXVlRmlsdGVyQ2FsY3VsYXRlZEV2ZW50KFxuXHRcdFx0dGhpcy5nZXRBZ2dyZWdhdGVJZCgpLFxuXHRcdFx0dGhpcy5tYXBcblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==