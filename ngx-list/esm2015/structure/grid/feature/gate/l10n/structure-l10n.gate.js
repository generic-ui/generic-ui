import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../../common/cdk/component/gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../l10n/core/api/translation.facade";
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
StructureL10nGate.ɵfac = function StructureL10nGate_Factory(t) { return new (t || StructureL10nGate)(i0.ɵɵdirectiveInject(i1.TranslationFacade)); };
StructureL10nGate.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: StructureL10nGate, selectors: [["gui-structure", "localization", ""]], inputs: { localization: "localization" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureL10nGate, [{
        type: Directive,
        args: [{
                selector: 'gui-structure[localization]'
            }]
    }], function () { return [{ type: i1.TranslationFacade }]; }, { localization: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWwxMG4uZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL2dyaWQvZmVhdHVyZS9nYXRlL2wxMG4vc3RydWN0dXJlLWwxMG4uZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sMENBQTBDLENBQUM7OztBQVFoRSxNQUFNLE9BQU8saUJBQWtCLFNBQVEsSUFBSTtJQUsxQyxZQUE2QixrQkFBcUM7UUFDakUsS0FBSyxFQUFFLENBQUM7UUFEb0IsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtJQUVsRSxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXFDO1FBRWhELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDNUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFO2dCQUMxQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsQ0FBQzthQUMzRTtZQUVELElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3pFO1NBQ0Q7SUFDRixDQUFDOztrRkFwQlcsaUJBQWlCO29FQUFqQixpQkFBaUI7dUZBQWpCLGlCQUFpQjtjQUg3QixTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLDZCQUE2QjthQUN2QztvRUFJQSxZQUFZO2tCQURYLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L2dhdGUnO1xuaW1wb3J0IHsgR3VpTG9jYWxpemF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZ3VpL2dyaWQvY29yZS9hcGkvZ3VpLmdyaWQucHVibGljLWFwaSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkZhY2FkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2wxMG4vY29yZS9hcGkvdHJhbnNsYXRpb24uZmFjYWRlJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlW2xvY2FsaXphdGlvbl0nXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUwxMG5HYXRlIGV4dGVuZHMgR2F0ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0bG9jYWxpemF0aW9uOiBHdWlMb2NhbGl6YXRpb247XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSB0cmFuc2xhdGlvblNlcnZpY2U6IFRyYW5zbGF0aW9uRmFjYWRlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxTdHJ1Y3R1cmVMMTBuR2F0ZT4pIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgnbG9jYWxpemF0aW9uJywgY2hhbmdlcykpIHtcblx0XHRcdGlmICh0aGlzLmxvY2FsaXphdGlvbi50cmFuc2xhdGlvblJlc29sdmVyKSB7XG5cdFx0XHRcdHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLnNldFJlc29sdmVyKHRoaXMubG9jYWxpemF0aW9uLnRyYW5zbGF0aW9uUmVzb2x2ZXIpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5sb2NhbGl6YXRpb24udHJhbnNsYXRpb24pIHtcblx0XHRcdFx0dGhpcy50cmFuc2xhdGlvblNlcnZpY2UuY2hhbmdlVHJhbnNsYXRpb24odGhpcy5sb2NhbGl6YXRpb24udHJhbnNsYXRpb24pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG59XG4iXX0=