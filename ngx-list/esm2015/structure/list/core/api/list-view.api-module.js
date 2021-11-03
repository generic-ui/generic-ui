import { NgModule } from '@angular/core';
import { HermesModule } from '@generic-ui/hermes';
import { ListViewAggregateFactory } from '../domain/list-view.aggregate-factory';
import { CreateListViewCommandHandler } from '../domain/create/create-list-view.command-handler';
import { InMemoryListViewAggregateRepository } from '../infrastructure/in-memory/in-memory.list-view.aggregate-repository';
import { ListViewCommandInvoker } from './list-view.command-invoker';
import { ListViewEventRepository } from './list-view.event-repository';
import { ListViewWarehouse } from './list-view.warehouse';
import { InMemoryListViewAggregateStore } from '../infrastructure/in-memory/in-memory.list-view.aggregate-store';
import { InMemoryListViewStore } from '../infrastructure/in-memory/in-memory.list-view.store';
import { ListViewDomainModule } from '../domain/list-view.domain-module';
import { ListViewModeArchive } from './mode/list-view.mode.archive';
import { ListViewModeSetEventHandler } from './mode/list-view-mode-set.event-handler';
import { ListViewSelectorToggledEventHandler } from './mode/selector/list-view-selector-toggled.event-handler';
import { ListViewSelectorArchive } from './mode/selector/list-view.selector.archive';
export const listViewKey = 'ListViewKey';
export class ListViewApiModule {
}
ListViewApiModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    HermesModule,
                    HermesModule.defineAggregate(listViewKey, ListViewAggregateFactory, InMemoryListViewAggregateRepository, CreateListViewCommandHandler, [
                        ListViewDomainModule.commandHandlers()
                    ], [
                        HermesModule.registerDomainEventHandler(ListViewModeSetEventHandler),
                        HermesModule.registerDomainEventHandler(ListViewSelectorToggledEventHandler)
                    ]),
                    ListViewDomainModule
                ],
                providers: [
                    ListViewCommandInvoker,
                    ListViewEventRepository,
                    ListViewWarehouse,
                    ListViewModeArchive,
                    ListViewSelectorArchive,
                    InMemoryListViewAggregateStore,
                    InMemoryListViewStore
                ],
                declarations: [],
                exports: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9saXN0L2NvcmUvYXBpL2xpc3Qtdmlldy5hcGktbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQzNILE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ2pILE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQy9HLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRXJGLE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxhQUFhLENBQUM7QUFrQ3pDLE1BQU0sT0FBTyxpQkFBaUI7OztZQWhDN0IsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLFlBQVksQ0FBQyxlQUFlLENBQzNCLFdBQVcsRUFDWCx3QkFBd0IsRUFDeEIsbUNBQW1DLEVBQ25DLDRCQUE0QixFQUM1Qjt3QkFDQyxvQkFBb0IsQ0FBQyxlQUFlLEVBQUU7cUJBQ3RDLEVBQUU7d0JBQ0YsWUFBWSxDQUFDLDBCQUEwQixDQUFDLDJCQUEyQixDQUFDO3dCQUNwRSxZQUFZLENBQUMsMEJBQTBCLENBQUMsbUNBQW1DLENBQUM7cUJBQzVFLENBQ0Q7b0JBQ0Qsb0JBQW9CO2lCQUNwQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Ysc0JBQXNCO29CQUN0Qix1QkFBdUI7b0JBQ3ZCLGlCQUFpQjtvQkFFakIsbUJBQW1CO29CQUNuQix1QkFBdUI7b0JBRXZCLDhCQUE4QjtvQkFDOUIscUJBQXFCO2lCQUVyQjtnQkFDRCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLEVBQUU7YUFDWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEhlcm1lc01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IExpc3RWaWV3QWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJy4uL2RvbWFpbi9saXN0LXZpZXcuYWdncmVnYXRlLWZhY3RvcnknO1xuaW1wb3J0IHsgQ3JlYXRlTGlzdFZpZXdDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9jcmVhdGUvY3JlYXRlLWxpc3Qtdmlldy5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgSW5NZW1vcnlMaXN0Vmlld0FnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvaW4tbWVtb3J5Lmxpc3Qtdmlldy5hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBMaXN0Vmlld0NvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi9saXN0LXZpZXcuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IExpc3RWaWV3RXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi9saXN0LXZpZXcuZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBMaXN0Vmlld1dhcmVob3VzZSB9IGZyb20gJy4vbGlzdC12aWV3LndhcmVob3VzZSc7XG5pbXBvcnQgeyBJbk1lbW9yeUxpc3RWaWV3QWdncmVnYXRlU3RvcmUgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvaW4tbWVtb3J5Lmxpc3Qtdmlldy5hZ2dyZWdhdGUtc3RvcmUnO1xuaW1wb3J0IHsgSW5NZW1vcnlMaXN0Vmlld1N0b3JlIH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2luLW1lbW9yeS5saXN0LXZpZXcuc3RvcmUnO1xuaW1wb3J0IHsgTGlzdFZpZXdEb21haW5Nb2R1bGUgfSBmcm9tICcuLi9kb21haW4vbGlzdC12aWV3LmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlQXJjaGl2ZSB9IGZyb20gJy4vbW9kZS9saXN0LXZpZXcubW9kZS5hcmNoaXZlJztcbmltcG9ydCB7IExpc3RWaWV3TW9kZVNldEV2ZW50SGFuZGxlciB9IGZyb20gJy4vbW9kZS9saXN0LXZpZXctbW9kZS1zZXQuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBMaXN0Vmlld1NlbGVjdG9yVG9nZ2xlZEV2ZW50SGFuZGxlciB9IGZyb20gJy4vbW9kZS9zZWxlY3Rvci9saXN0LXZpZXctc2VsZWN0b3ItdG9nZ2xlZC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IExpc3RWaWV3U2VsZWN0b3JBcmNoaXZlIH0gZnJvbSAnLi9tb2RlL3NlbGVjdG9yL2xpc3Qtdmlldy5zZWxlY3Rvci5hcmNoaXZlJztcblxuZXhwb3J0IGNvbnN0IGxpc3RWaWV3S2V5ID0gJ0xpc3RWaWV3S2V5JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdEhlcm1lc01vZHVsZSxcblx0XHRIZXJtZXNNb2R1bGUuZGVmaW5lQWdncmVnYXRlKFxuXHRcdFx0bGlzdFZpZXdLZXksXG5cdFx0XHRMaXN0Vmlld0FnZ3JlZ2F0ZUZhY3RvcnksXG5cdFx0XHRJbk1lbW9yeUxpc3RWaWV3QWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdENyZWF0ZUxpc3RWaWV3Q29tbWFuZEhhbmRsZXIsXG5cdFx0XHRbXG5cdFx0XHRcdExpc3RWaWV3RG9tYWluTW9kdWxlLmNvbW1hbmRIYW5kbGVycygpXG5cdFx0XHRdLCBbXG5cdFx0XHRcdEhlcm1lc01vZHVsZS5yZWdpc3RlckRvbWFpbkV2ZW50SGFuZGxlcihMaXN0Vmlld01vZGVTZXRFdmVudEhhbmRsZXIpLFxuXHRcdFx0XHRIZXJtZXNNb2R1bGUucmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXIoTGlzdFZpZXdTZWxlY3RvclRvZ2dsZWRFdmVudEhhbmRsZXIpXG5cdFx0XHRdXG5cdFx0KSxcblx0XHRMaXN0Vmlld0RvbWFpbk1vZHVsZVxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRMaXN0Vmlld0NvbW1hbmRJbnZva2VyLFxuXHRcdExpc3RWaWV3RXZlbnRSZXBvc2l0b3J5LFxuXHRcdExpc3RWaWV3V2FyZWhvdXNlLFxuXG5cdFx0TGlzdFZpZXdNb2RlQXJjaGl2ZSxcblx0XHRMaXN0Vmlld1NlbGVjdG9yQXJjaGl2ZSxcblxuXHRcdEluTWVtb3J5TGlzdFZpZXdBZ2dyZWdhdGVTdG9yZSxcblx0XHRJbk1lbW9yeUxpc3RWaWV3U3RvcmVcblxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0FwaU1vZHVsZSB7XG59XG4iXX0=