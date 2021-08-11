/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { GuiComponent } from './gui-component';
/**
 * @abstract
 */
var /**
 * @abstract
 */
PureComponent = /** @class */ (function (_super) {
    tslib_1.__extends(PureComponent, _super);
    function PureComponent(elementRef) {
        var _this = _super.call(this, elementRef) || this;
        _this.subClassConstructor = _this.constructor;
        _this.subClassNgOnInit = ((/** @type {?} */ (_this))).ngOnInit;
        if (!_this.hasConstructorOnlyElementRefInjected(arguments)) {
            _this.throwError('it should not inject services');
        }
        if (_this.subClassNgOnInit) {
            _this.throwError('it should not use ngOnInit');
        }
        return _this;
    }
    /**
     * @private
     * @param {?} args
     * @return {?}
     */
    PureComponent.prototype.hasConstructorOnlyElementRefInjected = /**
     * @private
     * @param {?} args
     * @return {?}
     */
    function (args) {
        if (arguments.length > 1) {
            return false;
        }
        if (arguments.length === 1) {
            return this.isElementRef(arguments[0]);
        }
        return false;
    };
    /**
     * @private
     * @param {?} elRef
     * @return {?}
     */
    PureComponent.prototype.isElementRef = /**
     * @private
     * @param {?} elRef
     * @return {?}
     */
    function (elRef) {
        return elRef.nativeElement !== null;
    };
    /**
     * @private
     * @param {?} reason
     * @return {?}
     */
    PureComponent.prototype.throwError = /**
     * @private
     * @param {?} reason
     * @return {?}
     */
    function (reason) {
        throw new Error("Component \"" + this.subClassConstructor.name + "\" is a PureComponent, " + reason + ".");
    };
    return PureComponent;
}(GuiComponent));
/**
 * @abstract
 */
export { PureComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVyZS1jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbW1vbi9jZGsvY29tcG9uZW50L3B1cmUtY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBRy9DOzs7O0lBQTRDLHlDQUFZO0lBTXZELHVCQUFzQixVQUFzQjtRQUE1QyxZQUNDLGtCQUFNLFVBQVUsQ0FBQyxTQVdqQjtRQVZBLEtBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVDLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLG1CQUFBLEtBQUksRUFBTyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBRS9DLElBQUksQ0FBQyxLQUFJLENBQUMsb0NBQW9DLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDMUQsS0FBSSxDQUFDLFVBQVUsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1NBQ2pEO1FBRUQsSUFBSSxLQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDMUIsS0FBSSxDQUFDLFVBQVUsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1NBQzlDOztJQUNGLENBQUM7Ozs7OztJQUVPLDREQUFvQzs7Ozs7SUFBNUMsVUFBNkMsSUFBZ0I7UUFFNUQsSUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN6QixPQUFPLEtBQUssQ0FBQztTQUNiO1FBRUQsSUFBSSxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMzQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkM7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7OztJQUVPLG9DQUFZOzs7OztJQUFwQixVQUFxQixLQUFVO1FBQzlCLE9BQU8sS0FBSyxDQUFDLGFBQWEsS0FBSyxJQUFJLENBQUM7SUFDckMsQ0FBQzs7Ozs7O0lBRU8sa0NBQVU7Ozs7O0lBQWxCLFVBQW1CLE1BQWM7UUFDaEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQkFBYyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSwrQkFBeUIsTUFBTSxNQUFHLENBQUMsQ0FBQztJQUNoRyxDQUFDO0lBQ0Ysb0JBQUM7QUFBRCxDQUFDLEFBeENELENBQTRDLFlBQVksR0F3Q3ZEOzs7Ozs7Ozs7O0lBdENBLDRDQUErQzs7Ozs7SUFFL0MseUNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3VpQ29tcG9uZW50IH0gZnJvbSAnLi9ndWktY29tcG9uZW50JztcbmltcG9ydCB7IEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFB1cmVDb21wb25lbnQgZXh0ZW5kcyBHdWlDb21wb25lbnQge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3ViQ2xhc3NDb25zdHJ1Y3RvcjogRnVuY3Rpb247XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdWJDbGFzc05nT25Jbml0OiBGdW5jdGlvbjtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYpO1xuXHRcdHRoaXMuc3ViQ2xhc3NDb25zdHJ1Y3RvciA9IHRoaXMuY29uc3RydWN0b3I7XG5cdFx0dGhpcy5zdWJDbGFzc05nT25Jbml0ID0gKHRoaXMgYXMgYW55KS5uZ09uSW5pdDtcblxuXHRcdGlmICghdGhpcy5oYXNDb25zdHJ1Y3Rvck9ubHlFbGVtZW50UmVmSW5qZWN0ZWQoYXJndW1lbnRzKSkge1xuXHRcdFx0dGhpcy50aHJvd0Vycm9yKCdpdCBzaG91bGQgbm90IGluamVjdCBzZXJ2aWNlcycpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnN1YkNsYXNzTmdPbkluaXQpIHtcblx0XHRcdHRoaXMudGhyb3dFcnJvcignaXQgc2hvdWxkIG5vdCB1c2UgbmdPbkluaXQnKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGhhc0NvbnN0cnVjdG9yT25seUVsZW1lbnRSZWZJbmplY3RlZChhcmdzOiBJQXJndW1lbnRzKTogYm9vbGVhbiB7XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuaXNFbGVtZW50UmVmKGFyZ3VtZW50c1swXSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cHJpdmF0ZSBpc0VsZW1lbnRSZWYoZWxSZWY6IGFueSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBlbFJlZi5uYXRpdmVFbGVtZW50ICE9PSBudWxsO1xuXHR9XG5cblx0cHJpdmF0ZSB0aHJvd0Vycm9yKHJlYXNvbjogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBDb21wb25lbnQgXCIke3RoaXMuc3ViQ2xhc3NDb25zdHJ1Y3Rvci5uYW1lfVwiIGlzIGEgUHVyZUNvbXBvbmVudCwgJHtyZWFzb259LmApO1xuXHR9XG59XG4iXX0=