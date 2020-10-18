/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StructureDomainEvent } from '../../../../core/domain/structure.domain-event';
export class ScrollBarPositionSetEvent extends StructureDomainEvent {
    /**
     * @param {?} aggregateId
     * @param {?} position
     */
    constructor(aggregateId, position) {
        super(aggregateId, 'ScrollBarPositionSetEvent');
        this.position = position;
    }
    /**
     * @return {?}
     */
    getPosition() {
        return this.position;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ScrollBarPositionSetEvent.prototype.position;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWJhci1wb3NpdGlvbi1zZXQuZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9kb21haW4vc2Nyb2xsLWJhci9zY3JvbGwtYmFyLXBvc2l0aW9uLXNldC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFFdEYsTUFBTSxPQUFPLHlCQUEwQixTQUFRLG9CQUFvQjs7Ozs7SUFFbEUsWUFBWSxXQUF3QixFQUNoQixRQUFnQjtRQUNuQyxLQUFLLENBQUMsV0FBVyxFQUFFLDJCQUEyQixDQUFDLENBQUM7UUFEN0IsYUFBUSxHQUFSLFFBQVEsQ0FBUTtJQUVwQyxDQUFDOzs7O0lBRUQsV0FBVztRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDO0NBQ0Q7Ozs7OztJQVBHLDZDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZURvbWFpbkV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmRvbWFpbi1ldmVudCc7XG5cbmV4cG9ydCBjbGFzcyBTY3JvbGxCYXJQb3NpdGlvblNldEV2ZW50IGV4dGVuZHMgU3RydWN0dXJlRG9tYWluRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwb3NpdGlvbjogbnVtYmVyKSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsICdTY3JvbGxCYXJQb3NpdGlvblNldEV2ZW50Jyk7XG5cdH1cblxuXHRnZXRQb3NpdGlvbigpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnBvc2l0aW9uO1xuXHR9XG59XG4iXX0=