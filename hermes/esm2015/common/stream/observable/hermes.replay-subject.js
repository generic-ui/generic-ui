/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HermesSubject } from './hermes.subject';
import { HermesSubscriber } from './subscriber/hermes.subscriber';
/**
 * @template T
 */
export class HermesReplaySubject extends HermesSubject {
    /**
     * @param {?=} bufferSize
     */
    constructor(bufferSize = 1) {
        super();
        this.bufferSize = bufferSize;
        this.values = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    next(value) {
        this.values.push(value);
        if (this.bufferSize < this.values.length) {
            this.values.shift();
        }
        super.next(value);
    }
    /**
     * @param {?} arg
     * @return {?}
     */
    subscribe(arg) {
        /** @type {?} */
        let subscriber;
        if (arg instanceof HermesSubscriber) {
            subscriber = arg;
        }
        else {
            subscriber = this.createSubscriber(arguments[0], arguments[1], arguments[2]);
        }
        /** @type {?} */
        const subscription = super.subscribe(subscriber);
        for (const value of this.values) {
            subscriber.next(value);
        }
        return subscription;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnJlcGxheS1zdWJqZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29tbW9uL3N0cmVhbS9vYnNlcnZhYmxlL2hlcm1lcy5yZXBsYXktc3ViamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWpELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7O0FBRWxFLE1BQU0sT0FBTyxtQkFBdUIsU0FBUSxhQUFnQjs7OztJQUkzRCxZQUE2QixhQUFxQixDQUFDO1FBQ2xELEtBQUssRUFBRSxDQUFDO1FBRG9CLGVBQVUsR0FBVixVQUFVLENBQVk7UUFGbEMsV0FBTSxHQUFhLEVBQUUsQ0FBQztJQUl2QyxDQUFDOzs7OztJQUVELElBQUksQ0FBQyxLQUFRO1FBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDcEI7UUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBVUQsU0FBUyxDQUNSLEdBQVE7O1lBR0osVUFBK0I7UUFFbkMsSUFBSSxHQUFHLFlBQVksZ0JBQWdCLEVBQUU7WUFDcEMsVUFBVSxHQUFHLEdBQUcsQ0FBQztTQUNqQjthQUFNO1lBQ04sVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzdFOztjQUVLLFlBQVksR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztRQUVoRCxLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QjtRQUVELE9BQU8sWUFBWSxDQUFDO0lBQ3JCLENBQUM7Q0FFRDs7Ozs7O0lBM0NBLHFDQUF1Qzs7Ozs7SUFFM0IseUNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVybWVzU3ViamVjdCB9IGZyb20gJy4vaGVybWVzLnN1YmplY3QnO1xuaW1wb3J0IHsgSGVybWVzU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi4vc3Vic2NyaXB0aW9uL2hlcm1lcy5zdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgSGVybWVzU3Vic2NyaWJlciB9IGZyb20gJy4vc3Vic2NyaWJlci9oZXJtZXMuc3Vic2NyaWJlcic7XG5cbmV4cG9ydCBjbGFzcyBIZXJtZXNSZXBsYXlTdWJqZWN0PFQ+IGV4dGVuZHMgSGVybWVzU3ViamVjdDxUPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSB2YWx1ZXM6IEFycmF5PFQ+ID0gW107XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBidWZmZXJTaXplOiBudW1iZXIgPSAxKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5leHQodmFsdWU6IFQpIHtcblx0XHR0aGlzLnZhbHVlcy5wdXNoKHZhbHVlKTtcblx0XHRpZiAodGhpcy5idWZmZXJTaXplIDwgdGhpcy52YWx1ZXMubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLnZhbHVlcy5zaGlmdCgpO1xuXHRcdH1cblx0XHRzdXBlci5uZXh0KHZhbHVlKTtcblx0fVxuXG5cdHN1YnNjcmliZShcblx0XHRuZXh0PzogKHZhbHVlOiBUKSA9PiB2b2lkLFxuXHRcdGVycm9yPzogKGVycm9yOiBhbnkpID0+IHZvaWQsXG5cdFx0Y29tcGxldGU/OiAoKSA9PiB2b2lkXG5cdCk6IEhlcm1lc1N1YnNjcmlwdGlvbjtcblx0c3Vic2NyaWJlKFxuXHRcdHN1YnNjcmliZXI6IEhlcm1lc1N1YnNjcmliZXI8VD5cblx0KTogSGVybWVzU3Vic2NyaXB0aW9uO1xuXHRzdWJzY3JpYmUoXG5cdFx0YXJnOiBhbnlcblx0KTogSGVybWVzU3Vic2NyaXB0aW9uIHtcblxuXHRcdGxldCBzdWJzY3JpYmVyOiBIZXJtZXNTdWJzY3JpYmVyPFQ+O1xuXG5cdFx0aWYgKGFyZyBpbnN0YW5jZW9mIEhlcm1lc1N1YnNjcmliZXIpIHtcblx0XHRcdHN1YnNjcmliZXIgPSBhcmc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN1YnNjcmliZXIgPSB0aGlzLmNyZWF0ZVN1YnNjcmliZXIoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc3Vic2NyaXB0aW9uID0gc3VwZXIuc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuXG5cdFx0Zm9yIChjb25zdCB2YWx1ZSBvZiB0aGlzLnZhbHVlcykge1xuXHRcdFx0c3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3Vic2NyaXB0aW9uO1xuXHR9XG5cbn1cbiJdfQ==