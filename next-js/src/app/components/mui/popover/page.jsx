import { CONFIG } from 'src/global-config';

import { PopoverView } from 'src/sections/_examples/mui/popover-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Popover | MUI - ${CONFIG.appName}` };

export default function Page() {
  return <PopoverView />;
}
