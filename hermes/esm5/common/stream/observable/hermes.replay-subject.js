/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HermesSubject } from './hermes.subject';
import { HermesSubscriber } from './subscriber/hermes.subscriber';
/**
 * @template T
 */
var /**
 * @template T
 */
HermesReplaySubject = /** @class */ (function (_super) {
    tslib_1.__extends(HermesReplaySubject, _super);
    function HermesReplaySubject(bufferSize) {
        if (bufferSize === void 0) { bufferSize = 1; }
        var _this = _super.call(this) || this;
        _this.bufferSize = bufferSize;
        _this.values = [];
        return _this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    HermesReplaySubject.prototype.next = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.values.push(value);
        if (this.bufferSize < this.values.length) {
            this.values.shift();
        }
        _super.prototype.next.call(this, value);
    };
    /**
     * @param {?} arg
     * @return {?}
     */
    HermesReplaySubject.prototype.subscribe = /**
     * @param {?} arg
     * @return {?}
     */
    function (arg) {
        var e_1, _a;
        /** @type {?} */
        var subscriber;
        if (arg instanceof HermesSubscriber) {
            subscriber = arg;
        }
        else {
            subscriber = this.createSubscriber(arguments[0], arguments[1], arguments[2]);
        }
        /** @type {?} */
        var subscription = _super.prototype.subscribe.call(this, subscriber);
        try {
            for (var _b = tslib_1.__values(this.values), _c = _b.next(); !_c.done; _c = _b.next()) {
                var value = _c.value;
                subscriber.next(value);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return subscription;
    };
    return HermesReplaySubject;
}(HermesSubject));
/**
 * @template T
 */
export { HermesReplaySubject };
if (false) {
    /**
     * @type {?}
     * @private
     */
    HermesReplaySubject.prototype.values;
    /**
     * @type {?}
     * @private
     */
    HermesReplaySubject.prototype.bufferSize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnJlcGxheS1zdWJqZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29tbW9uL3N0cmVhbS9vYnNlcnZhYmxlL2hlcm1lcy5yZXBsYXktc3ViamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7OztBQUVsRTs7OztJQUE0QywrQ0FBZ0I7SUFJM0QsNkJBQTZCLFVBQXNCO1FBQXRCLDJCQUFBLEVBQUEsY0FBc0I7UUFBbkQsWUFDQyxpQkFBTyxTQUNQO1FBRjRCLGdCQUFVLEdBQVYsVUFBVSxDQUFZO1FBRmxDLFlBQU0sR0FBYSxFQUFFLENBQUM7O0lBSXZDLENBQUM7Ozs7O0lBRUQsa0NBQUk7Ozs7SUFBSixVQUFLLEtBQVE7UUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixJQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNwQjtRQUNELGlCQUFNLElBQUksWUFBQyxLQUFLLENBQUMsQ0FBQztJQUNuQixDQUFDOzs7OztJQVVELHVDQUFTOzs7O0lBQVQsVUFDQyxHQUFROzs7WUFHSixVQUErQjtRQUVuQyxJQUFJLEdBQUcsWUFBWSxnQkFBZ0IsRUFBRTtZQUNwQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1NBQ2pCO2FBQU07WUFDTixVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDN0U7O1lBRUssWUFBWSxHQUFHLGlCQUFNLFNBQVMsWUFBQyxVQUFVLENBQUM7O1lBRWhELEtBQW9CLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsTUFBTSxDQUFBLGdCQUFBLDRCQUFFO2dCQUE1QixJQUFNLEtBQUssV0FBQTtnQkFDZixVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3ZCOzs7Ozs7Ozs7UUFFRCxPQUFPLFlBQVksQ0FBQztJQUNyQixDQUFDO0lBRUYsMEJBQUM7QUFBRCxDQUFDLEFBN0NELENBQTRDLGFBQWEsR0E2Q3hEOzs7Ozs7Ozs7O0lBM0NBLHFDQUF1Qzs7Ozs7SUFFM0IseUNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVybWVzU3ViamVjdCB9IGZyb20gJy4vaGVybWVzLnN1YmplY3QnO1xuaW1wb3J0IHsgSGVybWVzU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi4vc3Vic2NyaXB0aW9uL2hlcm1lcy5zdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgSGVybWVzU3Vic2NyaWJlciB9IGZyb20gJy4vc3Vic2NyaWJlci9oZXJtZXMuc3Vic2NyaWJlcic7XG5cbmV4cG9ydCBjbGFzcyBIZXJtZXNSZXBsYXlTdWJqZWN0PFQ+IGV4dGVuZHMgSGVybWVzU3ViamVjdDxUPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSB2YWx1ZXM6IEFycmF5PFQ+ID0gW107XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBidWZmZXJTaXplOiBudW1iZXIgPSAxKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5leHQodmFsdWU6IFQpIHtcblx0XHR0aGlzLnZhbHVlcy5wdXNoKHZhbHVlKTtcblx0XHRpZiAodGhpcy5idWZmZXJTaXplIDwgdGhpcy52YWx1ZXMubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLnZhbHVlcy5zaGlmdCgpO1xuXHRcdH1cblx0XHRzdXBlci5uZXh0KHZhbHVlKTtcblx0fVxuXG5cdHN1YnNjcmliZShcblx0XHRuZXh0PzogKHZhbHVlOiBUKSA9PiB2b2lkLFxuXHRcdGVycm9yPzogKGVycm9yOiBhbnkpID0+IHZvaWQsXG5cdFx0Y29tcGxldGU/OiAoKSA9PiB2b2lkXG5cdCk6IEhlcm1lc1N1YnNjcmlwdGlvbjtcblx0c3Vic2NyaWJlKFxuXHRcdHN1YnNjcmliZXI6IEhlcm1lc1N1YnNjcmliZXI8VD5cblx0KTogSGVybWVzU3Vic2NyaXB0aW9uO1xuXHRzdWJzY3JpYmUoXG5cdFx0YXJnOiBhbnlcblx0KTogSGVybWVzU3Vic2NyaXB0aW9uIHtcblxuXHRcdGxldCBzdWJzY3JpYmVyOiBIZXJtZXNTdWJzY3JpYmVyPFQ+O1xuXG5cdFx0aWYgKGFyZyBpbnN0YW5jZW9mIEhlcm1lc1N1YnNjcmliZXIpIHtcblx0XHRcdHN1YnNjcmliZXIgPSBhcmc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN1YnNjcmliZXIgPSB0aGlzLmNyZWF0ZVN1YnNjcmliZXIoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc3Vic2NyaXB0aW9uID0gc3VwZXIuc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuXG5cdFx0Zm9yIChjb25zdCB2YWx1ZSBvZiB0aGlzLnZhbHVlcykge1xuXHRcdFx0c3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3Vic2NyaXB0aW9uO1xuXHR9XG5cbn1cbiJdfQ==