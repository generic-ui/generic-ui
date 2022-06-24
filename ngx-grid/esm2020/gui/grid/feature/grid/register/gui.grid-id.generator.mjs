import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class GuiGridIdGenerator {
    generateId() {
        GuiGridIdGenerator.index++;
        return GuiGridIdGenerator.PREFIX + GuiGridIdGenerator.index;
    }
}
GuiGridIdGenerator.PREFIX = 'gui-grid-';
GuiGridIdGenerator.index = 0;
GuiGridIdGenerator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GuiGridIdGenerator, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
GuiGridIdGenerator.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GuiGridIdGenerator });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GuiGridIdGenerator, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQtaWQuZ2VuZXJhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9ndWkvZ3JpZC9mZWF0dXJlL2dyaWQvcmVnaXN0ZXIvZ3VpLmdyaWQtaWQuZ2VuZXJhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNDLE1BQU0sT0FBTyxrQkFBa0I7SUFNOUIsVUFBVTtRQUNULGtCQUFrQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBRTNCLE9BQU8sa0JBQWtCLENBQUMsTUFBTSxHQUFHLGtCQUFrQixDQUFDLEtBQUssQ0FBQztJQUM3RCxDQUFDOztBQVJ1Qix5QkFBTSxHQUFHLFdBQVksQ0FBQTtBQUU5Qix3QkFBSyxHQUFHLENBQUUsQ0FBQTtnSEFKYixrQkFBa0I7b0hBQWxCLGtCQUFrQjs0RkFBbEIsa0JBQWtCO2tCQUQ5QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR3VpR3JpZElkR2VuZXJhdG9yIHtcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBQUkVGSVggPSAnZ3VpLWdyaWQtJztcblxuXHRwcml2YXRlIHN0YXRpYyBpbmRleCA9IDA7XG5cblx0Z2VuZXJhdGVJZCgpOiBzdHJpbmcge1xuXHRcdEd1aUdyaWRJZEdlbmVyYXRvci5pbmRleCsrO1xuXG5cdFx0cmV0dXJuIEd1aUdyaWRJZEdlbmVyYXRvci5QUkVGSVggKyBHdWlHcmlkSWRHZW5lcmF0b3IuaW5kZXg7XG5cdH1cbn1cbiJdfQ==