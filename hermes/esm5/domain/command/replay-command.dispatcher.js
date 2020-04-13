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
var /**
 * @abstract
 * @template I
 */
ReplayCommandDispatcher = /** @class */ (function () {
    function ReplayCommandDispatcher(dispatcher, bus) {
        this.dispatcher = dispatcher;
        this.bus = bus;
        this.unsubscribe$ = new Subject();
        this.subscriptions = [];
    }
    /**
     * @param {?} command
     * @return {?}
     */
    ReplayCommandDispatcher.prototype.dispatch = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        this.dispatcher.dispatch(command);
        return command.getMessageId();
    };
    /**
     * @param {?} command
     * @return {?}
     */
    ReplayCommandDispatcher.prototype.dispatchAndWait = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        var _this = this;
        /** @type {?} */
        var response$ = this.bus
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.fromCommand(command); })), first(), map((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return _this.mapEventToResponse(event);
        })), takeUntil(this.unsubscribe$));
        /** @type {?} */
        var subscription = setTimeout((/**
         * @return {?}
         */
        function () {
            _this.dispatcher.dispatch(command);
        }));
        this.subscriptions.push(subscription);
        return response$;
    };
    /**
     * @return {?}
     */
    ReplayCommandDispatcher.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
        this.subscriptions.forEach((/**
         * @param {?} handle
         * @return {?}
         */
        function (handle) {
            clearTimeout(handle);
        }));
    };
    return ReplayCommandDispatcher;
}());
/**
 * @abstract
 * @template I
 */
export { ReplayCommandDispatcher };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGF5LWNvbW1hbmQuZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi9jb21tYW5kL3JlcGxheS1jb21tYW5kLmRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQVcvRDs7Ozs7SUFNQyxpQ0FBdUMsVUFBNkIsRUFDNUMsR0FBbUI7UUFESixlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUM1QyxRQUFHLEdBQUgsR0FBRyxDQUFnQjtRQUxuQyxpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFFN0Isa0JBQWEsR0FBa0IsRUFBRSxDQUFDO0lBSTFDLENBQUM7Ozs7O0lBSUQsMENBQVE7Ozs7SUFBUixVQUFTLE9BQWdCO1FBRXhCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWxDLE9BQU8sT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsaURBQWU7Ozs7SUFBZixVQUFnQixPQUFnQjtRQUFoQyxpQkFvQkM7O1lBbEJNLFNBQVMsR0FDZCxJQUFJLENBQUMsR0FBRzthQUNOLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsVUFBQyxLQUFxQixJQUFLLE9BQUEsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBMUIsQ0FBMEIsRUFBQyxFQUM3RCxLQUFLLEVBQUUsRUFDUCxHQUFHOzs7O1FBQUMsVUFBQyxLQUFxQjtZQUN6QixPQUFPLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QyxDQUFDLEVBQUMsRUFDRixTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUM1Qjs7WUFFRyxZQUFZLEdBQUcsVUFBVTs7O1FBQUM7WUFDL0IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxFQUFDO1FBRUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFdEMsT0FBTyxTQUFTLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELDZDQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUU3QixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLE1BQWM7WUFDekMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQztJQUVGLDhCQUFDO0FBQUQsQ0FBQyxBQWxERCxJQWtEQzs7Ozs7Ozs7Ozs7SUFoREEsK0NBQXFDOzs7OztJQUVyQyxnREFBMEM7Ozs7O0lBRXBCLDZDQUE4Qzs7Ozs7SUFDN0Qsc0NBQW9DOzs7Ozs7O0lBRzNDLDRFQUE2RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBmaXJzdCwgbWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IENvbW1hbmQgfSBmcm9tICcuL2NvbW1hbmQnO1xuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuL2NvbW1hbmQuZGlzcGF0Y2hlcic7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi4vZXZlbnQvZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnLi4vZXZlbnQvZG9tYWluLWV2ZW50LmJ1cyc7XG5pbXBvcnQgeyBTdGF0dXNSZXNwb25zZSB9IGZyb20gJy4uL2V2ZW50L3N0YXR1cy9zdGF0dXMucmVzcG9uc2UnO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi9hZ2dyZWdhdGUtaWQnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSZXBsYXlDb21tYW5kRGlzcGF0Y2hlcjxJIGV4dGVuZHMgQWdncmVnYXRlSWQ+IGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0KCk7XG5cblx0cHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBBcnJheTxudW1iZXI+ID0gW107XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZGlzcGF0Y2hlcjogQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdFx0XHQgIHByaXZhdGUgcmVhZG9ubHkgYnVzOiBEb21haW5FdmVudEJ1cykge1xuXHR9XG5cblx0cHJvdGVjdGVkIGFic3RyYWN0IG1hcEV2ZW50VG9SZXNwb25zZShldmVudDogRG9tYWluRXZlbnQ8ST4pOiBTdGF0dXNSZXNwb25zZTtcblxuXHRkaXNwYXRjaChjb21tYW5kOiBDb21tYW5kKTogc3RyaW5nIHtcblxuXHRcdHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChjb21tYW5kKTtcblxuXHRcdHJldHVybiBjb21tYW5kLmdldE1lc3NhZ2VJZCgpO1xuXHR9XG5cblx0ZGlzcGF0Y2hBbmRXYWl0KGNvbW1hbmQ6IENvbW1hbmQpOiBPYnNlcnZhYmxlPFN0YXR1c1Jlc3BvbnNlPiB7XG5cblx0XHRjb25zdCByZXNwb25zZSQgPVxuXHRcdFx0dGhpcy5idXNcblx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0ZmlsdGVyKChldmVudDogRG9tYWluRXZlbnQ8ST4pID0+IGV2ZW50LmZyb21Db21tYW5kKGNvbW1hbmQpKSxcblx0XHRcdFx0XHRmaXJzdCgpLFxuXHRcdFx0XHRcdG1hcCgoZXZlbnQ6IERvbWFpbkV2ZW50PEk+KSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5tYXBFdmVudFRvUmVzcG9uc2UoZXZlbnQpO1xuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJClcblx0XHRcdFx0KTtcblxuXHRcdGNvbnN0IHN1YnNjcmlwdGlvbiA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKGNvbW1hbmQpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5zdWJzY3JpcHRpb25zLnB1c2goc3Vic2NyaXB0aW9uKTtcblxuXHRcdHJldHVybiByZXNwb25zZSQ7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG5cdFx0dGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcblxuXHRcdHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKChoYW5kbGU6IG51bWJlcikgPT4ge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KGhhbmRsZSk7XG5cdFx0fSk7XG5cdH1cblxufVxuIl19