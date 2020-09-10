/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
import { CompositionColumnsSetEvent } from './composition.columns-set.event';
var ColumnsSetAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(ColumnsSetAggregateEvent, _super);
    function ColumnsSetAggregateEvent(compositionId) {
        return _super.call(this, compositionId, 'ColumnsSetAggregateEvent') || this;
    }
    /**
     * @return {?}
     */
    ColumnsSetAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new CompositionColumnsSetEvent(this.getAggregateId());
    };
    return ColumnsSetAggregateEvent;
}(AggregateEvent));
export { ColumnsSetAggregateEvent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1ucy1zZXQuYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9kb21haW4vY29sdW1uL3NldC1jb2x1bW5zL2NvbHVtbnMtc2V0LmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQWUsTUFBTSxvQkFBb0IsQ0FBQztBQUdqRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUc3RTtJQUE4QyxvREFBNkI7SUFFMUUsa0NBQVksYUFBNEI7ZUFDdkMsa0JBQU0sYUFBYSxFQUFFLDBCQUEwQixDQUFDO0lBQ2pELENBQUM7Ozs7SUFFRCxnREFBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksMEJBQTBCLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVGLCtCQUFDO0FBQUQsQ0FBQyxBQVZELENBQThDLGNBQWMsR0FVM0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db2x1bW5zU2V0RXZlbnQgfSBmcm9tICcuL2NvbXBvc2l0aW9uLmNvbHVtbnMtc2V0LmV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgQ29sdW1uc1NldEFnZ3JlZ2F0ZUV2ZW50IGV4dGVuZHMgQWdncmVnYXRlRXZlbnQ8Q29tcG9zaXRpb25JZD4ge1xuXG5cdGNvbnN0cnVjdG9yKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpIHtcblx0XHRzdXBlcihjb21wb3NpdGlvbklkLCAnQ29sdW1uc1NldEFnZ3JlZ2F0ZUV2ZW50Jyk7XG5cdH1cblxuXHR0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PENvbXBvc2l0aW9uSWQ+IHtcblx0XHRyZXR1cm4gbmV3IENvbXBvc2l0aW9uQ29sdW1uc1NldEV2ZW50KHRoaXMuZ2V0QWdncmVnYXRlSWQoKSk7XG5cdH1cblxufVxuIl19