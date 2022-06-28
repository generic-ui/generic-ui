import { DomainInitializer } from '@generic-ui/hermes';
import { FilterPublisher } from './filter.publisher';
import { FilterDomainModule } from '../core/filter.domain-module';
import { FilterWarehouse } from './filter.warehouse';
import { UniqueValueCollectionArchive } from '../core-read/unique/unique-value-collection.archive';
import { FilterEnabledArchive } from '../core-read/config/filter-enabled.archive';
import { QuickFilterEnabledArchive } from '../core-read/quick-filter/quick-filter-enabled.archive';
import { FilterDomainWarehouse } from '../core-read/filter.domain-warehouse';
import { FilterDomainPublisher } from '../core/filter.domain-publisher';
import { FilterIntegration } from '../api-integration/filter.integration';
export class FilterApiModule {
    registerProviders(container) {
        container.provide(FilterPublisher, FilterDomainPublisher);
        container.provide(FilterWarehouse, FilterDomainWarehouse);
        container.provide(UniqueValueCollectionArchive);
        container.provide(FilterEnabledArchive);
        container.provide(QuickFilterEnabledArchive);
        container.provide(FilterIntegration);
    }
}
export const filterInitializer = new DomainInitializer(new FilterApiModule(), new FilterDomainModule());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvc3RydWN0dXJlL2ZpbHRlci9hcGkvZmlsdGVyLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUEyQixpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDbkcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDbkcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFHMUUsTUFBTSxPQUFPLGVBQWU7SUFFM0IsaUJBQWlCLENBQUMsU0FBb0I7UUFDckMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUscUJBQXFCLENBQUMsQ0FBQztRQUMxRCxTQUFTLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1FBQzFELFNBQVMsQ0FBQyxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUNoRCxTQUFTLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDeEMsU0FBUyxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQzdDLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBQ0Q7QUFFRCxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLGlCQUFpQixDQUFDLElBQUksZUFBZSxFQUFFLEVBQUUsSUFBSSxrQkFBa0IsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcGlQcm92aWRlcnMsIENvbnRhaW5lciwgRG9tYWluSW5pdGlhbGl6ZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBGaWx0ZXJQdWJsaXNoZXIgfSBmcm9tICcuL2ZpbHRlci5wdWJsaXNoZXInO1xuaW1wb3J0IHsgRmlsdGVyRG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vY29yZS9maWx0ZXIuZG9tYWluLW1vZHVsZSc7XG5pbXBvcnQgeyBGaWx0ZXJXYXJlaG91c2UgfSBmcm9tICcuL2ZpbHRlci53YXJlaG91c2UnO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVDb2xsZWN0aW9uQXJjaGl2ZSB9IGZyb20gJy4uL2NvcmUtcmVhZC91bmlxdWUvdW5pcXVlLXZhbHVlLWNvbGxlY3Rpb24uYXJjaGl2ZSc7XG5pbXBvcnQgeyBGaWx0ZXJFbmFibGVkQXJjaGl2ZSB9IGZyb20gJy4uL2NvcmUtcmVhZC9jb25maWcvZmlsdGVyLWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBRdWlja0ZpbHRlckVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi4vY29yZS1yZWFkL3F1aWNrLWZpbHRlci9xdWljay1maWx0ZXItZW5hYmxlZC5hcmNoaXZlJztcbmltcG9ydCB7IEZpbHRlckRvbWFpbldhcmVob3VzZSB9IGZyb20gJy4uL2NvcmUtcmVhZC9maWx0ZXIuZG9tYWluLXdhcmVob3VzZSc7XG5pbXBvcnQgeyBGaWx0ZXJEb21haW5QdWJsaXNoZXIgfSBmcm9tICcuLi9jb3JlL2ZpbHRlci5kb21haW4tcHVibGlzaGVyJztcbmltcG9ydCB7IEZpbHRlckludGVncmF0aW9uIH0gZnJvbSAnLi4vYXBpLWludGVncmF0aW9uL2ZpbHRlci5pbnRlZ3JhdGlvbic7XG5cblxuZXhwb3J0IGNsYXNzIEZpbHRlckFwaU1vZHVsZSBpbXBsZW1lbnRzIEFwaVByb3ZpZGVycyB7XG5cblx0cmVnaXN0ZXJQcm92aWRlcnMoY29udGFpbmVyOiBDb250YWluZXIpOiB2b2lkIHtcblx0XHRjb250YWluZXIucHJvdmlkZShGaWx0ZXJQdWJsaXNoZXIsIEZpbHRlckRvbWFpblB1Ymxpc2hlcik7XG5cdFx0Y29udGFpbmVyLnByb3ZpZGUoRmlsdGVyV2FyZWhvdXNlLCBGaWx0ZXJEb21haW5XYXJlaG91c2UpO1xuXHRcdGNvbnRhaW5lci5wcm92aWRlKFVuaXF1ZVZhbHVlQ29sbGVjdGlvbkFyY2hpdmUpO1xuXHRcdGNvbnRhaW5lci5wcm92aWRlKEZpbHRlckVuYWJsZWRBcmNoaXZlKTtcblx0XHRjb250YWluZXIucHJvdmlkZShRdWlja0ZpbHRlckVuYWJsZWRBcmNoaXZlKTtcblx0XHRjb250YWluZXIucHJvdmlkZShGaWx0ZXJJbnRlZ3JhdGlvbik7XG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IGZpbHRlckluaXRpYWxpemVyID0gbmV3IERvbWFpbkluaXRpYWxpemVyKG5ldyBGaWx0ZXJBcGlNb2R1bGUoKSwgbmV3IEZpbHRlckRvbWFpbk1vZHVsZSgpKTtcblxuIl19