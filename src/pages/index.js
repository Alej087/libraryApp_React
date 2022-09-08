import Book from "../components/book";
import Layout from "../components/layout";
import { useAPPContext } from "../store/store";

export default function Index() {
    const store = useAPPContext();

    const booksContainer = {
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
    };
    return (
        <Layout>
            <div style={booksContainer}>
                {store.items.map((item) => (
                    <Book key={item.id} item={item} />
                ))}
            </div>
        </Layout>
    );
}
