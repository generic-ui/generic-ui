/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StreamCloser } from '../reactive/stream-closer';
import { GuiComponent } from './gui-component';
import { HermesSubject, hermesTakeUntil } from '@generic-ui/hermes';
/**
 * @abstract
 */
export class SmartComponent extends GuiComponent {
    /**
     * @protected
     * @param {?} detector
     * @param {?} elementRef
     */
    constructor(detector, elementRef) {
        super(elementRef);
        this.detector = detector;
        this.viewInDom = false;
        this.streamCloser = new StreamCloser();
        this.hermesUnsubscribe$ = new HermesSubject();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.viewInDom = true;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.streamCloser.unsubscribe();
        this.hermesUnsubscribe();
    }
    /**
     * @return {?}
     */
    reRender() {
        if (this.isViewInDom()) {
            this.detector.detectChanges();
        }
    }
    /**
     * @return {?}
     */
    isViewInDom() {
        return this.viewInDom;
    }
    /**
     * @template T
     * @param {?} stream$
     * @param {?} callback
     * @return {?}
     */
    hermesSubscribe(stream$, callback) {
        stream$
            .pipe(this.hermesTakeUntil())
            .subscribe((/**
         * @param {?} streamValues
         * @return {?}
         */
        (streamValues) => {
            callback(streamValues);
            this.reRender();
        }));
    }
    /**
     * @template T
     * @param {?} stream$
     * @param {?} callback
     * @return {?}
     */
    hermesSubscribeWithoutRender(stream$, callback) {
        stream$
            .pipe(this.hermesTakeUntil())
            .subscribe((/**
         * @param {?} streamValues
         * @return {?}
         */
        (streamValues) => {
            callback(streamValues);
        }));
    }
    // for gate
    /**
     * @template V
     * @param {?} stream$
     * @param {?} emitter
     * @param {?=} mapper
     * @return {?}
     */
    subscribeAndEmit(stream$, emitter, mapper = (/**
     * @param {?} value
     * @return {?}
     */
    (value) => value)) {
        stream$
            .pipe(this.hermesTakeUntil())
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            emitter.emit(mapper(value));
        }));
    }
    /**
     * @protected
     * @return {?}
     */
    unsubscribe() {
        this.streamCloser.unsubscribe();
        this.hermesUnsubscribe();
    }
    /**
     * @protected
     * @return {?}
     */
    hermesUnsubscribe() {
        this.hermesUnsubscribe$.next();
        this.hermesUnsubscribe$.complete();
    }
    /**
     * @protected
     * @return {?}
     */
    hermesTakeUntil() {
        return hermesTakeUntil(this.hermesUnsubscribe$);
    }
    /**
     * @protected
     * @return {?}
     */
    takeUntil() {
        return this.streamCloser.takeUntil();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SmartComponent.prototype.viewInDom;
    /**
     * @type {?}
     * @private
     */
    SmartComponent.prototype.streamCloser;
    /**
     * @type {?}
     * @private
     */
    SmartComponent.prototype.hermesUnsubscribe$;
    /**
     * @type {?}
     * @protected
     */
    SmartComponent.prototype.detector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFvQixhQUFhLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFFdEYsTUFBTSxPQUFnQixjQUFlLFNBQVEsWUFBWTs7Ozs7O0lBUXhELFlBQXlDLFFBQTJCLEVBQzdELFVBQXNCO1FBQzVCLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUZzQixhQUFRLEdBQVIsUUFBUSxDQUFtQjtRQU41RCxjQUFTLEdBQVksS0FBSyxDQUFDO1FBRWxCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVsQyx1QkFBa0IsR0FBRyxJQUFJLGFBQWEsRUFBUSxDQUFDO0lBS2hFLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUM5QjtJQUNGLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7Ozs7Ozs7SUFFRCxlQUFlLENBQUksT0FBNEIsRUFBRSxRQUE0QjtRQUM1RSxPQUFPO2FBQ0wsSUFBSSxDQUNKLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FDdEI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxZQUFlLEVBQUUsRUFBRTtZQUM5QixRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7OztJQUVELDRCQUE0QixDQUFJLE9BQTRCLEVBQUUsUUFBNEI7UUFDekYsT0FBTzthQUNMLElBQUksQ0FDSixJQUFJLENBQUMsZUFBZSxFQUFFLENBQ3RCO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsWUFBZSxFQUFFLEVBQUU7WUFDOUIsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3hCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7Ozs7O0lBR0QsZ0JBQWdCLENBQ2YsT0FBNEIsRUFDNUIsT0FBd0IsRUFDeEI7Ozs7SUFBNEIsQ0FBQyxLQUFRLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQTtRQUUvQyxPQUFPO2FBQ0wsSUFBSSxDQUNKLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FDdEI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxLQUFRLEVBQUUsRUFBRTtZQUN2QixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzdCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFUyxXQUFXO1FBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFUyxpQkFBaUI7UUFDMUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVTLGVBQWU7UUFDeEIsT0FBTyxlQUFlLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFFUyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0NBRUQ7Ozs7OztJQXBGQSxtQ0FBbUM7Ozs7O0lBRW5DLHNDQUFtRDs7Ozs7SUFFbkQsNENBQWdFOzs7OztJQUUxQyxrQ0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0cmVhbUNsb3NlciB9IGZyb20gJy4uL3JlYWN0aXZlL3N0cmVhbS1jbG9zZXInO1xuaW1wb3J0IHsgR3VpQ29tcG9uZW50IH0gZnJvbSAnLi9ndWktY29tcG9uZW50JztcbmltcG9ydCB7IEhlcm1lc09ic2VydmFibGUsIEhlcm1lc1N1YmplY3QsIGhlcm1lc1Rha2VVbnRpbCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTbWFydENvbXBvbmVudCBleHRlbmRzIEd1aUNvbXBvbmVudCB7XG5cblx0cHJpdmF0ZSB2aWV3SW5Eb206IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0cmVhbUNsb3NlciA9IG5ldyBTdHJlYW1DbG9zZXIoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGhlcm1lc1Vuc3Vic2NyaWJlJCA9IG5ldyBIZXJtZXNTdWJqZWN0PHZvaWQ+KCk7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByb3RlY3RlZCByZWFkb25seSBkZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdFx0XHQgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmKTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHR0aGlzLnZpZXdJbkRvbSA9IHRydWU7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnN0cmVhbUNsb3Nlci51bnN1YnNjcmliZSgpO1xuXHRcdHRoaXMuaGVybWVzVW5zdWJzY3JpYmUoKTtcblx0fVxuXG5cdHJlUmVuZGVyKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlzVmlld0luRG9tKCkpIHtcblx0XHRcdHRoaXMuZGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdH1cblx0fVxuXG5cdGlzVmlld0luRG9tKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnZpZXdJbkRvbTtcblx0fVxuXG5cdGhlcm1lc1N1YnNjcmliZTxUPihzdHJlYW0kOiBIZXJtZXNPYnNlcnZhYmxlPFQ+LCBjYWxsYmFjazogKHZhbHVlOiBUKSA9PiB2b2lkKTogdm9pZCB7XG5cdFx0c3RyZWFtJFxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMuaGVybWVzVGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHN0cmVhbVZhbHVlczogVCkgPT4ge1xuXHRcdFx0XHRjYWxsYmFjayhzdHJlYW1WYWx1ZXMpO1xuXHRcdFx0XHR0aGlzLnJlUmVuZGVyKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGhlcm1lc1N1YnNjcmliZVdpdGhvdXRSZW5kZXI8VD4oc3RyZWFtJDogSGVybWVzT2JzZXJ2YWJsZTxUPiwgY2FsbGJhY2s6ICh2YWx1ZTogVCkgPT4gdm9pZCk6IHZvaWQge1xuXHRcdHN0cmVhbSRcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLmhlcm1lc1Rha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChzdHJlYW1WYWx1ZXM6IFQpID0+IHtcblx0XHRcdFx0Y2FsbGJhY2soc3RyZWFtVmFsdWVzKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0Ly8gZm9yIGdhdGVcblx0c3Vic2NyaWJlQW5kRW1pdDxWPihcblx0XHRzdHJlYW0kOiBIZXJtZXNPYnNlcnZhYmxlPFY+LFxuXHRcdGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxWPixcblx0XHRtYXBwZXI6ICh2YWx1ZTogVikgPT4gYW55ID0gKHZhbHVlOiBWKSA9PiB2YWx1ZVxuXHQpOiB2b2lkIHtcblx0XHRzdHJlYW0kXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy5oZXJtZXNUYWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgodmFsdWU6IFYpID0+IHtcblx0XHRcdFx0ZW1pdHRlci5lbWl0KG1hcHBlcih2YWx1ZSkpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgdW5zdWJzY3JpYmUoKTogdm9pZCB7XG5cdFx0dGhpcy5zdHJlYW1DbG9zZXIudW5zdWJzY3JpYmUoKTtcblx0XHR0aGlzLmhlcm1lc1Vuc3Vic2NyaWJlKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgaGVybWVzVW5zdWJzY3JpYmUoKTogdm9pZCB7XG5cdFx0dGhpcy5oZXJtZXNVbnN1YnNjcmliZSQubmV4dCgpO1xuXHRcdHRoaXMuaGVybWVzVW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgaGVybWVzVGFrZVVudGlsKCk6IGFueSB7XG5cdFx0cmV0dXJuIGhlcm1lc1Rha2VVbnRpbCh0aGlzLmhlcm1lc1Vuc3Vic2NyaWJlJCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgdGFrZVVudGlsKCkge1xuXHRcdHJldHVybiB0aGlzLnN0cmVhbUNsb3Nlci50YWtlVW50aWwoKTtcblx0fVxuXG59XG4iXX0=