import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@generic-ui/hermes';
import { SortingCommandInvoker } from './sorting.command-invoker';
import { SortingDomainModule } from '../domain/sorting.domain-module';
import * as i0 from "@angular/core";
export class SortingApiModule extends ApiModule {
}
SortingApiModule.ɵfac = /*@__PURE__*/ function () { let ɵSortingApiModule_BaseFactory; return function SortingApiModule_Factory(t) { return (ɵSortingApiModule_BaseFactory || (ɵSortingApiModule_BaseFactory = i0.ɵɵgetInheritedFactory(SortingApiModule)))(t || SortingApiModule); }; }();
SortingApiModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SortingApiModule });
SortingApiModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        SortingCommandInvoker
    ], imports: [[
            CommonModule,
            SortingDomainModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SortingApiModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    SortingDomainModule
                ],
                providers: [
                    SortingCommandInvoker
                ],
                declarations: [],
                exports: []
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SortingApiModule, { imports: [CommonModule,
        SortingDomainModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy5hcGktbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvc29ydGluZy9jb3JlL2FwaS9zb3J0aW5nLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztBQWF0RSxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsU0FBUzs7d09BQWxDLGdCQUFnQixTQUFoQixnQkFBZ0I7a0VBQWhCLGdCQUFnQjt1RUFOakI7UUFDVixxQkFBcUI7S0FDckIsWUFOUTtZQUNSLFlBQVk7WUFDWixtQkFBbUI7U0FDbkI7dUZBT1csZ0JBQWdCO2NBWDVCLFFBQVE7ZUFBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixtQkFBbUI7aUJBQ25CO2dCQUNELFNBQVMsRUFBRTtvQkFDVixxQkFBcUI7aUJBQ3JCO2dCQUNELFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsRUFBRTthQUNYOzt3RkFDWSxnQkFBZ0IsY0FUM0IsWUFBWTtRQUNaLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBBcGlNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTb3J0aW5nQ29tbWFuZEludm9rZXIgfSBmcm9tICcuL3NvcnRpbmcuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNvcnRpbmdEb21haW5Nb2R1bGUgfSBmcm9tICcuLi9kb21haW4vc29ydGluZy5kb21haW4tbW9kdWxlJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRTb3J0aW5nRG9tYWluTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFNvcnRpbmdDb21tYW5kSW52b2tlclxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTb3J0aW5nQXBpTW9kdWxlIGV4dGVuZHMgQXBpTW9kdWxlIHtcbn1cbiJdfQ==