import { Injectable } from '@angular/core';
import { Archive } from '@generic-ui/hermes';
import { StructureColumnMenuConfig } from './structure.column-menu-config';
import * as i0 from "@angular/core";
export class StructureColumnMenuConfigArchive extends Archive {
    constructor() {
        super(StructureColumnMenuConfig.default());
    }
    nextConfig(config) {
        const menuConfig = StructureColumnMenuConfig.fromConfig(config);
        this.next(menuConfig);
    }
}
StructureColumnMenuConfigArchive.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureColumnMenuConfigArchive, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
StructureColumnMenuConfigArchive.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureColumnMenuConfigArchive });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureColumnMenuConfigArchive, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy5hcmNoaXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L2hlYWRlci9tZW51L2NvbmZpZy9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUtY29uZmlnLmFyY2hpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFN0MsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0FBSTNFLE1BQU0sT0FBTyxnQ0FBaUMsU0FBUSxPQUFrQztJQUV2RjtRQUNDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxVQUFVLENBQUMsTUFBd0I7UUFFbEMsTUFBTSxVQUFVLEdBQUcseUJBQXlCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWhFLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7OEhBWFcsZ0NBQWdDO2tJQUFoQyxnQ0FBZ0M7NEZBQWhDLGdDQUFnQztrQkFENUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXJjaGl2ZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcgfSBmcm9tICcuL3N0cnVjdHVyZS5jb2x1bW4tbWVudS1jb25maWcnO1xuaW1wb3J0IHsgQ29sdW1uTWVudUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2NvcmUvYXBpL2NvbmZpZy9jb2x1bW4tbWVudS1jb25maWcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmUgZXh0ZW5kcyBBcmNoaXZlPFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWc+IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnLmRlZmF1bHQoKSk7XG5cdH1cblxuXHRuZXh0Q29uZmlnKGNvbmZpZzogQ29sdW1uTWVudUNvbmZpZyk6IHZvaWQge1xuXG5cdFx0Y29uc3QgbWVudUNvbmZpZyA9IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcuZnJvbUNvbmZpZyhjb25maWcpO1xuXG5cdFx0dGhpcy5uZXh0KG1lbnVDb25maWcpO1xuXHR9XG5cbn1cbiJdfQ==