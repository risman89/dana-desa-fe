import Breadcrumb from "./breadcrumb";

export default function Admin_layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Breadcrumb />
      <main className="p-5">
        {props.children}
      </main>
    </div>
  );
}
