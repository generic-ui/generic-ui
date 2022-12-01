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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmV2ZW50LXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvbGlzdC12aWV3L3NyYy9hcGkvbGlzdC12aWV3LmV2ZW50LXJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSXJELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRzdFLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxlQUF3QztJQUVwRjtRQUNDLEtBQUssRUFBRSxDQUFDO0lBQ1QsQ0FBQztJQUVELFlBQVksQ0FBQyx1QkFBZ0Q7UUFFNUQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDcEUsQ0FBQztDQUdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgTGlzdFZpZXdJZCB9IGZyb20gJy4uL2NvcmUvbGlzdC12aWV3LmlkJztcbmltcG9ydCB7IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi9nbG9iYWwvbGlzdC12aWV3LnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGVTZXRFdmVudCB9IGZyb20gJy4uL2NvcmUvbW9kZS9saXN0LXZpZXctbW9kZS1zZXQuZXZlbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0V2ZW50UmVwb3NpdG9yeSBleHRlbmRzIEV2ZW50UmVwb3NpdG9yeTxMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZD4ge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRvbk1vZGVDaGFuZ2UobGlzdFZpZXdSZWFkTW9kZWxSb290SWQ6IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkKSB7XG5cblx0XHRyZXR1cm4gdGhpcy5vbkV2ZW50KGxpc3RWaWV3UmVhZE1vZGVsUm9vdElkLCBMaXN0Vmlld01vZGVTZXRFdmVudCk7XG5cdH1cblxuXG59XG4iXX0=