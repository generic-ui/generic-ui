import { ToggleFilterCommandHandler } from './toggle/toggle-filter.command-handler';
import { AddFilterCommandHandler } from './add/add-filter.command-handler';
import { RemoveAllFiltersCommandHandler } from './remove-all/remove-all-filters.command-handler';
import { RemoveFilterCommandHandler } from './remove/remove-filter.command-handler';
import { SetConfigFilterCommandHandler } from './config/set-config-filter.command-handler';
import { SetConfigQuickFilterCommandHandler } from './quick/set-config-quick-filter.command-handler';
import { FilterManagerFactory } from '../domain/filter.manager-factory';
import { ConfigQuickFilterSetEventHandler } from '../core-read/quick-filter/config-quick-filter-set.event-handler';
import { ConfigFilterSetEventHandler } from '../core-read/config/config-filter-set.event-handler';
import { FilterTypeConfigFilterSetEventHandler } from '../core-read/type/filter-type.config-filter-set.event-handler';
import { ActiveFiltersSetEventHandler } from '../core-read/active/active-filters-set.event-handler';
import { UniqueFilterCalculatedEventHandler } from '../core-read/unique/unique-filter-calculated.event-handler';
import { FilterTypeFieldsInitedEventHandler } from './type/init/filter-type.fields-inited.event-handler';
import { UnselectAllUniqueFilterCommandHandler } from './unique/unselect-all/unselect-all-unique-filter.command-handler';
import { UnselectUniqueFilterCommandHandler } from './unique/unselect/unselect-unique-filter.command-handler';
import { SelectAllUniqueFilterCommandHandler } from './unique/select-all/select-all-unique-filter.command-handler';
import { SelectUniqueFilterCommandHandler } from './unique/select/select-unique-filter.command-handler';
import { structureKey } from '../../../structure-core/src/api/global/structre.key';
export class FilterDomainModule {
    defineAggregate() {
        return null;
    }
    registerKey() {
        return structureKey;
    }
    registerProviders(container) {
        container.provide(FilterManagerFactory);
    }
    registerCommandHandlers() {
        return [
            SetConfigFilterCommandHandler,
            SetConfigQuickFilterCommandHandler,
            ToggleFilterCommandHandler,
            AddFilterCommandHandler,
            RemoveAllFiltersCommandHandler,
            RemoveFilterCommandHandler,
            SelectUniqueFilterCommandHandler,
            SelectAllUniqueFilterCommandHandler,
            UnselectUniqueFilterCommandHandler,
            UnselectAllUniqueFilterCommandHandler
        ];
    }
    registerDomainEventHandler() {
        return [
            ConfigQuickFilterSetEventHandler,
            ConfigFilterSetEventHandler,
            FilterTypeConfigFilterSetEventHandler,
            ActiveFiltersSetEventHandler,
            UniqueFilterCalculatedEventHandler,
            FilterTypeFieldsInitedEventHandler
        ];
    }
    registerMultiDomainEventHandler() {
        return [];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmRvbWFpbi1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvc3RydWN0dXJlL2ZpbHRlci9zcmMvY29yZS9maWx0ZXIuZG9tYWluLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMzRixPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNyRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUNuSCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNsRyxPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUN0SCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUNwRyxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUNoSCxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN6RyxPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUN6SCxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUM5RyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUNuSCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUN4RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scURBQXFELENBQUM7QUFHbkYsTUFBTSxPQUFPLGtCQUFrQjtJQUU5QixlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRUQsV0FBVztRQUNWLE9BQU8sWUFBWSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxTQUFvQjtRQUNyQyxTQUFTLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELHVCQUF1QjtRQUN0QixPQUFPO1lBQ04sNkJBQTZCO1lBQzdCLGtDQUFrQztZQUNsQywwQkFBMEI7WUFDMUIsdUJBQXVCO1lBQ3ZCLDhCQUE4QjtZQUM5QiwwQkFBMEI7WUFDMUIsZ0NBQWdDO1lBQ2hDLG1DQUFtQztZQUNuQyxrQ0FBa0M7WUFDbEMscUNBQXFDO1NBQ3JDLENBQUM7SUFDSCxDQUFDO0lBRUQsMEJBQTBCO1FBQ3pCLE9BQU87WUFDTixnQ0FBZ0M7WUFDaEMsMkJBQTJCO1lBQzNCLHFDQUFxQztZQUNyQyw0QkFBNEI7WUFDNUIsa0NBQWtDO1lBQ2xDLGtDQUFrQztTQUNsQyxDQUFDO0lBQ0gsQ0FBQztJQUVELCtCQUErQjtRQUM5QixPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZURlZmluaXRpb24sIEFnZ3JlZ2F0ZUlkLCBBZ2dyZWdhdGVSb290LCBDb21tYW5kLCBDb250YWluZXIsIERvbWFpbkV2ZW50LCBEb21haW5Qcm92aWRlcnMgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBUb2dnbGVGaWx0ZXJDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vdG9nZ2xlL3RvZ2dsZS1maWx0ZXIuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IEFkZEZpbHRlckNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9hZGQvYWRkLWZpbHRlci5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgUmVtb3ZlQWxsRmlsdGVyc0NvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9yZW1vdmUtYWxsL3JlbW92ZS1hbGwtZmlsdGVycy5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgUmVtb3ZlRmlsdGVyQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL3JlbW92ZS9yZW1vdmUtZmlsdGVyLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZXRDb25maWdGaWx0ZXJDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vY29uZmlnL3NldC1jb25maWctZmlsdGVyLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZXRDb25maWdRdWlja0ZpbHRlckNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9xdWljay9zZXQtY29uZmlnLXF1aWNrLWZpbHRlci5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgRmlsdGVyTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuLi9kb21haW4vZmlsdGVyLm1hbmFnZXItZmFjdG9yeSc7XG5pbXBvcnQgeyBDb25maWdRdWlja0ZpbHRlclNldEV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2NvcmUtcmVhZC9xdWljay1maWx0ZXIvY29uZmlnLXF1aWNrLWZpbHRlci1zZXQuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBDb25maWdGaWx0ZXJTZXRFdmVudEhhbmRsZXIgfSBmcm9tICcuLi9jb3JlLXJlYWQvY29uZmlnL2NvbmZpZy1maWx0ZXItc2V0LmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUNvbmZpZ0ZpbHRlclNldEV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2NvcmUtcmVhZC90eXBlL2ZpbHRlci10eXBlLmNvbmZpZy1maWx0ZXItc2V0LmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyc1NldEV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2NvcmUtcmVhZC9hY3RpdmUvYWN0aXZlLWZpbHRlcnMtc2V0LmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgVW5pcXVlRmlsdGVyQ2FsY3VsYXRlZEV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2NvcmUtcmVhZC91bmlxdWUvdW5pcXVlLWZpbHRlci1jYWxjdWxhdGVkLmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUZpZWxkc0luaXRlZEV2ZW50SGFuZGxlciB9IGZyb20gJy4vdHlwZS9pbml0L2ZpbHRlci10eXBlLmZpZWxkcy1pbml0ZWQuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBVbnNlbGVjdEFsbFVuaXF1ZUZpbHRlckNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi91bmlxdWUvdW5zZWxlY3QtYWxsL3Vuc2VsZWN0LWFsbC11bmlxdWUtZmlsdGVyLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBVbnNlbGVjdFVuaXF1ZUZpbHRlckNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi91bmlxdWUvdW5zZWxlY3QvdW5zZWxlY3QtdW5pcXVlLWZpbHRlci5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2VsZWN0QWxsVW5pcXVlRmlsdGVyQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL3VuaXF1ZS9zZWxlY3QtYWxsL3NlbGVjdC1hbGwtdW5pcXVlLWZpbHRlci5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2VsZWN0VW5pcXVlRmlsdGVyQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL3VuaXF1ZS9zZWxlY3Qvc2VsZWN0LXVuaXF1ZS1maWx0ZXIuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IHN0cnVjdHVyZUtleSB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvZ2xvYmFsL3N0cnVjdHJlLmtleSc7XG5cblxuZXhwb3J0IGNsYXNzIEZpbHRlckRvbWFpbk1vZHVsZSBpbXBsZW1lbnRzIERvbWFpblByb3ZpZGVycyB7XG5cblx0ZGVmaW5lQWdncmVnYXRlKCk6IEFnZ3JlZ2F0ZURlZmluaXRpb248YW55LCBhbnksIGFueT4gfCBudWxsIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJlZ2lzdGVyS2V5KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHN0cnVjdHVyZUtleTtcblx0fVxuXG5cdHJlZ2lzdGVyUHJvdmlkZXJzKGNvbnRhaW5lcjogQ29udGFpbmVyKTogdm9pZCB7XG5cdFx0Y29udGFpbmVyLnByb3ZpZGUoRmlsdGVyTWFuYWdlckZhY3RvcnkpO1xuXHR9XG5cblx0cmVnaXN0ZXJDb21tYW5kSGFuZGxlcnM8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPiwgQyBleHRlbmRzIENvbW1hbmQ8ST4+KCk6IEFycmF5PGFueT4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHRTZXRDb25maWdGaWx0ZXJDb21tYW5kSGFuZGxlcixcblx0XHRcdFNldENvbmZpZ1F1aWNrRmlsdGVyQ29tbWFuZEhhbmRsZXIsXG5cdFx0XHRUb2dnbGVGaWx0ZXJDb21tYW5kSGFuZGxlcixcblx0XHRcdEFkZEZpbHRlckNvbW1hbmRIYW5kbGVyLFxuXHRcdFx0UmVtb3ZlQWxsRmlsdGVyc0NvbW1hbmRIYW5kbGVyLFxuXHRcdFx0UmVtb3ZlRmlsdGVyQ29tbWFuZEhhbmRsZXIsXG5cdFx0XHRTZWxlY3RVbmlxdWVGaWx0ZXJDb21tYW5kSGFuZGxlcixcblx0XHRcdFNlbGVjdEFsbFVuaXF1ZUZpbHRlckNvbW1hbmRIYW5kbGVyLFxuXHRcdFx0VW5zZWxlY3RVbmlxdWVGaWx0ZXJDb21tYW5kSGFuZGxlcixcblx0XHRcdFVuc2VsZWN0QWxsVW5pcXVlRmlsdGVyQ29tbWFuZEhhbmRsZXJcblx0XHRdO1xuXHR9XG5cblx0cmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXI8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBFIGV4dGVuZHMgRG9tYWluRXZlbnQ8ST4+KCk6IEFycmF5PGFueT4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHRDb25maWdRdWlja0ZpbHRlclNldEV2ZW50SGFuZGxlcixcblx0XHRcdENvbmZpZ0ZpbHRlclNldEV2ZW50SGFuZGxlcixcblx0XHRcdEZpbHRlclR5cGVDb25maWdGaWx0ZXJTZXRFdmVudEhhbmRsZXIsXG5cdFx0XHRBY3RpdmVGaWx0ZXJzU2V0RXZlbnRIYW5kbGVyLFxuXHRcdFx0VW5pcXVlRmlsdGVyQ2FsY3VsYXRlZEV2ZW50SGFuZGxlcixcblx0XHRcdEZpbHRlclR5cGVGaWVsZHNJbml0ZWRFdmVudEhhbmRsZXJcblx0XHRdO1xuXHR9XG5cblx0cmVnaXN0ZXJNdWx0aURvbWFpbkV2ZW50SGFuZGxlcjxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEUgZXh0ZW5kcyBEb21haW5FdmVudDxJPj4oKTogQXJyYXk8YW55PiB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cbn1cbiJdfQ==