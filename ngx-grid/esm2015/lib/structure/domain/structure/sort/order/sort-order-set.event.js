/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainEvent } from '@generic-ui/hermes';
export class SortOrderSetEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     * @param {?} compositionId
     * @param {?} directions
     */
    constructor(aggregateId, compositionId, directions) {
        super(aggregateId, 'SortOrderSetEvent');
        this.compositionId = compositionId;
        this.directions = directions;
    }
    /**
     * @return {?}
     */
    getCompositionId() {
        return this.compositionId;
    }
    /**
     * @return {?}
     */
    getDirections() {
        return this.directions;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SortOrderSetEvent.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    SortOrderSetEvent.prototype.directions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1vcmRlci1zZXQuZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9zb3J0L29yZGVyL3NvcnQtb3JkZXItc2V0LmV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJOUQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFdBQVc7Ozs7OztJQUVqRCxZQUFZLFdBQXdCLEVBQ2hCLGFBQTRCLEVBQzVCLFVBQTJEO1FBQzlFLEtBQUssQ0FBQyxXQUFXLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUZyQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixlQUFVLEdBQVYsVUFBVSxDQUFpRDtJQUUvRSxDQUFDOzs7O0lBRUQsZ0JBQWdCO1FBQ2YsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7Q0FDRDs7Ozs7O0lBWkcsMENBQTZDOzs7OztJQUM3Qyx1Q0FBNEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVJZCwgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vZmllbGQvZGF0YS10eXBlL2ZpZWxkLmlkJztcblxuZXhwb3J0IGNsYXNzIFNvcnRPcmRlclNldEV2ZW50IGV4dGVuZHMgRG9tYWluRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRpcmVjdGlvbnM6IEFycmF5PHsgZmllbGRJZDogRmllbGRJZCwgZGlyZWN0aW9uOiBib29sZWFuIH0+KSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsICdTb3J0T3JkZXJTZXRFdmVudCcpO1xuXHR9XG5cblx0Z2V0Q29tcG9zaXRpb25JZCgpOiBDb21wb3NpdGlvbklkIHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvbklkO1xuXHR9XG5cblx0Z2V0RGlyZWN0aW9ucygpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLmRpcmVjdGlvbnM7XG5cdH1cbn1cbiJdfQ==