/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { RandomStringGenerator } from '@generic-ui/hermes';
import { FieldId } from './field.id';
var FieldIdGenerator = /** @class */ (function () {
    function FieldIdGenerator() {
    }
    /**
     * @return {?}
     */
    FieldIdGenerator.prototype.generateId = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var id = RandomStringGenerator.generate();
        return new FieldId(id);
    };
    return FieldIdGenerator;
}());
export { FieldIdGenerator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtaWQuZ2VuZXJhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQtaWQuZ2VuZXJhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUzRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXJDO0lBQUE7SUFRQSxDQUFDOzs7O0lBTkEscUNBQVU7OztJQUFWOztZQUVPLEVBQUUsR0FBRyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUU7UUFDM0MsT0FBTyxJQUFJLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUYsdUJBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJhbmRvbVN0cmluZ0dlbmVyYXRvciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuL2ZpZWxkLmlkJztcblxuZXhwb3J0IGNsYXNzIEZpZWxkSWRHZW5lcmF0b3Ige1xuXG5cdGdlbmVyYXRlSWQoKTogRmllbGRJZCB7XG5cblx0XHRjb25zdCBpZCA9IFJhbmRvbVN0cmluZ0dlbmVyYXRvci5nZW5lcmF0ZSgpO1xuXHRcdHJldHVybiBuZXcgRmllbGRJZChpZCk7XG5cdH1cblxufVxuIl19