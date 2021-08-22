/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive } from '@angular/core';
import { StructureId } from '../../../../core/domain/structure.id';
import { SearchingGate } from '../../../../search/feature/gate/searching.gate';
import { SearchEventRepository } from '../../../../search/core/api/search.event-repository';
import { SearchCommandInvoker } from '../../../../search/core/api/search.command-invoker';
var StructureSearchingGate = /** @class */ (function (_super) {
    tslib_1.__extends(StructureSearchingGate, _super);
    function StructureSearchingGate(structureId, searchEventRepository, searchCommandInvoker) {
        return _super.call(this, structureId, searchEventRepository, searchCommandInvoker) || this;
    }
    StructureSearchingGate.decorators = [
        { type: Directive, args: [{
                    selector: 'gui-structure[searching]'
                },] }
    ];
    /** @nocollapse */
    StructureSearchingGate.ctorParameters = function () { return [
        { type: StructureId },
        { type: SearchEventRepository },
        { type: SearchCommandInvoker }
    ]; };
    return StructureSearchingGate;
}(SearchingGate));
export { StructureSearchingGate };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXNlYXJjaGluZy5nYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2dhdGUvc2VhcmNoaW5nL3N0cnVjdHVyZS1zZWFyY2hpbmcuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUM1RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUcxRjtJQUc0QyxrREFBYTtJQUV4RCxnQ0FBWSxXQUF3QixFQUNqQyxxQkFBNEMsRUFDNUMsb0JBQTBDO2VBQzVDLGtCQUFNLFdBQVcsRUFBRSxxQkFBcUIsRUFBRSxvQkFBb0IsQ0FBQztJQUNoRSxDQUFDOztnQkFURCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDBCQUEwQjtpQkFDcEM7Ozs7Z0JBUlEsV0FBVztnQkFFWCxxQkFBcUI7Z0JBQ3JCLG9CQUFvQjs7SUFjN0IsNkJBQUM7Q0FBQSxBQVhELENBRzRDLGFBQWEsR0FReEQ7U0FSWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU2VhcmNoaW5nR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlYXJjaC9mZWF0dXJlL2dhdGUvc2VhcmNoaW5nLmdhdGUnO1xuaW1wb3J0IHsgU2VhcmNoRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VhcmNoL2NvcmUvYXBpL3NlYXJjaC5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNlYXJjaENvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VhcmNoL2NvcmUvYXBpL3NlYXJjaC5jb21tYW5kLWludm9rZXInO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmVbc2VhcmNoaW5nXSdcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU2VhcmNoaW5nR2F0ZSBleHRlbmRzIFNlYXJjaGluZ0dhdGUge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0c2VhcmNoRXZlbnRSZXBvc2l0b3J5OiBTZWFyY2hFdmVudFJlcG9zaXRvcnksXG5cdFx0XHRcdHNlYXJjaENvbW1hbmRJbnZva2VyOiBTZWFyY2hDb21tYW5kSW52b2tlcikge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCBzZWFyY2hFdmVudFJlcG9zaXRvcnksIHNlYXJjaENvbW1hbmRJbnZva2VyKTtcblx0fVxuXG59XG4iXX0=