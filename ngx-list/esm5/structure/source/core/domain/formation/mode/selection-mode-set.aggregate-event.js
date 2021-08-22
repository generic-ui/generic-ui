/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { SelectionModeSetEvent } from './selection-mode-set.event';
import { StructureAggregateEvent } from '../../../../../core/domain/structure.aggregate-event';
var SelectionModeSetAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(SelectionModeSetAggregateEvent, _super);
    function SelectionModeSetAggregateEvent(structureId, mode) {
        var _this = _super.call(this, structureId, 'SelectionModeSetAggregateEvent') || this;
        _this.mode = mode;
        return _this;
    }
    /**
     * @return {?}
     */
    SelectionModeSetAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new SelectionModeSetEvent(this.getAggregateId(), this.mode);
    };
    return SelectionModeSetAggregateEvent;
}(StructureAggregateEvent));
export { SelectionModeSetAggregateEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SelectionModeSetAggregateEvent.prototype.mode;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLW1vZGUtc2V0LmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9jb3JlL2RvbWFpbi9mb3JtYXRpb24vbW9kZS9zZWxlY3Rpb24tbW9kZS1zZXQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFbkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFFL0Y7SUFBb0QsMERBQXVCO0lBRTFFLHdDQUFZLFdBQXdCLEVBQ2hCLElBQXNCO1FBRDFDLFlBRUMsa0JBQU0sV0FBVyxFQUFFLGdDQUFnQyxDQUFDLFNBQ3BEO1FBRm1CLFVBQUksR0FBSixJQUFJLENBQWtCOztJQUUxQyxDQUFDOzs7O0lBRUQsc0RBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUNGLHFDQUFDO0FBQUQsQ0FBQyxBQVZELENBQW9ELHVCQUF1QixHQVUxRTs7Ozs7OztJQVBHLDhDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU2VsZWN0aW9uTW9kZVNldEV2ZW50IH0gZnJvbSAnLi9zZWxlY3Rpb24tbW9kZS1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uTW9kZSB9IGZyb20gJy4uLy4uLy4uL2FwaS9yb3ctc2VsZWN0aW9uJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZS1ldmVudCc7XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3Rpb25Nb2RlU2V0QWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBTdHJ1Y3R1cmVBZ2dyZWdhdGVFdmVudCB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IG1vZGU6IFJvd1NlbGVjdGlvbk1vZGUpIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgJ1NlbGVjdGlvbk1vZGVTZXRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXHRcdHJldHVybiBuZXcgU2VsZWN0aW9uTW9kZVNldEV2ZW50KHRoaXMuZ2V0QWdncmVnYXRlSWQoKSwgdGhpcy5tb2RlKTtcblx0fVxufVxuIl19