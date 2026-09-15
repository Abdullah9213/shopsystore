import Storefront from "../storefront";

export default async function Page({ params, searchParams }: { params: Promise<{ path: string[] }>; searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const { path } = await params;
  return <Storefront path={path} query={await searchParams} />;
}
