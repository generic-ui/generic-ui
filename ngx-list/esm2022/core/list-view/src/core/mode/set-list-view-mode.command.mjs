import { ListViewCommand } from '../list-view.command';
export class SetListViewModeCommand extends ListViewCommand {
    mode;
    constructor(listViewId, mode) {
        super(listViewId, 'SetListViewModeCommand');
        this.mode = mode;
    }
    getMode() {
        return this.mode;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWxpc3Qtdmlldy1tb2RlLmNvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvbGlzdC12aWV3L3NyYy9jb3JlL21vZGUvc2V0LWxpc3Qtdmlldy1tb2RlLmNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR3ZELE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxlQUFlO0lBR3RDO0lBRHBCLFlBQVksVUFBc0IsRUFDZCxJQUFrQjtRQUNyQyxLQUFLLENBQUMsVUFBVSxFQUFFLHdCQUF3QixDQUFDLENBQUM7UUFEekIsU0FBSSxHQUFKLElBQUksQ0FBYztJQUV0QyxDQUFDO0lBRUQsT0FBTztRQUNOLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0Vmlld01vZGUgfSBmcm9tICcuLi8uLi9kb21haW4vbW9kZS9saXN0LXZpZXctbW9kZSc7XG5pbXBvcnQgeyBMaXN0Vmlld0lkIH0gZnJvbSAnLi4vbGlzdC12aWV3LmlkJztcbmltcG9ydCB7IExpc3RWaWV3Q29tbWFuZCB9IGZyb20gJy4uL2xpc3Qtdmlldy5jb21tYW5kJztcblxuXG5leHBvcnQgY2xhc3MgU2V0TGlzdFZpZXdNb2RlQ29tbWFuZCBleHRlbmRzIExpc3RWaWV3Q29tbWFuZCB7XG5cblx0Y29uc3RydWN0b3IobGlzdFZpZXdJZDogTGlzdFZpZXdJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBtb2RlOiBMaXN0Vmlld01vZGUpIHtcblx0XHRzdXBlcihsaXN0Vmlld0lkLCAnU2V0TGlzdFZpZXdNb2RlQ29tbWFuZCcpO1xuXHR9XG5cblx0Z2V0TW9kZSgpOiBMaXN0Vmlld01vZGUge1xuXHRcdHJldHVybiB0aGlzLm1vZGU7XG5cdH1cblxufVxuIl19