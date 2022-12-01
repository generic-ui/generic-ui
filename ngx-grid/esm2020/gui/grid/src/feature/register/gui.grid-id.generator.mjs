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
GuiGridIdGenerator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: GuiGridIdGenerator, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
GuiGridIdGenerator.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: GuiGridIdGenerator });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: GuiGridIdGenerator, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQtaWQuZ2VuZXJhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9ndWkvZ3JpZC9zcmMvZmVhdHVyZS9yZWdpc3Rlci9ndWkuZ3JpZC1pZC5nZW5lcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHM0MsTUFBTSxPQUFPLGtCQUFrQjtJQU05QixVQUFVO1FBQ1Qsa0JBQWtCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFM0IsT0FBTyxrQkFBa0IsQ0FBQyxNQUFNLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDO0lBQzdELENBQUM7O0FBUnVCLHlCQUFNLEdBQUcsV0FBVyxDQUFDO0FBRTlCLHdCQUFLLEdBQUcsQ0FBQyxDQUFDOytHQUpiLGtCQUFrQjttSEFBbEIsa0JBQWtCOzJGQUFsQixrQkFBa0I7a0JBRDlCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHdWlHcmlkSWRHZW5lcmF0b3Ige1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFBSRUZJWCA9ICdndWktZ3JpZC0nO1xuXG5cdHByaXZhdGUgc3RhdGljIGluZGV4ID0gMDtcblxuXHRnZW5lcmF0ZUlkKCk6IHN0cmluZyB7XG5cdFx0R3VpR3JpZElkR2VuZXJhdG9yLmluZGV4Kys7XG5cblx0XHRyZXR1cm4gR3VpR3JpZElkR2VuZXJhdG9yLlBSRUZJWCArIEd1aUdyaWRJZEdlbmVyYXRvci5pbmRleDtcblx0fVxufVxuIl19