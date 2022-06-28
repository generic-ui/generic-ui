import { ListViewCommand } from '../../list-view.command';
export class ToggleListViewSelectorCommand extends ListViewCommand {
    constructor(listViewId, enabled) {
        super(listViewId, 'ToggleListViewSelectorCommand');
        this.enabled = enabled;
    }
    isEnabled() {
        return this.enabled;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWxpc3Qtdmlldy1zZWxlY3Rvci5jb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL2xpc3Qtdmlldy9jb3JlL21vZGUvc2VsZWN0b3IvdG9nZ2xlLWxpc3Qtdmlldy1zZWxlY3Rvci5jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUcxRCxNQUFNLE9BQU8sNkJBQThCLFNBQVEsZUFBZTtJQUVqRSxZQUFZLFVBQXNCLEVBQ2QsT0FBZ0I7UUFDbkMsS0FBSyxDQUFDLFVBQVUsRUFBRSwrQkFBK0IsQ0FBQyxDQUFDO1FBRGhDLFlBQU8sR0FBUCxPQUFPLENBQVM7SUFFcEMsQ0FBQztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdFZpZXdJZCB9IGZyb20gJy4uLy4uL2xpc3Qtdmlldy5pZCc7XG5pbXBvcnQgeyBMaXN0Vmlld0NvbW1hbmQgfSBmcm9tICcuLi8uLi9saXN0LXZpZXcuY29tbWFuZCc7XG5cblxuZXhwb3J0IGNsYXNzIFRvZ2dsZUxpc3RWaWV3U2VsZWN0b3JDb21tYW5kIGV4dGVuZHMgTGlzdFZpZXdDb21tYW5kIHtcblxuXHRjb25zdHJ1Y3RvcihsaXN0Vmlld0lkOiBMaXN0Vmlld0lkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVuYWJsZWQ6IGJvb2xlYW4pIHtcblx0XHRzdXBlcihsaXN0Vmlld0lkLCAnVG9nZ2xlTGlzdFZpZXdTZWxlY3RvckNvbW1hbmQnKTtcblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkO1xuXHR9XG5cbn1cbiJdfQ==