import { DomainInitializer } from '@generic-ui/hermes';
import { SourceConverter } from '../core/source.converter';
import { SourcePublisher } from './source.publisher';
import { SourceWarehouse } from './source.warehouse';
import { SourceEventService } from './edit/source-event.service';
import { SourceDomainModule } from '../core/source.domain-module';
import { SourceDomainWarehouse } from '../core-read/source.domain-warehouse';
import { SourceDomainPublisher } from '../core/source.domain-publisher';
import { StructurePreparedItemsArchive } from '../core/prepared/structure.prepared-items.archive';
export class SourceApiModule {
    registerProviders(container) {
        container.provide(SourcePublisher, SourceDomainPublisher);
        container.provide(SourceWarehouse, SourceDomainWarehouse);
        container.provide(SourceEventService);
        container.provide(StructurePreparedItemsArchive);
        container.provide(SourceConverter);
    }
}
export const sourceInitializer = new DomainInitializer(new SourceApiModule(), new SourceDomainModule());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvc3RydWN0dXJlL3NvdXJjZS9hcGkvc291cmNlLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUEyQixpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBR2xHLE1BQU0sT0FBTyxlQUFlO0lBRTNCLGlCQUFpQixDQUFDLFNBQW9CO1FBQ3JDLFNBQVMsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFDMUQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUscUJBQXFCLENBQUMsQ0FBQztRQUMxRCxTQUFTLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFHdEMsU0FBUyxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBQ2pELFNBQVMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDcEMsQ0FBQztDQUNEO0FBRUQsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLGVBQWUsRUFBRSxFQUFFLElBQUksa0JBQWtCLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBpUHJvdmlkZXJzLCBDb250YWluZXIsIERvbWFpbkluaXRpYWxpemVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU291cmNlQ29udmVydGVyIH0gZnJvbSAnLi4vY29yZS9zb3VyY2UuY29udmVydGVyJztcbmltcG9ydCB7IFNvdXJjZVB1Ymxpc2hlciB9IGZyb20gJy4vc291cmNlLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuL3NvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU291cmNlRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi9lZGl0L3NvdXJjZS1ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFNvdXJjZURvbWFpbk1vZHVsZSB9IGZyb20gJy4uL2NvcmUvc291cmNlLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgU291cmNlRG9tYWluV2FyZWhvdXNlIH0gZnJvbSAnLi4vY29yZS1yZWFkL3NvdXJjZS5kb21haW4td2FyZWhvdXNlJztcbmltcG9ydCB7IFNvdXJjZURvbWFpblB1Ymxpc2hlciB9IGZyb20gJy4uL2NvcmUvc291cmNlLmRvbWFpbi1wdWJsaXNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlUHJlcGFyZWRJdGVtc0FyY2hpdmUgfSBmcm9tICcuLi9jb3JlL3ByZXBhcmVkL3N0cnVjdHVyZS5wcmVwYXJlZC1pdGVtcy5hcmNoaXZlJztcblxuXG5leHBvcnQgY2xhc3MgU291cmNlQXBpTW9kdWxlIGltcGxlbWVudHMgQXBpUHJvdmlkZXJzIHtcblxuXHRyZWdpc3RlclByb3ZpZGVycyhjb250YWluZXI6IENvbnRhaW5lcik6IHZvaWQge1xuXHRcdGNvbnRhaW5lci5wcm92aWRlKFNvdXJjZVB1Ymxpc2hlciwgU291cmNlRG9tYWluUHVibGlzaGVyKTtcblx0XHRjb250YWluZXIucHJvdmlkZShTb3VyY2VXYXJlaG91c2UsIFNvdXJjZURvbWFpbldhcmVob3VzZSk7XG5cdFx0Y29udGFpbmVyLnByb3ZpZGUoU291cmNlRXZlbnRTZXJ2aWNlKTtcblxuXG5cdFx0Y29udGFpbmVyLnByb3ZpZGUoU3RydWN0dXJlUHJlcGFyZWRJdGVtc0FyY2hpdmUpO1xuXHRcdGNvbnRhaW5lci5wcm92aWRlKFNvdXJjZUNvbnZlcnRlcik7XG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IHNvdXJjZUluaXRpYWxpemVyID0gbmV3IERvbWFpbkluaXRpYWxpemVyKG5ldyBTb3VyY2VBcGlNb2R1bGUoKSwgbmV3IFNvdXJjZURvbWFpbk1vZHVsZSgpKTtcbiJdfQ==