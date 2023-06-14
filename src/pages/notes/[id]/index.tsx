import { useRouter } from "next/router";


// This gets called on every request
export async function getServerSideProps({ params }: { params: { id: string } }) {
  // Fetch data from external API
  // const data = await getPage(params.id)
  // console.log(data);

  return {
    props: { id: params.id }
  }

}

export default function NotePage({ id }: { id: string }) {
  const router = useRouter();
  const { postId } = router.query;
  return (
    <>
      <div>note page {id}</div>
      {postId}
    </>
  )
}
