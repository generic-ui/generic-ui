/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ReadModelObject } from '@generic-ui/hermes';
import { SelectedRowsList } from './selected-rows/selected-rows-list';
let Formation = class Formation {
    /**
     * @param {?} selectedRows
     */
    constructor(selectedRows) {
        this.selectedRowsList = new SelectedRowsList(selectedRows);
    }
    /**
     * @return {?}
     */
    getSelectedRows() {
        return this.selectedRowsList;
    }
};
Formation.ctorParameters = () => [
    { type: Array }
];
Formation = tslib_1.__decorate([
    ReadModelObject,
    tslib_1.__metadata("design:paramtypes", [Array])
], Formation);
export { Formation };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Formation.prototype.selectedRowsList;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi1hcGkvZm9ybWF0aW9uL3JlYWQvZm9ybWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXJELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0lBR3pELFNBQVMsU0FBVCxTQUFTOzs7O0lBSXJCLFlBQVksWUFBMkI7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUM5QixDQUFDO0NBRUQsQ0FBQTs7WUFSMEIsS0FBSzs7QUFKbkIsU0FBUztJQURyQixlQUFlOzZDQUtXLEtBQUs7R0FKbkIsU0FBUyxDQVlyQjtTQVpZLFNBQVM7Ozs7OztJQUVyQixxQ0FBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFkTW9kZWxPYmplY3QgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTZWxlY3RlZFJvd3NMaXN0IH0gZnJvbSAnLi9zZWxlY3RlZC1yb3dzL3NlbGVjdGVkLXJvd3MtbGlzdCc7XG5cbkBSZWFkTW9kZWxPYmplY3RcbmV4cG9ydCBjbGFzcyBGb3JtYXRpb24ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc2VsZWN0ZWRSb3dzTGlzdDogU2VsZWN0ZWRSb3dzTGlzdDtcblxuXHRjb25zdHJ1Y3RvcihzZWxlY3RlZFJvd3M6IEFycmF5PHN0cmluZz4pIHtcblx0XHR0aGlzLnNlbGVjdGVkUm93c0xpc3QgPSBuZXcgU2VsZWN0ZWRSb3dzTGlzdChzZWxlY3RlZFJvd3MpO1xuXHR9XG5cblx0Z2V0U2VsZWN0ZWRSb3dzKCk6IFNlbGVjdGVkUm93c0xpc3Qge1xuXHRcdHJldHVybiB0aGlzLnNlbGVjdGVkUm93c0xpc3Q7XG5cdH1cblxufVxuIl19