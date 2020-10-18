/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
import { filter, first, map, takeUntil } from 'rxjs/operators';
/**
 * @abstract
 * @template I
 */
export class ReplayCommandDispatcher {
    /**
     * @protected
     * @param {?} dispatcher
     * @param {?} bus
     */
    constructor(dispatcher, bus) {
        this.dispatcher = dispatcher;
        this.bus = bus;
        this.unsubscribe$ = new Subject();
        this.subscriptions = [];
    }
    /**
     * @param {?} command
     * @return {?}
     */
    dispatch(command) {
        this.dispatcher.dispatch(command);
        return command.getMessageId();
    }
    /**
     * @param {?} command
     * @return {?}
     */
    dispatchAndWait(command) {
        /** @type {?} */
        const response$ = this.bus
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.fromCommand(command))), first(), map((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return this.mapEventToResponse(event);
        })), takeUntil(this.unsubscribe$));
        /** @type {?} */
        const subscription = setTimeout((/**
         * @return {?}
         */
        () => {
            this.dispatcher.dispatch(command);
        }));
        this.subscriptions.push(subscription);
        return response$;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
        this.subscriptions.forEach((/**
         * @param {?} handle
         * @return {?}
         */
        (handle) => {
            clearTimeout(handle);
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ReplayCommandDispatcher.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    ReplayCommandDispatcher.prototype.subscriptions;
    /**
     * @type {?}
     * @private
     */
    ReplayCommandDispatcher.prototype.dispatcher;
    /**
     * @type {?}
     * @private
     */
    ReplayCommandDispatcher.prototype.bus;
    /**
     * @abstract
     * @protected
     * @param {?} event
     * @return {?}
     */
    ReplayCommandDispatcher.prototype.mapEventToResponse = function (event) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGF5LWNvbW1hbmQuZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvcmUvZG9tYWluL2NvbW1hbmQvcmVwbGF5LWNvbW1hbmQuZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBVy9ELE1BQU0sT0FBZ0IsdUJBQXVCOzs7Ozs7SUFNNUMsWUFBdUMsVUFBNkIsRUFDNUMsR0FBbUI7UUFESixlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUM1QyxRQUFHLEdBQUgsR0FBRyxDQUFnQjtRQUxuQyxpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFFN0Isa0JBQWEsR0FBa0IsRUFBRSxDQUFDO0lBSTFDLENBQUM7Ozs7O0lBSUQsUUFBUSxDQUFDLE9BQW1CO1FBRTNCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWxDLE9BQU8sT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLE9BQW1COztjQUU1QixTQUFTLEdBQ2QsSUFBSSxDQUFDLEdBQUc7YUFDTixJQUFJLENBQ0osTUFBTTs7OztRQUFDLENBQUMsS0FBcUIsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBQyxFQUM3RCxLQUFLLEVBQUUsRUFDUCxHQUFHOzs7O1FBQUMsQ0FBQyxLQUFxQixFQUFFLEVBQUU7WUFDN0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxFQUFDLEVBQ0YsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDNUI7O2NBRUcsWUFBWSxHQUFHLFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxDQUFDLEVBQUM7UUFFRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUV0QyxPQUFPLFNBQVMsQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUU3QixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLE1BQWMsRUFBRSxFQUFFO1lBQzdDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QixDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Q0FFRDs7Ozs7O0lBaERBLCtDQUFxQzs7Ozs7SUFFckMsZ0RBQTBDOzs7OztJQUVwQiw2Q0FBOEM7Ozs7O0lBQzdELHNDQUFvQzs7Ozs7OztJQUczQyw0RUFBNkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgZmlyc3QsIG1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnLi9jb21tYW5kJztcbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi9jb21tYW5kLmRpc3BhdGNoZXInO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4uL2V2ZW50L2RvbWFpbi1ldmVudCc7XG5pbXBvcnQgeyBEb21haW5FdmVudEJ1cyB9IGZyb20gJy4uL2V2ZW50L2RvbWFpbi1ldmVudC5idXMnO1xuaW1wb3J0IHsgU3RhdHVzUmVzcG9uc2UgfSBmcm9tICcuLi9ldmVudC9zdGF0dXMvc3RhdHVzLnJlc3BvbnNlJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1pZCc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJlcGxheUNvbW1hbmREaXNwYXRjaGVyPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZD4gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3QoKTtcblxuXHRwcml2YXRlIHN1YnNjcmlwdGlvbnM6IEFycmF5PG51bWJlcj4gPSBbXTtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0XHRcdCAgcHJpdmF0ZSByZWFkb25seSBidXM6IERvbWFpbkV2ZW50QnVzKSB7XG5cdH1cblxuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgbWFwRXZlbnRUb1Jlc3BvbnNlKGV2ZW50OiBEb21haW5FdmVudDxJPik6IFN0YXR1c1Jlc3BvbnNlO1xuXG5cdGRpc3BhdGNoKGNvbW1hbmQ6IENvbW1hbmQ8ST4pOiBzdHJpbmcge1xuXG5cdFx0dGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKGNvbW1hbmQpO1xuXG5cdFx0cmV0dXJuIGNvbW1hbmQuZ2V0TWVzc2FnZUlkKCk7XG5cdH1cblxuXHRkaXNwYXRjaEFuZFdhaXQoY29tbWFuZDogQ29tbWFuZDxJPik6IE9ic2VydmFibGU8U3RhdHVzUmVzcG9uc2U+IHtcblxuXHRcdGNvbnN0IHJlc3BvbnNlJCA9XG5cdFx0XHR0aGlzLmJ1c1xuXHRcdFx0XHQucGlwZShcblx0XHRcdFx0XHRmaWx0ZXIoKGV2ZW50OiBEb21haW5FdmVudDxJPikgPT4gZXZlbnQuZnJvbUNvbW1hbmQoY29tbWFuZCkpLFxuXHRcdFx0XHRcdGZpcnN0KCksXG5cdFx0XHRcdFx0bWFwKChldmVudDogRG9tYWluRXZlbnQ8ST4pID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLm1hcEV2ZW50VG9SZXNwb25zZShldmVudCk7XG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKVxuXHRcdFx0XHQpO1xuXG5cdFx0Y29uc3Qgc3Vic2NyaXB0aW9uID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goY29tbWFuZCk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChzdWJzY3JpcHRpb24pO1xuXG5cdFx0cmV0dXJuIHJlc3BvbnNlJDtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcblx0XHR0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuXG5cdFx0dGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2goKGhhbmRsZTogbnVtYmVyKSA9PiB7XG5cdFx0XHRjbGVhclRpbWVvdXQoaGFuZGxlKTtcblx0XHR9KTtcblx0fVxuXG59XG4iXX0=