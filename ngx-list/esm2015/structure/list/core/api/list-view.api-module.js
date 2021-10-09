/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
                        ...HermesModule.registerDomainEventHandler(ListViewSelectorToggledEventHandler)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2NvcmUvYXBpL2xpc3Qtdmlldy5hcGktbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUMzSCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUNqSCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUM5RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN0RixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUMvRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7QUFFckYsTUFBTSxPQUFPLFdBQVcsR0FBRyxhQUFhO0FBb0N4QyxNQUFNLE9BQU8saUJBQWlCOzs7WUFsQzdCLFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBRVIsWUFBWTtvQkFDWixZQUFZLENBQUMsZUFBZSxDQUMzQixXQUFXLEVBQ1gsd0JBQXdCLEVBQ3hCLG1DQUFtQyxFQUNuQyw0QkFBNEIsRUFDNUI7d0JBQ0MsR0FBRyxvQkFBb0IsQ0FBQyxlQUFlLEVBQUU7cUJBQ3pDLEVBQUU7d0JBQ0YsR0FBRyxZQUFZLENBQUMsMEJBQTBCLENBQUMsMkJBQTJCLENBQUM7d0JBQ3ZFLEdBQUcsWUFBWSxDQUFDLDBCQUEwQixDQUFDLG1DQUFtQyxDQUFDO3FCQUMvRSxDQUNEO29CQUNELG9CQUFvQjtpQkFFcEI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLHNCQUFzQjtvQkFDdEIsdUJBQXVCO29CQUN2QixpQkFBaUI7b0JBRWpCLG1CQUFtQjtvQkFDbkIsdUJBQXVCO29CQUV2Qiw4QkFBOEI7b0JBQzlCLHFCQUFxQjtpQkFFckI7Z0JBQ0QsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2FBQ1giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBIZXJtZXNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld0FnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuLi9kb21haW4vbGlzdC12aWV3LmFnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IENyZWF0ZUxpc3RWaWV3Q29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vY3JlYXRlL2NyZWF0ZS1saXN0LXZpZXcuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IEluTWVtb3J5TGlzdFZpZXdBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2luLW1lbW9yeS5saXN0LXZpZXcuYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgTGlzdFZpZXdDb21tYW5kSW52b2tlciB9IGZyb20gJy4vbGlzdC12aWV3LmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4vbGlzdC12aWV3LmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgTGlzdFZpZXdXYXJlaG91c2UgfSBmcm9tICcuL2xpc3Qtdmlldy53YXJlaG91c2UnO1xuaW1wb3J0IHsgSW5NZW1vcnlMaXN0Vmlld0FnZ3JlZ2F0ZVN0b3JlIH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2luLW1lbW9yeS5saXN0LXZpZXcuYWdncmVnYXRlLXN0b3JlJztcbmltcG9ydCB7IEluTWVtb3J5TGlzdFZpZXdTdG9yZSB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9pbi1tZW1vcnkubGlzdC12aWV3LnN0b3JlJztcbmltcG9ydCB7IExpc3RWaWV3RG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vZG9tYWluL2xpc3Qtdmlldy5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7IExpc3RWaWV3TW9kZUFyY2hpdmUgfSBmcm9tICcuL21vZGUvbGlzdC12aWV3Lm1vZGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGVTZXRFdmVudEhhbmRsZXIgfSBmcm9tICcuL21vZGUvbGlzdC12aWV3LW1vZGUtc2V0LmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgTGlzdFZpZXdTZWxlY3RvclRvZ2dsZWRFdmVudEhhbmRsZXIgfSBmcm9tICcuL21vZGUvc2VsZWN0b3IvbGlzdC12aWV3LXNlbGVjdG9yLXRvZ2dsZWQuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBMaXN0Vmlld1NlbGVjdG9yQXJjaGl2ZSB9IGZyb20gJy4vbW9kZS9zZWxlY3Rvci9saXN0LXZpZXcuc2VsZWN0b3IuYXJjaGl2ZSc7XG5cbmV4cG9ydCBjb25zdCBsaXN0Vmlld0tleSA9ICdMaXN0Vmlld0tleSc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblxuXHRcdEhlcm1lc01vZHVsZSxcblx0XHRIZXJtZXNNb2R1bGUuZGVmaW5lQWdncmVnYXRlKFxuXHRcdFx0bGlzdFZpZXdLZXksXG5cdFx0XHRMaXN0Vmlld0FnZ3JlZ2F0ZUZhY3RvcnksXG5cdFx0XHRJbk1lbW9yeUxpc3RWaWV3QWdncmVnYXRlUmVwb3NpdG9yeSxcblx0XHRcdENyZWF0ZUxpc3RWaWV3Q29tbWFuZEhhbmRsZXIsXG5cdFx0XHRbXG5cdFx0XHRcdC4uLkxpc3RWaWV3RG9tYWluTW9kdWxlLmNvbW1hbmRIYW5kbGVycygpXG5cdFx0XHRdLCBbXG5cdFx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckRvbWFpbkV2ZW50SGFuZGxlcihMaXN0Vmlld01vZGVTZXRFdmVudEhhbmRsZXIpLFxuXHRcdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXIoTGlzdFZpZXdTZWxlY3RvclRvZ2dsZWRFdmVudEhhbmRsZXIpXG5cdFx0XHRdXG5cdFx0KSxcblx0XHRMaXN0Vmlld0RvbWFpbk1vZHVsZVxuXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdExpc3RWaWV3Q29tbWFuZEludm9rZXIsXG5cdFx0TGlzdFZpZXdFdmVudFJlcG9zaXRvcnksXG5cdFx0TGlzdFZpZXdXYXJlaG91c2UsXG5cblx0XHRMaXN0Vmlld01vZGVBcmNoaXZlLFxuXHRcdExpc3RWaWV3U2VsZWN0b3JBcmNoaXZlLFxuXG5cdFx0SW5NZW1vcnlMaXN0Vmlld0FnZ3JlZ2F0ZVN0b3JlLFxuXHRcdEluTWVtb3J5TGlzdFZpZXdTdG9yZVxuXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3QXBpTW9kdWxlIHtcbn1cbiJdfQ==