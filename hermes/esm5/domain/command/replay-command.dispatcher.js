/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
import { filter, first, map, takeUntil } from 'rxjs/operators';
/**
 * @abstract
 */
var /**
 * @abstract
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGF5LWNvbW1hbmQuZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi9jb21tYW5kL3JlcGxheS1jb21tYW5kLmRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBVS9EOzs7O0lBTUMsaUNBQXVDLFVBQTZCLEVBQzVDLEdBQW1CO1FBREosZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFDNUMsUUFBRyxHQUFILEdBQUcsQ0FBZ0I7UUFMbkMsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRTdCLGtCQUFhLEdBQWtCLEVBQUUsQ0FBQztJQUkxQyxDQUFDOzs7OztJQUlELDBDQUFROzs7O0lBQVIsVUFBUyxPQUFnQjtRQUV4QixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVsQyxPQUFPLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELGlEQUFlOzs7O0lBQWYsVUFBZ0IsT0FBZ0I7UUFBaEMsaUJBb0JDOztZQWxCTSxTQUFTLEdBQ2QsSUFBSSxDQUFDLEdBQUc7YUFDTixJQUFJLENBQ0osTUFBTTs7OztRQUFDLFVBQUMsS0FBa0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQTFCLENBQTBCLEVBQUMsRUFDMUQsS0FBSyxFQUFFLEVBQ1AsR0FBRzs7OztRQUFDLFVBQUMsS0FBa0I7WUFDdEIsT0FBTyxLQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxFQUFDLEVBQ0YsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDNUI7O1lBRUcsWUFBWSxHQUFHLFVBQVU7OztRQUFDO1lBQy9CLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLENBQUMsRUFBQztRQUVGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRXRDLE9BQU8sU0FBUyxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCw2Q0FBVzs7O0lBQVg7UUFDQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxNQUFjO1lBQ3pDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QixDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7SUFFRiw4QkFBQztBQUFELENBQUMsQUFsREQsSUFrREM7Ozs7Ozs7Ozs7SUFoREEsK0NBQXFDOzs7OztJQUVyQyxnREFBMEM7Ozs7O0lBRXBCLDZDQUE4Qzs7Ozs7SUFDN0Qsc0NBQW9DOzs7Ozs7O0lBRzNDLDRFQUEwRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBmaXJzdCwgbWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IENvbW1hbmQgfSBmcm9tICcuL2NvbW1hbmQnO1xuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuL2NvbW1hbmQuZGlzcGF0Y2hlcic7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi4vZXZlbnQvZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnLi4vZXZlbnQvZG9tYWluLWV2ZW50LmJ1cyc7XG5pbXBvcnQgeyBTdGF0dXNSZXNwb25zZSB9IGZyb20gJy4uL2V2ZW50L3N0YXR1cy9zdGF0dXMucmVzcG9uc2UnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSZXBsYXlDb21tYW5kRGlzcGF0Y2hlciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0cHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdCgpO1xuXG5cdHByaXZhdGUgc3Vic2NyaXB0aW9uczogQXJyYXk8bnVtYmVyPiA9IFtdO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRcdFx0ICBwcml2YXRlIHJlYWRvbmx5IGJ1czogRG9tYWluRXZlbnRCdXMpIHtcblx0fVxuXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBtYXBFdmVudFRvUmVzcG9uc2UoZXZlbnQ6IERvbWFpbkV2ZW50KTogU3RhdHVzUmVzcG9uc2U7XG5cblx0ZGlzcGF0Y2goY29tbWFuZDogQ29tbWFuZCk6IHN0cmluZyB7XG5cblx0XHR0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goY29tbWFuZCk7XG5cblx0XHRyZXR1cm4gY29tbWFuZC5nZXRNZXNzYWdlSWQoKTtcblx0fVxuXG5cdGRpc3BhdGNoQW5kV2FpdChjb21tYW5kOiBDb21tYW5kKTogT2JzZXJ2YWJsZTxTdGF0dXNSZXNwb25zZT4ge1xuXG5cdFx0Y29uc3QgcmVzcG9uc2UkID1cblx0XHRcdHRoaXMuYnVzXG5cdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdGZpbHRlcigoZXZlbnQ6IERvbWFpbkV2ZW50KSA9PiBldmVudC5mcm9tQ29tbWFuZChjb21tYW5kKSksXG5cdFx0XHRcdFx0Zmlyc3QoKSxcblx0XHRcdFx0XHRtYXAoKGV2ZW50OiBEb21haW5FdmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMubWFwRXZlbnRUb1Jlc3BvbnNlKGV2ZW50KTtcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpXG5cdFx0XHRcdCk7XG5cblx0XHRjb25zdCBzdWJzY3JpcHRpb24gPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChjb21tYW5kKTtcblx0XHR9KTtcblxuXHRcdHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHN1YnNjcmlwdGlvbik7XG5cblx0XHRyZXR1cm4gcmVzcG9uc2UkO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuXHRcdHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG5cblx0XHR0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaCgoaGFuZGxlOiBudW1iZXIpID0+IHtcblx0XHRcdGNsZWFyVGltZW91dChoYW5kbGUpO1xuXHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==