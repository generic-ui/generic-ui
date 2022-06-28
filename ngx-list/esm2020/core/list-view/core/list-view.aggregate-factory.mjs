import { AggregateFactory } from '@generic-ui/hermes';
import { ListViewAggregate } from '../domain/list-view.aggregate';
export class ListViewAggregateFactory extends AggregateFactory {
    constructor() {
        super();
    }
    create(id) {
        return new ListViewAggregate(id);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmFnZ3JlZ2F0ZS1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL2xpc3Qtdmlldy9jb3JlL2xpc3Qtdmlldy5hZ2dyZWdhdGUtZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUd0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUdsRSxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsZ0JBQStDO0lBRTVGO1FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDVCxDQUFDO0lBRUQsTUFBTSxDQUFDLEVBQWM7UUFDcEIsT0FBTyxJQUFJLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld0lkIH0gZnJvbSAnLi9saXN0LXZpZXcuaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdBZ2dyZWdhdGUgfSBmcm9tICcuLi9kb21haW4vbGlzdC12aWV3LmFnZ3JlZ2F0ZSc7XG5cblxuZXhwb3J0IGNsYXNzIExpc3RWaWV3QWdncmVnYXRlRmFjdG9yeSBleHRlbmRzIEFnZ3JlZ2F0ZUZhY3Rvcnk8TGlzdFZpZXdJZCwgTGlzdFZpZXdBZ2dyZWdhdGU+IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Y3JlYXRlKGlkOiBMaXN0Vmlld0lkKTogTGlzdFZpZXdBZ2dyZWdhdGUge1xuXHRcdHJldHVybiBuZXcgTGlzdFZpZXdBZ2dyZWdhdGUoaWQpO1xuXHR9XG59XG4iXX0=