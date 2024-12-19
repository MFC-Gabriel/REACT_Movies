import { List } from "../../components/List";
import { Banner } from "../../components/Banner";

export function Series() {
  return (
    <>
      <Banner title="Series" />
       <List category="tv" />   {/*o valor de category tem que ser como ta escrito na API */}
    </>
  );
}
