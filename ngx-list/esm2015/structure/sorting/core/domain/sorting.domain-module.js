import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainModule, HermesModule } from '@generic-ui/hermes';
import { ToggleSortCommandHandler } from './toggle/toggle-sort.command-handler';
import { SetSortingCommandHandler } from './set-config/set-sorting.command-handler';
import { SetSortOrderCommandHandler } from './order/set-sort-order.command-handler';
import { structureKey } from '../../../core/api/structre.key';
import { SortingDispatcher } from './sorting.dispatcher';
export class SortingDomainModule extends DomainModule {
    constructor() {
        super();
    }
    static commandHandlers() {
        return [
            HermesModule.registerCommandHandler(ToggleSortCommandHandler, structureKey),
            HermesModule.registerCommandHandler(SetSortingCommandHandler, structureKey),
            HermesModule.registerCommandHandler(SetSortOrderCommandHandler, structureKey)
        ];
    }
}
SortingDomainModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                providers: [
                    SortingDispatcher
                ],
                declarations: [],
                exports: []
            },] }
];
SortingDomainModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy5kb21haW4tbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvc29ydGluZy9jb3JlL2RvbWFpbi9zb3J0aW5nLmRvbWFpbi1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNwRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFhekQsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFlBQVk7SUFFcEQ7UUFDQyxLQUFLLEVBQUUsQ0FBQztJQUNULENBQUM7SUFFRCxNQUFNLENBQUMsZUFBZTtRQUNyQixPQUFPO1lBQ04sWUFBWSxDQUFDLHNCQUFzQixDQUFDLHdCQUF3QixFQUFFLFlBQVksQ0FBQztZQUMzRSxZQUFZLENBQUMsc0JBQXNCLENBQUMsd0JBQXdCLEVBQUUsWUFBWSxDQUFDO1lBQzNFLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQywwQkFBMEIsRUFBRSxZQUFZLENBQUM7U0FDN0UsQ0FBQztJQUNILENBQUM7OztZQXRCRCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7aUJBQ1o7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLGlCQUFpQjtpQkFDakI7Z0JBQ0QsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2FBQ1giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRG9tYWluTW9kdWxlLCBIZXJtZXNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBUb2dnbGVTb3J0Q29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL3RvZ2dsZS90b2dnbGUtc29ydC5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0U29ydGluZ0NvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9zZXQtY29uZmlnL3NldC1zb3J0aW5nLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZXRTb3J0T3JkZXJDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vb3JkZXIvc2V0LXNvcnQtb3JkZXIuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IHN0cnVjdHVyZUtleSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHJlLmtleSc7XG5pbXBvcnQgeyBTb3J0aW5nRGlzcGF0Y2hlciB9IGZyb20gJy4vc29ydGluZy5kaXNwYXRjaGVyJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFNvcnRpbmdEaXNwYXRjaGVyXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFNvcnRpbmdEb21haW5Nb2R1bGUgZXh0ZW5kcyBEb21haW5Nb2R1bGUge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRzdGF0aWMgY29tbWFuZEhhbmRsZXJzKCkge1xuXHRcdHJldHVybiBbXG5cdFx0XHRIZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihUb2dnbGVTb3J0Q29tbWFuZEhhbmRsZXIsIHN0cnVjdHVyZUtleSksXG5cdFx0XHRIZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRTb3J0aW5nQ29tbWFuZEhhbmRsZXIsIHN0cnVjdHVyZUtleSksXG5cdFx0XHRIZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRTb3J0T3JkZXJDb21tYW5kSGFuZGxlciwgc3RydWN0dXJlS2V5KVxuXHRcdF07XG5cdH1cblxufVxuIl19