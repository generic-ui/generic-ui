import { EventRepository } from '@generic-ui/hermes';
import { ListViewModeSetEvent } from '../core/mode/list-view-mode-set.event';
export class ListViewEventRepository extends EventRepository {
    constructor() {
        super();
    }
    onModeChange(listViewReadModelRootId) {
        return this.onEvent(listViewReadModelRootId, ListViewModeSetEvent);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmV2ZW50LXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvbGlzdC12aWV3L2FwaS9saXN0LXZpZXcuZXZlbnQtcmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJckQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFHN0UsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGVBQW9EO0lBRWhHO1FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDVCxDQUFDO0lBRUQsWUFBWSxDQUFDLHVCQUFnRDtRQUU1RCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUNwRSxDQUFDO0NBR0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudFJlcG9zaXRvcnkgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld0lkIH0gZnJvbSAnLi4vY29yZS9saXN0LXZpZXcuaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuL2dsb2JhbC9saXN0LXZpZXcucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IExpc3RWaWV3TW9kZVNldEV2ZW50IH0gZnJvbSAnLi4vY29yZS9tb2RlL2xpc3Qtdmlldy1tb2RlLXNldC5ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIExpc3RWaWV3RXZlbnRSZXBvc2l0b3J5IGV4dGVuZHMgRXZlbnRSZXBvc2l0b3J5PExpc3RWaWV3UmVhZE1vZGVsUm9vdElkLCBMaXN0Vmlld0lkPiB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG9uTW9kZUNoYW5nZShsaXN0Vmlld1JlYWRNb2RlbFJvb3RJZDogTGlzdFZpZXdSZWFkTW9kZWxSb290SWQpIHtcblxuXHRcdHJldHVybiB0aGlzLm9uRXZlbnQobGlzdFZpZXdSZWFkTW9kZWxSb290SWQsIExpc3RWaWV3TW9kZVNldEV2ZW50KTtcblx0fVxuXG5cbn1cbiJdfQ==