/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@generic-ui/hermes';
import { FieldReadModelRepository } from './read/field.read-model-repository';
import { FieldUiConverter } from './read/field.ui-converter';
import { FieldDomainModule } from '../domain/field.domain-module';
import { FieldCommandInvoker } from './field.command-invoker';
import { FieldWarehouse } from './field.warehouse';
export class FieldApiModule extends ApiModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuYXBpLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpZWxkL2RvbWFpbi1hcGkvZmllbGQuYXBpLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9DLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQWVuRCxNQUFNLE9BQU8sY0FBZSxTQUFRLFNBQVM7OztZQWI1QyxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osaUJBQWlCO2lCQUNqQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1YsbUJBQW1CO29CQUVuQix3QkFBd0I7b0JBQ3hCLGdCQUFnQjtvQkFDaEIsY0FBYztpQkFDZDthQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEFwaU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEZpZWxkUmVhZE1vZGVsUmVwb3NpdG9yeSB9IGZyb20gJy4vcmVhZC9maWVsZC5yZWFkLW1vZGVsLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgRmllbGRVaUNvbnZlcnRlciB9IGZyb20gJy4vcmVhZC9maWVsZC51aS1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgRmllbGREb21haW5Nb2R1bGUgfSBmcm9tICcuLi9kb21haW4vZmllbGQuZG9tYWluLW1vZHVsZSc7XG5pbXBvcnQgeyBGaWVsZENvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi9maWVsZC5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgRmllbGRXYXJlaG91c2UgfSBmcm9tICcuL2ZpZWxkLndhcmVob3VzZSc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0RmllbGREb21haW5Nb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0RmllbGRDb21tYW5kSW52b2tlcixcblxuXHRcdEZpZWxkUmVhZE1vZGVsUmVwb3NpdG9yeSxcblx0XHRGaWVsZFVpQ29udmVydGVyLFxuXHRcdEZpZWxkV2FyZWhvdXNlXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRmllbGRBcGlNb2R1bGUgZXh0ZW5kcyBBcGlNb2R1bGUge1xufVxuIl19