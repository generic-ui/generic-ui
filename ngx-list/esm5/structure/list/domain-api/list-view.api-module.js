/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { DOMAIN_EVENT_HANDLERS, HermesModule } from '@generic-ui/hermes';
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
export var listViewKey = 'ListViewKey';
var ListViewApiModule = /** @class */ (function () {
    function ListViewApiModule() {
    }
    ListViewApiModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        HermesModule,
                        HermesModule.defineAggregate(listViewKey, ListViewAggregateFactory, InMemoryListViewAggregateRepository, CreateListViewCommandHandler, tslib_1.__spread(ListViewDomainModule.commandHandlers())),
                        ListViewDomainModule
                    ],
                    providers: [
                        ListViewCommandDispatcher,
                        ListViewEventRepository,
                        ListViewWarehouse,
                        ListViewModeRepository,
                        {
                            provide: DOMAIN_EVENT_HANDLERS,
                            useClass: ListViewModeSetEventHandler,
                            multi: true
                        },
                        ListViewSelectorRepository,
                        {
                            provide: DOMAIN_EVENT_HANDLERS,
                            useClass: ListViewSelectorToggledEventHandler,
                            multi: true
                        },
                        InMemoryListViewAggregateStore,
                        InMemoryListViewStore
                    ],
                    declarations: [],
                    exports: []
                },] }
    ];
    return ListViewApiModule;
}());
export { ListViewApiModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2RvbWFpbi1hcGkvbGlzdC12aWV3LmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUMzSCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUNqSCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUM5RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN0RixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUMvRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQzs7QUFFM0YsTUFBTSxLQUFPLFdBQVcsR0FBRyxhQUFhO0FBRXhDO0lBQUE7SUEyQ0EsQ0FBQzs7Z0JBM0NBLFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBRVIsWUFBWTt3QkFDWixZQUFZLENBQUMsZUFBZSxDQUMzQixXQUFXLEVBQ1gsd0JBQXdCLEVBQ3hCLG1DQUFtQyxFQUNuQyw0QkFBNEIsbUJBRXhCLG9CQUFvQixDQUFDLGVBQWUsRUFBRSxFQUUxQzt3QkFDRCxvQkFBb0I7cUJBRXBCO29CQUNELFNBQVMsRUFBRTt3QkFDVix5QkFBeUI7d0JBQ3pCLHVCQUF1Qjt3QkFDdkIsaUJBQWlCO3dCQUVqQixzQkFBc0I7d0JBQ3RCOzRCQUNDLE9BQU8sRUFBRSxxQkFBcUI7NEJBQzlCLFFBQVEsRUFBRSwyQkFBMkI7NEJBQ3JDLEtBQUssRUFBRSxJQUFJO3lCQUNYO3dCQUVELDBCQUEwQjt3QkFDMUI7NEJBQ0MsT0FBTyxFQUFFLHFCQUFxQjs0QkFDOUIsUUFBUSxFQUFFLG1DQUFtQzs0QkFDN0MsS0FBSyxFQUFFLElBQUk7eUJBQ1g7d0JBRUQsOEJBQThCO3dCQUM5QixxQkFBcUI7cUJBRXJCO29CQUNELFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUUsRUFBRTtpQkFDWDs7SUFFRCx3QkFBQztDQUFBLEFBM0NELElBMkNDO1NBRFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRE9NQUlOX0VWRU5UX0hBTkRMRVJTLCBIZXJtZXNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld0FnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuLi9kb21haW4vbGlzdC12aWV3LmFnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IENyZWF0ZUxpc3RWaWV3Q29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vY3JlYXRlL2NyZWF0ZS1saXN0LXZpZXcuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IEluTWVtb3J5TGlzdFZpZXdBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2luLW1lbW9yeS5saXN0LXZpZXcuYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgTGlzdFZpZXdDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4vbGlzdC12aWV3LmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4vbGlzdC12aWV3LmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgTGlzdFZpZXdXYXJlaG91c2UgfSBmcm9tICcuL2xpc3Qtdmlldy53YXJlaG91c2UnO1xuaW1wb3J0IHsgSW5NZW1vcnlMaXN0Vmlld0FnZ3JlZ2F0ZVN0b3JlIH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2luLW1lbW9yeS5saXN0LXZpZXcuYWdncmVnYXRlLXN0b3JlJztcbmltcG9ydCB7IEluTWVtb3J5TGlzdFZpZXdTdG9yZSB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9pbi1tZW1vcnkubGlzdC12aWV3LnN0b3JlJztcbmltcG9ydCB7IExpc3RWaWV3RG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vZG9tYWluL2xpc3Qtdmlldy5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7IExpc3RWaWV3TW9kZVJlcG9zaXRvcnkgfSBmcm9tICcuL21vZGUvbGlzdC12aWV3Lm1vZGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGVTZXRFdmVudEhhbmRsZXIgfSBmcm9tICcuL21vZGUvbGlzdC12aWV3LW1vZGUtc2V0LmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgTGlzdFZpZXdTZWxlY3RvclRvZ2dsZWRFdmVudEhhbmRsZXIgfSBmcm9tICcuL21vZGUvc2VsZWN0b3IvbGlzdC12aWV3LXNlbGVjdG9yLXRvZ2dsZWQuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBMaXN0Vmlld1NlbGVjdG9yUmVwb3NpdG9yeSB9IGZyb20gJy4vbW9kZS9zZWxlY3Rvci9saXN0LXZpZXcuc2VsZWN0b3IucmVwb3NpdG9yeSc7XG5cbmV4cG9ydCBjb25zdCBsaXN0Vmlld0tleSA9ICdMaXN0Vmlld0tleSc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblxuXHRcdEhlcm1lc01vZHVsZSxcblx0XHRIZXJtZXNNb2R1bGUuZGVmaW5lQWdncmVnYXRlKFxuXHRcdFx0bGlzdFZpZXdLZXksXG5cdFx0XHRMaXN0Vmlld0FnZ3JlZ2F0ZUZhY3RvcnksXG5cdFx0XHRJbk1lbW9yeUxpc3RWaWV3QWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdENyZWF0ZUxpc3RWaWV3Q29tbWFuZEhhbmRsZXIsXG5cdFx0XHRbXG5cdFx0XHRcdC4uLkxpc3RWaWV3RG9tYWluTW9kdWxlLmNvbW1hbmRIYW5kbGVycygpXG5cdFx0XHRdXG5cdFx0KSxcblx0XHRMaXN0Vmlld0RvbWFpbk1vZHVsZVxuXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdExpc3RWaWV3Q29tbWFuZERpc3BhdGNoZXIsXG5cdFx0TGlzdFZpZXdFdmVudFJlcG9zaXRvcnksXG5cdFx0TGlzdFZpZXdXYXJlaG91c2UsXG5cblx0XHRMaXN0Vmlld01vZGVSZXBvc2l0b3J5LFxuXHRcdHtcblx0XHRcdHByb3ZpZGU6IERPTUFJTl9FVkVOVF9IQU5ETEVSUyxcblx0XHRcdHVzZUNsYXNzOiBMaXN0Vmlld01vZGVTZXRFdmVudEhhbmRsZXIsXG5cdFx0XHRtdWx0aTogdHJ1ZVxuXHRcdH0sXG5cblx0XHRMaXN0Vmlld1NlbGVjdG9yUmVwb3NpdG9yeSxcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBET01BSU5fRVZFTlRfSEFORExFUlMsXG5cdFx0XHR1c2VDbGFzczogTGlzdFZpZXdTZWxlY3RvclRvZ2dsZWRFdmVudEhhbmRsZXIsXG5cdFx0XHRtdWx0aTogdHJ1ZVxuXHRcdH0sXG5cblx0XHRJbk1lbW9yeUxpc3RWaWV3QWdncmVnYXRlU3RvcmUsXG5cdFx0SW5NZW1vcnlMaXN0Vmlld1N0b3JlXG5cblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdBcGlNb2R1bGUge1xufVxuIl19