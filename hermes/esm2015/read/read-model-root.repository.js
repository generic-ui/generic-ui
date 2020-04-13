/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Reactive } from '../common/reactive';
/**
 * @abstract
 * @template I
 */
export class ReadModelRootRepository extends Reactive {
    /**
     * @protected
     * @param {?} domainEventBus
     */
    constructor(domainEventBus) {
        super();
        domainEventBus
            .ofEvent(...this.forEvents())
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            try {
                this.subscribe(event);
            }
            catch (e) {
                console.error(e);
            }
        }));
    }
}
if (false) {
    /**
     * @abstract
     * @protected
     * @return {?}
     */
    ReadModelRootRepository.prototype.forEvents = function () { };
    /**
     * @abstract
     * @protected
     * @param {?} event
     * @return {?}
     */
    ReadModelRootRepository.prototype.subscribe = function (event) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZC1tb2RlbC1yb290LnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJyZWFkL3JlYWQtbW9kZWwtcm9vdC5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7O0FBRzlDLE1BQU0sT0FBZ0IsdUJBQStDLFNBQVEsUUFBUTs7Ozs7SUFFcEYsWUFBc0IsY0FBOEI7UUFDbkQsS0FBSyxFQUFFLENBQUM7UUFDUixjQUFjO2FBQ1osT0FBTyxDQUNQLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNuQjthQUNBLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsS0FBcUIsRUFBRSxFQUFFO1lBRXBDLElBQUk7Z0JBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN0QjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDakI7UUFDRixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Q0FNRDs7Ozs7OztJQUpBLDhEQUEwRDs7Ozs7OztJQUUxRCxtRUFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRCdXMgfSBmcm9tICcuLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LmJ1cyc7XG5cbmltcG9ydCB7IFJlYWN0aXZlIH0gZnJvbSAnLi4vY29tbW9uL3JlYWN0aXZlJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vZG9tYWluL2FnZ3JlZ2F0ZS1pZCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSZWFkTW9kZWxSb290UmVwb3NpdG9yeTxJIGV4dGVuZHMgQWdncmVnYXRlSWQ+IGV4dGVuZHMgUmVhY3RpdmUge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMpIHtcblx0XHRzdXBlcigpO1xuXHRcdGRvbWFpbkV2ZW50QnVzXG5cdFx0XHQub2ZFdmVudChcblx0XHRcdFx0Li4udGhpcy5mb3JFdmVudHMoKVxuXHRcdFx0KVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGV2ZW50OiBEb21haW5FdmVudDxJPikgPT4ge1xuXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dGhpcy5zdWJzY3JpYmUoZXZlbnQpO1xuXHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgZm9yRXZlbnRzKCk6IEFycmF5PHR5cGVvZiBEb21haW5FdmVudD47XG5cblx0cHJvdGVjdGVkIGFic3RyYWN0IHN1YnNjcmliZShldmVudDogRG9tYWluRXZlbnQ8ST4pOiB2b2lkO1xuXG59XG4iXX0=