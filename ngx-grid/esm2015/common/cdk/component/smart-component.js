/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    SmartComponent.prototype.hermesUnsubscribe$;
    /**
     * @type {?}
     * @protected
     */
    SmartComponent.prototype.detector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQW9CLGFBQWEsRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQUV0RixNQUFNLE9BQWdCLGNBQWUsU0FBUSxZQUFZOzs7Ozs7SUFNeEQsWUFBeUMsUUFBMkIsRUFDN0QsVUFBc0I7UUFDNUIsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRnNCLGFBQVEsR0FBUixRQUFRLENBQW1CO1FBSjVELGNBQVMsR0FBWSxLQUFLLENBQUM7UUFFbEIsdUJBQWtCLEdBQUcsSUFBSSxhQUFhLEVBQVEsQ0FBQztJQUtoRSxDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQzlCO0lBQ0YsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQzs7Ozs7OztJQUVELGVBQWUsQ0FBSSxPQUE0QixFQUFFLFFBQTRCO1FBQzVFLE9BQU87YUFDTCxJQUFJLENBQ0osSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUN0QjthQUNBLFNBQVM7Ozs7UUFBQyxDQUFDLFlBQWUsRUFBRSxFQUFFO1lBQzlCLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7O0lBRUQsNEJBQTRCLENBQUksT0FBNEIsRUFBRSxRQUE0QjtRQUN6RixPQUFPO2FBQ0wsSUFBSSxDQUNKLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FDdEI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxZQUFlLEVBQUUsRUFBRTtZQUM5QixRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7Ozs7SUFHRCxnQkFBZ0IsQ0FDZixPQUE0QixFQUM1QixPQUF3QixFQUN4Qjs7OztJQUE0QixDQUFDLEtBQVEsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFBO1FBRS9DLE9BQU87YUFDTCxJQUFJLENBQ0osSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUN0QjthQUNBLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQVEsRUFBRSxFQUFFO1lBQ3ZCLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVTLFdBQVc7UUFDcEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFUyxpQkFBaUI7UUFDMUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVTLGVBQWU7UUFDeEIsT0FBTyxlQUFlLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDakQsQ0FBQztDQUVEOzs7Ozs7SUE1RUEsbUNBQW1DOzs7OztJQUVuQyw0Q0FBZ0U7Ozs7O0lBRTFDLGtDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEd1aUNvbXBvbmVudCB9IGZyb20gJy4vZ3VpLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlLCBIZXJtZXNTdWJqZWN0LCBoZXJtZXNUYWtlVW50aWwgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU21hcnRDb21wb25lbnQgZXh0ZW5kcyBHdWlDb21wb25lbnQge1xuXG5cdHByaXZhdGUgdmlld0luRG9tOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSByZWFkb25seSBoZXJtZXNVbnN1YnNjcmliZSQgPSBuZXcgSGVybWVzU3ViamVjdDx2b2lkPigpO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVhZG9ubHkgZGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRcdFx0ICBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZik7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy52aWV3SW5Eb20gPSB0cnVlO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5oZXJtZXNVbnN1YnNjcmliZSgpO1xuXHR9XG5cblx0cmVSZW5kZXIoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaXNWaWV3SW5Eb20oKSkge1xuXHRcdFx0dGhpcy5kZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0fVxuXHR9XG5cblx0aXNWaWV3SW5Eb20oKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMudmlld0luRG9tO1xuXHR9XG5cblx0aGVybWVzU3Vic2NyaWJlPFQ+KHN0cmVhbSQ6IEhlcm1lc09ic2VydmFibGU8VD4sIGNhbGxiYWNrOiAodmFsdWU6IFQpID0+IHZvaWQpOiB2b2lkIHtcblx0XHRzdHJlYW0kXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy5oZXJtZXNUYWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoc3RyZWFtVmFsdWVzOiBUKSA9PiB7XG5cdFx0XHRcdGNhbGxiYWNrKHN0cmVhbVZhbHVlcyk7XG5cdFx0XHRcdHRoaXMucmVSZW5kZXIoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0aGVybWVzU3Vic2NyaWJlV2l0aG91dFJlbmRlcjxUPihzdHJlYW0kOiBIZXJtZXNPYnNlcnZhYmxlPFQ+LCBjYWxsYmFjazogKHZhbHVlOiBUKSA9PiB2b2lkKTogdm9pZCB7XG5cdFx0c3RyZWFtJFxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMuaGVybWVzVGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHN0cmVhbVZhbHVlczogVCkgPT4ge1xuXHRcdFx0XHRjYWxsYmFjayhzdHJlYW1WYWx1ZXMpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHQvLyBmb3IgZ2F0ZVxuXHRzdWJzY3JpYmVBbmRFbWl0PFY+KFxuXHRcdHN0cmVhbSQ6IEhlcm1lc09ic2VydmFibGU8Vj4sXG5cdFx0ZW1pdHRlcjogRXZlbnRFbWl0dGVyPFY+LFxuXHRcdG1hcHBlcjogKHZhbHVlOiBWKSA9PiBhbnkgPSAodmFsdWU6IFYpID0+IHZhbHVlXG5cdCk6IHZvaWQge1xuXHRcdHN0cmVhbSRcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLmhlcm1lc1Rha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh2YWx1ZTogVikgPT4ge1xuXHRcdFx0XHRlbWl0dGVyLmVtaXQobWFwcGVyKHZhbHVlKSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByb3RlY3RlZCB1bnN1YnNjcmliZSgpOiB2b2lkIHtcblx0XHR0aGlzLmhlcm1lc1Vuc3Vic2NyaWJlKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgaGVybWVzVW5zdWJzY3JpYmUoKTogdm9pZCB7XG5cdFx0dGhpcy5oZXJtZXNVbnN1YnNjcmliZSQubmV4dCgpO1xuXHRcdHRoaXMuaGVybWVzVW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgaGVybWVzVGFrZVVudGlsKCk6IGFueSB7XG5cdFx0cmV0dXJuIGhlcm1lc1Rha2VVbnRpbCh0aGlzLmhlcm1lc1Vuc3Vic2NyaWJlJCk7XG5cdH1cblxufVxuIl19