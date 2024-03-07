import client from "@/tina/__generated__/client"
import PageComponent from "@/components/app/page"

export default async function Page() {
  const result = await client.queries.pageAndNav({ relativePath: "home.md" })
  
  type Logo = {
    __typename: string;
    src: string;
    alt: string;
    url: string;
  };

  let logos: Logo[] = [];

  // Check if blocks exist
  if (result.data.page.blocks) {
    // Find the logo block
    const logoBlock = result.data.page.blocks.find(block => block && block.__typename === 'PageBlocksPageBlocksLogoCarousel');
    
    // Check if the block is of the correct type and extract the logos from the block, if it exists
    if (logoBlock && 'logos' in logoBlock && logoBlock.logos) {
      logos = logoBlock.logos.filter(logo => logo !== null).map(logo => logo ? { __typename: logo.__typename, src: logo.src || '', alt: logo.alt || '', url: '' } : null).filter(logo => logo !== null) as Logo[];
    }
  }

  return <PageComponent logos={logos} {...result} />
}