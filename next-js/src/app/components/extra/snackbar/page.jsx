import { CONFIG } from 'src/global-config';

import { SnackbarView } from 'src/sections/_examples/extra/snackbar-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Snackbar | Components - ${CONFIG.appName}` };

export default function Page() {
  return <SnackbarView />;
}
