import { Injectable } from '@angular/core';
import { SchemaTheme } from '../../../../core/schema/src/api/theme/schema-theme';
import { SchemaRowColoring } from '../../../../core/schema/src/api/row-coloring/schema-row-coloring';
import { ClassModifier } from '../../../../feature/common/component/src/dom/class/class-modifier';
import { Reactive } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/schema/src/api/schema.warehouse";
export class SchemaCssClassManager extends Reactive {
    schemaReadModelRepository;
    static VERTICAL_GRID_CLASS_NAME = 'gui-vertical-grid';
    static HORIZONTAL_GRID_CLASS_NAME = 'gui-horizontal-grid';
    static THEME_FABRIC_CLASS_NAME = 'gui-fabric';
    static THEME_MATERIAL_CLASS_NAME = 'gui-material';
    static THEME_LIGHT_CLASS_NAME = 'gui-light';
    static THEME_DARK_CLASS_NAME = 'gui-dark';
    static THEME_GENERIC_CLASS_NAME = 'gui-generic';
    static ROW_COLORING_ODD = 'gui-rows-odd';
    static ROW_COLORING_EVEN = 'gui-rows-even';
    classModifier;
    cssClass = null;
    cssHostRef;
    constructor(schemaReadModelRepository) {
        super();
        this.schemaReadModelRepository = schemaReadModelRepository;
        this.classModifier = new ClassModifier();
    }
    init(elementRef, schemaReadModelRootId) {
        this.cssHostRef = elementRef;
        this.schemaReadModelRepository
            .onCssClasses(schemaReadModelRootId)
            .pipe(this.hermesTakeUntil())
            .subscribe((classes) => {
            const diff = this.updateState(classes);
            this.renderCssClasses(diff);
        });
    }
    updateState(css) {
        if (!this.cssClass) {
            this.cssClass = css;
            return this.cssClass;
        }
        else {
            const diff = {};
            Object.keys(this.cssClass)
                .forEach((key) => {
                if (css[key] !== this.cssClass[key]) {
                    diff[key] = css[key];
                }
            });
            this.cssClass = css;
            return diff;
        }
    }
    renderCssClasses(diff) {
        if (diff.hasOwnProperty('verticalGrid')) {
            this.toggleCssClass(diff.verticalGrid, SchemaCssClassManager.VERTICAL_GRID_CLASS_NAME);
        }
        if (diff.hasOwnProperty('horizontalGrid')) {
            this.toggleCssClass(diff.horizontalGrid, SchemaCssClassManager.HORIZONTAL_GRID_CLASS_NAME);
        }
        if (diff.hasOwnProperty('theme')) {
            this.removeThemeCssClasses();
            this.addClass(this.resolveThemeClassName(diff.theme));
        }
        if (diff.hasOwnProperty('rowColoring')) {
            this.removeRowColoringClasses();
            this.addClass(this.resolveRowColoringClassName(diff.rowColoring));
        }
    }
    toggleCssClass(toggle, cssClassName) {
        if (toggle) {
            this.addClass(cssClassName);
        }
        else {
            this.removeClass(cssClassName);
        }
    }
    removeThemeCssClasses() {
        Object.keys(SchemaTheme)
            .map((key) => SchemaTheme[key])
            .map((theme) => this.resolveThemeClassName(theme))
            .filter((className) => !!className)
            .forEach((className) => {
            this.removeClass(className);
        });
    }
    resolveThemeClassName(theme) {
        switch (theme) {
            case SchemaTheme.FABRIC:
            case SchemaTheme[SchemaTheme.FABRIC]:
                return SchemaCssClassManager.THEME_FABRIC_CLASS_NAME;
            case SchemaTheme.MATERIAL:
            case SchemaTheme[SchemaTheme.MATERIAL]:
                return SchemaCssClassManager.THEME_MATERIAL_CLASS_NAME;
            case SchemaTheme.LIGHT:
            case SchemaTheme[SchemaTheme.LIGHT]:
                return SchemaCssClassManager.THEME_LIGHT_CLASS_NAME;
            case SchemaTheme.DARK:
            case SchemaTheme[SchemaTheme.DARK]:
                return SchemaCssClassManager.THEME_DARK_CLASS_NAME;
            case SchemaTheme.GENERIC:
            case SchemaTheme[SchemaTheme.GENERIC]:
                return SchemaCssClassManager.THEME_GENERIC_CLASS_NAME;
            default:
                return SchemaCssClassManager.THEME_FABRIC_CLASS_NAME;
        }
    }
    resolveRowColoringClassName(coloring) {
        switch (coloring) {
            case SchemaRowColoring.ODD:
            case SchemaRowColoring[SchemaRowColoring.ODD]:
                return SchemaCssClassManager.ROW_COLORING_ODD;
            case SchemaRowColoring.EVEN:
            case SchemaRowColoring[SchemaRowColoring.EVEN]:
                return SchemaCssClassManager.ROW_COLORING_EVEN;
            default:
                return null;
        }
    }
    removeRowColoringClasses() {
        Object.keys(SchemaRowColoring)
            .map((key) => SchemaRowColoring[key])
            .map((coloring) => this.resolveRowColoringClassName(coloring))
            .filter((className) => !!className)
            .forEach((className) => {
            this.removeClass(className);
        });
    }
    addClass(cssClassName) {
        if (cssClassName) {
            this.classModifier.getElement(this.cssHostRef.nativeElement).add(cssClassName);
        }
    }
    removeClass(cssClassName) {
        if (cssClassName) {
            this.classModifier.getElement(this.cssHostRef.nativeElement).remove(cssClassName);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SchemaCssClassManager, deps: [{ token: i1.SchemaWarehouse }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SchemaCssClassManager });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SchemaCssClassManager, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.SchemaWarehouse }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWNzcy1jbGFzcy5tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L3NyYy9zY2hlbWEvc2NoZW1hLWNzcy1jbGFzcy5tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBR3JHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUNsRyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQUk5QyxNQUFNLE9BQU8scUJBQXNCLFNBQVEsUUFBUTtJQTBCckI7SUF4QnJCLE1BQU0sQ0FBVSx3QkFBd0IsR0FBRyxtQkFBbUIsQ0FBQztJQUUvRCxNQUFNLENBQVUsMEJBQTBCLEdBQUcscUJBQXFCLENBQUM7SUFFbkUsTUFBTSxDQUFVLHVCQUF1QixHQUFHLFlBQVksQ0FBQztJQUV2RCxNQUFNLENBQVUseUJBQXlCLEdBQUcsY0FBYyxDQUFDO0lBRTNELE1BQU0sQ0FBVSxzQkFBc0IsR0FBRyxXQUFXLENBQUM7SUFFckQsTUFBTSxDQUFVLHFCQUFxQixHQUFHLFVBQVUsQ0FBQztJQUVuRCxNQUFNLENBQVUsd0JBQXdCLEdBQUcsYUFBYSxDQUFDO0lBRXpELE1BQU0sQ0FBVSxnQkFBZ0IsR0FBRyxjQUFjLENBQUM7SUFFbEQsTUFBTSxDQUFVLGlCQUFpQixHQUFHLGVBQWUsQ0FBQztJQUUzQyxhQUFhLENBQWdCO0lBRXRDLFFBQVEsR0FBbUIsSUFBSSxDQUFDO0lBRWhDLFVBQVUsQ0FBYTtJQUUvQixZQUE2Qix5QkFBMEM7UUFD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QUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNsRjtJQUNGLENBQUM7d0dBNUtXLHFCQUFxQjs0R0FBckIscUJBQXFCOzs0RkFBckIscUJBQXFCO2tCQURqQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTY2hlbWFDc3NDbGFzcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc2NoZW1hL3NyYy9hcGkvY3NzLWNsYXNzZXMvc2NoZW1hLWNzcy1jbGFzcyc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc2NoZW1hL3NyYy9hcGkvdGhlbWUvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zY2hlbWEvc3JjL2FwaS9yb3ctY29sb3Jpbmcvc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBTY2hlbWFXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3NjaGVtYS9zcmMvYXBpL3NjaGVtYS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zY2hlbWEvc3JjL2FwaS9nbG9iYWwvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBDbGFzc01vZGlmaWVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY29tcG9uZW50L3NyYy9kb20vY2xhc3MvY2xhc3MtbW9kaWZpZXInO1xuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY2hlbWFDc3NDbGFzc01hbmFnZXIgZXh0ZW5kcyBSZWFjdGl2ZSB7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgVkVSVElDQUxfR1JJRF9DTEFTU19OQU1FID0gJ2d1aS12ZXJ0aWNhbC1ncmlkJztcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBIT1JJWk9OVEFMX0dSSURfQ0xBU1NfTkFNRSA9ICdndWktaG9yaXpvbnRhbC1ncmlkJztcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBUSEVNRV9GQUJSSUNfQ0xBU1NfTkFNRSA9ICdndWktZmFicmljJztcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBUSEVNRV9NQVRFUklBTF9DTEFTU19OQU1FID0gJ2d1aS1tYXRlcmlhbCc7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgVEhFTUVfTElHSFRfQ0xBU1NfTkFNRSA9ICdndWktbGlnaHQnO1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFRIRU1FX0RBUktfQ0xBU1NfTkFNRSA9ICdndWktZGFyayc7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgVEhFTUVfR0VORVJJQ19DTEFTU19OQU1FID0gJ2d1aS1nZW5lcmljJztcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBST1dfQ09MT1JJTkdfT0REID0gJ2d1aS1yb3dzLW9kZCc7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgUk9XX0NPTE9SSU5HX0VWRU4gPSAnZ3VpLXJvd3MtZXZlbic7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjbGFzc01vZGlmaWVyOiBDbGFzc01vZGlmaWVyO1xuXG5cdHByaXZhdGUgY3NzQ2xhc3M6IFNjaGVtYUNzc0NsYXNzID0gbnVsbDtcblxuXHRwcml2YXRlIGNzc0hvc3RSZWY6IEVsZW1lbnRSZWY7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzY2hlbWFSZWFkTW9kZWxSZXBvc2l0b3J5OiBTY2hlbWFXYXJlaG91c2UpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuY2xhc3NNb2RpZmllciA9IG5ldyBDbGFzc01vZGlmaWVyKCk7XG5cdH1cblxuXHRpbml0KGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHNjaGVtYVJlYWRNb2RlbFJvb3RJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkKTogdm9pZCB7XG5cblx0XHR0aGlzLmNzc0hvc3RSZWYgPSBlbGVtZW50UmVmO1xuXG5cdFx0dGhpcy5zY2hlbWFSZWFkTW9kZWxSZXBvc2l0b3J5XG5cdFx0XHQub25Dc3NDbGFzc2VzKHNjaGVtYVJlYWRNb2RlbFJvb3RJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLmhlcm1lc1Rha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChjbGFzc2VzOiBTY2hlbWFDc3NDbGFzcykgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGRpZmYgPSB0aGlzLnVwZGF0ZVN0YXRlKGNsYXNzZXMpO1xuXG5cdFx0XHRcdHRoaXMucmVuZGVyQ3NzQ2xhc3NlcyhkaWZmKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSB1cGRhdGVTdGF0ZShjc3M6IFNjaGVtYUNzc0NsYXNzKTogUGFydGlhbDxTY2hlbWFDc3NDbGFzcz4ge1xuXG5cdFx0aWYgKCF0aGlzLmNzc0NsYXNzKSB7XG5cdFx0XHR0aGlzLmNzc0NsYXNzID0gY3NzO1xuXHRcdFx0cmV0dXJuIHRoaXMuY3NzQ2xhc3M7XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Y29uc3QgZGlmZiA9IHt9O1xuXG5cdFx0XHRPYmplY3Qua2V5cyh0aGlzLmNzc0NsYXNzKVxuXHRcdFx0XHQgIC5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuXHRcdFx0XHRcdCAgaWYgKGNzc1trZXldICE9PSB0aGlzLmNzc0NsYXNzW2tleV0pIHtcblx0XHRcdFx0XHRcdCAgZGlmZltrZXldID0gY3NzW2tleV07XG5cdFx0XHRcdFx0ICB9XG5cdFx0XHRcdCAgfSk7XG5cblx0XHRcdHRoaXMuY3NzQ2xhc3MgPSBjc3M7XG5cblx0XHRcdHJldHVybiBkaWZmO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcmVuZGVyQ3NzQ2xhc3NlcyhkaWZmOiBQYXJ0aWFsPFNjaGVtYUNzc0NsYXNzPik6IHZvaWQge1xuXG5cdFx0aWYgKGRpZmYuaGFzT3duUHJvcGVydHkoJ3ZlcnRpY2FsR3JpZCcpKSB7XG5cdFx0XHR0aGlzLnRvZ2dsZUNzc0NsYXNzKGRpZmYudmVydGljYWxHcmlkLCBTY2hlbWFDc3NDbGFzc01hbmFnZXIuVkVSVElDQUxfR1JJRF9DTEFTU19OQU1FKTtcblx0XHR9XG5cblx0XHRpZiAoZGlmZi5oYXNPd25Qcm9wZXJ0eSgnaG9yaXpvbnRhbEdyaWQnKSkge1xuXHRcdFx0dGhpcy50b2dnbGVDc3NDbGFzcyhkaWZmLmhvcml6b250YWxHcmlkLCBTY2hlbWFDc3NDbGFzc01hbmFnZXIuSE9SSVpPTlRBTF9HUklEX0NMQVNTX05BTUUpO1xuXHRcdH1cblxuXHRcdGlmIChkaWZmLmhhc093blByb3BlcnR5KCd0aGVtZScpKSB7XG5cdFx0XHR0aGlzLnJlbW92ZVRoZW1lQ3NzQ2xhc3NlcygpO1xuXHRcdFx0dGhpcy5hZGRDbGFzcyh0aGlzLnJlc29sdmVUaGVtZUNsYXNzTmFtZShkaWZmLnRoZW1lKSk7XG5cdFx0fVxuXG5cdFx0aWYgKGRpZmYuaGFzT3duUHJvcGVydHkoJ3Jvd0NvbG9yaW5nJykpIHtcblx0XHRcdHRoaXMucmVtb3ZlUm93Q29sb3JpbmdDbGFzc2VzKCk7XG5cdFx0XHR0aGlzLmFkZENsYXNzKHRoaXMucmVzb2x2ZVJvd0NvbG9yaW5nQ2xhc3NOYW1lKGRpZmYucm93Q29sb3JpbmcpKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHRvZ2dsZUNzc0NsYXNzKHRvZ2dsZTogYm9vbGVhbiwgY3NzQ2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAodG9nZ2xlKSB7XG5cdFx0XHR0aGlzLmFkZENsYXNzKGNzc0NsYXNzTmFtZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoY3NzQ2xhc3NOYW1lKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZVRoZW1lQ3NzQ2xhc3NlcygpOiB2b2lkIHtcblx0XHRPYmplY3Qua2V5cyhTY2hlbWFUaGVtZSlcblx0XHRcdCAgLm1hcCgoa2V5OiBzdHJpbmcpID0+IFNjaGVtYVRoZW1lW2tleV0pXG5cdFx0XHQgIC5tYXAoKHRoZW1lOiBTY2hlbWFUaGVtZSkgPT4gdGhpcy5yZXNvbHZlVGhlbWVDbGFzc05hbWUodGhlbWUpKVxuXHRcdFx0ICAuZmlsdGVyKChjbGFzc05hbWU6IHN0cmluZykgPT4gISFjbGFzc05hbWUpXG5cdFx0XHQgIC5mb3JFYWNoKChjbGFzc05hbWU6IHN0cmluZykgPT4ge1xuXHRcdFx0XHQgIHRoaXMucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcblx0XHRcdCAgfSk7XG5cdH1cblxuXHRwcml2YXRlIHJlc29sdmVUaGVtZUNsYXNzTmFtZSh0aGVtZTogU2NoZW1hVGhlbWUgfCBzdHJpbmcpOiBzdHJpbmcge1xuXG5cdFx0c3dpdGNoICh0aGVtZSkge1xuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5GQUJSSUM6XG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lW1NjaGVtYVRoZW1lLkZBQlJJQ106XG5cdFx0XHRcdHJldHVybiBTY2hlbWFDc3NDbGFzc01hbmFnZXIuVEhFTUVfRkFCUklDX0NMQVNTX05BTUU7XG5cblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuTUFURVJJQUw6XG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lW1NjaGVtYVRoZW1lLk1BVEVSSUFMXTpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYUNzc0NsYXNzTWFuYWdlci5USEVNRV9NQVRFUklBTF9DTEFTU19OQU1FO1xuXG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lLkxJR0hUOlxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZVtTY2hlbWFUaGVtZS5MSUdIVF06XG5cdFx0XHRcdHJldHVybiBTY2hlbWFDc3NDbGFzc01hbmFnZXIuVEhFTUVfTElHSFRfQ0xBU1NfTkFNRTtcblxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5EQVJLOlxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZVtTY2hlbWFUaGVtZS5EQVJLXTpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYUNzc0NsYXNzTWFuYWdlci5USEVNRV9EQVJLX0NMQVNTX05BTUU7XG5cblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuR0VORVJJQzpcblx0XHRcdGNhc2UgU2NoZW1hVGhlbWVbU2NoZW1hVGhlbWUuR0VORVJJQ106XG5cdFx0XHRcdHJldHVybiBTY2hlbWFDc3NDbGFzc01hbmFnZXIuVEhFTUVfR0VORVJJQ19DTEFTU19OQU1FO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hQ3NzQ2xhc3NNYW5hZ2VyLlRIRU1FX0ZBQlJJQ19DTEFTU19OQU1FO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcmVzb2x2ZVJvd0NvbG9yaW5nQ2xhc3NOYW1lKGNvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZyB8IHN0cmluZyk6IHN0cmluZyB7XG5cdFx0c3dpdGNoIChjb2xvcmluZykge1xuXHRcdFx0Y2FzZSBTY2hlbWFSb3dDb2xvcmluZy5PREQ6XG5cdFx0XHRjYXNlIFNjaGVtYVJvd0NvbG9yaW5nW1NjaGVtYVJvd0NvbG9yaW5nLk9ERF06XG5cdFx0XHRcdHJldHVybiBTY2hlbWFDc3NDbGFzc01hbmFnZXIuUk9XX0NPTE9SSU5HX09ERDtcblxuXHRcdFx0Y2FzZSBTY2hlbWFSb3dDb2xvcmluZy5FVkVOOlxuXHRcdFx0Y2FzZSBTY2hlbWFSb3dDb2xvcmluZ1tTY2hlbWFSb3dDb2xvcmluZy5FVkVOXTpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYUNzc0NsYXNzTWFuYWdlci5ST1dfQ09MT1JJTkdfRVZFTjtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSByZW1vdmVSb3dDb2xvcmluZ0NsYXNzZXMoKTogdm9pZCB7XG5cdFx0T2JqZWN0LmtleXMoU2NoZW1hUm93Q29sb3JpbmcpXG5cdFx0XHQgIC5tYXAoKGtleTogc3RyaW5nKSA9PiBTY2hlbWFSb3dDb2xvcmluZ1trZXldKVxuXHRcdFx0ICAubWFwKChjb2xvcmluZzogU2NoZW1hUm93Q29sb3JpbmcpID0+IHRoaXMucmVzb2x2ZVJvd0NvbG9yaW5nQ2xhc3NOYW1lKGNvbG9yaW5nKSlcblx0XHRcdCAgLmZpbHRlcigoY2xhc3NOYW1lOiBzdHJpbmcpID0+ICEhY2xhc3NOYW1lKVxuXHRcdFx0ICAuZm9yRWFjaCgoY2xhc3NOYW1lOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0ICB0aGlzLnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XG5cdFx0XHQgIH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBhZGRDbGFzcyhjc3NDbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdGlmIChjc3NDbGFzc05hbWUpIHtcblx0XHRcdHRoaXMuY2xhc3NNb2RpZmllci5nZXRFbGVtZW50KHRoaXMuY3NzSG9zdFJlZi5uYXRpdmVFbGVtZW50KS5hZGQoY3NzQ2xhc3NOYW1lKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZUNsYXNzKGNzc0NsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKGNzc0NsYXNzTmFtZSkge1xuXHRcdFx0dGhpcy5jbGFzc01vZGlmaWVyLmdldEVsZW1lbnQodGhpcy5jc3NIb3N0UmVmLm5hdGl2ZUVsZW1lbnQpLnJlbW92ZShjc3NDbGFzc05hbWUpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=