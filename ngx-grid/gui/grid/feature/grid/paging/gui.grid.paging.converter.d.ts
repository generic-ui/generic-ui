import { GuiPaging } from '../../../domain-api/gui.grid.public-api';
import { PagingConfig } from '../../../../../structure/paging/domain-api/paging-config';
export declare class GuiGridPagingConverter {
    convert(guiPaging: GuiPaging): PagingConfig;
    private convertDisplay;
    private convertString;
    private convertEnum;
}
