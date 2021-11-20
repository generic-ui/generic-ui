import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@generic-ui/hermes';
import { SortingCommandInvoker } from './sorting.command-invoker';
import { SortingDomainModule } from '../domain/sorting.domain-module';
import { SortingDomainCommandInvoker } from '../domain/sorting.domain-command-invoker';
export class SortingApiModule extends ApiModule {
}
SortingApiModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    SortingDomainModule
                ],
                providers: [
                    {
                        provide: SortingCommandInvoker,
                        useClass: SortingDomainCommandInvoker
                    }
                ],
                declarations: [],
                exports: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy5hcGktbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvc29ydGluZy9jb3JlL2FwaS9zb3J0aW5nLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBZ0J2RixNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsU0FBUzs7O1lBZDlDLFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixtQkFBbUI7aUJBQ25CO2dCQUNELFNBQVMsRUFBRTtvQkFDVjt3QkFDQyxPQUFPLEVBQUUscUJBQXFCO3dCQUM5QixRQUFRLEVBQUUsMkJBQTJCO3FCQUNyQztpQkFDRDtnQkFDRCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLEVBQUU7YUFDWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBBcGlNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTb3J0aW5nQ29tbWFuZEludm9rZXIgfSBmcm9tICcuL3NvcnRpbmcuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNvcnRpbmdEb21haW5Nb2R1bGUgfSBmcm9tICcuLi9kb21haW4vc29ydGluZy5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7IFNvcnRpbmdEb21haW5Db21tYW5kSW52b2tlciB9IGZyb20gJy4uL2RvbWFpbi9zb3J0aW5nLmRvbWFpbi1jb21tYW5kLWludm9rZXInO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdFNvcnRpbmdEb21haW5Nb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogU29ydGluZ0NvbW1hbmRJbnZva2VyLFxuXHRcdFx0dXNlQ2xhc3M6IFNvcnRpbmdEb21haW5Db21tYW5kSW52b2tlclxuXHRcdH1cblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgU29ydGluZ0FwaU1vZHVsZSBleHRlbmRzIEFwaU1vZHVsZSB7XG59XG4iXX0=