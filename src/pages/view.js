import Layout from "../components/layout";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAPPContext } from "../store/store";

export default function View() {
    const [item, setItem] = useState(null);
    const params = useParams();
    const store = useAPPContext();

    useEffect(() => {
        const book = store.getItem(params.bookId);
        setItem(book);
    }, []);

    const itemStyles = {
        container: {
            display: "flex",
            gap: "20px",
            color: "white",
            width: "800px",
            margin: "0 auto",
        },
    };

    if (!item) {
        return <Layout>Item Not Found</Layout>;
    }

    return (
        <Layout>
            <div style={itemStyles.container}>
                <div>
                    <div>
                        {item?.cover ? (
                            <img
                                src={item.cover}
                                width="400"
                                alt={item.title}
                            />
                        ) : (
                            ""
                        )}
                    </div>
                </div>
                <div>
                    <h2>{item?.title}</h2>
                    <div>{item?.author}</div>
                    <div>{item?.intro}</div>
                    <div>{item?.completed ? "Finished" : "To Finish"}</div>
                    <div>{item?.review}</div>
                </div>
            </div>
        </Layout>
    );
}
