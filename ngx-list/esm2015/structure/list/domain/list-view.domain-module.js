/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { HermesModule } from '@generic-ui/hermes';
import { ListViewDispatcher } from './list-view.dispatcher';
import { listViewKey } from '../domain-api/list-view.api-module';
import { SetListViewModeCommandHandler } from './mode/set-list-view-mode.command-handler';
import { ToggleListViewSelectorCommandHandler } from './mode/selector/toggle-list-view-selector.command-handler';
export class ListViewDomainModule {
    /**
     * @return {?}
     */
    static commandHandlers() {
        return [
            ...HermesModule.registerCommandHandler(SetListViewModeCommandHandler, listViewKey),
            ...HermesModule.registerCommandHandler(ToggleListViewSelectorCommandHandler, listViewKey)
        ];
    }
}
ListViewDomainModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                providers: [
                    ListViewDispatcher
                ],
                declarations: [],
                exports: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmRvbWFpbi1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2RvbWFpbi9saXN0LXZpZXcuZG9tYWluLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzFGLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBV2pILE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFFaEMsTUFBTSxDQUFDLGVBQWU7UUFDckIsT0FBTztZQUNOLEdBQUcsWUFBWSxDQUFDLHNCQUFzQixDQUFDLDZCQUE2QixFQUFFLFdBQVcsQ0FBQztZQUNsRixHQUFHLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxvQ0FBb0MsRUFBRSxXQUFXLENBQUM7U0FDekYsQ0FBQztJQUNILENBQUM7OztZQWZELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUUsRUFBRTtnQkFDWCxTQUFTLEVBQUU7b0JBQ1Ysa0JBQWtCO2lCQUNsQjtnQkFDRCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLEVBQUU7YUFDWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEhlcm1lc01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IExpc3RWaWV3RGlzcGF0Y2hlciB9IGZyb20gJy4vbGlzdC12aWV3LmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgbGlzdFZpZXdLZXkgfSBmcm9tICcuLi9kb21haW4tYXBpL2xpc3Qtdmlldy5hcGktbW9kdWxlJztcbmltcG9ydCB7IFNldExpc3RWaWV3TW9kZUNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9tb2RlL3NldC1saXN0LXZpZXctbW9kZS5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgVG9nZ2xlTGlzdFZpZXdTZWxlY3RvckNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9tb2RlL3NlbGVjdG9yL3RvZ2dsZS1saXN0LXZpZXctc2VsZWN0b3IuY29tbWFuZC1oYW5kbGVyJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0TGlzdFZpZXdEaXNwYXRjaGVyXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3RG9tYWluTW9kdWxlIHtcblxuXHRzdGF0aWMgY29tbWFuZEhhbmRsZXJzKCkge1xuXHRcdHJldHVybiBbXG5cdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRMaXN0Vmlld01vZGVDb21tYW5kSGFuZGxlciwgbGlzdFZpZXdLZXkpLFxuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoVG9nZ2xlTGlzdFZpZXdTZWxlY3RvckNvbW1hbmRIYW5kbGVyLCBsaXN0Vmlld0tleSlcblx0XHRdO1xuXHR9XG5cbn1cbiJdfQ==