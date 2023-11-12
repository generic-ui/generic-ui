import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { Gate } from '../../../../common/component/src/gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i2 from "../../../../../core/composition/src/api/global/composition.id";
import * as i3 from "../../../../../core/structure/paging/src/api/paging.publisher";
import * as i4 from "../../../../../core/structure/paging/src/api/paging.event-repository";
export class PagingGate extends Gate {
    structureId;
    compositionId;
    pagingCommandInvoker;
    pagingEventRepository;
    paging;
    pageChanged = new EventEmitter();
    pageSizeChanged = new EventEmitter();
    constructor(structureId, compositionId, pagingCommandInvoker, pagingEventRepository) {
        super();
        this.structureId = structureId;
        this.compositionId = compositionId;
        this.pagingCommandInvoker = pagingCommandInvoker;
        this.pagingEventRepository = pagingEventRepository;
    }
    ngOnChanges(changes) {
        if (this.isDefined('paging', changes)) {
            let pagingConfig;
            if (typeof this.paging === 'boolean') {
                pagingConfig = {
                    enabled: this.paging
                };
            }
            else {
                pagingConfig = this.paging;
            }
            this.pagingCommandInvoker.setPaging(pagingConfig, this.compositionId);
        }
    }
    ngOnInit() {
        this.subscribeAndEmit(this.pagingEventRepository.onPageChange(this.structureId.toReadModelRootId()), this.pageChanged);
        this.subscribeAndEmit(this.pagingEventRepository.onPageSizeChange(this.structureId.toReadModelRootId()), this.pageSizeChanged);
    }
    onPageChange(page) {
        this.pageChanged.emit(page);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: PagingGate, deps: [{ token: i1.StructureId }, { token: i2.CompositionId }, { token: i3.PagingPublisher }, { token: i4.PagingEventRepository }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.2", type: PagingGate, inputs: { paging: "paging" }, outputs: { pageChanged: "pageChanged", pageSizeChanged: "pageSizeChanged" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: PagingGate, decorators: [{
            type: Directive
        }], ctorParameters: () => [{ type: i1.StructureId }, { type: i2.CompositionId }, { type: i3.PagingPublisher }, { type: i4.PagingEventRepository }], propDecorators: { paging: [{
                type: Input
            }], pageChanged: [{
                type: Output
            }], pageSizeChanged: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmdhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL3BhZ2luZy9zcmMvZ2F0ZS9wYWdpbmcuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7Ozs7OztBQVM3RCxNQUFNLE9BQWdCLFVBQVcsU0FBUSxJQUFJO0lBV0g7SUFDZjtJQUNBO0lBQ0E7SUFYMUIsTUFBTSxDQUF5QjtJQUcvQixXQUFXLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7SUFHL0QsZUFBZSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO0lBRW5FLFlBQXlDLFdBQXdCLEVBQ3ZDLGFBQTRCLEVBQzVCLG9CQUFxQyxFQUNyQyxxQkFBNEM7UUFDckUsS0FBSyxFQUFFLENBQUM7UUFKZ0MsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDdkMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFpQjtRQUNyQywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0lBRXRFLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBOEI7UUFFekMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUV0QyxJQUFJLFlBQTBCLENBQUM7WUFFL0IsSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO2dCQUNyQyxZQUFZLEdBQUc7b0JBQ2QsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNO2lCQUNwQixDQUFDO2FBQ0Y7aUJBQU07Z0JBQ04sWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDM0I7WUFFRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDdEU7SUFDRixDQUFDO0lBRUQsUUFBUTtRQUVQLElBQUksQ0FBQyxnQkFBZ0IsQ0FDcEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLENBQUMsRUFDN0UsSUFBSSxDQUFDLFdBQVcsQ0FDaEIsQ0FBQztRQUVGLElBQUksQ0FBQyxnQkFBZ0IsQ0FDcEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxFQUNqRixJQUFJLENBQUMsZUFBZSxDQUNwQixDQUFDO0lBQ0gsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFZO1FBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7dUdBbkRvQixVQUFVOzJGQUFWLFVBQVU7OzJGQUFWLFVBQVU7a0JBRC9CLFNBQVM7OEtBSVQsTUFBTTtzQkFETCxLQUFLO2dCQUlOLFdBQVc7c0JBRFYsTUFBTTtnQkFJUCxlQUFlO3NCQURkLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jb21wb25lbnQvc3JjL2dhdGUnO1xuaW1wb3J0IHsgUGFnaW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvcGFnaW5nL3NyYy9hcGkvY29uZmlnL3BhZ2luZy1jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUGFnaW5nUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvcGFnaW5nL3NyYy9hcGkvcGFnaW5nLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBQYWdpbmdFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9wYWdpbmcvc3JjL2FwaS9wYWdpbmcuZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY29tcG9uZW50L3NyYy9uZy1jaGFuZ2VzJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL3NyYy9hcGkvZ2xvYmFsL2NvbXBvc2l0aW9uLmlkJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUGFnaW5nR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG5cblx0QElucHV0KClcblx0cGFnaW5nOiBib29sZWFuIHwgUGFnaW5nQ29uZmlnO1xuXG5cdEBPdXRwdXQoKVxuXHRwYWdlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHRAT3V0cHV0KClcblx0cGFnZVNpemVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRcdFx0ICBwcm90ZWN0ZWQgcmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0XHRcdCAgcHJvdGVjdGVkIHJlYWRvbmx5IHBhZ2luZ0NvbW1hbmRJbnZva2VyOiBQYWdpbmdQdWJsaXNoZXIsXG5cdFx0XHRcdFx0XHQgIHByb3RlY3RlZCByZWFkb25seSBwYWdpbmdFdmVudFJlcG9zaXRvcnk6IFBhZ2luZ0V2ZW50UmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8UGFnaW5nR2F0ZT4pIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgncGFnaW5nJywgY2hhbmdlcykpIHtcblxuXHRcdFx0bGV0IHBhZ2luZ0NvbmZpZzogUGFnaW5nQ29uZmlnO1xuXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMucGFnaW5nID09PSAnYm9vbGVhbicpIHtcblx0XHRcdFx0cGFnaW5nQ29uZmlnID0ge1xuXHRcdFx0XHRcdGVuYWJsZWQ6IHRoaXMucGFnaW5nXG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwYWdpbmdDb25maWcgPSB0aGlzLnBhZ2luZztcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5wYWdpbmdDb21tYW5kSW52b2tlci5zZXRQYWdpbmcocGFnaW5nQ29uZmlnLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5zdWJzY3JpYmVBbmRFbWl0KFxuXHRcdFx0dGhpcy5wYWdpbmdFdmVudFJlcG9zaXRvcnkub25QYWdlQ2hhbmdlKHRoaXMuc3RydWN0dXJlSWQudG9SZWFkTW9kZWxSb290SWQoKSksXG5cdFx0XHR0aGlzLnBhZ2VDaGFuZ2VkXG5cdFx0KTtcblxuXHRcdHRoaXMuc3Vic2NyaWJlQW5kRW1pdChcblx0XHRcdHRoaXMucGFnaW5nRXZlbnRSZXBvc2l0b3J5Lm9uUGFnZVNpemVDaGFuZ2UodGhpcy5zdHJ1Y3R1cmVJZC50b1JlYWRNb2RlbFJvb3RJZCgpKSxcblx0XHRcdHRoaXMucGFnZVNpemVDaGFuZ2VkXG5cdFx0KTtcblx0fVxuXG5cdG9uUGFnZUNoYW5nZShwYWdlOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2VDaGFuZ2VkLmVtaXQocGFnZSk7XG5cdH1cblxufVxuIl19