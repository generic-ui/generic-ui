import { FilterTypeArchive } from './filter-type.archive';
import { FilterTypeCollectionModel } from '../../api/type/filter-type-collection.model';
import { FilterTypesInitedEvent } from '../../core/type/init/filter-types-inited.event';
import { FilterDiContainer } from '../../api/di/filter.di-container';
export class FilterTypeConfigFilterSetEventHandler {
    filterTypeArchive = FilterDiContainer.resolve(FilterTypeArchive);
    forEvent() {
        return FilterTypesInitedEvent;
    }
    handle(filterTypesInitedEvent) {
        if (filterTypesInitedEvent.ofMessageType('FilterTypesInitedEvent')) {
            const map = filterTypesInitedEvent.getMap();
            this.filterTypeArchive.next(filterTypesInitedEvent.getAggregateId(), new FilterTypeCollectionModel(map));
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXR5cGUuY29uZmlnLWZpbHRlci1zZXQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29yZS9zdHJ1Y3R1cmUvZmlsdGVyL3NyYy9jb3JlLXJlYWQvdHlwZS9maWx0ZXItdHlwZS5jb25maWctZmlsdGVyLXNldC5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBRXhGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBR3JFLE1BQU0sT0FBTyxxQ0FBcUM7SUFFaEMsaUJBQWlCLEdBQXNCLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBRXJHLFFBQVE7UUFDUCxPQUFPLHNCQUFzQixDQUFDO0lBQy9CLENBQUM7SUFFRCxNQUFNLENBQUMsc0JBQThDO1FBRXBELElBQUksc0JBQXNCLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUFDLEVBQUU7WUFFbkUsTUFBTSxHQUFHLEdBQXdDLHNCQUFzQixDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRWpGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3pHO0lBQ0YsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyLCBEb21haW5FdmVudFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlQXJjaGl2ZSB9IGZyb20gJy4vZmlsdGVyLXR5cGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlQ29sbGVjdGlvbk1vZGVsIH0gZnJvbSAnLi4vLi4vYXBpL3R5cGUvZmlsdGVyLXR5cGUtY29sbGVjdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlc0luaXRlZEV2ZW50IH0gZnJvbSAnLi4vLi4vY29yZS90eXBlL2luaXQvZmlsdGVyLXR5cGVzLWluaXRlZC5ldmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlTW9kZWwgfSBmcm9tICcuLi8uLi9hcGkvdHlwZS9maWx0ZXItdHlwZS5tb2RlbCc7XG5pbXBvcnQgeyBGaWx0ZXJEaUNvbnRhaW5lciB9IGZyb20gJy4uLy4uL2FwaS9kaS9maWx0ZXIuZGktY29udGFpbmVyJztcblxuXG5leHBvcnQgY2xhc3MgRmlsdGVyVHlwZUNvbmZpZ0ZpbHRlclNldEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgRmlsdGVyVHlwZXNJbml0ZWRFdmVudD4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyVHlwZUFyY2hpdmU6IEZpbHRlclR5cGVBcmNoaXZlID0gRmlsdGVyRGlDb250YWluZXIucmVzb2x2ZShGaWx0ZXJUeXBlQXJjaGl2ZSk7XG5cblx0Zm9yRXZlbnQoKTogRG9tYWluRXZlbnRUeXBlPEZpbHRlclR5cGVzSW5pdGVkRXZlbnQ+IHtcblx0XHRyZXR1cm4gRmlsdGVyVHlwZXNJbml0ZWRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShmaWx0ZXJUeXBlc0luaXRlZEV2ZW50OiBGaWx0ZXJUeXBlc0luaXRlZEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZmlsdGVyVHlwZXNJbml0ZWRFdmVudC5vZk1lc3NhZ2VUeXBlKCdGaWx0ZXJUeXBlc0luaXRlZEV2ZW50JykpIHtcblxuXHRcdFx0Y29uc3QgbWFwOiBNYXA8c3RyaW5nLCBBcnJheTxGaWx0ZXJUeXBlTW9kZWw+PiA9IGZpbHRlclR5cGVzSW5pdGVkRXZlbnQuZ2V0TWFwKCk7XG5cblx0XHRcdHRoaXMuZmlsdGVyVHlwZUFyY2hpdmUubmV4dChmaWx0ZXJUeXBlc0luaXRlZEV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCksIG5ldyBGaWx0ZXJUeXBlQ29sbGVjdGlvbk1vZGVsKG1hcCkpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=