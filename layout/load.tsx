import HMeta from "../components/headmeta";
export default function Load() {
    return (
        <div  style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            color: "#fff",
            backgroundColor: "#000021",
        }}>
            <HMeta/>
            <h1>Loding...</h1>
        </div>
    );
};