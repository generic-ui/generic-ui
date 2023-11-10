import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../../feature/common/component/src/gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../core/l10n/src/api/translation.facade";
export class ListViewL10nGate extends Gate {
    translationService;
    localization;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ListViewL10nGate, deps: [{ token: i1.TranslationFacade }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: ListViewL10nGate, selector: "gui-list-view[localization]", inputs: { localization: "localization" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ListViewL10nGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-list-view[localization]'
                }]
        }], ctorParameters: function () { return [{ type: i1.TranslationFacade }]; }, propDecorators: { localization: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LWwxMG4uZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS12aWV3L2xpc3Qtdmlldy9zcmMvZ2F0ZS9sMTBuL2xpc3Qtdmlldy1sMTBuLmdhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFHNUQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGtEQUFrRCxDQUFDOzs7QUFTeEUsTUFBTSxPQUFPLGdCQUFpQixTQUFRLElBQUk7SUFLWjtJQUY3QixZQUFZLENBQXNCO0lBRWxDLFlBQTZCLGtCQUFxQztRQUNqRSxLQUFLLEVBQUUsQ0FBQztRQURvQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO0lBRWxFLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBb0M7UUFFL0MsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUU1QyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2FBQzNFO1lBRUQsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDekU7U0FDRDtJQUNGLENBQUM7d0dBckJXLGdCQUFnQjs0RkFBaEIsZ0JBQWdCOzs0RkFBaEIsZ0JBQWdCO2tCQUg1QixTQUFTO21CQUFDO29CQUNWLFFBQVEsRUFBRSw2QkFBNkI7aUJBQ3ZDO3dHQUlBLFlBQVk7c0JBRFgsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jb21wb25lbnQvc3JjL2dhdGUnO1xuaW1wb3J0IHsgR3VpTGlzdExvY2FsaXphdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2d1aS9saXN0L3NyYy9jb3JlL2FwaS9ndWkubGlzdC5wdWJsaWMtYXBpJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uRmFjYWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9sMTBuL3NyYy9hcGkvdHJhbnNsYXRpb24uZmFjYWRlJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL2NvbXBvbmVudC9zcmMvbmctY2hhbmdlcyc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLWxpc3Qtdmlld1tsb2NhbGl6YXRpb25dJ1xufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0wxMG5HYXRlIGV4dGVuZHMgR2F0ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0bG9jYWxpemF0aW9uOiBHdWlMaXN0TG9jYWxpemF0aW9uO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvbkZhY2FkZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8TGlzdFZpZXdMMTBuR2F0ZT4pIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgnbG9jYWxpemF0aW9uJywgY2hhbmdlcykpIHtcblxuXHRcdFx0aWYgKHRoaXMubG9jYWxpemF0aW9uLnRyYW5zbGF0aW9uUmVzb2x2ZXIpIHtcblx0XHRcdFx0dGhpcy50cmFuc2xhdGlvblNlcnZpY2Uuc2V0UmVzb2x2ZXIodGhpcy5sb2NhbGl6YXRpb24udHJhbnNsYXRpb25SZXNvbHZlcik7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLmxvY2FsaXphdGlvbi50cmFuc2xhdGlvbikge1xuXHRcdFx0XHR0aGlzLnRyYW5zbGF0aW9uU2VydmljZS5jaGFuZ2VUcmFuc2xhdGlvbih0aGlzLmxvY2FsaXphdGlvbi50cmFuc2xhdGlvbik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==