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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuYXBpLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpZWxkL2RvbWFpbi1hcGkvZmllbGQuYXBpLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbkQ7SUFhb0MsMENBQVM7SUFiN0M7O0lBY0EsQ0FBQzs7Z0JBZEEsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLGlCQUFpQjtxQkFDakI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNWLG1CQUFtQjt3QkFFbkIsd0JBQXdCO3dCQUN4QixnQkFBZ0I7d0JBQ2hCLGNBQWM7cUJBQ2Q7aUJBQ0Q7O0lBRUQscUJBQUM7Q0FBQSxBQWRELENBYW9DLFNBQVMsR0FDNUM7U0FEWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEFwaU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEZpZWxkUmVhZE1vZGVsUmVwb3NpdG9yeSB9IGZyb20gJy4vcmVhZC9maWVsZC5yZWFkLW1vZGVsLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgRmllbGRVaUNvbnZlcnRlciB9IGZyb20gJy4vcmVhZC9maWVsZC51aS1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgRmllbGREb21haW5Nb2R1bGUgfSBmcm9tICcuLi9kb21haW4vZmllbGQuZG9tYWluLW1vZHVsZSc7XG5pbXBvcnQgeyBGaWVsZENvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi9maWVsZC5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgRmllbGRXYXJlaG91c2UgfSBmcm9tICcuL2ZpZWxkLndhcmVob3VzZSc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0RmllbGREb21haW5Nb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0RmllbGRDb21tYW5kSW52b2tlcixcblxuXHRcdEZpZWxkUmVhZE1vZGVsUmVwb3NpdG9yeSxcblx0XHRGaWVsZFVpQ29udmVydGVyLFxuXHRcdEZpZWxkV2FyZWhvdXNlXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRmllbGRBcGlNb2R1bGUgZXh0ZW5kcyBBcGlNb2R1bGUge1xufVxuIl19