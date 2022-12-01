import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class GuiGridRegister {
    constructor() {
        this.gridMap = new Map();
    }
    // structureId: StructureId
    register(gridId, component, structureId) {
        this.gridMap.set(gridId, { component, structureId });
    }
    unregister(gridId) {
        this.gridMap.delete(gridId);
    }
    getValues(gridId) {
        return this.gridMap.get(gridId);
    }
}
GuiGridRegister.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: GuiGridRegister, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
GuiGridRegister.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: GuiGridRegister });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: GuiGridRegister, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQucmVnaXN0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2d1aS9ncmlkL3NyYy9mZWF0dXJlL3JlZ2lzdGVyL2d1aS5ncmlkLnJlZ2lzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxlQUFlO0lBRDVCO1FBR2tCLFlBQU8sR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0tBZXJDO0lBYkEsMkJBQTJCO0lBQzNCLFFBQVEsQ0FBQyxNQUFjLEVBQUUsU0FBMkIsRUFBRSxXQUFnQjtRQUNyRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsVUFBVSxDQUFDLE1BQWM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELFNBQVMsQ0FBQyxNQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7NEdBZlcsZUFBZTtnSEFBZixlQUFlOzJGQUFmLGVBQWU7a0JBRDNCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEd1aUdyaWRDb21wb25lbnQgfSBmcm9tICcuLi9ndWkuZ3JpZC5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR3VpR3JpZFJlZ2lzdGVyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGdyaWRNYXAgPSBuZXcgTWFwKCk7XG5cblx0Ly8gc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkXG5cdHJlZ2lzdGVyKGdyaWRJZDogc3RyaW5nLCBjb21wb25lbnQ6IEd1aUdyaWRDb21wb25lbnQsIHN0cnVjdHVyZUlkOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLmdyaWRNYXAuc2V0KGdyaWRJZCwgeyBjb21wb25lbnQsIHN0cnVjdHVyZUlkIH0pO1xuXHR9XG5cblx0dW5yZWdpc3RlcihncmlkSWQ6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuZ3JpZE1hcC5kZWxldGUoZ3JpZElkKTtcblx0fVxuXG5cdGdldFZhbHVlcyhncmlkSWQ6IHN0cmluZyk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuZ3JpZE1hcC5nZXQoZ3JpZElkKTtcblx0fVxuXG59XG4iXX0=