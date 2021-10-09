/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HermesSubscriber } from './hermes.subscriber';
/**
 * @template T
 */
export class HermesSingleSubscriber extends HermesSubscriber {
    /**
     * @param {?} value
     * @return {?}
     */
    next(value) {
        if (this.isCompleted()) {
            return;
        }
        /** @type {?} */
        const observer = this.getObserver();
        if (observer && observer.next) {
            observer.next(value);
            this.complete();
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnNpbmdsZS1zdWJzY3JpYmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29tbW9uL3N0cmVhbS9vYnNlcnZhYmxlL3N1YnNjcmliZXIvaGVybWVzLnNpbmdsZS1zdWJzY3JpYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUV2RCxNQUFNLE9BQU8sc0JBQTBCLFNBQVEsZ0JBQW1COzs7OztJQUVqRSxJQUFJLENBQUMsS0FBUTtRQUVaLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQ3ZCLE9BQU87U0FDUDs7Y0FFSyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRTtRQUVuQyxJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFO1lBQzlCLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2hCO0lBQ0YsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVybWVzU3Vic2NyaWJlciB9IGZyb20gJy4vaGVybWVzLnN1YnNjcmliZXInO1xuXG5leHBvcnQgY2xhc3MgSGVybWVzU2luZ2xlU3Vic2NyaWJlcjxUPiBleHRlbmRzIEhlcm1lc1N1YnNjcmliZXI8VD4ge1xuXG5cdG5leHQodmFsdWU6IFQpOiB2b2lkIHtcblxuXHRcdGlmICh0aGlzLmlzQ29tcGxldGVkKCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBvYnNlcnZlciA9IHRoaXMuZ2V0T2JzZXJ2ZXIoKTtcblxuXHRcdGlmIChvYnNlcnZlciAmJiBvYnNlcnZlci5uZXh0KSB7XG5cdFx0XHRvYnNlcnZlci5uZXh0KHZhbHVlKTtcblx0XHRcdHRoaXMuY29tcGxldGUoKTtcblx0XHR9XG5cdH1cblxufVxuIl19