import { AggregateId } from '@generic-ui/hermes';
import { ListViewReadModelRootId } from '../api/global/list-view.read-model-root-id';
export class ListViewId extends AggregateId {
    constructor(id) {
        super(id);
    }
    toReadModelRootId() {
        return new ListViewReadModelRootId(this.getId());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmlkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL2xpc3Qtdmlldy9zcmMvY29yZS9saXN0LXZpZXcuaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBbUIsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUVyRixNQUFNLE9BQU8sVUFBVyxTQUFRLFdBQVc7SUFFMUMsWUFBWSxFQUFVO1FBQ3JCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxpQkFBaUI7UUFDaEIsT0FBTyxJQUFJLHVCQUF1QixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkLCBSZWFkTW9kZWxSb290SWQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgTGlzdFZpZXdSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi9hcGkvZ2xvYmFsL2xpc3Qtdmlldy5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdJZCBleHRlbmRzIEFnZ3JlZ2F0ZUlkIHtcblxuXHRjb25zdHJ1Y3RvcihpZDogc3RyaW5nKSB7XG5cdFx0c3VwZXIoaWQpO1xuXHR9XG5cblx0dG9SZWFkTW9kZWxSb290SWQoKTogUmVhZE1vZGVsUm9vdElkIHtcblx0XHRyZXR1cm4gbmV3IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkKHRoaXMuZ2V0SWQoKSk7XG5cdH1cbn1cbiJdfQ==