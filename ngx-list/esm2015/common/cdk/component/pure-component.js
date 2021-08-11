/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GuiComponent } from './gui-component';
/**
 * @abstract
 */
export class PureComponent extends GuiComponent {
    /**
     * @protected
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super(elementRef);
        this.subClassConstructor = this.constructor;
        this.subClassNgOnInit = ((/** @type {?} */ (this))).ngOnInit;
        if (!this.hasConstructorOnlyElementRefInjected(arguments)) {
            this.throwError('it should not inject services');
        }
        if (this.subClassNgOnInit) {
            this.throwError('it should not use ngOnInit');
        }
    }
    /**
     * @private
     * @param {?} args
     * @return {?}
     */
    hasConstructorOnlyElementRefInjected(args) {
        if (arguments.length > 1) {
            return false;
        }
        if (arguments.length === 1) {
            return this.isElementRef(arguments[0]);
        }
        return false;
    }
    /**
     * @private
     * @param {?} elRef
     * @return {?}
     */
    isElementRef(elRef) {
        return elRef.nativeElement !== null;
    }
    /**
     * @private
     * @param {?} reason
     * @return {?}
     */
    throwError(reason) {
        throw new Error(`Component "${this.subClassConstructor.name}" is a PureComponent, ${reason}.`);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    PureComponent.prototype.subClassConstructor;
    /**
     * @type {?}
     * @private
     */
    PureComponent.prototype.subClassNgOnInit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVyZS1jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbW1vbi9jZGsvY29tcG9uZW50L3B1cmUtY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFHL0MsTUFBTSxPQUFnQixhQUFjLFNBQVEsWUFBWTs7Ozs7SUFNdkQsWUFBc0IsVUFBc0I7UUFDM0MsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLG1CQUFBLElBQUksRUFBTyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBRS9DLElBQUksQ0FBQyxJQUFJLENBQUMsb0NBQW9DLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDMUQsSUFBSSxDQUFDLFVBQVUsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1NBQ2pEO1FBRUQsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1NBQzlDO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sb0NBQW9DLENBQUMsSUFBZ0I7UUFFNUQsSUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN6QixPQUFPLEtBQUssQ0FBQztTQUNiO1FBRUQsSUFBSSxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMzQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkM7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7OztJQUVPLFlBQVksQ0FBQyxLQUFVO1FBQzlCLE9BQU8sS0FBSyxDQUFDLGFBQWEsS0FBSyxJQUFJLENBQUM7SUFDckMsQ0FBQzs7Ozs7O0lBRU8sVUFBVSxDQUFDLE1BQWM7UUFDaEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxjQUFjLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLHlCQUF5QixNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7Q0FDRDs7Ozs7O0lBdENBLDRDQUErQzs7Ozs7SUFFL0MseUNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3VpQ29tcG9uZW50IH0gZnJvbSAnLi9ndWktY29tcG9uZW50JztcbmltcG9ydCB7IEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFB1cmVDb21wb25lbnQgZXh0ZW5kcyBHdWlDb21wb25lbnQge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3ViQ2xhc3NDb25zdHJ1Y3RvcjogRnVuY3Rpb247XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdWJDbGFzc05nT25Jbml0OiBGdW5jdGlvbjtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYpO1xuXHRcdHRoaXMuc3ViQ2xhc3NDb25zdHJ1Y3RvciA9IHRoaXMuY29uc3RydWN0b3I7XG5cdFx0dGhpcy5zdWJDbGFzc05nT25Jbml0ID0gKHRoaXMgYXMgYW55KS5uZ09uSW5pdDtcblxuXHRcdGlmICghdGhpcy5oYXNDb25zdHJ1Y3Rvck9ubHlFbGVtZW50UmVmSW5qZWN0ZWQoYXJndW1lbnRzKSkge1xuXHRcdFx0dGhpcy50aHJvd0Vycm9yKCdpdCBzaG91bGQgbm90IGluamVjdCBzZXJ2aWNlcycpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnN1YkNsYXNzTmdPbkluaXQpIHtcblx0XHRcdHRoaXMudGhyb3dFcnJvcignaXQgc2hvdWxkIG5vdCB1c2UgbmdPbkluaXQnKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGhhc0NvbnN0cnVjdG9yT25seUVsZW1lbnRSZWZJbmplY3RlZChhcmdzOiBJQXJndW1lbnRzKTogYm9vbGVhbiB7XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuaXNFbGVtZW50UmVmKGFyZ3VtZW50c1swXSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cHJpdmF0ZSBpc0VsZW1lbnRSZWYoZWxSZWY6IGFueSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBlbFJlZi5uYXRpdmVFbGVtZW50ICE9PSBudWxsO1xuXHR9XG5cblx0cHJpdmF0ZSB0aHJvd0Vycm9yKHJlYXNvbjogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBDb21wb25lbnQgXCIke3RoaXMuc3ViQ2xhc3NDb25zdHJ1Y3Rvci5uYW1lfVwiIGlzIGEgUHVyZUNvbXBvbmVudCwgJHtyZWFzb259LmApO1xuXHR9XG59XG4iXX0=