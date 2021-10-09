/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { VerticalFormationScrollBarPositionArchive } from './vertical-formation.scroll-bar-position.archive';
import { ScrollBarPositionSetEvent } from '../../domain/scroll-bar/scroll-bar-position-set.event';
export class ScrollBarPositionSetEventHandler {
    /**
     * @param {?} positionRepository
     */
    constructor(positionRepository) {
        this.positionRepository = positionRepository;
    }
    /**
     * @return {?}
     */
    forEvent() {
        return ScrollBarPositionSetEvent;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('ScrollBarPositionSetEvent')) {
            this.positionRepository.next(event.getAggregateId(), event.getPosition());
        }
    }
}
ScrollBarPositionSetEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ScrollBarPositionSetEventHandler.ctorParameters = () => [
    { type: VerticalFormationScrollBarPositionArchive }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ScrollBarPositionSetEventHandler.prototype.positionRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWJhci1wb3NpdGlvbi1zZXQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9jb3JlL2RvbWFpbi1yZWFkL3Njcm9sbC1iYXIvc2Nyb2xsLWJhci1wb3NpdGlvbi1zZXQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUM3RyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUtsRyxNQUFNLE9BQU8sZ0NBQWdDOzs7O0lBRTVDLFlBQW9CLGtCQUE2RDtRQUE3RCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQTJDO0lBQ2pGLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsT0FBTyx5QkFBeUIsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxLQUFnQztRQUV0QyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsMkJBQTJCLENBQUMsRUFBRTtZQUNyRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsRUFBRSxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztTQUMxRTtJQUVGLENBQUM7OztZQWhCRCxVQUFVOzs7O1lBTEYseUNBQXlDOzs7Ozs7O0lBUXJDLDhEQUFxRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyLCBEb21haW5FdmVudFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvblNjcm9sbEJhclBvc2l0aW9uQXJjaGl2ZSB9IGZyb20gJy4vdmVydGljYWwtZm9ybWF0aW9uLnNjcm9sbC1iYXItcG9zaXRpb24uYXJjaGl2ZSc7XG5pbXBvcnQgeyBTY3JvbGxCYXJQb3NpdGlvblNldEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL3Njcm9sbC1iYXIvc2Nyb2xsLWJhci1wb3NpdGlvbi1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY3JvbGxCYXJQb3NpdGlvblNldEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgU2Nyb2xsQmFyUG9zaXRpb25TZXRFdmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcG9zaXRpb25SZXBvc2l0b3J5OiBWZXJ0aWNhbEZvcm1hdGlvblNjcm9sbEJhclBvc2l0aW9uQXJjaGl2ZSkge1xuXHR9XG5cblx0Zm9yRXZlbnQoKTogRG9tYWluRXZlbnRUeXBlPFNjcm9sbEJhclBvc2l0aW9uU2V0RXZlbnQ+IHtcblx0XHRyZXR1cm4gU2Nyb2xsQmFyUG9zaXRpb25TZXRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShldmVudDogU2Nyb2xsQmFyUG9zaXRpb25TZXRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ1Njcm9sbEJhclBvc2l0aW9uU2V0RXZlbnQnKSkge1xuXHRcdFx0dGhpcy5wb3NpdGlvblJlcG9zaXRvcnkubmV4dChldmVudC5nZXRBZ2dyZWdhdGVJZCgpLCBldmVudC5nZXRQb3NpdGlvbigpKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=