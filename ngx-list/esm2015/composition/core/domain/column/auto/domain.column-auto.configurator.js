import { Injectable } from '@angular/core';
import { ColumnAutoConfigurator } from '../../../api/column/auto/column-auto.configurator';
import { DataType } from '../../../../../structure/field/core/domain/field/data/data-type';
import * as i0 from "@angular/core";
export class DomainColumnAutoConfigurator extends ColumnAutoConfigurator {
    configure(source) {
        if (source !== undefined && source !== null && Array.isArray(source) && source.length === 0) {
            return [];
        }
        const rawItem = source[0];
        return Object.keys(rawItem)
            .map((key, index) => {
            return this.toColumnConfig(key, rawItem);
        });
    }
    toColumnConfig(key, rawItem) {
        return {
            field: this.getField(key),
            header: this.getHeader(key),
            type: this.getType(key, rawItem)
        };
    }
    getField(key) {
        return key;
    }
    getHeader(key) {
        return key[0].toUpperCase() + key.slice(1);
    }
    getType(key, rawItem) {
        if (typeof rawItem[key] === 'string') {
            return DataType.STRING;
        }
        else if (typeof rawItem[key] === 'number') {
            return DataType.NUMBER;
        }
        else if (rawItem[key] instanceof Date) {
            return DataType.DATE;
        }
        else if (typeof rawItem[key] === 'boolean') {
            return DataType.BOOLEAN;
        }
        else {
            return DataType.UNKNOWN;
        }
    }
}
DomainColumnAutoConfigurator.ɵfac = /*@__PURE__*/ function () { let ɵDomainColumnAutoConfigurator_BaseFactory; return function DomainColumnAutoConfigurator_Factory(t) { return (ɵDomainColumnAutoConfigurator_BaseFactory || (ɵDomainColumnAutoConfigurator_BaseFactory = i0.ɵɵgetInheritedFactory(DomainColumnAutoConfigurator)))(t || DomainColumnAutoConfigurator); }; }();
DomainColumnAutoConfigurator.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DomainColumnAutoConfigurator, factory: DomainColumnAutoConfigurator.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DomainColumnAutoConfigurator, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLmNvbHVtbi1hdXRvLmNvbmZpZ3VyYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29tcG9zaXRpb24vY29yZS9kb21haW4vY29sdW1uL2F1dG8vZG9tYWluLmNvbHVtbi1hdXRvLmNvbmZpZ3VyYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBRTNGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQzs7QUFHM0YsTUFBTSxPQUFPLDRCQUE2QixTQUFRLHNCQUFzQjtJQUV2RSxTQUFTLENBQUMsTUFBMEI7UUFFbkMsSUFBSSxNQUFNLEtBQUssU0FBUyxJQUFJLE1BQU0sS0FBSyxJQUFJLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM1RixPQUFPLEVBQUUsQ0FBQztTQUNWO1FBRUQsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTFCLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDdEIsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBRW5CLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBRU8sY0FBYyxDQUFDLEdBQVcsRUFBRSxPQUFZO1FBQy9DLE9BQU87WUFDTixLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7WUFDekIsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO1lBQzNCLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUM7U0FDaEIsQ0FBQztJQUNuQixDQUFDO0lBRU8sUUFBUSxDQUFDLEdBQVc7UUFDM0IsT0FBTyxHQUFHLENBQUM7SUFDWixDQUFDO0lBRU8sU0FBUyxDQUFDLEdBQVc7UUFDNUIsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU8sT0FBTyxDQUFDLEdBQVcsRUFBRSxPQUFZO1FBRXhDLElBQUksT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxFQUFFO1lBQ3JDLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztTQUN2QjthQUFNLElBQUksT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxFQUFFO1lBQzVDLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztTQUN2QjthQUFNLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLElBQUksRUFBRTtZQUN4QyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7U0FDckI7YUFBTSxJQUFJLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUM3QyxPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUM7U0FDeEI7YUFBTTtZQUNOLE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQztTQUN4QjtJQUNGLENBQUM7O29TQTlDVyw0QkFBNEIsU0FBNUIsNEJBQTRCO2tGQUE1Qiw0QkFBNEIsV0FBNUIsNEJBQTRCO3VGQUE1Qiw0QkFBNEI7Y0FEeEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbHVtbkF1dG9Db25maWd1cmF0b3IgfSBmcm9tICcuLi8uLi8uLi9hcGkvY29sdW1uL2F1dG8vY29sdW1uLWF1dG8uY29uZmlndXJhdG9yJztcbmltcG9ydCB7IENvbHVtbkNvbmZpZywgTXVsdGlDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi8uLi9hcGkvY29sdW1uL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZmllbGQvY29yZS9kb21haW4vZmllbGQvZGF0YS9kYXRhLXR5cGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRG9tYWluQ29sdW1uQXV0b0NvbmZpZ3VyYXRvciBleHRlbmRzIENvbHVtbkF1dG9Db25maWd1cmF0b3Ige1xuXG5cdGNvbmZpZ3VyZShzb3VyY2U6IFJlYWRvbmx5QXJyYXk8YW55Pik6IFJlYWRvbmx5QXJyYXk8Q29sdW1uQ29uZmlnIHwgTXVsdGlDb2x1bW5Db25maWc+IHtcblxuXHRcdGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCAmJiBzb3VyY2UgIT09IG51bGwgJiYgQXJyYXkuaXNBcnJheShzb3VyY2UpICYmIHNvdXJjZS5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0XHRjb25zdCByYXdJdGVtID0gc291cmNlWzBdO1xuXG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKHJhd0l0ZW0pXG5cdFx0XHRcdFx0IC5tYXAoKGtleSwgaW5kZXgpID0+IHtcblxuXHRcdFx0XHRcdFx0IHJldHVybiB0aGlzLnRvQ29sdW1uQ29uZmlnKGtleSwgcmF3SXRlbSk7XG5cdFx0XHRcdFx0IH0pO1xuXHR9XG5cblx0cHJpdmF0ZSB0b0NvbHVtbkNvbmZpZyhrZXk6IHN0cmluZywgcmF3SXRlbTogYW55KTogQ29sdW1uQ29uZmlnIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZmllbGQ6IHRoaXMuZ2V0RmllbGQoa2V5KSxcblx0XHRcdGhlYWRlcjogdGhpcy5nZXRIZWFkZXIoa2V5KSxcblx0XHRcdHR5cGU6IHRoaXMuZ2V0VHlwZShrZXksIHJhd0l0ZW0pXG5cdFx0fSBhcyBDb2x1bW5Db25maWc7XG5cdH1cblxuXHRwcml2YXRlIGdldEZpZWxkKGtleTogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRyZXR1cm4ga2V5O1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRIZWFkZXIoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdHJldHVybiBrZXlbMF0udG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0VHlwZShrZXk6IHN0cmluZywgcmF3SXRlbTogYW55KTogRGF0YVR5cGUge1xuXG5cdFx0aWYgKHR5cGVvZiByYXdJdGVtW2tleV0gPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gRGF0YVR5cGUuU1RSSU5HO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIHJhd0l0ZW1ba2V5XSA9PT0gJ251bWJlcicpIHtcblx0XHRcdHJldHVybiBEYXRhVHlwZS5OVU1CRVI7XG5cdFx0fSBlbHNlIGlmIChyYXdJdGVtW2tleV0gaW5zdGFuY2VvZiBEYXRlKSB7XG5cdFx0XHRyZXR1cm4gRGF0YVR5cGUuREFURTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiByYXdJdGVtW2tleV0gPT09ICdib29sZWFuJykge1xuXHRcdFx0cmV0dXJuIERhdGFUeXBlLkJPT0xFQU47XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBEYXRhVHlwZS5VTktOT1dOO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=