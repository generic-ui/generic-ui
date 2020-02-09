import { GuiPagingConfig } from '../../../ui-api/grid.api';
import { PagingConfig } from '../../../../../lib/structure/domain/paging/paging-config';
export declare class GridPagingConverter {
    convert(guiPaging: GuiPagingConfig): PagingConfig;
    private convertDisplay;
    private convertString;
    private convertEnum;
}
