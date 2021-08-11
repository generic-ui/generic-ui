/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive } from '@angular/core';
import { PagingCommandInvoker } from '../../../../paging/core/api/paging.command-invoker';
import { PagingEventRepository } from '../../../../paging/core/api/paging.event-repository';
import { StructureId } from '../../../../core/api/structure.id';
import { PagingGate } from '../../../../paging/feature/gate/paging.gate';
var ListViewPagingGate = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewPagingGate, _super);
    function ListViewPagingGate(structureId, structurePagingCommandDispatcher, pagingEventRepository) {
        return _super.call(this, structureId, structurePagingCommandDispatcher, pagingEventRepository) || this;
    }
    ListViewPagingGate.decorators = [
        { type: Directive, args: [{
                    selector: 'gui-list-view[paging]'
                },] }
    ];
    /** @nocollapse */
    ListViewPagingGate.ctorParameters = function () { return [
        { type: StructureId },
        { type: PagingCommandInvoker },
        { type: PagingEventRepository }
    ]; };
    return ListViewPagingGate;
}(PagingGate));
export { ListViewPagingGate };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXBhZ2luZy5nYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2dhdGV3YXkvcGFnaW5nL2xpc3Qtdmlldy1wYWdpbmcuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDMUYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDNUYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUd6RTtJQUd3Qyw4Q0FBVTtJQUVqRCw0QkFBWSxXQUF3QixFQUNqQyxnQ0FBc0QsRUFDdEQscUJBQTRDO2VBQzlDLGtCQUFNLFdBQVcsRUFBRSxnQ0FBZ0MsRUFBRSxxQkFBcUIsQ0FBQztJQUM1RSxDQUFDOztnQkFURCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHVCQUF1QjtpQkFDakM7Ozs7Z0JBTlEsV0FBVztnQkFGWCxvQkFBb0I7Z0JBQ3BCLHFCQUFxQjs7SUFnQjlCLHlCQUFDO0NBQUEsQUFYRCxDQUd3QyxVQUFVLEdBUWpEO1NBUlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBhZ2luZ0NvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vcGFnaW5nL2NvcmUvYXBpL3BhZ2luZy5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgUGFnaW5nRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vcGFnaW5nL2NvcmUvYXBpL3BhZ2luZy5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFBhZ2luZ0dhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9wYWdpbmcvZmVhdHVyZS9nYXRlL3BhZ2luZy5nYXRlJztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktbGlzdC12aWV3W3BhZ2luZ10nXG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3UGFnaW5nR2F0ZSBleHRlbmRzIFBhZ2luZ0dhdGUge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0c3RydWN0dXJlUGFnaW5nQ29tbWFuZERpc3BhdGNoZXI6IFBhZ2luZ0NvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwYWdpbmdFdmVudFJlcG9zaXRvcnk6IFBhZ2luZ0V2ZW50UmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCBzdHJ1Y3R1cmVQYWdpbmdDb21tYW5kRGlzcGF0Y2hlciwgcGFnaW5nRXZlbnRSZXBvc2l0b3J5KTtcblx0fVxuXG59XG4iXX0=