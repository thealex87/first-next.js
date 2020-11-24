import Layout from "../layout";
import FaturasComponent from "../components/faturas/faturasComponent";

class Index extends React.Component {
  render() {
    return (
      <Layout pageTitle="Home">
        <FaturasComponent></FaturasComponent>
      </Layout>
    );
  }
}

export default Index;
