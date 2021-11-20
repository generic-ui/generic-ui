import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { Gate } from '../../../../common/cdk/component/gate';
import { StructureId } from '../../../core/api/structure.id';
import { PagingCommandInvoker } from '../../core/api/paging.command-invoker';
import { PagingEventRepository } from '../../core/api/paging.event-repository';
import { CompositionId } from '../../../../composition/core/api/composition.id';
export class PagingGate extends Gate {
    constructor(structureId, compositionId, pagingCommandInvoker, pagingEventRepository) {
        super();
        this.structureId = structureId;
        this.compositionId = compositionId;
        this.pagingCommandInvoker = pagingCommandInvoker;
        this.pagingEventRepository = pagingEventRepository;
        this.pageChanged = new EventEmitter();
        this.pageSizeChanged = new EventEmitter();
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
}
PagingGate.decorators = [
    { type: Directive }
];
PagingGate.ctorParameters = () => [
    { type: StructureId },
    { type: CompositionId },
    { type: PagingCommandInvoker },
    { type: PagingEventRepository }
];
PagingGate.propDecorators = {
    paging: [{ type: Input }],
    pageChanged: [{ type: Output }],
    pageSizeChanged: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmdhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9wYWdpbmcvZmVhdHVyZS9nYXRlL3BhZ2luZy5nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUU3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDN0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFL0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBR2hGLE1BQU0sT0FBZ0IsVUFBVyxTQUFRLElBQUk7SUFXNUMsWUFBeUMsV0FBd0IsRUFDdkMsYUFBNEIsRUFDNUIsb0JBQTBDLEVBQzFDLHFCQUE0QztRQUNyRSxLQUFLLEVBQUUsQ0FBQztRQUpnQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN2QyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFSdEUsZ0JBQVcsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUcvRCxvQkFBZSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO0lBT25FLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBOEI7UUFFekMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUV0QyxJQUFJLFlBQTBCLENBQUM7WUFFL0IsSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO2dCQUNyQyxZQUFZLEdBQUc7b0JBQ2QsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNO2lCQUNwQixDQUFDO2FBQ0Y7aUJBQU07Z0JBQ04sWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDM0I7WUFFRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDdEU7SUFDRixDQUFDO0lBRUQsUUFBUTtRQUVQLElBQUksQ0FBQyxnQkFBZ0IsQ0FDcEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLENBQUMsRUFDN0UsSUFBSSxDQUFDLFdBQVcsQ0FDaEIsQ0FBQztRQUVGLElBQUksQ0FBQyxnQkFBZ0IsQ0FDcEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxFQUNqRixJQUFJLENBQUMsZUFBZSxDQUNwQixDQUFDO0lBQ0gsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFZO1FBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7OztZQXBERCxTQUFTOzs7WUFORCxXQUFXO1lBSVgsYUFBYTtZQUhiLG9CQUFvQjtZQUNwQixxQkFBcUI7OztxQkFPNUIsS0FBSzswQkFHTCxNQUFNOzhCQUdOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L2dhdGUnO1xuaW1wb3J0IHsgUGFnaW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvY29uZmlnL3BhZ2luZy1jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUGFnaW5nQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9wYWdpbmcuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFBhZ2luZ0V2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3BhZ2luZy5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLmlkJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUGFnaW5nR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG5cblx0QElucHV0KClcblx0cGFnaW5nOiBib29sZWFuIHwgUGFnaW5nQ29uZmlnO1xuXG5cdEBPdXRwdXQoKVxuXHRwYWdlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHRAT3V0cHV0KClcblx0cGFnZVNpemVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRcdFx0ICBwcm90ZWN0ZWQgcmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0XHRcdCAgcHJvdGVjdGVkIHJlYWRvbmx5IHBhZ2luZ0NvbW1hbmRJbnZva2VyOiBQYWdpbmdDb21tYW5kSW52b2tlcixcblx0XHRcdFx0XHRcdCAgcHJvdGVjdGVkIHJlYWRvbmx5IHBhZ2luZ0V2ZW50UmVwb3NpdG9yeTogUGFnaW5nRXZlbnRSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxQYWdpbmdHYXRlPikge1xuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCdwYWdpbmcnLCBjaGFuZ2VzKSkge1xuXG5cdFx0XHRsZXQgcGFnaW5nQ29uZmlnOiBQYWdpbmdDb25maWc7XG5cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5wYWdpbmcgPT09ICdib29sZWFuJykge1xuXHRcdFx0XHRwYWdpbmdDb25maWcgPSB7XG5cdFx0XHRcdFx0ZW5hYmxlZDogdGhpcy5wYWdpbmdcblx0XHRcdFx0fTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBhZ2luZ0NvbmZpZyA9IHRoaXMucGFnaW5nO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnBhZ2luZ0NvbW1hbmRJbnZva2VyLnNldFBhZ2luZyhwYWdpbmdDb25maWcsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLnN1YnNjcmliZUFuZEVtaXQoXG5cdFx0XHR0aGlzLnBhZ2luZ0V2ZW50UmVwb3NpdG9yeS5vblBhZ2VDaGFuZ2UodGhpcy5zdHJ1Y3R1cmVJZC50b1JlYWRNb2RlbFJvb3RJZCgpKSxcblx0XHRcdHRoaXMucGFnZUNoYW5nZWRcblx0XHQpO1xuXG5cdFx0dGhpcy5zdWJzY3JpYmVBbmRFbWl0KFxuXHRcdFx0dGhpcy5wYWdpbmdFdmVudFJlcG9zaXRvcnkub25QYWdlU2l6ZUNoYW5nZSh0aGlzLnN0cnVjdHVyZUlkLnRvUmVhZE1vZGVsUm9vdElkKCkpLFxuXHRcdFx0dGhpcy5wYWdlU2l6ZUNoYW5nZWRcblx0XHQpO1xuXHR9XG5cblx0b25QYWdlQ2hhbmdlKHBhZ2U6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucGFnZUNoYW5nZWQuZW1pdChwYWdlKTtcblx0fVxuXG59XG4iXX0=