/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CompositionContainerWidthSetEvent } from './composition-container-width-set.event';
import { CompositionAggregateEvent } from '../../composition.aggregate-event';
export class CompositionContainerWidthSetAggregateEvent extends CompositionAggregateEvent {
    /**
     * @param {?} compositionId
     * @param {?} containerWidth
     */
    constructor(compositionId, containerWidth) {
        super(compositionId, 'CompositionContainerWidthSetAggregateEvent');
        this.containerWidth = containerWidth;
    }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new CompositionContainerWidthSetEvent(this.getAggregateId(), this.containerWidth);
    }
}
if (false) {
    /** @type {?} */
    CompositionContainerWidthSetAggregateEvent.prototype.containerWidth;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLXNldC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2NvcmUvZG9tYWluL3dpZHRoL3NldC1jb250YWluZXItd2lkdGgvY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLXNldC5hZ2dyZWdhdGUtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzVGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRzlFLE1BQU0sT0FBTywwQ0FBMkMsU0FBUSx5QkFBeUI7Ozs7O0lBRXhGLFlBQVksYUFBNEIsRUFDckIsY0FBc0I7UUFDeEMsS0FBSyxDQUFDLGFBQWEsRUFBRSw0Q0FBNEMsQ0FBQyxDQUFDO1FBRGpELG1CQUFjLEdBQWQsY0FBYyxDQUFRO0lBRXpDLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLGlDQUFpQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDMUYsQ0FBQztDQUNEOzs7SUFQRyxvRUFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi9hcGkvY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEV2ZW50IH0gZnJvbSAnLi9jb21wb3NpdGlvbi1jb250YWluZXItd2lkdGgtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0QWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZUV2ZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRwdWJsaWMgcmVhZG9ubHkgY29udGFpbmVyV2lkdGg6IG51bWJlcikge1xuXHRcdHN1cGVyKGNvbXBvc2l0aW9uSWQsICdDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0QWdncmVnYXRlRXZlbnQnKTtcblx0fVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8Q29tcG9zaXRpb25JZD4ge1xuXHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEV2ZW50KHRoaXMuZ2V0QWdncmVnYXRlSWQoKSwgdGhpcy5jb250YWluZXJXaWR0aCk7XG5cdH1cbn1cbiJdfQ==