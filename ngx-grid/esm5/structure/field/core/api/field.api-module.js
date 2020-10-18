/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@generic-ui/hermes';
import { FieldReadModelRepository } from './read/field.read-model-repository';
import { FieldUiConverter } from './read/field.ui-converter';
import { FieldDomainModule } from '../domain/field.domain-module';
import { FieldCommandInvoker } from './field.command-invoker';
import { FieldWarehouse } from './field.warehouse';
var FieldApiModule = /** @class */ (function (_super) {
    tslib_1.__extends(FieldApiModule, _super);
    function FieldApiModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FieldApiModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FieldDomainModule
                    ],
                    providers: [
                        FieldCommandInvoker,
                        FieldReadModelRepository,
                        FieldUiConverter,
                        FieldWarehouse
                    ]
                },] }
    ];
    return FieldApiModule;
}(ApiModule));
export { FieldApiModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuYXBpLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpZWxkL2NvcmUvYXBpL2ZpZWxkLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDOUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRW5EO0lBYW9DLDBDQUFTO0lBYjdDOztJQWNBLENBQUM7O2dCQWRBLFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixpQkFBaUI7cUJBQ2pCO29CQUNELFNBQVMsRUFBRTt3QkFDVixtQkFBbUI7d0JBRW5CLHdCQUF3Qjt3QkFDeEIsZ0JBQWdCO3dCQUNoQixjQUFjO3FCQUNkO2lCQUNEOztJQUVELHFCQUFDO0NBQUEsQUFkRCxDQWFvQyxTQUFTLEdBQzVDO1NBRFksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBBcGlNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBGaWVsZFJlYWRNb2RlbFJlcG9zaXRvcnkgfSBmcm9tICcuL3JlYWQvZmllbGQucmVhZC1tb2RlbC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IEZpZWxkVWlDb252ZXJ0ZXIgfSBmcm9tICcuL3JlYWQvZmllbGQudWktY29udmVydGVyJztcbmltcG9ydCB7IEZpZWxkRG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vZG9tYWluL2ZpZWxkLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgRmllbGRDb21tYW5kSW52b2tlciB9IGZyb20gJy4vZmllbGQuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IEZpZWxkV2FyZWhvdXNlIH0gZnJvbSAnLi9maWVsZC53YXJlaG91c2UnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZpZWxkRG9tYWluTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdEZpZWxkQ29tbWFuZEludm9rZXIsXG5cblx0XHRGaWVsZFJlYWRNb2RlbFJlcG9zaXRvcnksXG5cdFx0RmllbGRVaUNvbnZlcnRlcixcblx0XHRGaWVsZFdhcmVob3VzZVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEZpZWxkQXBpTW9kdWxlIGV4dGVuZHMgQXBpTW9kdWxlIHtcbn1cbiJdfQ==