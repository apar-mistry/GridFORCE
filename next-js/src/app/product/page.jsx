import { CONFIG } from 'src/global-config';
import { getProducts } from 'src/actions/product-ssr';

// ----------------------------------------------------------------------

export const metadata = { title: `Product shop - ${CONFIG.appName}` };

export default async function Page() {
  const { products } = await getProducts();

  return { products };
}
