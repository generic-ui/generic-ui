/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
import { CompositionCreatedEvent } from './composition-created.event';
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
}(AggregateEvent));
export { CompositionCreatedAggregateEvent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tY3JlYXRlZC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2RvbWFpbi9jcmVhdGUvY29tcG9zaXRpb24tY3JlYXRlZC5hZ2dyZWdhdGUtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFlLE1BQU0sb0JBQW9CLENBQUM7QUFHakUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFdEU7SUFBc0QsNERBQTZCO0lBRWxGLDBDQUFZLGFBQTRCO2VBQ3ZDLGtCQUFNLGFBQWEsRUFBRSxvQkFBb0IsQ0FBQztJQUMzQyxDQUFDOzs7O0lBRUQsd0RBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLHVCQUF1QixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFDRix1Q0FBQztBQUFELENBQUMsQUFURCxDQUFzRCxjQUFjLEdBU25FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQsIERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ3JlYXRlZEV2ZW50IH0gZnJvbSAnLi9jb21wb3NpdGlvbi1jcmVhdGVkLmV2ZW50JztcblxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uQ3JlYXRlZEFnZ3JlZ2F0ZUV2ZW50IGV4dGVuZHMgQWdncmVnYXRlRXZlbnQ8Q29tcG9zaXRpb25JZD4ge1xuXG5cdGNvbnN0cnVjdG9yKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpIHtcblx0XHRzdXBlcihjb21wb3NpdGlvbklkLCAnU2NoZW1hQ3JlYXRlZEV2ZW50Jyk7XG5cdH1cblxuXHR0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PENvbXBvc2l0aW9uSWQ+IHtcblx0XHRyZXR1cm4gbmV3IENvbXBvc2l0aW9uQ3JlYXRlZEV2ZW50KHRoaXMuZ2V0QWdncmVnYXRlSWQoKSk7XG5cdH1cbn1cbiJdfQ==