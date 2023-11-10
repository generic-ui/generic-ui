import { FabricReactive } from '../fabric-reactive';
import { Directive } from '@angular/core';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { Theme } from '../../themes/theme';
import * as i0 from "@angular/core";
import * as i1 from "../../themes/fabric-modal-theme.service";
export class FabricThemedComponent extends FabricReactive {
    elementRef;
    renderer;
    themeService;
    static CSS_CLASS_PREFIX = 'gui-';
    constructor(elementRef, renderer, themeService) {
        super();
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.themeService = themeService;
    }
    ngAfterViewInit() {
        this.themeService
            .onTheme()
            .pipe(distinctUntilChanged(), takeUntil(this.unsubscribe$))
            .subscribe((theme) => {
            this.addTheme(theme);
        });
    }
    addTheme(theme) {
        this.removeThemes();
        const cssClass = FabricThemedComponent.CSS_CLASS_PREFIX + theme.toLowerCase();
        this.renderer.addClass(this.elementRef.nativeElement, cssClass);
    }
    removeThemes() {
        const themes = Object.keys(Theme)
            .map((key) => Theme[key].toLowerCase())
            .filter((val) => !Number.isInteger(val));
        themes.forEach((theme) => {
            const cssClass = FabricThemedComponent.CSS_CLASS_PREFIX + theme;
            this.renderer.removeClass(this.elementRef.nativeElement, cssClass);
        });
    }
    getElementRef() {
        return this.elementRef;
    }
    getRenderer() {
        return this.renderer;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FabricThemedComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.FabricModalThemeService }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: FabricThemedComponent, usesInheritance: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FabricThemedComponent, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.FabricModalThemeService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXRoZW1lZC1jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvY29tbW9uL21vZGFsL2ZhYnJpYy10aGVtZWQtY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQWlCLFNBQVMsRUFBeUIsTUFBTSxlQUFlLENBQUM7QUFHaEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7O0FBRzNDLE1BQU0sT0FBZ0IscUJBQXNCLFNBQVEsY0FBYztJQUkxQjtJQUNmO0lBQ0E7SUFKaEIsTUFBTSxDQUFVLGdCQUFnQixHQUFHLE1BQU0sQ0FBQztJQUVsRCxZQUF1QyxVQUFzQixFQUNyQyxRQUFtQixFQUNuQixZQUFxQztRQUM1RCxLQUFLLEVBQUUsQ0FBQztRQUg4QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3JDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsaUJBQVksR0FBWixZQUFZLENBQXlCO0lBRTdELENBQUM7SUFFRCxlQUFlO1FBQ2QsSUFBSSxDQUFDLFlBQVk7YUFDZixPQUFPLEVBQUU7YUFDVCxJQUFJLENBQ0osb0JBQW9CLEVBQUUsRUFDdEIsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDNUI7YUFDQSxTQUFTLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRTtZQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVTLFFBQVEsQ0FBQyxLQUFZO1FBQzlCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixNQUFNLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFOUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVTLFlBQVk7UUFDckIsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDMUIsR0FBRyxDQUFDLENBQUMsR0FBVyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDOUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUUvQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBYSxFQUFFLEVBQUU7WUFDaEMsTUFBTSxRQUFRLEdBQUcscUJBQXFCLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1lBQ2hFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3BFLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVTLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7SUFFUyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDO3dHQTlDb0IscUJBQXFCOzRGQUFyQixxQkFBcUI7OzRGQUFyQixxQkFBcUI7a0JBRDFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYWJyaWNSZWFjdGl2ZSB9IGZyb20gJy4uL2ZhYnJpYy1yZWFjdGl2ZSc7XG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGYWJyaWNNb2RhbFRoZW1lU2VydmljZSB9IGZyb20gJy4uLy4uL3RoZW1lcy9mYWJyaWMtbW9kYWwtdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZXMvdGhlbWUnO1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGYWJyaWNUaGVtZWRDb21wb25lbnQgZXh0ZW5kcyBGYWJyaWNSZWFjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IENTU19DTEFTU19QUkVGSVggPSAnZ3VpLSc7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0XHRcdCAgcHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyLFxuXHRcdFx0XHRcdFx0ICBwcml2YXRlIHJlYWRvbmx5IHRoZW1lU2VydmljZTogRmFicmljTW9kYWxUaGVtZVNlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuXHRcdHRoaXMudGhlbWVTZXJ2aWNlXG5cdFx0XHQub25UaGVtZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgodGhlbWU6IFRoZW1lKSA9PiB7XG5cdFx0XHRcdHRoaXMuYWRkVGhlbWUodGhlbWUpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgYWRkVGhlbWUodGhlbWU6IFRoZW1lKTogdm9pZCB7XG5cdFx0dGhpcy5yZW1vdmVUaGVtZXMoKTtcblx0XHRjb25zdCBjc3NDbGFzcyA9IEZhYnJpY1RoZW1lZENvbXBvbmVudC5DU1NfQ0xBU1NfUFJFRklYICsgdGhlbWUudG9Mb3dlckNhc2UoKTtcblxuXHRcdHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNzc0NsYXNzKTtcblx0fVxuXG5cdHByb3RlY3RlZCByZW1vdmVUaGVtZXMoKTogdm9pZCB7XG5cdFx0Y29uc3QgdGhlbWVzID0gT2JqZWN0LmtleXMoVGhlbWUpXG5cdFx0XHRcdFx0XHRcdCAubWFwKChrZXk6IHN0cmluZykgPT4gVGhlbWVba2V5XS50b0xvd2VyQ2FzZSgpKVxuXHRcdFx0XHRcdFx0XHQgLmZpbHRlcigodmFsKSA9PiAhTnVtYmVyLmlzSW50ZWdlcih2YWwpKTtcblxuXHRcdHRoZW1lcy5mb3JFYWNoKCh0aGVtZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRjb25zdCBjc3NDbGFzcyA9IEZhYnJpY1RoZW1lZENvbXBvbmVudC5DU1NfQ0xBU1NfUFJFRklYICsgdGhlbWU7XG5cdFx0XHR0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjc3NDbGFzcyk7XG5cdFx0fSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0RWxlbWVudFJlZigpOiBFbGVtZW50UmVmIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50UmVmO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFJlbmRlcmVyKCk6IFJlbmRlcmVyMiB7XG5cdFx0cmV0dXJuIHRoaXMucmVuZGVyZXI7XG5cdH1cbn1cblxuIl19