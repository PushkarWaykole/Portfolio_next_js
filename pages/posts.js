import { Container, Heading } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
// import Serom "../public/images/contents/youtube-50x-faster.jpg";

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        No posts yet
      </Heading>
    </Container>
  </Layout>
);

export default Posts;
export { getServerSideProps } from "../components/chakra";
