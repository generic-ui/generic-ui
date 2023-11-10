import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../../../feature/common/component/src/gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../../core/l10n/src/api/translation.facade";
export class StructureL10nGate extends Gate {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureL10nGate, deps: [{ token: i1.TranslationFacade }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: StructureL10nGate, selector: "gui-structure[localization]", inputs: { localization: "localization" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureL10nGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[localization]'
                }]
        }], ctorParameters: function () { return [{ type: i1.TranslationFacade }]; }, propDecorators: { localization: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWwxMG4uZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9zcmMvc3RydWN0dXJlL2dhdGUvbDEwbi9zdHJ1Y3R1cmUtbDEwbi5nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRTVELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxxREFBcUQsQ0FBQzs7O0FBUTNFLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxJQUFJO0lBS2I7SUFGN0IsWUFBWSxDQUFrQjtJQUU5QixZQUE2QixrQkFBcUM7UUFDakUsS0FBSyxFQUFFLENBQUM7UUFEb0IsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtJQUVsRSxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXFDO1FBRWhELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDNUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFO2dCQUMxQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsQ0FBQzthQUMzRTtZQUVELElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3pFO1NBQ0Q7SUFDRixDQUFDO3dHQXBCVyxpQkFBaUI7NEZBQWpCLGlCQUFpQjs7NEZBQWpCLGlCQUFpQjtrQkFIN0IsU0FBUzttQkFBQztvQkFDVixRQUFRLEVBQUUsNkJBQTZCO2lCQUN2Qzt3R0FJQSxZQUFZO3NCQURYLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL2NvbXBvbmVudC9zcmMvZ2F0ZSc7XG5pbXBvcnQgeyBHdWlMb2NhbGl6YXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9ndWkvZ3JpZC9zcmMvY29yZS9hcGkvZ3VpLmdyaWQucHVibGljLWFwaSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkZhY2FkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvbDEwbi9zcmMvYXBpL3RyYW5zbGF0aW9uLmZhY2FkZSc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jb21wb25lbnQvc3JjL25nLWNoYW5nZXMnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlW2xvY2FsaXphdGlvbl0nXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUwxMG5HYXRlIGV4dGVuZHMgR2F0ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0bG9jYWxpemF0aW9uOiBHdWlMb2NhbGl6YXRpb247XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSB0cmFuc2xhdGlvblNlcnZpY2U6IFRyYW5zbGF0aW9uRmFjYWRlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxTdHJ1Y3R1cmVMMTBuR2F0ZT4pIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgnbG9jYWxpemF0aW9uJywgY2hhbmdlcykpIHtcblx0XHRcdGlmICh0aGlzLmxvY2FsaXphdGlvbi50cmFuc2xhdGlvblJlc29sdmVyKSB7XG5cdFx0XHRcdHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLnNldFJlc29sdmVyKHRoaXMubG9jYWxpemF0aW9uLnRyYW5zbGF0aW9uUmVzb2x2ZXIpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5sb2NhbGl6YXRpb24udHJhbnNsYXRpb24pIHtcblx0XHRcdFx0dGhpcy50cmFuc2xhdGlvblNlcnZpY2UuY2hhbmdlVHJhbnNsYXRpb24odGhpcy5sb2NhbGl6YXRpb24udHJhbnNsYXRpb24pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG59XG4iXX0=