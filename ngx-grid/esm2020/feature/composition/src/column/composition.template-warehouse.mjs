import { hermesMap } from '@generic-ui/hermes';
import { CompositionTemplateModel } from './composition.template.model';
import { CellView } from '../../../../core/composition/src/domain/column/cell-view';
import { Injectable } from '@angular/core';
import { CompositionAccessorModel } from './composition.accessor.model';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/composition";
import * as i2 from "./view/view-template.repository";
import * as i3 from "./edit/edit-template.repository";
export class CompositionTemplateWarehouse {
    constructor(compositionWarehouse, viewTemplateRepository, editTemplateRepository) {
        this.compositionWarehouse = compositionWarehouse;
        this.viewTemplateRepository = viewTemplateRepository;
        this.editTemplateRepository = editTemplateRepository;
    }
    onHeaderCols(compositionId) {
        return this.compositionWarehouse
            .onHeaderColumns(compositionId)
            .pipe(hermesMap((arr) => {
            return arr.map((context) => {
                let headerTemplate;
                if (typeof context.getHeader() === 'function') {
                    headerTemplate = this.findViewTemplate(CellView.FUNCTION);
                }
                else {
                    headerTemplate = this.findViewTemplate(CellView.HTML);
                }
                const editTemplate = this.findEditTemplate(context.getDataType());
                return new CompositionTemplateModel(headerTemplate, editTemplate, context);
            });
        }));
    }
    onAll(compositionId) {
        return this.compositionWarehouse
            .onAllColumns(compositionId)
            .pipe(hermesMap((arr) => {
            return arr.map((context) => {
                let headerTemplate;
                if (typeof context.getHeader() === 'function') {
                    headerTemplate = this.findViewTemplate(CellView.FUNCTION);
                }
                else {
                    headerTemplate = this.findViewTemplate(CellView.HTML);
                }
                const editTemplate = this.findEditTemplate(context.getDataType());
                return new CompositionTemplateModel(headerTemplate, editTemplate, context);
            });
        }));
    }
    // CellTemplateWithAccessor
    onTemplateCols(compositionId) {
        return this.compositionWarehouse
            .onTemplateColumns(compositionId)
            .pipe(hermesMap((arr) => {
            return arr.map((context) => {
                let cellTemplate;
                if (context.getCellView() === CellView.NG_TEMPLATE) {
                    cellTemplate = context.getColumnConfig().templateRef;
                }
                else {
                    cellTemplate = this.findViewTemplate(context.getCellView());
                }
                const editTemplate = this.findEditTemplate(context.getDataType());
                return new CompositionAccessorModel(cellTemplate, editTemplate, context);
            });
        }));
    }
    findViewTemplate(view) {
        if (view === CellView.FUNCTION) {
            return this.viewTemplateRepository.findTemplate(CellView.FUNCTION);
        }
        else {
            return this.viewTemplateRepository.findTemplate(view);
        }
    }
    findEditTemplate(dataType) {
        return this.editTemplateRepository.findTemplate(dataType);
    }
}
CompositionTemplateWarehouse.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: CompositionTemplateWarehouse, deps: [{ token: i1.CompositionWarehouse }, { token: i2.ViewTemplateRepository }, { token: i3.EditTemplateRepository }], target: i0.ɵɵFactoryTarget.Injectable });
CompositionTemplateWarehouse.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: CompositionTemplateWarehouse });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: CompositionTemplateWarehouse, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.CompositionWarehouse }, { type: i2.ViewTemplateRepository }, { type: i3.EditTemplateRepository }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24udGVtcGxhdGUtd2FyZWhvdXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL2NvbXBvc2l0aW9uL3NyYy9jb2x1bW4vY29tcG9zaXRpb24udGVtcGxhdGUtd2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQW9CLE1BQU0sb0JBQW9CLENBQUM7QUFDakUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFLeEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBRXBGLE9BQU8sRUFBRSxVQUFVLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7O0FBR3hFLE1BQU0sT0FBTyw0QkFBNEI7SUFFeEMsWUFBNkIsb0JBQTBDLEVBQ25ELHNCQUE4QyxFQUM5QyxzQkFBOEM7UUFGckMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUNuRCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7SUFDbEUsQ0FBQztJQUVELFlBQVksQ0FBQyxhQUE0QjtRQUN4QyxPQUFPLElBQUksQ0FBQyxvQkFBb0I7YUFDMUIsZUFBZSxDQUFDLGFBQWEsQ0FBQzthQUM5QixJQUFJLENBQ0osU0FBUyxDQUFDLENBQUMsR0FBbUMsRUFBRSxFQUFFO1lBQ2pELE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUUxQixJQUFJLGNBQWMsQ0FBQztnQkFFbkIsSUFBSSxPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsS0FBSyxVQUFVLEVBQUU7b0JBQzlDLGNBQWMsR0FBRyxJQUFJLENBQUMsZ0JBQWdC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Ozt5SEF4RlcsNEJBQTRCOzZIQUE1Qiw0QkFBNEI7MkZBQTVCLDRCQUE0QjtrQkFEeEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL3NyYy9hcGkvZ2xvYmFsL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IGhlcm1lc01hcCwgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblRlbXBsYXRlTW9kZWwgfSBmcm9tICcuL2NvbXBvc2l0aW9uLnRlbXBsYXRlLm1vZGVsJztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbic7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvY29tcG9zaXRpb24vc3JjL2NvcmUtcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IFZpZXdUZW1wbGF0ZVJlcG9zaXRvcnkgfSBmcm9tICcuL3ZpZXcvdmlldy10ZW1wbGF0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IEVkaXRUZW1wbGF0ZVJlcG9zaXRvcnkgfSBmcm9tICcuL2VkaXQvZWRpdC10ZW1wbGF0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbi9zcmMvZG9tYWluL2NvbHVtbi9jZWxsLXZpZXcnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9maWVsZC9zcmMvZG9tYWluL2ZpZWxkL2RhdGEvZGF0YS10eXBlJztcbmltcG9ydCB7IEluamVjdGFibGUsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL3NyYy9jb3JlLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3InO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BY2Nlc3Nvck1vZGVsIH0gZnJvbSAnLi9jb21wb3NpdGlvbi5hY2Nlc3Nvci5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvblRlbXBsYXRlV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uV2FyZWhvdXNlOiBDb21wb3NpdGlvbldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB2aWV3VGVtcGxhdGVSZXBvc2l0b3J5OiBWaWV3VGVtcGxhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVkaXRUZW1wbGF0ZVJlcG9zaXRvcnk6IEVkaXRUZW1wbGF0ZVJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdG9uSGVhZGVyQ29scyhjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogSGVybWVzT2JzZXJ2YWJsZTxSZWFkb25seUFycmF5PENvbXBvc2l0aW9uVGVtcGxhdGVNb2RlbD4+IHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvbldhcmVob3VzZVxuXHRcdFx0XHQgICAub25IZWFkZXJDb2x1bW5zKGNvbXBvc2l0aW9uSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgoYXJyOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4pID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBhcnIubWFwKChjb250ZXh0KSA9PiB7XG5cblx0XHRcdFx0XHRcdFx0ICAgbGV0IGhlYWRlclRlbXBsYXRlO1xuXG5cdFx0XHRcdFx0XHRcdCAgIGlmICh0eXBlb2YgY29udGV4dC5nZXRIZWFkZXIoKSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdFx0XHRcdCAgIGhlYWRlclRlbXBsYXRlID0gdGhpcy5maW5kVmlld1RlbXBsYXRlKENlbGxWaWV3LkZVTkNUSU9OKTtcblx0XHRcdFx0XHRcdFx0ICAgfSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHQgICBoZWFkZXJUZW1wbGF0ZSA9IHRoaXMuZmluZFZpZXdUZW1wbGF0ZShDZWxsVmlldy5IVE1MKTtcblx0XHRcdFx0XHRcdFx0ICAgfVxuXG5cdFx0XHRcdFx0XHRcdCAgIGNvbnN0IGVkaXRUZW1wbGF0ZSA9IHRoaXMuZmluZEVkaXRUZW1wbGF0ZShjb250ZXh0LmdldERhdGFUeXBlKCkpO1xuXG5cdFx0XHRcdFx0XHRcdCAgIHJldHVybiBuZXcgQ29tcG9zaXRpb25UZW1wbGF0ZU1vZGVsKGhlYWRlclRlbXBsYXRlLCBlZGl0VGVtcGxhdGUsIGNvbnRleHQpO1xuXHRcdFx0XHRcdFx0ICAgfSk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uQWxsKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiBIZXJtZXNPYnNlcnZhYmxlPFJlYWRvbmx5QXJyYXk8Q29tcG9zaXRpb25UZW1wbGF0ZU1vZGVsPj4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uV2FyZWhvdXNlXG5cdFx0XHRcdCAgIC5vbkFsbENvbHVtbnMoY29tcG9zaXRpb25JZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChhcnI6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIGFyci5tYXAoKGNvbnRleHQpID0+IHtcblxuXHRcdFx0XHRcdFx0XHQgICBsZXQgaGVhZGVyVGVtcGxhdGU7XG5cblx0XHRcdFx0XHRcdFx0ICAgaWYgKHR5cGVvZiBjb250ZXh0LmdldEhlYWRlcigpID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0XHRcdFx0ICAgaGVhZGVyVGVtcGxhdGUgPSB0aGlzLmZpbmRWaWV3VGVtcGxhdGUoQ2VsbFZpZXcuRlVOQ1RJT04pO1xuXHRcdFx0XHRcdFx0XHQgICB9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdCAgIGhlYWRlclRlbXBsYXRlID0gdGhpcy5maW5kVmlld1RlbXBsYXRlKENlbGxWaWV3LkhUTUwpO1xuXHRcdFx0XHRcdFx0XHQgICB9XG5cblx0XHRcdFx0XHRcdFx0ICAgY29uc3QgZWRpdFRlbXBsYXRlID0gdGhpcy5maW5kRWRpdFRlbXBsYXRlKGNvbnRleHQuZ2V0RGF0YVR5cGUoKSk7XG5cblx0XHRcdFx0XHRcdFx0ICAgcmV0dXJuIG5ldyBDb21wb3NpdGlvblRlbXBsYXRlTW9kZWwoaGVhZGVyVGVtcGxhdGUsIGVkaXRUZW1wbGF0ZSwgY29udGV4dCk7XG5cdFx0XHRcdFx0XHQgICB9KTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0Ly8gQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yXG5cdG9uVGVtcGxhdGVDb2xzKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiBIZXJtZXNPYnNlcnZhYmxlPFJlYWRvbmx5QXJyYXk8Q29tcG9zaXRpb25BY2Nlc3Nvck1vZGVsPj4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uV2FyZWhvdXNlXG5cdFx0XHRcdCAgIC5vblRlbXBsYXRlQ29sdW1ucyhjb21wb3NpdGlvbklkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKGFycjogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yPikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIGFyci5tYXAoKGNvbnRleHQpID0+IHtcblxuXHRcdFx0XHRcdFx0XHQgICBsZXQgY2VsbFRlbXBsYXRlO1xuXG5cdFx0XHRcdFx0XHRcdCAgIGlmIChjb250ZXh0LmdldENlbGxWaWV3KCkgPT09IENlbGxWaWV3Lk5HX1RFTVBMQVRFKSB7XG5cdFx0XHRcdFx0XHRcdFx0ICAgY2VsbFRlbXBsYXRlID0gY29udGV4dC5nZXRDb2x1bW5Db25maWcoKS50ZW1wbGF0ZVJlZjtcblx0XHRcdFx0XHRcdFx0ICAgfSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHQgICBjZWxsVGVtcGxhdGUgPSB0aGlzLmZpbmRWaWV3VGVtcGxhdGUoY29udGV4dC5nZXRDZWxsVmlldygpKTtcblx0XHRcdFx0XHRcdFx0ICAgfVxuXG5cdFx0XHRcdFx0XHRcdCAgIGNvbnN0IGVkaXRUZW1wbGF0ZSA9IHRoaXMuZmluZEVkaXRUZW1wbGF0ZShjb250ZXh0LmdldERhdGFUeXBlKCkpO1xuXG5cdFx0XHRcdFx0XHRcdCAgIHJldHVybiBuZXcgQ29tcG9zaXRpb25BY2Nlc3Nvck1vZGVsKGNlbGxUZW1wbGF0ZSwgZWRpdFRlbXBsYXRlLCBjb250ZXh0KTtcblx0XHRcdFx0XHRcdCAgIH0pO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRwcml2YXRlIGZpbmRWaWV3VGVtcGxhdGUodmlldzogQ2VsbFZpZXcpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcblxuXHRcdGlmICh2aWV3ID09PSBDZWxsVmlldy5GVU5DVElPTikge1xuXHRcdFx0cmV0dXJuIHRoaXMudmlld1RlbXBsYXRlUmVwb3NpdG9yeS5maW5kVGVtcGxhdGUoQ2VsbFZpZXcuRlVOQ1RJT04pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy52aWV3VGVtcGxhdGVSZXBvc2l0b3J5LmZpbmRUZW1wbGF0ZSh2aWV3KTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGZpbmRFZGl0VGVtcGxhdGUoZGF0YVR5cGU6IERhdGFUeXBlKTogVGVtcGxhdGVSZWY8YW55PiB7XG5cdFx0cmV0dXJuIHRoaXMuZWRpdFRlbXBsYXRlUmVwb3NpdG9yeS5maW5kVGVtcGxhdGUoZGF0YVR5cGUpO1xuXHR9XG5cbn1cbiJdfQ==