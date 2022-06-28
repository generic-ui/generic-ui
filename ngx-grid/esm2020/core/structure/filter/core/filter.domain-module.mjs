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
import { structureKey } from '../../structure-core/api/global/structre.key';
import { FilterDispatcher } from './filter.dispatcher';
export class FilterDomainModule {
    defineAggregate() {
        return null;
    }
    registerKey() {
        return structureKey;
    }
    registerProviders(container) {
        container.provide(FilterManagerFactory);
        container.provide(FilterDispatcher);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmRvbWFpbi1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvc3RydWN0dXJlL2ZpbHRlci9jb3JlL2ZpbHRlci5kb21haW4tbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzNGLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ25ILE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ3RILE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ2hILE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQ3pILE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQzlHLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ25ILE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUd2RCxNQUFNLE9BQU8sa0JBQWtCO0lBRTlCLGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFRCxXQUFXO1FBQ1YsT0FBTyxZQUFZLENBQUM7SUFDckIsQ0FBQztJQUVELGlCQUFpQixDQUFDLFNBQW9CO1FBQ3JDLFNBQVMsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN4QyxTQUFTLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELHVCQUF1QjtRQUN0QixPQUFPO1lBQ04sNkJBQTZCO1lBQzdCLGtDQUFrQztZQUNsQywwQkFBMEI7WUFDMUIsdUJBQXVCO1lBQ3ZCLDhCQUE4QjtZQUM5QiwwQkFBMEI7WUFDMUIsZ0NBQWdDO1lBQ2hDLG1DQUFtQztZQUNuQyxrQ0FBa0M7WUFDbEMscUNBQXFDO1NBQ3JDLENBQUM7SUFDSCxDQUFDO0lBRUQsMEJBQTBCO1FBQ3pCLE9BQU87WUFDTixnQ0FBZ0M7WUFDaEMsMkJBQTJCO1lBQzNCLHFDQUFxQztZQUNyQyw0QkFBNEI7WUFDNUIsa0NBQWtDO1lBQ2xDLGtDQUFrQztTQUNsQyxDQUFDO0lBQ0gsQ0FBQztJQUVELCtCQUErQjtRQUM5QixPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZURlZmluaXRpb24sIEFnZ3JlZ2F0ZUlkLCBBZ2dyZWdhdGVSb290LCBDb21tYW5kLCBDb250YWluZXIsIERvbWFpbkV2ZW50LCBEb21haW5Qcm92aWRlcnMgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBUb2dnbGVGaWx0ZXJDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vdG9nZ2xlL3RvZ2dsZS1maWx0ZXIuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IEFkZEZpbHRlckNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9hZGQvYWRkLWZpbHRlci5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgUmVtb3ZlQWxsRmlsdGVyc0NvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9yZW1vdmUtYWxsL3JlbW92ZS1hbGwtZmlsdGVycy5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgUmVtb3ZlRmlsdGVyQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL3JlbW92ZS9yZW1vdmUtZmlsdGVyLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZXRDb25maWdGaWx0ZXJDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vY29uZmlnL3NldC1jb25maWctZmlsdGVyLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZXRDb25maWdRdWlja0ZpbHRlckNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9xdWljay9zZXQtY29uZmlnLXF1aWNrLWZpbHRlci5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgRmlsdGVyTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuLi9kb21haW4vZmlsdGVyLm1hbmFnZXItZmFjdG9yeSc7XG5pbXBvcnQgeyBDb25maWdRdWlja0ZpbHRlclNldEV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2NvcmUtcmVhZC9xdWljay1maWx0ZXIvY29uZmlnLXF1aWNrLWZpbHRlci1zZXQuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBDb25maWdGaWx0ZXJTZXRFdmVudEhhbmRsZXIgfSBmcm9tICcuLi9jb3JlLXJlYWQvY29uZmlnL2NvbmZpZy1maWx0ZXItc2V0LmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUNvbmZpZ0ZpbHRlclNldEV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2NvcmUtcmVhZC90eXBlL2ZpbHRlci10eXBlLmNvbmZpZy1maWx0ZXItc2V0LmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyc1NldEV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2NvcmUtcmVhZC9hY3RpdmUvYWN0aXZlLWZpbHRlcnMtc2V0LmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgVW5pcXVlRmlsdGVyQ2FsY3VsYXRlZEV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2NvcmUtcmVhZC91bmlxdWUvdW5pcXVlLWZpbHRlci1jYWxjdWxhdGVkLmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUZpZWxkc0luaXRlZEV2ZW50SGFuZGxlciB9IGZyb20gJy4vdHlwZS9pbml0L2ZpbHRlci10eXBlLmZpZWxkcy1pbml0ZWQuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBVbnNlbGVjdEFsbFVuaXF1ZUZpbHRlckNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi91bmlxdWUvdW5zZWxlY3QtYWxsL3Vuc2VsZWN0LWFsbC11bmlxdWUtZmlsdGVyLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBVbnNlbGVjdFVuaXF1ZUZpbHRlckNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi91bmlxdWUvdW5zZWxlY3QvdW5zZWxlY3QtdW5pcXVlLWZpbHRlci5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2VsZWN0QWxsVW5pcXVlRmlsdGVyQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL3VuaXF1ZS9zZWxlY3QtYWxsL3NlbGVjdC1hbGwtdW5pcXVlLWZpbHRlci5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2VsZWN0VW5pcXVlRmlsdGVyQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL3VuaXF1ZS9zZWxlY3Qvc2VsZWN0LXVuaXF1ZS1maWx0ZXIuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IHN0cnVjdHVyZUtleSB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS1jb3JlL2FwaS9nbG9iYWwvc3RydWN0cmUua2V5JztcbmltcG9ydCB7IEZpbHRlckRpc3BhdGNoZXIgfSBmcm9tICcuL2ZpbHRlci5kaXNwYXRjaGVyJztcblxuXG5leHBvcnQgY2xhc3MgRmlsdGVyRG9tYWluTW9kdWxlIGltcGxlbWVudHMgRG9tYWluUHJvdmlkZXJzIHtcblxuXHRkZWZpbmVBZ2dyZWdhdGUoKTogQWdncmVnYXRlRGVmaW5pdGlvbjxhbnksIGFueSwgYW55PiB8IG51bGwge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmVnaXN0ZXJLZXkoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gc3RydWN0dXJlS2V5O1xuXHR9XG5cblx0cmVnaXN0ZXJQcm92aWRlcnMoY29udGFpbmVyOiBDb250YWluZXIpOiB2b2lkIHtcblx0XHRjb250YWluZXIucHJvdmlkZShGaWx0ZXJNYW5hZ2VyRmFjdG9yeSk7XG5cdFx0Y29udGFpbmVyLnByb3ZpZGUoRmlsdGVyRGlzcGF0Y2hlcik7XG5cdH1cblxuXHRyZWdpc3RlckNvbW1hbmRIYW5kbGVyczxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEEgZXh0ZW5kcyBBZ2dyZWdhdGVSb290PEk+LCBDIGV4dGVuZHMgQ29tbWFuZDxJPj4oKTogQXJyYXk8YW55PiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdFNldENvbmZpZ0ZpbHRlckNvbW1hbmRIYW5kbGVyLFxuXHRcdFx0U2V0Q29uZmlnUXVpY2tGaWx0ZXJDb21tYW5kSGFuZGxlcixcblx0XHRcdFRvZ2dsZUZpbHRlckNvbW1hbmRIYW5kbGVyLFxuXHRcdFx0QWRkRmlsdGVyQ29tbWFuZEhhbmRsZXIsXG5cdFx0XHRSZW1vdmVBbGxGaWx0ZXJzQ29tbWFuZEhhbmRsZXIsXG5cdFx0XHRSZW1vdmVGaWx0ZXJDb21tYW5kSGFuZGxlcixcblx0XHRcdFNlbGVjdFVuaXF1ZUZpbHRlckNvbW1hbmRIYW5kbGVyLFxuXHRcdFx0U2VsZWN0QWxsVW5pcXVlRmlsdGVyQ29tbWFuZEhhbmRsZXIsXG5cdFx0XHRVbnNlbGVjdFVuaXF1ZUZpbHRlckNvbW1hbmRIYW5kbGVyLFxuXHRcdFx0VW5zZWxlY3RBbGxVbmlxdWVGaWx0ZXJDb21tYW5kSGFuZGxlclxuXHRcdF07XG5cdH1cblxuXHRyZWdpc3RlckRvbWFpbkV2ZW50SGFuZGxlcjxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEUgZXh0ZW5kcyBEb21haW5FdmVudDxJPj4oKTogQXJyYXk8YW55PiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdENvbmZpZ1F1aWNrRmlsdGVyU2V0RXZlbnRIYW5kbGVyLFxuXHRcdFx0Q29uZmlnRmlsdGVyU2V0RXZlbnRIYW5kbGVyLFxuXHRcdFx0RmlsdGVyVHlwZUNvbmZpZ0ZpbHRlclNldEV2ZW50SGFuZGxlcixcblx0XHRcdEFjdGl2ZUZpbHRlcnNTZXRFdmVudEhhbmRsZXIsXG5cdFx0XHRVbmlxdWVGaWx0ZXJDYWxjdWxhdGVkRXZlbnRIYW5kbGVyLFxuXHRcdFx0RmlsdGVyVHlwZUZpZWxkc0luaXRlZEV2ZW50SGFuZGxlclxuXHRcdF07XG5cdH1cblxuXHRyZWdpc3Rlck11bHRpRG9tYWluRXZlbnRIYW5kbGVyPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgRSBleHRlbmRzIERvbWFpbkV2ZW50PEk+PigpOiBBcnJheTxhbnk+IHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxufVxuIl19