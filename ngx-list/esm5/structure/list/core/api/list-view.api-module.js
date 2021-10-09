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
import { ListViewModeArchive } from './mode/list-view.mode.archive';
import { ListViewModeSetEventHandler } from './mode/list-view-mode-set.event-handler';
import { ListViewSelectorToggledEventHandler } from './mode/selector/list-view-selector-toggled.event-handler';
import { ListViewSelectorArchive } from './mode/selector/list-view.selector.archive';
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
                        ListViewModeArchive,
                        ListViewSelectorArchive,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2NvcmUvYXBpL2xpc3Qtdmlldy5hcGktbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDakYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDakcsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFDM0gsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDakgsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDOUYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDekUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDcEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDdEYsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDL0csT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNENBQTRDLENBQUM7O0FBRXJGLE1BQU0sS0FBTyxXQUFXLEdBQUcsYUFBYTtBQUV4QztJQUFBO0lBbUNBLENBQUM7O2dCQW5DQSxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUVSLFlBQVk7d0JBQ1osWUFBWSxDQUFDLGVBQWUsQ0FDM0IsV0FBVyxFQUNYLHdCQUF3QixFQUN4QixtQ0FBbUMsRUFDbkMsNEJBQTRCLG1CQUV4QixvQkFBb0IsQ0FBQyxlQUFlLEVBQUUsb0JBRXRDLFlBQVksQ0FBQywwQkFBMEIsQ0FBQywyQkFBMkIsQ0FBQyxFQUNwRSxZQUFZLENBQUMsMEJBQTBCLENBQUMsbUNBQW1DLENBQUMsRUFFaEY7d0JBQ0Qsb0JBQW9CO3FCQUVwQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1Ysc0JBQXNCO3dCQUN0Qix1QkFBdUI7d0JBQ3ZCLGlCQUFpQjt3QkFFakIsbUJBQW1CO3dCQUNuQix1QkFBdUI7d0JBRXZCLDhCQUE4Qjt3QkFDOUIscUJBQXFCO3FCQUVyQjtvQkFDRCxZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLEVBQUU7aUJBQ1g7O0lBRUQsd0JBQUM7Q0FBQSxBQW5DRCxJQW1DQztTQURZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEhlcm1lc01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IExpc3RWaWV3QWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJy4uL2RvbWFpbi9saXN0LXZpZXcuYWdncmVnYXRlLWZhY3RvcnknO1xuaW1wb3J0IHsgQ3JlYXRlTGlzdFZpZXdDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9jcmVhdGUvY3JlYXRlLWxpc3Qtdmlldy5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgSW5NZW1vcnlMaXN0Vmlld0FnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvaW4tbWVtb3J5Lmxpc3Qtdmlldy5hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBMaXN0Vmlld0NvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi9saXN0LXZpZXcuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IExpc3RWaWV3RXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi9saXN0LXZpZXcuZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBMaXN0Vmlld1dhcmVob3VzZSB9IGZyb20gJy4vbGlzdC12aWV3LndhcmVob3VzZSc7XG5pbXBvcnQgeyBJbk1lbW9yeUxpc3RWaWV3QWdncmVnYXRlU3RvcmUgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvaW4tbWVtb3J5Lmxpc3Qtdmlldy5hZ2dyZWdhdGUtc3RvcmUnO1xuaW1wb3J0IHsgSW5NZW1vcnlMaXN0Vmlld1N0b3JlIH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2luLW1lbW9yeS5saXN0LXZpZXcuc3RvcmUnO1xuaW1wb3J0IHsgTGlzdFZpZXdEb21haW5Nb2R1bGUgfSBmcm9tICcuLi9kb21haW4vbGlzdC12aWV3LmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlQXJjaGl2ZSB9IGZyb20gJy4vbW9kZS9saXN0LXZpZXcubW9kZS5hcmNoaXZlJztcbmltcG9ydCB7IExpc3RWaWV3TW9kZVNldEV2ZW50SGFuZGxlciB9IGZyb20gJy4vbW9kZS9saXN0LXZpZXctbW9kZS1zZXQuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBMaXN0Vmlld1NlbGVjdG9yVG9nZ2xlZEV2ZW50SGFuZGxlciB9IGZyb20gJy4vbW9kZS9zZWxlY3Rvci9saXN0LXZpZXctc2VsZWN0b3ItdG9nZ2xlZC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IExpc3RWaWV3U2VsZWN0b3JBcmNoaXZlIH0gZnJvbSAnLi9tb2RlL3NlbGVjdG9yL2xpc3Qtdmlldy5zZWxlY3Rvci5hcmNoaXZlJztcblxuZXhwb3J0IGNvbnN0IGxpc3RWaWV3S2V5ID0gJ0xpc3RWaWV3S2V5JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXG5cdFx0SGVybWVzTW9kdWxlLFxuXHRcdEhlcm1lc01vZHVsZS5kZWZpbmVBZ2dyZWdhdGUoXG5cdFx0XHRsaXN0Vmlld0tleSxcblx0XHRcdExpc3RWaWV3QWdncmVnYXRlRmFjdG9yeSxcblx0XHRcdEluTWVtb3J5TGlzdFZpZXdBZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0Q3JlYXRlTGlzdFZpZXdDb21tYW5kSGFuZGxlcixcblx0XHRcdFtcblx0XHRcdFx0Li4uTGlzdFZpZXdEb21haW5Nb2R1bGUuY29tbWFuZEhhbmRsZXJzKClcblx0XHRcdF0sIFtcblx0XHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyRG9tYWluRXZlbnRIYW5kbGVyKExpc3RWaWV3TW9kZVNldEV2ZW50SGFuZGxlciksXG5cdFx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckRvbWFpbkV2ZW50SGFuZGxlcihMaXN0Vmlld1NlbGVjdG9yVG9nZ2xlZEV2ZW50SGFuZGxlcilcblx0XHRcdF1cblx0XHQpLFxuXHRcdExpc3RWaWV3RG9tYWluTW9kdWxlXG5cblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0TGlzdFZpZXdDb21tYW5kSW52b2tlcixcblx0XHRMaXN0Vmlld0V2ZW50UmVwb3NpdG9yeSxcblx0XHRMaXN0Vmlld1dhcmVob3VzZSxcblxuXHRcdExpc3RWaWV3TW9kZUFyY2hpdmUsXG5cdFx0TGlzdFZpZXdTZWxlY3RvckFyY2hpdmUsXG5cblx0XHRJbk1lbW9yeUxpc3RWaWV3QWdncmVnYXRlU3RvcmUsXG5cdFx0SW5NZW1vcnlMaXN0Vmlld1N0b3JlXG5cblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdBcGlNb2R1bGUge1xufVxuIl19