/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HermesModule } from '@generic-ui/hermes';
import { PagingManagerFactory } from './paging.manager-factory';
import { PagingDispatcher } from './paging.dispatcher';
import { SetPagingCommandHandler } from './set/set-paging.command-handler';
import { NextPageCommandHandler } from './next-page/next-page.command-handler';
import { PrevPageCommandHandler } from './prev-page/prev-page.command-handler';
import { ChangePagesizeCommandHandler } from './change-pagesize/change-pagesize.command-handler';
export class PagingDomainModule {
    /**
     * @return {?}
     */
    static commandHandlers() {
        return [
            ...HermesModule.registerCommandHandler(SetPagingCommandHandler, 'StructureAggregate'),
            ...HermesModule.registerCommandHandler(NextPageCommandHandler, 'StructureAggregate'),
            ...HermesModule.registerCommandHandler(PrevPageCommandHandler, 'StructureAggregate'),
            ...HermesModule.registerCommandHandler(ChangePagesizeCommandHandler, 'StructureAggregate')
        ];
    }
}
PagingDomainModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                providers: [
                    PagingDispatcher,
                    PagingManagerFactory
                ],
                declarations: [],
                exports: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmRvbWFpbi1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9wYWdpbmcvZG9tYWluL3BhZ2luZy5kb21haW4tbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDL0UsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFjakcsTUFBTSxPQUFPLGtCQUFrQjs7OztJQUU5QixNQUFNLENBQUMsZUFBZTtRQUNyQixPQUFPO1lBQ04sR0FBRyxZQUFZLENBQUMsc0JBQXNCLENBQUMsdUJBQXVCLEVBQUUsb0JBQW9CLENBQUM7WUFDckYsR0FBRyxZQUFZLENBQUMsc0JBQXNCLENBQUMsc0JBQXNCLEVBQUUsb0JBQW9CLENBQUM7WUFDcEYsR0FBRyxZQUFZLENBQUMsc0JBQXNCLENBQUMsc0JBQXNCLEVBQUUsb0JBQW9CLENBQUM7WUFDcEYsR0FBRyxZQUFZLENBQUMsc0JBQXNCLENBQUMsNEJBQTRCLEVBQUUsb0JBQW9CLENBQUM7U0FDMUYsQ0FBQztJQUNILENBQUM7OztZQXBCRCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7aUJBQ1o7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLGdCQUFnQjtvQkFDaEIsb0JBQW9CO2lCQUNwQjtnQkFDRCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLEVBQUU7YUFDWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBIZXJtZXNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBQYWdpbmdNYW5hZ2VyRmFjdG9yeSB9IGZyb20gJy4vcGFnaW5nLm1hbmFnZXItZmFjdG9yeSc7XG5pbXBvcnQgeyBQYWdpbmdEaXNwYXRjaGVyIH0gZnJvbSAnLi9wYWdpbmcuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTZXRQYWdpbmdDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vc2V0L3NldC1wYWdpbmcuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IE5leHRQYWdlQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL25leHQtcGFnZS9uZXh0LXBhZ2UuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFByZXZQYWdlQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL3ByZXYtcGFnZS9wcmV2LXBhZ2UuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IENoYW5nZVBhZ2VzaXplQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL2NoYW5nZS1wYWdlc2l6ZS9jaGFuZ2UtcGFnZXNpemUuY29tbWFuZC1oYW5kbGVyJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFBhZ2luZ0Rpc3BhdGNoZXIsXG5cdFx0UGFnaW5nTWFuYWdlckZhY3Rvcnlcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5nRG9tYWluTW9kdWxlIHtcblxuXHRzdGF0aWMgY29tbWFuZEhhbmRsZXJzKCkge1xuXHRcdHJldHVybiBbXG5cdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRQYWdpbmdDb21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpLFxuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoTmV4dFBhZ2VDb21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpLFxuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoUHJldlBhZ2VDb21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpLFxuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoQ2hhbmdlUGFnZXNpemVDb21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpXG5cdFx0XTtcblx0fVxuXG59XG4iXX0=