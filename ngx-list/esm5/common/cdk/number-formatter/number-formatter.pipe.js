/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var NumberFormatterPipe = /** @class */ (function () {
    function NumberFormatterPipe() {
    }
    /**
     * @param {?} number
     * @return {?}
     */
    NumberFormatterPipe.prototype.transform = /**
     * @param {?} number
     * @return {?}
     */
    function (number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    };
    NumberFormatterPipe.decorators = [
        { type: Pipe, args: [{ name: 'numberFormatter' },] }
    ];
    return NumberFormatterPipe;
}());
export { NumberFormatterPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWZvcm1hdHRlci5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJjb21tb24vY2RrL251bWJlci1mb3JtYXR0ZXIvbnVtYmVyLWZvcm1hdHRlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRDtJQUFBO0lBT0EsQ0FBQzs7Ozs7SUFKQSx1Q0FBUzs7OztJQUFULFVBQVUsTUFBYztRQUN2QixPQUFPLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Z0JBTEQsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFOztJQU9qQywwQkFBQztDQUFBLEFBUEQsSUFPQztTQU5ZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoeyBuYW1lOiAnbnVtYmVyRm9ybWF0dGVyJyB9KVxuZXhwb3J0IGNsYXNzIE51bWJlckZvcm1hdHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHR0cmFuc2Zvcm0obnVtYmVyOiBudW1iZXIpOiBzdHJpbmcge1xuXHRcdHJldHVybiBudW1iZXIudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnICcpO1xuXHR9XG5cbn1cbiJdfQ==