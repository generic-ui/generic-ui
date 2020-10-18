/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { HermesModule } from '@generic-ui/hermes';
import { ListViewDispatcher } from './list-view.dispatcher';
import { listViewKey } from '../api/list-view.api-module';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmRvbWFpbi1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2NvcmUvZG9tYWluL2xpc3Qtdmlldy5kb21haW4tbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDMUQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDMUYsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFXakgsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUVoQyxNQUFNLENBQUMsZUFBZTtRQUNyQixPQUFPO1lBQ04sR0FBRyxZQUFZLENBQUMsc0JBQXNCLENBQUMsNkJBQTZCLEVBQUUsV0FBVyxDQUFDO1lBQ2xGLEdBQUcsWUFBWSxDQUFDLHNCQUFzQixDQUFDLG9DQUFvQyxFQUFFLFdBQVcsQ0FBQztTQUN6RixDQUFDO0lBQ0gsQ0FBQzs7O1lBZkQsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRSxFQUFFO2dCQUNYLFNBQVMsRUFBRTtvQkFDVixrQkFBa0I7aUJBQ2xCO2dCQUNELFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsRUFBRTthQUNYIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSGVybWVzTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgTGlzdFZpZXdEaXNwYXRjaGVyIH0gZnJvbSAnLi9saXN0LXZpZXcuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBsaXN0Vmlld0tleSB9IGZyb20gJy4uL2FwaS9saXN0LXZpZXcuYXBpLW1vZHVsZSc7XG5pbXBvcnQgeyBTZXRMaXN0Vmlld01vZGVDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vbW9kZS9zZXQtbGlzdC12aWV3LW1vZGUuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFRvZ2dsZUxpc3RWaWV3U2VsZWN0b3JDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vbW9kZS9zZWxlY3Rvci90b2dnbGUtbGlzdC12aWV3LXNlbGVjdG9yLmNvbW1hbmQtaGFuZGxlcic7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW10sXG5cdHByb3ZpZGVyczogW1xuXHRcdExpc3RWaWV3RGlzcGF0Y2hlclxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0RvbWFpbk1vZHVsZSB7XG5cblx0c3RhdGljIGNvbW1hbmRIYW5kbGVycygpIHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0TGlzdFZpZXdNb2RlQ29tbWFuZEhhbmRsZXIsIGxpc3RWaWV3S2V5KSxcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFRvZ2dsZUxpc3RWaWV3U2VsZWN0b3JDb21tYW5kSGFuZGxlciwgbGlzdFZpZXdLZXkpXG5cdFx0XTtcblx0fVxuXG59XG4iXX0=