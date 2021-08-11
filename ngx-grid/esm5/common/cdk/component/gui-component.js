/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ClassModifier } from '../dom/class/class-modifier';
/**
 * @abstract
 */
var /**
 * @abstract
 */
GuiComponent = /** @class */ (function () {
    function GuiComponent(innerElementRef) {
        this.innerElementRef = innerElementRef;
        this.innerClassModifier = new ClassModifier(this.innerElementRef.nativeElement);
        this.addHostClass();
    }
    /**
     * @param {?} className
     * @return {?}
     */
    GuiComponent.prototype.addClassToHost = /**
     * @param {?} className
     * @return {?}
     */
    function (className) {
        this.innerClassModifier.getHost().add(className);
    };
    /**
     * @param {?} className
     * @return {?}
     */
    GuiComponent.prototype.removeClassFromHost = /**
     * @param {?} className
     * @return {?}
     */
    function (className) {
        this.innerClassModifier.getHost().remove(className);
    };
    /**
     * @template T
     * @param {?} prop
     * @return {?}
     */
    GuiComponent.prototype.hasChanged = /**
     * @template T
     * @param {?} prop
     * @return {?}
     */
    function (prop) {
        return prop !== undefined && prop.currentValue !== undefined;
    };
    /**
     * @private
     * @return {?}
     */
    GuiComponent.prototype.addHostClass = /**
     * @private
     * @return {?}
     */
    function () {
        this.innerClassModifier.getHost().add(this.getSelectorName());
    };
    return GuiComponent;
}());
/**
 * @abstract
 */
export { GuiComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GuiComponent.prototype.innerClassModifier;
    /**
     * @type {?}
     * @private
     */
    GuiComponent.prototype.innerElementRef;
    /**
     * @abstract
     * @protected
     * @return {?}
     */
    GuiComponent.prototype.getSelectorName = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLWNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tbW9uL2Nkay9jb21wb25lbnQvZ3VpLWNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7O0FBSTVEOzs7O0lBSUMsc0JBQXVDLGVBQTJCO1FBQTNCLG9CQUFlLEdBQWYsZUFBZSxDQUFZO1FBRmpELHVCQUFrQixHQUFrQixJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRzFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUlELHFDQUFjOzs7O0lBQWQsVUFBZSxTQUFpQjtRQUMvQixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7O0lBRUQsMENBQW1COzs7O0lBQW5CLFVBQW9CLFNBQWlCO1FBQ3BDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7O0lBRUQsaUNBQVU7Ozs7O0lBQVYsVUFBYyxJQUFnQjtRQUM3QixPQUFPLElBQUksS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxTQUFTLENBQUM7SUFDOUQsQ0FBQzs7Ozs7SUFFTyxtQ0FBWTs7OztJQUFwQjtRQUNDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUNGLG1CQUFDO0FBQUQsQ0FBQyxBQXpCRCxJQXlCQzs7Ozs7Ozs7OztJQXZCQSwwQ0FBMkc7Ozs7O0lBRXJGLHVDQUE0Qzs7Ozs7O0lBSWxFLHlEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2xhc3NNb2RpZmllciB9IGZyb20gJy4uL2RvbS9jbGFzcy9jbGFzcy1tb2RpZmllcic7XG5pbXBvcnQgeyBDaGFuZ2VzIH0gZnJvbSAnLi9uZy1jaGFuZ2VzJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR3VpQ29tcG9uZW50IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGlubmVyQ2xhc3NNb2RpZmllcjogQ2xhc3NNb2RpZmllciA9IG5ldyBDbGFzc01vZGlmaWVyKHRoaXMuaW5uZXJFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGlubmVyRWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXHRcdHRoaXMuYWRkSG9zdENsYXNzKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZztcblxuXHRhZGRDbGFzc1RvSG9zdChjbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuaW5uZXJDbGFzc01vZGlmaWVyLmdldEhvc3QoKS5hZGQoY2xhc3NOYW1lKTtcblx0fVxuXG5cdHJlbW92ZUNsYXNzRnJvbUhvc3QoY2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmlubmVyQ2xhc3NNb2RpZmllci5nZXRIb3N0KCkucmVtb3ZlKGNsYXNzTmFtZSk7XG5cdH1cblxuXHRoYXNDaGFuZ2VkPFQ+KHByb3A6IENoYW5nZXM8VD4pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gcHJvcCAhPT0gdW5kZWZpbmVkICYmIHByb3AuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQ7XG5cdH1cblxuXHRwcml2YXRlIGFkZEhvc3RDbGFzcygpOiB2b2lkIHtcblx0XHR0aGlzLmlubmVyQ2xhc3NNb2RpZmllci5nZXRIb3N0KCkuYWRkKHRoaXMuZ2V0U2VsZWN0b3JOYW1lKCkpO1xuXHR9XG59XG4iXX0=