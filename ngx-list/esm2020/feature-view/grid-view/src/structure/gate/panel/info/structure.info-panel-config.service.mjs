import { Injectable } from '@angular/core';
import { StructureInfoPanelArchive } from '../../../../../../../core/structure/structure-core/src/api/panel/info/structure.info-panel.archive';
import { StructureInfoPanelConfigConverter } from '../../../../../../../core/structure/structure-core/src/api/panel/info/structure.info-panel.config-converter';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../../../core/structure/structure-core/src/api/panel/info/structure.info-panel.config-converter";
import * as i2 from "../../../../../../../core/structure/structure-core/src/api/panel/info/structure.info-panel.archive";
export class StructureInfoPanelConfigService {
    constructor(structureInfoPanelConfigConverter, structureInfoPanelArchive) {
        this.structureInfoPanelConfigConverter = structureInfoPanelConfigConverter;
        this.structureInfoPanelArchive = structureInfoPanelArchive;
    }
    set(config) {
        const infoPanelConfig = this.structureInfoPanelConfigConverter.convert(config);
        this.structureInfoPanelArchive.next(infoPanelConfig);
    }
}
StructureInfoPanelConfigService.services = [StructureInfoPanelConfigConverter, StructureInfoPanelArchive];
StructureInfoPanelConfigService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StructureInfoPanelConfigService, deps: [{ token: i1.StructureInfoPanelConfigConverter }, { token: i2.StructureInfoPanelArchive }], target: i0.ɵɵFactoryTarget.Injectable });
StructureInfoPanelConfigService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StructureInfoPanelConfigService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StructureInfoPanelConfigService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.StructureInfoPanelConfigConverter }, { type: i2.StructureInfoPanelArchive }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwtY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvc3JjL3N0cnVjdHVyZS9nYXRlL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwtY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxvR0FBb0csQ0FBQztBQUMvSSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSw2R0FBNkcsQ0FBQzs7OztBQUloSyxNQUFNLE9BQU8sK0JBQStCO0lBRTNDLFlBQW9CLGlDQUFvRSxFQUM3RSx5QkFBb0Q7UUFEM0Msc0NBQWlDLEdBQWpDLGlDQUFpQyxDQUFtQztRQUM3RSw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO0lBQy9ELENBQUM7SUFJRCxHQUFHLENBQUMsTUFBdUI7UUFDMUIsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUvRSxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7O0FBTmUsd0NBQVEsR0FBRyxDQUFDLGlDQUFpQyxFQUFFLHlCQUF5QixDQUFDLENBQUM7NkhBTjlFLCtCQUErQjtpSUFBL0IsK0JBQStCOzRGQUEvQiwrQkFBK0I7a0JBRDNDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbmZvUGFuZWxDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL3BhbmVsL2luZm8vaW5mby1wYW5lbC5jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb1BhbmVsQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvcGFuZWwvaW5mby9zdHJ1Y3R1cmUuaW5mby1wYW5lbC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbENvbmZpZ0NvbnZlcnRlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvcGFuZWwvaW5mby9zdHJ1Y3R1cmUuaW5mby1wYW5lbC5jb25maWctY29udmVydGVyJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnU2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWdDb252ZXJ0ZXI6IFN0cnVjdHVyZUluZm9QYW5lbENvbmZpZ0NvbnZlcnRlcixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVJbmZvUGFuZWxBcmNoaXZlOiBTdHJ1Y3R1cmVJbmZvUGFuZWxBcmNoaXZlKSB7XG5cdH1cblxuXHRzdGF0aWMgcmVhZG9ubHkgc2VydmljZXMgPSBbU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnQ29udmVydGVyLCBTdHJ1Y3R1cmVJbmZvUGFuZWxBcmNoaXZlXTtcblxuXHRzZXQoY29uZmlnOiBJbmZvUGFuZWxDb25maWcpOiB2b2lkIHtcblx0XHRjb25zdCBpbmZvUGFuZWxDb25maWcgPSB0aGlzLnN0cnVjdHVyZUluZm9QYW5lbENvbmZpZ0NvbnZlcnRlci5jb252ZXJ0KGNvbmZpZyk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUluZm9QYW5lbEFyY2hpdmUubmV4dChpbmZvUGFuZWxDb25maWcpO1xuXHR9XG5cbn1cbiJdfQ==