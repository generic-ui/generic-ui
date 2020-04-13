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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGF5LWNvbW1hbmQuZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi9jb21tYW5kL3JlcGxheS1jb21tYW5kLmRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQVcvRCxNQUFNLE9BQWdCLHVCQUF1Qjs7Ozs7O0lBTTVDLFlBQXVDLFVBQTZCLEVBQzVDLEdBQW1CO1FBREosZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFDNUMsUUFBRyxHQUFILEdBQUcsQ0FBZ0I7UUFMbkMsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRTdCLGtCQUFhLEdBQWtCLEVBQUUsQ0FBQztJQUkxQyxDQUFDOzs7OztJQUlELFFBQVEsQ0FBQyxPQUFnQjtRQUV4QixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVsQyxPQUFPLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxPQUFnQjs7Y0FFekIsU0FBUyxHQUNkLElBQUksQ0FBQyxHQUFHO2FBQ04sSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxDQUFDLEtBQXFCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUMsRUFDN0QsS0FBSyxFQUFFLEVBQ1AsR0FBRzs7OztRQUFDLENBQUMsS0FBcUIsRUFBRSxFQUFFO1lBQzdCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsRUFBQyxFQUNGLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQzVCOztjQUVHLFlBQVksR0FBRyxVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxFQUFDO1FBRUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFdEMsT0FBTyxTQUFTLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxNQUFjLEVBQUUsRUFBRTtZQUM3QyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDO0NBRUQ7Ozs7OztJQWhEQSwrQ0FBcUM7Ozs7O0lBRXJDLGdEQUEwQzs7Ozs7SUFFcEIsNkNBQThDOzs7OztJQUM3RCxzQ0FBb0M7Ozs7Ozs7SUFHM0MsNEVBQTZFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIGZpcnN0LCBtYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJy4vY29tbWFuZCc7XG5pbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4vY29tbWFuZC5kaXNwYXRjaGVyJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICcuLi9ldmVudC9kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRCdXMgfSBmcm9tICcuLi9ldmVudC9kb21haW4tZXZlbnQuYnVzJztcbmltcG9ydCB7IFN0YXR1c1Jlc3BvbnNlIH0gZnJvbSAnLi4vZXZlbnQvc3RhdHVzL3N0YXR1cy5yZXNwb25zZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uL2FnZ3JlZ2F0ZS1pZCc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJlcGxheUNvbW1hbmREaXNwYXRjaGVyPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZD4gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3QoKTtcblxuXHRwcml2YXRlIHN1YnNjcmlwdGlvbnM6IEFycmF5PG51bWJlcj4gPSBbXTtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0XHRcdCAgcHJpdmF0ZSByZWFkb25seSBidXM6IERvbWFpbkV2ZW50QnVzKSB7XG5cdH1cblxuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgbWFwRXZlbnRUb1Jlc3BvbnNlKGV2ZW50OiBEb21haW5FdmVudDxJPik6IFN0YXR1c1Jlc3BvbnNlO1xuXG5cdGRpc3BhdGNoKGNvbW1hbmQ6IENvbW1hbmQpOiBzdHJpbmcge1xuXG5cdFx0dGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKGNvbW1hbmQpO1xuXG5cdFx0cmV0dXJuIGNvbW1hbmQuZ2V0TWVzc2FnZUlkKCk7XG5cdH1cblxuXHRkaXNwYXRjaEFuZFdhaXQoY29tbWFuZDogQ29tbWFuZCk6IE9ic2VydmFibGU8U3RhdHVzUmVzcG9uc2U+IHtcblxuXHRcdGNvbnN0IHJlc3BvbnNlJCA9XG5cdFx0XHR0aGlzLmJ1c1xuXHRcdFx0XHQucGlwZShcblx0XHRcdFx0XHRmaWx0ZXIoKGV2ZW50OiBEb21haW5FdmVudDxJPikgPT4gZXZlbnQuZnJvbUNvbW1hbmQoY29tbWFuZCkpLFxuXHRcdFx0XHRcdGZpcnN0KCksXG5cdFx0XHRcdFx0bWFwKChldmVudDogRG9tYWluRXZlbnQ8ST4pID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLm1hcEV2ZW50VG9SZXNwb25zZShldmVudCk7XG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKVxuXHRcdFx0XHQpO1xuXG5cdFx0Y29uc3Qgc3Vic2NyaXB0aW9uID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goY29tbWFuZCk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChzdWJzY3JpcHRpb24pO1xuXG5cdFx0cmV0dXJuIHJlc3BvbnNlJDtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcblx0XHR0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuXG5cdFx0dGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2goKGhhbmRsZTogbnVtYmVyKSA9PiB7XG5cdFx0XHRjbGVhclRpbWVvdXQoaGFuZGxlKTtcblx0XHR9KTtcblx0fVxuXG59XG4iXX0=