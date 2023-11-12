import { Injectable } from '@angular/core';
import { StructureInfoPanelArchive } from '../../../../../../../core/structure/structure-core/src/api/panel/info/structure.info-panel.archive';
import { StructureInfoPanelConfigConverter } from '../../../../../../../core/structure/structure-core/src/api/panel/info/structure.info-panel.config-converter';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../../../core/structure/structure-core/src/api/panel/info/structure.info-panel.config-converter";
import * as i2 from "../../../../../../../core/structure/structure-core/src/api/panel/info/structure.info-panel.archive";
export class StructureInfoPanelConfigService {
    structureInfoPanelConfigConverter;
    structureInfoPanelArchive;
    constructor(structureInfoPanelConfigConverter, structureInfoPanelArchive) {
        this.structureInfoPanelConfigConverter = structureInfoPanelConfigConverter;
        this.structureInfoPanelArchive = structureInfoPanelArchive;
    }
    static services = [StructureInfoPanelConfigConverter, StructureInfoPanelArchive];
    set(config) {
        const infoPanelConfig = this.structureInfoPanelConfigConverter.convert(config);
        this.structureInfoPanelArchive.next(infoPanelConfig);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: StructureInfoPanelConfigService, deps: [{ token: i1.StructureInfoPanelConfigConverter }, { token: i2.StructureInfoPanelArchive }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: StructureInfoPanelConfigService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: StructureInfoPanelConfigService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.StructureInfoPanelConfigConverter }, { type: i2.StructureInfoPanelArchive }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwtY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvc3JjL3N0cnVjdHVyZS9nYXRlL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwtY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxvR0FBb0csQ0FBQztBQUMvSSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSw2R0FBNkcsQ0FBQzs7OztBQUloSyxNQUFNLE9BQU8sK0JBQStCO0lBRXZCO0lBQ1Q7SUFEWCxZQUFvQixpQ0FBb0UsRUFDN0UseUJBQW9EO1FBRDNDLHNDQUFpQyxHQUFqQyxpQ0FBaUMsQ0FBbUM7UUFDN0UsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtJQUMvRCxDQUFDO0lBRUQsTUFBTSxDQUFVLFFBQVEsR0FBRyxDQUFDLGlDQUFpQyxFQUFFLHlCQUF5QixDQUFDLENBQUM7SUFFMUYsR0FBRyxDQUFDLE1BQXVCO1FBQzFCLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFL0UsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN0RCxDQUFDO3VHQVpXLCtCQUErQjsyR0FBL0IsK0JBQStCOzsyRkFBL0IsK0JBQStCO2tCQUQzQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5mb1BhbmVsQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9wYW5lbC9pbmZvL2luZm8tcGFuZWwuY29uZmlnJztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbEFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWdDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwuY29uZmlnLWNvbnZlcnRlcic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUluZm9QYW5lbENvbmZpZ1NlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnQ29udmVydGVyOiBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWdDb252ZXJ0ZXIsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlSW5mb1BhbmVsQXJjaGl2ZTogU3RydWN0dXJlSW5mb1BhbmVsQXJjaGl2ZSkge1xuXHR9XG5cblx0c3RhdGljIHJlYWRvbmx5IHNlcnZpY2VzID0gW1N0cnVjdHVyZUluZm9QYW5lbENvbmZpZ0NvbnZlcnRlciwgU3RydWN0dXJlSW5mb1BhbmVsQXJjaGl2ZV07XG5cblx0c2V0KGNvbmZpZzogSW5mb1BhbmVsQ29uZmlnKTogdm9pZCB7XG5cdFx0Y29uc3QgaW5mb1BhbmVsQ29uZmlnID0gdGhpcy5zdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWdDb252ZXJ0ZXIuY29udmVydChjb25maWcpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVJbmZvUGFuZWxBcmNoaXZlLm5leHQoaW5mb1BhbmVsQ29uZmlnKTtcblx0fVxuXG59XG4iXX0=