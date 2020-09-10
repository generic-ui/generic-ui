/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
                        HermesModule.defineAggregate(listViewKey, ListViewAggregateFactory, InMemoryListViewAggregateRepository, CreateListViewCommandHandler, tslib_1.__spread(ListViewDomainModule.commandHandlers()), tslib_1.__spread(HermesModule.registerDomainEventHandler(ListViewModeSetEventHandler), HermesModule.registerDomainEventHandler(ListViewSelectorToggledEventHandler))),
                        ListViewDomainModule
                    ],
                    providers: [
                        ListViewCommandInvoker,
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
    return ListViewApiModule;
}());
export { ListViewApiModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2RvbWFpbi1hcGkvbGlzdC12aWV3LmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUMzSCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUNqSCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUM5RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN0RixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUMvRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQzs7QUFFM0YsTUFBTSxLQUFPLFdBQVcsR0FBRyxhQUFhO0FBRXhDO0lBQUE7SUFtQ0EsQ0FBQzs7Z0JBbkNBLFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBRVIsWUFBWTt3QkFDWixZQUFZLENBQUMsZUFBZSxDQUMzQixXQUFXLEVBQ1gsd0JBQXdCLEVBQ3hCLG1DQUFtQyxFQUNuQyw0QkFBNEIsbUJBRXhCLG9CQUFvQixDQUFDLGVBQWUsRUFBRSxvQkFFdEMsWUFBWSxDQUFDLDBCQUEwQixDQUFDLDJCQUEyQixDQUFDLEVBQ3BFLFlBQVksQ0FBQywwQkFBMEIsQ0FBQyxtQ0FBbUMsQ0FBQyxFQUVoRjt3QkFDRCxvQkFBb0I7cUJBRXBCO29CQUNELFNBQVMsRUFBRTt3QkFDVixzQkFBc0I7d0JBQ3RCLHVCQUF1Qjt3QkFDdkIsaUJBQWlCO3dCQUVqQixzQkFBc0I7d0JBQ3RCLDBCQUEwQjt3QkFFMUIsOEJBQThCO3dCQUM5QixxQkFBcUI7cUJBRXJCO29CQUNELFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUUsRUFBRTtpQkFDWDs7SUFFRCx3QkFBQztDQUFBLEFBbkNELElBbUNDO1NBRFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSGVybWVzTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgTGlzdFZpZXdBZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnLi4vZG9tYWluL2xpc3Qtdmlldy5hZ2dyZWdhdGUtZmFjdG9yeSc7XG5pbXBvcnQgeyBDcmVhdGVMaXN0Vmlld0NvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL2NyZWF0ZS9jcmVhdGUtbGlzdC12aWV3LmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBJbk1lbW9yeUxpc3RWaWV3QWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9pbi1tZW1vcnkubGlzdC12aWV3LmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IExpc3RWaWV3Q29tbWFuZEludm9rZXIgfSBmcm9tICcuL2xpc3Qtdmlldy5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgTGlzdFZpZXdFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuL2xpc3Qtdmlldy5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IExpc3RWaWV3V2FyZWhvdXNlIH0gZnJvbSAnLi9saXN0LXZpZXcud2FyZWhvdXNlJztcbmltcG9ydCB7IEluTWVtb3J5TGlzdFZpZXdBZ2dyZWdhdGVTdG9yZSB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9pbi1tZW1vcnkubGlzdC12aWV3LmFnZ3JlZ2F0ZS1zdG9yZSc7XG5pbXBvcnQgeyBJbk1lbW9yeUxpc3RWaWV3U3RvcmUgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvaW4tbWVtb3J5Lmxpc3Qtdmlldy5zdG9yZSc7XG5pbXBvcnQgeyBMaXN0Vmlld0RvbWFpbk1vZHVsZSB9IGZyb20gJy4uL2RvbWFpbi9saXN0LXZpZXcuZG9tYWluLW1vZHVsZSc7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGVSZXBvc2l0b3J5IH0gZnJvbSAnLi9tb2RlL2xpc3Qtdmlldy5tb2RlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlU2V0RXZlbnRIYW5kbGVyIH0gZnJvbSAnLi9tb2RlL2xpc3Qtdmlldy1tb2RlLXNldC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IExpc3RWaWV3U2VsZWN0b3JUb2dnbGVkRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi9tb2RlL3NlbGVjdG9yL2xpc3Qtdmlldy1zZWxlY3Rvci10b2dnbGVkLmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgTGlzdFZpZXdTZWxlY3RvclJlcG9zaXRvcnkgfSBmcm9tICcuL21vZGUvc2VsZWN0b3IvbGlzdC12aWV3LnNlbGVjdG9yLnJlcG9zaXRvcnknO1xuXG5leHBvcnQgY29uc3QgbGlzdFZpZXdLZXkgPSAnTGlzdFZpZXdLZXknO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cblx0XHRIZXJtZXNNb2R1bGUsXG5cdFx0SGVybWVzTW9kdWxlLmRlZmluZUFnZ3JlZ2F0ZShcblx0XHRcdGxpc3RWaWV3S2V5LFxuXHRcdFx0TGlzdFZpZXdBZ2dyZWdhdGVGYWN0b3J5LFxuXHRcdFx0SW5NZW1vcnlMaXN0Vmlld0FnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRDcmVhdGVMaXN0Vmlld0NvbW1hbmRIYW5kbGVyLFxuXHRcdFx0W1xuXHRcdFx0XHQuLi5MaXN0Vmlld0RvbWFpbk1vZHVsZS5jb21tYW5kSGFuZGxlcnMoKVxuXHRcdFx0XSwgW1xuXHRcdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXIoTGlzdFZpZXdNb2RlU2V0RXZlbnRIYW5kbGVyKSxcblx0XHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyRG9tYWluRXZlbnRIYW5kbGVyKExpc3RWaWV3U2VsZWN0b3JUb2dnbGVkRXZlbnRIYW5kbGVyKVxuXHRcdFx0XVxuXHRcdCksXG5cdFx0TGlzdFZpZXdEb21haW5Nb2R1bGVcblxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRMaXN0Vmlld0NvbW1hbmRJbnZva2VyLFxuXHRcdExpc3RWaWV3RXZlbnRSZXBvc2l0b3J5LFxuXHRcdExpc3RWaWV3V2FyZWhvdXNlLFxuXG5cdFx0TGlzdFZpZXdNb2RlUmVwb3NpdG9yeSxcblx0XHRMaXN0Vmlld1NlbGVjdG9yUmVwb3NpdG9yeSxcblxuXHRcdEluTWVtb3J5TGlzdFZpZXdBZ2dyZWdhdGVTdG9yZSxcblx0XHRJbk1lbW9yeUxpc3RWaWV3U3RvcmVcblxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0FwaU1vZHVsZSB7XG59XG4iXX0=