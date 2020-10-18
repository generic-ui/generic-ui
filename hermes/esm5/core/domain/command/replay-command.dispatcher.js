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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGF5LWNvbW1hbmQuZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvcmUvZG9tYWluL2NvbW1hbmQvcmVwbGF5LWNvbW1hbmQuZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBVy9EOzs7OztJQU1DLGlDQUF1QyxVQUE2QixFQUM1QyxHQUFtQjtRQURKLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBQzVDLFFBQUcsR0FBSCxHQUFHLENBQWdCO1FBTG5DLGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUU3QixrQkFBYSxHQUFrQixFQUFFLENBQUM7SUFJMUMsQ0FBQzs7Ozs7SUFJRCwwQ0FBUTs7OztJQUFSLFVBQVMsT0FBbUI7UUFFM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFbEMsT0FBTyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCxpREFBZTs7OztJQUFmLFVBQWdCLE9BQW1CO1FBQW5DLGlCQW9CQzs7WUFsQk0sU0FBUyxHQUNkLElBQUksQ0FBQyxHQUFHO2FBQ04sSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxVQUFDLEtBQXFCLElBQUssT0FBQSxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUExQixDQUEwQixFQUFDLEVBQzdELEtBQUssRUFBRSxFQUNQLEdBQUc7Ozs7UUFBQyxVQUFDLEtBQXFCO1lBQ3pCLE9BQU8sS0FBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsRUFBQyxFQUNGLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQzVCOztZQUVHLFlBQVksR0FBRyxVQUFVOzs7UUFBQztZQUMvQixLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxDQUFDLEVBQUM7UUFFRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUV0QyxPQUFPLFNBQVMsQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsNkNBQVc7OztJQUFYO1FBQ0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTdCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsTUFBYztZQUN6QyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDO0lBRUYsOEJBQUM7QUFBRCxDQUFDLEFBbERELElBa0RDOzs7Ozs7Ozs7OztJQWhEQSwrQ0FBcUM7Ozs7O0lBRXJDLGdEQUEwQzs7Ozs7SUFFcEIsNkNBQThDOzs7OztJQUM3RCxzQ0FBb0M7Ozs7Ozs7SUFHM0MsNEVBQTZFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIGZpcnN0LCBtYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJy4vY29tbWFuZCc7XG5pbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4vY29tbWFuZC5kaXNwYXRjaGVyJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICcuLi9ldmVudC9kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRCdXMgfSBmcm9tICcuLi9ldmVudC9kb21haW4tZXZlbnQuYnVzJztcbmltcG9ydCB7IFN0YXR1c1Jlc3BvbnNlIH0gZnJvbSAnLi4vZXZlbnQvc3RhdHVzL3N0YXR1cy5yZXNwb25zZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtaWQnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSZXBsYXlDb21tYW5kRGlzcGF0Y2hlcjxJIGV4dGVuZHMgQWdncmVnYXRlSWQ+IGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0KCk7XG5cblx0cHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBBcnJheTxudW1iZXI+ID0gW107XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZGlzcGF0Y2hlcjogQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdFx0XHQgIHByaXZhdGUgcmVhZG9ubHkgYnVzOiBEb21haW5FdmVudEJ1cykge1xuXHR9XG5cblx0cHJvdGVjdGVkIGFic3RyYWN0IG1hcEV2ZW50VG9SZXNwb25zZShldmVudDogRG9tYWluRXZlbnQ8ST4pOiBTdGF0dXNSZXNwb25zZTtcblxuXHRkaXNwYXRjaChjb21tYW5kOiBDb21tYW5kPEk+KTogc3RyaW5nIHtcblxuXHRcdHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChjb21tYW5kKTtcblxuXHRcdHJldHVybiBjb21tYW5kLmdldE1lc3NhZ2VJZCgpO1xuXHR9XG5cblx0ZGlzcGF0Y2hBbmRXYWl0KGNvbW1hbmQ6IENvbW1hbmQ8ST4pOiBPYnNlcnZhYmxlPFN0YXR1c1Jlc3BvbnNlPiB7XG5cblx0XHRjb25zdCByZXNwb25zZSQgPVxuXHRcdFx0dGhpcy5idXNcblx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0ZmlsdGVyKChldmVudDogRG9tYWluRXZlbnQ8ST4pID0+IGV2ZW50LmZyb21Db21tYW5kKGNvbW1hbmQpKSxcblx0XHRcdFx0XHRmaXJzdCgpLFxuXHRcdFx0XHRcdG1hcCgoZXZlbnQ6IERvbWFpbkV2ZW50PEk+KSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5tYXBFdmVudFRvUmVzcG9uc2UoZXZlbnQpO1xuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJClcblx0XHRcdFx0KTtcblxuXHRcdGNvbnN0IHN1YnNjcmlwdGlvbiA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKGNvbW1hbmQpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5zdWJzY3JpcHRpb25zLnB1c2goc3Vic2NyaXB0aW9uKTtcblxuXHRcdHJldHVybiByZXNwb25zZSQ7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG5cdFx0dGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcblxuXHRcdHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKChoYW5kbGU6IG51bWJlcikgPT4ge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KGhhbmRsZSk7XG5cdFx0fSk7XG5cdH1cblxufVxuIl19