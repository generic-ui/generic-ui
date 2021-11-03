import { Injectable } from '@angular/core';
import { hermesMap } from '@generic-ui/hermes';
import { SelectedRow } from './selected-row';
import * as i0 from "@angular/core";
import * as i1 from "./row-selected/row-selected.repository";
import * as i2 from "./mode/row-selection-mode.repository";
import * as i3 from "../source.warehouse";
export class FormationWarehouse {
    constructor(rowSelectedRepository, rowSelectionModeRepository, sourceWarehouse) {
        this.rowSelectedRepository = rowSelectedRepository;
        this.rowSelectionModeRepository = rowSelectionModeRepository;
        this.sourceWarehouse = sourceWarehouse;
    }
    getSelectedRows(structureId) {
        const items = this.sourceWarehouse.getPreparedEntities(structureId), selectedItemIds = this.getSelectedItemIds(structureId);
        const selectedItems = [], length = items.length;
        for (let i = 0; i < length; i += 1) {
            const item = items[i];
            if (selectedItemIds.some((itemId) => itemId === item.getId().toString())) {
                selectedItems.push(new SelectedRow(item.getSourceItem(), i, item.getId()));
            }
        }
        return selectedItems;
    }
    onRowSelectedReadModel(structureId) {
        return this.rowSelectedRepository
            .on(structureId);
    }
    getSelectedItemIds(structureId) {
        return this.rowSelectedRepository.get(structureId).getValueOrNullOrThrowError().getAll();
    }
    onSelectedRows(structureId) {
        return this.rowSelectedRepository
            .on(structureId)
            .pipe(hermesMap((rm) => {
            return rm.getAll();
        }));
    }
    onMode(structureId) {
        return this.rowSelectionModeRepository.on(structureId);
    }
}
FormationWarehouse.ɵfac = function FormationWarehouse_Factory(t) { return new (t || FormationWarehouse)(i0.ɵɵinject(i1.RowSelectedRepository), i0.ɵɵinject(i2.RowSelectionModeRepository), i0.ɵɵinject(i3.SourceWarehouse)); };
FormationWarehouse.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FormationWarehouse, factory: FormationWarehouse.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormationWarehouse, [{
        type: Injectable
    }], function () { return [{ type: i1.RowSelectedRepository }, { type: i2.RowSelectionModeRepository }, { type: i3.SourceWarehouse }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxTQUFTLEVBQStCLE1BQU0sb0JBQW9CLENBQUM7QUFPNUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQUs3QyxNQUFNLE9BQU8sa0JBQWtCO0lBRTlCLFlBQTZCLHFCQUE0QyxFQUNyRCwwQkFBc0QsRUFDdEQsZUFBZ0M7UUFGdkIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUNyRCwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQTRCO1FBQ3RELG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUNwRCxDQUFDO0lBRUQsZUFBZSxDQUFDLFdBQXdCO1FBRXZDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLEVBQ2xFLGVBQWUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFeEQsTUFBTSxhQUFhLEdBQUcsRUFBRSxFQUN2QixNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUV2QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFFbkMsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXRCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQWMsRUFBRSxFQUFFLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFO2dCQUNqRixhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzthQUMzRTtTQUNEO1FBQ0QsT0FBTyxhQUFhLENBQUM7SUFDdEIsQ0FBQztJQUVELHNCQUFzQixDQUFDLFdBQXdCO1FBQzlDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQjthQUMzQixFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELGtCQUFrQixDQUFDLFdBQXdCO1FBQzFDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQywwQkFBMEIsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzFGLENBQUM7SUFFRCxjQUFjLENBQUMsV0FBd0I7UUFDdEMsT0FBTyxJQUFJLENBQUMscUJBQXFCO2FBQzNCLEVBQUUsQ0FBQyxXQUFXLENBQUM7YUFDZixJQUFJLENBQ0osU0FBUyxDQUFDLENBQUMsRUFBd0IsRUFBRSxFQUFFO1lBQ3RDLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUNGLENBQUM7SUFDUixDQUFDO0lBRUQsTUFBTSxDQUFDLFdBQXdCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLDBCQUEwQixDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4RCxDQUFDOztvRkEvQ1csa0JBQWtCO3dFQUFsQixrQkFBa0IsV0FBbEIsa0JBQWtCO3VGQUFsQixrQkFBa0I7Y0FEOUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgaGVybWVzTWFwLCBIZXJtZXNPYnNlcnZhYmxlLCBXYXJlaG91c2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBSb3dTZWxlY3RlZFJlcG9zaXRvcnkgfSBmcm9tICcuL3Jvdy1zZWxlY3RlZC9yb3ctc2VsZWN0ZWQucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBSb3dTZWxlY3RlZFJlYWRNb2RlbCB9IGZyb20gJy4vcm93LXNlbGVjdGVkLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uTW9kZVJlcG9zaXRvcnkgfSBmcm9tICcuL21vZGUvcm93LXNlbGVjdGlvbi1tb2RlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uTW9kZSB9IGZyb20gJy4uL3Jvdy1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3cgfSBmcm9tICcuL3NlbGVjdGVkLXJvdyc7XG5pbXBvcnQgeyBTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi9zb3VyY2Uud2FyZWhvdXNlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRm9ybWF0aW9uV2FyZWhvdXNlIGltcGxlbWVudHMgV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHJvd1NlbGVjdGVkUmVwb3NpdG9yeTogUm93U2VsZWN0ZWRSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJvd1NlbGVjdGlvbk1vZGVSZXBvc2l0b3J5OiBSb3dTZWxlY3Rpb25Nb2RlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VXYXJlaG91c2U6IFNvdXJjZVdhcmVob3VzZSkge1xuXHR9XG5cblx0Z2V0U2VsZWN0ZWRSb3dzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFycmF5PFNlbGVjdGVkUm93PiB7XG5cblx0XHRjb25zdCBpdGVtcyA9IHRoaXMuc291cmNlV2FyZWhvdXNlLmdldFByZXBhcmVkRW50aXRpZXMoc3RydWN0dXJlSWQpLFxuXHRcdFx0c2VsZWN0ZWRJdGVtSWRzID0gdGhpcy5nZXRTZWxlY3RlZEl0ZW1JZHMoc3RydWN0dXJlSWQpO1xuXG5cdFx0Y29uc3Qgc2VsZWN0ZWRJdGVtcyA9IFtdLFxuXHRcdFx0bGVuZ3RoID0gaXRlbXMubGVuZ3RoO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuXG5cdFx0XHRjb25zdCBpdGVtID0gaXRlbXNbaV07XG5cblx0XHRcdGlmIChzZWxlY3RlZEl0ZW1JZHMuc29tZSgoaXRlbUlkOiBzdHJpbmcpID0+IGl0ZW1JZCA9PT0gaXRlbS5nZXRJZCgpLnRvU3RyaW5nKCkpKSB7XG5cdFx0XHRcdHNlbGVjdGVkSXRlbXMucHVzaChuZXcgU2VsZWN0ZWRSb3coaXRlbS5nZXRTb3VyY2VJdGVtKCksIGksIGl0ZW0uZ2V0SWQoKSkpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gc2VsZWN0ZWRJdGVtcztcblx0fVxuXG5cdG9uUm93U2VsZWN0ZWRSZWFkTW9kZWwoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxSb3dTZWxlY3RlZFJlYWRNb2RlbD4ge1xuXHRcdHJldHVybiB0aGlzLnJvd1NlbGVjdGVkUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0Z2V0U2VsZWN0ZWRJdGVtSWRzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFycmF5PHN0cmluZz4ge1xuXHRcdHJldHVybiB0aGlzLnJvd1NlbGVjdGVkUmVwb3NpdG9yeS5nZXQoc3RydWN0dXJlSWQpLmdldFZhbHVlT3JOdWxsT3JUaHJvd0Vycm9yKCkuZ2V0QWxsKCk7XG5cdH1cblxuXHRvblNlbGVjdGVkUm93cyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPEFycmF5PHN0cmluZz4+IHtcblx0XHRyZXR1cm4gdGhpcy5yb3dTZWxlY3RlZFJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKHJtOiBSb3dTZWxlY3RlZFJlYWRNb2RlbCkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHJtLmdldEFsbCgpO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvbk1vZGUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxSb3dTZWxlY3Rpb25Nb2RlPiB7XG5cdFx0cmV0dXJuIHRoaXMucm93U2VsZWN0aW9uTW9kZVJlcG9zaXRvcnkub24oc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==