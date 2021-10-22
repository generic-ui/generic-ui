/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive } from '@angular/core';
import { SourceGate } from '../../../../source/feature/gate/source.gate';
import { StructureId } from '../../../../core/api/structure.id';
import { SourceCommandInvoker } from '../../../../source/core/api/source.command-invoker';
import { SourceEventService } from '../../../../source/core/api/event/source-event.service';
var ListViewSourceGate = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewSourceGate, _super);
    function ListViewSourceGate(structureId, sourceCommandService, sourceEventService) {
        var _this = _super.call(this, structureId, sourceCommandService, sourceEventService) || this;
        _this.sourceCommandService = sourceCommandService;
        _this.sourceEventService = sourceEventService;
        return _this;
    }
    ListViewSourceGate.decorators = [
        { type: Directive, args: [{
                    selector: 'gui-list-view[items]'
                },] }
    ];
    /** @nocollapse */
    ListViewSourceGate.ctorParameters = function () { return [
        { type: StructureId },
        { type: SourceCommandInvoker },
        { type: SourceEventService }
    ]; };
    return ListViewSourceGate;
}(SourceGate));
export { ListViewSourceGate };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ListViewSourceGate.prototype.sourceCommandService;
    /**
     * @type {?}
     * @protected
     */
    ListViewSourceGate.prototype.sourceEventService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXNvdXJjZS5nYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2dhdGUvc291cmNlL2xpc3Qtdmlldy1zb3VyY2UuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUc1RjtJQUd3Qyw4Q0FBVTtJQUVqRCw0QkFBWSxXQUF3QixFQUNkLG9CQUEwQyxFQUMxQyxrQkFBc0M7UUFGNUQsWUFHQyxrQkFBTSxXQUFXLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLENBQUMsU0FDNUQ7UUFIcUIsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyx3QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9COztJQUU1RCxDQUFDOztnQkFURCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHNCQUFzQjtpQkFDaEM7Ozs7Z0JBUFEsV0FBVztnQkFDWCxvQkFBb0I7Z0JBQ3BCLGtCQUFrQjs7SUFjM0IseUJBQUM7Q0FBQSxBQVhELENBR3dDLFVBQVUsR0FRakQ7U0FSWSxrQkFBa0I7Ozs7OztJQUczQixrREFBNkQ7Ozs7O0lBQzdELGdEQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTb3VyY2VHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2ZlYXR1cmUvZ2F0ZS9zb3VyY2UuZ2F0ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTb3VyY2VDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9zb3VyY2UuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNvdXJjZUV2ZW50U2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9ldmVudC9zb3VyY2UtZXZlbnQuc2VydmljZSc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLWxpc3Qtdmlld1tpdGVtc10nXG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3U291cmNlR2F0ZSBleHRlbmRzIFNvdXJjZUdhdGUge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJvdGVjdGVkIHJlYWRvbmx5IHNvdXJjZUNvbW1hbmRTZXJ2aWNlOiBTb3VyY2VDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJvdGVjdGVkIHJlYWRvbmx5IHNvdXJjZUV2ZW50U2VydmljZTogU291cmNlRXZlbnRTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsIHNvdXJjZUNvbW1hbmRTZXJ2aWNlLCBzb3VyY2VFdmVudFNlcnZpY2UpO1xuXHR9XG5cbn1cbiJdfQ==