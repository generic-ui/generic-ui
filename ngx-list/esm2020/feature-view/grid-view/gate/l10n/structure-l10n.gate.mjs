import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../feature/common/cdk/component/gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/l10n/api/translation.facade";
export class StructureL10nGate extends Gate {
    constructor(translationService) {
        super();
        this.translationService = translationService;
    }
    ngOnChanges(changes) {
        if (this.isDefined('localization', changes)) {
            if (this.localization.translationResolver) {
                this.translationService.setResolver(this.localization.translationResolver);
            }
            if (this.localization.translation) {
                this.translationService.changeTranslation(this.localization.translation);
            }
        }
    }
}
StructureL10nGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureL10nGate, deps: [{ token: i1.TranslationFacade }], target: i0.ɵɵFactoryTarget.Directive });
StructureL10nGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: StructureL10nGate, selector: "gui-structure[localization]", inputs: { localization: "localization" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureL10nGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[localization]'
                }]
        }], ctorParameters: function () { return [{ type: i1.TranslationFacade }]; }, propDecorators: { localization: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWwxMG4uZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9nYXRlL2wxMG4vc3RydWN0dXJlLWwxMG4uZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sK0NBQStDLENBQUM7OztBQVFyRSxNQUFNLE9BQU8saUJBQWtCLFNBQVEsSUFBSTtJQUsxQyxZQUE2QixrQkFBcUM7UUFDakUsS0FBSyxFQUFFLENBQUM7UUFEb0IsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtJQUVsRSxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXFDO1FBRWhELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDNUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFO2dCQUMxQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsQ0FBQzthQUMzRTtZQUVELElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3pFO1NBQ0Q7SUFDRixDQUFDOzsrR0FwQlcsaUJBQWlCO21HQUFqQixpQkFBaUI7NEZBQWpCLGlCQUFpQjtrQkFIN0IsU0FBUzttQkFBQztvQkFDVixRQUFRLEVBQUUsNkJBQTZCO2lCQUN2Qzt3R0FJQSxZQUFZO3NCQURYLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL2Nkay9jb21wb25lbnQvZ2F0ZSc7XG5pbXBvcnQgeyBHdWlMb2NhbGl6YXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9ndWkvZ3JpZC9jb3JlL2FwaS9ndWkuZ3JpZC5wdWJsaWMtYXBpJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uRmFjYWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9sMTBuL2FwaS90cmFuc2xhdGlvbi5mYWNhZGUnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZVtsb2NhbGl6YXRpb25dJ1xufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVMMTBuR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdGxvY2FsaXphdGlvbjogR3VpTG9jYWxpemF0aW9uO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvbkZhY2FkZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8U3RydWN0dXJlTDEwbkdhdGU+KSB7XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ2xvY2FsaXphdGlvbicsIGNoYW5nZXMpKSB7XG5cdFx0XHRpZiAodGhpcy5sb2NhbGl6YXRpb24udHJhbnNsYXRpb25SZXNvbHZlcikge1xuXHRcdFx0XHR0aGlzLnRyYW5zbGF0aW9uU2VydmljZS5zZXRSZXNvbHZlcih0aGlzLmxvY2FsaXphdGlvbi50cmFuc2xhdGlvblJlc29sdmVyKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMubG9jYWxpemF0aW9uLnRyYW5zbGF0aW9uKSB7XG5cdFx0XHRcdHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLmNoYW5nZVRyYW5zbGF0aW9uKHRoaXMubG9jYWxpemF0aW9uLnRyYW5zbGF0aW9uKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxufVxuIl19