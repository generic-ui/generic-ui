/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SmartComponent } from './smart-component';
/**
 * @abstract
 */
export class Gate extends SmartComponent {
    /**
     * @protected
     */
    constructor() {
        super();
    }
    /**
     * @param {?} propertyName
     * @param {?} simpleChanges
     * @return {?}
     */
    isDefined(propertyName, simpleChanges) {
        return simpleChanges[propertyName] !== undefined && simpleChanges[propertyName].currentValue !== undefined;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsiY29tbW9uL2Nkay9nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFFbkQsTUFBTSxPQUFnQixJQUFLLFNBQVEsY0FBYzs7OztJQUVoRDtRQUNDLEtBQUssRUFBRSxDQUFDO0lBQ1QsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLFlBQW9CLEVBQUUsYUFBNEI7UUFDM0QsT0FBTyxhQUFhLENBQUMsWUFBWSxDQUFDLEtBQUssU0FBUyxJQUFJLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLEtBQUssU0FBUyxDQUFDO0lBQzVHLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuL3NtYXJ0LWNvbXBvbmVudCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBHYXRlIGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0aXNEZWZpbmVkKHByb3BlcnR5TmFtZTogc3RyaW5nLCBzaW1wbGVDaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHNpbXBsZUNoYW5nZXNbcHJvcGVydHlOYW1lXSAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXNbcHJvcGVydHlOYW1lXS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZDtcblx0fVxuXG59XG4iXX0=