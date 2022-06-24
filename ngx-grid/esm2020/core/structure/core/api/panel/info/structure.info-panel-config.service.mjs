import { Injectable } from '@angular/core';
import { StructureInfoPanelArchive } from './structure.info-panel.archive';
import { StructureInfoPanelConfigConverter } from './structure.info-panel.config-converter';
import * as i0 from "@angular/core";
import * as i1 from "./structure.info-panel.config-converter";
import * as i2 from "./structure.info-panel.archive";
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
StructureInfoPanelConfigService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureInfoPanelConfigService, deps: [{ token: i1.StructureInfoPanelConfigConverter }, { token: i2.StructureInfoPanelArchive }], target: i0.ɵɵFactoryTarget.Injectable });
StructureInfoPanelConfigService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureInfoPanelConfigService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureInfoPanelConfigService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.StructureInfoPanelConfigConverter }, { type: i2.StructureInfoPanelArchive }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwtY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvc3RydWN0dXJlL2NvcmUvYXBpL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwtY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7OztBQUk1RixNQUFNLE9BQU8sK0JBQStCO0lBRTNDLFlBQW9CLGlDQUFvRSxFQUM3RSx5QkFBb0Q7UUFEM0Msc0NBQWlDLEdBQWpDLGlDQUFpQyxDQUFtQztRQUM3RSw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO0lBQy9ELENBQUM7SUFJRCxHQUFHLENBQUMsTUFBdUI7UUFDMUIsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUvRSxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7O0FBTmUsd0NBQVEsR0FBRyxDQUFDLGlDQUFpQyxFQUFFLHlCQUF5QixDQUFFLENBQUE7NkhBTjlFLCtCQUErQjtpSUFBL0IsK0JBQStCOzRGQUEvQiwrQkFBK0I7a0JBRDNDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbmZvUGFuZWxDb25maWcgfSBmcm9tICcuL2luZm8tcGFuZWwuY29uZmlnJztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbEFyY2hpdmUgfSBmcm9tICcuL3N0cnVjdHVyZS5pbmZvLXBhbmVsLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnQ29udmVydGVyIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuaW5mby1wYW5lbC5jb25maWctY29udmVydGVyJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnU2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWdDb252ZXJ0ZXI6IFN0cnVjdHVyZUluZm9QYW5lbENvbmZpZ0NvbnZlcnRlcixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVJbmZvUGFuZWxBcmNoaXZlOiBTdHJ1Y3R1cmVJbmZvUGFuZWxBcmNoaXZlKSB7XG5cdH1cblxuXHRzdGF0aWMgcmVhZG9ubHkgc2VydmljZXMgPSBbU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnQ29udmVydGVyLCBTdHJ1Y3R1cmVJbmZvUGFuZWxBcmNoaXZlXTtcblxuXHRzZXQoY29uZmlnOiBJbmZvUGFuZWxDb25maWcpOiB2b2lkIHtcblx0XHRjb25zdCBpbmZvUGFuZWxDb25maWcgPSB0aGlzLnN0cnVjdHVyZUluZm9QYW5lbENvbmZpZ0NvbnZlcnRlci5jb252ZXJ0KGNvbmZpZyk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUluZm9QYW5lbEFyY2hpdmUubmV4dChpbmZvUGFuZWxDb25maWcpO1xuXHR9XG5cbn1cbiJdfQ==