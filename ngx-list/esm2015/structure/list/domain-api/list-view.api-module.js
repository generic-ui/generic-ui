/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { HermesModule } from '@generic-ui/hermes';
import { ListViewAggregateFactory } from '../domain/list-view.aggregate-factory';
import { CreateListViewCommandHandler } from '../domain/create/create-list-view.command-handler';
import { InMemoryListViewAggregateRepository } from '../infrastructure/in-memory/in-memory.list-view.aggregate-repository';
import { ListViewCommandDispatcher } from './list-view.command-dispatcher';
import { ListViewEventRepository } from './list-view.event-repository';
import { ListViewWarehouse } from './list-view.warehouse';
import { InMemoryListViewAggregateStore } from '../infrastructure/in-memory/in-memory.list-view.aggregate-store';
import { InMemoryListViewStore } from '../infrastructure/in-memory/in-memory.list-view.store';
import { ListViewDomainModule } from '../domain/list-view.domain-module';
import { ListViewModeRepository } from './mode/list-view.mode.repository';
import { ListViewModeSetEventHandler } from './mode/list-view-mode-set.event-handler';
import { ListViewSelectorToggledEventHandler } from './mode/selector/list-view-selector-toggled.event-handler';
import { ListViewSelectorRepository } from './mode/selector/list-view.selector.repository';
/** @type {?} */
export const listViewKey = 'ListViewKey';
export class ListViewApiModule {
}
ListViewApiModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    HermesModule,
                    HermesModule.defineAggregate(listViewKey, ListViewAggregateFactory, InMemoryListViewAggregateRepository, CreateListViewCommandHandler, [
                        ...ListViewDomainModule.commandHandlers()
                    ], [
                        ...HermesModule.registerDomainEventHandler(ListViewModeSetEventHandler),
                        ...HermesModule.registerDomainEventHandler(ListViewSelectorToggledEventHandler),
                    ]),
                    ListViewDomainModule
                ],
                providers: [
                    ListViewCommandDispatcher,
                    ListViewEventRepository,
                    ListViewWarehouse,
                    ListViewModeRepository,
                    ListViewSelectorRepository,
                    InMemoryListViewAggregateStore,
                    InMemoryListViewStore
                ],
                declarations: [],
                exports: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2RvbWFpbi1hcGkvbGlzdC12aWV3LmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQzNILE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ2pILE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQy9HLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLCtDQUErQyxDQUFDOztBQUUzRixNQUFNLE9BQU8sV0FBVyxHQUFHLGFBQWE7QUFvQ3hDLE1BQU0sT0FBTyxpQkFBaUI7OztZQWxDN0IsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFFUixZQUFZO29CQUNaLFlBQVksQ0FBQyxlQUFlLENBQzNCLFdBQVcsRUFDWCx3QkFBd0IsRUFDeEIsbUNBQW1DLEVBQ25DLDRCQUE0QixFQUM1Qjt3QkFDQyxHQUFHLG9CQUFvQixDQUFDLGVBQWUsRUFBRTtxQkFDekMsRUFBRTt3QkFDRixHQUFHLFlBQVksQ0FBQywwQkFBMEIsQ0FBQywyQkFBMkIsQ0FBQzt3QkFDdkUsR0FBRyxZQUFZLENBQUMsMEJBQTBCLENBQUMsbUNBQW1DLENBQUM7cUJBQy9FLENBQ0Q7b0JBQ0Qsb0JBQW9CO2lCQUVwQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1YseUJBQXlCO29CQUN6Qix1QkFBdUI7b0JBQ3ZCLGlCQUFpQjtvQkFFakIsc0JBQXNCO29CQUN0QiwwQkFBMEI7b0JBRTFCLDhCQUE4QjtvQkFDOUIscUJBQXFCO2lCQUVyQjtnQkFDRCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLEVBQUU7YUFDWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEhlcm1lc01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IExpc3RWaWV3QWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJy4uL2RvbWFpbi9saXN0LXZpZXcuYWdncmVnYXRlLWZhY3RvcnknO1xuaW1wb3J0IHsgQ3JlYXRlTGlzdFZpZXdDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9jcmVhdGUvY3JlYXRlLWxpc3Qtdmlldy5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgSW5NZW1vcnlMaXN0Vmlld0FnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvaW4tbWVtb3J5Lmxpc3Qtdmlldy5hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBMaXN0Vmlld0NvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi9saXN0LXZpZXcuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IExpc3RWaWV3RXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi9saXN0LXZpZXcuZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBMaXN0Vmlld1dhcmVob3VzZSB9IGZyb20gJy4vbGlzdC12aWV3LndhcmVob3VzZSc7XG5pbXBvcnQgeyBJbk1lbW9yeUxpc3RWaWV3QWdncmVnYXRlU3RvcmUgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvaW4tbWVtb3J5Lmxpc3Qtdmlldy5hZ2dyZWdhdGUtc3RvcmUnO1xuaW1wb3J0IHsgSW5NZW1vcnlMaXN0Vmlld1N0b3JlIH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2luLW1lbW9yeS5saXN0LXZpZXcuc3RvcmUnO1xuaW1wb3J0IHsgTGlzdFZpZXdEb21haW5Nb2R1bGUgfSBmcm9tICcuLi9kb21haW4vbGlzdC12aWV3LmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlUmVwb3NpdG9yeSB9IGZyb20gJy4vbW9kZS9saXN0LXZpZXcubW9kZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IExpc3RWaWV3TW9kZVNldEV2ZW50SGFuZGxlciB9IGZyb20gJy4vbW9kZS9saXN0LXZpZXctbW9kZS1zZXQuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBMaXN0Vmlld1NlbGVjdG9yVG9nZ2xlZEV2ZW50SGFuZGxlciB9IGZyb20gJy4vbW9kZS9zZWxlY3Rvci9saXN0LXZpZXctc2VsZWN0b3ItdG9nZ2xlZC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IExpc3RWaWV3U2VsZWN0b3JSZXBvc2l0b3J5IH0gZnJvbSAnLi9tb2RlL3NlbGVjdG9yL2xpc3Qtdmlldy5zZWxlY3Rvci5yZXBvc2l0b3J5JztcblxuZXhwb3J0IGNvbnN0IGxpc3RWaWV3S2V5ID0gJ0xpc3RWaWV3S2V5JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXG5cdFx0SGVybWVzTW9kdWxlLFxuXHRcdEhlcm1lc01vZHVsZS5kZWZpbmVBZ2dyZWdhdGUoXG5cdFx0XHRsaXN0Vmlld0tleSxcblx0XHRcdExpc3RWaWV3QWdncmVnYXRlRmFjdG9yeSxcblx0XHRcdEluTWVtb3J5TGlzdFZpZXdBZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0Q3JlYXRlTGlzdFZpZXdDb21tYW5kSGFuZGxlcixcblx0XHRcdFtcblx0XHRcdFx0Li4uTGlzdFZpZXdEb21haW5Nb2R1bGUuY29tbWFuZEhhbmRsZXJzKClcblx0XHRcdF0sIFtcblx0XHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyRG9tYWluRXZlbnRIYW5kbGVyKExpc3RWaWV3TW9kZVNldEV2ZW50SGFuZGxlciksXG5cdFx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckRvbWFpbkV2ZW50SGFuZGxlcihMaXN0Vmlld1NlbGVjdG9yVG9nZ2xlZEV2ZW50SGFuZGxlciksXG5cdFx0XHRdXG5cdFx0KSxcblx0XHRMaXN0Vmlld0RvbWFpbk1vZHVsZVxuXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdExpc3RWaWV3Q29tbWFuZERpc3BhdGNoZXIsXG5cdFx0TGlzdFZpZXdFdmVudFJlcG9zaXRvcnksXG5cdFx0TGlzdFZpZXdXYXJlaG91c2UsXG5cblx0XHRMaXN0Vmlld01vZGVSZXBvc2l0b3J5LFxuXHRcdExpc3RWaWV3U2VsZWN0b3JSZXBvc2l0b3J5LFxuXG5cdFx0SW5NZW1vcnlMaXN0Vmlld0FnZ3JlZ2F0ZVN0b3JlLFxuXHRcdEluTWVtb3J5TGlzdFZpZXdTdG9yZVxuXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3QXBpTW9kdWxlIHtcbn1cbiJdfQ==