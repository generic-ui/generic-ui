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
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/hermes";
export const listViewKey = 'ListViewKey';
export class ListViewApiModule {
}
ListViewApiModule.ɵfac = function ListViewApiModule_Factory(t) { return new (t || ListViewApiModule)(); };
ListViewApiModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ListViewApiModule });
ListViewApiModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        ListViewCommandInvoker,
        ListViewEventRepository,
        ListViewWarehouse,
        ListViewModeArchive,
        ListViewSelectorArchive,
        InMemoryListViewAggregateStore,
        InMemoryListViewStore
    ], imports: [[
            HermesModule,
            HermesModule.defineAggregate(listViewKey, ListViewAggregateFactory, InMemoryListViewAggregateRepository, CreateListViewCommandHandler, [
                ListViewDomainModule.commandHandlers()
            ], [
                HermesModule.registerDomainEventHandler(ListViewModeSetEventHandler),
                HermesModule.registerDomainEventHandler(ListViewSelectorToggledEventHandler)
            ]),
            ListViewDomainModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListViewApiModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ListViewApiModule, { imports: [HermesModule, i1.HermesDomainModule, ListViewDomainModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9saXN0L2NvcmUvYXBpL2xpc3Qtdmlldy5hcGktbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQzNILE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ2pILE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQy9HLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDOzs7QUFFckYsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLGFBQWEsQ0FBQztBQWtDekMsTUFBTSxPQUFPLGlCQUFpQjs7a0ZBQWpCLGlCQUFpQjttRUFBakIsaUJBQWlCO3dFQWZsQjtRQUNWLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsaUJBQWlCO1FBRWpCLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFFdkIsOEJBQThCO1FBQzlCLHFCQUFxQjtLQUVyQixZQTNCUTtZQUNSLFlBQVk7WUFDWixZQUFZLENBQUMsZUFBZSxDQUMzQixXQUFXLEVBQ1gsd0JBQXdCLEVBQ3hCLG1DQUFtQyxFQUNuQyw0QkFBNEIsRUFDNUI7Z0JBQ0Msb0JBQW9CLENBQUMsZUFBZSxFQUFFO2FBQ3RDLEVBQUU7Z0JBQ0YsWUFBWSxDQUFDLDBCQUEwQixDQUFDLDJCQUEyQixDQUFDO2dCQUNwRSxZQUFZLENBQUMsMEJBQTBCLENBQUMsbUNBQW1DLENBQUM7YUFDNUUsQ0FDRDtZQUNELG9CQUFvQjtTQUNwQjt1RkFnQlcsaUJBQWlCO2NBaEM3QixRQUFRO2VBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osWUFBWSxDQUFDLGVBQWUsQ0FDM0IsV0FBVyxFQUNYLHdCQUF3QixFQUN4QixtQ0FBbUMsRUFDbkMsNEJBQTRCLEVBQzVCO3dCQUNDLG9CQUFvQixDQUFDLGVBQWUsRUFBRTtxQkFDdEMsRUFBRTt3QkFDRixZQUFZLENBQUMsMEJBQTBCLENBQUMsMkJBQTJCLENBQUM7d0JBQ3BFLFlBQVksQ0FBQywwQkFBMEIsQ0FBQyxtQ0FBbUMsQ0FBQztxQkFDNUUsQ0FDRDtvQkFDRCxvQkFBb0I7aUJBQ3BCO2dCQUNELFNBQVMsRUFBRTtvQkFDVixzQkFBc0I7b0JBQ3RCLHVCQUF1QjtvQkFDdkIsaUJBQWlCO29CQUVqQixtQkFBbUI7b0JBQ25CLHVCQUF1QjtvQkFFdkIsOEJBQThCO29CQUM5QixxQkFBcUI7aUJBRXJCO2dCQUNELFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsRUFBRTthQUNYOzt3RkFDWSxpQkFBaUIsY0E5QjVCLFlBQVkseUJBYVosb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSGVybWVzTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgTGlzdFZpZXdBZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnLi4vZG9tYWluL2xpc3Qtdmlldy5hZ2dyZWdhdGUtZmFjdG9yeSc7XG5pbXBvcnQgeyBDcmVhdGVMaXN0Vmlld0NvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL2NyZWF0ZS9jcmVhdGUtbGlzdC12aWV3LmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBJbk1lbW9yeUxpc3RWaWV3QWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9pbi1tZW1vcnkubGlzdC12aWV3LmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IExpc3RWaWV3Q29tbWFuZEludm9rZXIgfSBmcm9tICcuL2xpc3Qtdmlldy5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgTGlzdFZpZXdFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuL2xpc3Qtdmlldy5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IExpc3RWaWV3V2FyZWhvdXNlIH0gZnJvbSAnLi9saXN0LXZpZXcud2FyZWhvdXNlJztcbmltcG9ydCB7IEluTWVtb3J5TGlzdFZpZXdBZ2dyZWdhdGVTdG9yZSB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9pbi1tZW1vcnkubGlzdC12aWV3LmFnZ3JlZ2F0ZS1zdG9yZSc7XG5pbXBvcnQgeyBJbk1lbW9yeUxpc3RWaWV3U3RvcmUgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvaW4tbWVtb3J5Lmxpc3Qtdmlldy5zdG9yZSc7XG5pbXBvcnQgeyBMaXN0Vmlld0RvbWFpbk1vZHVsZSB9IGZyb20gJy4uL2RvbWFpbi9saXN0LXZpZXcuZG9tYWluLW1vZHVsZSc7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGVBcmNoaXZlIH0gZnJvbSAnLi9tb2RlL2xpc3Qtdmlldy5tb2RlLmFyY2hpdmUnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlU2V0RXZlbnRIYW5kbGVyIH0gZnJvbSAnLi9tb2RlL2xpc3Qtdmlldy1tb2RlLXNldC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IExpc3RWaWV3U2VsZWN0b3JUb2dnbGVkRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi9tb2RlL3NlbGVjdG9yL2xpc3Qtdmlldy1zZWxlY3Rvci10b2dnbGVkLmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgTGlzdFZpZXdTZWxlY3RvckFyY2hpdmUgfSBmcm9tICcuL21vZGUvc2VsZWN0b3IvbGlzdC12aWV3LnNlbGVjdG9yLmFyY2hpdmUnO1xuXG5leHBvcnQgY29uc3QgbGlzdFZpZXdLZXkgPSAnTGlzdFZpZXdLZXknO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0SGVybWVzTW9kdWxlLFxuXHRcdEhlcm1lc01vZHVsZS5kZWZpbmVBZ2dyZWdhdGUoXG5cdFx0XHRsaXN0Vmlld0tleSxcblx0XHRcdExpc3RWaWV3QWdncmVnYXRlRmFjdG9yeSxcblx0XHRcdEluTWVtb3J5TGlzdFZpZXdBZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0Q3JlYXRlTGlzdFZpZXdDb21tYW5kSGFuZGxlcixcblx0XHRcdFtcblx0XHRcdFx0TGlzdFZpZXdEb21haW5Nb2R1bGUuY29tbWFuZEhhbmRsZXJzKClcblx0XHRcdF0sIFtcblx0XHRcdFx0SGVybWVzTW9kdWxlLnJlZ2lzdGVyRG9tYWluRXZlbnRIYW5kbGVyKExpc3RWaWV3TW9kZVNldEV2ZW50SGFuZGxlciksXG5cdFx0XHRcdEhlcm1lc01vZHVsZS5yZWdpc3RlckRvbWFpbkV2ZW50SGFuZGxlcihMaXN0Vmlld1NlbGVjdG9yVG9nZ2xlZEV2ZW50SGFuZGxlcilcblx0XHRcdF1cblx0XHQpLFxuXHRcdExpc3RWaWV3RG9tYWluTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdExpc3RWaWV3Q29tbWFuZEludm9rZXIsXG5cdFx0TGlzdFZpZXdFdmVudFJlcG9zaXRvcnksXG5cdFx0TGlzdFZpZXdXYXJlaG91c2UsXG5cblx0XHRMaXN0Vmlld01vZGVBcmNoaXZlLFxuXHRcdExpc3RWaWV3U2VsZWN0b3JBcmNoaXZlLFxuXG5cdFx0SW5NZW1vcnlMaXN0Vmlld0FnZ3JlZ2F0ZVN0b3JlLFxuXHRcdEluTWVtb3J5TGlzdFZpZXdTdG9yZVxuXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3QXBpTW9kdWxlIHtcbn1cbiJdfQ==