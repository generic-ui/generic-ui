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
GuiGridRegister.ɵfac = function GuiGridRegister_Factory(t) { return new (t || GuiGridRegister)(); };
GuiGridRegister.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: GuiGridRegister, factory: GuiGridRegister.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GuiGridRegister, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQucmVnaXN0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2d1aS9ncmlkL2ZlYXR1cmUvZ3JpZC9yZWdpc3Rlci9ndWkuZ3JpZC5yZWdpc3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszQyxNQUFNLE9BQU8sZUFBZTtJQUQ1QjtRQUdrQixZQUFPLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztLQWVyQztJQWJBLDJCQUEyQjtJQUMzQixRQUFRLENBQUMsTUFBYyxFQUFFLFNBQTJCLEVBQUUsV0FBZ0I7UUFDckUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELFVBQVUsQ0FBQyxNQUFjO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxTQUFTLENBQUMsTUFBYztRQUN2QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7OzhFQWZXLGVBQWU7cUVBQWYsZUFBZSxXQUFmLGVBQWU7dUZBQWYsZUFBZTtjQUQzQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHdWlHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi4vZ3VpLmdyaWQuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEd1aUdyaWRSZWdpc3RlciB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBncmlkTWFwID0gbmV3IE1hcCgpO1xuXG5cdC8vIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZFxuXHRyZWdpc3RlcihncmlkSWQ6IHN0cmluZywgY29tcG9uZW50OiBHdWlHcmlkQ29tcG9uZW50LCBzdHJ1Y3R1cmVJZDogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5ncmlkTWFwLnNldChncmlkSWQsIHsgY29tcG9uZW50LCBzdHJ1Y3R1cmVJZCB9KTtcblx0fVxuXG5cdHVucmVnaXN0ZXIoZ3JpZElkOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmdyaWRNYXAuZGVsZXRlKGdyaWRJZCk7XG5cdH1cblxuXHRnZXRWYWx1ZXMoZ3JpZElkOiBzdHJpbmcpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLmdyaWRNYXAuZ2V0KGdyaWRJZCk7XG5cdH1cblxufVxuIl19