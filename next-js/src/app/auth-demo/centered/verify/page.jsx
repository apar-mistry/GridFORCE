import { CONFIG } from 'src/global-config';

import { CenteredVerifyView } from 'src/auth/view/auth-demo/centered';

// ----------------------------------------------------------------------

export const metadata = { title: `Verify | Layout centered - ${CONFIG.appName}` };

export default function Page() {
  return <CenteredVerifyView />;
}