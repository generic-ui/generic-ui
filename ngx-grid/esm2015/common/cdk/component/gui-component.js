/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ClassModifier } from '../dom/class/class-modifier';
/**
 * @abstract
 */
export class GuiComponent {
    /**
     * @protected
     * @param {?} innerElementRef
     */
    constructor(innerElementRef) {
        this.innerElementRef = innerElementRef;
        this.innerClassModifier = new ClassModifier(this.innerElementRef.nativeElement);
        this.addHostClass();
    }
    /**
     * @param {?} className
     * @return {?}
     */
    addClassToHost(className) {
        this.innerClassModifier.getHost().add(className);
    }
    /**
     * @param {?} className
     * @return {?}
     */
    removeClassFromHost(className) {
        this.innerClassModifier.getHost().remove(className);
    }
    /**
     * @template T
     * @param {?} prop
     * @return {?}
     */
    hasChanged(prop) {
        return prop !== undefined && prop.currentValue !== undefined;
    }
    /**
     * @private
     * @return {?}
     */
    addHostClass() {
        this.innerClassModifier.getHost().add(this.getSelectorName());
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLWNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tbW9uL2Nkay9jb21wb25lbnQvZ3VpLWNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7O0FBSTVELE1BQU0sT0FBZ0IsWUFBWTs7Ozs7SUFJakMsWUFBdUMsZUFBMkI7UUFBM0Isb0JBQWUsR0FBZixlQUFlLENBQVk7UUFGakQsdUJBQWtCLEdBQWtCLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7UUFHMUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBSUQsY0FBYyxDQUFDLFNBQWlCO1FBQy9CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxTQUFpQjtRQUNwQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7OztJQUVELFVBQVUsQ0FBSSxJQUFnQjtRQUM3QixPQUFPLElBQUksS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxTQUFTLENBQUM7SUFDOUQsQ0FBQzs7Ozs7SUFFTyxZQUFZO1FBQ25CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDL0QsQ0FBQztDQUNEOzs7Ozs7SUF2QkEsMENBQTJHOzs7OztJQUVyRix1Q0FBNEM7Ozs7OztJQUlsRSx5REFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENsYXNzTW9kaWZpZXIgfSBmcm9tICcuLi9kb20vY2xhc3MvY2xhc3MtbW9kaWZpZXInO1xuaW1wb3J0IHsgQ2hhbmdlcyB9IGZyb20gJy4vbmctY2hhbmdlcyc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEd1aUNvbXBvbmVudCB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBpbm5lckNsYXNzTW9kaWZpZXI6IENsYXNzTW9kaWZpZXIgPSBuZXcgQ2xhc3NNb2RpZmllcih0aGlzLmlubmVyRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBpbm5lckVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHR0aGlzLmFkZEhvc3RDbGFzcygpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGFic3RyYWN0IGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmc7XG5cblx0YWRkQ2xhc3NUb0hvc3QoY2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmlubmVyQ2xhc3NNb2RpZmllci5nZXRIb3N0KCkuYWRkKGNsYXNzTmFtZSk7XG5cdH1cblxuXHRyZW1vdmVDbGFzc0Zyb21Ib3N0KGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5pbm5lckNsYXNzTW9kaWZpZXIuZ2V0SG9zdCgpLnJlbW92ZShjbGFzc05hbWUpO1xuXHR9XG5cblx0aGFzQ2hhbmdlZDxUPihwcm9wOiBDaGFuZ2VzPFQ+KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHByb3AgIT09IHVuZGVmaW5lZCAmJiBwcm9wLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkO1xuXHR9XG5cblx0cHJpdmF0ZSBhZGRIb3N0Q2xhc3MoKTogdm9pZCB7XG5cdFx0dGhpcy5pbm5lckNsYXNzTW9kaWZpZXIuZ2V0SG9zdCgpLmFkZCh0aGlzLmdldFNlbGVjdG9yTmFtZSgpKTtcblx0fVxufVxuIl19