import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@generic-ui/hermes';
import { FieldReadModelArchive } from './read/field-read-model.archive';
import { FieldUiConverter } from './read/field.ui-converter';
import { FieldDomainModule } from '../domain/field.domain-module';
import { FieldCommandInvoker } from './field.command-invoker';
import { FieldWarehouse } from './field.warehouse';
import * as i0 from "@angular/core";
export class FieldApiModule extends ApiModule {
}
FieldApiModule.ɵfac = /*@__PURE__*/ function () { let ɵFieldApiModule_BaseFactory; return function FieldApiModule_Factory(t) { return (ɵFieldApiModule_BaseFactory || (ɵFieldApiModule_BaseFactory = i0.ɵɵgetInheritedFactory(FieldApiModule)))(t || FieldApiModule); }; }();
FieldApiModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FieldApiModule });
FieldApiModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        FieldCommandInvoker,
        FieldReadModelArchive,
        FieldUiConverter,
        FieldWarehouse
    ], imports: [[
            CommonModule,
            FieldDomainModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FieldApiModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FieldDomainModule
                ],
                providers: [
                    FieldCommandInvoker,
                    FieldReadModelArchive,
                    FieldUiConverter,
                    FieldWarehouse
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FieldApiModule, { imports: [CommonModule,
        FieldDomainModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuYXBpLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL2ZpZWxkL2NvcmUvYXBpL2ZpZWxkLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFlbkQsTUFBTSxPQUFPLGNBQWUsU0FBUSxTQUFTOzs4TkFBaEMsY0FBYyxTQUFkLGNBQWM7Z0VBQWQsY0FBYztxRUFSZjtRQUNWLG1CQUFtQjtRQUVuQixxQkFBcUI7UUFDckIsZ0JBQWdCO1FBQ2hCLGNBQWM7S0FDZCxZQVZRO1lBQ1IsWUFBWTtZQUNaLGlCQUFpQjtTQUNqQjt1RkFTVyxjQUFjO2NBYjFCLFFBQVE7ZUFBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixpQkFBaUI7aUJBQ2pCO2dCQUNELFNBQVMsRUFBRTtvQkFDVixtQkFBbUI7b0JBRW5CLHFCQUFxQjtvQkFDckIsZ0JBQWdCO29CQUNoQixjQUFjO2lCQUNkO2FBQ0Q7O3dGQUNZLGNBQWMsY0FYekIsWUFBWTtRQUNaLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBBcGlNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBGaWVsZFJlYWRNb2RlbEFyY2hpdmUgfSBmcm9tICcuL3JlYWQvZmllbGQtcmVhZC1tb2RlbC5hcmNoaXZlJztcbmltcG9ydCB7IEZpZWxkVWlDb252ZXJ0ZXIgfSBmcm9tICcuL3JlYWQvZmllbGQudWktY29udmVydGVyJztcbmltcG9ydCB7IEZpZWxkRG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vZG9tYWluL2ZpZWxkLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgRmllbGRDb21tYW5kSW52b2tlciB9IGZyb20gJy4vZmllbGQuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IEZpZWxkV2FyZWhvdXNlIH0gZnJvbSAnLi9maWVsZC53YXJlaG91c2UnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZpZWxkRG9tYWluTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdEZpZWxkQ29tbWFuZEludm9rZXIsXG5cblx0XHRGaWVsZFJlYWRNb2RlbEFyY2hpdmUsXG5cdFx0RmllbGRVaUNvbnZlcnRlcixcblx0XHRGaWVsZFdhcmVob3VzZVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEZpZWxkQXBpTW9kdWxlIGV4dGVuZHMgQXBpTW9kdWxlIHtcbn1cbiJdfQ==