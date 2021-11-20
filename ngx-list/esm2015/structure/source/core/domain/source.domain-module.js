import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainModule, HermesModule } from '@generic-ui/hermes';
import { SourceSetLoadingCommandHandler } from './loading/source-set-loading.command-handler';
import { SetOriginCommandHandler } from './origin/set-origin/set-origin.command-handler';
import { StructureEditSourceItemCommandHandler } from './origin/edit/structure.edit-source-item.command-handler';
import { SourceDispatcher } from './source.dispatcher';
import { SourceManagerFactory } from './core/source.manager-factory';
import { SourceDomainEventPublisher } from './source.domain-event.publisher';
import { DeleteOriginItemCommandHandler } from './origin/delete/delete-origin-item.command-handler';
import { structureKey } from '../../../core/api/structre.key';
import { StructureOriginChangedEventHandler } from './origin/structure.origin-changed.event-handler';
import { StructurePreparedItemsEventHandler } from './prepared/structure.prepared-items.event-handler';
export class SourceDomainModule extends DomainModule {
    constructor() {
        super();
    }
    static commandHandlers() {
        return [
            HermesModule.registerCommandHandler(SourceSetLoadingCommandHandler, structureKey),
            HermesModule.registerCommandHandler(SetOriginCommandHandler, structureKey),
            HermesModule.registerCommandHandler(StructureEditSourceItemCommandHandler, structureKey),
            HermesModule.registerCommandHandler(DeleteOriginItemCommandHandler, structureKey)
        ];
    }
    static domainEventHandlers() {
        return [
            HermesModule.registerDomainEventHandler(StructureOriginChangedEventHandler),
            HermesModule.registerDomainEventHandler(StructurePreparedItemsEventHandler)
        ];
    }
}
SourceDomainModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                providers: [
                    SourceDispatcher,
                    SourceManagerFactory,
                    SourceDomainEventPublisher
                ],
                declarations: [],
                exports: []
            },] }
];
SourceDomainModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmRvbWFpbi1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9zb3VyY2UvY29yZS9kb21haW4vc291cmNlLmRvbWFpbi1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUM5RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN6RixPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNqSCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNwRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDckcsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFldkcsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFlBQVk7SUFFbkQ7UUFDQyxLQUFLLEVBQUUsQ0FBQztJQUNULENBQUM7SUFFRCxNQUFNLENBQUMsZUFBZTtRQUNyQixPQUFPO1lBQ04sWUFBWSxDQUFDLHNCQUFzQixDQUFDLDhCQUE4QixFQUFFLFlBQVksQ0FBQztZQUNqRixZQUFZLENBQUMsc0JBQXNCLENBQUMsdUJBQXVCLEVBQUUsWUFBWSxDQUFDO1lBQzFFLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxxQ0FBcUMsRUFBRSxZQUFZLENBQUM7WUFDeEYsWUFBWSxDQUFDLHNCQUFzQixDQUFDLDhCQUE4QixFQUFFLFlBQVksQ0FBQztTQUNqRixDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxtQkFBbUI7UUFDekIsT0FBTztZQUNOLFlBQVksQ0FBQywwQkFBMEIsQ0FBQyxrQ0FBa0MsQ0FBQztZQUMzRSxZQUFZLENBQUMsMEJBQTBCLENBQUMsa0NBQWtDLENBQUM7U0FDM0UsQ0FBQztJQUNILENBQUM7OztZQWhDRCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7aUJBQ1o7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLGdCQUFnQjtvQkFDaEIsb0JBQW9CO29CQUNwQiwwQkFBMEI7aUJBQzFCO2dCQUNELFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsRUFBRTthQUNYIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IERvbWFpbk1vZHVsZSwgSGVybWVzTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU291cmNlU2V0TG9hZGluZ0NvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9sb2FkaW5nL3NvdXJjZS1zZXQtbG9hZGluZy5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0T3JpZ2luQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL29yaWdpbi9zZXQtb3JpZ2luL3NldC1vcmlnaW4uY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL29yaWdpbi9lZGl0L3N0cnVjdHVyZS5lZGl0LXNvdXJjZS1pdGVtLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTb3VyY2VEaXNwYXRjaGVyIH0gZnJvbSAnLi9zb3VyY2UuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTb3VyY2VNYW5hZ2VyRmFjdG9yeSB9IGZyb20gJy4vY29yZS9zb3VyY2UubWFuYWdlci1mYWN0b3J5JztcbmltcG9ydCB7IFNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnLi9zb3VyY2UuZG9tYWluLWV2ZW50LnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBEZWxldGVPcmlnaW5JdGVtQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL29yaWdpbi9kZWxldGUvZGVsZXRlLW9yaWdpbi1pdGVtLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVLZXkgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3RyZS5rZXknO1xuaW1wb3J0IHsgU3RydWN0dXJlT3JpZ2luQ2hhbmdlZEV2ZW50SGFuZGxlciB9IGZyb20gJy4vb3JpZ2luL3N0cnVjdHVyZS5vcmlnaW4tY2hhbmdlZC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVByZXBhcmVkSXRlbXNFdmVudEhhbmRsZXIgfSBmcm9tICcuL3ByZXBhcmVkL3N0cnVjdHVyZS5wcmVwYXJlZC1pdGVtcy5ldmVudC1oYW5kbGVyJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFNvdXJjZURpc3BhdGNoZXIsXG5cdFx0U291cmNlTWFuYWdlckZhY3RvcnksXG5cdFx0U291cmNlRG9tYWluRXZlbnRQdWJsaXNoZXJcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgU291cmNlRG9tYWluTW9kdWxlIGV4dGVuZHMgRG9tYWluTW9kdWxlIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0c3RhdGljIGNvbW1hbmRIYW5kbGVycygpIHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0SGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU291cmNlU2V0TG9hZGluZ0NvbW1hbmRIYW5kbGVyLCBzdHJ1Y3R1cmVLZXkpLFxuXHRcdFx0SGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0T3JpZ2luQ29tbWFuZEhhbmRsZXIsIHN0cnVjdHVyZUtleSksXG5cdFx0XHRIZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbUNvbW1hbmRIYW5kbGVyLCBzdHJ1Y3R1cmVLZXkpLFxuXHRcdFx0SGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoRGVsZXRlT3JpZ2luSXRlbUNvbW1hbmRIYW5kbGVyLCBzdHJ1Y3R1cmVLZXkpXG5cdFx0XTtcblx0fVxuXG5cdHN0YXRpYyBkb21haW5FdmVudEhhbmRsZXJzKCkge1xuXHRcdHJldHVybiBbXG5cdFx0XHRIZXJtZXNNb2R1bGUucmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXIoU3RydWN0dXJlT3JpZ2luQ2hhbmdlZEV2ZW50SGFuZGxlciksXG5cdFx0XHRIZXJtZXNNb2R1bGUucmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXIoU3RydWN0dXJlUHJlcGFyZWRJdGVtc0V2ZW50SGFuZGxlcilcblx0XHRdO1xuXHR9XG5cbn1cbiJdfQ==