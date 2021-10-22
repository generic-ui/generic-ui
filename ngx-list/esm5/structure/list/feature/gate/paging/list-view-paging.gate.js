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
import { CompositionId } from '../../../../../composition/core/api/composition.id';
var ListViewPagingGate = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewPagingGate, _super);
    function ListViewPagingGate(structureId, compositionId, structurePagingCommandDispatcher, pagingEventRepository) {
        return _super.call(this, structureId, compositionId, structurePagingCommandDispatcher, pagingEventRepository) || this;
    }
    ListViewPagingGate.decorators = [
        { type: Directive, args: [{
                    selector: 'gui-list-view[paging]'
                },] }
    ];
    /** @nocollapse */
    ListViewPagingGate.ctorParameters = function () { return [
        { type: StructureId },
        { type: CompositionId },
        { type: PagingCommandInvoker },
        { type: PagingEventRepository }
    ]; };
    return ListViewPagingGate;
}(PagingGate));
export { ListViewPagingGate };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXBhZ2luZy5nYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2dhdGUvcGFnaW5nL2xpc3Qtdmlldy1wYWdpbmcuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDMUYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDNUYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFHbkY7SUFHd0MsOENBQVU7SUFFakQsNEJBQVksV0FBd0IsRUFDakMsYUFBNEIsRUFDNUIsZ0NBQXNELEVBQ3RELHFCQUE0QztlQUM5QyxrQkFBTSxXQUFXLEVBQUUsYUFBYSxFQUFFLGdDQUFnQyxFQUFFLHFCQUFxQixDQUFDO0lBQzNGLENBQUM7O2dCQVZELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsdUJBQXVCO2lCQUNqQzs7OztnQkFQUSxXQUFXO2dCQUVYLGFBQWE7Z0JBSmIsb0JBQW9CO2dCQUNwQixxQkFBcUI7O0lBa0I5Qix5QkFBQztDQUFBLEFBWkQsQ0FHd0MsVUFBVSxHQVNqRDtTQVRZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQYWdpbmdDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3BhZ2luZy9jb3JlL2FwaS9wYWdpbmcuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFBhZ2luZ0V2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uL3BhZ2luZy9jb3JlL2FwaS9wYWdpbmcuZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBQYWdpbmdHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vcGFnaW5nL2ZlYXR1cmUvZ2F0ZS9wYWdpbmcuZ2F0ZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uaWQnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1saXN0LXZpZXdbcGFnaW5nXSdcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdQYWdpbmdHYXRlIGV4dGVuZHMgUGFnaW5nR2F0ZSB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRzdHJ1Y3R1cmVQYWdpbmdDb21tYW5kRGlzcGF0Y2hlcjogUGFnaW5nQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHBhZ2luZ0V2ZW50UmVwb3NpdG9yeTogUGFnaW5nRXZlbnRSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsIGNvbXBvc2l0aW9uSWQsIHN0cnVjdHVyZVBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyLCBwYWdpbmdFdmVudFJlcG9zaXRvcnkpO1xuXHR9XG5cbn1cbiJdfQ==