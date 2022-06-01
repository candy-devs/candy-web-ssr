import { NextPage } from "next";

const Index: NextPage = () => {
  return (<></>);
};

// export const getServerSideProps = async () => {
//   // const session = await getSession(context);
//   // if(context.res && !session) {
//   //   return {
//   //     redirect: {
//   //       permanent: false,
//   //       destination: '/login'
//   //     }
//   //   }
//   // }

//   return {
//     // props: { session },
//     redirect: {
//       permanent: false,
//       destination: '/home'
//     }
//   }
// }

// type PageParams = {
//   uuid: string;
// };

// type ContentPageProps = {
//   title: string;
//   description: string;
// };

// export const getStaticProps = async ({
//   params,
// }: GetStaticPropsContext<PageParams>): Promise<
//   GetStaticPropsResult<ContentPageProps>
// > => {
//   // const { title, description } = await fetch(".../entity", { uuid: params.uuid })
//   return {
//     props: {
//       title: params!.uuid,
//       description: params!.uuid,
//     },
//   };
// };

// export const getStaticPaths = async ({}): Promise<
//   GetStaticPathsResult<PageParams>
// > => {
//   return {
//     paths: [{ params: { uuid: "54b659a1-3f20-4440-90b5-9107bd62b5ca" } }],
//     fallback: false,
//   };
// };

// export async function getServerSideProps() {
// }

// export default ContentPage;

export default Index;
