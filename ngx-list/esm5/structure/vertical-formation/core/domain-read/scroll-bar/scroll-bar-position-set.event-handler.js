/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { VerticalFormationScrollBarPositionRepository } from './vertical-formation.scroll-bar-position.repository';
import { ScrollBarPositionSetEvent } from '../../domain/scroll-bar/scroll-bar-position-set.event';
var ScrollBarPositionSetEventHandler = /** @class */ (function () {
    function ScrollBarPositionSetEventHandler(positionRepository) {
        this.positionRepository = positionRepository;
    }
    /**
     * @return {?}
     */
    ScrollBarPositionSetEventHandler.prototype.forEvent = /**
     * @return {?}
     */
    function () {
        return ScrollBarPositionSetEvent;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ScrollBarPositionSetEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.ofMessageType('ScrollBarPositionSetEvent')) {
            this.positionRepository.next(event.getAggregateId(), event.getPosition());
        }
    };
    ScrollBarPositionSetEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ScrollBarPositionSetEventHandler.ctorParameters = function () { return [
        { type: VerticalFormationScrollBarPositionRepository }
    ]; };
    return ScrollBarPositionSetEventHandler;
}());
export { ScrollBarPositionSetEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ScrollBarPositionSetEventHandler.prototype.positionRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWJhci1wb3NpdGlvbi1zZXQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9jb3JlL2RvbWFpbi1yZWFkL3Njcm9sbC1iYXIvc2Nyb2xsLWJhci1wb3NpdGlvbi1zZXQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsNENBQTRDLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNuSCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUlsRztJQUdDLDBDQUFvQixrQkFBZ0U7UUFBaEUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUE4QztJQUNwRixDQUFDOzs7O0lBRUQsbURBQVE7OztJQUFSO1FBQ0MsT0FBTyx5QkFBeUIsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVELGlEQUFNOzs7O0lBQU4sVUFBTyxLQUFnQztRQUV0QyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsMkJBQTJCLENBQUMsRUFBRTtZQUNyRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsRUFBRSxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztTQUMxRTtJQUVGLENBQUM7O2dCQWhCRCxVQUFVOzs7O2dCQUxGLDRDQUE0Qzs7SUF1QnJELHVDQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FqQlksZ0NBQWdDOzs7Ozs7SUFFaEMsOERBQXdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIsIERvbWFpbkV2ZW50VHlwZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uU2Nyb2xsQmFyUG9zaXRpb25SZXBvc2l0b3J5IH0gZnJvbSAnLi92ZXJ0aWNhbC1mb3JtYXRpb24uc2Nyb2xsLWJhci1wb3NpdGlvbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjcm9sbEJhclBvc2l0aW9uU2V0RXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vc2Nyb2xsLWJhci9zY3JvbGwtYmFyLXBvc2l0aW9uLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjcm9sbEJhclBvc2l0aW9uU2V0RXZlbnRIYW5kbGVyIGltcGxlbWVudHMgRG9tYWluRXZlbnRIYW5kbGVyPFN0cnVjdHVyZUlkLCBTY3JvbGxCYXJQb3NpdGlvblNldEV2ZW50PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBwb3NpdGlvblJlcG9zaXRvcnk6IFZlcnRpY2FsRm9ybWF0aW9uU2Nyb2xsQmFyUG9zaXRpb25SZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRmb3JFdmVudCgpOiBEb21haW5FdmVudFR5cGU8U2Nyb2xsQmFyUG9zaXRpb25TZXRFdmVudD4ge1xuXHRcdHJldHVybiBTY3JvbGxCYXJQb3NpdGlvblNldEV2ZW50O1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBTY3JvbGxCYXJQb3NpdGlvblNldEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnU2Nyb2xsQmFyUG9zaXRpb25TZXRFdmVudCcpKSB7XG5cdFx0XHR0aGlzLnBvc2l0aW9uUmVwb3NpdG9yeS5uZXh0KGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCksIGV2ZW50LmdldFBvc2l0aW9uKCkpO1xuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==