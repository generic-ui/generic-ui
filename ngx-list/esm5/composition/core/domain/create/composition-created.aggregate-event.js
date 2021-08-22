/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CompositionCreatedEvent } from './composition-created.event';
import { CompositionAggregateEvent } from '../composition.aggregate-event';
var CompositionCreatedAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(CompositionCreatedAggregateEvent, _super);
    function CompositionCreatedAggregateEvent(compositionId) {
        return _super.call(this, compositionId, 'SchemaCreatedEvent') || this;
    }
    /**
     * @return {?}
     */
    CompositionCreatedAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new CompositionCreatedEvent(this.getAggregateId());
    };
    return CompositionCreatedAggregateEvent;
}(CompositionAggregateEvent));
export { CompositionCreatedAggregateEvent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tY3JlYXRlZC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NyZWF0ZS9jb21wb3NpdGlvbi1jcmVhdGVkLmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTNFO0lBQXNELDREQUF5QjtJQUU5RSwwQ0FBWSxhQUE0QjtlQUN2QyxrQkFBTSxhQUFhLEVBQUUsb0JBQW9CLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELHdEQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBQ0YsdUNBQUM7QUFBRCxDQUFDLEFBVEQsQ0FBc0QseUJBQXlCLEdBUzlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25DcmVhdGVkRXZlbnQgfSBmcm9tICcuL2NvbXBvc2l0aW9uLWNyZWF0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1ldmVudCc7XG5cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkNyZWF0ZWRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIENvbXBvc2l0aW9uQWdncmVnYXRlRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpIHtcblx0XHRzdXBlcihjb21wb3NpdGlvbklkLCAnU2NoZW1hQ3JlYXRlZEV2ZW50Jyk7XG5cdH1cblxuXHR0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PENvbXBvc2l0aW9uSWQ+IHtcblx0XHRyZXR1cm4gbmV3IENvbXBvc2l0aW9uQ3JlYXRlZEV2ZW50KHRoaXMuZ2V0QWdncmVnYXRlSWQoKSk7XG5cdH1cbn1cbiJdfQ==