import Storefront from "./storefront";

export default async function Home({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  return <Storefront path={[]} query={await searchParams} />;
}
