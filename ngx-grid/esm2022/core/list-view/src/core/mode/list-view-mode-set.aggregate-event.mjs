import { ListViewModeSetEvent } from './list-view-mode-set.event';
import { ListViewAggregateEvent } from '../list-view.aggregate-event';
export class ListViewModeSetAggregateEvent extends ListViewAggregateEvent {
    mode;
    constructor(listViewId, mode) {
        super(listViewId, 'ListViewModeSetAggregateEvent');
        this.mode = mode;
    }
    toDomainEvent() {
        return new ListViewModeSetEvent(this.getAggregateId(), this.mode);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LW1vZGUtc2V0LmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29yZS9saXN0LXZpZXcvc3JjL2NvcmUvbW9kZS9saXN0LXZpZXctbW9kZS1zZXQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBR2xFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRXRFLE1BQU0sT0FBTyw2QkFBOEIsU0FBUSxzQkFBc0I7SUFHcEQ7SUFEcEIsWUFBWSxVQUFzQixFQUNkLElBQWtCO1FBQ3JDLEtBQUssQ0FBQyxVQUFVLEVBQUUsK0JBQStCLENBQUMsQ0FBQztRQURoQyxTQUFJLEdBQUosSUFBSSxDQUFjO0lBRXRDLENBQUM7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLG9CQUFvQixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld01vZGVTZXRFdmVudCB9IGZyb20gJy4vbGlzdC12aWV3LW1vZGUtc2V0LmV2ZW50JztcbmltcG9ydCB7IExpc3RWaWV3SWQgfSBmcm9tICcuLi9saXN0LXZpZXcuaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlIH0gZnJvbSAnLi4vLi4vZG9tYWluL21vZGUvbGlzdC12aWV3LW1vZGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uL2xpc3Qtdmlldy5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdNb2RlU2V0QWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBMaXN0Vmlld0FnZ3JlZ2F0ZUV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihsaXN0Vmlld0lkOiBMaXN0Vmlld0lkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IG1vZGU6IExpc3RWaWV3TW9kZSkge1xuXHRcdHN1cGVyKGxpc3RWaWV3SWQsICdMaXN0Vmlld01vZGVTZXRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxMaXN0Vmlld0lkPiB7XG5cdFx0cmV0dXJuIG5ldyBMaXN0Vmlld01vZGVTZXRFdmVudCh0aGlzLmdldEFnZ3JlZ2F0ZUlkKCksIHRoaXMubW9kZSk7XG5cdH1cbn1cbiJdfQ==