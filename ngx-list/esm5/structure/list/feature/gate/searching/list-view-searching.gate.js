/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive } from '@angular/core';
import { StructureId } from '../../../../core/api/structure.id';
import { SearchCommandInvoker } from '../../../../search/core/api/search.command-invoker';
import { SearchEventRepository } from '../../../../search/core/api/search.event-repository';
import { SearchingGate } from '../../../../search/feature/gate/searching.gate';
var ListViewSearchingGate = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewSearchingGate, _super);
    function ListViewSearchingGate(structureId, searchEventRepository, searchCommandInvoker) {
        return _super.call(this, structureId, searchEventRepository, searchCommandInvoker) || this;
    }
    ListViewSearchingGate.decorators = [
        { type: Directive, args: [{
                    selector: 'gui-list-view[searching]'
                },] }
    ];
    /** @nocollapse */
    ListViewSearchingGate.ctorParameters = function () { return [
        { type: StructureId },
        { type: SearchEventRepository },
        { type: SearchCommandInvoker }
    ]; };
    return ListViewSearchingGate;
}(SearchingGate));
export { ListViewSearchingGate };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXNlYXJjaGluZy5nYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2dhdGUvc2VhcmNoaW5nL2xpc3Qtdmlldy1zZWFyY2hpbmcuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUcvRTtJQUcyQyxpREFBYTtJQUV2RCwrQkFBWSxXQUF3QixFQUNqQyxxQkFBNEMsRUFDNUMsb0JBQTBDO2VBQzVDLGtCQUFNLFdBQVcsRUFBRSxxQkFBcUIsRUFBRSxvQkFBb0IsQ0FBQztJQUNoRSxDQUFDOztnQkFURCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDBCQUEwQjtpQkFDcEM7Ozs7Z0JBUlEsV0FBVztnQkFFWCxxQkFBcUI7Z0JBRHJCLG9CQUFvQjs7SUFnQjdCLDRCQUFDO0NBQUEsQUFYRCxDQUcyQyxhQUFhLEdBUXZEO1NBUlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNlYXJjaENvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VhcmNoL2NvcmUvYXBpL3NlYXJjaC5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU2VhcmNoRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VhcmNoL2NvcmUvYXBpL3NlYXJjaC5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNlYXJjaGluZ0dhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zZWFyY2gvZmVhdHVyZS9nYXRlL3NlYXJjaGluZy5nYXRlJztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktbGlzdC12aWV3W3NlYXJjaGluZ10nXG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3U2VhcmNoaW5nR2F0ZSBleHRlbmRzIFNlYXJjaGluZ0dhdGUge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0c2VhcmNoRXZlbnRSZXBvc2l0b3J5OiBTZWFyY2hFdmVudFJlcG9zaXRvcnksXG5cdFx0XHRcdHNlYXJjaENvbW1hbmRJbnZva2VyOiBTZWFyY2hDb21tYW5kSW52b2tlcikge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCBzZWFyY2hFdmVudFJlcG9zaXRvcnksIHNlYXJjaENvbW1hbmRJbnZva2VyKTtcblx0fVxuXG59XG4iXX0=