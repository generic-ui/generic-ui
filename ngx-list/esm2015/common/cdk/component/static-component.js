/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GuiComponent } from './gui-component';
/**
 * @abstract
 */
export class StaticComponent extends GuiComponent {
    /**
     * @protected
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     */
    constructor(elementRef, changeDetectorRef) {
        super(elementRef);
        this.changeDetectorRef = changeDetectorRef;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.changeDetectorRef.detach();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StaticComponent.prototype.changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLWNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tbW9uL2Nkay9jb21wb25lbnQvc3RhdGljLWNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBRy9DLE1BQU0sT0FBZ0IsZUFBZ0IsU0FBUSxZQUFZOzs7Ozs7SUFFekQsWUFBc0IsVUFBc0IsRUFDcEIsaUJBQW9DO1FBQzNELEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQURLLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFFNUQsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDakMsQ0FBQztDQUVEOzs7Ozs7SUFSTyw0Q0FBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEd1aUNvbXBvbmVudCB9IGZyb20gJy4vZ3VpLWNvbXBvbmVudCc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0YXRpY0NvbXBvbmVudCBleHRlbmRzIEd1aUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdFx0XHQgIHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZik7XG5cdH1cblxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGFjaCgpO1xuXHR9XG5cbn1cbiJdfQ==