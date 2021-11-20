import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@generic-ui/hermes';
import { SourceConverter } from '../domain/source.converter';
import { SourceCommandInvoker } from './source.command-invoker';
import { SourceWarehouse } from './source.warehouse';
import { SourceEventService } from './edit/source-event.service';
import { SourceDomainModule } from '../domain/source.domain-module';
import { SourceDomainWarehouse } from '../domain-read/source.domain-warehouse';
import { SourceDomainCommandInvoker } from '../domain/source.domain.command-invoker';
import { StructureSourceOriginArchive } from '../domain/origin/structure.source-origin.archive';
import { StructurePreparedItemsArchive } from '../domain/prepared/structure.prepared-items.archive';
export class SourceApiModule extends ApiModule {
}
SourceApiModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    SourceDomainModule
                ],
                providers: [
                    StructureSourceOriginArchive,
                    StructurePreparedItemsArchive,
                    SourceConverter,
                    {
                        provide: SourceCommandInvoker,
                        useClass: SourceDomainCommandInvoker
                    },
                    {
                        provide: SourceWarehouse,
                        useClass: SourceDomainWarehouse
                    },
                    SourceEventService
                ],
                declarations: [],
                exports: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9zb3VyY2UvY29yZS9hcGkvc291cmNlLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDL0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDckYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDaEcsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scURBQXFELENBQUM7QUEwQnBHLE1BQU0sT0FBTyxlQUFnQixTQUFRLFNBQVM7OztZQXZCN0MsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLGtCQUFrQjtpQkFDbEI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLDRCQUE0QjtvQkFDNUIsNkJBQTZCO29CQUM3QixlQUFlO29CQUVmO3dCQUNDLE9BQU8sRUFBRSxvQkFBb0I7d0JBQzdCLFFBQVEsRUFBRSwwQkFBMEI7cUJBQ3BDO29CQUNEO3dCQUNDLE9BQU8sRUFBRSxlQUFlO3dCQUN4QixRQUFRLEVBQUUscUJBQXFCO3FCQUMvQjtvQkFDRCxrQkFBa0I7aUJBQ2xCO2dCQUNELFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsRUFBRTthQUNYIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEFwaU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNvdXJjZUNvbnZlcnRlciB9IGZyb20gJy4uL2RvbWFpbi9zb3VyY2UuY29udmVydGVyJztcbmltcG9ydCB7IFNvdXJjZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi9zb3VyY2UuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4vc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTb3VyY2VFdmVudFNlcnZpY2UgfSBmcm9tICcuL2VkaXQvc291cmNlLWV2ZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgU291cmNlRG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vZG9tYWluL3NvdXJjZS5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7IFNvdXJjZURvbWFpbldhcmVob3VzZSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL3NvdXJjZS5kb21haW4td2FyZWhvdXNlJztcbmltcG9ydCB7IFNvdXJjZURvbWFpbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vZG9tYWluL3NvdXJjZS5kb21haW4uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZU9yaWdpbkFyY2hpdmUgfSBmcm9tICcuLi9kb21haW4vb3JpZ2luL3N0cnVjdHVyZS5zb3VyY2Utb3JpZ2luLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlUHJlcGFyZWRJdGVtc0FyY2hpdmUgfSBmcm9tICcuLi9kb21haW4vcHJlcGFyZWQvc3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLmFyY2hpdmUnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0U291cmNlRG9tYWluTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFN0cnVjdHVyZVNvdXJjZU9yaWdpbkFyY2hpdmUsXG5cdFx0U3RydWN0dXJlUHJlcGFyZWRJdGVtc0FyY2hpdmUsXG5cdFx0U291cmNlQ29udmVydGVyLFxuXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogU291cmNlQ29tbWFuZEludm9rZXIsXG5cdFx0XHR1c2VDbGFzczogU291cmNlRG9tYWluQ29tbWFuZEludm9rZXJcblx0XHR9LFxuXHRcdHtcblx0XHRcdHByb3ZpZGU6IFNvdXJjZVdhcmVob3VzZSxcblx0XHRcdHVzZUNsYXNzOiBTb3VyY2VEb21haW5XYXJlaG91c2Vcblx0XHR9LFxuXHRcdFNvdXJjZUV2ZW50U2VydmljZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTb3VyY2VBcGlNb2R1bGUgZXh0ZW5kcyBBcGlNb2R1bGUge1xufVxuIl19