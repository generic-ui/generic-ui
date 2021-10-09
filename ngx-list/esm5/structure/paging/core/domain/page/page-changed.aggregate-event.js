/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { PageChangedEvent } from './page-changed.event';
import { StructureAggregateEvent } from '../../../../core/domain/structure.aggregate-event';
var PageChangedAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(PageChangedAggregateEvent, _super);
    function PageChangedAggregateEvent(structureId) {
        return _super.call(this, structureId, 'PageChangedAggregateEvent') || this;
    }
    /**
     * @return {?}
     */
    PageChangedAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new PageChangedEvent(this.getAggregateId());
    };
    return PageChangedAggregateEvent;
}(StructureAggregateEvent));
export { PageChangedAggregateEvent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1jaGFuZ2VkLmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3BhZ2luZy9jb3JlL2RvbWFpbi9wYWdlL3BhZ2UtY2hhbmdlZC5hZ2dyZWdhdGUtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUc1RjtJQUErQyxxREFBdUI7SUFFckUsbUNBQVksV0FBd0I7ZUFDbkMsa0JBQU0sV0FBVyxFQUFFLDJCQUEyQixDQUFDO0lBQ2hELENBQUM7Ozs7SUFFRCxpREFBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVGLGdDQUFDO0FBQUQsQ0FBQyxBQVZELENBQStDLHVCQUF1QixHQVVyRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFBhZ2VDaGFuZ2VkRXZlbnQgfSBmcm9tICcuL3BhZ2UtY2hhbmdlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBQYWdlQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50IGV4dGVuZHMgU3RydWN0dXJlQWdncmVnYXRlRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCkge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnUGFnZUNoYW5nZWRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXHRcdHJldHVybiBuZXcgUGFnZUNoYW5nZWRFdmVudCh0aGlzLmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cbn1cbiJdfQ==