/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateArchive } from '../../../../common/aggregate.archive';
/**
 * @abstract
 * @template I, E, V
 */
export class EventDrivenRepository extends AggregateArchive {
    /**
     * @protected
     * @param {?=} defaultValues
     */
    constructor(defaultValues) {
        super(defaultValues);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        this.next(event.getAggregateId(), event.getPayload());
    }
}
if (false) {
    /**
     * @abstract
     * @return {?}
     */
    EventDrivenRepository.prototype.forEvent = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtZHJpdmVuLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb3JlL2RvbWFpbi9ldmVudC9oYW5kbGVyL2V2ZW50LWRyaXZlbi5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7QUFLeEUsTUFBTSxPQUFnQixxQkFDckIsU0FBUSxnQkFBbUI7Ozs7O0lBRTNCLFlBQXNCLGFBQWlCO1FBQ3RDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN0QixDQUFDOzs7OztJQUlELE1BQU0sQ0FBQyxLQUFRO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQUUsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDdkQsQ0FBQztDQUNEOzs7Ozs7SUFMQSwyREFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICcuL2RvbWFpbi1ldmVudC5oYW5kbGVyJztcbmltcG9ydCB7IERvbWFpbkV2ZW50VHlwZSB9IGZyb20gJy4vZG9tYWluLWV2ZW50LXR5cGUnO1xuaW1wb3J0IHsgQWdncmVnYXRlQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9hZ2dyZWdhdGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICcuLi9kb21haW4tZXZlbnQnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFdmVudERyaXZlblJlcG9zaXRvcnk8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBFIGV4dGVuZHMgRG9tYWluRXZlbnQ8ST4sIFY+XG5cdGV4dGVuZHMgQWdncmVnYXRlQXJjaGl2ZTxWPiBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxJLCBFPiB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGRlZmF1bHRWYWx1ZXM/OiBWKSB7XG5cdFx0c3VwZXIoZGVmYXVsdFZhbHVlcyk7XG5cdH1cblxuXHRhYnN0cmFjdCBmb3JFdmVudCgpOiBEb21haW5FdmVudFR5cGU8RT47XG5cblx0aGFuZGxlKGV2ZW50OiBFKTogdm9pZCB7XG5cdFx0dGhpcy5uZXh0KGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCksIGV2ZW50LmdldFBheWxvYWQoKSk7XG5cdH1cbn1cbiJdfQ==