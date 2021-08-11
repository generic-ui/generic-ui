/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StreamCloser } from '../reactive/stream-closer';
import { GuiComponent } from './gui-component';
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
     * @param {?} obs$
     * @param {?} callback
     * @return {?}
     */
    subscribeAndRender(obs$, callback) {
        return obs$
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} subscribeArguments
         * @return {?}
         */
        (subscribeArguments) => {
            callback(subscribeArguments);
            this.reRender();
        }));
    }
    /**
     * @param {?} obs$
     * @param {?} callback
     * @return {?}
     */
    subscribeWithoutRender(obs$, callback) {
        return obs$
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} subscribeArguments
         * @return {?}
         */
        (subscribeArguments) => {
            callback(subscribeArguments);
        }));
    }
    /**
     * @protected
     * @return {?}
     */
    unsubscribe() {
        this.streamCloser.unsubscribe();
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
     * @protected
     */
    SmartComponent.prototype.detector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFHL0MsTUFBTSxPQUFnQixjQUFlLFNBQVEsWUFBWTs7Ozs7O0lBTXhELFlBQXlDLFFBQTJCLEVBQzdELFVBQXNCO1FBQzVCLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUZzQixhQUFRLEdBQVIsUUFBUSxDQUFtQjtRQUo1RCxjQUFTLEdBQVksS0FBSyxDQUFDO1FBRWxCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUtuRCxDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDOUI7SUFDRixDQUFDOzs7O0lBRUQsV0FBVztRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN2QixDQUFDOzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxJQUFTLEVBQUUsUUFBNkI7UUFDMUQsT0FBTyxJQUFJO2FBQ1QsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxrQkFBdUIsRUFBRSxFQUFFO1lBQ3RDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVELHNCQUFzQixDQUFDLElBQVMsRUFBRSxRQUE2QjtRQUM5RCxPQUFPLElBQUk7YUFDVCxJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxDQUFDLGtCQUF1QixFQUFFLEVBQUU7WUFDdEMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDOUIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVTLFdBQVc7UUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVTLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3RDLENBQUM7Q0FFRDs7Ozs7O0lBeERBLG1DQUFtQzs7Ozs7SUFFbkMsc0NBQW1EOzs7OztJQUU3QixrQ0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJlYW1DbG9zZXIgfSBmcm9tICcuLi9yZWFjdGl2ZS9zdHJlYW0tY2xvc2VyJztcbmltcG9ydCB7IEd1aUNvbXBvbmVudCB9IGZyb20gJy4vZ3VpLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNtYXJ0Q29tcG9uZW50IGV4dGVuZHMgR3VpQ29tcG9uZW50IHtcblxuXHRwcml2YXRlIHZpZXdJbkRvbTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RyZWFtQ2xvc2VyID0gbmV3IFN0cmVhbUNsb3NlcigpO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVhZG9ubHkgZGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRcdFx0ICBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZik7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy52aWV3SW5Eb20gPSB0cnVlO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5zdHJlYW1DbG9zZXIudW5zdWJzY3JpYmUoKTtcblx0fVxuXG5cdHJlUmVuZGVyKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlzVmlld0luRG9tKCkpIHtcblx0XHRcdHRoaXMuZGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdH1cblx0fVxuXG5cdGlzVmlld0luRG9tKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnZpZXdJbkRvbTtcblx0fVxuXG5cdHN1YnNjcmliZUFuZFJlbmRlcihvYnMkOiBhbnksIGNhbGxiYWNrOiAoYXJnczogYW55KSA9PiB2b2lkKTogU3Vic2NyaXB0aW9uIHtcblx0XHRyZXR1cm4gb2JzJFxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHN1YnNjcmliZUFyZ3VtZW50czogYW55KSA9PiB7XG5cdFx0XHRcdGNhbGxiYWNrKHN1YnNjcmliZUFyZ3VtZW50cyk7XG5cdFx0XHRcdHRoaXMucmVSZW5kZXIoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0c3Vic2NyaWJlV2l0aG91dFJlbmRlcihvYnMkOiBhbnksIGNhbGxiYWNrOiAoYXJnczogYW55KSA9PiB2b2lkKTogU3Vic2NyaXB0aW9uIHtcblx0XHRyZXR1cm4gb2JzJFxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHN1YnNjcmliZUFyZ3VtZW50czogYW55KSA9PiB7XG5cdFx0XHRcdGNhbGxiYWNrKHN1YnNjcmliZUFyZ3VtZW50cyk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByb3RlY3RlZCB1bnN1YnNjcmliZSgpOiB2b2lkIHtcblx0XHR0aGlzLnN0cmVhbUNsb3Nlci51bnN1YnNjcmliZSgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIHRha2VVbnRpbCgpIHtcblx0XHRyZXR1cm4gdGhpcy5zdHJlYW1DbG9zZXIudGFrZVVudGlsKCk7XG5cdH1cblxufVxuIl19