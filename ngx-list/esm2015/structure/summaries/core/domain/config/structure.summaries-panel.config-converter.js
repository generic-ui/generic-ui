import { Injectable } from '@angular/core';
import { StructureSummariesPanelConfig } from './structure.summaries-panel.config';
import * as i0 from "@angular/core";
export class StructureSummariesPanelConfigConverter {
    convert(config) {
        const panelConfig = new StructureSummariesPanelConfig();
        if (config.top !== undefined && config.top !== null) {
            panelConfig.setTop(config.top);
        }
        if (config.bottom !== undefined && config.bottom !== null) {
            panelConfig.setBottom(config.bottom);
        }
        return panelConfig;
    }
}
StructureSummariesPanelConfigConverter.ɵfac = function StructureSummariesPanelConfigConverter_Factory(t) { return new (t || StructureSummariesPanelConfigConverter)(); };
StructureSummariesPanelConfigConverter.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StructureSummariesPanelConfigConverter, factory: StructureSummariesPanelConfigConverter.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureSummariesPanelConfigConverter, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb25maWctY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvc3VtbWFyaWVzL2NvcmUvZG9tYWluL2NvbmZpZy9zdHJ1Y3R1cmUuc3VtbWFyaWVzLXBhbmVsLmNvbmZpZy1jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7QUFNbkYsTUFBTSxPQUFPLHNDQUFzQztJQUVsRCxPQUFPLENBQUMsTUFBdUI7UUFFOUIsTUFBTSxXQUFXLEdBQUcsSUFBSSw2QkFBNkIsRUFBRSxDQUFDO1FBRXhELElBQUksTUFBTSxDQUFDLEdBQUcsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLEdBQUcsS0FBSyxJQUFJLEVBQUU7WUFDcEQsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDL0I7UUFFRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQzFELFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3JDO1FBRUQsT0FBTyxXQUFXLENBQUM7SUFDcEIsQ0FBQzs7NEhBZlcsc0NBQXNDOzRGQUF0QyxzQ0FBc0MsV0FBdEMsc0NBQXNDO3VGQUF0QyxzQ0FBc0M7Y0FEbEQsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb25maWcgfSBmcm9tICcuL3N0cnVjdHVyZS5zdW1tYXJpZXMtcGFuZWwuY29uZmlnJztcblxuaW1wb3J0IHsgU3VtbWFyaWVzQ29uZmlnIH0gZnJvbSAnLi4vLi4vYXBpL3N1bW1hcmllcy1jb25maWcnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZ0NvbnZlcnRlciB7XG5cblx0Y29udmVydChjb25maWc6IFN1bW1hcmllc0NvbmZpZyk6IFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29uZmlnIHtcblxuXHRcdGNvbnN0IHBhbmVsQ29uZmlnID0gbmV3IFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29uZmlnKCk7XG5cblx0XHRpZiAoY29uZmlnLnRvcCAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy50b3AgIT09IG51bGwpIHtcblx0XHRcdHBhbmVsQ29uZmlnLnNldFRvcChjb25maWcudG9wKTtcblx0XHR9XG5cblx0XHRpZiAoY29uZmlnLmJvdHRvbSAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5ib3R0b20gIT09IG51bGwpIHtcblx0XHRcdHBhbmVsQ29uZmlnLnNldEJvdHRvbShjb25maWcuYm90dG9tKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcGFuZWxDb25maWc7XG5cdH1cbn1cbiJdfQ==